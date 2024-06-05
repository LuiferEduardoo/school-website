import { Button } from "@nextui-org/react";
import { MdComputer } from "react-icons/md";
import { RiDashboard2Line } from "react-icons/ri";

const Buttons = () => {
    const handleNoteSystemClick = () => {
        window.open("https://www.sismac.info/", "_blank");
    };

    const handleDashboardClick = () => {
        window.open("/auth/login", "_blank");
    };

    return (
        <div className="flex gap-4 flex-col lg:flex-row">
            <Button 
                startContent={<MdComputer />} 
                className="font-medium" 
                variant="faded" 
                onPress={handleNoteSystemClick}
            >
                Sistema de notas
            </Button>
            <Button 
                startContent={<RiDashboard2Line />} 
                className="font-medium" 
                variant="faded" 
                onPress={handleDashboardClick}
            >
                Dashboard
            </Button>
        </div>
    );
}

export default Buttons;
