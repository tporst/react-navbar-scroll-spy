import { useDispatch } from 'react-redux';
import React, {  useEffect } from 'react';
import {setComptPositions} from '../store/configSlice.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './css/Gallery.css'
import {ItemScrollSpy} from './ItemScrollSpy';

function Gallery(props) {

 
 
    return (
      <div className='mainContainerGallery'>
        <ItemScrollSpy  scrollSpyId='gallery' { ...props}>
        <div className="parallaxGallery"></div>
        <div id={props.id}>
        <Container fluid="md" >
          <Row className='qoute'>
            <Col md={{ span: 6, offset: 3 }}><h1>Gallery</h1></Col>
          </Row>
          <Row className='qoute'>
            <Col md={{ span: 6, offset: 3 }}><h2>The gift that goes everywhere in India.</h2></Col>
            
          </Row>
          <Row className='rowGallery'>
            <Col md={{ span: 4, offset: 4 }} className='gallery'>
              <Carousel >
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="Gallery1.jpg"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Celebrate love with a gift from the heart</h3>
             {/*        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="Gallery2.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Celebrate love with a gift from the heart</h3>
                   {/*  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="Gallery3.jpg"
                    alt="Second slide"
                  />
                  <Carousel.Caption>
                    <h3>Celebrate love with a gift from the heart</h3>
                   {/*  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                  </Carousel.Caption>
                </Carousel.Item>     
              </Carousel>
            </Col>
          </Row>
        </Container>                  
        </div>
        </ItemScrollSpy>
      </div>
    );
  }
  
  export default Gallery;