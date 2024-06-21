
function createElement(tag, className, textContent) {
    const newElement = document.createElement(tag);
    newElement.classList.add(className);
    newElement.textContent = textContent;
    return newElement;
}

// checks if parent container has children and removes all children in order to refresh the data
function removeExistingElements(containerElement) {
    if (containerElement.hasChildNodes()) {
        while (containerElement.firstChild) {
            containerElement.removeChild(containerElement.firstChild);
        }
    }
}

export { createElement, removeExistingElements };