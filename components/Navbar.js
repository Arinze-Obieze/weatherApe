import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={'/logo.jpeg'} width={44} height={44} alt='logo' className="rounded-md" />
                        <span className="ml-3 text-xl">WeatherApe</span>
                    </a>
                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                        <Link href={'/'} className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href={'/About'} className="mr-5 hover:text-gray-900">About Us</Link>
                        <Link href={'/Weather'} className="mr-5 hover:text-gray-900">Weather</Link>
                        <Link href={'/Contact'} className="mr-5 hover:text-gray-900">Contact Us</Link>
                    </nav>


                </div>
            </header>
        </div>
    );
}

export default Navbar;