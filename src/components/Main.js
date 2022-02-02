import { useDispatch } from 'react-redux';
import React, {  useEffect } from 'react';
import {setComptPositions} from '../store/configSlice.js';
import './css/Main.css'

function Main(props) {

  const dispatch = useDispatch();
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let padding = 250;
    let navBarPadding = 65;
    let hight = document.querySelector('#'+props.id).offsetHeight;
    let top =  document.querySelector('#'+props.id).offsetTop - navBarPadding;
    //set component scroll position in global store, so that the manu item can be highlighted when user scroll to this position
    dispatch(setComptPositions({cmpt: props.id, hight:[top - padding, top + hight - padding]}));

  });

  let long = [];
  for(let i =0;i<100;i++){
    long.push( <div>test main component</div>);
  }
    return (
      <div>
      <div className="parallax"></div>
      <div id={props.id}>

    MAIN PAGE {long}
      </div>
      </div>
    );
}

export default Main;