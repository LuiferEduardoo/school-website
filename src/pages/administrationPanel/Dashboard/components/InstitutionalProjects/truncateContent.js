const truncateHTML = (html, maxLength) => {
  const doc = new DOMParser().parseFromString(html, "text/html");
  let truncatedContent = "";
  let count = 0;

  const traverseNodes = (node) => {
    if (count >= maxLength) return;

    if (node.nodeType === Node.TEXT_NODE) {
      const remaining = maxLength - count;
      if (node.textContent.length <= remaining) {
        truncatedContent += node.textContent;
        count += node.textContent.length;
      } else {
        truncatedContent += node.textContent.slice(0, remaining);
        count += remaining;
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const tag = node.tagName.toLowerCase();
      truncatedContent += `<${tag}>`;
      for (const childNode of node.childNodes) {
        traverseNodes(childNode);
      }
      truncatedContent += `</${tag}>`;
    }
  };

  for (const node of doc.body.childNodes) {
    traverseNodes(node);
  }

  return truncatedContent;
};

export default truncateHTML
