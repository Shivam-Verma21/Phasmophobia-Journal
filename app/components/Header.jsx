export default function Header() {
    return (
        <nav className="pt-8 flex w-full mx-auto max-w-[28rem] sm:max-w-[32rem] lg:max-w-[64rem]">
            <a href="/" className="evidence-link text-black px-4 py-1 rounded-t-xl font-medium text-[1.25rem] sm:text-2xl">Evidence</a>
            <a href="/ghosts" className=" ghosts-link text-black px-4 py-1 rounded-t-xl font-medium text-[1.25rem] sm:text-2xl">Ghosts</a>
        </nav>
    )
}