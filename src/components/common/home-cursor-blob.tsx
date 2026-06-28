"use client";

import { useEffect, useRef, useState } from "react";

export function HomeCursorBlob() {
  const blobRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) {
      return;
    }

    let animationFrame = 0;
    let x = -200;
    let y = -200;
    let currentTarget: Element | null = null;

    function paint() {
      animationFrame = 0;
      if (!blobRef.current) {
        return;
      }

      blobRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    }

    function handlePointerMove(event: PointerEvent) {
      if (event.pointerType !== "mouse") {
        return;
      }

      const target = event.target instanceof Element
        ? event.target.closest("[data-cursor-blob]")
        : null;

      if (!target) {
        if (currentTarget) {
          currentTarget = null;
          setActive(false);
        }
        return;
      }

      currentTarget = target;
      x = event.clientX;
      y = event.clientY;
      setActive(true);

      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(paint);
      }
    }

    function hideBlob() {
      currentTarget = null;
      setActive(false);
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", hideBlob);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", hideBlob);
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  return (
    <div
      ref={blobRef}
      aria-hidden="true"
      className={active ? "home-cursor-blob home-cursor-blob--active" : "home-cursor-blob"}
    />
  );
}
