import { useDispatch } from 'react-redux';
import React, {  useEffect } from 'react';
import {setComptPositions} from '../store/configSlice.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';
import './css/GiftGuide.css'

function GiftGuide(props) {

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

 
    return (
      <div className='mainContainerGiftGuide'>
        <div className="parallaxGiftGuide"></div>
        <div id={props.id}>
        <Container fluid="md" >
          <Row className='qoute'>
            <Col md={{ span: 6, offset: 3 }}><h1>Gift Guide</h1></Col>
          </Row>
          <Row className='qoute'>
            <Col md={{ span: 6, offset: 3 }}><h2>How it works</h2></Col>
            
          </Row>
          <Row className='qoute'>
            <Col md={4}>
            <Card style={{ width: '18rem', margin: 'auto' }}>
                    <Card.Img variant="top" src="GiftGuideCard1.jpg" />
                    <Card.Body>
                      <Card.Title>
                        <Badge pill bg="secondary">
                          1
                        </Badge>
                      </Card.Title>
                      <Card.Text>
                       It is so easy. All You had to do is to contact us on WhatsApp +91 9594999730
                      </Card.Text>
                    
                    </Card.Body>
                  </Card>
              </Col>
            <Col md={4}>
                  <Card style={{ width: '18rem', margin: 'auto'  }}>
                    <Card.Img variant="top" src="GiftGuideCard2.jpg" />
                    <Card.Body>
                      <Card.Title>
                        <Badge pill bg="secondary">
                          2
                        </Badge>
                      </Card.Title>
                      <Card.Text>
                       Pick your budget and give us all details about the Person you want to surprise.
                      </Card.Text>
                    </Card.Body>
                  </Card>
            </Col>
            <Col md={4}>
                  <Card style={{ width: '18rem', margin: 'auto'  }}>
                    <Card.Img variant="top" src="GiftGuideCard3.jpg" />
                    <Card.Body>
                    <Card.Title>
                        <Badge pill bg="secondary">
                          3
                        </Badge>
                      </Card.Title>
                      <Card.Text>
                         The personalised hamper will get delivered without shipping costs and transit delays.
                      </Card.Text>
                    </Card.Body>
                  </Card>
            </Col>
          </Row>
          
        </Container>
         

         
        </div>
      </div>
    );
  }
  
  export default GiftGuide;