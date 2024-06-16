<script>
  import { getDatabase, ref, push } from "firebase/database";
  import { getStorage, ref as refImage, uploadBytes, getDownloadURL } from "firebase/storage";
  import Navigation from "../components/Navigation.svelte";

  let title;
  let price;
  let description;
  let place;
  let files;

  const storage = getStorage();
  const db = getDatabase();
  // 'file' comes from the Blob or File API
  // uploadBytes(storageRef, file).then((snapshot) => {
  //   console.log('Uploaded a blob or file!');
  // });

  async function writeUserData(imgUrl) {
    push(ref(db, "items/"), {
      title,
      price,
      description,
      place,
      insertAt: new Date().getTime(),
      imgUrl,
    });
    window.location.hash = "/";
  }

  const uploadFile = async () => {
    const file = files[0];
    const name = file.name;
    const imgRef = refImage(storage, name);
    const res = await uploadBytes(imgRef, file);
    const url = await getDownloadURL(imgRef);
    return url;
  };

  const handleSubmit = async () => {
    const url = await uploadFile();
    writeUserData(url);
  };
</script>

<form id="write-form" on:submit|preventDefault={handleSubmit}>
  <div>
    <label for="">이미지</label>
    <input type="file" bind:files id="image" name="image" />
  </div>
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

<Navigation location="write" />

<style>
  .write-btn2 {
    background-color: antiquewhite;
    margin: 10px;
    border-radius: 10px;
    padding: 5px 12px 5px 12px;
    cursor: pointer;
  }
</style>
