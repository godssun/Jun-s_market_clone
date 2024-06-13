<script>
  import Router from "svelte-spa-router";
  import Login from "./pages/Login.svelte";
  import Main from "./pages/Main.svelte";
  import Sign from "./pages/Sign.svelte";
  import Write from "./pages/Write.svelte";
  import Notfound from "./pages/Notfound.svelte";
  import "./css/style.css";

  const routes = {
    "/": Main,
    "/login": Login,
    "/signup": Sign,
    "/write": Write,
    "*": Notfound,
  };
</script>

<Router {routes}></Router>
