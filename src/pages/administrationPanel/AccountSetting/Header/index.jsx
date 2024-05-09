import { useContext } from "react";
import { AdministrationsPanelContext } from "../../../../providers/AdministrationPanelContext";
import { Avatar } from "@nextui-org/react";
import OptionChangePhoto from "./OptionChangePhoto";

const Header = () => {
    const { userInformation } = useContext(AdministrationsPanelContext);
    return (
        <header className='flex gap-5 p-4 bg-white rounded-xl items-center'>
            <div className='relative'>
                <Avatar src={userInformation?.image?.[0]?.image?.file?.url} className="w-20 h-20 text-large" />
                <div className='absolute bottom-2 right-3'>
                    <OptionChangePhoto />
                </div>
            </div>
            <div>
                <h2 className='text-xl font-semibold'>
                    {`${userInformation?.name?.charAt(0)?.toUpperCase() + userInformation?.name?.slice(1)} ${userInformation?.lastName?.charAt(0)?.toUpperCase() + userInformation?.lastName?.slice(1)}`}
                </h2>
                <p className='text-gray-500 text-sm'>
                    {`${userInformation?.rol?.[0].rol?.charAt(0)?.toUpperCase() + userInformation?.rol?.[0].rol?.slice(1)}`}
                </p>
            </div>
        </header>
    )
}

export default Header