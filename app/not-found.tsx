'use client'
import { TextShimmer } from '@/components/motion-primitives/text-shimmer';
import { TextShimmerWave } from '@/components/motion-primitives/text-shimmer-wave';
import { usePathname } from 'next/navigation';
import { GetStartedButton } from '@/components/shsfui/button/GetStartedButton';
import Link from 'next/link';

export default function NotFound() {
    const pathname = usePathname()
    return (
        <div className='flex items-center justify-center h-[100dvh] flex-col'>
            <TextShimmerWave
                className='[--base-color:#0D74CE] [--base-gradient-color:#5EB1EF] mb-10 flex items-center justify-center tracking-widest md:text-5xl text-3xl sm:text-4xl w-[100dvw]'
                duration={1}
                spread={1}
                zDistance={1}
                scaleDistance={1.1}
                rotateYDistance={20}
            >
                {`${pathname} not found`}
            </TextShimmerWave>

            <Link href={"/"}>
                <GetStartedButton>
                    <TextShimmer className='text-sm text-accent-foreground' duration={1}>Go Home</TextShimmer>
                </GetStartedButton>
            </Link>
        </div>
    );
}
