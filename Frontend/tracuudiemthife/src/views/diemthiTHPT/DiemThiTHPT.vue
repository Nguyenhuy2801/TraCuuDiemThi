<template>
  <div class="flex m-4">
    <!-- <input v-model="textSearch" /> -->
    <input
      v-model="textSearch"
      class="input is-normal mr-3"
      type="text"
      placeholder="Nhập SBD"
    />
    <div class="buttons">
      <button class="button is-success" @click="handleSearch">Tra cứu</button>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const textSearch = ref();
const handleSearch = () => {
  console.log(textSearch.value);
};
</script>
<style></style>
<style scss>
.flex {
  display: flex;
}
.m-4 {
  margin: 16px;
}
.mr-3 {
  margin-right: 12px;
}
.is-normal:focus {
  border-color: #00d1b2;
  box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
}
</style>
