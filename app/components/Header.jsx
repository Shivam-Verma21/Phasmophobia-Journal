import Link from "next/link"

export default function Header() {
    return (
        <nav className="nav pt-2 flex w-full mx-auto max-w-[28rem] sm:max-w-[32rem] lg:max-w-[65rem]">
            <Link href="/" className="nav-tab text-black font-semibold text-[1.25rem] sm:text-2xl px-6 py-1">Evidence</Link>
            <Link href="/ghosts" className="nav-tab text-black font-semibold text-[1.25rem] sm:text-2xl px-6 py-1">Ghosts</Link>
        </nav>
    )
}