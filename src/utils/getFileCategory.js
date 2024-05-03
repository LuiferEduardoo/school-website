const getFileCategory = (fileType) => {
    const imageMimeTypes = ['image/webp'];
    const documentMimeTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/rtf', 'text/plain', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.oasis.opendocument.text', 'application/vnd.oasis.opendocument.spreadsheet', 'application/vnd.oasis.opendocument.presentation', 'application/vnd.oasis.opendocument.graphics', 'application/vnd.oasis.opendocument.formula', 'application/vnd.oasis.opendocument.chart', 'application/vnd.oasis.opendocument.database'];
    const audioMimeTypes = ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/flac', 'audio/x-aac', 'audio/x-wav'];
    const videoMimeTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/x-flv', 'video/x-matroska', 'video/webm', 'video/3gpp'];
    if(imageMimeTypes.includes(fileType)){
        return 'image';
    } else if (documentMimeTypes.includes(fileType)) {
        return 'document';
    } else if (audioMimeTypes.includes(fileType)) {
        return 'audio';
    } else if (videoMimeTypes.includes(fileType)) {
        return 'video';
    } else {
        return 'unknown';
    }
}

export default getFileCategory