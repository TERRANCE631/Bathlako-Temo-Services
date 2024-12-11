
export function ContactDatails() {
  return (
        <div>
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

            <div className="px-5 -mb-20 mt-10">
                <p className="text-center text-gray-700 dark:text-gray-300 font-semibold py-2">Don't get lost, just click on the <a className="underline text-blue-700 transform hover:scale-105 transition-transform duration-300" href="https://www.google.com/maps/dir//-25.4467797,27.6805287/@-25.4467797,27.6805287,5559m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTAxNC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank" rel="noreferrer"> co-ordinates</a> and click on your location</p>
            </div>
        </div>
    )
}
