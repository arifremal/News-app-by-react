import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import first from '../assets/1.png'
import first1 from '../assets/2.png'
import first2 from '../assets/3.png'

const LeftNav = () => {
    const [categories, setCategories]= useState([])
    useEffect(() =>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/dragon-news-resources/main/data/categories.json')
        .then(res=> res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    },[])
    return (
        <div>
          <h4>All Categories</h4>
          <div className='ps-4'>
          {
            categories.map(category => <p 
            key={category.id} >
                
                <Link to={`/category/${category.id}`} className='text-decoration-none text-black' >{category.name}</Link>
            </p> )
          }
          </div>
          <Row xs={1} md={2} lg={1} className="g-4 mt-2">
      <Col> 
        <Card>
          <Card.Img variant="top" src={first} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col> 
        <Card>
          <Card.Img variant="top" src={first1} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col> 
        <Card>
          <Card.Img variant="top" src={first2} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
        </div>
    );
};

export default LeftNav;