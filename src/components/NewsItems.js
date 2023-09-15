import React, { Component } from 'react'

export default class NewsItems extends Component {
  
  render() {
    let {title, description, imageUrl, newsUrl, date, author} = this.props;
    return (
      <div>
        <div className="card my-3">
            <img className="card-img-top" src={imageUrl} height={200} alt=""/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <p className="card-text"><small className="text-body-secondary">By {author ? author : "unknown"} on {new Date(date).toDateString()}</small></p>
                <a href={newsUrl}  rel="noreferrer" target = "_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
      
    )
  }
}
