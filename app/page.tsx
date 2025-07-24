import Hero from "@/components/Hero";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { ScrollAnimate } from "@/components/motion-primitives/scroll-animate";


export default function Home() {
    return (
        <div>
            <Hero />

            <ScrollAnimate>
                <TextEffect per="char" preset="fade-in-blur" speedSegment={10} className="text-2xl font-bold text-center mt-10 h-full pt-4 pb-20">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </TextEffect>
            </ScrollAnimate>

        </div>
    );
}
