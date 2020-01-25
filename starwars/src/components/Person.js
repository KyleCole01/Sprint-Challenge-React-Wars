import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import React from "react";

const Person = props => {
    

  return (
    <div >
      <Card >
        <CardBody className={[props.name.replace(/ /g,""),"  cardclass"].join(" ")}>
            <CardBody >
          <CardTitle>{props.name}</CardTitle>
          <CardText>
             Born on {props.birth_year}<br/>
             Height is {props.height}cm<br/>
             Mass is {props.mass}kg<br/>
             Hair Color is {props.hair_color}<br/>
             Skin Color is {props.skin_color}<br/>
             Eye Color is {props.eye_color}<br/>
             and Gender is {props.gender}
          </CardText>
          </CardBody>
        </CardBody>
      </Card>
    </div>
  );
};
export default Person;
