import { TextShimmerWave } from '@/components/motion-primitives/text-shimmer-wave';

export default function loading() {
  return (
    <div className='flex items-center justify-center h-[100dvh]'>
    <TextShimmerWave
      className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF] tracking-widest text-6xl'
      duration={1}
      spread={1}
      zDistance={1}
      scaleDistance={1.1}
      rotateYDistance={20}
    >
    LEO
    </TextShimmerWave>
    </div>
  );
}
