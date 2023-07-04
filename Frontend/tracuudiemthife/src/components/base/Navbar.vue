<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <div class="flex">
          <div class="logo-app"></div>
          <div class="logo">Tra Cứu Điểm Thi</div>
        </div>
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="{ 'is-active': showExpand }"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
        @click="showExpand = !showExpand"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div
      id="navbarBasicExample"
      class="navbar-menu"
      :class="{ 'is-active': showExpand }"
    >
      <div class="navbar-start">
        <router-link class="navbar-item" to="/diemthiTHPT"
          >Điểm tốt nghiệp THPT</router-link
        >
        <router-link class="navbar-item" to="/diemthi10"
          >Điểm thi vào 10</router-link
        >
        <router-link class="navbar-item" to="/thongtintuyensinh"
          >Thông tin tuyển sinh</router-link
        >
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
const showExpand = ref(false);
</script>
<style scss>
.navbar {
  padding: 0 !important;
  .navbar-brand {
    align-items: center;
  }
}
.flex {
  display: flex;
  align-items: center;
}
.logo-app {
  background: url("@/assets/image/logoApp1.png");
  background-size: cover;
  width: 70px;
  height: 60px;
}
.logo {
  color: #285430;
  font-size: 26px;
  font-weight: 500;
  padding: 0 12px;
}
</style>
