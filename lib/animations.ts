import type { Variants } from 'framer-motion';

export const fadeUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
};

export const fadeLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
};

export const fadeRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
};

export const zoomIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
};