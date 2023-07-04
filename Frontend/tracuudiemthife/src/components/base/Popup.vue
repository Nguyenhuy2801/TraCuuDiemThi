<template>
  <div v-if="isPopupVisible" class="form-popup">
    <div class="popup">
      <button @click="hidePopup">Close</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const isPopupVisible = ref(true);

    const showPopup = () => {
      isPopupVisible.value = true;
    };

    const hidePopup = () => {
      openNewTab();
      isPopupVisible.value = false;
    };

    const openNewTab = () => {
      window.open("https://shopee.vn/", "_blank");
    };

    return {
      isPopupVisible,
      showPopup,
      hidePopup,
    };
  },
};
</script>

<style scss>
.form-popup {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 999;
}
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url("@/assets/image/Bg_Chuc_mung.png");
  background-size: cover;
  padding: 20px;
  border: 1px solid gray;
  width: 521px;
  height: 450px;
}
</style>
