<template>
  <!-- common-contentTapGap -->
  <div class="common-contentTapGap" id="sub">

    <!-- box-wrap -->
    <div class="box-wrap">
      <!-- inner-wrap -->
      <div class="inner-wrap">

        <!-- sub-top 상세페이지 "detail" 클래스 추가 -->
        <!-- <div class="sub-top detail">
          <div class="sub-top-kv kir">
            <div class="bg-img"></div>
          </div>
          <div class="inner-gap-2">
            <div class="sub-top-text">
              <h2 class="tit" data-aos="fade-up" data-aos-delay="200">KIR typing : High resolution human KIR
                genotyping</h2>
              <p class="txt" data-aos="fade-up" data-aos-delay="400">
                KIR typing by detection of all human KIR genes and alleles at the genomic DNA <br>
                KIR typing platform to analyze the KIR genes at the highest resolution by KIR exon/loci <br
                  class="pc-show">
                read depth and considering copy numbers of highly homologous sequences of 15 KIR genes
              </p>
              <a href="#none" class="common-btnType-4"><span>Service Apply</span></a>
            </div>
          </div>
        </div> -->
        <!-- sub-top -->

        <div>
          <AppSubTop title="KIR typing : High resolution human KIR genotyping" :titleDelay="200" text="KIR typing by detection of all human KIR genes and alleles at the genomic DNA <br> KIR typing platform to analyze the KIR genes at the highest resolution by KIR exon/loci <br class='pc-show'> read depth and considering copy numbers of highly homologous sequences of 15 KIR genes"
            :textDelay="400" additionalClass="kir" />
        </div>

        <div class="inner-gap-2">
          <div class="kir-cnt detailMax">
            <!-- sub-moreGap -->
            <div class="sub-moreGap small-tit mg-0">
              <h3 class="sub-h3" data-aos="fade-up" data-aos-offset="200">Solution</h3>
            </div>
            <!-- //sub-moreGap -->
            <!-- border-grid -->
            <div class="border-grid">
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">What are the advantages of NGS-based KIR genotyping?</p>
                <p class="txt">The advantages of NGS-based KIR gene analysis include high-resolution analysis,
                  comprehensive assessment of genetic variations, and the detection of rare variants. An NGS-based
                  approach is excellent for accurately characterizing the complex genetic diversity of KIR genes and
                  their associations with immune responses and diseases.
                </p>
              </div>
              <div class="item" data-aos="fade-up" data-aos-offset="200">
                <p class="tit">How can KIR genotyping enhance NK cell therapy in cancer?
                </p>
                <p class="txt">KIR genotyping provides valuable insights into the genetic diversity of NK cells and
                  their interactions with cancer cells, thereby offering opportunities to optimize NK cell therapy and
                  improve outcomes for cancer patients.
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
                    <img src="/src/assets/static/images/img/kir_workflow_1.png"
                      alt="The extended Leukocyte Receptor Complex (19q13.4) and a KIR haplotype" class="pc-show">
                    <img src="/src/assets/static/images/img/kir_workflow_1_mo.png"
                      alt="The extended Leukocyte Receptor Complex (19q13.4) and a KIR haplotype" class="mo-show">
                  </div>
                </div>
                <div class="img-box" data-aos="fade-up" data-aos-offset="200">
                  <p class="cnt">B</p>
                  <div class="img">
                    <img src="/src/assets/static/images/img/kir_workflow_2.png"
                      alt="Information of KIR haplotype variation in genee" class="pc-show">
                    <img src="/src/assets/static/images/img/kir_workflow_2_mo.png"
                      alt="Information of KIR haplotype variation in genee" class="mo-show">
                  </div>
                </div>
                <div class="img-box" data-aos="fade-up" data-aos-offset="200">
                  <p class="cnt">C</p>
                  <div class="img">
                    <img src="/src/assets/static/images/img/kir_workflow_3.png"
                      alt="Work process of KIR haplotyping phasing using KIRscan" class="pc-show">
                    <img src="/src/assets/static/images/img/kir_workflow_3_mo.png"
                      alt="Work process of KIR haplotyping phasing using KIRscan" class="mo-show">
                  </div>
                </div>
              </div>
              <ul class="dot-list">
                <li>Figure A) The extended Leukocyte Receptor Complex (19q13.4) and a KIR haplotype. KIR genes are
                  encoded within a 150 Kb stretch of the 1 Mb long extended LRC on chromosome 19. 15 gene loci
                  (yellow) and two KIR pseudogenes (http://www.ebi.ac.uk/ipd/kir/). Figure B) Information of KIR
                  haplotype variation in gene, We calculated the allele type for each gene from the reference database
                  (http://www.ebi.ac.uk/ipd/kir/). Figure C) Work process of KIR haplotyping phasing using KIRscan.
                  KIRscan involves extracting and sequencing the target gene's DNA using Next Generation Sequencing
                  (NGS) technology, producing a variety of sequenced fragments ready for in-depth analysis</li>
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
                <li>Comprehending KIR gene profiles shows potential benefits across a range of medical disciplines,
                  including transplantation *1 and immunotherapy **2.</li>
                <li>In addition, KIRscan can be widely used in infectious diseases, autoimmune disorders, influencing
                  treatment strategies and outcomes can lead to new therapeutic approaches
                  (https://cloud.syntekabio.com).
                </li>
                <li>STB Software suites for SaaS can be utilized to (1) ABO typing for , and (2) HLA typing in STB
                  CLOUD</li>
              </ul>
              <div class="references" data-aos="fade-up" data-aos-offset="200">
                <span>References:</span>
                <ul class="dot-list">
                  <li>Ka et al. “HLAscan: genotyping of the HLA region using next-generation sequencing data” BMC
                    Bioinformatics. 2017 May 12;18(1):258.
                  </li>
                  <li>Hsu KC, Chida S, Geraghty DE, Dupont B. The killer cell immunoglobulin-like receptor (KIR)
                    genomic region: gene-order, haplotypes and allelic polymorphism. Immunol Rev (2002) 190:40-52
                  </li>
                  <li>https://www.ebi.ac.uk/ipd/kir/alleles.html</li>
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