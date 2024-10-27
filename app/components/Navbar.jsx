import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar bg-base-300 z-10">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">BrainStation24</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 z-50">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">Users Lists</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                    <li><Link href="/posts">Posts</Link></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="bg-base-100 rounded-t-none p-2">
                                <li><Link href="/gallery">Gallery</Link></li>
                                <li><Link href="/help">Help</Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    )
}
