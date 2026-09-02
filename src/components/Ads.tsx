import { useEffect, useRef } from 'react';

interface AdSlotProps {
  className?: string;
}

/**
 * Native banner ad from ProfitableRate CPM Network.
 * Renders into the container div with id "container-4c6e3835c6dbdd307d2b421d614f4d27".
 */
export function NativeBannerAd({ className = '' }: AdSlotProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const containerId = 'container-4c6e3835c6dbdd307d2b421d614f4d27';
    if (ref.current && !ref.current.querySelector(`#${containerId}`)) {
      const div = document.createElement('div');
      div.id = containerId;
      ref.current.appendChild(div);
    }
  }, []);

  return (
    <div
      ref={ref}
      className={`ad-slot w-full flex items-center justify-center overflow-hidden ${className}`}
      aria-label="Advertisement"
    />
  );
}

/**
 * 468x60 banner ad from HighRevenueFormat.
 */
export function BannerAd468x60({ className = '' }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - atOptions is injected by the ad script
      window.atOptions = {
        key: 'bf33335d07c99c12071ef6b4b3cbbfcb',
        format: 'iframe',
        height: 60,
        width: 468,
        params: {},
      };
    } catch {}

    const existing = document.getElementById('ad-468x60-script');
    if (existing) existing.remove();

    const s = document.createElement('script');
    s.id = 'ad-468x60-script';
    s.src = 'https://www.highrevenueformat.com/bf33335d07c99c12071ef6b4b3cbbfcb/invoke.js';
    s.async = true;
    document.body.appendChild(s);

    return () => {
      s.remove();
    };
  }, []);

  return (
    <div
      className={`ad-slot flex items-center justify-center ${className}`}
      style={{ minHeight: 60, minWidth: 468, maxWidth: '100%' }}
      aria-label="Advertisement"
    />
  );
}

/**
 * 300x250 medium rectangle ad from HighRevenueFormat.
 */
export function RectangleAd300x250({ className = '' }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - atOptions is injected by the ad script
      window.atOptions = {
        key: 'f90afee32b48fd0101c0df6c821234ad',
        format: 'iframe',
        height: 250,
        width: 300,
        params: {},
      };
    } catch {}

    const existing = document.getElementById('ad-300x250-script');
    if (existing) existing.remove();

    const s = document.createElement('script');
    s.id = 'ad-300x250-script';
    s.src = 'https://www.highrevenueformat.com/f90afee32b48fd0101c0df6c821234ad/invoke.js';
    s.async = true;
    document.body.appendChild(s);

    return () => {
      s.remove();
    };
  }, []);

  return (
    <div
      className={`ad-slot flex items-center justify-center ${className}`}
      style={{ minHeight: 250, minWidth: 300, maxWidth: '100%' }}
      aria-label="Advertisement"
    />
  );
}

/**
 * 160x300 sidebar ad from HighRevenueFormat.
 */
export function SidebarAd160x300({ className = '' }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - atOptions is injected by the ad script
      window.atOptions = {
        key: '95d402e65502007a9a46ceb9eb1bb505',
        format: 'iframe',
        height: 300,
        width: 160,
        params: {},
      };
    } catch {}

    const existing = document.getElementById('ad-160x300-script');
    if (existing) existing.remove();

    const s = document.createElement('script');
    s.id = 'ad-160x300-script';
    s.src = 'https://www.highrevenueformat.com/95d402e65502007a9a46ceb9eb1bb505/invoke.js';
    s.async = true;
    document.body.appendChild(s);

    return () => {
      s.remove();
    };
  }, []);

  return (
    <div
      className={`ad-slot flex items-center justify-center ${className}`}
      style={{ minHeight: 300, minWidth: 160, maxWidth: '100%' }}
      aria-label="Advertisement"
    />
  );
}

/**
 * 320x50 mobile banner ad from HighRevenueFormat.
 */
export function MobileAd320x50({ className = '' }: AdSlotProps) {
  useEffect(() => {
    try {
      // @ts-expect-error - atOptions is injected by the ad script
      window.atOptions = {
        key: '92caebc593931a0d6a28a19a5aa2a225',
        format: 'iframe',
        height: 50,
        width: 320,
        params: {},
      };
    } catch {}

    const existing = document.getElementById('ad-320x50-script');
    if (existing) existing.remove();

    const s = document.createElement('script');
    s.id = 'ad-320x50-script';
    s.src = 'https://www.highrevenueformat.com/92caebc593931a0d6a28a19a5aa2a225/invoke.js';
    s.async = true;
    document.body.appendChild(s);

    return () => {
      s.remove();
    };
  }, []);

  return (
    <div
      className={`ad-slot flex items-center justify-center ${className}`}
      style={{ minHeight: 50, minWidth: 320, maxWidth: '100%' }}
      aria-label="Advertisement"
    />
  );
}
