<template>
  <div
    class="popup-main large"
    ref="popupContainer"
    id="popup"
    v-if="aboutStore.state.data.popupActive"
  >
    <div class="popup-body bg-popup">
      <button
        class="popup-close"
        @click.prevent="aboutStore.setPopupActive({ status: false })"
      >
        &Cross;
      </button>
      <h1 class="popup-title">DDCS</h1>
      <h5 class="popup-title-sub">DeepMatcher Drug Candidate Service</h5>
      <p class="popup-text">
        AI-driven Total Solution Service from Hit to Drug Candidate in 2years
        for approximately $2M
      </p>

      <div class="img">
        <img src="@/assets/stb/images/about/stb-oss.png" />
      </div>
    </div>

    <div class="popup-footer" @mousedown="onDragMouseDown">
      <a class="popup-detail">See More</a>
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
#popup.popup-main.large {
  position: fixed;
  overflow: auto;
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-flow: column wrap;
  border-radius: 1rem;
  transition: var(--stb-popup-transition);
  background-color: #ffffff;
  top: 80px;
  left: 50px;
  z-index: 100;
}

.popup-main.large .popup-body {
  padding: 24px 32px;
  background: linear-gradient(-45deg, #071b23, #0f3a4b);
  display: flex;
  flex-flow: column wrap;
}

.popup-main.large .popup-body::before {
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

.popup-main.large .popup-body .popup-close {
  display: inline-block;
  position: relative;
  margin-left: auto;
  color: #ffffff;
  font-size: 2.4rem;
  margin-left: auto;
  cursor: pointer;
  z-index: 101;
}

.popup-main.large .popup-body .popup-title,
.popup-main.large .popup-body .popup-title-sub,
.popup-main.large .popup-body .popup-text {
  color: #ffffff;
  position: relative;
}

.popup-main.large .popup-body .popup-title {
  font-size: 3rem;
}

.popup-main.large .popup-body .popup-title-sub,
.popup-main.large .popup-body .popup-text {
  font-size: 1.25rem;
}
.popup-main.large .popup-body .popup-title-sub {
  line-height: 1.8;
}
.popup-main.large .popup-body .popup-text {
  margin-top: 1rem;
}

.popup-main.large .popup-body .img {
  position: relative;
  margin-top: 2rem;
}

.popup-main.large .popup-footer {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #113c7d, #267dff);
  /* background-color: linear(to right, #34C4F5 0%, #2BF8B0 35%, #108DF5 80%, #2BF8B0 100%); */
  height: 4.5rem;
}

.popup-main.large .popup-footer .popup-detail {
  color: #ffffff;
  font: var(--button);
}

#popup .is-active {
  opacity: 1;
  z-index: var(--stb-zindex-fixed);
  visibility: visible;
  background-color: var(--alert-bg);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
}
</style>
