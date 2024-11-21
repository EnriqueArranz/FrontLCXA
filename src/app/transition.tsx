"use client";
import { motion, useAnimation } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function Transition({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const route = useRouter();

  useEffect(() => {
    controls.start('animate');
  }, [route]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      variants={{
        animate: { opacity: 1 },
      }}
      transition={{ ease: 'easeInOut', duration: 2 }}
    >
      {children}
    </motion.div>
  );
}