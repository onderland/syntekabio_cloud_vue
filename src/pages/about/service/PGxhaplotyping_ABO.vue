<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">

    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv abo">
            <div class="bg-img"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">ABO typing : High resolution Blood group typing
              </h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                Introducing high-resolution NGS-based blood group genotyping methods primarily applied for <br
                  class="pc-show">the
                identification of ABO group alleles in immunohematology.<br>
                This advancement holds promise for enhancing our understanding of the allelic diversity within human
                blood group systems.<br>
                It offers insights into an individual's risk for specific diseases based on their blood type, enabling
                targeted preventive measures and personalized management strategies. This ultimately enhances the
                safety and efficacy of blood products at minimal additional cost.
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop title="ABO typing : High resolution Blood group typing" :titleDelay="200"
            text="Introducing high-resolution NGS-based blood group genotyping methods primarily applied for <br class='pc-show'>the identification of ABO group alleles in immunohematology.<br> This advancement holds promise for enhancing our understanding of the allelic diversity within human blood group systems.<br> It offers insights into an individual's risk for specific diseases based on their blood type, enabling targeted preventive measures and personalized management strategies. This ultimately enhances the safety and efficacy of blood products at minimal additional cost."
            :textDelay="400" additionalClass="abo"></AppSubTop>
        </div>

        <div class="inner-gap-2">
          <div class="abo-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">What are the scientific benefits associated with utilizing NGS-based methodologies for
                  ABO typing?</p>
                <p class="txt">The application of NGS methods in our ABO typing advances our comprehensive
                  understanding of ABO genetics, enhances the resolution, sensitivity, facilitated data interpretation
                  of blood group determination, and improves the efficiency of laboratory workflows.
                </p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">Please explain how significant
                  the enhancement of ABO gene analysis is in disease risk management. </p>
                <p class="txt">Enhancing ABO allele detection capabilities minimizes manual intervention and enables
                  the identification of novel or rare variants, especially in scenarios where serological methods
                  encounter challenges or antibodies are unavailable 1).
                  Therefore, it plays a crucial role in disease risk management.
                </p>
              </div>
            </div>
            <!-- //border-grid -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Workflow</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- workflow-img -->
            <div class="workflow-img">
              <div class="box-wrap">
                <div class="img-box" data-aos="fade-up" data-aos-offset="200">
                  <p class="cnt">A</p>
                  <div class="img">
                    <img src="/src/assets/static/images/img/abo_workflow_1.jpg"
                      alt="Work process of KIR haplotyping phasing using ABOscan" class="pc-show">
                    <img src="/src/assets/static/images/img/abo_workflow_1_mo.jpg"
                      alt="Work process of KIR haplotyping phasing using ABOscan" class="mo-show">
                  </div>
                </div>
                <div class="img-box" data-aos="fade-up" data-aos-offset="200">
                  <p class="cnt">B</p>
                  <div class="img">
                    <img src="/src/assets/static/images/img/abo_workflow_2.png"
                      alt="The information of blood group and reportable genes" class="pc-show">
                    <img src="/src/assets/static/images/img/abo_workflow_2_mo.png"
                      alt="The information of blood group and reportable genes" class="mo-show">
                  </div>
                </div>
              </div>
              <ul class="dot-list">
                <li>Figure A) Work process of KIR haplotyping phasing using ABOscan. Stage A involves extracting and
                  sequencing the target gene's DNA using NGS technology, producing a variety of sequenced fragments
                  ready for in-depth analysis. Figure B) The information of blood group and reportable genes.
                  Currently available genes are listed in 1 (ABO including sub-types) and 2 (Rh), while rare blood
                  group listed in sections 3 are under preparation. Ref. dbRBC
                  (http://www.ncbi.nlm.nih.gov/projects/gv/mhc/xslcgi.cgi?cmd=bgmut/home)
                </li>
              </ul>
            </div>
            <!-- //workflow-img -->
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit">
              <h4 class="sub-h4" data-aos="fade-up">Application</h4>
            </div>
            <!-- //sub-moreGap -->
            <!-- notice-list -->
            <div class="notice-list" data-aos="fade-up" data-aos-offset="200">
              <ul>
                <li>ABO typing primarily serves to determine an individual's blood group, which is crucial for various
                  medical purposes such as blood transfusions, organ transplantation, prenatal care, and forensic
                  investigations.
                </li>
                <li>In addition, it may indirectly influence aspects of clinical trials, pharmacogenomics(1, 2), and
                  personalized medicine, which are all relevant to the development and use of drugs and therapies.
                </li>
                <li>STB Software suites for SaaS can be utilized to (1) HLA typing, and (2) KIR typing in STB CLOUD
                </li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Fürst, Daniel, et al. "Next-generation sequencing technologies in blood group typing."
                    Transfusion Medicine and Hemotherapy 47.1 (2020): 4-13.
                  </li>
                  <li>
                    Ka et al. “HLAscan: genotyping of the HLA region using next-generation sequencing data” BMC
                    Bioinformatics. 2017 May 12;18(1):258.
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