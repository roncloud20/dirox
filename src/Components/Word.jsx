const Word = ({word, phonetic, origin, partOfSpeech, definition, example }) => {
    return (
        <div className="Word">
            <h1>{word}</h1>
            <h3><i>{phonetic}</i></h3>
            <p>{origin}</p>
            <p>{partOfSpeech}</p>
            <p>{definition}</p>
            <p>{example}</p>
        </div>
    )
}

export default Word;