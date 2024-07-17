<template>
  <AboutMainHeader />
  <router-view />
  <AboutFooter />
  <AppTopButton />
  <AppVideoPlayModal />
</template>

<script setup>
import AboutMainHeader from '@/layouts/about/header/AboutMainHeader.vue';
import AboutFooter from '@/layouts/about/footer/AboutFooter.vue';
import AppTopButton from '@/components/AppTopButton.vue';
import AppVideoPlayModal from '@/components/AppVideoPlayModal.vue';
import { RouterView } from 'vue-router';
</script>

<style lang="css">
@import '@/assets/css/stb.css';
@import '@/assets/css/style_en.css';
@import '@/assets/css/custom.css';
@import '@/assets/fontawesome/css/fontawesome-font.css';
@import 'https://unpkg.com/aos@next/dist/aos.css';
</style>

<style lang="scss">
@import '@/assets/static/scss/style.scss';
@import '@/assets/static/scss/new_style.scss';
</style>