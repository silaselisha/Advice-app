import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {advice: ''}
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        const url = `https://api.adviceslip.com/advice`
        try {
            const response = await axios.get(url)
            const { advice } = response.data.slip

            this.setState({
                advice: advice
            })
        }catch(error) {
            console.log(error)
        }
    }

    render() {
        const { advice } = this.state
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{advice}</h1>
                    <button className="button" onClick={this.fetchData} >
                        <span>Get Advice!</span>
                    </button>
                </div>
            </div>
        )
    }
}

export default App