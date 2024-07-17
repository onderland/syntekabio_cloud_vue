/**
 * 네비게이션 라우터
 *
 * title - 네비게이션에 표시되는 타이틀
 * name - Vue 라우터 이름
 */
export const ABOUT_ROUTES = [
  { title: 'Platform', name: 'platform' },
  // { title: 'Synteka', name: 'synteka' },
  {
    title: 'Data materials',
    name: 'materials',
    children: [
      { title: 'Data materials', name: 'materials' },
      { title: 'Introduction to Technology', name: 'materials introduction' }
    ]
  },
  {
    title: 'Scientific publications',
    name: 'publication',
    children: [
      { title: 'Scientific Publications', name: 'publication' },
      { title: 'Case studies', name: 'publication studies' }
    ]
  },
  // { title: 'Service', name: 'service' }
  {
    title: 'Service',
    name: 'ServiceMain',
    // children: [
    //   { title: 'ServiceMain', name: 'ServiceMain' },
    //   { title: 'AUTOBP', name: 'AUTOBP' },
    //   { title: '3bmGPT', name: '3bmGPT' },
    //   { title: 'LFSHITSCR', name: 'LFSHITSCR' },
    //   { title: 'ZincHITSCR', name: 'ZincHITSCR' },
    //   { title: 'DRHITSCR', name: 'DRHITSCR' },
    //   { title: 'NEOARS', name: 'NEOARS' },
    // ]
  },
];

export const MATERIAL_ROUTES = [
  { title: 'Data materials', name: 'materials' },
  { title: 'Introduction to Technology', name: 'materials introduction' }
];

export const PUBLICATION_ROUTES = [
  { title: 'Scientific Publications', name: 'publication' },
  { title: 'Case studies', name: 'publication studies' }
];
