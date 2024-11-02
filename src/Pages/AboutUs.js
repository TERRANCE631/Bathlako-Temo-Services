import { useEffect, useState } from "react";

import backgroundImage from "../Assets/backgroundImage.jpg";
import Owner_no_2 from "../Assets/Owner_no_2.jpg";
import Admin from "../Assets/Admin.jpg";
import Owner from "../Assets/Owner.jpg";
import ffe from "../Assets/ffe.jpeg";
import starGrow from "../Assets/starGrow.png";
import Solidaridad from "../Assets/Solidaridad.png";
import Magalies from "../Assets/Magalies.svg";
import { Loading } from "./Loading";

export const AboutUs = ({title}) => {
    useEffect(() => {
        document.title = `${title} | Bathlako Temo Services`
      });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        event.target.reset(); 
    };
  
    const students = [
        {
            img: `./imgs/student5.jpg`,
        },
        {
            img: `./imgs/student3.jpg`,
        },
        {
            img: `./imgs/student6.jpg`,
        },
        {
            img: `./imgs/student1.jpg`,
        },
        {
            img: `./imgs/student7.jpg`,
        },
        {
            img: `./imgs/student2.jpg`,
        },
    ];

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 2000); // 3 seconds
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

  return (
    <>
        {loading ? (
            <Loading />
        ) : (
            <div className="relative h-screen bg-cover bg-center" loading="lazy" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
                {/* Hero Content */}
                <div decoding="async" className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">
                    <div className="max-w-lg md:max-w-2xl lg:max-w-4xl">
                        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
                            Welcome to our <span className="text-orange-500 fade-in">orchard</span>
                        </h1>
                    </div>
                </div>
            </div>
        )};

        <main>
            <div className="bg-transparent my-5 dark:bg-transparent">
                <div className="flex flex-wrap justify-around">
                    <div className="grid md:grid-cols-2">

                        <div className="relative w-full pb-[56.25%] overflow-hidden shadow-lg">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full border-0"
                                src="https://www.youtube.com/embed/lio2-B2w19k?autoplay=1&mute=1"
                                title="YouTube video player"
                                decoding="async"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div> 

                        <div className="flex shadow-lg justify-evenly items-center">
                        <p className="px-4 py-5 text-left rtl:text-right text-gray-700 font-normal dark:text-gray-400 dark:bg-transparent text-slide-left" >
                                "Batlhako is proud to produce some of the highest quality citrus fruits 
                                in the North West Province, standing out as the first black-owned farm in 
                                the province to achieve export success. 

                                Our commitment to excellence is 
                                reflected in our approach, where we prioritize quality over quantity. 
                                Our sales distribution is carefully managed, with 12% directed toward 
                                juice production, 
                                23% to the fresh market, and an impressive 65% allocated for export.
                            <br />
                            <br />
                                We continuously reinvest a significant portion of our profits into 
                                enhancing the quality of our fruits, ensuring we meet and exceed the 
                                expectations of our growing market. 
                                Additionally, Batlhako is Global GAP 
                                certified, adhering to the internationally recognized standards for good 
                                agricultural practices, further underscoring our dedication to excellence in farming"<br />
                                <a className="underline text-blue-700 font-semibold" target="_blank" rel="noreferrer" href="https://www.nichefarmers.com/citrus-farming-definitely-worth-looking-into/">read more</a>...
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <h5 className="text-center text-gray-700 dark:text-gray-300 mb-10 mt-20 text-3xl font-bold underline underline-offset-8">Company's impact</h5>
            <div className="flex flex-wrap justify-around m-auto">
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="hover:bg-gray-200 hover:text-white transition duration-300 ease-in bg-gray-50 dark:bg-gradient-to-t from-gray-800 to-transparent shadow-lg dark:bg-gray-700 border border-orange-200 dark:border-orange-500 rounded-lg p-2 md:p-10">
                        <div className="flex items-center justify-center py-10">
                            <p className="text-center text-gray-700 dark:text-gray-300 mb-10 text-3xl font-bold underline underline-offset-8">Empowering Future Farmers</p>
                        </div>
                        <p className="text-left rtl:text-right text-gray-700 font-normal dark:text-gray-400">
                            "<b className="text-gray-800 dark:text-gray-300">Students</b> come to this farm annually for experience because Batlhako offers a unique opportunity to learn from a pioneering, Global GAP-certified citrus operation. 
                            Here, they gain hands-on knowledge in cultivating high-quality oranges like Valencia, Navels, and specialty varieties such as Nova and Tambor. 
                            The farm's commitment to quality over quantity ensures a rich learning environment focused on sustainable farming practices and meeting international export standards. 
                            This experience not only enriches their understanding of citrus cultivation but also prepares them for careers in agriculture, equipped with practical skills and insights gained directly from a leading black-owned farm in the North West Province."
                        </p>

                    </div >
                    <div className="hover:bg-gray-200 hover:text-white transition duration-300 ease-in bg-gray-50 dark:bg-gradient-to-t from-gray-800 to-transparent shadow-lg dark:bg-gray-700 border border-orange-200 dark:border-orange-500 rounded-lg p-2 md:p-10">
                        <div className="flex items-center justify-center py-10">
                            <p className="text-center text-gray-700 dark:text-gray-300 mb-10 text-3xl font-bold underline underline-offset-8">Mastering Fruit Production</p>
                        </div>
                        <p className="text-left rtl:text-right text-gray-700 font-normal dark:text-gray-400">
                            "The<b className="text-gray-800 dark:text-gray-300"> fruit production</b> at Batlhako Citrus Farm significantly contributes to South Africa's agricultural GDP, 
                            while also creating vital job opportunities within the local community. 
                            As a leading exporter of premium citrus, our farm strengthens international trade relationships with key markets in Europe, Asia, 
                            and the Middle East. Through our commitment to sustainable farming and Global GAP certification, we enhance South Africa’s global reputation for agricultural excellence. 
                            By producing high-quality fruits, Batlhako is not only driving local economic growth but also positioning the country as a top player in the global agricultural market."                    
                        </p>

                    </div >
                </div>
            </div>

            <h5 className="text-center text-gray-700 dark:text-gray-300 p-10 mt-10 text-3xl font-bold underline underline-offset-8">In-service training students</h5>
                <p className="text-center text-gray-700 dark:text-gray-300">We take students from different universities and colleges to do their Work Integrated Learning and some for internship</p>
            <section className="mb-10 flex justify-center items-center pb-10 border-b-4">
                <div className="container mx-auto px-4 py-4">
                    <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 gap-8 ">
                        {students.map((student) => (
                            <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                                <img decoding="async" src={student.img} alt="Gallery" className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="mt-20 py-1 px-1 text-left rtl:text-right text-gray-700 font-normal dark:text-gray-400 dark:bg-transparent text-slide-left">
                <h1 className="text-center text-gray-700 dark:text-gray-300 -mt-5 mb-6 text-3xl font-bold">
                    Strengthening Workforce Collaboration with Solidaridad
                </h1>
                <p>At Batlhako, the team has adopted a diverse workforce model, consisting of 
                    <span className="text-blue-700"> 15 permanent employees</span>,<span className="text-blue-700"> 30 contract workers</span>,<span className="text-blue-700"> 81 seasonal laborers</span>, and<span className="text-blue-700"> 18 in-service training students </span> 
                    with support from South Africa’s <a className="text-blue-700" href="https://www.solidaridadnetwork.org/news/social-employment-fund-leveraging-agriculture-fo-sustainable-employment/" target="_blank" rel="noreferrer"> Social Employment Fund (SEF)</a> project, 
                    the cooperative is playing a key role in job creation and skills development within the agricultural sector. 
                    As an implementing partner, Solidaridad has helped Batlhako integrate an additional nineteen contract workers into their team."
                </p>
            </div>

            <h5 className="text-center text-gray-700 dark:text-gray-300 mt-20 text-3xl font-bold underline underline-offset-8">Meet The Team</h5>
            <section class="md:h-full -mt-10 flex items-center justify-evenly text-gray-600">
                <div class="container px-5 pt-24 mx-auto">

                    <div class="flex flex-wrap -m-4">
                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 border-opacity-60 shadow-lg rounded-lg overflow-hidden">
                                <img class="lg:h-72 md:h-48 w-full object-cover object-center"src={Owner_no_2} alt="team of the farm" /> 
                                <div class="p-6 text-gray-700 font-normal dark:text-gray-200">
                                <h1 className="text-gray-800 text-3xl dark:text-gray-300 text-center text-slide-left">Farm Manager</h1>
                                    <p class="leading-relaxed">
                                    <p className="text-gray-500 dark:text-gray-300"><p className="text-center p-4 text-2xl text-slide-right">Lerato Moilwa</p>
                                    </p> 
                                        "As Farm Manager at Batlhako, she plays a vital role in overseeing daily operations, 
                                        ensuring the smooth running of the orchards and managing the workforce. 
                                        Her responsibilities include monitoring the health and growth of the citrus crops, 
                                        coordinating harvesting schedules, and implementing sustainable farming practices. 
                                        Her hands-on approach and expertise ensure that the farm consistently produces high-quality fruit while meeting production targets and maintaining the farm's commitment to excellence."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 shadow-lg border-opacity-60 rounded-lg overflow-hidden">
                                <img decoding="async" class="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src={Owner} alt="team" />
                                <div class="p-6 text-gray-700 font-normal dark:text-gray-200">
                                <h1 className="text-gray-800 text-3xl dark:text-gray-300 text-center text-slide-left">CEO & Farm Manager</h1>
                                    <p class="leading-relaxed">
                                    <p className="text-gray-500 dark:text-gray-300"><p className="text-center p-4 text-2xl text-slide-right">Isaac Moilwa</p></p> 
                                        "As the Director and Owner of Batlhako Citrus Farm, I am deeply committed to overseeing every aspect of our operations, 
                                        from strategic decision-making to hands-on farm management. 
                                        My leadership ensures that we uphold the highest standards of quality, 
                                        sustainability, and innovation in citrus farming. Being the first black-owned citrus farm in North West Province to export, 
                                        I take immense pride in steering our farm toward continued growth while honoring our dedication to producing premium, 
                                        high-quality fruits for both local and international markets."
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="p-4 sm:w-1/2 lg:w-1/3">
                            <div class="h-full border-2 border-gray-200 shadow-lg border-opacity-60 rounded-lg overflow-hidden">
                                <img decoding="async" class="lg:h-72 md:h-48 w-full object-cover object-center"
                                    src={Admin} alt="team" />
                                <div class="p-6 text-gray-700 font-normal dark:text-gray-200">
                                <h1 className="text-gray-800 text-3xl dark:text-gray-300 text-center text-slide-left">Administration and quality control</h1>
                                    <p class="leading-relaxed">
                                    <p className="text-gray-500 dark:text-gray-300"><p className="text-center p-4 text-2xl text-slide-right">Mmatsheko Moilwa </p></p> 
                                        "ensuring the excellence and reliability of our citrus farm operations at Batlhako.
                                        Our administrative processes are meticulously designed to streamline logistics, manage resources efficiently, and uphold stringent quality standards from orchard to market. 
                                        Through rigorous quality control measures, including adherence to Global GAP certification standards, we maintain consistency in our fruit's flavor, appearance, and nutritional value. 
                                        This commitment not only assures our customers of superior citrus products but also reinforces our dedication to sustainable farming practices and customer satisfaction."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="px-5">
            <form onSubmit={handleSubmit} class="max-w-md mx-auto my-10 shadow-3xl rounded-lg bg-transparent dark:bg-transparent">
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

            <div className="flex border-t-4 mt-10 pt-4 justify-evenly flex-wrap items-center gap-4">
                <div className="" target="_blank" rel="noreferrer">
                    <a href="https://stargrow.co.za/">
                        <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={starGrow} alt="Collaboration" />
                    </a>
                </div>
                <div>
                    <a href="https://www.ffesa.co.za/" target="_blank" rel="noreferrer">
                        <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={ffe} alt="Collaboration" />
                    </a>
                </div>
                <div>
                    <a href="https://www.solidaridadnetwork.org/story/african-cooperative-thrives-as-a-citrus-producer/?fbclid=IwY2xjawFnshpleHRuA2FlbQIxMQABHTInLpbIOXEekHnJgK9CzBQioVYp1ig_jMrcodUi6AVtiZy1SxMer2zbkw_aem_d2iBD9B4MZuoXMMb6K_tLw" target="_blank" rel="noreferrer">
                        <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={Solidaridad} alt="Collaboration" />
                    </a>
                </div>
                <div>
                    <a href="https://magaliescitrus.co.za/" target="_blank" rel="noreferrer">
                        <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={Magalies} alt="Collaboration" />
                    </a>
                </div>
            </div>
        </main>
    </>
  )
}

