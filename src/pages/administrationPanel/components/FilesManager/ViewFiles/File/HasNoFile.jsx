import { CiFileOff } from "react-icons/ci";

const HasNoFile = () => {
    return (
        <section className='w-full col-span-5 flex flex-col items-center text-gray-500'>
            <CiFileOff className='text-[14rem] text-gray-300 lg:text-[20rem]' />
            <span className="text-xl font-semibold">Sin archivos</span>
            <span className="">súbelos en el boton "Subir"</span>
        </section>
    )
}

export default HasNoFile