import { useProducts } from "../context/ProductProvider";
import { actionTypes } from "../stateMaintain/actionTypes";

const ProductCart = ({ product }) => {
  const {dispatch} = useProducts();

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={product.image} alt="computerimg" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">{product.model}</h2>
        <p className="text-base font-medium">
          keyFeature: {product.keyFeature}
        </p>
        <h2 className="text-lg font-semibold text-start">Rating: {product.rating}</h2>
        <div className="flex justify-between items-center">
          <button className="btn btn-primary"
          
          >Details</button>
          <button className="btn btn-primary"
          onClick={()=> dispatch({type : actionTypes.ADD_TO_CART, payload:product})}
          >Add to cart <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg></button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
