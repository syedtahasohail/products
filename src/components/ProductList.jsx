import { useEffect, useState } from "react";
import ReactExpandText from "react-expand-text";
import { ProgressBar } from "react-loader-spinner";
import "../App.css";
import logo from "../resources/logo.png";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setsearch] = useState("");

  //API Calling

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setProducts(data);
      })
      .catch(function (ex) {
        setLoading(false);
        console.log(ex.message);
      });
  }, []);
  const handleSearch = (event) => {
    setsearch(event.target.value);
  };
  // Rendring
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
        <div className="container">
          <div className="navbar-brand fw-bold fs-4 px-2">
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top nav-left"
              alt="Fake Store"
            />
            Starling City Shopping Mall
          </div>

          <div className="col-md-10 col-sm-10 col-xs-12">
            <div className="input-group">
              <input
                type="text"
                className="form-control input-search"
                name="q"
                id="search"
                autoComplete="off"
                placeholder="Search"
                onChange={handleSearch}
              />
              <span className="input-group-addon group-icon">
                <span className="glyphicon glyphicon-user" />
              </span>
            </div>
          </div>
        </div>
      </nav>

      {loading ? (
        <ProgressBar
          color="#00BFFF"
          height="250"
          width="250"
          radius="9"
          ariaLabel="loading"
          wrapperClass="progress-bar-wrapper"
        />
      ) : (
        <div>
          <hr />
          <h1 className="display-5 text-center">Products</h1>
          <hr />

          <div className="container my-3 py-3">
            <div className="row">
              <div className="row justify-content-center">
                {products
                  // eslint-disable-next-line
                  .filter((p) => {
                    if (search === "") {
                      return p;
                    } else if (
                      p.title.toLowerCase().includes(search.toLowerCase())
                    ) {
                      return p;
                    }
                  })
                  .map((product) => (
                    <div
                      key={product.id}
                      id={product.id}
                      className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
                    >
                      <div className="card text-center h-100" key={product.id}>
                        <img
                          className="card-img-top p-3"
                          src={product.image}
                          alt={product.title}
                          height={300}
                        />
                        <div className="card-body">
                          <h5 className="wrap">{product.title}</h5>
                          <ReactExpandText
                            className="card-text"
                            text={product.description}
                            maxLength={50}
                          />
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item lead">
                            $ {product.price}
                          </li>
                        </ul>

                        <div>
                          <Link
                            to={"/product/" + product.id}
                            className="btn btn-dark m-2"
                          >
                            View More
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductList;
