import { motion } from 'framer-motion';

export const ProductSkeleton = () => {
  return (
    <motion.div
      initial={{
        opacity: 0.5,
        backgroundColor: '#EEEEEE',
        width: 218,
        height: 285,
        borderRadius: 10,
        margin: 15,
      }}
      animate={{opacity: 1}}
      transition={{duration: 1, repeat: Infinity}}
    />
  )
}
