<template>
  <div class="select-box">
    <div
      class="selected"
      @click="openSelectList"
      :class="{ active: selectBox.selectOn }"
    >
      {{ selectBox.selected }}
    </div>

    <ul class="optionList" :class="{ active: selectBox.selectOn }">
      <li
        class="option"
        v-for="(option, optionIndex) in options"
        @click="onSelectOption(option)"
        value="asdasd"
        :key="optionIndex"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

const emit = defineEmits(['selected']);

const props = defineProps({
  options: Array
});

const selectBox = reactive({
  selected: props.options[0],
  selectOn: false
});

const openSelectList = ($event) => {
  const target = $event.target.classList;

  if (target == 'selected') {
    selectBox.selectOn = true;
  } else {
    selectBox.selectOn = false;
  }
};

const onSelectOption = (option) => {
  selectBox.selected = option;
  selectBox.selectOn = false;

  emit('selected', option);
};
</script>

<style scoped>
.select-box {
  position: relative;
  width: 100%;
  max-width: 300px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
}

.select-box .selected {
  display: flex;
  flex-flow: row wrap;
  border: 1px solid #dddddd;
  border-radius: 0.5rem;
  align-content: center;
  padding: 1rem;
  text-align: right;
  margin-right: 1.5rem;
  font-weight: bold;
  color: var(--color-main);
  width: 100%;
  height: 100%;

  border: 1px solid #dddddd;
}

.select-box .selected:after {
  content: '\25bc';
  display: inline-block;
  width: 1rem;
  height: 1rem;
  padding-right: 0.25rem;
  margin-left: auto;
}

.select-box .selected.active {
  border-radius: 0.5rem 0.5rem 0 0;
}
.select-box .selected.active:after {
  content: '\25b2';
}

.select-box .optionList {
  display: none;
  position: absolute;
  border: 1px solid #dddddd;
  top: 100%;
  width: 100%;
  background-color: #ffffff;
  max-height: 190px;
  overflow: auto;
  border-radius: 0 0 0.5rem 0.5rem;
  padding: 0;
  margin: 0;
  transition: all 0.3s;
}

.select-box .optionList.active {
  display: block;
}

.select-box .optionList .option {
  padding: 1rem;
  border-bottom: 1px solid #dddddd;
  color: var(--color-sky);
  transition: all 0.3s;
}
.select-box .optionList .option:first-of-type {
  padding-top: 1rem;
}
.select-box .optionList .option:hover {
  color: var(--color-main);
  background-color: #f3f5f7;
}
</style>
