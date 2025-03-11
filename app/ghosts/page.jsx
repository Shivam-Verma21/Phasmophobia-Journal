import Link from "next/link"

export default function Ghosts(){
    return(
        <div className="page w-full mx-auto ghost-types-page">
            <span className="text-4xl sm:text-[2.5rem] font-medium leading-9 tracking-wider">Ghost Types</span>

            <hr className="border-b-2 border-stone-900 my-2 rounded-[35%] w-full" />

            <h2 className="text-left text-xl sm:text-2xl leading-6 mx-auto mt-6 mb-4 tracking-wider">Select a ghost type below to view more information:</h2>

            <div className="ghosts-container">
                <ul className="flex flex-col flex-wrap gap-2 h-[27rem] sm:h-[30rem]">
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/spirit">1. Spirit</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/wraith">2. Wraith</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/phantom">3. Phantom</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/poltergeist">4. Poltergeist</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/banshee">5. Banshee</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/jinn">6. Jinn</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/mare">7. Mare</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/revenant">8. Revenant</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/shade">9. Shade</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/demon">10. Demon</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/yurei">11. Yurei</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/oni">12. Oni</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/yokai">13. Yokai</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/hantu">14. Hantu</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/goryo">15. Goryo</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/myling">16. Myling</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/onryo">17. Onryo</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/the twins">18. The Twins</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/raiju">19. Raiju</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/obake">20. Obake</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/the mimic">21. The Mimic</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/moroi">22. Moroi</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/deogen">23. Deogen</Link>
                    </li>
                    <li className="mr-auto text-xl sm:text-2xl tracking-wider cursor-pointer">
                        <Link href="/ghosts/thaye">24. Thaye</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}