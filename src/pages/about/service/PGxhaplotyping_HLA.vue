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
            <div class="bg-img" style="background: url(../static/images/@/@hla_kv.png); background-position: 17%;">
            </div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">HLA typing : High resolution HLA genotyping for
                Immunology research</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                HLA typing services are vital for transplantation, autoimmune, and infectious diseases, as well as
                vaccine development and personalized pharmacogenomics. Comprehensive understanding of unambiguous HLA
                genes helps resolve genotyping challenges due to high genomic polymorphism. advanced HLA genotyping
                ensures accuracy by considering read depth and distribution.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop bgImage="/src/assets/static/images/@/@hla_kv.png"
            title="HLA typing : High resolution HLA genotyping for Immunology research" :titleDelay="200"
            :textDelay="400"
            text="HLA typing services are vital for transplantation, autoimmune, and infectious diseases, as well as vaccine development and personalized pharmacogenomics. Comprehensive understanding of unambiguous HLA genes helps resolve genotyping challenges due to high genomic polymorphism. advanced HLA genotyping ensures accuracy by considering read depth and distribution." />
        </div>

        <div class="inner-gap-2">
          <div class="detailMax cyp-cnt hla">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">
                  How does genetic matching affect organ transplant success?
                </p>
                <p class="txt">
                  HLA genotyping in genetic matching enhances compatibility between donor and recipient, reducing
                  rejections and improving transplant outcomes.
                </p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">
                  How is genetic profiling useful in preventing drug hypersensitivity?
                </p>
                <p class="txt">
                  Genetic profiling, through HLA analysis, identifies individuals at risk for adverse drug reactions,
                  enabling the selection of safer drugs and improving treatment effectiveness.
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
                    <div class="img-3">
                      <img src="/src/assets/static/images/img/hla_workflow_1.png" alt="Genotyping Tier 01"
                        class="pc-show">
                      <img src="/src/assets/static/images/img/hla_workflow_1_mo.png" alt="Genotyping Tier 01"
                        class="mo-show">
                      <div class="num">Tier 01</div>
                    </div>
                    <div class="img-4">
                      <img src="/src/assets/static/images/img/hla_workflow_2.png" alt="Genotyping Tier 02"
                        class="pc-show">
                      <img src="/src/assets/static/images/img/hla_workflow_2_mo.png" alt="Genotyping Tier 02"
                        class="mo-show">
                      <div class="num">Tier 02</div>
                    </div>
                  </div>
                </div>
                <div class="box" data-aos="fade-up" data-aos-offset="200">
                  <div class="title">B. Gene list</div>
                  <div class="inner">
                    <div class="img size-1">
                      <img src="/src/assets/static/images/img/hla_workflow_3.png" alt="Gene list" class="pc-show">
                      <img src="/src/assets/static/images/img/hla_workflow_3_mo.png" alt="Gene list" class="mo-show">
                    </div>
                  </div>
                </div>
                <div class="box table" data-aos="fade-up" data-aos-offset="200">
                  <div class="border-table">
                    <div class="table-inner">
                      <div class="thead">
                        <ul>
                          <li>C. HLA typing accuracy</li>
                        </ul>
                      </div>
                      <div class="tbody">
                        <ul class="type-1">
                          <li class="gray">- 1000 Genome</li>
                          <li class="body-hd">
                            <div class="td-hd">-</div>
                            <div class="td-hd">Genes, N</div>
                            <div class="td-hd">No. of alleles</div>
                            <div class="td-hd">Accuracy</div>
                          </li>
                          <li>
                            <div class="td black">2-digit</div>
                            <div class="td">5</div>
                            <div class="td">110</div>
                            <div class="td">100%</div>
                          </li>
                          <li>
                            <div class="td black">4-digit</div>
                            <div class="td">5</div>
                            <div class="td">110</div>
                            <div class="td">100%</div>
                          </li>
                        </ul>
                        <ul class="type-2">
                          <li class="gray">- HapMap</li>
                          <li class="body-hd">
                            <div class="td-hd">Gene</div>
                            <div class="td-hd">HLA-A</div>
                            <div class="td-hd">HLA-B</div>
                            <div class="td-hd">HLA-C</div>
                            <div class="td-hd">HLA-<br class="mo-show">DQB1</div>
                            <div class="td-hd">HLA-<br class="mo-show">DRB1</div>
                          </li>
                          <li>
                            <div class="td black"># alleles</div>
                            <div class="td">36</div>
                            <div class="td">36</div>
                            <div class="td">22</div>
                            <div class="td">92</div>
                            <div class="td">90</div>
                          </li>
                          <li>
                            <div class="td black">2-digit</div>
                            <div class="td">100%</div>
                            <div class="td">100%</div>
                            <div class="td">100%</div>
                            <div class="td">100%</div>
                            <div class="td">96.70%</div>
                          </li>
                          <li>
                            <div class="td black">4-digit</div>
                            <div class="td">100%</div>
                            <div class="td">100%</div>
                            <div class="td">90.0%</div>
                            <div class="td">91.3%</div>
                            <div class="td">95.6%</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="dot-list" data-aos="fade-up" data-aos-offset="200">
                <li>
                  Fig. A Using the IMGT-HLA Database, we refine HLA allele typing by integrating a Read Distribution
                  Score (RDS) to minimize allele ambiguity, an Exon Clustering Score (ECS) for exon profiling, and an
                  Allele Pair Score (APS) to assess allele pair compatibility.
                </li>
                <li>Fig. B Our service offers a comprehensive HLA genotyping workflow, categorizing HLA genes into MHC
                  class I and II </li>
                <li>Fig. C The high accuracy of our method has been validated in two different cohorts.</li>
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
                <li class="li-type-1">HLA typing platform is a widely used in organ transplantation, gene therapy and
                  research of immune related disease</li>
                <li>Pre-post drug monitoring for pharmacogenomics and other hypersensitivity reactions</li>
                <li>Biomarker discovery of antibody epitope prediction and neoantigen identification in vaccine and
                  drug development</li>
                <li>Genetic mutation testing for disease diagnosis</li>
                <li class="li-type-1">HLAscan is responsible for a partial function of our NEO-ARS.</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Ka et al. “HLAscan: genotyping of the HLA region using next-generation sequencing data” BMC
                    Bioinformatics. 2017 May 12;18(1):258.</li>
                  <li>Systems and methods that provide information for personal neoantigen-targeted immunotherapy
                    using big data of molecular dynamics based on AI model. Korea Patent No. 10-2406699. 2022</li>
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