
import { HouseIcon, InboxIcon, SearchIcon, ZapIcon } from "lucide-react" // navbar icons
import { Github, Heart, Instagram, Linkedin, Twitter, Facebook } from "lucide-react" // social media icons

export const donate: string = "#"
export const socialLinks = [
    {
        icon: Facebook,
        href: "https://facebook.com",
        label: "Facebook",
        color: "hover:text-[#0165E1]"
    },
    {
        icon: Twitter,
        href: "https://twitter.com",
        label: "Twitter",
        color: "hover:text-[#1DA1F2]"
    },
    {
        icon: Instagram,
        href: "https://instagram.com",
        label: "Instagram",
        color: "hover:text-[#E4405F]"
    },
    {
        icon: Linkedin,
        href: "https://linkedin.com",
        label: "LinkedIn",
        color: "hover:text-[#0A66C2]"
    },
]

export const cards = [
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
export const navigationLinks = [
  { href: "/", label: "Home", icon: HouseIcon, active: true },
  { href: "/about",
    label: "About us",
    submenu: true,
    type:"description",
      items: [
          {
              href: "/about/organization", label: "Our organization", desc: "Learn about our mission and values."
          },
          {
              href: "/about/membership", label: "Our membership", desc: "Learn about our mission and values."
          },
      ]
},
  { href: donate, label: "Donate" },
]
