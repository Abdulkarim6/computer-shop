import { useProducts } from "./context/ProductProvider";

const useHook = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let conten;
  let inf;

  if (loading && !error) {
    inf = (
    <p className="text-xl font-semibold text-blue-500">Loading</p>
    );
  } else if (error) {
    inf = (
      <p className="text-center text-xl font-semibold text-red-500 mt-5">
        Something went wrong
      </p>
    );
  } else if (!loading && !products.length && !error) {
    inf = (
      <p className="text-center text-xl font-semibold text-green-500 mt-5">
        Nothing to show, Products list empty
      </p>
    );
  } else if (!loading && products.length && !error) {
    conten = products;
  }
  return [inf?.props?.children, conten];
};

export default useHook;
