import React from 'react'

export function YouTube() {
  return (
    <div className="bg-transparent my-[2rem] dark:bg-transparent">
        <div className="flex flex-wrap justify-around">
            <div className="grid md:grid-cols-2">

                <div className="relative w-full pb-[56.25%] overflow-hidden shadow-lg">
                    <iframe
                        className="absolute top-0 left-0 w-full h-full border-0"
                        src="https://www.youtube-nocookie.com/embed/lio2-B2w19k?rel=0"
                        title="YouTube video player"
                        loading="lazy"
                        allow="clipboard-write; encrypted-media; picture-in-picture"
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
  )
}
