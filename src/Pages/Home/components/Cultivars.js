import { TypeAnimation } from "react-type-animation";

import Eureka from "../../../Assets/Eureka.png";
import mandarin from "../../../Assets/mandarin.png";
import Nova from "../../../Assets/Nova.png";

export function Cultivars() {
    return (
        <section class="my-auto mx-auto pt-5 bg-transparent dark:bg-transparent">
            <h1 className="text-6xl font-extrabold primary-color text-center">
                <span className="">
                    Cultivars:
                </span><br />
            </h1>
            <p className="text-6xl pb-[4rem] font-extrabold text-gray-900 dark:text-gray-200 pb-5 text-center">
                <TypeAnimation
                    sequence={[
                        "Eureka Lemons",
                        1000,
                        "Nova Oranges",
                        1000,
                        "Tambor Oranges",
                        1000,
                        "Minneola Oranges",
                        1000,
                        "Valencia Oranges",
                        1000,
                        "Navel Oranges",
                        1000,
                        "Minneola Oranges",
                        1000,
                    ]}
                    wrapper="span"
                    speed={20}
                    repeat={Infinity}
                />
            </p>

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
                        <img className="w-60 flex justify-evenly mx-auto" loading="lazy" src={Nova} alt="" />
                        <h2 class="text-gray-900 dark:text-white text-3xl font-extrabold mb-2">Oranges</h2>
                        <p class="text-lg font-normal text-gray-500 dark:text-gray-400">
                            "<b className="text-gray-800 dark:text-gray-300"> Valencia Oranges: </b> Our farm proudly offers a premium selection of Valencia oranges, including the late-season, midnight, and alfa-Valencia varieties, each known for their sweet, juicy flavor and vibrant color.
                            <b className="text-gray-800 dark:text-gray-300"> Navel Oranges: </b>
                            Discover the exceptional quality of our Navel oranges, featuring the classic Washington and Cambria varieties."
                        </p>
                    </div>

                </div>
            </div>

        </section>
    )
}


