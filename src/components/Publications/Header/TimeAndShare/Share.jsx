import { FaShareAlt } from "react-icons/fa";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@nextui-org/react";
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton
} from "react-share";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Share = () => {
    const shareUrl = window.location.href;
    return (
        <Dropdown>
            <DropdownTrigger>
                <button>
                    <FaShareAlt />
                </button>
            </DropdownTrigger>
            <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="facebook">
                    <FacebookShareButton url={shareUrl} >
                        <span className="flex items-center gap-2 font-semibold">
                            <FaFacebook /> Compartir en Facebook
                        </span>
                    </FacebookShareButton>
                </DropdownItem>
                <DropdownItem key="twitter">
                    <TwitterShareButton url={shareUrl} title={'¡Mira esta noticia de la Institutición Educativa María Inmaculada'}>
                        <span className="flex items-center gap-2 font-semibold">
                            <FaXTwitter /> Compartir en X
                        </span>
                    </TwitterShareButton>
                </DropdownItem>
                <DropdownItem key="linkedin">
                    <LinkedinShareButton url={shareUrl}>
                        <span className="flex items-center gap-2 font-semibold">
                            <FaLinkedin /> Compartir en Linkedin
                        </span>
                    </LinkedinShareButton>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default Share;