import Link from "next/link"
import { GetStartedButton } from "@/components/shsfui/button/GetStartedButton"
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"

export function MainCard() {
  const cards = [
    {
      title: "alpha",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "/alpha.jpg",
    },
    {
      title: "omega",
      description:
        "How to design with gestures and motion that feel intuitive and natural.",
      src: "/omega.jpg",
    },
  ]
  return (
    <div className="w-full max-w-5xl ">
      <div className="flex flex-col justify-center rounded-lg p-4">
        <div className="flex flex-wrap items-center justify-center ">
          {cards.map((card, index) => (
            <Link href={`/${card.title}`} key={index} passHref className="m-2 w-[460px]">
              <MinimalCard className="w-full cursor-pointer hover:shadow-lg transition-shadow">
                <MinimalCardImage
                  className="h-[320px]"
                  src={card.src}
                  alt={card.title}
                />
                <MinimalCardTitle className="text-center">
                  {card.title}
                </MinimalCardTitle>
                <MinimalCardDescription className="text-center">
                  {card.description}
                </MinimalCardDescription>
              </MinimalCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
