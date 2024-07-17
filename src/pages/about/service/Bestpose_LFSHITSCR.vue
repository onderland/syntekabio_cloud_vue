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
              style="background: url(/src/assets/static/images/@/qslscr_kv.png) no-repeat; background-position: 43%;"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">
                LFS HIT-SCR
                <span>AI-Hit Discovery Solution, Novel & Quickly Synthesizing Library</span>
              </h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                  “LFS HIT Screening” quickly and more precisely screens novel HIT candidates through AI-based
                numerous calculations in a premium library, with or without reference structure data. Plus, our
                technical cooperation has reduced the time from synthesis to customs clearance and receipt by half
                again. A proven platform in various therapeutic areas and protein families, including kinase, GPCR,
                and nuclear receptors. Discover novel scaffolds and HIT candidates from a library of up to 50 million
                premium compounds.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->

        <div>
          <AppSubTop bgImage="/src/assets/static/images/@/qslscr_kv.png"
            title="LFS HIT-SCR <span>AI-Hit Discovery Solution, Novel & Quickly Synthesizing Library</span>"
            :titleDelay="200"
            text="“LFS HIT Screening” quickly and more precisely screens novel HIT candidates through AI-based numerous calculations in a premium library, with or without reference structure data. Plus, our technical cooperation has reduced the time from synthesis to customs clearance and receipt by half again. A proven platform in various therapeutic areas and protein families, including kinase, GPCR, and nuclear receptors. Discover novel scaffolds and HIT candidates from a library of up to 50 million premium compounds."
            :textDelay="400" />
        </div>

        <!-- sub-top -->
        <div class="inner-gap-2">
          <div class="qsl-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid list-3 icon-posi">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Are you planning to develop NME? Want to discover a novel scaffold HIT?</p>
                <p class="txt">Start your planning with the premium library of up to 50 million capable of screening
                  novel scaffolds for NME development. Strengthen your rights by securing material patents from the
                  HIT discovery stage.</p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Want to find HITs that have a clear binding mode from the start?</p>
                <p class="txt">STB offers HIT candidates with a clear binding mode as best-pose prediction between
                  target and compound.</p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Do you have trouble with the long wait for the synthesis or customs clearance?</p>
                <p class="txt">Save synthesis time/cost for verification with HIT candidates that can be synthesized
                  quickly and reliably.</p>
              </div>
            </div>
            <!-- //border-grid -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h3 class="sub-h3" data-aos="fade-up">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- workflow-info -->
            <div class="workflow-info">
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <div class="img-holder no-dim">
                  <span>
                    <img src="/src/assets/static/images/img/qsl_grid_1.png"
                      alt="LFS Library (Large-scale and Fast-synthesis DB)">
                  </span>
                </div>
                <div class="txt-box">
                  <p class="name top"><span>A</span>LFS Library<br class="mo-show"> (Large-scale and Fast-synthesis
                    DB)</p>
                  <ul class="dot-list">
                    <li>Start screening new HITs from extensive libraries of up to 50 million compounds</li>
                  </ul>
                  <div class="gray-box">
                    <p>Input : Target protein info. Ref. drug info. (if available)</p>
                  </div>
                </div>
              </div>
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <div class="img-holder no-dim">
                  <span>
                    <img src="/src/assets/static/images/img/qsl_grid_2.png" alt="Deep Learning Screening">
                  </span>
                </div>
                <div class="txt-box">
                  <p class="name"><span>B</span>Deep Learning Screening</p>
                  <ul class="dot-list">
                    <li>After preliminary screening based on physicochemical properties, AI-3D docking of
                      target-compound is conducted.</li>
                    <li>Next, various conformers and binding poses for the compounds are generated and then
                      prioritized by CNN scoring. </li>
                  </ul>
                  <div class="gray-box">
                    <p>Input : 50M Cpds list & Target 3D structures</p>
                    <p>Output : Top ranked 500 Cpds & poses info.</p>
                  </div>
                </div>
              </div>
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <div class="img-holder no-dim">
                  <span>
                    <img src="/src/assets/static/images/img/qsl_grid_3.png" alt="False Positives Filtering">
                  </span>
                </div>
                <div class="txt-box">
                  <p class="name"><span>C</span>False Positives Filtering</p>
                  <ul class="dot-list">
                    <li>The best-pose is selected based on the binding energy of Cpds and false positives are filtered
                      out through auto-MD simulation.</li>
                    <li>The Cpds are then scored based on various factors for each best-poses. </li>
                  </ul>
                  <div class="gray-box">
                    <p>Input : Poses of the top ranked 500 Cpds</p>
                    <p>Output : List of 200 Cpds with false positives filtered</p>
                  </div>
                </div>
              </div>
              <div class="box" data-aos="fade-up" data-aos-delay="200">
                <div class="img-holder no-dim">
                  <span>
                    <img src="/src/assets/static/images/img/qsl_grid_4.png" alt="Technical Performance">
                  </span>
                </div>
                <div class="txt-box">
                  <p class="name"><span>D</span>Technical Performance</p>
                  <ul class="dot-list">
                    <li>The final HIT candidates are re-ranked with our own scoring functions, providing a list of 
                      ~200 top-ranked compounds that are ready-to-purchase without any synthesis steps.</li>
                  </ul>
                  <div class="gray-box">
                    <p>Input : The screening score of 200 Cpds</p>
                    <p>Output : Priority of ~200 Cpds list</p>
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
                <li>Screening novel scaffolds for NME development based on physics informed deep learning</li>
                <li>Discovering novel HIT compounds that can secure material patents from the early stage</li>
                <li>Support HIT-to-Lead optimization by in silico derivatives design solution (STB’s Auto Lead-Gen)
                </li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Ragoza, Matthew, et al. "Protein–ligand scoring with convolutional neural networks." Journal of
                    chemical information and modeling 57.4 (2017): 942-957.</li>
                  <li>Syntekabio’s Hit to Preclinical Candidate on Cloud Computing, BioPharmaTrend, Vol4. 2023.</li>
                  <li>How Syntekabio’s Supercomputing Enables AI-driven Drug Discovery, BioPharmaTrend, Vol3. 2023
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