// src/lib/motion.ts
import { cubicOut } from "svelte/easing";

// Shared easing
export const EASE = cubicOut;

// Base values (easy to tweak site-wide)
export const DURATION = 450;
export const Y = 12;
export const OPACITY = 0;

// Section entrance preset
export const sectionIn = (delay = 120) => ({
    y: Y,
    duration: DURATION,
    delay,
    easing: EASE,
    opacity: OPACITY
});

// Card entrance preset with stagger (i = index)
export const cardIn = (i: number, baseDelay = 120, step = 100) => ({
    y: Y,
    duration: DURATION,
    delay: baseDelay + i * step,
    easing: EASE,
    opacity: OPACITY
});

// Small/fast entrance preset (optional)
export const quickIn = (delay = 80) => ({
    y: 8,
    duration: 320,
    delay,
    easing: EASE,
    opacity: OPACITY
});