import {RefObject, useEffect, useRef, useState} from "react";

interface useNearParams {
  distance?: string;
  externalRef?: RefObject<HTMLDivElement> | null;
  once?: boolean;
}

export const useNearScreen = ({distance = "100px", externalRef, once = false}: useNearParams) => {
  const [isNear, setIsNear] = useState<boolean>(false);
  const fromRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = externalRef ? externalRef.current : fromRef.current;
    const onChange = (entries: IntersectionObserverEntry[]) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setIsNear(true);
        once && observer.disconnect();
      } else {
        setIsNear(false);
      }
    };
    const observer = new IntersectionObserver(onChange, {rootMargin: distance});

    element && observer.observe(element);

    return () => observer && observer.disconnect();
  }, [distance, externalRef]);

  return {isNearScreen: isNear, fromRef};
};
