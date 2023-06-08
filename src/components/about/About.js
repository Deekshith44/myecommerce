import React from "react";
import Common from "../common/Common";
import aboutImg from "../../assets/Home&AboutImages/HomeHd.png";

const About = () => {
  return (
    <Common
      name="Fastest"
      subtitle="Delivery"
      image={aboutImg}
      desc="At our online store, we believe that fast delivery is an essential component of an outstanding shopping experience. We are committed to delivering your products to you in the shortest possible time, without compromising on quality or safety. Thank you for choosing us for your shopping needs."
    />
  );
};

export default About;
