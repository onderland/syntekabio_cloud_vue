<template>
  <header ref="aboutHeader" class="stb-header is-transparent" id="stb-about-header" :class="{
    'about-main-header': aboutStore.state.data.mainHeaderClass
  }">
    <div class="header-component">
      <div class="header-column header-title">
        <!-- 회사 로고 -->
        <div class="title-column title-logo">
          <router-link :to="{ name: 'main' }" class="title-link" @click="onScrollTop(), onCloseNav()">
            <span><i class="icon-logo-eng"></i></span>
          </router-link>
        </div>
      </div>

      <!-- 네비게이션 -->
      <div class="header-column header-nav view-pc-nav">
        <ul class="nav">
          <li v-for="(aboutItem, aboutIndex) in ABOUT_ROUTES" class="nav-item" :key="aboutIndex" :class="{
            'is-active': isActive(aboutItem)
          }" @mouseover="aboutItem.children ? onMouseOver(aboutItem) : null"
            @mouseleave="aboutItem.children ? onMouseLeave(aboutItem) : null">
            <router-link :to="{ name: aboutItem.name }" class="nav-link" @click="onScrollTop(), onCloseNav()">
              <span class="nav-text">{{ aboutItem.title }}</span>
            </router-link>

            <ul v-if="aboutItem.children" class="nav-list-sub">
              <li v-for="(aboutItemSub, AboutIndexSub) in aboutItem.children" class="nav-item" :key="AboutIndexSub"
                :class="{
                  'is-active':
                    aboutStore.state.data.route.name === aboutItemSub.name
                }">
                <router-link :to="{ name: aboutItemSub.name }" class="nav-link-sub"
                  @click="onScrollTop(), onCloseNav()">
                  <span class="nav-text">{{ aboutItemSub.title }}</span>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- PC box-newGnb -->
      <div class="btn-group">
        <a href="#none" class="btn-1">console</a>
        <a href="#none">Official</a>
      </div>
      <!-- //PC box-newGnb -->

      <div class="header-column view-mobile-nav" id="stb-about-header-mobile" :class="{ active: nav.open }">
        <button class="mobile-nav-button bg" @click="onOpenNav"></button>

        <div class="nav-mobile">
          <div class="box-mobile-nav">
            <div class="inner">
              <div class="top">
                <h3><a href="#none"></a></h3>
              </div>
              <div class="content">
                <ul>
                  <li class="no-arrow">
                    <a href="#none">Platform</a>
                  </li>
                  <li class="is-active">
                    <a href="#none" @click="toggleActive">Data materials</a>
                    <div class="depth-2">
                      <ul>
                        <li class="is-active"><a href="#none" @click="toggleActive">Data materials</a></li>
                        <li><a href="#none" @click="toggleActive">Introduction to Technology</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#none" @click="toggleActive">Scientific publications</a>
                    <div class="depth-2">
                      <ul>
                        <li><a href="#none" @click="toggleActive">Scientific Publications</a></li>
                        <li><a href="#none" @click="toggleActive">Case studies</a></li>
                      </ul>
                    </div>
                  </li>
                  <li class="no-arrow">
                    <a href="#none">Service</a>
                  </li>
                </ul>
              </div>
              <div class="bottom">
                <a href="#none" class="btn-1">console</a>
                <a href="#none">Official</a>
              </div>
              <button @click="onCloseNav" class="btn-close"></button>
              <div class="bottom-fixed">
                <a href="#none">Linkedin</a>
                <a href="#none">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <AboutRightMenu class="view-pc-nav" /> -->
    </div>
  </header>
  <div ref="gnbDim" class="is-hover-gnb"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reactive, watch } from 'vue';
import { useRoute } from 'vue-router';
// import AboutRightMenu from '@/layouts/about/header/AboutRightMenu.vue';
import { useAboutStore } from '@/stores/about';
import { useAbout } from '@/compositions/useAbout';
import { ABOUT_ROUTES } from '@/constants/route';

gsap.registerPlugin(ScrollTrigger);

const { onScrollTop } = useAbout();
const aboutStore = useAboutStore();
const route = useRoute();
const aboutHeader = ref(null);

function isActive(aboutItem) {
  if (aboutItem.children) {
    return aboutItem.children.some(child => aboutStore.state.data.route.name.includes(child.name));
  }
  return aboutStore.state.data.route.name.includes(aboutItem.name);
}

const nav = reactive({
  open: false
});

const onOpenNav = () => {
  nav.open = true;
};

const onCloseNav = () => {
  nav.open = false;
};

const gnbDim = ref(null);
const onMouseOver = (aboutItem) => {
  gnbDim.value.classList.add('is-hover');
  aboutHeader.value.querySelector('.header-component').classList.add('is-hover');
};

const onMouseLeave = (aboutItem) => {
  gnbDim.value.classList.remove('is-hover');
  aboutHeader.value.querySelector('.header-component').classList.remove('is-hover');
}

let scrollTriggerInstance = null;

