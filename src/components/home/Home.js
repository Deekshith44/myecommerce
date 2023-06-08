import React, { Fragment } from "react";
import Common from "../common/Common";
import homeImg from "../../assets/Home&AboutImages/Home.png";
import TrendingSection from "../trendingsection/TrendingSection";
import ExploreSection from "../exploresection/ExploreSection";

const Home = () => {
  return (
    <Fragment>
      <Common
        name="Happy"
        subtitle="Shopping"
        image={homeImg}
        desc="Welcome to our ecommerce store, where you'll find a wide range of products that cater to your every need. At our online store, we believe in delivering a seamless shopping experience to our customers, and we're committed to providing high-quality products at competitive prices, along with unparalleled customer service."
      />
      <TrendingSection />
      <ExploreSection />
    </Fragment>
  );
};

export default Home;
