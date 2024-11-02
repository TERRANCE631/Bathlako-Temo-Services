import { useEffect, useState } from "react";

import Eureka from "../Assets/Eureka.png";
import mandarin from "../Assets/mandarin.png";
import Nova from "../Assets/Nova.png";
import bg_2 from "../Assets/bg_2.jpg";
import ffe from "../Assets/ffe.jpeg";
import starGrow from "../Assets/starGrow.png";
import Solidaridad from "../Assets/Solidaridad.png";

import img1 from "../Assets/img1.jpg";
import img2 from "../Assets/img2.jpg";
import img3 from "../Assets/img3.jpg";
import img4 from "../Assets/img4.jpg";
import img5 from "../Assets/img5.jpg";
import img6 from "../Assets/img6.jpg";
import img7 from "../Assets/img7.jpg";
import img12 from "../Assets/img12.jpg";
import img13 from "../Assets/img13.jpg";
import welcome from "../Assets/welcome.jpg";
import packhouse from "../Assets/packhouse.jpg"
import packhouse2 from "../Assets/packhouse2.jpg"

import Magalies from "../Assets/Magalies.svg";
import { Loading } from "./Loading";

export const Home = ({title}) => {
    useEffect(() => {
        document.title = `${title} | Bathlako Temo Services`
      });

    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset(); 
    };

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 2000); // 3 seconds
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);
  
    return(
        <>
            {loading ? (
                <Loading />
                ) : (
                <div className="mb-8 relative h-screen bg-cover bg-center" loading="lazy" style={{ backgroundImage: `url(${bg_2})` }}>
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-60"></div>

                {/* Hero Content */}
                    <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
                        <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
                            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                                Quality Citrus Fruits <span className="text-orange-500 fade-in">Grown with Passion</span>
                            </h1>
                            <p className="mt-4 text-base text-gray-300 sm:text-lg md:text-xl lg:text-2xl">
                                Welcome to Batlhako Temo Services. Enjoy the highest quality citrus from the North West Province, grown with care and dedication.
                            </p>
                            <div className="mt-6">
                                <a
                                href="aboutUs"
                                className="inline-block px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-md hover:bg-orange-600 transition sm:px-8 sm:py-4 sm:text-lg lg:text-xl">
                                Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}; 
            <section class="my-auto mx-auto pt-20 bg-transparent dark:bg-transparent">
                <h5 className="text-center -mt-16 mb-4 text-gray-700 dark:text-gray-300 pb-5 text-3xl font-bold underline underline-offset-8">Our cultivars</h5>
                <div class="px-10 mx-auto rounded-lg border-gray-900 max-w-screen-xl lg:py-4 flex justify-center">
                    <div class="grid md:grid-cols-3 gap-4">
                        <div class="bg-gray-50 dark:bg-gradient-to-t from-gray-800 to-transparent shadow-xl dark:bg-gray-700 border border-gray-200 dark:border-gray-500 p-2 md:p-2">
                                <img className="w-60 flex justify-evenly mx-auto" decoding="async" src={Eureka} alt="" />
                            <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Lemons</h2>
                                <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                                "<b className="text-gray-800 dark:text-gray-300"> Eureka Lemons: </b>Our farm produces premium Eureka lemons, known for their bright yellow color, tangy flavor, and abundant juice, making them a kitchen essential."
                            </p>
                        </div>
                        <div class="bg-gray-50 dark:bg-gradient-to-t from-gray-800 to-transparent shadow-lg dark:bg-gray-700 border border-gray-200 dark:border-gray-500 p-2 md:p-2">
                                    <img className="w-60 flex justify-evenly mx-auto" decoding="async" src={mandarin} alt="" />
                                <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Soft Citrus</h2>
                            <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                                "<b className="text-gray-800 dark:text-gray-300"> Nova Oranges: </b>Our Nova oranges are a delightful hybrid, offering a perfect balance of sweetness and tang, with easy-to-peel skin and juicy segments that are ideal for snacking or juicing.  
                                <b className="text-gray-800 dark:text-gray-300"> Tambor Oranges: </b>The Tambor oranges from our farm got a sweet flavor and thin skin, making them an excellent choice for fresh eating or adding a zesty touch to your recipes.  
                                <b className="text-gray-800 dark:text-gray-300"> Minneola Oranges: </b>The juicy and aromatic Minneola oranges are a versatile fruit, ideal for eating fresh, juicing, or adding to salads for a burst of citrus flavor."
                            </p>
                        </div>
                        <div class="bg-gray-50 dark:bg-gradient-to-t from-gray-800 to-transparent shadow-xl dark:bg-gray-700 border border-gray-200 dark:border-gray-500 p-2 md:p-2">
                                <img className="w-60 flex justify-evenly mx-auto" loading="lazy" src={ Nova } alt="" />
                            <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Oranges</h2>
                            <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                                "<b className="text-gray-800 dark:text-gray-300"> Valencia Oranges: </b> Our farm proudly offers a premium selection of Valencia oranges, including the late-season, midnight, and alfa-Valencia varieties, each known for their sweet, juicy flavor and vibrant color. 
                                <b className="text-gray-800 dark:text-gray-300"> Navel Oranges: </b> 
                                Discover the exceptional quality of our Navel oranges, featuring the classic Washington and Cambria varieties."
                            </p>
                        </div>
                    </div>
                </div>
                <section className="my-10">
                    <h5 className="text-center text-gray-700 dark:text-gray-300 pb-5 text-3xl font-bold underline underline-offset-8">Gallery</h5>
                    <p className="text-center text-gray-700 dark:text-gray-300 font-semibold py-2">
                        Browse our gallery to see the fruits that reflect our commitment to sustainability, innovation, and excellence</p>
                    <div className="container mx-auto px-4 py-4">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img1} alt="Gallery Image 1" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img2} alt="Gallery Image 2" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img3} alt="Gallery Image 3" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img4} alt="Gallery Image 4" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img5} alt="Gallery Image 5" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img6} alt="Gallery Image 6" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img7} alt="Gallery Image 6" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img12} alt="Gallery Image 6" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={img13} alt="Gallery Image 6" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={welcome} alt="Gallery Image 6" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={packhouse} alt="Gallery Image 6" decoding="async" className="w-full h-full object-cover" />
                            </div>
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img src={packhouse2} alt="Gallery Image 6" decoding="async" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>
                <div className="px-5">
                    <form onSubmit={handleSubmit} class="max-w-md mx-auto my-5 shadow-3xl rounded-lg dark:bg-transparent">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent focus:bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="tel" pattern="[0][6-8][0-9]{8}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (082 074 0024)</label>
                        </div>
                        <div class="relative z-0 w-full mb-5 group">
                            <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "required />
                            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. pick n pay)</label>
                        </div>
                    </div>
                        <button type="submit" class="bg-gradient-to-r from-orange-500 to-orange-400 text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </section>
            <div className="flex border-t-4 mt-10 pt-4 justify-evenly flex-wrap items-center gap-4">
                <div className="https://stargrow.co.za/" target="_blank" rel="noreferrer">
                    <a href="">
                        <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={starGrow} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.ffesa.co.za/" target="_blank" rel="noreferrer">
                        <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={ffe} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.solidaridadnetwork.org/story/african-cooperative-thrives-as-a-citrus-producer/?fbclid=IwY2xjawFnshpleHRuA2FlbQIxMQABHTInLpbIOXEekHnJgK9CzBQioVYp1ig_jMrcodUi6AVtiZy1SxMer2zbkw_aem_d2iBD9B4MZuoXMMb6K_tLw" target="_blank" rel="noreferrer">
                        <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={Solidaridad} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://magaliescitrus.co.za/" target="_blank" rel="noreferrer">
                        <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={Magalies} alt="" />
                    </a>
                </div>
            </div>
        </>
    )
}
