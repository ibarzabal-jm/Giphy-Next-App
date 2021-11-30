import {useEffect, useRef, useState} from "react";

export const useNearScreen = (distance = "100px") => {
  const [isNear, setIsNear] = useState<boolean>(false);
  const fromRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onChange = (entries: IntersectionObserverEntry[]) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setIsNear(true);
        observer.disconnect();
      }
    };
    const observer = new IntersectionObserver(onChange, {rootMargin: distance});

    observer.observe(fromRef.current!);

    return () => observer.disconnect();
  }, [distance]);

  return {isNearScreen: isNear, fromRef};
};
