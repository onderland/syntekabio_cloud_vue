<template>
  <div class="stb-popup" v-if="popupContainer == true">
    <div class="popup cloud">
      <img src="@/assets/stb/images/common/popup/move-eng-231006.webp" />
      <div class="footer">
        <a href="https://portal.syntekabio.com/" class="popup-today" alt="More"
          >More</a
        >
        <button class="popup-close" alt="Close" @click="closeMovePopup()">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const popupContainer = ref(true);

const closeMovePopup = () => {
  popupContainer.value = false;
};
</script>

<style>
.stb-popup {
  position: fixed;
  top: 156px;
  left: 400px;
  width: 350px;
  height: 420px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: ;
  z-index: var(--stb-zindex-modal);
  background-color: #ffffff;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
}

.stb-popup .popup {
  display: flex;
  flex-flow: column;
}

.stb-popup .popup .footer {
  display: flex;
  height: 50px;
  flex-direction: row;
}

.stb-popup .popup .footer a,
.stb-popup .popup .footer button {
  flex: 1 0 auto;
  width: 50%;
  line-height: 50px;
  text-align: center;
  font-weight: bold;
  color: #006a7b;
}

.stb-popup .popup .footer a:first-of-type {
  background-color: #006a7b;
  color: #ffffff;
}
</style>
