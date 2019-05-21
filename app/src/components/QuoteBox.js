
import React from "react"

const quotes = [
    {
        quote: "Trust the process",
        author: "Ramdas Lamb"
    },
    {
        quote: "I think therefore I am",
        author: "Rene Descartes"
    },
    {
        quote: "Be the change you wish to see in the world",
        author: "Mahatma Ghandi"
    },
    {
        quote: "Life is like a hammer. You can use it to build an orphanage or kill someone. The hammer depends on how you use it.",
        author: "Ramdas Lamb"
    },
    {
        quote: "Rama kinihi chai soi hoi, karahu anyata aysa na koi",
        author: "Tyagiji"
    },
    {
        quote: "Never give up. Never ever give up.",
        author: "Winston Churchill"
    }
]

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "",
            author: "",
        }
        this.grabQuote = this.grabQuote.bind(this)
    }

    componentWillMount() {
        const int = Math.floor(Math.random() * quotes.length)
        this.setState({
            quote: quotes[int].quote,
            author: quotes[int].author
        })
    }

    grabQuote() {
        const int = Math.floor(Math.random() * quotes.length)
        this.setState({
            quote: quotes[int].quote,
            author: quotes[int].author
        })
    }
    render() {
        return (
            <div>
                <h1 id="text" >{this.state.quote}</h1>
                <h3 id="author">{this.state.author}</h3>
                <button className="button" id="new-quote" onClick={this.grabQuote}>New Quote</button>
                <button className="button">
                    <a href="twitter.com/intent/tweet" id="tweet-quote">tweet</a>
                    <i className="fa fa-twitter"></i>
                </button>
            </div>
        )
    }
}

export default QuoteBox