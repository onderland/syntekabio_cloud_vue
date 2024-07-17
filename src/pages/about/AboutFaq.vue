<template>
  <main class="stb-about-sub" id="stb-about-faq">
    <div class="main-contents fixedShow">
      <div class="main-container page-component">
        <div class="main-body">
          <div class="about-container">
            <section class="about-section">
              <article class="section-header">
                <!-- FAQ 타이틀 -->
                <h3 class="title">
                  {{ $t('main.dmc.faq.title') }}
                </h3>
              </article>

              <article class="section-body">
                <!-- FAQ 컨텐츠 -->
                <div class="article-cont row">
                  <AppAccordion :type="'faq'" :data="jsonDataAccordion.faq" />
                </div>

                <!-- FAQ 다운로드 -->
                <div class="button-group">
                  <AppPlatformButton type="faq-down" />
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import jsonDataAccordion from '@/assets/data/accordion.json';
import AppAccordion from '@/components/AppAccordion.vue';
import AppPlatformButton from '@/components/AppPlatformButton.vue';
</script>
