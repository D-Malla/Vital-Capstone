import React from "react";

import HomeHeader from "./HomeHeader";
import HomeBody from "./HomeBody";
import HomeFooter from "./HomeFooter";

export default props => {
  return (
    <div id="homeContainer">
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </div>
  );
};
