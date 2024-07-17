<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">

    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv ngs">
            <div class="bg-img"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">Automatic Reporting System for NGS clinical
                genomics <br>(NGS-ARS)</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                The comprehensive solution provides advanced clinical genomics interpretation and prioritization using
                validated genetic variant detection algorithms and multi-omics big data, focusing on cancer and rare
                diseases. Delivering genomic analysis reports to patients through the implementation of Standard
                Operating Procedures (SOPs) aligned with ACMG/AMP guidelines. These procedures interpret
                Next-Generation Sequencing (NGS) clinical data and predict FDA drug information linked with disease
                mutations.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop additionalClass="ngs" title="Automatic Reporting System for NGS clinical genomics <br>(NGS-ARS)"
            :titleDelay="200" :textDelay="400"
            text="The comprehensive solution provides advanced clinical genomics interpretation and prioritization using validated genetic variant detection algorithms and multi-omics big data, focusing on cancer and rare diseases. Delivering genomic analysis reports to patients through the implementation of Standard Operating Procedures (SOPs) aligned with ACMG/AMP guidelines. These procedures interpret Next-Generation Sequencing (NGS) clinical data and predict FDA drug information linked with disease mutations." />
        </div>

        <div class="inner-gap-2">
          <div class="ngs-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-text -->
            <div class="border-text">
              <p class="tit">What are the primary purposes and advantages of utilizing an automatic interpretation and
                reporting system in the context of NGS genetic testing?</p>
              <p class="txt">
                NGS automatic interpretation and reporting systems are essential for NGS genetic testing due to the
                complexity and volume of data, requiring standardization, consistency, timely results, accurate
                variant interpretation. They play a crucial role in improving patient care by providing detailed
                genetic insights to assist doctors in diagnosis, treatment planning, and patient counseling.
              </p>
            </div>
            <!-- //border-text -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- ngs-workflow -->
            <div class="ngs-workflow" data-aos="fade-up" data-aos-offset="200">
              <div class="title">Interpretation & reporting process for <br class="mo-show">NGS clinical genomics
              </div>
              <div class="grid-box">
                <div class="box full">
                  <div class="top-img">
                    <img src="/src/assets/static/images/img/ngs_info_1.png"
                      alt="Interpretation & reporting process for NGS clinical genomics" class="pc-show">
                    <img src="/src/assets/static/images/img/ngs_info_1_mo.png"
                      alt="Interpretation & reporting process for NGS clinical genomics" class="mo-show">
                  </div>
                </div>
                <div class="box paper">
                  <p class="name">Whitepaper NGS-ARS v1.5(2021)</p>
                  <div class="paper-img">
                    <img src="/src/assets/static/images/img/ngs_info_2.png" alt="Whitepaper NGS-ARS v1.5(2021)">
                  </div>
                </div>
                <div class="box table">
                  <div class="border-table table-1">
                    <div class="table-inner">
                      <div class="thead">
                        <ul>
                          <li>ADlscan : Quality Assurance of Genetic Testing Results <br class="pc-show">(KIGTE
                            (2018-2022))</li>
                        </ul>
                      </div>
                      <div class="tbody">
                        <ul>
                          <li>
                            <p class="name">Somatic/<br>Germline</p>
                            <div class="item-box">
                              <div class="item">Precision</div>
                              <div class="item">Recall</div>
                              <div class="item">Sensitivity</div>
                              <div class="item">Specificty</div>
                            </div>
                            <div class="item-box gray">
                              <div class="item">100%</div>
                              <div class="item">100%</div>
                              <div class="item">100%</div>
                              <div class="item">100%</div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- //ngs-workflow -->
            <ul class="dot-list">
              <li>Fig A) NGS-ARS platform automates the entire process from pre-processing of NGS data, BAM
                generation, variant calling, to clinical interpretation and reporting. B) The SNV and CNV variants
                extracted by clinical genomics variant calling algorithms generate personalized drug reports for
                targeted therapy through interpretation and prioritization. C) The genetic variant detection
                algorithms of NGS-ARS have been validated through years of work at the NGS panel test authentication
                organization. They achieve an accuracy, sensitivity, and specificity of over 99.9%, providing the
                highest quality in disease mutation analysis.</li>
            </ul>
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>This can be used for various purposes of genomics analysis, such as clinical decision-making
                  support for NGS genetic testing, carrier testing, and testing of a fetus for a suspected genetic
                  condition for diagnosis and targeted therapy guides, and customized medical services for healthcare.
                </li>
                <li>Clinical research for discovering new disease-associated biomarkers</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Cho et al. “Development of the variant calling algorithm, ADIScan, and its use to estimate
                    discordant sequences between monozygotic twins” Nucleic Acids Research. 2018 Sep 6;46(15):e92.
                  </li>
                  <li>Ka et al. “HLAscan: genotyping of the HLA region using next-generation sequencing data” BMC
                    Bioinformatics. 2017 May 12;18(1):258.</li>
                  <li>Lee, Sunho, et al. "RDscan: A New Method for Improving Germline and Somatic Variant Calling
                    Based on Read Depth Distribution." Journal of Computational Biology 29.9 (2022): 987-1000.</li>
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