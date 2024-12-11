import ffe from "../../../Assets/ffe.jpeg";
import starGrow from "../../../Assets/starGrow.png";
import Solidaridad from "../../../Assets/Solidaridad.png";
import Magalies from "../../../Assets/Magalies.svg";

export function Collaboration() {
  return (
        <div className="flex border-t-4 mt-10 pt-4 justify-evenly flex-wrap items-center gap-4">
            <div>
                <a href="https://stargrow.co.za/" target="_blank" rel="noreferrer">
                    <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={starGrow} alt="" />
                </a>
            </div>
            <div>
                <a href="https://www.ffesa.co.za/" target="_blank" rel="noreferrer">
                    <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={ffe} alt="" />
                </a>
            </div>
            <div>
                <a href="https://www.solidaridadnetwork.org/story/african-cooperative-thrives-as-a-citrus-producer/?fbclid=IwY2xjawFnshpleHRuA2FlbQIxMQABHTInLpbIOXEekHnJgK9CzBQioVYp1ig_jMrcodUi6AVtiZy1SxMer2zbkw_aem_d2iBD9B4MZuoXMMb6K_tLw" target="_blank" rel="noreferrer">
                    <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={Solidaridad} alt="" />
                </a>
            </div>
            <div>
                <a href="https://magaliescitrus.co.za/" target="_blank" rel="noreferrer">
                    <img decoding="async" className="w-[150px] sm:w-[200px] md:w-[200px] lg:w-[200px] xl:w-[230px] object-contain" src={Magalies} alt="" />
                </a>
            </div>
        </div>
    )
}
