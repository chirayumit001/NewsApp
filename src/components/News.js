import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=edbffe49f92e4dfaabd4f8f603f3940b&page=1&pagesize=21"
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})
    }

    handleNextClick = async () => {
        console.log("Next")

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=edbffe49f92e4dfaabd4f8f603f3940b&`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        let page = 'page=1'

        this.setState({
            page: this.state.page + 1
        })
        url.concat(page)
    }

    handlePreviousClick = async () => {
        console.log("Prev")

        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=edbffe49f92e4dfaabd4f8f603f3940b&page=${this.state.page - 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({
            page: this.state.page - 1
        })
    }

    render() {
        return (
            <div className="container my-3">
                <h2>Top headlines </h2>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return  <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title?element.title.slice(0,45) + '...':'Title Not Present'} description={element.description?element.description.slice(0,80) + '...':'Description Not Present'} imageUrl={element.urlToImage?element.urlToImage:'https://cdn.cnn.com/cnnnext/dam/assets/211101113235-spacex-nasa-crew-2-dragon-capsule-endeavour-0424-super-tease.jpg'} newsUrl={element.url} />
                                </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                <button type="button" class="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                <button type="button" class="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
