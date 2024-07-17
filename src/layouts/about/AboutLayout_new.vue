<template>
  <AboutMainHeader />
  <router-view />
  <AboutFooter />
  <AppTopButton />
  <AppVideoPlayModal />
</template>

<script setup>
import AboutMainHeader from '@/layouts/about/header/AboutMainHeader_new.vue';
import AboutFooter from '@/layouts/about/footer/AboutFooter.vue';
import AppTopButton from '@/components/AppTopButton.vue';
import AppVideoPlayModal from '@/components/AppVideoPlayModal.vue';
import { RouterView } from 'vue-router';
</script>
