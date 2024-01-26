const ProfileInformation = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
                <img
                src="../src/assets/img/blank-profile-picture.webp"
                className="w-20 h-20 object-cover rounded-full ring-2 ring-gray-300"
                />
                <h1 className="text-xl text-black font-bold">Jorge Luis Trejo</h1>
                <p className="bg-primary-100 py-2 px-4 rounded-full text-black">
                Coordinador
                </p>
            </div>
        </>
    )
}

export default ProfileInformation