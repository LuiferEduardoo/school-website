import { FilesInput } from './../../../../../components/FilesInput';

const Images = ({propsFilesInput}) => {
    return (
        <div className='col-span-5'>
            <h2 className='text-lg font-semibold text-gray-700'>Imagen</h2>
            <FilesInput 
                typeFile='image' 
                haveManyFiles={false} 
                {...propsFilesInput}
            />
        </div>
    )
}

export default Images