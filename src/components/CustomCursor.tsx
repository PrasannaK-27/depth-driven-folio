import { useEffect, useRef, useState } from "react";

/**
 * Instant 1:1 cursor. Position is written directly to the DOM in the
 * pointermove handler (no easing/spring), only scale + color transition.
 */
export function CustomCursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const el = ref.current;
    if (!el) return;

    const move = (e: PointerEvent) => {
      el.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      setVisible(true);
      const target = e.target as HTMLElement | null;
      setActive(!!target?.closest("a, button, [data-cursor='hover'], input, textarea"));
    };
    const leave = () => setVisible(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerleave", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[100] hidden md:block"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="rounded-full transition-[width,height,background-color,border-color,opacity] duration-150 ease-out"
        style={{
          width: active ? 42 : 10,
          height: active ? 42 : 10,
          border: active ? "1.5px solid var(--amber-accent)" : "1.5px solid transparent",
          backgroundColor: active
            ? "color-mix(in oklab, var(--amber-accent) 15%, transparent)"
            : "var(--amber-accent)",
          transform: "translate(-50%, -50%)",
          marginLeft: 0,
        }}
      />
    </div>
  );
}
