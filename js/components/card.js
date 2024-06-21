import { createElement } from '../utils.js';

const createCard = (text) => {
    const textContainer = createElement('div', 'card-container', '');
    const infoElement = createElement('p', 'info', text);
    textContainer.appendChild(infoElement);
    return textContainer;
}

export { createCard };