<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">
    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv moa">
            <div class="bg-img"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">Target profiling service, <br>Find “Why” in your
                Science with Syntekabio</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                “MOA-WHY” is High-end technical services for Target profiling of the developing compound. Individual
                AI models for More than <br class="pc-show">2,000 proteins (400 Kinase, 200 GPCR and 100 toxicity
                related genes) are working for screening targets of the compound. <br class="pc-show">“MOA-WHY”
                suggest appropriate target(s) of the compound with predicted Kd values of each targets.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop additionalClass="moa"
            title="Target profiling service, <br>Find “Why” in your Science with Syntekabio" :titleDelay="200"
            :textDelay="400"
            text="“MOA-WHY” is High-end technical services for Target profiling of the developing compound. Individual AI models for More than <br class='pc-show'>2,000 proteins (400 Kinase, 200 GPCR and 100 toxicity related genes) are working for screening targets of the compound. <br class='pc-show'>“MOA-WHY” suggest appropriate target(s) of the compound with predicted Kd values of each targets." />
        </div>

        <div class="inner-gap-2">
          <div class="moa-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0" style="margin-left:0;margin-right:0;max-width:100%;">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
              <div class="border-box" data-aos="fade-up" data-aos-offset="200">MOA screening of Syntekabio is useful
                for on- and off- target identification. Our structure-based AI platform “MOA-WHY” can support In
                silico Kinome Profiling, GPCR profiling, Drug repositioning and TOX profiling. Moreover, this can be
                applied to Target protein identification of Phenotypic screened compound and Selectivity prediction
                within same protein family.
              </div>
            </div>
            <!-- //sub-moreGap -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h3 class="sub-h3" data-aos="fade-up">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- moa-workflow -->
            <div class="moa-workflow" data-aos="fade-up" data-aos-offset="200">
              <div class="img-holder no-dim">
                <span>
                  <img src="/src/assets/static/images/img/moaDetail.png" alt="MOA workflow" class="pc-show">
                  <img src="/src/assets/static/images/img/moaDetail_mo.png" alt="MOA workflow" class="mo-show">
                </span>
              </div>
              <ul class="dot-list">
                <li>After one or more targets are selected, Input compound (SMILES) will be docked to target(s) with
                  AutoBP process. In-house AI model for selected target calculate and translate its Structural as well
                  as chemical information into predicted binding affinity. In house validation confirms each AI models
                  for target protein shows 0.7~0.9 R2 score.</li>
              </ul>
            </div>
            <!-- //moa-workflow -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>MOA-WHY is application based on AutoBP in SaaS of Syntekabio, MOA-WHY predict Kd values of the
                  selected compound(s). If the customer want to do MOA-WHY for Kinase profiling, GPCR profiling or TOX
                  profiling, Pre-selected protein lists could be applied for each purpose. </li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Qun Ren, Ning Qu, Jingjing Sun, Jingyi Zhou, Jin Liu, Lin Ni, Xiaochu Tong, Zimei Zhang,
                    Xiangtai Kong, Yiming Wen, Yitian Wang, Dingyan Wang, Xiaomin Luo, Sulin Zhang, Mingyue Zheng,
                    Xutong Li, KinomeMETA: meta-learning enhanced kinome-wide polypharmacology profiling, Briefings in
                    Bioinformatics, Volume 25, Issue 1, January 2024, bbad461</li>
                  <li>Takafumi Takai, Brandon D Jeffy, Swathi Prabhu, Jennifer D Cohen, Retrospective Analysis of
                    Chemical Structure-Based in silico Prediction of Primary Drug Target and Off-Targets,
                    Computational Toxicology, Volume 26, 2023, 100273,</li>
                  <li>Bao XR, Pan Y, Lee CM, Davis TH, Bao G. Tools for experimental and computational analyses of
                    off-target editing by programmable nucleases. Nat Protoc. 2021 Jan;16(1):10-26.</li>
                </ul>
              </div>
            </div>
            <!-- //notice-list -->
          </div>
          <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
        </div>
      </div>
      <!-- //inner-wrap -->
    </div>
    <!-- //box-wrap -->
  </div>
  <!-- //common-contentTapGap -->
</template>

<script setup>
import AppSubTop from '@/components/AppSubTop.vue';
</script>