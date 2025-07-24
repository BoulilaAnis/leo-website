import Image from "next/image"
type LogoProps = {
    width?: number,
    height?: number,
    className?: string,
}

export default function Logo({ width = 200, height = 200, className }: LogoProps) {
    return (
        <Image src="/omega.jpg" className={className} width={width} height={height} alt="logo" />
    )
}
