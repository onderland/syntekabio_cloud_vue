<template>
  <!-- tab-swiper -->
  <div class="tab-swiper">
    <swiper :slidesPerView="'auto'" :modules="[Controller]" @swiper="setFirstSwiper"
      :controller="{ control: secondSwiper }" :observer="true" :observe-parents="true" @click="handleSlideClick">
      <swiper-slide class="custom-slide" :class="{ 'is-active': activeIndex === 0 }">Unmatched Cloud Precision</swiper-slide>
      <swiper-slide class="custom-slide" :class="{ 'is-active': activeIndex === 1 }">Automated Workflows</swiper-slide>
      <swiper-slide class="custom-slide" :class="{ 'is-active': activeIndex === 2 }">Advanced Analytics</swiper-slide>
      <swiper-slide class="custom-slide" :class="{ 'is-active': activeIndex === 3 }">Seamless Cloud Integration</swiper-slide>
      <swiper-slide class="custom-slide" :class="{ 'is-active': activeIndex === 4 }">Confidential, Customizable and Secure</swiper-slide>
    </swiper>
  </div>
  <!-- //tab-swiper -->

  <!-- content-swiper -->
  <div class="content-swiper">
    <swiper :modules="[Controller]" @swiper="setSecondSwiper" :controller="{ control: firstSwiper }" :observer="true"
      :observe-parents="true" @slideChange="handleSlideChange">
      <swiper-slide>
        <div class="slide-content">
          <div class="box-img">
            <img src="@/assets/static/images/new/img_service_1.png" alt="">
          </div>
          <div class="box-tt">
            <p class="tt-1">Unmatched Cloud Precision</p>
            <p class="tt-2">Leverage state-of-the-art optimization techniques and post-<br class="pc-show">processing methods to deliver the
              highest quality results available.</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <div class="box-img">
            <img src="@/assets/static/images/new/img_service_2.png" alt="">
          </div>
          <div class="box-tt">
            <p class="tt-1">Automated Workflows</p>
            <p class="tt-2">Simplify processes and<br class="pc-show"> save time with intelligent automation.</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <div class="box-img">
            <img src="@/assets/static/images/new/img_service_3.png" alt="">
          </div>
          <div class="box-tt">
            <p class="tt-1">Advanced Analytics</p>
            <p class="tt-2">Gain actionable<br class="pc-show"> insights with real-time analytics.</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <div class="box-img">
            <img src="@/assets/static/images/new/img_service_4.png" alt="">
          </div>
          <div class="box-tt">
            <p class="tt-1">Seamless Cloud Integration</p>
            <p class="tt-2">Our team of experienced experts is ready to guide and support<br class="pc-show"> you throughout the entire onboarding process.</p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-content">
          <div class="box-img">
            <img src="@/assets/static/images/new/img_service_5.png" alt="">
          </div>
          <div class="box-tt">
            <p class="tt-1">Confidential,<br> Customizable & Secure</p>
            <p class="tt-2">Ensure full confidentiality and grant you complete ownership of<br class="pc-show"> all intellectual property created by STB CLOUD.</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
  <!-- //content-swiper -->
</template>

<script>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Controller } from 'swiper';
import 'swiper/css';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const firstSwiper = ref(null);
    const secondSwiper = ref(null);
    const activeIndex = ref(0);

    const setFirstSwiper = (swiper) => {
      firstSwiper.value = swiper;
    };

    const setSecondSwiper = (swiper) => {
      secondSwiper.value = swiper;
    };

    const handleSlideClick = (swiper, event) => {
      const clickedIndex = swiper.clickedIndex;
      activeIndex.value = clickedIndex;
      secondSwiper.value.slideTo(clickedIndex);
    };

    const handleSlideChange = (swiper) => {
      activeIndex.value = swiper.activeIndex;
    };

    return {
      Controller,
      firstSwiper,
      secondSwiper,
      activeIndex,
      setFirstSwiper,
      setSecondSwiper,
      handleSlideClick,
      handleSlideChange,
    };
  },
};
</script>
