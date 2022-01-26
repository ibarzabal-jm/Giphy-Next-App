import {useEffect, useRef} from "react";

type Event = MouseEvent | TouchEvent;

const useOutside = (handler: (event: Event) => void) => {
  const domNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const listener = (event: Event) => {
      const el = domNode?.current;

      if (!el || el.contains((event?.target as Node) || null)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [domNode, handler]);

  return domNode;
};

export default useOutside;
