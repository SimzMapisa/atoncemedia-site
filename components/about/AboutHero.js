import Image from "next/image"
import Link from "next/link"

const GetIntouch = () => {
    return (
        <div className="flex items-center mt-8 w-fit">
            <p className="text-lg mr-4 capitalize font-semibold">Get in touch</p> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </div>
    )
}

function AboutHero() {
    return (
        <>
            <div className="pt-20 pb-20  flex-col md:items-center md:flex-row md:pt-[100px] px-5 max-w-6xl m-auto flex">
                <div className="order-2 md:order-1 max-w-lg">
                    <h1 className="font-semibold mb-6 tracking-tighter text-3xl md:text-4xl md:font-bold lg:text-6xl">We do the heavy <span className="block">  lifting for you.</span></h1>
                    <p className="text-slate-600">We love what we do and we do it best. We are a team that&apos;s always looking for the best and effective tools that helps our clients grow their businesses.</p>

                    <Link href="/contact">
                        <a>
                            <GetIntouch />
                        </a>
                    </Link>
                </div>
                <div className="order-1 md:order-2 max-w-lg">
                    <Image src="/aboutheroimagedevelopers.svg" alt="" width="600" height="600" />
                </div>
            </div>
        </>
    )
}

export default AboutHero;