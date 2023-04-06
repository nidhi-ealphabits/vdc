import React from "react";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import "./main.css";
import vcIcon from "../../assests/Logo Sample.png";
import settingIcon from "../../assests/setting.svg";
import personIcon from "../../assests/personIcon.png";
import logo from "../../assests/Logo.png";

function Main() {
  return (
    <div className="container">
      <Row className="header">
        <div className="vcIcon-container">
          <img className="vc-icon" src={vcIcon}></img>
        </div>
        <Col>
          <div className="header-discription">
            <div className="header-time">23 March 2023, 2:04 PM</div>
            <div className="header-setting">
              <img className="settings-icon" src={settingIcon}></img>
            </div>
            <div className="header-avtar">
              <img className="person-icon" src={personIcon}></img>
            </div>
          </div>
        </Col>
      </Row>
      <Container>
        <div className="content">
          <div className="sidebar-content">
            <div className="sidebar-logo">
              <img className="logo" src={logo}></img>
            </div>
            <div className="sidebar-heading">
              <div>Secure video conferencing</div>
              <div>For everyone</div>
            </div>
            <Stack className="sidebar-buttons" direction="horizontal" gap={4}>
              <Button variant="primary">New Meeting</Button>
              <Button variant="dark">Sign in</Button>
            </Stack>
            <div className="sidebar-link"></div>
          </div>

          <div className="image-container">
            <img className="preview" src={personIcon} height="100px"></img>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Main;
