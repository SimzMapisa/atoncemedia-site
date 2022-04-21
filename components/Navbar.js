import Image from "next/image";
import Link from "next/link";

const Navbar = () => {

    return (
        <nav className="shadow-slate-200 shadow-lg bg-white fixed w-full z-50">
            <div className="flex items-center py-3 justify-between max-w-6xl m-auto h-full px-5">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center text-2xl text-slate-700 font-display font-bold cursor-pointer" passHref>
                        <a>
                            <Image src="/logo.svg" alt="atoncemedia logo" height="40" width="150" className="w-1 cursor-pointer" />
                        </a>
                    </Link>
                </div>
                <div className="
                    bg-blue-500
                    absolute 
                    right-0 
                    md:right-auto 
                    md:relative 
                    flex-col 
                    font-display 
                    md:flex-row 
                    items-center 
                    justify-end 
                    flex-1 
                    space-x-4 
                    text-slate-600  
                    md:bg-inherit 
                    md:h-min 
                    h-auto
                    w-screen
                    text-md
                    hidden
                    md:flex
                ">
                    <Link href="/">Home</Link>
                    <Link href="/about" >About</Link>
                    <Link href="/services" >Services</Link>
                    <Link href="/portfolio" >Portfolio</Link>
                    <Link href="/blog" >Blog</Link>
                    <Link href="/contact" >Contact</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;