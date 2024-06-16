<script>
  import { getDatabase, ref, push } from "firebase/database";
  import Footer from "../components/Footer.svelte";

  let title;
  let price;
  let description;
  let place;

  function writeUserData() {
    const db = getDatabase();
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
    });
    window.location.hash = "/";
  }
</script>

<form id="write-form" on:submit|preventDefault={writeUserData}>
  <!-- <div>
    <label for="">이미지</label>
    <input type="file" id="image" name="image" />
  </div> -->
  <div>
    <label for="">제목</label>
    <input type="text" id="title" name="title" bind:value={title} />
  </div>
  <div>
    <label for="">가격</label>
    <input type="number" id="price" name="price" bind:value={price} />
  </div>
  <div>
    <label for="">설명</label>
    <input type="text" id="description" name="description" bind:value={description} />
  </div>
  <div>
    <label for="">장소</label>
    <input type="text" id="place" name="place" bind:value={place} />
  </div>
  <div><button class="write-btn2" type="submit">submit</button></div>
</form>

<Footer location="write" />

<style>
  .write-btn2 {
    background-color: antiquewhite;
    margin: 10px;
    border-radius: 10px;
    padding: 5px 12px 5px 12px;
    cursor: pointer;
  }
</style>
