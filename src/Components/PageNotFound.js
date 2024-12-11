
export function PageNotFound() {
    return (
        <main>
            <div className="md:my-[8rem] my-[10.2rem]">
                <p className="text-center md:text-8xl text-5xl md:my-[2rem] my-[4rem] font-extrabold text-orange-500">
                    Oops! <span className="md:text-8xl text-5xl text-red-500 font-extrabold text-center">404  </span> Page is Not Found!</p>
                <div className="flex items-center justify-center">
                    <img className="md:w-[20rem] w-[20rem]" src="https://cdn2.iconfinder.com/data/icons/orange-emoticon/512/Orange_Emoticon-07-512.png" alt="" />
                </div>
            </div>
        </main>

    )
}