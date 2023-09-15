import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import $ from "jquery";

export default class News extends Component {
  static defaultProps = {
    country: 'in',
    pageSize: 5,
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  };
  constructor(props) {
    super(props)
    
    //console.log('I am a constructor fron news')
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0,
    }
    document.title = `News - ${this.props.category}`;
  }

  async updatenews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dd00ce489d6f4e17aec1896290e0b0b3&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`
    this.setState({ loading: true })
    console.log('update', this.state.page)
    // console.log('pageSize',this.props.pageSize)
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.page = this.page + 1
  }
  async componentDidMount() {
    // console.log('mount')
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dd00ce489d6f4e17aec1896290e0b0b3&page=1&pageSize=${this.props.pageSize}&category=${this.props.category}`
    this.setState({ loading: true })
    // console.log('pageSize',this.props.pageSize)
    let data = await fetch(url);
    let parsedData = await data.json()
    // console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    })
  }

  handlenext = async () => {
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dd00ce489d6f4e17aec1896290e0b0b3&page=${this.state.page + 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`
    //     this.setState({loading:true})
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     this.setState({
    //         page : this.state.page + 1,
    //         articles : parsedData.articles,
    //         loading : false
    //     })
    //     console.log(this.state.page)
    // }
    this.setState({ page: this.state.page + 1 })
    this.updatenews()
  }

  handleprev = async () => {
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dd00ce489d6f4e17aec1896290e0b0b3&page=${this.state.page - 1}&pageSize=${this.props.pageSize}&category=${this.props.category}`
    // this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json()
    // this.setState({loading:true})
    // this.setState({
    //     page : this.state.page - 1,
    //     articles : parsedData.articles,
    //     loading : false
    // })
    this.setState({ page: this.state.page - 1 })
    this.updatenews()
  }
fetchMoreData = async () => {
  this.setState({
    page : this.state.page + 1
  })
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=dd00ce489d6f4e17aec1896290e0b0b3&page=${this.state.page}&pageSize=${this.props.pageSize}&category=${this.props.category}`
    this.setState({ loading: true })
    console.log('update', this.state.page)
    // console.log('pageSize',this.props.pageSize)
    let data = await fetch(url);
    let parsedData = await data.json()
    //console.log(parsedData)
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false
    })
    this.page = this.page + 1
    console.log('article length',this.state.articles.length)
    console.log('total results',this.state.totalResults)
}

  backToTop = () => {
    window.scrollTo(500, 0);
  }
  render() {
    //console.log('render');
    return (
      <div className='container'>
       
        <h1 className="text-center">News top headlines</h1>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row mt-5">
          {this.state.articles.map((element) => {
            return (
              <div className="col-lg-4" >
                <NewsItems
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage ? element.urlToImage : "https://gumlet.assettype.com/barandbench%2F2022-08%2F3430feb1-449f-45c5-949d-a0f40202fa17%2F2.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true"}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                />
              </div>
            );
          })}
        </div>
        </InfiniteScroll>
<<<<<<< HEAD
        <button style={{position:'fixed',right:20, bottom:20}} onClick={this.backToTop}>Back to Top top to new update test</button>
=======
        <button style={{position:'fixed',right:20, bottom:20}} onClick={this.backToTop}>Back to Top changed in sirige-feature</button>
>>>>>>> 5182ed6cb5b15832bb4a118d3ec433e4ca8e879b
        {/* <div className="d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handleprev}>&larr; Prev</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenext}>Next &rarr;</button>
        </div> */}
      </div>
    );
  }
}
