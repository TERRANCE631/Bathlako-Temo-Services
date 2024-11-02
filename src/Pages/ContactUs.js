
import starGrow from "../Assets/starGrow.png";
import Solidaridad from "../Assets/Solidaridad.png";
import ffe from "../Assets/ffe.jpeg"
import Magalies from "../Assets/Magalies.svg";

import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export const ContactUs = ({title}) => {
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
            <div className="mt-[70px] mb-[-30px]">
                <iframe loading="lazy" width="100%" height="350" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=-25.446779672433184,%2027.680528734085595+(BATLHAKO%20TEMO%20SERVICES)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
            </div>
        )};
        <main>
            <section>
                <div className="flex flex-wrap justify-center pt-2 pb-2 border-blue-100 border-b-4 my-2">
                    <div className="py-2 mx-5 text-slide-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="ml-8 mb-2 opacity-65 bi bi-telephone" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
                        </svg>
                        <p className="text-gray-700 font-normal dark:text-gray-300 font-semibold">073 870 5143</p>           
                    </div>
                    <div className="py-2 mx-5 text-slide-left">
                        <a href="https://www.google.com/maps/dir//-25.4467797,27.6805287/@-25.4467797,27.6805287,5559m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="ml-20 mb-2 opacity-65 bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                            </svg>  
                        <p className="hover:text-blue-700 font-semibold text-gray-700 font-normal dark:text-gray-300 transform hover:scale-105 transition-transform duration-300">25°26'48.4"S 27°40'49.9"E</p>          
                        </a>
                    </div>
                </div>
            </section>

            <div className="px-5 mt-10">
                <p className="text-center text-gray-700 dark:text-gray-300 font-semibold py-2">Don't get lost, just click on the <a className="underline text-blue-700 transform hover:scale-105 transition-transform duration-300" href="https://www.google.com/maps/dir//-25.4467797,27.6805287/@-25.4467797,27.6805287,5559m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" rel="noreferrer"> co-ordinates</a> and click on your location</p>
            <form onSubmit={handleSubmit} class="max-w-md mx-auto mb-18 mt-10 shadow-3xl rounded-lg dark:bg-transparent">
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
                        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                    </div>
                </div>
                <div class="grid md:grid-cols-2 md:gap-6">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0][6-8][0-9]{8}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" required />
                        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (082 074 0024)</label>
                    </div>
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. pick n pay)</label>
                    </div>
                </div>
                    <button type="submit" class="bg-gradient-to-r from-orange-500 to-orange-400 text-white focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
            </div>
            <div className="flex border-t-4 border-blue-100 mt-48 pt-4 justify-evenly flex-wrap items-center gap-4">
                <div>
                    <a href="https://stargrow.co.za/" target="_blank" rel="noreferrer">
                        <img className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={starGrow} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.ffesa.co.za/" target="_blank" rel="noreferrer">
                        <img className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={ffe} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://www.solidaridadnetwork.org/story/african-cooperative-thrives-as-a-citrus-producer/?fbclid=IwY2xjawFnshpleHRuA2FlbQIxMQABHTInLpbIOXEekHnJgK9CzBQioVYp1ig_jMrcodUi6AVtiZy1SxMer2zbkw_aem_d2iBD9B4MZuoXMMb6K_tLw" target="_blank" rel="noreferrer">
                        <img className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={Solidaridad} alt="" />
                    </a>
                </div>
                <div>
                    <a href="https://magaliescitrus.co.za/" target="_blank" rel="noreferrer">
                        <img className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={Magalies} alt="" />
                    </a>
                </div>
            </div>
        </main>
    </>

    )
}