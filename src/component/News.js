import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps={
    category:'general',
    language:'en',
    pageSize:'4'
  }

  static propTypes={
    category: PropTypes.string,
    language: PropTypes.string,
    pageSize: PropTypes.number
  }
  

  constructor() {
    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults:0,
      selectedCategory:"Top Stories"
    };
  }

  async componentDidMount() {
    const url =
      `https://newsapi.org/v2/everything?apiKey=ad74df5bef5e46babead55d5e6f6d4c4&
      page=${this.state.page}&pageSize=${this.props.pageSize}&q=${this.props.category}&langauge=${this.props.language}`;
    this.setState({
      loading : true,
      
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

   // Simulate a 2-second delay before updating the articles and setting loading back to false
   setTimeout(() => {
    this.setState({ articles: parsedData.articles, 
      loading: false,
    totalResults: parsedData.totalResults });
  }, 1800);

  }


  handleClickPrevious = async () => {
    console.log("previous clicked");
  let url = `https://newsapi.org/v2/everything?apiKey=ad74df5bef5e46babead55d5e6f6d4c4&page=${
    this.state.page - 1
  }&pageSize=${this.props.pageSize}&q=${this.props.category}&language=${this.props.language}`
  this.setState({
    loading : true
  })
  let data = await fetch(url);
  console.log(data);
  let parsedData = await data.json();
  console.log(parsedData);
  console.log(data.json);
  this.setState({ articles: parsedData.articles });
  this.setState({
    loading : false,
    page: this.state.page - 1,
  });
  };

  handleClickNext = async () => {
    console.log("next clicked");
    let url = `https://newsapi.org/v2/everything?apiKey=ad74df5bef5e46babead55d5e6f6d4c4&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}&q=${this.props.selectedCategory}&language=${this.props.language}`;
    this.setState({
      loading : true
    })
    let data = await fetch(url);
    console.log(data);
    let parsedData = await data.json();
    console.log(parsedData);
    console.log(data.json);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page + 1,
      loading : false
    })
  };


  //handleCategoryChange = (selectedCategory) => {
    // Fetch news articles for the selected category here or update the state accordingly
    // For simplicity, let's just update the category in state for now
    //this.setState({ selectedCategory });

 // };
  
  
  //      componentDidUpdate(prevProps) {
    //    Check if the selectedCategory prop has changed
    //    if (prevProps.selectedCategory !== this.props.selectedCategory) {
     //   console.log("Selected Category (News):", this.props.selectedCategory);
      //  You can add additional logic here if needed
    //}
  //}


  render() {
    return (
      <div className="newspage ">
           <div className=" container my-3">
         <div className="newspage-title text-center">
           <span className="headText1">NewsDaily</span>- <span className="headText2">
            {this.props.selectedCategory}</span></div>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 mt-4" key={element.url}>
                  <Newsitem  source={element.source.name}
                    title={element.title ? element.title.slice(0, 65) : "empty"}
                    description={
                      element.description
                        ? element.description.slice(0, 100)
                        : "empty"
                    }
                    author={element.author}  date={element.publishedAt}
                    newsUrl={element.url}
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "http://cdn.onlinewebfonts.com/svg/img_252866.png"
                    }
                  />
                </div>
              );
            })}
        </div>
         <br></br>
         <br></br>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={this.handleClickPrevious}
          >
            <b>&laquo; Previous</b>
          </button>

          <button
            disabled={this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)}
            className="btn btn-primary"
            onClick={this.handleClickNext}
          >
            {" "}
            <b>Next &raquo;</b>
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default News;