const createScrollTrigger = () => {
  if (aboutHeader.value) {
    scrollTriggerInstance = ScrollTrigger.create({
      start: 'top -80',
      end: 99999,
      onUpdate: (self) => {
        if (window.scrollY > 100) {
          if (self.direction === -1) {
            gsap.to(aboutHeader.value, { y: 0, duration: 0.5, ease: 'power2.out' });
            aboutHeader.value.classList.add('is-scroll');
          } else {
            let cnt = -aboutHeader.value.offsetHeight - 5;
            gsap.to(aboutHeader.value, { y: cnt, duration: 0.5, ease: 'power2.out' });
            aboutHeader.value.classList.remove('is-scroll');
          }
        } else {
          aboutHeader.value.classList.remove('is-scroll');
        }
      },
    });
  }
};

onMounted(async () => {
  await nextTick();
  createScrollTrigger();
});

onBeforeUnmount(() => {
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
    scrollTriggerInstance = null;
  }
});

watch(route, async () => {
  await nextTick();
  if (scrollTriggerInstance) {
    scrollTriggerInstance.kill();
    scrollTriggerInstance = null;
  }
  createScrollTrigger();
});

// toggleActive 함수 추가
const toggleActive = (event) => {
  const parentLi = event.target.closest('li');
  if (parentLi) {
    parentLi.classList.toggle('is-active');
  }
};
</script>

<style scoped>
/* header 영역 시작 ================================================================================= */

/* 기본뷰 설정 */
.view-mobile-nav {
  display: none;
}

/* 헤더설정 */
#stb-about-header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: var(--stb-zindex-header);
  background-color: var(--stb-header-bg);

  /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); */
  &.is-scroll {
    border-bottom: 1px solid var(--transparent-b-16, rgba(0, 0, 0, 0.16));
    background: var(--Primary-1, #FFF);
  }
}

#stb-about-header .header-component {
  display: flex;
  align-items: center;
  height: 62px;
  justify-content: flex-start;
}

#stb-about-header .header-title {
  display: flex;
  align-items: center;
  margin-right: 38px;
}

#stb-about-header .header-title .title-sub {
  position: relative;
  color: var(--color-main);
  margin-left: 9px;
  padding-left: 12px;
}

#stb-about-header .header-title .title-sub:before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  margin-top: -6px;
  width: 1px;
  height: 13px;
  background-color: var(--stb-header-font-color);
  transition: 0.3s;
  color: var(--color-main);
}

#stb-about-header .header-title .icon-logo-eng {
  width: 160px;
  height: 26px;
  background-image: url('@/assets/static/images/logo/logo_new.svg');
  background-size: 100%;
  transition: 0.3s;
}

#stb-about-header .header-title .subtitle {
  color: var(--stb-header-font-color);
  font: var(--stb-font-body16B);
}

#stb-about-header .header-title .title-link {
  font: var(--stb-font-pretendard);
  font-weight: bold;
  color: var(--color-main);
}

/* 메인 ================================================== */
#stb-about-header .header-nav {
  /* margin-left: auto; */
  height: 100%;
}

#stb-about-header .header-nav .nav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 29px;
}

#stb-about-header .header-nav .nav-item {
  display: flex;
  align-items: center;
  height: 100%;
}

#stb-about-header .header-nav .nav-item:nth-of-type(4) {
  padding-right: 2rem;
}

#stb-about-header .header-nav .nav-link {
  display: flex;
  height: 100%;
  align-items: center;
  font: var(--stb-font-body16);
  border-radius: 16px;
  color: var(--color-sky);
}

#stb-about-header .header-nav .nav-text {
  flex: 1 1 auto;
  transition: opacity 0.3s ease-in-out;

  color: var(--Secondary-1, #000);

  /* Button/md */
  font-family: "Neue Haas Grotesk Display Pro";
  font-size: 18px;
  font-style: normal;
  font-weight: 450;
  line-height: 100%;
  /* 18px */
  text-transform: uppercase;
}

#stb-about-header .header-nav .nav-link .nav-text {
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    bottom: -34px;
    left: 50%;
    right: 0;
    width: 0;
    border-bottom: 2px solid var(--Secondary-1, #000);
    transition: .4s all;
    z-index: 20;
  }
}

/* 메인에 마우스를 올렸을때  */
#stb-about-header .header-nav .nav-link:hover .nav-text {
  opacity: 1;
}

#stb-about-header .header-nav .nav-link:hover .nav-text:hover {
  &::after {
    width: 100%;
    left: 0;
  }
}

/* 메인이 활성화 되었을때 active */
#stb-about-header .header-nav .nav-item.is-active>.nav-link .nav-text {
  &::after {
    width: 100%;
    left: 0;
  }
}

/* 서브 네비게이션 */
#stb-about-header .nav-item:hover>.nav-list-sub {
  display: block;
}

#stb-about-header .nav-list-sub {
  position: absolute;
  display: none;
  width: 100%;
  top: 100%;
  padding: 48px 0;
  background-color: white;
  /* border-radius: 0 0 0.5rem 0.5rem; */
  overflow: hidden;
  /* box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.25); */
}

