<template>
  <div class="modal-video is-active" v-if="aboutStore.state.data.video.active">
    <div class="modal">
      <div class="modal-actions">
        <button @click.prevent="aboutStore.setVideo({ status: false })" class="btn-close">
          <span class="icon-close"></span>
        </button>
      </div>

      <div class="modal-contents" v-if="aboutStore.state.data.video.name == 'intro'">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/W8HmQCnc7vc" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>

      <div class="modal-contents" v-else-if="aboutStore.state.data.video.name == 'guide'">
        <iframe width="800" height="450" src="https://www.youtube.com/embed/zocoJpAm59A" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>

      <div class="modal-contents" v-else-if="aboutStore.state.data.video.name == 'technology'">
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/zkjjaIq8zxQ" title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>

      <div class="modal-contents" v-else-if="aboutStore.state.data.video.name == 'promotion'">
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/ynwyJev6Hxs?si=aIDZfA-i4Ai2e5b9"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();
</script>

<style scoped>
.modal-video {
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--stb-modal-bg-color);
  z-index: var(--stb-zindex-modal-backdrop);
  padding: 80px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  transition: var(--stb-popup-transition);
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
}

.modal-video.is-active {
  opacity: 1;
  z-index: var(--stb-zindex-fixed);
  visibility: visible;
}

.modal-video .modal {
  width: 1200px;
  border-radius: 0px;
  background-color: transparent;
}

.modal-video .modal-contents {
  display: flex;
  justify-content: center;
  padding: 0;
  border-radius: 5px;
}

.modal-video .modal-actions {
  display: flex;
  border-top: 0px;
  justify-content: right;
}

.modal-video .modal-actions .btn-close {
  height: 45px;
}
</style>
