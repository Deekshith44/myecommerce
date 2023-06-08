import React, { useState, Fragment } from "react";
import EData from "./EData";
import MainCard from "../common/maincard/MainCard";
import "./exploresection.css";
import { DiGoogleCloudPlatform } from "react-icons/di";
import { CiBag1 } from "react-icons/ci";

const ExploreSection = () => {
  const [items, setItems] = useState(EData);
  const filterItem = (categoryItem) => {
    const updateItem = EData.filter((curElem) => {
      return curElem.category === categoryItem;
    });
    setItems(updateItem);
  };

  return (
    <div className="section container">
      <h2 className="explore__title">Explore More Here</h2>
      <div className="tab__container">
        <div className="tab">
          <Fragment>
            <div
              className="tabcard tab__design"
              onClick={() => filterItem("Men")}
            >
              <CiBag1 className="bag__holder" />
              <DiGoogleCloudPlatform className="tab__logo" />
              <h5 className="tab__title">Men</h5>
            </div>

            <div
              className="tabcard tab__design"
              onClick={() => filterItem("Women")}
            >
              <CiBag1 className="bag__holder" />
              <DiGoogleCloudPlatform className="tab__logo" />
              <h5 className="tab__title">Women</h5>
            </div>

            <div
              className="tabcard tab__design"
              onClick={() => filterItem("Kids")}
            >
              <CiBag1 className="bag__holder" />
              <DiGoogleCloudPlatform className="tab__logo" />
              <h5 className="tab__title">Kids</h5>
            </div>

            <div
              className="tabcard tab__design"
              onClick={() => filterItem("FruitsAndBeverage")}
            >
              <CiBag1 className="bag__holder" />
              <DiGoogleCloudPlatform className="tab__logo" />
              <h5 className="tab__title">Fruits</h5>
            </div>

            <div
              className="tabcard tab__design"
              onClick={() => filterItem("Phones")}
            >
              <CiBag1 className="bag__holder" />
              <DiGoogleCloudPlatform className="tab__logo" />
              <h5 className="tab__title">Phones</h5>
            </div>

            <div
              className="tabcard tab__design"
              onClick={() => filterItem("Electronics")}
            >
              <CiBag1 className="bag__holder" />
              <DiGoogleCloudPlatform className="tab__logo" />
              <h5 className="tab__title">Others</h5>
            </div>

            <div
              className="tabcard tab__design"
              onClick={() => setItems(EData)}
            >
              <CiBag1 className="bag__holder" />
              <DiGoogleCloudPlatform className="tab__logo" />
              <h5 className="tab__title">All</h5>
            </div>
          </Fragment>
        </div>
      </div>
      <div className="grid__container">
        {items.map((elem) => {
          return (
            <MainCard
              key={elem.id}
              category={elem.category}
              title={elem.name}
              price={elem.price}
              icon={elem.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
