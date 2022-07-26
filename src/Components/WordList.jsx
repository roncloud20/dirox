import Word from "./Word";

const WordList = ({words}) => {
    return(
        <div className="WordList">
            {words.map((v,i) =>{
                return(
                    <Word 
                        word={words[i].word} 
                        phonetic={words[i].phonetic}
                        origin={words[i].origin}
                        partOfSpeech={words[i].meanings[0].partOfSpeech}
                        definition={words[i].meanings[0].definitions[0].definition}
                        example={words[i].meanings[0].definitions[0].definition}
                    />
                )
            })}
            <Word 
                word={"hello"} 
                phonetic={"həˈləʊ"}
                origin={"early 19th century: variant of earlier hollo ; related to holla."}
                partOfSpeech={"exclamation"}
                definition={"used as a greeting or to begin a phone conversation."}
                example={"I pressed the phone button and helloed"}
            />
            <Word 
                word={"hello"} 
                phonetic={"həˈləʊ"}
                origin={"early 19th century: variant of earlier hollo ; related to holla."}
                partOfSpeech={"exclamation"}
                definition={"used as a greeting or to begin a phone conversation."}
                example={"I pressed the phone button and helloed"}
            />
        </div>
    )
}

export default WordList;