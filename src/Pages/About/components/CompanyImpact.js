import React from 'react'

export function CompanyImpact() {
  return (
    <>
        <h5 className="text-center text-gray-700 dark:text-gray-300 mb-10 mt-20 text-3xl font-bold underline underline-offset-80">Company's impact</h5>
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
    </>
  )
}
