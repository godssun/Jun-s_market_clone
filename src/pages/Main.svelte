<script>
  import { onMount } from "svelte";
  import Footer from "../components/Footer.svelte";
  import { getDatabase, ref, onValue } from "firebase/database";
  let hour = 20;
  let min = 10;
  let sec = 0;

  $: items = [];
  setInterval(function () {
    sec = sec + 1;
  }, 1000);

  const db = getDatabase();
  const itemsRef = ref(db, "items/");

  onMount(() => {
    onValue(itemsRef, (snapshot) => {
      const data = snapshot.val();
      items = Object.values(data);
    });
  });
</script>

<header>
  <div class="info-bar">
    <div class="info-bar__time">{hour}:{min}:{sec}</div>
    <div class="info-bar__icons">
      <img src="assets/chart-bar.svg" alt="chart-bar" />
      <img src="assets/wifi.svg" alt="wifi" />
      <img src="assets/battery.svg" alt="battery" />
    </div>
  </div>
  <div class="menu-bar">
    <div class="menu-bar__location">
      <div class="menu-bar__location-wirte">수서1동</div>
      <div class="menu-bar__location-icon">
        <img src="assets/arrow.svg" alt="arrow" />
      </div>
    </div>
    <div class="menu-bar__icons">
      <img src="assets/search.svg" alt="serach" />
      <img src="assets/menu.svg" alt="menu" />
      <div class="dot">
        <span class="menu-bar__icons-alret">1</span>
        <img src="assets/alert.svg" alt="alert" />
      </div>
    </div>
  </div>
</header>

<!--TODO: 메인 링크부분 수정하기-->
<main>
  {#each items as item}
    <div class="item-list">
      <div class="item-list__img"></div>
      <div class="item-list__info">
        <div class="item-list__info-title">{item.title}</div>
        <div class="item-list__info-price">{item.price}</div>
        <div class="item-list__info-meta">{item.place}</div>
        <div>{item.description}</div>
      </div>
    </div>
  {/each}
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<Footer location={"home"} />
<div class="media-info-msg">Screen is too big!</div>
