import { useDispatch } from 'react-redux';
import React, {  useEffect } from 'react';
import {setComptPositions} from '../store/configSlice.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ItemScrollSpy} from './ItemScrollSpy';

//css modules in react, if we use react app its enough to use '.module.css' in css file.
import styles from './css/About.module.css' 


function Main(props) {
 
    return (
      <div className={styles.main}>
      <ItemScrollSpy  scrollSpyId='about' { ...props}>
     

          <div className={styles.parallaxAbout}></div>
          <div id={props.id} className={styles.mainContainer}>
            <Container fluid="md" >
            
                <Row className={styles.qoute}>
                  <Col md={{ span: 6, offset: 3 }}><h1>Love for Gifting</h1></Col>
                </Row>
                <Row className={styles.qoute}>
                  <Col md={{ span: 6, offset: 3 }}><h2>When you mean it more than words!</h2></Col>
                  
                </Row>
                <Row className={styles.qoute}>
                  <Col md={{ span: 6, offset: 3 }}><p>Handmade, curated and personalised hampers for all kind of celebrations.</p></Col>
                </Row>
          
            </Container>

          </div>
      
      </ItemScrollSpy>  
      </div>
    );
}

export default Main;