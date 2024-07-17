import { reactive } from 'vue';
import { defineStore } from 'pinia';

export const useAboutStore = defineStore('about', () => {
  const state = reactive({
    data: {
      portal: {
        name: 'portal' // devportal | portal
      },
      lang: {
        name: 'en' // en | ko
      },
      route: {
        name: 'main'
      },
      element: {},
      video: {
        active: '',
        name: ''
      },
      navActiveIndex: -1,
      mainHeaderClass: true,
      topBtnActive: false,
      popupActive: true,
      targetAni: [],
      scroll: 0
    }
  });

  const getters = {
    /**
     * 포탈 (devportal | portal) 종류에 따른 URL 가져오기
     *
     * @returns {string} 포탈 URL
     */
    getAboutPortalUrl() {
      return `https://${state.data.portal.name}.syntekabio.com`;
    },

    /**
     * 현재 설정된 사이트 언어가 영어인지 여부 가져오기
     *
     * @returns {boolean} 현재 설정된 사이트 언어가 영어인지 여부
     */
    getAboutLangIsEn() {
      return state.data.lang.name === 'en';
    },

    /**
     * 네비게이션 활성화 여부 가져오기
     *
     * @param {Object} options
     * @param {number} options.index - 네비게이션 인덱스
     * @returns {boolean} 네비게이션 활성화 여부
     */
    getAboutNavIsActive(options) {
      const { index } = options;

      if (index >= 0) return state.data.navActiveIndex === index;
    }
  };

  const actions = {
    /**
     * 포탈 이름 저장
     *
     * @param {Object} options
     * @param {string} options.name - 포탈 이름 (devportal | portal)
     */
    setAboutPortalName(options) {
      const { name } = options;

      if (name) state.data.portal.name = name;
    },

    /**
     * 사이트 언어 저장
     *
     * @param {Object} options
     * @param {string} options.name - 언어 이름 (en | ko)
     */
    setAboutLangName(options) {
      const { name } = options;

      if (name) state.data.lang.name = name;
    },

    /**
     * 라우터 이름 저장
     *
     * @param {Object} options
     * @param {string} options.name - 라우터 이름
     */
    setAboutRouteName(options) {
      const { name } = options;

      if (name) state.data.route.name = name;
    },

    /**
     * 엘리먼트 저장
     *
     * @param {Object} options
     * @param {string} options.id - 엘리먼트 아이디
     * @param {VueElement} options.el - 엘리먼트 데이터
     */
    setAboutNavElement(options) {
      const { id, el } = options;

      state.data.element[id] = el;

      for (const key in state.data.element) {
        if (!state.data.element[key]) {
          delete state.data.element[key];
        }
      }
    },

    /**
     * 네비게이션 활성화된 인덱스 저장
     *
     * @param {Object} options
     * @param {number} options.index - 네비게이션 활성화된 인덱스
     */
    setAboutNavActive(options) {
      const { index } = options;

      if (index >= 0) {
        state.data.navActiveIndex = index;
      } else {
        state.data.navActiveIndex = -1;
      }
    },

    /**
     * 메인 헤더 (about-main-header) 클래스 적용 여부 저장
     *
     * @param {Object} options
     * @param {boolean} options.status - 메인 헤더 about-main-header 클래스 적용 여부
     */
    setAboutMainHeaderClassActive(options) {
      const { status } = options;

      state.data.mainHeaderClass = status;
    },

    /**
     * 맨 위로 가기 버튼 표시 여부 저장
     *
     * @param {Object} options
     * @param {boolean} options.status - 맨 위로 가기 버튼 표시 여부
     */
    setAboutTopBtnActive(options) {
      const { status } = options;

      state.data.topBtnActive = status;
    },

    /**
     * 팝업 표시 여부 저장
     *
     * @param {Object} options
     * @param {boolean} options.status - 팝업 표시 여부
     */
    setPopupActive(options) {
      const { status } = options;

      state.data.popupActive = status;
    },

    /**
     * 비디오 파일 이름 및 표시 여부 저장
     *
     * @param {Object} options
     * @param {boolean} options.status - 비디오 표시 여부
     * @param {?string} options.name - 비디오 이름
     */
    setVideo(options) {
      const { status, name } = options;

      const stateData = state.data.video;

      stateData.active = status;
      stateData.name = name ? name : '';
    },

    /**
     * 스크롤값 체크
     *
     * @param {Object} options
     * @param {number} options.scroll - 현재스크롤값
     */
    setScroll(options) {
      const { status } = options;

      state.data.scroll = status;
    },

    /**
     * @param {Object} options
     * @param {Array} options.targetAni - 스크롤 애니메이션 대상
     */
    setAniTarget(options) {
      const { status } = options;
      const targetList = [];
      const browserH = window.innerHeight;

      if (targetList.length <= status.length) {
        status.forEach((el) => {
          if (el.offsetTop - (browserH / 100) * 70 < state.data.scroll) {
            el.classList.add('activeShow');
          } else if (state.data.scroll == 0) {
            el.classList.remove('activeShow');
          }
        });
      }
    }
  };

  return {
    state,
    ...getters,
    ...actions
  };
});
