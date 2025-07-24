import { useId } from "react"
import { HouseIcon, InboxIcon, SearchIcon, ZapIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { navigationLinks } from "@/data"
import Logo from "./logo"

// Removed unused Logo import
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuContent,
} from "@/components/ui/navigation-menu"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// Navigation links array to be used in both desktop and mobile menus

export default function NavBar() {
    const id = useId()

    return (
        <header className="border-b px-4 md:px-6">
            <div className="flex h-16 items-center justify-between gap-4">
                {/* Left side */}
                <div className="flex flex-1 items-center gap-2">
                    {/* Mobile menu trigger */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                className="group size-8 md:hidden"
                                variant="ghost"
                                size="icon"
                            >
                                <svg
                                    className="pointer-events-none"
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 12L20 12"
                                        className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                                    />
                                    <path
                                        d="M4 12H20"
                                        className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                                    />
                                    <path
                                        d="M4 12H20"
                                        className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                                    />
                                </svg>
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent align="start" className="w-40 p-1 md:hidden">
                            <NavigationMenu className="max-w-none *:w-full">
                                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                                    {navigationLinks.map((link, index) => {
                                        // const Icon = link.icon
                                        if (link.submenu && Array.isArray(link.items)) {
                                            return (
                                                <NavigationMenuItem key={index} className="w-full">
                                                    <div className="flex flex-col">
                                                        <NavigationMenuLink
                                                            href={link.href}
                                                            className="flex-row items-center gap-2 py-1.5 font-semibold"
                                                            active={link.active}
                                                        >
                                                            <span>{link.label}</span>
                                                        </NavigationMenuLink>
                                                        <ul className="pl-4">
                                                            {link.items.map((item, itemIndex) => (
                                                                <li key={itemIndex}>
                                                                    <NavigationMenuLink
                                                                        href={item.href}
                                                                        className="flex-row items-center gap-2 py-1.5 text-sm"
                                                                    >
                                                                        <span>{item.label}</span>
                                                                    </NavigationMenuLink>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </NavigationMenuItem>
                                            );
                                        } else {
                                            return (
                                                <NavigationMenuItem key={index} className="w-full">
                                                    <NavigationMenuLink
                                                        href={link.href}
                                                        className="flex-row items-center gap-2 py-1.5"
                                                        active={link.active}
                                                    >
                                                        <span>{link.label}</span>
                                                    </NavigationMenuLink>
                                                </NavigationMenuItem>
                                            );
                                        }
                                    })}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </PopoverContent>
                    </Popover>
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link href="/" >
                            <div className="text-primary hover:text-primary/90">
                                <Logo width={100} height={100} className="rounded-2xl" />
                            </div>
                        </Link>
                    </div>
                </div>
                {/* Middle area */}
                <NavigationMenu className="max-md:hidden">
                    <NavigationMenuList className="gap-2">
                        {navigationLinks.map((link, index) => (
                            <NavigationMenuItem key={index}>
                                {link.submenu ? (
                                    <>
                                        <NavigationMenuTrigger className="text-muted-foreground hover:text-primary bg-transparent px-2 py-1.5 font-medium">
                                            {link.label}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent className="z-50 p-1 min-w-64">
                                            <ul>
                                                {link.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <NavigationMenuLink
                                                            href={item.href}
                                                            className="py-1.5"
                                                        >
                                                            <div>
                                                                <div className="font-medium">{item.label}</div>
                                                                {item.desc && (
                                                                    <p className="text-muted-foreground text-xs">{item.desc}</p>
                                                                )}
                                                            </div>
                                                        </NavigationMenuLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </>
                                ) : (
                                    <NavigationMenuLink
                                        href={link.href}
                                        className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                                    >
                                        {link.label}
                                    </NavigationMenuLink>
                                )}
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                {/* Right side */}
                <div className="flex flex-1 items-center justify-end gap-2">
                    <div className="relative">
                        <Input
                            id={id}
                            className="peer h-8 ps-8 pe-2"
                            placeholder="Search..."
                            type="search"
                        />
                        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
                            <SearchIcon size={16} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
