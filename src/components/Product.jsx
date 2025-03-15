import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {  // ✅ Capitalized component name
  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);  // ✅ Added location as a dependency

  return <div>Product Page</div>;
};

export default Product;
