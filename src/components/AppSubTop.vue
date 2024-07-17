<template>
  <div class="sub-top detail">
    <div :class="['sub-top-kv', additionalClass, { gpt: hasGptClass }]">
      <div class="bg-img" :style="bgStyle"></div>
    </div>
    <div class="inner-gap-2">
      <div class="sub-top-text">
        <h2 class="tit" data-aos="fade-up" :data-aos-delay="titleDelay" v-html="title"></h2>
        <p class="txt" data-aos="fade-up" :data-aos-delay="textDelay" v-html="text"></p>
        <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSubTop',
  props: {
    bgImage: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    titleDelay: {
      type: Number,
      default: 200
    },
    textDelay: {
      type: Number,
      default: 400
    },
    hasGptClass: {
      type: Boolean,
      default: false
    },
    additionalClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    bgStyle() {
      return this.bgImage
        ? { background: `url(${this.bgImage}) no-repeat`, backgroundPosition: '50%' }
        : {};
    }
  }
}
</script>

<style scoped>
/* 스타일을 여기에 추가하세요 */
</style>
