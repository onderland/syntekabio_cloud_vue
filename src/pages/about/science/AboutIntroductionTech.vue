<template>
  <main class="stb-about-sub introduction" id="stb-about-data">
    <AppSubTop additionalClass="bg-3" additionalClass2="gap" colorClass="color-1" title="DATA<br class='mo-show'> MATERIALS" :titleDelay="200" :textDelay="400"
      text="Our platform has worked to <br class='mo-show'>identify druggable compounds,<br class='mo-show'> can increase<br class='pc-show'> the possibility of<br class='mo-show'> high-quality AI Hit discovery." />

    <AppSubPageNav />

    <div class="main-contents fixedShow">
      <div class="main-container page-component column">
        <section class="about-section">
          <article
            class="card-image"
            v-for="IntroductionItem in limitData.data"
            :key="IntroductionItem.id"
            @click.prevent="
              aboutStore.setVideo({ status: true, name: IntroductionItem.name })
            "
          >
            <div class="img p-0">
              <div :class="IntroductionItem.img"></div>
            </div>
            <h6 class="title">{{ IntroductionItem.title }}</h6>
            <span class="caption">{{ IntroductionItem.date }}</span>
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
import { useAboutStore } from '@/stores/about';

import AppPagenation from '@/components/AppPagenation.vue';
import AppSubPageHeader from '@/components/AppSubPageHeader.vue';
import AppSubPageNav from '@/components/AppSubPageNav.vue';

import jsonDataIntroduction from '@/assets/data/introduction.json';

import AppSubTop from '@/components/AppSubTopService.vue';

const aboutStore = useAboutStore();

const limitData = reactive({ data: [] });

const data = jsonDataIntroduction.post;
</script>
