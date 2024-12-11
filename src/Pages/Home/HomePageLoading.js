import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { HomePage } from "./HomePage";

export function HomePageLoading({ title }) {
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
        <HomePage />
      )};
    </div>
  )
}
