import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        pagesize: 9,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pagesize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pagesize=${this.props.pagesize}`
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles,
        loading:false})
    }

    handleNextClick = async () => {
        console.log("Next")
        let page = 1
        this.setState({page: this.state.page + 1,})

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page+1}&pagesize=${this.props.pagesize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({
            
            loading: false
        })
        url.concat(page)
    }

    handlePreviousClick = async () => {
        console.log("Prev")

        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page - 1}&pagesize=${this.props.pagesize}`;
        this.setState({loading : true})
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)

        this.setState({
            page: this.state.page - 1,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-3">
            <h1 className="text-center" style={{margin: '40px'}}>Top headlines</h1>
            {this.state.loading && <Spinner />}
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
