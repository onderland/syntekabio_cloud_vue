<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">
    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">
        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->

        <!-- <div class="sub-top detail">
          <div class="sub-top-kv drscr">
            <div class="bg-img"
              style="background: url(/src/assets/static/images/@/drscr_kv.png) no-repeat; background-position: 55%;"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">
                DR HIT-SCR
                <span>AI-enabled Drug Discovery Solution for Drug Repurposing</span>
              </h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                “DR-Screening" is a solution that supports drug repurposing by quickly discovering new medical uses in
                selected libraries of 17,000 existing drugs. The libraries include a variety of drugs that are
                FDA-approved or in preclinical/clinical trials. A proven platform with up to 23.3% hit rates across in
                various therapeutic areas and multiple protein families, including kinase, GPCR, and nuclear
                receptors. Furthermore, it is validated to cover various target and disease areas.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop bgImage="/src/assets/static/images/@/drscr_kv.png"
            title="DR HIT-SCR <span>AI-enabled Drug Discovery Solution for Drug Repurposing</span>" :titleDelay="200"
            text="“DR-Screening” is a solution that supports drug repurposing by quickly discovering new medical uses in selected libraries of 17,000 existing drugs. The libraries include a variety of drugs that are FDA-approved or in preclinical/clinical trials. A proven platform with up to 23.3% hit rates across in various therapeutic areas and multiple protein families, including kinase, GPCR, and nuclear receptors. Furthermore, it is validated to cover various target and disease areas."
            :textDelay="400" additionalClass="drscr" />
        </div>

        <div class="inner-gap-2">
          <div class="drscr-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid list-3">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Are you considering an ever greening strategy to extend the patent life of your drugs?
                </p>
                <p class="txt">STB can help extend the patent rights by adding new indications based on accumulated
                  experiences.</p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Need to quickly add new pipelines Or find  treatment for new pandemic diseases in the
                  fastest way?</p>
                <p class="txt">STB can support it with drug repurposing with selected DR libraries and integrated
                  technology.</p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Looking for HIT compounds that meet the safety and physicochemical properties?</p>
                <p class="txt">STB can help reduce development time and costs by finding new uses of existing or
                  investigational drugs.</p>
              </div>
            </div>
            <!-- //border-grid -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h3 class="sub-h3" data-aos="fade-up">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- workflow-info -->
            <div class="workflow-info drscr">
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <div class="img-holder no-dim">
                  <span>
                    <img src="/src/assets/static/images/img/drscr_grid_1.png" alt="DR Library" class="pc-show">
                    <img src="/src/assets/static/images/img/drscr_grid_1_mo.png" alt="DR Library" class="mo-show">
                  </span>
                </div>
                <div class="txt-box">
                  <p class="name"><span>A</span>DR Library (Drug repurposing)</p>
                  <ul class="dot-list">
                    <li>
                      Start screening new HITs from extensive libraries of up to 17,000 compounds.
                    </li>
                  </ul>
                  <div class="gray-box">
                    <p>I/O: Target protein info. & Ref. drug info. (if available)</p>
                  </div>
                </div>
              </div>
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <div class="img-holder no-dim">
                  <span>
                    <img src="/src/assets/static/images/img/drscr_grid_2.png" alt="Deep Learning Screening" class="pc-show">
                    <img src="/src/assets/static/images/img/drscr_grid_2_mo.png" alt="Deep Learning Screening" class="mo-show">
                  </span>
                </div>
                <div class="txt-box">
                  <p class="name"><span>B</span>Deep Learning Screening</p>
                  <ul class="dot-list">
                    <li>
                      After preliminary screening based on physicochemical properties, AI-3D docking of
                      target-compound is conducted.
                    </li>
                    <li>
                      Next, various conformers and binding poses for the compounds are generated and then prioritized
                      by CNN scoring.
                    </li>
                  </ul>
                </div>
              </div>
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <div class="img-holder no-dim">
                  <span>
                    <img src="/src/assets/static/images/img/drscr_grid_3.png" alt="False Positive filtering" class="pc-show">
                    <img src="/src/assets/static/images/img/drscr_grid_3_mo.png" alt="False Positive filtering" class="mo-show">
                  </span>
                </div>
                <div class="txt-box">
                  <p class="name"><span>C</span>False Positive Filtering</p>
                  <ul class="dot-list">
                    <li>
                      The best-pose is selected based on the binding energy of Cpds and false positives are filtered
                      out through auto-MD simulation.
                    </li>
                    <li>
                      The Cpds are then scored based on various factors for each best-poses.
                    </li>
                  </ul>
                  <div class="gray-box">
                    <p>Output: List of 200 Cpds with false positives filtered </p>
                  </div>
                </div>
              </div>
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <div class="img-holder no-dim">
                  <span>
                    <img src="/src/assets/static/images/img/drscr_grid_4.png" alt="Technical Performance" class="pc-show">
                    <img src="/src/assets/static/images/img/drscr_grid_4_mo.png" alt="Technical Performance" class="mo-show">
                  </span>
                </div>
                <div class="txt-box">
                  <p class="name"><span>D</span>Technical Performance</p>
                  <ul class="dot-list">
                    <li>
                      The final HIT candidates are re-ranked with our own scoring functions, providing a list of  ~200
                      top-ranked compounds that are ready-to-purchase without any synthesis steps.
                    </li>
                  </ul>
                  <div class="gray-box">
                    <p>Input: The screening score of 200 Cpds</p>
                  </div>
                </div>
              </div>
            </div>
            <!-- //workflow-info -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>Discovering new targets and indications of known drugs</li>
                <li>Extending patent rights and pipelines by adding new indications of existing drugs</li>
                <li>Development of me-too drugs based on existing drugs</li>
                <li>(On request) Subsequent development is available based on DR drugs in the early stage discovered
                  in-house</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>“Protein-ligand scoring with convolutional neural networks.” JCIM 57.4 (2017): 942-957.</li>
                  <li>Syntekabio’s Hit to Preclinical Candidate on Cloud Computing. BioPharma Trend Vol4. 2023.</li>
                  <li>How Syntekabio’s Supercomputing Enables AI-driven Drug Discovery. BioPharma Trend Vol3. 2023
                  </li>
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