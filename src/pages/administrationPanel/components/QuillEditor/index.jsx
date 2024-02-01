import React, { useState, useEffect } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import {useDisclosure} from "@nextui-org/react";
import Modal from './Modal';
import { Card } from "@nextui-org/react";

const QuillEditor = ({ onChangeContent, content }) => {
    const {isOpen, onOpen, onClose} = useDisclosure();

    const { quill, quillRef } = useQuill({
        modules: {
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline', 'strike'],
                    [{ align: [] }],
                    [{ list: 'ordered' }, { list: 'bullet' }],
                    [{ indent: '-1' }, { indent: '+1' }],
                    [{ size: ['small', false, 'large', 'huge'] }],
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ['link', 'image', 'video'],
                    [{ color: [] }, { background: [] }],
                    ['clean']
                ],
            },
        },
    });

    useEffect(() => {
        if (quill) {
            quill.getModule('toolbar').addHandler('image', customImageHandler);

            // Agregar un listener para el evento 'text-change'
            quill.on('text-change', handleTextChange);
            quill.setContents(content)
        }
    }, [quill]);

    const customImageHandler = () => {
        onOpen()
    };
    const handleImageSelected = (selectedUrl) => {
        if(selectedUrl && quill){
            const range = quill.getSelection();
            quill.insertEmbed(range.index, 'image', selectedUrl, 'user');
        }
    };

     // Función para manejar el cambio de texto
    const handleTextChange = () => {
        // Obtener el contenido actual del Quill
        const currentContent = quill?.getContents();
        
        // Llamar a la función onChange con el contenido
        onChangeContent(currentContent);
    };

    return (
        <Card>
            <div ref={quillRef} style={{ height: '400px' }} />
            <Modal isOpen={isOpen} onClose={onClose} handleModalClose={handleImageSelected} />
        </Card>
    );
};

export default QuillEditor;