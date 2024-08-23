import { EngineType } from '@/types/Engine';
import { useAnimate } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useChangeEngineAnimation = (engineType: EngineType) => {
  const [scope, animate] = useAnimate();
  const chatRef = useRef(null);
  const rightAreaRef = useRef(null);

  const isQuantum = engineType === EngineType.Quantum;

  useEffect(() => {
    animate(rightAreaRef.current, isQuantum ? { x: 0, opacity: 1 } : { x: '100vw', opacity: 0 }, {
      type: 'spring',
      duration: 1,
      delay: 0.07,
    });

    animate(chatRef.current, isQuantum ? { x: '0', left: '0' } : { x: '-50%', left: '50%' }, {
      type: 'spring',
      duration: 1,
    });
  }, [engineType, animate]);

  return { scope, chatRef, rightAreaRef };
};

export default useChangeEngineAnimation;
