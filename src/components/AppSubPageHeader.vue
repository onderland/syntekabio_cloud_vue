<template>
  <div class="sub-container page-component">
    <section class="section-header">
      <article class="article-header">
        <h2 class="title"><slot name="title"></slot></h2>
        <h4 class="sub-title"><slot name="subTitle"></slot></h4>
      </article>
    </section>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subTitle: String
});
</script>

<style scoped>
/* Subpage Header */
.sub-container .section-header {
  padding: 4rem 0;
  height: 300px;
}
.sub-container .section-header .article-header {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;
}
.sub-container .section-header .article-header .title {
  text-align: left;
  margin-bottom: 1.75rem;
}
.sub-container .section-header .article-header .sub-title {
  font-size: 1.375rem;
  font-weight: 500;
  color: var(--color-default);
}

@media (max-width: 500px) {
  .sub-container .section-header .article-header {
    align-items: center;
  }
  .sub-container .section-header .article-header .sub-title {
    text-align: center;
  }
}
</style>
