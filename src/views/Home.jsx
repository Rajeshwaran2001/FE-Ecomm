import React, { lazy, Component } from "react";
import { data } from "../data";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));

class HomeView extends Component {
  render() {
    return (
      <>
        <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
        <div className="container-fluid bg-light mb-3">
          <div className="row g-3">
            <div className="col-6 col-md-12 px-4">
              <Support />
            </div>
           
          </div>
        </div>
      
    </>
  )
}
}

export default HomeView