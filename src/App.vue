<template>
  <RouterView />
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { RouterView, useRouter } from 'vue-router';
import { useAboutStore } from '@/stores/about';
import { useI18n } from 'vue-i18n';
import { useAbout } from '@/compositions/useAbout';

const aboutStore = useAboutStore();

const { locale } = useI18n();

const router = useRouter();

const { getMainHeaderClassIsActive } = useAbout();

aboutStore.setAboutPortalName({
  name: import.meta.env.VITE_BUILD_MODE === 'dev' ? 'devportal' : 'portal'
});

onMounted(() => {
  document.addEventListener('scroll', () => {
    const docScrollTop = document.documentElement.scrollTop;
    const docAniTarget = document.querySelectorAll('.main-contents');
    const elements = Object.values(aboutStore.state.data.element);
    const navActiveItmes = elements
      .slice(1, elements.length)
      .map((item) => item.getBoundingClientRect().top <= 0);
    const navActiveIndex = navActiveItmes.filter((item) => item).length;

    aboutStore.setAboutNavActive({
      index: navActiveIndex
    });

    aboutStore.setAboutMainHeaderClassActive({
      status: getMainHeaderClassIsActive({
        routeName: aboutStore.state.data.route.name,
        scrollTop: docScrollTop
      })
    });

    aboutStore.setAboutTopBtnActive({ status: docScrollTop > 0 });
    aboutStore.setScroll({ status: docScrollTop });
    aboutStore.setAniTarget({ status: docAniTarget });
  });
});

watch(
  aboutStore.state.data.lang,
  (cur) => {
    locale.value = cur.name;

    router.push({ path: `/${cur.name}/${aboutStore.state.data.route.name}` });
  },
  { immediate: false }
);
</script>

