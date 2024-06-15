import React from 'react';
import moment from 'moment';
import 'moment/locale/es'; // Importa el locale español para moment

const NewsPreview = (props) => {
    const formatDate = (dateString) => {
        return moment(dateString).locale('es').format('LL'); // Formatea la fecha a "13 de junio de 2024"
    };

    const truncateContent = (content) => {
        const tempElement = document.createElement('div');
        tempElement.innerHTML = content;
        const textContent = tempElement.textContent || tempElement.innerText || "";
        return textContent.length > 59 ? textContent.substring(0, 59) + '...' : textContent;
    };

    return (
        <article className='cursor-pointer w-full bg-white rounded-md h-[26rem]'>
            <a href={`/noticias/${props.link}`}>
                <div className="w-full">
                    <img src={props.image} alt={props.title} className="w-full h-auto object-cover" />
                </div>
                <div className="p-3 space-y-3">
                    <p className="text-xs text-gray-500">{formatDate(props.createdAt)}</p>
                    <h4 className="text-base font-semibold">{props.title}</h4>
                    <div className="text-sm	text-gray-500">
                        {truncateContent(props.content)}
                    </div>
                </div>
            </a>
        </article>
    );
};

export default NewsPreview;
