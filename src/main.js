import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import { i18n } from './locales';

import AOS from 'aos';      // AOS 스크립트 가져오기
import 'aos/dist/aos.css';  // AOS 스타일 불러오기

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.config.globalProperties.$t = i18n.global.t;

// AOS 초기화
AOS.init();

// 페이지 URL 변경시 상단으로 이동하는 스크립트 추가
router.afterEach((to, from) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 200);
});

app.mount('#stb');