#stb-about-header .nav-list-sub .nav-item {
  margin: 0;

  /* border-bottom: 1px solid #dddddd; */
  &+.nav-item {
    margin-top: 16px;
  }
}

#stb-about-header .nav-list-sub .nav-item:last-of-type {
  border-bottom: 0;
}

#stb-about-header .nav-list-sub .nav-item:hover {
  /* background-color: #dddddd; */
}

#stb-about-header .nav-list-sub .nav-link-sub {
  width: 100%;
  /* padding: 1rem 2rem; */
}

#stb-about-header .nav-list-sub .nav-item .nav-text {
  color: var(--Gray-6, #999);

  /* Title/md */
  font-family: "Neue Haas Grotesk Display Pro";
  font-size: 24px;
  font-style: normal;
  font-weight: 450;
  line-height: 130%;
  /* 31.2px */
  text-transform: none;

  &:hover {
    color: #000;
  }
}

#stb-about-header .nav-list-sub>.nav-item.is-active .nav-text {
  /* font-weight: bold;
  opacity: 1; */
}

/* 모바일 네비게이션 ================================================== */

/* 모바일 네비게이션 출력버튼 */
#stb-about-header-mobile .mobile-nav-button.bg {
  width: 30px;
  height: 30px;
  background-image: url('@/assets/static/images/icon/icon_menu.svg');
  cursor: pointer;
  transform: translateY(3px);
}

#stb-about-header-mobile .nav-mobile {
  display: none;
}

#stb-about-header-mobile.active .nav-mobile {
  display: block;
}

#stb-about-header-mobile .nav-mobile .nav {
  position: fixed;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  background-color: rgba(255, 255, 255);
  width: 50vw;
  height: 100vh;
  top: 0;
  bottom: 0;
  right: 0;
  padding-top: 6rem;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.24);
}

#stb-about-header-mobile .nav-mobile .nav>.nav-item:first-of-type {
  margin-top: 10vh;
}

#stb-about-header-mobile .nav-mobile .nav>.nav-item:hover {
  background-color: #dddddd;
}

/* 닫기버튼 */
#stb-about-header-mobile .nav-mobile .nav .close {
  position: absolute;
  top: 0;
  height: 64px;
  right: 48px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
}

#stb-about-header-mobile .nav-mobile .nav .close .button {
  width: 32px;
  height: 32px;
  background-image: var(--ic_close);
}

/* 메인링크버튼 */
#stb-about-header-mobile .header-title {
  flex-basis: 4rem;
}

#stb-about-header-mobile .nav-mobile .nav .link-main {
  padding: 1rem;
  color: white;
  background-color: var(--color-main);
  border-radius: 0.5rem;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

/* 메인 메뉴버튼 */
#stb-about-header-mobile .nav-item {
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  width: 100%;
  font-size: 1.2rem;
}

#stb-about-header-mobile .nav-item .nav-link {
  width: 100%;
  padding: 1.25rem 0 1.25rem 3rem;
  text-align: left;
}

#stb-about-header-mobile .nav-item.is-active>.nav-link {
  font-weight: bold;
  color: var(--color-main);
}

/* 모바일 네비게이션 서브링크 메뉴 */
#stb-about-header-mobile .nav-item.is-active .nav-list-sub {
  display: block;
}

#stb-about-header-mobile .nav-item .nav-list-sub {
  position: static;
  display: none;
  width: 100%;
  border-radius: 0;
}

#stb-about-header-mobile .nav-list-sub .nav-item {
  border: none;
}

#stb-about-header-mobile .nav-list-sub .nav-item .nav-text {
  padding: 1.25rem 0 1.25rem 2rem;
}

#stb-about-header-mobile .nav-list-sub .nav-item:hover {
  background: #ffffff;
  color: var(--color-main);
}

#stb-about-header-mobile .nav-list-sub .nav-item .nav-link-sub {
  display: block;
  width: 100%;
  text-align: left;
}

/* STB CLOUD Login 버튼 (모바일) */
#stb-about-header-mobile .nav-mobile .nav .btn-group {
  display: flex;
  flex-flow: column;
  margin: auto 0 4rem;
  align-items: center;
}

@media (max-width: 1280px) {
  #stb-about-header .header-nav .nav-item {}

  #stb-about-header .header-nav .nav-item:nth-of-type(4) {
    padding-right: 1rem;
  }
}

@media (max-width: 996px) {
  .view-pc-nav {
    display: none;
  }

  .view-mobile-nav {
    display: block;
  }

  #stb-about-header .header-component {
    justify-content: space-between;
  }
}

@media (max-width: 768px) {
  #stb-about-header-mobile .nav-mobile .nav {
    width: 100vw;
  }
}

/* 1024 이상 */
@media all and (min-width: 1024px) {
  #stb-about-header .header-component {
    height: 84px;
    max-width: 100%;
  }

  #stb-about-header .header-title .icon-logo-eng {
    width: 218px;
    height: 37px;
    background-image: url('@/assets/static/images/new/logo_pc.svg');
  }
}
</style>
