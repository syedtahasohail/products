import { useEffect, useState } from "react";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));

  }, []);

  return (
    <div className>
      <h1>Products</h1>
      <div className="post-container">
        {products.map(product => (
          <div key={product.title}>
            <h2 className="post-title">Title : {product.title}</h2>
            <p className="post-body">Price : {product.price}</p>
            <p className="post-body">Description : {product.description}</p>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
