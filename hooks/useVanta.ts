
import { useState, useEffect, RefObject } from 'react';

// TypeScript declaration for Vanta.js, which is loaded from a CDN
declare global {
  interface Window {
    VANTA: {
      NET: (options: {
        el: HTMLElement;
        THREE: unknown;
        mouseControls: boolean;
        touchControls: boolean;
        gyroControls: boolean;
        minHeight: number;
        minWidth: number;
        scale: number;
        scaleMobile: number;
        color: number;
        backgroundColor: number;
        points: number;
        maxDistance: number;
        spacing: number;
      }) => {
        destroy: () => void;
      };
    };
    THREE: unknown;
  }
}

const useVanta = (ref: RefObject<HTMLElement>) => {
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && ref.current && window.VANTA) {
      const effect = window.VANTA.NET({
        el: ref.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff, // White
        backgroundColor: 0x0, // Black
        points: 10.00,
        maxDistance: 20.00,
        spacing: 15.00
      });
      setVantaEffect(effect);
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [ref, vantaEffect]);

  return vantaEffect;
};

export default useVanta;
