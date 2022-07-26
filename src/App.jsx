import { Component } from "react";
import SearchBox from "./Components/SearchBox";
import WordList from "./Components/WordList";

class App extends Component {
    constructor(){
        super()
        this.state = {
            words: [],
            searchField: ''
        }
    }

    componentDidMount() {
        // fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.state.searchField}`)
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/`)
        .then(response => response.json())
        .then(word => this.setState({words:word}));
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    render(){
        return (
            <div className="App">
                <h1>Dirox</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <WordList words={this.state.words.filter(word => {
                    return word.word.lowerCase().includes(this.state.searchField.toLowerCase()) 
                })}/>
            </div>
        )
    }
}

export default App;