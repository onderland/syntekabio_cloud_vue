<template>
  <router-link
    v-if="type === 'faq'"
    :to="{ name: type }"
    class="platform-button"
    :class="type"
    @click="onScrollTop()"
  >
    <span class="icon-view"></span>
    <p class="flex">
      <span class="action-text"> View </span>
      <span class="title-text"> FAQ </span>
    </p>
  </router-link>

  <template v-if="type === 'faq-down'">
    <a
      class="platform-button"
      :href="`/download/stb_cloud_faq_${aboutStore.state.data.lang.name}.pdf`"
      :download="`stb_cloud_faq_${aboutStore.state.data.lang.name}.pdf`"
      @click="onScrollTop()"
    >
      <span class="icon-download"></span>
      <p class="flex">
        <span class="action-text"> Download </span>
        <span class="title-text"> FAQ </span>
      </p>
    </a>
  </template>

  <template v-if="type === 'intro'">
    <button
      class="platform-button"
      :class="type"
      @click.prevent="aboutStore.setVideo({ status: true, name: type })"
    >
      <span class="icon-play"></span>
      <p class="flex">
        <span>
          <span class="action-text"> Play | </span>
          <span class="action-text"> Intro </span>
        </span>
        <span class="title-text"> DeepMatcher® </span>
      </p>
    </button>
  </template>

  <template v-if="type === 'guide'">
    <button
      class="platform-button"
      :class="type"
      @click.prevent="aboutStore.setVideo({ status: true, name: type })"
    >
      <span class="icon-play"></span>
      <p class="flex">
        <span>
          <span class="action-text"> Play | </span>
          <span class="action-text"> User Guide </span>
        </span>
        <span class="title-text"> DeepMatcher® </span>
      </p>
    </button>
  </template>
</template>

<script setup>
import { useAboutStore } from '@/stores/about';
import { useAbout } from '@/compositions/useAbout';

const aboutStore = useAboutStore();

const { onScrollTop } = useAbout();

defineProps({
  type: String
});
</script>

<style scoped>
.platform-button .action-text:last-of-type {
  font-weight: 700;
}
.platform-button:not(:hover) .action-text:last-of-type {
  color: var(--color-main);
}
.platform-button {
  display: flex;
  /* flex: 0 0 220px; */
  flex: 0 0 110px;
  padding: 15px;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #042c48;
}
.platform-button:hover {
  background-color: var(--color-main);
  border: 1px solid rgba(0, 0, 0, 0);
}
.platform-button:hover .action-text,
.platform-button:hover .title-text {
  color: white;
}
.platform-button p.flex {
  display: flex;
  flex-flow: column wrap;
  gap: 5px;
  font: bold 16px var(--stb-font-pretendard);
  text-align: right;
}
.platform-button .icon-view {
  width: 45px;
  height: 45px;
  background-image: url(@/assets/stb/images/common/icon/ic_view_b.svg);
}
.platform-button .icon-download {
  width: 30px;
  height: 30px;
  background-image: url(@/assets/stb/images/common/icon/ic_download_b.svg);
}
.platform-button .icon-play {
  width: 32px;
  height: 32px;
  background-image: url(@/assets/stb/images/common/icon/ic_play_b.svg);
}
.platform-button:hover .icon-view {
  background-image: url(@/assets/stb/images/common/icon/ic_view_w.svg);
}
.platform-button:hover .icon-play {
  background-image: url(@/assets/stb/images/common/icon/ic_play_w.svg);
}
.platform-button:hover .icon-download {
  background-image: url(@/assets/stb/images/common/icon/ic_download_w.svg);
}
</style>
