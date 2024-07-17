export const useAbout = () => {
  /**
   * 맨 위로가기 이벤트
   */
  const onScrollTop = () => {
    //document.documentElement.scrollTop = 0;
  };

  /**
   * 메인 헤더 (about-main-header) 클래스 활성화 여부 가져오기
   *
   * @param {Object} options
   * @param {string} options.routeName - 라우터 이름
   * @param {number} options.scrollTop - 스크롤 값
   * @returns {boolean} 메인 헤더 (about-main-header) 클래스 활성화 여부
   */
  const getMainHeaderClassIsActive = (options) => {
    const { routeName, scrollTop } = options;

    return routeName === 'main' && scrollTop < 800;
  };

  return {
    onScrollTop,
    getMainHeaderClassIsActive
  };
};
