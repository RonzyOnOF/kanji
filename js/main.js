import { fetchKanji } from './api.js';
const kanjiForm = document.getElementById('kanji-form');
// stores container for kanji symbol
const kanjiContainer = document.querySelector('.kanji-image');
// stores all information about kanji like readings, and meaning
const kanjiInfo = document.querySelector('.kanji-info');

function addKanji(kanji, meaning) {
    const newKanji = document.createElement('h3');
    const newHeader = document.createElement('h4');
    newKanji.classList.add('big-kanji');
    newHeader.classList.add('kanji-header');
    newKanji.textContent = kanji;
    newHeader.innerText = meaning;
    kanjiContainer.appendChild(newKanji);
    kanjiContainer.appendChild(newHeader);
}


function removeKanji() {
    const existingKanji = kanjiContainer.lastChild;
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

    if (kanjiLookup.value == '') {
        console.log('mmm');
    } else {
        const kanjiData = await fetchKanji(kanjiLookup.value);
        console.log(kanjiData);
        kanjiLookup.value = '';
        const { kanji, heisig_en, kun_reading, on_readings, stroke_count } = kanjiData;
        addKanji(kanji, heisig_en);

    }
}

kanjiForm.addEventListener('submit', handleSubmit);