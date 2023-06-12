import SearchInput from "@/components/SearchInput";
import Image from "next/image";
import { useState, useEffect } from "react";

const Weather = () => {
    const [query, setQuery] = useState('');
    const [france, setFrance] = useState('');
    const [lagos, setLagos] = useState('');
    const [berlin, setBerlin] = useState('');
    const [weather, setWeather] = useState('');


    const fetchWeather = async (query) => {
        let weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=ebc2baaa569a2156b03ed6e6424ff1a8`);
        let res = await weather.json();
        console.log(res);
        return res;
    };

    useEffect(() => {
        async function fetchData() {
            try {
                let france = await fetchWeather('Paris');
                setFrance(france);
                let lagos = await fetchWeather('Lagos');
                setLagos(lagos);
                let berlin = await fetchWeather('Berlin');
                setBerlin(berlin);
            } catch (err) {
                console.log(err);
            }
        }

        fetchData();
    }, []);

    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    const handleClick = async (e) => {
        console.log(query)
        let weather = await fetchWeather(query)
        setWeather(weather)
    }

    return (
        <div>
            <div className="bg-indigo-600 flex p-3 justify-between">
                <div className="flex space-x-2">
                    <input
                        type="text"
                        placeholder="Search Weather by Location"
                        onChange={handleChange}
                        value={query}
                        className="border-2 m-auto"
                        required
                    />
                    <button onClick={handleClick} className="border pl-2 pr-2 text-white rounded-md">Search</button>
                </div>
                <div>
                    <Image src="/logo.jpeg" width={44} height={44} alt="logo" className="rounded-md" />

                </div>

            </div>
            {/**search */}
            {weather && <div className="bg-gray-200 p-4 flex ">

                <div className="ml-4 flex flex-col justify-between">
                    <h1>Location: {query}</h1>
                    <h1>
                        Weather: <span>{weather.weather[0].description}</span>
                    </h1>
                    <h1>
                        Temperature: <span>{weather.main.temp}&#x2103;</span>
                    </h1>
                    <h1>WindSpeed: {weather.wind.speed}km/h</h1>
                </div>
            </div>
            }



            {/**section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
                {lagos && (
                    <div className="bg-gray-200 p-4 flex">
                        <Image width={200} height={100} src="/lagos.jpg" alt="Lagos" />
                        <div className="ml-4 flex flex-col justify-between">
                            <h1>Location: Lagos</h1>
                            <h1>
                                Weather: <span>{lagos.weather[0].description}</span>
                            </h1>
                            <h1>
                                Temperature: <span>{lagos.main.temp}&#x2103;</span>
                            </h1>
                            <h1>WindSpeed: {lagos.wind.speed}km/h</h1>
                        </div>
                    </div>
                )}

                {berlin && (
                    <div className="bg-gray-200 p-4 flex">
                        <Image width={200} height={100} src="/berlin.jpg" alt="Berlin" />
                        <div className="ml-4 flex flex-col justify-between">
                            <h1>Location: Berlin</h1>
                            <h1>
                                Weather: <span>{berlin.weather[0].description}</span>
                            </h1>
                            <h1>
                                Temperature: <span>{berlin.main.temp}&#x2103;</span>
                            </h1>
                            <h1>WindSpeed: {berlin.wind.speed}km/h</h1>
                        </div>
                    </div>
                )}

                {france && (
                    <div className="bg-gray-200 p-4 flex">
                        <Image width={200} height={100} src="/france.jpg" alt="Paris" />
                        <div className="ml-4 flex flex-col justify-between">
                            <h1>Location: Paris</h1>
                            <h1>
                                Weather: <span>{france.weather[0].description}</span>
                            </h1>
                            <h1>
                                Temperature: <span>{france.main.temp}&#x2103;</span>
                            </h1>
                            <h1>WindSpeed: {france.wind.speed}km/h</h1>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
