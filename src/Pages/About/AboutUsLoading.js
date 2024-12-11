import { useEffect, useState } from "react";
import { Loading } from "../../Pages/Loading";
import { AboutUs } from "./AboutUs";

export function AboutUsLoading({title}) {
    useEffect(() => {
        document.title = `${title} | Bathlako Temo Services`
      });

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate loading delay
        const timer = setTimeout(() => setLoading(false), 4000); // 8 seconds
        return () => clearTimeout(timer); // Cleanup the timer
    }, []);

  return (
    <div>
        { loading ? (
            <Loading />
            ) : (
            <AboutUs />
        )};
    </div>
  )
}
