import { useLocation } from "react-router-dom";

function Product(props) {
    const location = useLocation();
    console.log(props, " props");
    console.log(location, " useLocation Hook");
  return (
    <>
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={props.image}
              alt={props.title}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">{props.category}</h4>
            <h1 className="display-5">{props.title}</h1>
            <p className="lead">
              {props.rating && props.rating.rate}{" "}
              <i className="fa fa-star"></i>
            </p>
            <h3 className="display-6  my-4">${props.price}</h3>
            <p className="lead">{props.description}</p>
          </div>
        </div>
      </div>{" "}
    </>
  );
}

export default Product;
