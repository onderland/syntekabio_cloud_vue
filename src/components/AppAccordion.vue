<template>
  <ul v-if="type === 'seq'" class="accordion" id="about-acco">
    <li
      class="accordion-item"
      v-for="(accordionData, accordionLen) in data"
      :key="accordionData.id"
      @click="selectedAccordion = accordionLen"
      :class="{ active: accordionLen === selectedAccordion }"
    >
      <h5 class="accordion-title">{{ accordionData.title }}</h5>
      <p class="accordion-text">{{ accordionData.text }}</p>
    </li>
  </ul>
  <ul v-else-if="type === 'faq'" class="accordion faq" id="about-acco">
    <li
      class="accordion-item"
      v-for="(accordionData, accordionLen) in data"
      :key="accordionLen"
      @click="selectedAccordion = accordionLen"
      :class="{ active: accordionLen === selectedAccordion }"
    >
      <h5 class="accordion-title">
        {{ 'Q' + (accordionLen + 1) + '. ' + accordionData.question }}
      </h5>
      <p class="accordion-text">{{ accordionData.answer }}</p>
    </li>
  </ul>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  type: String,
  data: Array
});

const selectedAccordion = ref(0);
</script>

<style scoped>
.article-cont.row .accordion {
  flex: 2;
}
.accordion {
  flex: unset;
  height: unset;
  border-radius: 24px;
  background-color: var(--stb-white);
}

.accordion .accordion-item {
  padding: 1.25rem 0px;
  border-bottom: 0.25px solid rgba(0, 0, 0, 0.24);
}
.accordion .accordion-item:last-of-type {
  border-bottom: 0px;
}

.accordion-item .accordion-text {
  display: none;
}
.accordion-item .accordion-title {
  display: flex;
  cursor: pointer;
  font: bold 20px/1.5 var(--stb-font-pretendard);
  color: var(--color-main);
  padding: 0px;
}
.accordion-item .accordion-text {
  display: none;
  margin-top: 1rem;
  font: normal 1.125em/1.5 var(--stb-font-pretendard);
}
.accordion-item .accordion-title::after {
  font-family: 'Font Awesome 6 Free';
  content: '\f107';
  margin-left: auto;
}

.accordion-item.active .accordion-title::after {
  font-family: 'Font Awesome 6 Free';
  content: '\f106';
}
.accordion-item.active .accordion-text {
  display: block;
}

.accordion.faq {
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1);
}
.accordion.faq .accordion-item .accordion-text {
  padding: 1.25rem 0rem;
}
.accordion.faq .accordion-item {
  padding: 2.25rem 2rem;
}
.accordion.faq .accordion-item .accordion-title {
  display: flex;
  cursor: pointer;
  font: bold 20px/1.5 var(--stb-font-pretendard);
  color: var(--color-main);
  padding: 0px;
  gap: 2rem;
}
.main-contents.fixedShow .main-container,
.main-contents.fixedShow .main-container h3,
.main-contents.fixedShow .main-container p,
.main-contents.fixedShow .main-container .stb-table {
  animation: none;
  opacity: 1;
}
</style>
