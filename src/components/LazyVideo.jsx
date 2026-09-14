import { useEffect, useRef, useState } from 'react';

export function LazyVideo({ src, className }) {
  const videoRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setShouldLoad(true);
      observer.disconnect();
    }, { rootMargin: '240px 0px' });

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video ref={videoRef} className={className} autoPlay muted loop playsInline preload="none" aria-hidden="true">
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
