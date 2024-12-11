import { Routes, Route} from "react-router-dom";
import { AboutUsLoading, HomePageLoading, ContactUsLoading  } from "../Pages/index";
import { PageNotFound } from "../Components";

export function Allroutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePageLoading title="HomePage"/>}></Route>
        <Route path="AboutUs" element={<AboutUsLoading title="AboutUs"/>}></Route>
        <Route path="ContactUs" element={<ContactUsLoading title="ContactUs"/>}></Route>
        <Route path="*" element={<PageNotFound title="PageNotFound"/>}></Route>
      </Routes>
    </>
  )
}

