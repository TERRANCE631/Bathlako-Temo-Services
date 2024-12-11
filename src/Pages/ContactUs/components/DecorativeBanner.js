export function DecorativeBanner() {
    return (
        <div className="relative flex flex-col items-center justify-center py-10 space-y-8">
            <h2 className="text-center text-gray-700 dark:text-gray-300 pb-5 text-3xl font-bold underline underline-offset-8">What Makes Us Special</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
                {/* Section 1 */}
                <div className="flex flex-col items-center text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="currentColor"
                        className="text-orange-500 mb-4"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0ZM4 8a4 4 0 1 1 4 4 4 4 0 0 1-4-4Z" />
                    </svg>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">Farm-to-Table Freshness</p>
                    <span className="text-gray-600 dark:text-gray-200"><br />
                        At Batlhako Temo Servives farm, we ensure that every citrus fruit is harvested at peak ripeness and delivered fresh to you, retaining its natural flavor and nutrients.
                    </span>
                </div>

                {/* Section 2 */}
                <div className="flex flex-col items-center text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="currentColor"
                        className="text-yellow-500 mb-4"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0ZM4 8a4 4 0 1 1 4 4 4 4 0 0 1-4-4Z" />
                    </svg>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">Sustainable Farming Practices</p>
                    <span className="text-gray-600 dark:text-gray-200"><br />
                        We prioritize environmentally friendly methods, ensuring that our farming supports biodiversity and minimizes waste, securing a healthier planet for future generations.
                    </span>
                </div>

                {/* Section 3 */}
                <div className="flex flex-col items-center text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="currentColor"
                        className="text-green-500 mb-4"
                        viewBox="0 0 16 16"
                    >
                        <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0ZM4 8a4 4 0 1 1 4 4 4 4 0 0 1-4-4Z" />
                    </svg>
                    <p className="text-xl font-semibold text-gray-700 dark:text-gray-200">Global Quality Standards</p>
                    <span className="text-gray-600 dark:text-gray-200"><br />
                        As a Global GAP-certified farm, our citrus fruits meet internationally recognized standards for quality, safety, and sustainability, making them ideal for export and local markets.
                    </span>
                </div>
            </div>
        </div>
    );
}
