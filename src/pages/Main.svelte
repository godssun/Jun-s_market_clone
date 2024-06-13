<script>
  let hour = 20;
  let min = 10;
  let sec = 0;

  setInterval(function () {
    sec = sec + 1;
  }, 1000);
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
  <a class="write-btn" href="#/write">+ 글쓰기</a>
</main>

<footer>
  <div class="footer-block">
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/home.svg" alt="home" />
      </div>
      <div class="footer-icons__desc">홈</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/doc.svg" alt="doc" />
      </div>
      <div class="footer-icons__desc">동네생활</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/location.svg" alt="location" />
      </div>
      <div class="footer-icons__desc">내 근처</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/chat.svg" alt="chat" />
      </div>
      <div class="footer-icons__desc">채팅</div>
    </div>
    <div class="footer-icons">
      <div class="footer-icons__img">
        <img src="assets/user.svg" alt="user" />
      </div>
      <div class="footer-icons__desc">나의 당근</div>
    </div>
  </div>
</footer>
<div class="media-info-msg">Screen is too big!</div>
