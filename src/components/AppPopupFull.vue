<template>
  <div
    class="popup-main full"
    ref="popupContainer"
    id="popup"
    v-if="aboutStore.state.data.popupActive"
  >
    <div class="popup-container">
      <div class="popup-body">
        <div class="popup-contents">
          <img src="@/assets/stb/images/common/popup/popup-L-1.webp" />
          <img src="@/assets/stb/images/common/popup/popup-L-2.webp" />
        </div>
      </div>
      <button
        class="popup-close"
        @click.prevent="aboutStore.setPopupActive({ status: false })"
      >
        <span class="icon-close"></span>
      </button>
    </div>
  </div>

  <div
    class="popup-main small"
    ref="popupContainer"
    id="popup"
    v-if="aboutStore.state.data.popupActive"
  >
    <div class="popup-body bg-popup">
      <h1 class="popup-title">DDCS</h1>
      <h5 class="popup-title-sub">DeepMatcher Drug Candidate Service</h5>
      <p class="popup-text">
        AI-driven Total Solution Service from Hit to Drug Candidate in 2years
        for approximately $2M
      </p>
    </div>

    <div class="popup-footer">
      <a class="popup-detail" href="/download/Syntekabio-DDC-Serivice-1024.pdf"
        >See More</a
      >
      <button
        class="close"
        @click.prevent="aboutStore.setPopupActive({ status: false })"
      >
        Close
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();
const popupContainer = ref(null);
</script>

<style scoped>
/* NEW 팝업 */
#popup.popup-main.full {
  position: fixed;
  overflow: hidden;
  transition: var(--stb-popup-transition);
  background-color: rgba(0, 0, 0, 0.5);
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  z-index: 100000;
}

.popup-main.full .popup-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  flex: 1 1 80%;
  width: 50%;
  max-width: 1280px;
}
.popup-main.full .popup-body {
  padding: 1rem 0.5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  overflow: hidden;
  width: 100%;
}
.popup-main.full .popup-body .popup-contents {
  display: flex;
  flex-flow: column;
  overflow: auto;
  width: 100%;
  height: 90vh;
}

.popup-main.full .popup-body .popup-contents img {
  width: 100%;
}

.popup-main.full .popup-container .popup-close {
  margin-bottom: auto;
  margin-left: 2rem;
  color: #ffffff;
  font-size: 4rem;
  cursor: pointer;
  z-index: 101;
}

#popup .is-active {
  opacity: 1;
  z-index: var(--stb-zindex-fixed);
  visibility: visible;
  background-color: var(--alert-bg);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
}

#popup.popup-main.small {
  position: fixed;
  overflow: auto;
  width: 100%;
  max-width: 560px;
  flex-flow: column nowrap;
  border-radius: 1rem;
  transition: var(--stb-popup-transition);
  background-color: #ffffff;
  top: 80px;
  left: 50px;
  z-index: 100;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);
}
.popup-main.small .popup-body {
  padding: 24px 32px;
  background: linear-gradient(-45deg, #071b23, #0f3a4b);
  display: flex;
  flex-flow: column wrap;
}
.popup-main.small .popup-body::before {
  content: '';
  background: var(--cloud-logo-color);
  background-size: cover;
  background-position: center center;
  opacity: 0.5;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
}
.popup-main.small .popup-body .popup-close {
  display: inline-block;
  position: relative;
  margin-left: auto;
  color: #ffffff;
  font-size: 2.4rem;
  margin-left: auto;
  cursor: pointer;
  z-index: 101;
}
.popup-main.small .popup-body .popup-title,
.popup-main.small .popup-body .popup-title-sub,
.popup-main.small .popup-body .popup-text {
  color: #ffffff;
  position: relative;
}

.popup-main.small .popup-body .popup-title {
  font-size: 3rem;
}

.popup-main.small .popup-body .popup-title-sub,
.popup-main.small .popup-body .popup-text {
  font-size: 1.25rem;
}
.popup-main.small .popup-body .popup-title-sub {
  line-height: 1.8;
}
.popup-main.small .popup-body .popup-text {
  margin-top: 1rem;
}

.popup-main.small .popup-footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #113c7d, #267dff);
  /* background-color: linear(to right, #34C4F5 0%, #2BF8B0 35%, #108DF5 80%, #2BF8B0 100%); */
  height: 4.5rem;
}

.popup-main.small .popup-footer .popup-detail,
.popup-main.small .popup-footer .close {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 50%;
  color: #ffffff;
  font: var(--button);
  height: 100%;
}

.popup-main.small .popup-footer .close {
  flex: 1 1 50%;
  color: #ffffff;
  font: var(--button);
  background-color: #ffffff;
  color: var(--color-main);
  height: 100%;
}

#popup .is-active {
  opacity: 1;
  z-index: var(--stb-zindex-fixed);
  visibility: visible;
  background-color: var(--alert-bg);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
}

@media (min-width: 1281px) {
  .popup-main.full {
    display: block;
  }

  .popup-main.small {
    display: none;
  }
}
@media (max-width: 1280px) {
  .popup-main.full {
    display: none;
  }

  .popup-main.small {
    display: flex;
  }
}
@media (max-width: 768px) {
  #popup.popup-main.small {
    width: 90vw;
    max-width: none;
    height: 80vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 0px 5rem rgba(0, 0, 0, 0.75);
  }

  .popup-main.small .popup-body {
    width: 100%;
    height: calc(100% - 4rem);
    flex-flow: column nowrap;
    justify-content: center;
  }

  .popup-main.small .popup-body .popup-title {
    font-size: 5rem;
  }

  .popup-main.small .popup-body .popup-title {
    font-size: 5rem;
  }
  .popup-main.small .popup-body .popup-title-sub,
  .popup-main.small .popup-body .popup-text {
    color: #ffffff;
    position: relative;
    font-size: 1.625rem;
  }
  .popup-main.small .popup-footer .popup-detail,
  .popup-main.small .popup-footer .close {
    font-size: 1.2rem;
  }
}

.popup-main.full .popup-body .popup-contents::-webkit-scrollbar {
  width: 0.5rem;
  background-color: var(--color-gray-7);
}
.popup-main.full .popup-body .popup-contents::-webkit-scrollbar-thumb {
  background-color: var(--color-gray-2);
  border-radius: calc(0.5rem / 2);
}
</style>
