import { fetchKanji } from './api.js';
import { createElement, removeExistingElements } from './utils.js';
import { createCard } from './components/card.js';

// Work on adding text inside cards like 'stroke count: '
// fix centering of big kanji
// equal height of cards
// mobile responsiveness


const kanjiForm = document.getElementById('kanji-form');
// stores image kanji
const kanjiImage = document.querySelector('.kanji-image');
// container for kanji symbol
const kanjiContainer = document.querySelector('.kanji-image-container');
// stores all information about kanji like readings, and meaning
const kanjiInfo = document.querySelector('.kanji-info');

// refactor this so it isn't 'static' values for classes
function addKanji(kanji, meaning) {
    const newKanji = createElement('h3', 'big-kanji', kanji);
    const newHeader = createElement('h4', 'kanji-header', meaning);
    kanjiContainer.appendChild(newKanji);
    kanjiContainer.appendChild(newHeader);
}


function removeKanji() {
    const existingKanji = kanjiContainer.lastChild;
    // refactor this code using removeExistingElements()
    if (existingKanji) {
        while (kanjiContainer.firstChild) {
            kanjiContainer.removeChild(kanjiContainer.firstChild);
        }
    }
}

async function handleSubmit(e) {
    e.preventDefault();
    removeKanji();
    const kanjiLookup = document.getElementById('kanji-search');

    if (!kanjiLookup.value) {
        console.log('Input is empty');
        return;
    } else {
        removeExistingElements(kanjiInfo);
        const kanjiData = await fetchKanji(kanjiLookup.value);
        console.log(kanjiData);
        kanjiLookup.value = '';
        const { kanji, heisig_en, kun_readings, on_readings, stroke_count, jlpt } = kanjiData;
        addKanji(kanji, heisig_en);
        kanjiInfo.appendChild(createCard(on_readings));
        kanjiInfo.appendChild(createCard(kun_readings));
        kanjiInfo.appendChild(createCard(stroke_count));
        kanjiInfo.appendChild(createCard(jlpt));
    }
}

kanjiForm.addEventListener('submit', handleSubmit);