import informationContact from "./informationContact";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const InformationsCampus = (props) => {
    return (
        <div className="space-y-2 px-1">
            <h3 className="text-lg font-medium">Sede {props.numberCampus}</h3>
            <section className="px-4 space-y-1">
                <a href={`tel:+57${props.phoneNumberCampus}`} className="flex gap-1 items-center">
                    <FaPhoneAlt className="w-5 h-5 inline-block mr-2" />
                    {props.phoneNumberCampus}
                </a>
                <a href={`mailto:${props.emailCampus}`} className="flex gap-1 items-center">
                    <MdEmail className="w-5 h-5 inline-block mr-2" />
                    {props.emailCampus}
                </a>
                <a href={props.urlAddressCampus} target="_blank" className="flex gap-1 items-center">
                    <IoLocation className="w-5 h-5 inline-block mr-2" />
                    {props.addressCampus}
                </a>
            </section>
        </div>
    );
};

const Contact = () => {
    return <section className="text-white flex flex-col gap-4">
        <h2 className="text-xl font-semibold">Información de contacto</h2>
        {informationContact.map((information, index) => (
            <InformationsCampus 
                key={index}
                numberCampus={information.numberCampus}
                phoneNumberCampus={information.phoneNumberCampus}
                emailCampus={information.emailCampus}
                urlAddressCampus={information.urlAddressCampus}
                addressCampus={information.addressCampus}
            />
        ))}
    </section>;
};

export default Contact
