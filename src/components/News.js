import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pagesize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async newsUpdate() {
      this.props.setProgress(10)
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    // this.props.setProgress(30)
    let parsedData = await data.json();
    console.log(parsedData);
    this.props.setProgress(50)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100)
  }
  async componentDidMount() {
    this.newsUpdate();
    console.log("Mount comp")
  }

  //   handleNextClick = async () => {
  //     console.log("Next");
  //     let page = 1;
  //     this.setState({ page: this.state.page + 1 });

  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
  //       page + 1
  //     }&pagesize=${this.props.pagesize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);

  //     this.setState({
  //       loading: false,
  //     });
  //     url.concat(page);
  //   };

  //   handlePreviousClick = async () => {
  //     console.log("Prev");
  //     let page = 1;

  //     let url = `https://newsapi.org/v2/top-headlines?country=${
  //       this.props.country
  //     }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
  //       page - 1
  //     }&pagesize=${this.props.pagesize}`;
  //     this.setState({ loading: true });
  //     let data = await fetch(url);
  //     let parsedData = await data.json();
  //     console.log(parsedData);

  //     this.setState({
  //       // page: this.state.page - 1,
  //       loading: false,
  //     });
  //   };

  fetchMoreData = async () => {
    this.setState({page: this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pagesize=${this.props.pagesize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "40px" }}>
          Top headlines
        </h1>
        {this.state.loading && <Spinner />}

        <div className="row">
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            style={{ display: "flex", flexDirection: "column", alignItems:"center" }} //To put endMessage and loader to the top.
            // inverse={true} 
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
            // scrollableTarget="scrollableDiv"
          >
            {this.state.articles.map((element) => {
              return (
                <div className="col-sm-4">
                  <NewsItem
                    title={
                      element.title
                        ? element.title.slice(0, 45) + "..."
                        : "Title Not Present"
                    }
                    description={
                      element.description
                        ? element.description.slice(0, 80) + "..."
                        : "Description Not Present"
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://cdn.cnn.com/cnnnext/dam/assets/211101113235-spacex-nasa-crew-2-dragon-capsule-endeavour-0424-super-tease.jpg"
                    }
                    newsUrl={element.url}
                    date={element.publishedAt}
                    author={element.author ? element.author : "Unknown"}
                  />
                </div>
              );
            })}
          </InfiniteScroll>
          </div>
        </div>
         
    );
  }
}

export default News;
