<template>
  <main class="stb-about-sub publication" id="stb-about-case">
    <AppSubTop additionalClass="bg-4" additionalClass2="gap" title="PUBLICATION" text="" :titleDelay="200" :textDelay="400"/>

    <AppSubPageNav />

    <div class="main-contents fixedShow">
      <div class="main-container page-component">
        <section class="about-section">
          <article
            class="card-image"
            v-for="publicItem in limitData.data"
            :key="publicItem.id"
          >
            <a :href="publicItem.fileLink">
              <div class="img p-0">
                <div :class="publicItem.img"></div>
              </div>
              <h6 class="title">{{ publicItem.title }}</h6>
            </a>
          </article>
        </section>
      </div>

      <AppPagenation
        @update:data="limitData.data = $event"
        :data="data"
        :limit="6"
      />
    </div>
  </main>
</template>

<script setup>
import { reactive } from 'vue';

import AppPagenation from '@/components/AppPagenation.vue';
import AppSubPageHeader from '@/components/AppSubPageHeader.vue';
import AppSubPageNav from '@/components/AppSubPageNav.vue';

import jsonDataPublication from '@/assets/data/publication.json';

import AppSubTop from '@/components/AppSubTopService.vue';

const data = [...jsonDataPublication.post].reverse();
const limitData = reactive({ data: [] });
</script>

<style>
.publication h6.title {
  width: 100%;
  height: 95px;
  overflow: hidden;
  line-height: 1.5;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  word-wrap: break-word;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  margin: 0 auto;
  margin-bottom: 25px;
}

.publication .img {
  background-color: #ffffff;
}
.publication img {
  transform: translateY(25%);
}
</style>
