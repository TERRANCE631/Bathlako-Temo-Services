import Owner_no_2 from "../../../Assets/Owner_no_2.jpg";
import Admin from "../../../Assets/Admin.jpg";
import Owner from "../../../Assets/Owner.jpg";

export function MeetTheTeam() {
  return (
    <>
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
        <section className="md:h-full -mt-10 mb-20 flex items-center justify-evenly text-gray-600">
            <div className="container px-5 pt-24 mx-auto">

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 border-opacity-60 shadow-lg rounded-lg overflow-hidden">
                            <img className="lg:h-72 md:h-48 w-full object-cover object-center"src={Owner_no_2} alt="team of the farm" /> 
                            <div className="p-6 text-gray-700 font-normal dark:text-gray-200">
                            <h1 className="text-gray-800 text-3xl dark:text-gray-300 text-center text-slide-left">Farm Manager</h1>
                                <p className="text-gray-500 dark:text-gray-300"><p className="text-center p-4 text-2xl text-slide-right">Lerato Moilwa</p>
                                </p> 
                                <p className="leading-relaxed">
                                    "As Farm Manager at Batlhako, she plays a vital role in overseeing daily operations, 
                                    ensuring the smooth running of the orchards and managing the workforce. 
                                    Her responsibilities include monitoring the health and growth of the citrus crops, 
                                    coordinating harvesting schedules, and implementing sustainable farming practices. 
                                    Her hands-on approach and expertise ensure that the farm consistently produces high-quality fruit while meeting production targets and maintaining the farm's commitment to excellence."
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 shadow-lg border-opacity-60 rounded-lg overflow-hidden">
                            <img decoding="async" className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src={Owner} alt="team" />
                            <div className="p-6 text-gray-700 font-normal dark:text-gray-200">
                            <h1 className="text-gray-800 text-3xl dark:text-gray-300 text-center text-slide-left">CEO & Farm Manager</h1>
                                <p className="text-gray-500 dark:text-gray-300"><p className="text-center p-4 text-2xl text-slide-right">Isaac Moilwa</p></p> 
                                <p className="leading-relaxed">
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

                    <div className="p-4 sm:w-1/2 lg:w-1/3">
                        <div className="h-full border-2 border-gray-200 shadow-lg border-opacity-60 rounded-lg overflow-hidden">
                            <img decoding="async" className="lg:h-72 md:h-48 w-full object-cover object-center"
                                src={Admin} alt="team" />
                            <div className="p-6 text-gray-700 font-normal dark:text-gray-200">
                            <h1 className="text-gray-800 text-3xl dark:text-gray-300 text-center text-slide-left">Administration and quality control</h1>
                                <p className="text-gray-500 dark:text-gray-300"><p className="text-center p-4 text-2xl text-slide-right">Mmatsheko Moilwa </p></p> 
                                <p className="leading-relaxed"> 
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
    </>
  )
}
