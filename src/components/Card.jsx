import styled from 'styled-components';
import React, { Component } from 'react';
import Pagination from './Pagination';
import Tabs from './Tabs';
import {Link ,withRouter} from 'react-router-dom';
import {browserHistory} from 'react-router';
import { NavLink ,Route} from 'react-router-dom';
import loadingImg from '../assets/images/loading.gif';

const Track= styled.div`
width:130px;
height:15px;
background:gray;
`;

const Thumb= styled.div`
width:${props => props.movieRate}%;
height:15px;
background:green;
`;
export default class Card extends Component {
    constructor(props){
        super(props);
        this.state={
          items:[],
          isLoaded:false,
          totalResults:0,
          currentPage:1,
          currentMovie:null,
          loading:false
        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps.movieCategory !== this.props.movieCategory) {
            this.fetchApi();
        }
      }
    componentDidMount(){   
        this.fetchApi();
    }
    fetchApi() {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://api.themoviedb.org/3/movie/${this.props.movieCategory}/?page=1&language=en-US&api_key=f7c12e4fd4d034e024e975fbf3273205`
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(json => {
            this.setState({
                items:json.results,
            })
        });
    };

    Loading=()=>{
        this.setState({loading:true})
    }
    //    loading while fetching data


    nextPage = (pageNumber) => {
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
        targetUrl = `https://api.themoviedb.org/3/movie/${this.props.movieCategory}/?page=${pageNumber}&language=en-US&api_key=f7c12e4fd4d034e024e975fbf3273205`
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(json => {
            this.setState({
                loading:false,
                isLoaded:true,
                items:json.results,
                currentPage:pageNumber
            })
        });
    }
    // "pagination" to get another page from the api  

  render() {
    var { isLoaded ,items } = this.state;  
    const {loading}=this.state;
    return (
        <div className="container">
            <div className="row">
                {items.map(item =>(
                    <div className="col-md-6 mb-4">
                        <div className="card flex-row flex-wrap py-3 px-2">
                            <div className="card-header border-0 p-0">
                                <img src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt=""/>
                            </div>
                            <div className="card-block px-3">
                                <h4 className="card-title">{item.title}</h4>
                                <p className="card-text f-sm">{item.overview}</p>
                            </div>
                            <div className="position-absolute rate text-center pt-1"> {item.vote_average}</div>                        
                            <Track>
                                <Thumb movieRate={item.vote_average*10}/>
                            </Track>
                        </div>
                    </div>                      
                ))} 
                {loading &&  <div className="centeredDiv"><img src={loadingImg} alt="loadingImg" className="loading"/></div>  }      
                <Pagination nextPage = {this.nextPage} Loading={this.Loading} currentPage={this.state.currentPage} loading={this.state.loading} ></Pagination>
            </div>              
        </div>  
    )
 }
}
