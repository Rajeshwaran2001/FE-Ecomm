import React, { lazy, Component } from "react";
import { Link } from "react-router-dom";
// import { link45, file, check2all } from "../npm/icon";
import { data } from "../data";
import CarouselContent from "./CarouselContent";

const Support = lazy(() => import("../components/Support"));
const Banner = lazy(() => import("../components/carousel/Banner"));

const Home = () => {
  return (
    <>
      <Banner className="mb-3" id="carouselHomeBanner" data={data.banner} />
      <div className="container-fluid bg-light mb-3">
        <div className="row g-3">
          <div className="col-md-9">
            <Carousel id="elect-product-category" className="mb-3">
              {CarouselContent}
            </Carousel>
            <Support />
          </div>
          <div className="col-md-3">
            <CardLogin className="mb-3" />
            <CardImage src="../../images/banner/Watches.webp" to="promo" />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light mb-3">
        <div className="row">
          <div className="col-md-12">
            <CardDealsOfTheDay
              endDate={Date.now() + 1000 * 60 * 60 * 14}
              title="Deals of the Day"
              to="/"
            >
              <Carousel id="elect-product-category1">
                {CarouselContent}
              </Carousel>
            </CardDealsOfTheDay>
          </div>
        </div>
      </div>

      <div className="bg-info bg-gradient p-3 text-center mb-3">
        <h4 className="m-0">Explore Fashion Collection</h4>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <Link to="/" className="text-decoration-none">
              <img
                src="../../images/category/male.webp"
                className="img-fluid rounded-circle"
                alt="..."
              />
              <div className="text-center h6">Men's Clothing</div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/" className="text-decoration-none">
              <img
                src="../../images/category/female.webp"
                className="img-fluid rounded-circle"
                alt="..."
              />
              <div className="text-center h6">Women's Clothing</div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/" className="text-decoration-none">
              <img
                src="../../images/category/smartwatch.webp"
                className="img-fluid rounded-circle"
                alt="..."
              />
              <div className="text-center h6">Smartwatch</div>
            </Link>
          </div>
          <div className="col-md-3">
            <Link to="/" className="text-decoration-none">
              <img
                src="../../images/category/footwear.webp"
                className="img-fluid rounded-circle"
                alt="..."
              />
              <div className="text-center h6">Footwear</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home