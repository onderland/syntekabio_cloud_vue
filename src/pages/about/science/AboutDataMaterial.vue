<template>
  <main class="stb-about-sub data-materials" id="stb-about-data">
    <AppSubTop additionalClass="bg-3" additionalClass2="gap" colorClass="color-1" title="DATA<br class='mo-show'> MATERIALS" :titleDelay="200" :textDelay="400"
      text="Our platform has worked to <br class='mo-show'>identify druggable compounds,<br class='mo-show'> can increase<br class='pc-show'> the possibility of<br class='mo-show'> high-quality AI Hit discovery." />

    <AppSubPageNav />

    <div class="main-contents fixedShow">
      <div class="main-container page-component column">
        <section class="about-section" v-if="page.name == 'Data matirials'">
          <article class="card-image" v-for="(materialItem, materialIndex) in limitData.data" :key="materialItem.id"
            @click="($event) => updateModalOn(true, materialIndex)">
            <div class="img">
              <div :class="materialItem.img"></div>
            </div>
            <h6 class="title">{{ materialItem.title }}</h6>
            <span class="caption">{{ materialItem.date }}</span>
          </article>
        </section>
      </div>

      <AppPagenation @update:data="limitData.data = $event" :data="data" :limit="6" />
    </div>

    <AppMaterialModal :modal-on="modal.open" :data="data[modal.materialId]" @update="updateModalOn" />
  </main>
</template>

<script setup>
import { reactive } from 'vue';

import AppPagenation from '@/components/AppPagenation.vue';
import AppSubPageHeader from '@/components/AppSubPageHeader.vue';
import AppMaterialModal from '@/components/AppModalMaterial.vue';
import AppSubPageNav from '@/components/AppSubPageNav.vue';

import jsonDataMaterial from '@/assets/data/material.json';

import AppSubTop from '@/components/AppSubTopService.vue';

const data = jsonDataMaterial.post;

const limitData = reactive({ data: [] });

const page = reactive({
  name: 'Data matirials'
});

const modal = reactive({
  open: false,
  materialId: 'discovery'
});

const updateModalOn = (val, materialId) => {
  modal.open = val;
  modal.materialId = materialId;
};
</script>
