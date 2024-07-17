<template>
  <!-- STB CLOUD Login 페이지로 이동하는 버튼 -->
  <div class="util-item" id="app-portal-button">
    <a :href="aboutStore.getAboutPortalUrl()">
      <img src="@/assets/stb/images/common/logo/cloud-color-text.webp" alt="" />
    </a>
  </div>
</template>

<script setup>
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();
</script>

<style scoped>
#app-portal-button {
  transition: all 0.3s;
  width: 160px;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 0px;
  background-image: linear-gradient(#fff, #fff),
    linear-gradient(
      to right,
      #34c4f5 0%,
      #2bf8b0 35%,
      #108df5 80%,
      #2bf8b0 100%
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
}
#app-portal-button img {
  display: block;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s;
}
#app-portal-button:hover {
  transform: scale(1.05);
}

/* 메인페이지 최하단 버튼 */
#stb-about-home #app-portal-button {
  width: 100%;
}

/* 에러페이지 버튼 */
#stb-about-error #app-portal-button {
  width: 100%;
  max-width: 256px;
  flex: 1 0 auto;
  height: 4rem;
}
#stb-about-error #app-portal-button a {
  display: flex;
  justify-content: center;
  width: 256px;
  height: 100%;
  padding: 0px 1rem;
}

#stb-about-error #app-portal-button a > img {
  object-fit: contain;
}
</style>
