<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">

    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv cyp">
            <div class="bg-img" style="background: url(../static/images/@/@pgx_kv.png); background-position: 71%;">
            </div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">CYP typing : High accuracy CYP genotyping for
                pharmacogenomics</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                CYP genotyping facilitates early drug interaction risk assessment and supports detailed genotyping to
                identify genetic variations. The NGS-based method detects CYP genotypes for key pharmacogenomics with
                high
                accuracy.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop additionalClass="cyp" title="CYP typing : High accuracy CYP genotyping for pharmacogenomics"
            :titleDelay="200" :textDelay="400"
            text="CYP genotyping facilitates early drug interaction risk assessment and supports detailed genotyping to identify genetic variations. The NGS-based method detects CYP genotypes for key pharmacogenomics with high accuracy."
            bgImage="/src/assets/static/images/@/@pgx_kv.png" />
        </div>

        <div class="inner-gap-2">
          <div class="detailMax cyp-cnt">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">
                  How does personal data enhance drug safety and efficacy?
                </p>
                <p class="txt">
                  CYP genotyping tailors drug dosages to individual metabolism, improving safety and efficacy by
                  minimizing side effects and boosting treatment success.
                </p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">
                  How does metabolic data impact drug development?
                </p>
                <p class="txt">
                  CYP genotyping aids in spotting drug interactions early in drug development, enabling the design of
                  safer, more effective drugs for varied metabolic profiles.
                </p>
              </div>
            </div>
            <!-- //border-grid -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- workflow -->
            <div class="workflow">
              <div class="grid-box">
                <div class="box" data-aos="fade-up" data-aos-offset="200">
                  <div class="title">A. Genotyping</div>
                  <div class="inner type-a">
                    <div class="img-1">
                      <img src="/src/assets/static/images/img/cyp_workflow_1.png" alt="Genotyping Tier 01"
                        class="pc-show">
                      <img src="/src/assets/static/images/img/cyp_workflow_1_mo.png" alt="Genotyping Tier 01"
                        class="mo-show">
                      <div class="num">Tier 01</div>
                    </div>
                    <div class="img-2">
                      <img src="/src/assets/static/images/img/cyp_workflow_2.png" alt="Genotyping Tier 02"
                        class="pc-show">
                      <img src="/src/assets/static/images/img/cyp_workflow_2_mo.png" alt="Genotyping Tier 02"
                        class="mo-show">
                      <div class="num">Tier 02</div>
                    </div>
                  </div>
                </div>
                <div class="box" data-aos="fade-up" data-aos-offset="200">
                  <div class="title">B. Gene list</div>
                  <div class="inner">
                    <div class="img">
                      <img src="/src/assets/static/images/img/cyp_workflow_3.png" alt="Gene list" class="pc-show">
                      <img src="/src/assets/static/images/img/cyp_workflow_3_mo.png" alt="Gene list" class="mo-show">
                    </div>
                  </div>
                </div>
                <div class="box table" data-aos="fade-up" data-aos-offset="200">
                  <div class="border-table">
                    <div class="table-inner">
                      <div class="thead">
                        <ul>
                          <li>C. HLA typing accuracy (- 1000 Genome)</li>
                        </ul>
                      </div>
                      <div class="tbody">
                        <ul>
                          <li class="body-hd">
                            <div class="td-hd">DB</div>
                            <div class="td-hd">Gene</div>
                            <div class="td-hd">Accuracy (%)</div>
                          </li>
                          <li>
                            <div class="td-1">GeTRM</div>
                            <div class="td-box n-1">
                              <div class="td">CYP2A6</div>
                              <div class="td">CYP2B6</div>
                              <div class="td">CYP2C19</div>
                              <div class="td">CYP2C8</div>
                              <div class="td">CYP2C9</div>
                              <div class="td">CYP2D6</div>
                              <div class="td">CYP3A4</div>
                            </div>
                            <div class="td-box n-2">
                              <div class="td">92</div>
                              <div class="td">89</div>
                              <div class="td">95</div>
                              <div class="td">100</div>
                              <div class="td">100</div>
                              <div class="td">93</div>
                              <div class="td">99</div>
                            </div>
                          </li>
                          <li>
                            <div class="td-1">PGRN</div>
                            <div class="td-box n-1">
                              <div class="td">CYP2D6</div>
                            </div>
                            <div class="td-box n-2">
                              <div class="td">91</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="dot-list" data-aos="fade-up" data-aos-offset="200">
                <li>Fig. A CYPscan utilizes allele sequences from the PharmVar database, optimizing typing with Read
                  Distribution Score (RDS) to minimize ambiguity. Exon Clustering Score (ECS) groups alleles based on
                  shared variants, refining characterization through exon profiling. Allele Pair Score (APS) evaluates
                  pairs to minimize variant coverage discrepancies. Fig. B Our service focuses on CYP genes crucial
                  for
                  major drug metabolism. Fig. C This methodology achieves 100% concordance for CYP2C8, CYP2C9, and 99%
                  for
                  CYP3A4 against benchmarks. Such precision enhances pharmacogenomic profiling accuracy, facilitating
                  personalized medicine</li>
              </ul>
            </div>
            <!-- //workflow -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>Medication types to individual metabolic profiles</li>
                <li>Advances in precision medicine by identifying how patients metabolize different drugs.</li>
                <li>in predicting drug interactions and effectiveness during the drug development process.</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Ka et al. “HLAscan: genotyping of the HLA region using next-generation sequencing data” BMC
                    Bioinformatics. 2017 May 12;18(1):258.</li>
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