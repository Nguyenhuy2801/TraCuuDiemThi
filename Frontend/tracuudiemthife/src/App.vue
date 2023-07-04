<template>
  <Navbar></Navbar>
  <!-- <div>{{ notes }}</div> -->
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
  <Popup></Popup>
</template>
<script setup>
import { onMounted, onCreated, ref } from "vue";
import { useNotesStore } from "@/store/moduleNotes";
import Navbar from "@/components/base/Navbar.vue";
import Popup from "@/components/base/Popup.vue";
import { computed } from "vue";

const storeNotes = useNotesStore();
const notes = ref();
const showCongratulations = ref(true);
const openNewTab = () => {
  window.open("https://shopee.vn/", "_blank");
};

const closePopup = () => {
  openNewTab();
};

onMounted(() => {
  storeNotes.getNotes();
  notes.value = storeNotes.$state;
  // setTimeout(() => {
  //   openNewTab();
  // }, 6000); // 60000 milliseconds = 1 phút
});
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
