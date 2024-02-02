import React from 'react';
import { Editor } from '@tinymce/tinymce-react';

const editorText = ({onChangeContent, content}) => {

  return (
    <Editor
      apiKey='9us77w982jmq07cwtuj6yd0913s0uy3naer0fqj47ea00qju'
      value={content}
      init={{
        language: 'es',
        height: 500,
        plugins: 'lists advlist link image table codesample insertdatetime emoticons media code wordcount searchreplace autolink fullscreen charmap',
        branding: false,
        menubar: false,
        toolbar: 'undo redo | styles forecolor | bold italic | fontsize | alignleft aligncenter alignright alignjustify | outdent indent | numlist bullist table codesample charmap emoticons | link image media | searchreplace wordcount | insertdatetime | fullscreen | code',
        font_size_formats: '8pt 10pt 12pt 14pt 16pt 18pt 24pt 36pt 48pt',
        toolbar_mode: 'sliding',
        valid_elements: '*[*]',
        valid_classes: 'className',
      }}
      onEditorChange={onChangeContent}
    />
  );
};

export default editorText;
