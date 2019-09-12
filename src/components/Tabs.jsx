import React, { Component } from 'react';
import Card from './Card';

export default class Tabs extends Component
{
  constructor(props){
    super(props);
    this.state={
      movieCategory:"popular"
      }
    console.log(this.state.movieCategory);
  }
  changeMovieCategory=(selectedCategory)=> {
    this.setState({ movieCategory : selectedCategory })
  //   this.setState({movieCategory: selectedCategory}, function () {
  //     console.log(this.state.movieCategory);
  // });
  }
  render() {
    return (
      <div>
        <div className="shadow-sm bg-white">
          <ul className="container nav nav-pills mb-4 pt-1 justify-content-end " id="pills-tab" role="tablist">
          <li className="nav-item">
            <a className="nav-link active mx-2"  id="pills-popular-tab"  data-toggle="pill" href="#pills-popular" role="tab" aria-controls="pills-popular" aria-selected="true" >Popular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" onClick = {()=>this.changeMovieCategory("top_rated")} id="pills-topRated-tab" data-toggle="pill" href="#pills-topRated" role="tab" aria-controls="pills-topRated" aria-selected="false">Top Rated</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" id="pills-upcoming-tab" data-toggle="pill" href="#pills-upcoming" role="tab" aria-controls="pills-upcoming" aria-selected="false">Upcoming</a>
          </li>
        </ul> </div>
        <div className="clearfix"></div>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-popular" role="tabpanel" aria-labelledby="pills-popular-tab">
            <Card/>
          </div>
          <div className="tab-pane fade" id="pills-topRated" role="tabpanel" aria-labelledby="pills-topRated-tab">
          <Card movieCategory={this.state.movieCategory} />
          </div>
          <div className="tab-pane fade" id="pills-upcoming" role="tabpanel" aria-labelledby="pills-upcoming-tab">          
          <Card/>
          </div>
        </div>
      </div>
    )
  }
}

