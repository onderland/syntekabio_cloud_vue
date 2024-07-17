<template>
  <main class="stb-about-sub" id="stb-about-error">
    <div class="fixedShow">
      <div class="main-container page-component column">
        <section class="about-section">
          <div class="error-main">
            <p class="error-type">Error 404</p>
            <h1 class="error-title">Page Not Found</h1>
            <p class="error-desc">
              The requested URL was not found on this server<br />
              Please check the URL
            </p>
          </div>
          <div class="error-link">
            <div class="button-group">
              <router-link :to="{ name: 'main' }" class="link primary home"
                >Go Home</router-link
              >
              <AppPortalButton />
            </div>
          </div>
        </section>
        <!-- card 봉인~해제! -->
        <section class="about-section">
          <div class="card-image">
            <router-link :to="{ name: 'platform' }">
              <div class="img">
                <img
                  src="../../assets/stb/images/sub01_platform/md_simulation.webp"
                />
              </div>
              <h6 class="title">Check the description of DeepMatcher-Hit®</h6>
            </router-link>
          </div>

          <div class="card-image">
            <router-link :to="{ name: 'materials introduction' }">
              <div class="img p-0">
                <img
                  src="../../assets/stb/images/sub03_introductions/intro-001.webp"
                />
              </div>
              <h6 class="title">A video of our service</h6>
            </router-link>
          </div>

          <div class="card-image">
            <router-link :to="{ name: 'publication' }">
              <div class="img">
                <h5 class="text-image">Publication</h5>
              </div>
              <h6 class="title">Going to see related papers</h6>
            </router-link>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import AppPortalButton from '@/components/AppPortalButton.vue';
</script>

<style scoped>
.about-section {
  width: 100%;
}
#stb-about-error {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  padding: 0px;
}
#stb-about-error .main-contents {
  background: none;
}
.error-main {
  display: flex;
  width: 100%;
  flex-flow: column nowrap;
  gap: 2rem;
  margin-bottom: 4rem;
}
.error-type {
  display: inline-block;
  font: var(--font-h5);
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  padding-bottom: 1rem;
  border-bottom: 3px solid var(--color-default);
}
.error-title {
  margin-bottom: 15px;
  font: var(--font-h1);
  text-align: center;
  color: var(--color-default);
}
.error-desc {
  font: var(--font-text);
  text-align: center;
  color: var(--color-gray-3);
}
.error-link {
  display: flex;
  width: 100%;
  justify-content: center;
}

.error-link .button-group {
  display: flex;
  flex-flow: row nowrap;
  gap: 1.5rem;
  justify-content: center;
  margin-bottom: 2.5rem;
}
.error-link .button-group .home {
  flex: 1 0 100%;
  width: 100%;
  max-width: 256px;
  border-radius: 0.5rem;
  line-height: 1.375;
}

#stb-about-error img {
  width: 100%;
  height: 100%;
}
#stb-about-error .text-image {
  color: var(--color-main);
  font-weight: bold;
}

@media (max-width: 1280px) {
  #stb-about-error {
    padding: 5rem;
  }
}

@media (max-width: 768px) {
  .error-type {
    font-size: 1rem;
  }
  .error-title {
    font-size: 2rem;
  }
  .error-desc {
    font-size: 0.875rem;
  }
  .error-link .button-group {
    flex-flow: column;
  }
  .error-link .button-group .home {
    flex: 1 1 100%;
    height: 64px;
  }
}
</style>
