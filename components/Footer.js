import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bottom-0 w-full px-5 xl:px-0 py-6 bg-[#003876] font-display">
            <div className="max-w-6xl divide-y divide-slate-600 m-auto">
                <div className="py-3 flex justify-between">
                    <div className="hidden md:block">
                        <Link href="/">
                            <a><Image src="/footerlogo.svg" width="40px" height="40px" alt="atoncemedia footer logo" /></a>
                        </Link>
                    </div>
                    <div className="flex items-center md:space-x-3 text-white">
                        <p className="pr-5 md:pr-0">Ready to start on your new project?</p>
                        <div className="px-3 py-2 text-sm min-w-fit bg-white text-[#A80532] md:px-5 md:py-3 rounded-md md:rounded-lg font-semibold md:text-xl">
                            <Link href="/contact">Get Started</Link>
                        </div>
                    </div>
                </div>
                <div className="pt-6 text-white">
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 md:space-x-24 lg:space-x-20 mb-4">
                        <div>
                            <h4 className="pb-4 font-bold text-xl leading-6">Subscribe to our <span className="block">newsletter</span></h4>
                            <p className="text-slate-200">We will not spam you, you will be receiving emails about our latest products and promotions.</p>
                            <form className="mt-4 flex items-center">
                                <input type="text" className="px-3 py-2 border-b-2 border-b-slate-200 bg-transparent focus:outline-none active:outline-none" placeholder="Email address" />
                                <div className="flex justify-center">

                                    <button href="/contact" className="bg-[#A80532] px-3 py-2 text-lg rounded-t-lg">

                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline-block" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>

                                    </button>

                                </div>
                            </form>
                        </div>
                        <div>
                            <h4 className="pb-4 pt-5 font-bold text-xl leading-8">Services</h4>
                            <ul className="text-slate-200 space-y-1">
                                <li>Web Development</li>
                                <li>Graphic Design</li>
                                <li>UX/UI Design</li>
                                <li>Branding</li>
                                <li>Photography</li>
                            </ul>
                        </div>
                        <div className="hidden lg:block">
                            <h4 className="pb-4 pt-5 font-bold text-xl leading-8">About</h4>
                            <ul className="text-slate-200 space-y-1">
                                <li>Our Story</li>
                                <li>Who We Are</li>
                                <li>Our Work</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="pb-4 pt-5 font-bold text-xl leading-8">Help</h4>
                            <ul className="text-slate-200 space-y-1">
                                <li>FAQs</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex space-x-5 text-slate-300 text-sm">
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                        <div>
                            social media
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;