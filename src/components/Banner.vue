<script setup>
import bannerImg from "../assets/images/banner-showcase.png";
</script>

<template>
  <div id="banner" class="container">
    <div>
      <div class="banner-text">TASKKAISER</div>
      <p>
        Manage and monitor your daily, weekly tasks in one Desktop Application
      </p>
      <div class="banner-buttons">
        <button>Download</button>
        <button>Docs</button>
      </div>
    </div>
    <div><img :src="bannerImg" /></div>
  </div>
</template>

<style scoped>
.banner-buttons {
  margin-top: 20px;
}

.banner-buttons > button {
  border: solid var(--yellow) 2pt;
  border-radius: 30px;
  width: 120px;
  padding: 10px 20px;
  background-color: transparent;
  color: var(--white-primary);
}
#banner {
  margin-top: 50px;
}
#banner p {
  margin: 0;
  color: var(--white-secondary);
  max-width: 500px;
  font-size: 24px;
  text-indent: 24px;
  padding: 0px 20px;
}
.banner-text {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bolder;
  font-size: 40px;
  color: var(--yellow);
}
img {
  width: 80%;
  transform: perspective(1000px) rotateY(-30deg);
}

@media (min-width: 1024px) {
  #banner {
    display: flex;
    justify-content: center;
  }
  #banner div {
    padding: 10px;
  }

  .banner-text {
    font-size: 80px;
  }

  img {
    max-width: 600px;
  }
}
</style>
