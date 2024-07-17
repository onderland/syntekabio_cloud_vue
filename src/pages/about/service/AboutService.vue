<template>
  <main class="stb-about-sub" id="stb-about-service">
    <app-sub-page-header>
      <template #title>OUR SERVICE</template>
      <template #subTitle
        >Our program maximizes benefits for your drug discovery as the leading
        AI-partner. Let's start from STB CLOUD towards successful your
        journey.</template
      >
    </app-sub-page-header>

    <div class="main-contents bg-white mobile-full fixedShow">
      <div class="main-container page-component column">
        <section class="about-section">
          <article class="about-article">
            <p class="text">
              Absence of bioinformatician or chemist? No worries. STB CLOUD is
              here for you. We provide basic service DeepMatcher-Hit1 and plus
              package DeepMatcher-Hit2 by STB Cloud-AI supercomputing.
              <br /><br />• More information: admin.usa@syntekabio.com,
              BD@syntekabio.com
            </p>
          </article>

          <article class="about-article">
            <table class="stb-table">
              <thead>
                <tr>
                  <th></th>
                  <th><p class="text">Basic service</p></th>
                  <th><p class="text">Plus package service</p></th>
                  <th><p class="text">Timeline</p></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th><p class="text">DeepMatcher-Hit1</p></th>
                  <td>
                    <p class="text">AI-Hit discovery(avg. 100 Hit Estimates)</p>
                  </td>
                  <td><p class="text">-</p></td>
                  <td><p class="text">Within 3 weeks</p></td>
                </tr>
                <tr>
                  <th><p class="text">DeepMatcher-Hit2</p></th>
                  <td>
                    <p class="text">AI-Hit discovery(avg. 100 Hit Estimates)</p>
                  </td>
                  <td><p class="text">in vitro biochemical assay</p></td>
                  <td><p class="text">Within 14 weeks</p></td>
                </tr>
              </tbody>
            </table>
          </article>

          <article class="about-article d-flex view-pc">
            <div class="img no-shadow">
              <img
                src="@/assets/stb/images/sub06_service/our_service-main.webp"
                alt=""
              />
            </div>
          </article>
        </section>
      </div>
    </div>

    <div
      class="main-contents bg-white mobile-full reverse pt-0"
      :class="{ activeShow: aboutStore.state.data.targetAni[1] }"
    >
      <div class="main-container page-component column">
        <section class="about-section">
          <article class="about-article row">
            <div class="col-6 d-flex align-center">
              <div>
                <h3 class="text-left title color-text-main">
                  Customer’s Journey in STB CLOUD
                </h3>
                <p class="text">
                  Our program provides maximum benefits for your drug discovery
                  as AI-partner.<br /><br />
                  Start your journey towards successful new drug development on
                  STB CLOUD.
                </p>
              </div>
            </div>
            <div class="col-6">
              <div class="img small transparent">
                <img
                  src="@/assets/stb/images/sub06_service/our_service-stb_cloud.webp"
                  alt=""
                />
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  </main>
</template>

<script setup>
import AppSubPageHeader from '@/components/AppSubPageHeader.vue';

import { useAboutStore } from '@/stores/about';

const aboutStore = useAboutStore();
</script>
