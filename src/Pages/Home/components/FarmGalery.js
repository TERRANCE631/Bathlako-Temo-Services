import img1 from "../../../Assets/img1.jpg";
import img2 from "../../../Assets/img2.jpg";
import img3 from "../../../Assets/img3.jpg";
import img4 from "../../../Assets/img4.jpg";
import img5 from "../../../Assets/img5.jpg";
import img6 from "../../../Assets/img6.jpg";
import img7 from "../../../Assets/img7.jpg";
import img12 from "../../../Assets/img12.jpg";
import img13 from "../../../Assets/img13.jpg";

import welcome from "../../../Assets/welcome.jpg";
import packhouse from "../../../Assets/packhouse.jpg"
import packhouse2 from "../../../Assets/packhouse2.jpg"

export function FarmGalery() {
    return (
        <section className="mt-[6rem]">

            <h5 className="text-center text-gray-700 dark:text-gray-300 pb-5 text-3xl font-bold underline underline-offset-8">Farm Gallery</h5>
            <p className="text-center text-gray-700 dark:text-gray-300 font-semibold py-2">
                Browse our gallery to see the fruits that reflect our commitment to sustainability, innovation, and excellence
            </p>

            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">

                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img1} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img2} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img3} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img4} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img5} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img6} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img7} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img12} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={img13} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={welcome} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={packhouse} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-full h-48 sm:h-52 lg:h-30 transform hover:scale-105 transition-transform duration-300">
                        <img src={packhouse2} alt="Gallery" decoding="async" className="w-full h-full object-cover" />
                    </div>

                </div>

            </div>

        </section>
    )
}
