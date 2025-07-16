import { motion } from 'framer-motion'

export default function AnimatedSection({
  children,
  className,
  direction = 'up',
  delay = 0,
  stagger = 0,
  ...props
}) {
  const distance = 75
  const computeOffset = dir => {
    switch (dir) {
      case 'left':
<<<<<<< HEAD
        return {
          x: distance,
          y: 0
        }
      case 'right':
        return {
          x: -distance,
          y: 0
        }
      case 'down':
        return {
          x: 0,
          y: -distance
        }
      default:
        return {
          x: 0,
          y: distance
        }
=======
        return { x: distance, y: 0 }
      case 'right':
        return { x: -distance, y: 0 }
      case 'down':
        return { x: 0, y: -distance }
      default:
        return { x: 0, y: distance }
>>>>>>> fb8aa15fb11f121a66b31cbd15c5f59344629462
    }
  }

  const variants = {
<<<<<<< HEAD
    hidden: { 
      opacity: 0, 
      scale: 0.9, 
      ...computeOffset(direction) 
    },
=======
    hidden: { opacity: 0, scale: 0.9, ...computeOffset(direction) },
>>>>>>> fb8aa15fb11f121a66b31cbd15c5f59344629462
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
<<<<<<< HEAD
      transition: { 
        staggerChildren: stagger, 
        delayChildren: delay 
      }
=======
      transition: { staggerChildren: stagger, delayChildren: delay }
>>>>>>> fb8aa15fb11f121a66b31cbd15c5f59344629462
    }
  }

  return (
    <motion.section
      className={className}
      initial="hidden"
      whileInView="visible"
<<<<<<< HEAD
      viewport={
        {
          once: true,
          amount: 0.2
        }
      }
      transition={
        {
          duration: 0.8,
          delay
        }
      }
=======
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.8, delay }}
>>>>>>> fb8aa15fb11f121a66b31cbd15c5f59344629462
      variants={variants}
      {...props}
    >
      {children}
    </motion.section>
  )
}
