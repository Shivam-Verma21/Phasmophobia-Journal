import Link from "next/link"

export default function Header() {
    return (
        <nav className="pt-8 flex w-full mx-auto max-w-[28rem] sm:max-w-[32rem] lg:max-w-[64rem]">
            <Link href="/" className="evidence-link text-black px-4 py-1 rounded-t-xl font-medium text-[1.25rem] sm:text-2xl">Evidence</Link>
            <Link href="/ghosts" className=" ghosts-link text-black px-4 py-1 rounded-t-xl font-medium text-[1.25rem] sm:text-2xl lg:hidden">Ghosts</Link>
        </nav>
    )
}