import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => {
    setLoading(true);

    setTimeout(() => {
      window.open("https://znnguyenportfolio.netlify.app/");
    }, 2000);
  };
  return (
    <Button
      variant="danger"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      className="my-5 bg-gradient font-weight-bolder text-white"
      target="_blank"
      size="lg"
    >
      {isLoading ? "Loading…" : "Click button to go to my Page"}
    </Button>
  );
}

const About = () => {
  return (
    <Row className="mx-auto">
      <Col className="text-center">
        <LoadingButton />
      </Col>
    </Row>
  );
};

export default About;
