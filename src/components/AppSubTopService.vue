<template>
  <div class="sub-new-kv">
    <div :class="['top-kv', additionalClass]">
      <div class="bg-img" :style="bgStyle"></div>
    </div>
    <div :class="['inner-kv', additionalClass2, colorClass]">
      <h2 class="tit" data-aos="fade-up" :data-aos-delay="titleDelay" v-html="title"></h2>
      <p class="txt" data-aos="fade-up" :data-aos-delay="textDelay" v-html="text"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppSubTopService',
  props: {
    bgImage: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: '',
      required: true
    },
    text: {
      type: String,
      default: '',
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
    additionalClass: {
      type: String,
      default: ''
    },
    additionalClass2: {
      type: String,
      default: ''
    },
    colorClass: {
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
