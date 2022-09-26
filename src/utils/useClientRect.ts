import { useState, useCallback } from "react";

export const useClientRect = <T extends Element = Element>(): [
  DOMRect | null,
  (node: T | null) => void
] => {
  const [rect, setRect] = useState<DOMRect | null>(null);
  const ref = useCallback((node: T | null) => {
    if (node != null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
};
