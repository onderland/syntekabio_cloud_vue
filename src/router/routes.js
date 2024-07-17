export const aboutRoutes = [
  {
    path: '',
    name: 'main',
    component: () => import('@/pages/about/AboutMain.vue')
  },
  {
    path: '/faq',
    name: 'faq',
    component: () => import('@/pages/about/AboutFaq.vue')
  },
  {
    path: '/synteka',
    name: 'synteka',
    component: () => import('@/pages/about/synteka/AboutSynteka.vue')
  },
  {
    path: '/platform',
    name: 'platform',
    component: () => import('@/pages/about/platform/AboutPlatform.vue')
  },
  {
    path: '/data',
    redirect: '/data/materials',
    children: [
      {
        path: 'materials',
        name: 'materials',
        component: () => import('@/pages/about/science/AboutDataMaterial.vue')
      },
      {
        path: 'introduction',
        name: 'materials introduction',
        component: () => import('@/pages/about/science/AboutIntroductionTech.vue')
      }
    ]
  },
  {
    path: '/scientific',
    redirect: '/scientific/publication',
    children: [
      {
        path: 'publication',
        name: 'publication',
        component: () => import('@/pages/about/publication/ScientificPublication.vue')
      },
      {
        path: 'studies',
        name: 'publication studies',
        component: () => import('@/pages/about/publication/AboutScienceStudies.vue')
      }
    ]
  },
  {
    path: '/service',
    name: 'service',
    redirect: '/service',
    children: [
      {
        path: 'ServiceMain',
        name: 'ServiceMain',
        component: () => import('@/pages/about/service/ServiceMain.vue')
      },
      {
        path: 'AUTOBP',
        name: 'AUTOBP',
        component: () => import('@/pages/about/service/Bestpose_AutoBp.vue')
      },
      {
        path: '3bmGPT',
        name: '3bmGPT',
        component: () => import('@/pages/about/service/Bestpose_3bmGPT.vue')
      },
      {
        path: 'LFSHITSCR',
        name: 'LFSHITSCR',
        component: () => import('@/pages/about/service/Bestpose_LFSHITSCR.vue')
      },
      {
        path: 'ZincHITSCR',
        name: 'ZincHITSCR',
        component: () => import('@/pages/about/service/Bestpose_ZincHITSCR.vue')
      },
      {
        path: 'DRHITSCR',
        name: 'DRHITSCR',
        component: () => import('@/pages/about/service/Bestpose_DRHITSCR.vue')
      },
      {
        path: 'NEOARS',
        name: 'NEOARS',
        component: () => import('@/pages/about/service/Neoantigen_NEOARS.vue')
      },
      {
        path: 'MOAALL',
        name: 'MOAALL',
        component: () => import('@/pages/about/service/MoATox_MOAALL.vue')
      },
      {
        path: 'MOATOX',
        name: 'MOATOX',
        component: () => import('@/pages/about/service/MoATox_MOATOX.vue')
      },
      {
        path: 'MOAKINASE',
        name: 'MOAKINASE',
        component: () => import('@/pages/about/service/MoATox_MOAKINASE.vue')
      },
      {
        path: 'MOAGPCR',
        name: 'MOAGPCR',
        component: () => import('@/pages/about/service/MoATox_MOAGPCR.vue')
      },
      {
        path: 'NGSARS',
        name: 'NGSARS',
        component: () => import('@/pages/about/service/Biomarker_NGSARS.vue')
      },
      {
        path: 'CYP',
        name: 'CYP',
        component: () => import('@/pages/about/service/PGxhaplotyping_CYP.vue')
      },
      {
        path: 'HLA',
        name: 'HLA',
        component: () => import('@/pages/about/service/PGxhaplotyping_HLA.vue')
      },
      {
        path: 'KIR',
        name: 'KIR',
        component: () => import('@/pages/about/service/PGxhaplotyping_KIR.vue')
      },
      {
        path: 'ABO',
        name: 'ABO',
        component: () => import('@/pages/about/service/PGxhaplotyping_ABO.vue')
      }
    ]
  },
  {
    path: '/terms',
    name: 'terms',
    component: () => import('@/pages/about/terms/AboutTerms.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('@/pages/about/privacy/AboutPrivacy.vue')
  }
];


// export const syntekaRoutes = [
//   {
//     path: '/synteka',
//     name: 'synteka',
//     component: () => import('@/pages/about/synteka/AboutSynteka.vue')
//   }
// ];