import React, { Component } from 'react';

const Pagination = (props)=>{
    const pageLinks =[]
    for(let i=1; i<= 4 ; i++){
        let active= props.currentPage == i ? 'active':'';
        pageLinks.push(<li className={`pr-2 ${active}`} key={i} onClick={() => props.nextPage(i)}><a href="javascript:void(0)" onClick={() => props.Loading()}>{i}</a></li>)
    }
    return(
        <div className="col-12 text-center">
            <ul className="pagination justify-content-center">
                {props.currentPage > 1 ? <li className='pr-2' onClick={() => props.nextPage(props.currentPage -1 )}><a href="javascript:void(0)" onClick={() => props.Loading()}>prev</a></li>:'' }
                {pageLinks}
                {props.currentPage< 4 ? <li  onClick={() => props.nextPage(props.currentPage + 1)}><a href="javascript:void(0)" onClick={() => props.Loading()}>next</a></li>:'' }
            </ul>
        </div>
    )
}
export default Pagination;