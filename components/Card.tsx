import Link from "next/link"
import { GetStartedButton } from "@/components/shsfui/button/GetStartedButton"
import { Cursor2 } from "./Cursor"
import { cards } from "@/data"

import {
    MinimalCard,
    MinimalCardDescription,
    MinimalCardImage,
    MinimalCardTitle,
} from "@/components/ui/minimal-card"

export function MainCard() {
    return (
        <div className="w-full max-w-5xl ">
            <div className="flex flex-col justify-center rounded-lg p-4">
                <div className="flex flex-wrap items-center justify-center ">

                    {cards.map((card, index) => (

                            <Link href={`/${card.title}`} key={index} passHref className="m-2 w-[460px]">
                        <Cursor2 message={card.title}>
                                <MinimalCard className="w-full  hover:shadow-lg transition-shadow">
                                    <MinimalCardImage
                                        className="h-[320px]"
                                        src={card.src}
                                        alt={card.title}
                                    />
                                    <MinimalCardTitle className="text-center text-primary">
                                        {card.title.toUpperCase()}
                                    </MinimalCardTitle>
                                    <MinimalCardDescription className="text-center">
                                        {card.description}
                                    </MinimalCardDescription>
                                </MinimalCard>
                        </Cursor2>
                            </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
