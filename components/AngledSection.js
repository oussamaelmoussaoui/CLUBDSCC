import { motion } from 'framer-motion'

/**
 * AngledSection renders a full viewport height section with a diagonal
 * bottom edge. The next section will visually cover the previous one as
 * you scroll thanks to scroll snapping.
 */
export default function AngledSection({
  children,
  className = '',
  bg = 'bg-white',
  angle = 20,
  ...props
}) 

{
  const clip = `polygon(0 0, 100% 0, 100% ${100 - angle}%, 0 100%)`
  return (
    <motion.section
      className={`min-h-screen flex items-center justify-center relative ${bg} ${className}`}
      style={
        { 
          clipPath: clip 
        }
      }
      initial={
        { 
          opacity: 0 
        }
      }
      whileInView={
        {
          opacity: 1 
        }
      }
      viewport={
        {
          once: true 
        }
      }
      transition={
        {
          duration: 0.6 
        }
      }
      {...props}
    >
      {children}
    </motion.section>
  )
}
