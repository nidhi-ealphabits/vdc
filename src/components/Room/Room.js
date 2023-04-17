import React from "react";
import Analyties from "../Analyties/Analyties";
import { Row, Col } from "react-bootstrap";
import Bottombar from "../Bottombar/Bottombar";
import Main from "../Main/Main";
import Header from "../Header/Header";
import CardGrid from "./CardGrid";

function Room() {
  return (
    <>
      <Header />
      <div style={{ zIndex: 1 }}> */}
      <CardGrid/>
      </div>
      {/* <div style={{ zIndex: 1 }}> */}
        <Bottombar />
      {/* </div> */}
    </>
  );
}

export default Room;
