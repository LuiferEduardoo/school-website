import React from 'react';
import 'moment/locale/es'; // Importa el locale español para moment
import { Link } from 'react-router-dom';
import Image from './Image';
import Information from './Information';

const PreviewPublications = (props) => {
    return (
        <article className='cursor-pointer w-full bg-white rounded-md h-[26rem] shadow-lg overflow-hidden'>
            <Link to={props.link}>
                <Image 
                    title={props.title}
                    image={props.image}
                />
                <Information 
                    createdAt={props.createdAt}
                    title={props.title}
                    content={props.content}
                />
            </Link>
        </article>
    );
};

export default PreviewPublications;
