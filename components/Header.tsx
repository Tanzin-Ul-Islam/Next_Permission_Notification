
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header({ children, className }: HeaderProps) {
    return (
        <div className={"header"}>
            <Link href='/' className="md:flex-1">
                <Image
                    src="/assets/png/logo_tp_white.png"
                    alt="Logo with name"
                    width={60}
                    height={32}
                    className="hidden md:block"
                />
                <Image
                    src="/assets/png/logo_tp_white.png"
                    alt="Logo"
                    width={32}
                    height={32}
                    className="mr-2 md:hidden"
                />
            </Link>
            {children}
        </div>
    )
}
