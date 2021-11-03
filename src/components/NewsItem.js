import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Newsitem.css'

export class NewsItem extends Component {
    

  render() {
      let {title, description, imageUrl, newsUrl, date, author} = this.props;
      date = new Date
    return (
      <div className="my-3">
      <a href={newsUrl} target="_blank">
        <div className="card" >
          <img src={imageUrl} className="card-img-top" alt="..." height={200} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text">
              by {author} on {date.toGMTString()}
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More 
            </a>
          </div>
        </div>
        </a>
      </div>
    );
  }
}

export default NewsItem;
