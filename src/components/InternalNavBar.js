import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

/*
    highlighting the menu items:
    - estimate the current scroll position for all children and save it in global state.
    - each menu item will compere the scrollY with position of the item which is linking to,
      add decide if the menu item should be highlighted by scrolling
*/
const InternalNavBar = (props) =>{

    const [scrollY, setScrollY] = useState(0);
    const [scrollSpy, setScrollSpy] = useState(true);

    const globalState = useSelector(state => state.config.cmpPositions)

    /*
    scroll event listener, calculate the current scroll position
    */
     document.addEventListener('scroll',(e) => {
        setScrollY(window.scrollY);
    })

    /*
    clone a child element and inject the scroll spy logic to each child
    we have to pass a flag to avoid infinitive rendering of components
    otherwise child would set the position in global state and cause re-render of Parent component, which again would trigger re-render of children and
    recalculating the position. It this way we would end up in infinity loop
    */
    let renderChildren = () =>{
        return React.Children.map(props.children, child =>
            React.cloneElement(child, { scrollSpy: scrollSpy, setScrollSpy: setScrollSpy , ...child.props }));
    }

    useEffect(() => {
        console.log(globalState);
      });


   /*  use real component hight from global state to estimate if the menu item pointing to the component should be displayed
    build the menu item dynamically based on the items array passed as prop */
    let navLinks = props.items.map(i =>{

        try{
            // generates menu items only when all positions are available in global state
            return <Nav.Link key={i.id}  href={'#'+i.id} active={(scrollY>=globalState[i.id][0]) && (scrollY<globalState[i.id][1])}  >{i.item}</Nav.Link>
        }catch(e){
            console.log('items can not be calculated yet...waiting on positions');
            return [];
        }
    });

 return(
        <div >
             <Navbar bg={props.bg} variant={props.variant} fixed="top" >
                <Container>
                <Navbar.Brand href="#home">
                 {props.img}
                </Navbar.Brand>
                    <Nav className="">
                         {navLinks}
                    </Nav>
                </Container>
            </Navbar>

               {renderChildren()}

        </div>)
}

export {InternalNavBar};
