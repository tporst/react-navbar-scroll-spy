import { useDispatch } from 'react-redux';
import {setComptPositions} from '../store/configSlice.js';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

let recalculate = (state, id, top, hight)=>{
  try{
    if(state.hasOwnProperty(id)){
      return state[id][0] !== top || state[id][1] !== hight;
    }else{
      return true;
    }
  }catch(e){
    return false;
  }
}

const ItemScrollSpy = (props) =>{

    const dispatch = useDispatch();
    const globalState = useSelector(state => state.config.cmpPositions)

    useEffect(() => {
        let paddingTop = props.paddingTop ? props.paddingTop : 0;
        let paddingBottom = props.paddingBottom ? props.paddingBottom : 0;
        let hight = document.querySelector('#'+props.scrollSpyId).offsetHeight;
        let top =  document.querySelector('#'+props.scrollSpyId).offsetTop;
        //set the position in global store only when it changed or war rerendered, which is avoiding infinity re-rendering of components
        let updatePositions = recalculate(globalState, props.scrollSpyId,top + paddingTop, top + hight + paddingBottom );

        if(updatePositions){
            //set component scroll position in global store, so that the manu item can be highlighted when user scroll to this position
            dispatch(setComptPositions({[props.scrollSpyId]: [top + paddingTop, top + hight + paddingBottom]}));
        }
    });

    return(
        <div id={props.scrollSpyId} style={{height: 'auto'}}>
        {props.children}
        </div>)
}

export {ItemScrollSpy};
