// care about kanji, jlpt, kun_readings, meanings, on_readings, stroke_count
async function fetchKanji(query) {
    const baseUrl = 'https://kanjiapi.dev/v1/kanji/';
    try {
        const response = await fetch(baseUrl + query);
        if (!response.ok) {
            throw new Error('Response was not ok');
        }
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}

export { fetchKanji };
