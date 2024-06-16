<script>
  import Router from "svelte-spa-router";
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import Sign from "./pages/Sign.svelte";
  import Write from "./pages/Write.svelte";
  import Notfound from "./pages/Notfound.svelte";
  import "./css/style.css";
  import { user$ } from "./store";
  import { GoogleAuthProvider, signInWithCredential, getAuth } from "firebase/auth";
  import { onMount } from "svelte";
  import Loading from "./pages/Loading.svelte";
  import Mypage from "./pages/Mypage.svelte";

  // const provider = new GoogleAuthProvider();
  // provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

  // let login = false;

  let isLoading = true;
  const auth = getAuth();

  const checkLogin = async () => {
    const token = localStorage.getItem("token");
    if (!token) return (isLoading = false);

    const credential = GoogleAuthProvider.credential(null, token);
    const result = await signInWithCredential(auth, credential);
    const user = result.user;
    user$.set(user);
    isLoading = false;
  };

  const routes = {
    "/": Main,
    "/signup": Sign,
    "/write": Write,
    "/my": Mypage,
    "*": Notfound,
  };

  onMount(() => checkLogin());
</script>

{#if isLoading}
  <Loading />
{:else if !$user$}
  <Login />
{:else}
  <Router {routes} />
{/if}
