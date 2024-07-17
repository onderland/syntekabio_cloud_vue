<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">

    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv toxscr">
            <div class="bg-img"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">MOA-TOX, In silico Toxicity profiling service
              </h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                High-end technical services for Target profiling of the developing compound <br>
                Individual AI models for More than 2,000 proteins are working for screening targets of the compound
                <br>
                2,000 proteins include more than 400 Kinase, 200 GPCR and 100 toxicity related genes <br>
                Provide predicted Kd value of the compound and 3 Reference drugs
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop 
            additionalClass="toxscr" 
            title="MOA-TOX, In silico Toxicity profiling service" 
            :titleDelay="200"
            :textDelay="400"
            text="High-end technical services for Target profiling of the developing compound <br> Individual AI models for More than 2,000 proteins are working for screening targets of the compound <br> 2,000 proteins include more than 400 Kinase, 200 GPCR and 100 toxicity related genes <br> Provide predicted Kd value of the compound and 3 Reference drugs" 
          />
        </div>

        <div class="inner-gap-2">
          <div class="toxscr-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- workflow-grayBg -->
            <div class="workflow-grayBg" data-aos="fade-up" data-aos-offset="200">
              <div class="img-holder no-dim">
                <span>
                  <img src="/src/assets/static/images/img/toxscr_workflow.png" alt="Tox SCR workflow" class="pc-show">
                  <img src="/src/assets/static/images/img/toxscr_workflow_mo.png" alt="Tox SCR workflow"
                    class="mo-show">
                </span>
              </div>
              <ul class="dot-list">
                <li>After one or more targets are selected, Input compound (SMILES) will be docked to targets with
                  AutoBP process.</li>
                <li>In-house AI model for selected target calculate and translate its Structural as well as chemical
                  information into predicted binding affinity.</li>
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
                <li>In silico Kinome Profiling, GPCR profiling</li>
                <li>In silico Drug repositioning</li>
                <li>In silico TOX profiling</li>
                <li>Target protein identification with Phenotypic screened compound</li>
                <li>Off-target screening</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Stefanie Bendels, Caterina Bissantz, Bernhard Fasching, Grégori Gerebtzoff, Wolfgang Guba,
                    Manfred Kansy, Jacques Migeon, Susanne Mohr, Jens-Uwe Peters, Fabien Tillier, René Wyler,
                    Christian Lerner, Christian Kramer, Hans Richter, Sonia Roberts, Safety screening in early drug
                    discovery: An optimized assay panel, Journal of Pharmacological and Toxicological Methods, Volume
                    99, 2019, 106609,</li>
                  <li>Pognan, F., Beilmann, M., Boonen, H.C.M. et al. The evolving role of investigative toxicology in
                    the pharmaceutical industry. Nat Rev Drug Discov 22, 317–335 (2023).
                    https://doi.org/10.1038/s41573-022-00633-x</li>
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