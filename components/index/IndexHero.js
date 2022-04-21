import Image from "next/image"
import Link from "next/link"


function IndexHero() {

    return (
        <div className="mb-10 font-display max-w-6xl m-auto flex flex-col md:flex-row md:pt-[80px] px-5 md:flex md:items-center xl:px-0 ">
            {/* Content Container */}
            <div className="max-w-lg lg:px-0 order-2 md:order-1">
                <h1 className="text-3xl pr-20 md:text-4xl lg:text-6xl font-semibold mb-6 tracking-tighter">You&apos;ve got the business, we have the <span className="text-red-700">ideas.</span></h1>
                <p className="text-slate-600">We are a creative agency, full of life and ideas. We offer a variety of services from graphic design, web development, ux/ui design and more. </p>
                <div className="button bg-blue-900 px-6 py-3 max-w-fit text-xl mt-9 text-white rounded-lg">
                    <Link href="/services">Our Services</Link>
                </div>
            </div>
            {/* Image Container */}
            <div className="flex items-center relative w-full pt-20 order-1 md:order-2">
                <Image src="/app-design.svg" alt="atoncemedia mobile application design." height="500px" width="500px" className="block w-fit" />
            </div>
        </div>
    )
}

export default IndexHero