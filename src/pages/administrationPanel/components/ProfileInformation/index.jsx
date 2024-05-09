import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthContext";
import { AdministrationsPanelContext } from "../../../../providers/AdministrationPanelContext";
import { Avatar, Skeleton } from "@nextui-org/react";

const ProfileInformation = () => {
    const { isLoading } = useContext(AuthContext);
    const { userInformation } = useContext(AdministrationsPanelContext);

    return (
        <>
            {isLoading ? (
                <div className="flex flex-col items-center justify-center p-8 gap-2">
                    <Skeleton className="rounded-full w-20 h-20" />
                    <Skeleton className="w-4/5 rounded-lg" />
                    <Skeleton className="w-4/5 rounded-lg" />
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-8 gap-2">
                    <Avatar src={userInformation?.image?.[0]?.image?.file?.url} className="w-20 h-20 text-large" />
                    <h1 className="text-xl text-black font-bold text-center">
                        {`${userInformation.name?.charAt(0)?.toUpperCase() + userInformation.name?.slice(1)} ${userInformation.lastName?.charAt(0)?.toUpperCase() + userInformation.lastName?.slice(1)}`}
                    </h1>
                    <p className="bg-primary-100 py-2 px-4 rounded-full text-black">
                        {`${userInformation.rol?.[0].rol?.charAt(0)?.toUpperCase() + userInformation?.rol?.[0].rol?.slice(1)}`}
                    </p>
                </div>
            )}
        </>
    )
}

export default ProfileInformation;