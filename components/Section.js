import Image from "next/image";
import Link from "next/link";

const Section = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex space-x-6">
                        <Image width={100} height={100} className="object-cover object-center rounded  self-center" alt="hero" src="/weather-showers-scattered.svg" />
                        <Image width={100} height={100} className="object-cover object-center rounded  self-center" alt="hero" src="/cloudb.svg" />
                        <Image width={100} height={100} className="object-cover object-center rounded  self-center" alt="hero" src="/sun.svg" />

                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> Keep Track of Weather Forecasts
                            <br className="hidden lg:inline-block" />
                        </h1>
                        <p className="mb-8 leading-relaxed"> Experience the wild side of weather with WeatherApe!
                            Stay ahead of storms, track sunny days, and embrace weather
                            forecasts like never before. With real-time updates and a user-friendly interface,
                            WeatherApe keeps you prepared for any weather adventure. Use now and unleash your
                            inner weather explorer!</p>
                        <div className="flex justify-center">
                            <Link href={'/Weather'}>
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Search Weather</button>
                            </Link>

                        </div>
                    </div>
                </div>
            </section>        </div>
    );
}

export default Section;