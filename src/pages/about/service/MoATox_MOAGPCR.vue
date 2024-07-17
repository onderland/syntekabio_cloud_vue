<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">

    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv offG">
            <div class="bg-img"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">MOA-GPCR, In silico GPCR profiling service</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                High-end technical services for Target profiling of the developing compound <br>
                Individual AI models for More than 200 GPCRs are working for screening targets of the compound <br>
                Target selection is available in our AI-model prepared Kinase list <br>
                Provide Kinome tree with predicted Kd of each Kinases
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop 
            additionalClass="offG" 
            title="MOA-GPCR, In silico GPCR profiling service" 
            :titleDelay="200"
            :textDelay="400"
            text="High-end technical services for Target profiling of the developing compound <br> Individual AI models for More than 200 GPCRs are working for screening targets of the compound <br> Target selection is available in our AI-model prepared Kinase list <br> Provide Kinome tree with predicted Kd of each Kinases" 
          />
        </div>

        <div class="inner-gap-2">
          <div class="offG-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- workflow-grayBg -->
            <div class="workflow-grayBg" data-aos="fade-up" data-aos-offset="200">
              <div class="img-holder no-dim">
                <span>
                  <img src="/src/assets/static/images/img/offG_workflow.png" alt="Off-G SCR workflow" class="pc-show">
                  <img src="/src/assets/static/images/img/offG_workflow_mo.png" alt="Off-G SCR workflow"
                    class="mo-show">
                </span>
              </div>
              <ul class="dot-list">
                <li>After GPCR panel is selected, Input compound (SMILES) will be docked to targets with AutoBP
                  process.</li>
                <li>In-house AI model for selected target calculate and translate its Structural as well as chemical
                  information into predicted binding affinity. Finally, MOA-GPCR reports result as Excel table and
                  GPCR phylogenetic tree</li>
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
                <li>In silico GPCR Profiling</li>
                <li>In silico Drug repositioning</li>
                <li>Target protein identification with Phenotypic screened compound</li>
                <li>Off-target screening</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Stevens, R. C., Cherezov, V., Katritch, V., Abagyan, R., Kuhn, P., Rosen, H., & Wüthrich, K.
                    (2012). The GPCR Network: a large-scale collaboration to determine human GPCR structure and
                    function. Nature Reviews Drug Discovery, 12(1), 25–34. doi:10.1038/nrd3859</li>
                  <li>Zeghal, M., Laroche, G., Freitas, J.D. et al. Profiling of basal and ligand-dependent GPCR
                    activities by means of a polyvalent cell-based high-throughput platform. Nat Commun 14, 3684
                    (2023). https://doi.org/10.1038/s41467-023-39132-x</li>
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