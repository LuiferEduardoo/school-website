import { MdOutlineImageNotSupported } from "react-icons/md";


const HasNoImage = () => {
    return (
        <section className='w-full col-span-5 flex flex-col items-center text-gray-500'>
            <MdOutlineImageNotSupported className='text-[14rem] text-gray-300 lg:text-[20rem]' />
            <span className="text-xl font-semibold">Sin imagenes</span>
            <span className="">súbelas en el boton "Subir"</span>
        </section>
    )
}

export default HasNoImage