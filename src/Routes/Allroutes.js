import { Routes, Route} from "react-router-dom";
import { Home, PageNotFound, AboutUs, ContactUs  } from "../Pages/index";

export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home title="Home"/>}></Route>
        <Route path="AboutUs" element={<AboutUs title="AboutUs"/>}></Route>
        <Route path="ContactUs" element={<ContactUs title="ContactUs"/>}></Route>
        <Route path="*" element={<PageNotFound title="PageNotFound"/>}></Route>
      </Routes>
    </>
  )
}

