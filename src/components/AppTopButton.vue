<template>
  <!-- <button
    class="go-to-top"
    :class="{ active: aboutStore.state.data.topBtnActive }"
    @click="onTop()"
  >
    Top
  </button> -->
</template>

<script setup>
import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();

const onTop = () => {
  window.scrollTo(0, 0);
};
</script>

<style>
.go-to-top.active {
  display: block;
}
.go-to-top {
  display: none;
  background-color: #ffffff;
  position: fixed;
  bottom: 5%;
  right: 5%;
  padding: 16px 16px;
  z-index: 1000;
  border: 1px solid #dddddd;
  transition: all 0.3s;
  color: #dedede;
  font-size: 0.8rem;
}
.go-to-top::before {
  font-family: 'Font Awesome 6 Free';
  font-weight: 900;
  content: '\f106';
  font-size: 0.8rem;
}
.go-to-top:hover {
  color: #535353;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
}
</style>
