<template>
  <main class="stb-about-sub studies" id="stb-about-case">
    <AppSubTop additionalClass="bg-4" additionalClass2="gap" title="PUBLICATION" :titleDelay="200" :textDelay="400"/>

    <AppSubPageNav />

    <div class="main-contents fixedShow">
      <div class="main-container page-component">
        <section class="about-section">
          <article
            class="card-image"
            v-for="studiesItem in data"
            :key="studiesItem.id"
          >
            <a :href="studiesItem.fileLink">
              <div class="img">
                <div :class="studiesItem.img"></div>
              </div>
              <h6 class="title">{{ studiesItem.title }}</h6>
              <span class="caption">{{ studiesItem.date }}</span>
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
// import AppSubPageHeader from '@/components/AppSubPageHeader.vue';
import AppSubPageNav from '@/components/AppSubPageNav.vue';
import AppPagenation from '@/components/AppPagenation.vue';
import jsonDataStudies from '@/assets/data/studies.json';
import AppSubTop from '@/components/AppSubTopService.vue';

const data = [...jsonDataStudies.post].reverse();
const limitData = reactive({ data: [] });
</script>

<style>
.studies .about-section .card-image .img {
  background-color: #ffffff;
}
.studies .about-section .card-image:nth-of-type(1) .img,
.studies .about-section .card-image:nth-of-type(2) .img {
  background-color: #203864;
}
</style>
