import { useDispatch } from 'react-redux';
import {setComptPositions} from '../store/configSlice.js';
import React, { useEffect } from 'react'

const ItemScrollSpy = (props) =>{

    const dispatch = useDispatch();

    useEffect(() => {
        
        console.log('ItemScrollSpy is rendered '+props.scrollSpyId);
        let padding = 250;
        let navBarPadding = 65;
        let hight = document.querySelector('#'+props.scrollSpyId).offsetHeight;
        let top =  document.querySelector('#'+props.scrollSpyId).offsetTop - navBarPadding;
        console.log({[props.scrollSpyId]: [top - padding, top + hight - padding]} );
        //set the position in global store only one time, which is avoiding infinity re-rendering of components
        if(props.scrollSpy){
            props.setScrollSpy(false); 
            console.log('ItemScrollSpy dispatched ');
            //set component scroll position in global store, so that the manu item can be highlighted when user scroll to this position
            dispatch(setComptPositions({[props.scrollSpyId]: [top - padding, top + hight - padding]}));
        }
    
    });
     
    return(
        <div id={props.scrollSpyId}>         
        {props.children}
        </div>)
}

export {ItemScrollSpy};