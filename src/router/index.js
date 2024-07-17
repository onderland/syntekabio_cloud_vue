import { createRouter, createWebHistory } from 'vue-router';
import { useAboutStore } from '@/stores/about';
import { useAbout } from '@/compositions/useAbout';
import { routes } from './routes.1';

const { getMainHeaderClassIsActive } = useAbout();

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});

function loadCSS(href) {
  return new Promise((resolve, reject) => {
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    link.id = 'dynamic-style';
    link.onload = () => resolve();
    link.onerror = () => reject();
    document.head.appendChild(link);
  });
}

function removeCSS() {
  const styleElement = document.getElementById('dynamic-style');
  if (styleElement) {
    document.head.removeChild(styleElement);
  }
}

router.beforeEach(async (to, from, next) => {
  const aboutStore = useAboutStore();

  aboutStore.setAboutLangName({ name: to.params.locale });
  aboutStore.setAboutRouteName({ name: to.name });
  aboutStore.setAboutNavActive({ index: -1 });
  aboutStore.setAboutMainHeaderClassActive({
    status: getMainHeaderClassIsActive({
      routeName: to.name,
      scrollTop: document.documentElement.scrollTop
    })
  });

  // 다음에 라우트 변경을 진행하도록 하고 CSS 로드를 마지막에 처리
  next();

  // /service로 시작하는 경로로 이동할 때 CSS 파일 로드
  // if (to.path.startsWith('/service')) {
  //   if (!document.getElementById('dynamic-style')) {
  //     await loadCSS('/src/assets/static/css/style.css');
  //   }
  // } else {
  //   // /service가 아닌 경로로 이동할 때 CSS 파일 제거
  //   removeCSS();
  // }
});

export default router;
