"use client";

import { useEffect, useRef, type ComponentPropsWithoutRef, type ElementType } from "react";

type RevealProps<T extends ElementType> = {
  as?: T;
  index?: number;
} & ComponentPropsWithoutRef<T>;

// Aparece una sola vez al entrar en pantalla. El CSS vive en globals.css (.reveal).
export function Reveal<T extends ElementType = "div">({
  as,
  index = 0,
  className = "",
  style,
  ...props
}: RevealProps<T>) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = (as ?? "div") as ElementType;
  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--i": index, ...style }}
      {...props}
    />
  );
}
