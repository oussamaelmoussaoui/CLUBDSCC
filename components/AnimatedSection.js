import { motion } from 'framer-motion'

export default function AnimatedSection({ as: Tag = 'section', className = '', children }) {
  const MotionTag = motion(Tag)
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </MotionTag>
  )
}
