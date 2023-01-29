import React, { lazy, Component } from "react";
import { data } from "../../data";
import axios from "axios"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTh, faBars } from "@fortawesome/free-solid-svg-icons";
const Paging = lazy(() => import("../../components/Paging"));
const FilterCategory = lazy(() => import("../../components/filter/Category"));
const CardProductGrid = lazy(() =>
  import("../../components/card/CardProductGrid")
);

const CardProductList = lazy(() =>
  import("../../components/card/CardProductList")
);

class ProductListView extends Component {
  state = {
    currentProducts: [],
    currentPage: null,
    totalPages: null,
    totalItems: 0,
    view: "list",
  };

  UNSAFE_componentWillMount() {
    const totalItems = this.getProducts().length;
    this.setState({ totalItems });
  }

  onPageChanged = async (page) => {

    const res = await axios.get("http://20.219.190.188/api/product/")
    console.log('product res', res?.data);

    const structureChange = res?.data.map((data) => {
      return {
        id: 1,
        sku: "FAS-01",
        link: "/product/detail",
        name: data.name,
        img: data.image,
        price: 180,
        originPrice: 200,
        discountPrice: 20,
        discountPercentage: 10,
        isNew: true,
        isHot: false,
        farmerId: data.farmerId,
        star: 4,
        isFreeShipping: true,
        description: data.description
      }
    })
    console.log('structureChange', structureChange);
    const { currentPage, totalPages, pageLimit } = page;
    const offset = (currentPage - 1) * pageLimit;
    const currentProducts = structureChange.slice(offset, offset + pageLimit);
    this.setState({ currentPage, currentProducts, totalPages });
  };

  onChangeView = (view) => {
    this.setState({ view });
  };

  getProducts = () => {
    let products = data.products;
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    products = products.concat(products);
    return products;
  };

  render() {
    return (
      <React.Fragment>
        <div className="container-fluid my-3">
          <div className="row">
            <div className="col-md-3">
              <FilterCategory/>
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-7">
                </div>
                <div className="col-5 d-flex justify-content-end">
                  <select
                    className="form-select mw-180 float-start"
                    aria-label="Default select"
                  >
                    <option value={1}>Most Popular</option>
                    <option value={2}>Latest items</option>
                    <option value={3}>Trending</option>
                    <option value={4}>Price low to high</option>
                    <option value={4}>Price high to low</option>
                  </select>
                  <div className="btn-group ms-3" role="group">
                    <button
                      aria-label="Grid"
                      type="button"
                      onClick={() => this.onChangeView("grid")}
                      className={`btn ${this.state.view === "grid"
                        ? "btn-primary"
                        : "btn-outline-primary"
                        }`}
                    >
                      <FontAwesomeIcon icon={faTh} />
                    </button>
                    <button
                      aria-label="List"
                      type="button"
                      onClick={() => this.onChangeView("list")}
                      className={`btn ${this.state.view === "list"
                        ? "btn-primary"
                        : "btn-outline-primary"
                        }`}
                    >
                      <FontAwesomeIcon icon={faBars} />
                    </button>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row g-3">
                {this.state.view === "grid" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-4">
                        <CardProductGrid data={product} />
                      </div>
                    );
                  })}
                {this.state.view === "list" &&
                  this.state.currentProducts.map((product, idx) => {
                    return (
                      <div key={idx} className="col-md-12">
                        <CardProductList data={product} />
                      </div>
                    );
                  })}
              </div>
              <hr />
              <Paging
                totalRecords={this.state.totalItems}
                pageLimit={9}
                pageNeighbours={3}
                onPageChanged={this.onPageChanged}
                sizing=""
                alignment="justify-content-center"
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductListView;
