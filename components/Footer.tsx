"use client"

import Image from "next/image";
import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"
import Logo from "./logo"
import { socialLinks } from "@/data";
import { donate } from "@/data";


const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
}

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    },
}

export default function Footer() {
    return (
        <motion.footer
            className="bg-background border-t flex flex-col items-center justify-center py-16 h-[100dvh]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
        >
            <div className="container max-w-2xl px-4 py-16 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-12">
                    {/* Logo Section */}
                    <motion.div
                        variants={itemVariants}
                        className="flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="max-w-200 max-h-200 text-foreground">
                            <Link href={"/"}>
                                <Logo width={400} height={400} className="rounded-2xl" />
                            </Link>
                        </div>
                    </motion.div>

                    {/* Donate Button Section */}
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8"
                            asChild
                        >
                            <Link href={donate} className="flex items-center gap-2">
                                <motion.div
                                    animate={{
                                        scale: [1, 1.2, 1],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Heart className="w-5 h-5" />
                                </motion.div>
                                Support Us
                            </Link>
                        </Button>
                    </motion.div>

                    {/* Social Links Section */}
                    <motion.div variants={itemVariants} className="flex flex-col items-center space-y-4">
                        <p className="text-muted-foreground">Connect with us</p>
                        <div className="flex gap-6">
                            {socialLinks.map((social) => (
                                <motion.div
                                    key={social.label}
                                    whileHover={{ y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className={`rounded-full ${social.color}`}
                                        asChild
                                    >
                                        <Link href={social.href} aria-label={social.label}>
                                            <social.icon className="w-5 h-5" />
                                        </Link>
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <Separator className="w-full" />

                    {/* Copyright Section */}
                    <motion.div
                        variants={itemVariants}
                        className="text-center text-sm text-muted-foreground"
                    >
                        <p>© {new Date().getFullYear()} Leo. All rights reserved.</p>
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    )
}
