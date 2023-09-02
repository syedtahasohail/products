import { useEffect, useState } from "react";
import  { Triangle }  from 'react-loader-spinner';
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

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


  // Rendring
  return (
    <div>
      {loading ? (
        <Triangle type="Puff" color="#00BFFF" height={'auto'} width={'auto'} />
      ) : (
        <div>
          <h1>Products</h1>
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.image} height={'150px'} width={'150px'} />
              <h3 className="post-title">Title : {product.title}</h3>
              <p className="post-body">Price : {product.price}</p>
              <p className="post-body">Description : {product.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
