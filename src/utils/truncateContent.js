const truncateContent = (content, numberCharacteres) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = content;
    const textContent = tempElement.textContent || tempElement.innerText || "";
    return textContent.length > numberCharacteres ? textContent.substring(0, numberCharacteres) + '...' : textContent;
};

export default truncateContent