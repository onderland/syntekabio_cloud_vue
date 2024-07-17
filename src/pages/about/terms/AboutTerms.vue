<template>
  <component :is="AboutTermsComponents[aboutStore.state.data.lang.name]" />
</template>

<script setup>
import AboutTermsKo from './AboutTermsKo.vue';
import AboutTermsEn from './AboutTermsEn.vue';
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();

const AboutTermsComponents = {
  ko: AboutTermsKo,
  en: AboutTermsEn
};
</script>
