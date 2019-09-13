import React from 'react';
import { Card, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';


// import styled from "styled-components";

// const cardTitles = styled.h1`
//   background: #99f3eb;
//   color: black;
//   width: 200px;
//   max-height: 300px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   margin-bottom: 20px;
// `


const Example = (props) => {
  return (
    <div>
      <Card className="cards">
        {/* <CardImg top width="100%" src="../../public/images/images.png" alt="Card image cap" /> */}
        <CardBody className="cardBody">
          <CardTitle className="cardTitles"  >{props.name}</CardTitle>
          <CardText>
            <p className="eyes">Eye-Color: {props.eyeColor}</p>
           <p className="height">height: {props.height}</p> 
             </CardText>
          <CardText>
            <small className="text-muted">Date Created: {props.created}</small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Example;