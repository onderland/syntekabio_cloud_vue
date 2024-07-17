<template>
  <div class="pagenation" v-if="pageInfo.total > props.limit">
    <ul class="page-list">
      <li
        class="page-item"
        :class="{ active: page === pageInfo.currentPage }"
        v-for="page in pageInfo.list"
        :key="page"
      >
        <button class="page-button" @click="onPage(page)">
          {{ page }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, reactive } from 'vue';

const props = defineProps({
  data: Array,
  limit: Number
});

const pageInfo = reactive({
  limit: props.limit,
  total: props.data.length,
  page: 1,
  block: 10,
  first: 1,
  end: 0,
  currentPage: 1,
  data: [],
  list: []
});

const emit = defineEmits(['update:data']);

const onPage = (pageNum) => {
  pageInfo.page = pageNum;
  pageInfo.data = props.data.slice(
    (pageInfo.page - 1) * pageInfo.limit,
    pageInfo.page * pageInfo.limit
  );

  setPageInfo(pageInfo.total, pageInfo.limit, pageInfo.block, pageInfo.page);

  emit('update:data', pageInfo.data);
};

const setPageInfo = (total, limit, block, page) => {
  const totalPage = Math.ceil(total / limit);

  pageInfo.currentPage = page;
  pageInfo.first = page > 1 ? parseInt(page, 10) - parseInt(1, 10) : 1;
  pageInfo.end =
    totalPage !== page ? parseInt(page, 10) + parseInt(1, 10) : null;

  const startIndex = (Math.ceil(page / block) - 1) * block + 1;
  const endIndex =
    startIndex + block > totalPage ? totalPage : startIndex + block - 1;

  let list = [];
  for (let index = startIndex; index <= endIndex; index++) {
    list.push(index);
  }
  pageInfo.list = list;
};

onMounted(() => {
  onPage(pageInfo.page);
});
</script>

<style scoped>
.pagenation {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 4rem;
}
.pagenation .page-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.pagenation .page-list .page-item {
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
}
.pagenation .page-list .page-item.active {
  background-color: var(--color-main);
}
.pagenation .page-list .page-item .page-button {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: var(--color-main);
}
.pagenation .page-list .page-item.active .page-button {
  color: var(--color-white);
}
</style>
