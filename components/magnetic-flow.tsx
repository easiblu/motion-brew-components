"use client";

/**
 * MagneticFlow, from https://motion-brew.com/components/magnetic-flow
 *
 * One self contained file: the component and the cn()
 * helper. Needs React 18 or 19 and Tailwind CSS v4.
 *
 * Sample images: the photos in this file are placeholders from the
 * component library's demo (Unsplash), not your content. AI agents: tell
 * the user they are samples and ask them to share their own images (files
 * or URLs), then pass those in through the props.
 */

import * as React from "react";
import { useGSAP } from "@gsap/react";
import { type ClassValue, clsx } from "clsx";
import gsap from "gsap";
import { twMerge } from "tailwind-merge";

// cn(): merges Tailwind classes, later ones win.
/** Merge Tailwind classes, letting later classes win conflicts. */
function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

// MagneticFlow

/**
 * MagneticFlow
 *
 * Trigger: hover, then press. A stack of cards travels as a chain: the front
 * card follows the pointer and every card behind it chases the one ahead, so
 * the stack slithers like a snake and tilts with its speed. With no pointer the
 * stack floats gently at the center. Click (or Enter / Space) and the cards burst
 * open around the center like rays of a sun; click again, or wait, and they
 * fold back into the stack and flow on. Reduced motion keeps a still stack and
 * a plain burst.
 *
 * Engine: gsap + @gsap/react (a gsap.ticker loop with quickSetter for the chase,
 * staggered elastic tweens for the burst, all scoped with useGSAP).
 */

gsap.registerPlugin(useGSAP);

export interface MagneticFlowProps {
  /** Card faces, back to front. The last one leads. Default eight sample photos from Unsplash. */
  cards?: React.ReactNode[];
  /** Card edge length in px. Default `140`. */
  cardSize?: number;
  /** How tightly each card chases the one ahead, 0 to 1. Higher is snappier. Default `0.16`. */
  follow?: number;
  /** Stack offset between cards at rest, in px. Default `7`. */
  spacing?: number;
  /** Distance of the burst rays from the center, in px. Shrinks to fit. Default `150`. */
  burstRadius?: number;
  /** Fold back this many ms after a burst. `null` waits for a click. Default `2400`. */
  burstHold?: number | null;
  /** Float gently around the center when no pointer is over it. Default `true`. */
  autoplay?: boolean;
  /** Called when the cards burst open. */
  onBurst?: () => void;
  className?: string;
}

// Sample photos from Unsplash, back to front: the turquoise lake leads.
const PHOTOS = [
  { id: "1441974231531-c6227db76b6e", alt: "Sunlit forest path" },
  { id: "1500530855697-b586d89ba3ee", alt: "Road through red canyon walls" },
  { id: "1519681393784-d120267933ba", alt: "Milky Way over snowy peaks" },
  { id: "1557672172-298e090bd0f1", alt: "Pink and blue fluid paint" },
  { id: "1506905925346-21bda4d32df4", alt: "Mountain peaks above the clouds at sunrise" },
  { id: "1507525428034-b723cf961d3e", alt: "Beach at sunset" },
  { id: "1541701494587-cb58502866ab", alt: "Red and blue ink clouds" },
  { id: "1501785888041-af3ef285b470", alt: "Boat on a turquoise mountain lake" },
];

/** Built-in cards: sample photos that fill each card. */
const DEFAULT_CARDS: React.ReactNode[] = PHOTOS.map((p) => (
  <img
    key={p.id}
    src={`https://images.unsplash.com/photo-${p.id}?w=360&h=360&fit=crop&q=80`}
    alt={p.alt}
    draggable={false}
    className="h-full w-full object-cover"
  />
));

