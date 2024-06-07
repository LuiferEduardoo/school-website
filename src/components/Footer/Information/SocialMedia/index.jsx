import socialMedia from "./socialMedia"
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
    return (
        <div className="flex flex-col gap-8 text-white justify-items-center items-center">
            <h2 className="text-xl font-semibold">Redes sociales</h2>
            <div className="flex gap-2 text-5xl">
                <a href={socialMedia.facebook} target="_blank">
                    <FaFacebook />
                </a>
                <a href={socialMedia.instagram} target="_blank">
                    <AiFillInstagram />
                </a>
                <a href={socialMedia.youtube} target="_blank">
                    <FaYoutube />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia