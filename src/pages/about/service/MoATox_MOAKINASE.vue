<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">

    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv">
            <div class="bg-img"
              style="background: url(../static/images/@/offK_kv.png) no-repeat; background-position: 50%;"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">MOA-Kin, In silico Kinome profiling service</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                High-end technical services for Target profiling of the developing compound <br>
                Individual AI models for More than 400 Kinases are working for screening targets of the compound <br>
                Target selection is available in our AI-model prepared Kinase list <br>
                Provide Kinome tree with predicted Kd of each Kinases
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop bgImage="/src/assets/static/images/@/offK_kv.png"
            title="MOA-Kin, In silico Kinome profiling service" :titleDelay="200" :textDelay="400"
            text="High-end technical services for Target profiling of the developing compound <br>Individual AI models for More than 400 Kinases are working for screening targets of the compound <br> Target selection is available in our AI-model prepared Kinase list <br> Provide Kinome tree with predicted Kd of each Kinases" />
        </div>

        <div class="inner-gap-2">
          <div class="offK-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- workflow-grayBg -->
            <div class="workflow-grayBg" data-aos="fade-up" data-aos-offset="200">
              <div class="img-holder no-dim">
                <span>
                  <img src="/src/assets/static/images/img/offK_work.png" alt="Off-K SCR workflow" class="pc-show">
                  <img src="/src/assets/static/images/img/offK_work_mo.png" alt="Off-K SCR workflow" class="mo-show">
                </span>
              </div>
              <ul class="dot-list">
                <li>After kinase panel is selected, Input compound (SMILES) will be docked to targets with AutoBP
                  process.</li>
                <li>In-house AI model for selected target calculate and translate its Structural as well as chemical
                  information into predicted binding affinity. Finally, MOA-Kin reports result as Excel table and
                  Kinome tree.</li>
              </ul>
            </div>
            <!-- //workflow-grayBg -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>In silico Kinome Profiling</li>
                <li>In silico Drug repositioning</li>
                <li>Target protein identification with Phenotypic screened compound</li>
                <li>Off-target screening</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Eid, S., Turk, S., Volkamer, A. et al. KinMap: a web-based tool for interactive navigation
                    through human kinome data. BMC Bioinformatics 18, 16 (2017).
                    https://doi.org/10.1186/s12859-016-1433-7</li>
                  <li>The first eukaryotic kinome tree illuminates the dynamic history of present-day kinases. Leny M.
                    van Wijk, Berend Snel. bioRxiv 2020.01.27.920793; doi: https://doi.org/10.1101/2020.01.27.920793
                  </li>
                  <li>Johnson, J.L., Yaron, T.M., Huntsman, E.M. et al. An atlas of substrate specificities for the
                    human serine/threonine kinome. Nature 613, 759–766 (2023).
                    https://doi.org/10.1038/s41586-022-05575-3</li>
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