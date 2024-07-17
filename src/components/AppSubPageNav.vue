<template>
  <div v-if="$route.path.includes('data')" id="about-subpage-nav">
    <ul class="page-nav">
      <li v-for="(materialItem, materialIndex) in MATERIAL_ROUTES" :key="materialIndex" :class="{
        'is-active': aboutStore.state.data.route.name === materialItem.name
      }">
        <router-link :to="{ name: materialItem.name }">
          {{ materialItem.title }}
        </router-link>
      </li>
    </ul>
  </div>

  <div v-if="$route.path.includes('scientific')" id="about-subpage-nav">
    <ul class="page-nav">
      <li v-for="(publicationItem, publicationIndex) in PUBLICATION_ROUTES" :key="publicationIndex" :class="{
        'is-active': aboutStore.state.data.route.name === publicationItem.name
      }">
        <router-link :to="{ name: publicationItem.name }" @click="onScrollTop()">
          {{ publicationItem.title }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useAboutStore } from '@/stores/about';
import { useAbout } from '@/compositions/useAbout';
import { MATERIAL_ROUTES, PUBLICATION_ROUTES } from '@/constants/route';

const aboutStore = useAboutStore();

const { onScrollTop } = useAbout();
</script>

<style scoped>
#about-subpage-nav {
  margin-top: 16px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.25);
}

#about-subpage-nav .page-nav {
  display: flex;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
}

#about-subpage-nav .page-nav li {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex: 1 1 100%;
  font-weight: bold;
  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.25);
  font-size: 1.2rem;
}

#about-subpage-nav .page-nav li a {
  flex: 1 1 auto;
  padding: 1.5rem;
}

#about-subpage-nav .page-nav li.is-active {
  background-color: var(--color-main);
}

/* 1024 이상 */
@media all and (min-width: 1024px) {
  #about-subpage-nav {
    margin-top: 40px;
  }
}
</style>
