import { TextShimmer } from '@/components/motion-primitives/text-shimmer';
import { TextShimmerWave } from '@/components/motion-primitives/text-shimmer-wave';

export default function Test({text}:{text: string}) {
  return (
    <div className='flex items-center justify-center h-[100dvh] flex-col'>
    <TextShimmerWave
      className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF] mb-10 flex items-center justify-center tracking-widest text-6xl'
      duration={1}
      spread={1}
      zDistance={1}
      scaleDistance={1.1}
      rotateYDistance={20}
    >
    {text}
    </TextShimmerWave>
        <TextShimmer className='text-sm' duration={1}>
        Coming soon
    </TextShimmer>
    </div>
  );
}
