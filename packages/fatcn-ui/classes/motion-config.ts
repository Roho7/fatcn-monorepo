import { Transition, Variants } from 'framer-motion'

export type MotionConfig = {
    transition: {
      spring: Transition
      ease: Transition
      linear: Transition
    }
    variants: {
      fadeIn: Variants
      slideUp: Variants
      scaleIn: Variants
    }
  }
  
  export const defaultMotionConfig: MotionConfig = {
    transition: {
      spring: { 
        type: 'spring',
        stiffness: 300,
        damping: 30,
        mass: 0.5
      },
      ease: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3
      },
      linear: {
        type: 'tween',
        ease: 'linear',
        duration: 0.2
      }
    },
    variants: {
      fadeIn: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
      },
      slideUp: {
        initial: { y: 20, opacity: 0 },
        animate: { y: 0, opacity: 1 },
        exit: { y: -20, opacity: 0 }
      },
      scaleIn: {
        initial: { scale: 0.9, opacity: 0 },
        animate: { scale: 1, opacity: 1 },
        exit: { scale: 0.95, opacity: 0 }
      }
    }
  }