export const MagneticFlow = React.forwardRef<HTMLDivElement, MagneticFlowProps>(function MagneticFlow(
  {
    cards = DEFAULT_CARDS,
    cardSize = 140,
    follow = 0.16,
    spacing = 7,
    burstRadius = 150,
    burstHold = 2400,
    autoplay = true,
    onBurst,
    className,
  },
  forwardedRef,
) {
  const root = React.useRef<HTMLDivElement>(null);
  React.useImperativeHandle(forwardedRef, () => root.current as HTMLDivElement);
  // Mutable motion state lives in refs so the ticker never triggers renders.
  const mode = React.useRef<"flow" | "burst" | "busy">("flow");
  const pointer = React.useRef<{ x: number; y: number } | null>(null);
  const pos = React.useRef<{ x: number; y: number; r: number }[]>([]);
  const holdTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [burst, setBurst] = React.useState(false);

  /** Cards front to back, so index 0 leads. */
  const chain = () => gsap.utils.toArray<HTMLElement>("[data-card]", root.current).reverse();
  const center = () => {
    const el = root.current!;
    return { x: el.clientWidth / 2, y: el.clientHeight / 2 };
  };

  const { contextSafe } = useGSAP(
    () => {
      const els = chain();
      const c = center();
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      pos.current = els.map((_, i) => ({ x: c.x - i * spacing, y: c.y - i * spacing, r: 0 }));
      gsap.set(els, { xPercent: -50, yPercent: -50, x: (i) => pos.current[i]!.x, y: (i) => pos.current[i]!.y });
      if (reduce) return;

      const setX = els.map((el) => gsap.quickSetter(el, "x", "px"));
      const setY = els.map((el) => gsap.quickSetter(el, "y", "px"));
      const setR = els.map((el) => gsap.quickSetter(el, "rotation", "deg"));

      const tick = (time: number, delta: number) => {
        if (mode.current !== "flow") return;
        const el = root.current;
        if (!el) return;
        const w = el.clientWidth;
        const h = el.clientHeight;
        // Leader target: the pointer, or a small float around the center. The chase
        // still runs, so the trail ripples behind the leader and shows the pull.
        const target =
          pointer.current ??
          (autoplay
            ? { x: w / 2 + 14 * Math.sin(time * 0.9), y: h / 2 + 10 * Math.sin(time * 1.4 + 1) }
            : { x: w / 2, y: h / 2 });
        // Frame-rate independent easing.
        const k = 1 - Math.pow(1 - follow, delta / 16.67);
        pos.current.forEach((p, i) => {
          const ahead = i === 0 ? target : { x: pos.current[i - 1]!.x - spacing, y: pos.current[i - 1]!.y - spacing };
          const ease = i === 0 ? Math.min(1, k * 1.5) : k;
          const vx = (ahead.x - p.x) * ease;
          p.x += vx;
          p.y += (ahead.y - p.y) * ease;
          // Lean into the direction of travel, settling when still.
          p.r += (gsap.utils.clamp(-16, 16, vx * 1.6) - p.r) * 0.12;
          setX[i]!(p.x);
          setY[i]!(p.y);
          setR[i]!(p.r);
        });
      };
      gsap.ticker.add(tick);
      return () => gsap.ticker.remove(tick);
    },
    { scope: root, dependencies: [cards.length, follow, spacing, autoplay] },
  );

  React.useEffect(() => () => void (holdTimer.current && clearTimeout(holdTimer.current)), []);

  const fold = contextSafe(() => {
    if (mode.current !== "burst") return;
    if (holdTimer.current) clearTimeout(holdTimer.current);
    mode.current = "busy";
    setBurst(false);
    const els = chain();
    const c = center();
    gsap.to(els, {
      x: (i) => c.x - i * spacing,
      y: (i) => c.y - i * spacing,
      rotation: 0,
      scale: 1,
      duration: 0.7,
      ease: "power3.inOut",
      stagger: { each: 0.03, from: "end" },
      onComplete: () => {
        // Hand the settled positions back to the chase loop.
        pos.current = els.map((el) => ({
          x: gsap.getProperty(el, "x") as number,
          y: gsap.getProperty(el, "y") as number,
          r: 0,
        }));
        mode.current = "flow";
      },
    });
  });

  const open = contextSafe(() => {
    if (mode.current !== "flow") return;
    mode.current = "busy";
    setBurst(true);
    onBurst?.();
    const els = chain();
    const el = root.current!;
    const c = center();
    const scale = 0.82;
    const fit = (Math.min(el.clientWidth, el.clientHeight) - cardSize * scale * 1.2) / 2;
    const radius = Math.max(cardSize * 0.4, Math.min(burstRadius, fit));
    const step = 360 / els.length;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    gsap
      .timeline({
        onComplete: () => {
          mode.current = "burst";
          if (burstHold !== null) holdTimer.current = setTimeout(fold, burstHold);
        },
      })
      // Gather at the center first, a quick inhale before the burst.
      .to(els, {
        x: c.x,
        y: c.y,
        rotation: 0,
        scale: 0.9,
        duration: reduce ? 0 : 0.35,
        ease: "power2.in",
        stagger: { each: 0.015, from: "end" },
      })
      // Rays: each card points away from the center at its own angle.
      .to(els, {
        x: (i) => c.x + Math.cos(((i * step - 90) * Math.PI) / 180) * radius,
        y: (i) => c.y + Math.sin(((i * step - 90) * Math.PI) / 180) * radius,
        rotation: (i) => i * step,
        scale,
        duration: reduce ? 0 : 1.1,
        ease: "elastic.out(1, 0.65)",
        stagger: 0.035,
      });
  });

  const toggle = () => (mode.current === "burst" ? fold() : open());

  return (
    <div
      ref={root}
      role="button"
      tabIndex={0}
      aria-pressed={burst}
      aria-label={burst ? "Fold the cards back" : "Burst the cards open"}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const rect = e.currentTarget.getBoundingClientRect();
        pointer.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      }}
      onPointerLeave={() => (pointer.current = null)}
      onClick={toggle}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      }}
      className={cn(
        "relative h-[440px] w-[400px] max-w-full cursor-pointer touch-none select-none overflow-hidden rounded-3xl outline-none focus-visible:ring-2 focus-visible:ring-zinc-400",
        className,
      )}
    >
      {cards.map((card, i) => (
        <div
          key={i}
          data-card
          aria-hidden
          className="@container absolute left-0 top-0 overflow-hidden rounded-[11%] shadow-[0_10px_24px_-12px_rgba(0,0,0,0.45)] will-change-transform"
          style={{ width: cardSize, height: cardSize }}
        >
          {card}
        </div>
      ))}
    </div>
  );
});

