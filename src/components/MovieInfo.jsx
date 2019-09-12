import React from 'react';
const MovieInfo = (props) =>{
  console.log("paramter"+JSON.stringify(props))
  return(
    <div>{props.params}</div>  
  )
};
export default MovieInfo;