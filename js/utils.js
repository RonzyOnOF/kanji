
function createElement(tag, className, textContent) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    newElement.textContent = textContent;
    return newElement;
}

export { createElement }