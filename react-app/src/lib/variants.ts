import type { Variants } from 'framer-motion'

export const fadeUpVariants: Variants = {
  hidden:  { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1] },
  },
}

export const fadeUpDelayed = (delay: number): Variants => ({
  hidden:  { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.2, 0.7, 0.2, 1] },
  },
})

export const sectionContainerVariants: Variants = {
  hidden:   {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

export const pinVariants = (activateAt: number, deactivateAt: number): Variants => ({
  hidden:  { opacity: 0, scale: 0 },
  visible: {
    opacity:   [0, 0, 1, 1, 0, 0],
    scale:     [0, 0, 1, 1, 0, 0],
    transition: {
      times:    [
        0,
        Math.max(0, activateAt - 0.05),
        activateAt,
        deactivateAt,
        Math.min(1, deactivateAt + 0.07),
        1,
      ],
      duration: 10,
      repeat:   Infinity,
      ease:     'linear',
    },
  },
})
