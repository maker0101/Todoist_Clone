import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const isWidthLarger720 = window.innerWidth > 720;
  const [isDesktop, setIsDesktop] = useState(isWidthLarger720);
  const updateMedia = () => setIsDesktop(isWidthLarger720);

  useEffect(() => {
    window.addEventListener('resize', updateMedia);
    return () => window.removeEventListener('resize', updateMedia);
  });

  return { isWidthLarger720, isDesktop };
};

export default useMediaQuery;
