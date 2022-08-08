import React from "react";
import Carousel from "react-elastic-carousel";
import './carousalSection.css';
import CarousalItem from "./CarousalItem";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const CarousalSection = () => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Multi carousel</h1>
      <div className="App">
        <Carousel breakPoints={breakPoints}>
          <CarousalItem>1</CarousalItem>
          <CarousalItem>2</CarousalItem>
          <CarousalItem>3</CarousalItem>
          <CarousalItem>4</CarousalItem>
          <CarousalItem>5</CarousalItem>
          <CarousalItem>6</CarousalItem>
          <CarousalItem>7</CarousalItem>
          <CarousalItem>8</CarousalItem>
        </Carousel>
      </div>
    </>
  );
}
export default CarousalSection;
const rootElement = document.getElementById("root");

