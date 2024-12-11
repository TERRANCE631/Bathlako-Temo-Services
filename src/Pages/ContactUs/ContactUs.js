import { ContactDatails } from "./components/ContactDatails";
import { GoogleMap } from "./components/GoogleMap";
import { Form } from "../Home/components/Form";
import { ScrollToTopButton } from "../../ScrollButton/ScrollToTopButton";

export const ContactUs = () => {
    return (
        <>
            <GoogleMap />
            <main>
                <ContactDatails />
                <Form />
                <ScrollToTopButton/>
            </main>
        </>
    )
}