import React from "react";
import { FaGoogle, FaGithub, FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";

import Button from "react-bootstrap/Button";
import { ListGroup } from "react-bootstrap";
import Qzone from "../Qzone";
import bg from '../assets/bg.png'


const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4"> Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle />
        Log in with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Log in with Git hub
      </Button>
      <div>
        <h4 className="mt-4">Find Us on</h4>
        <ListGroup>
      <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
      <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
      <ListGroup.Item><FaInstagram/> Instagram</ListGroup.Item>
      
    </ListGroup>
      </div>
      <Qzone></Qzone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
