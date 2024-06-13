import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import informationContact from "../../../components/Footer/Information/Contact/informationContact";

const Information = () => {
    return (
        <div className="space-y-4 w-full">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Contáctanos
            </h2>
            <p className="text-gray-500">
                Llena el formulario y nos pondremos en contacto contigo a la
                brevedad.
            </p>
            <div className="space-y-2">
                <div className="flex items-center gap-2">
                    <IoLocation className="h-5 w-5 text-gray-500 " />
                    <p className="text-gray-500">
                        {informationContact[0].addressCampus}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <FaPhoneAlt className="h-5 w-5 text-gray-500" />
                    <p className="text-gray-500">
                        {informationContact[0].phoneNumberCampus}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <MdEmail className="h-5 w-5 text-gray-500" />
                    <p className="text-gray-500">
                        {informationContact[0].emailCampus}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Information
