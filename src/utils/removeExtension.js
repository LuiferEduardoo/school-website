const removeExtension = (filename) => {
    // Find the last directory separator in the filename
    const lastSeparator = filename.lastIndexOf("/");
    // If there are no directory separators, find the last dot
    const dotIndex = filename.lastIndexOf(".");
    
    // If there's a dot and it's after the last directory separator
    if (dotIndex > lastSeparator) {
        // Return the filename without the extension
        return filename.substring(0, dotIndex);
    }
    // If there's no dot after the last directory separator,
    // or if there are no dots at all, return the original filename.
    return filename;

}

export default removeExtension