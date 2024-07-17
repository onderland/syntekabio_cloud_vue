<template>
  <div class="box-tab-swiper">
    <swiper ref="swiperRef" :slides-per-view="'auto'" :free-mode="true" :loop="false" :observer="true" :observe-parents="true" :slide-to-clicked-slide="true">
      <swiper-slide
        v-for="(item, index) in items"
        :key="index"
        :class="['swiper-slide-custom', { 'is-active': activeIndex === index }]"
      >
        <a :href="item.link" @click.prevent="() => scrollToSection(item.link, index)">{{ item.text }}</a>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/free-mode';
import { defineProps, defineEmits } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
});

const emit = defineEmits(['updateActive']);
const route = useRoute();
const swiperRef = ref(null);
const activeIndex = ref(0);

const scrollToSection = (link, index) => {
  const element = document.querySelector(link);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY - 50;
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
  activeIndex.value = index;
  emit('updateActive', link.substring(1), index);
};

const isActive = (link, index) => {
  if (route.hash) {
    return route.hash === link;
  }
  return index === 0;
};
</script>
