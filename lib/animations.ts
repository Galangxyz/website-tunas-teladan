export const fadeUp = {
  initial: {
    opacity: 0,
    y: 60,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut',
  },
};

export const fadeLeft = {
  initial: {
    opacity: 0,
    x: -60,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut',
  },
};

export const fadeRight = {
  initial: {
    opacity: 0,
    x: 60,
  },
  whileInView: {
    opacity: 1,
    x: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut',
  },
};

export const zoomIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  whileInView: {
    opacity: 1,
    scale: 1,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut',
  },
};