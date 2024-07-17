<template>
  <component :is="AboutPrivacyComponents[aboutStore.state.data.lang.name]" />
</template>

<script setup>
import AboutPrivacyKo from './AboutPrivacyKo.vue';
import AboutPrivacyEn from './AboutPrivacyEn.vue';
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();

const AboutPrivacyComponents = {
  ko: AboutPrivacyKo,
  en: AboutPrivacyEn
};
</script>
