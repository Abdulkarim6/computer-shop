import ProductCart from "../components/ProductCart";
import { useProducts } from "../context/ProductProvider";
import useHook from "../useHook";

const Home = () => {
  // const {state} = useProducts();
  // console.log(state.products);

  const {
    state: { products, loading, error },
  } = useProducts();

  let content;
  let info;

  if (loading && !error) {
    info = (
      <div className="flex items-center justify-center mt-5">
        <p className="text-xl font-semibold text-blue-500">Loading</p>
        <span className="loading loading-spinner text-info"></span>
      </div>
    );
  } else if (error) {
    info = <p className="text-center text-xl font-semibold text-red-500 mt-5">Something went wrong</p>;
  } else if (!loading && !products.length && !error) {
    info = <p className="text-center text-xl font-semibold text-green-500 mt-5">Nothing to show, Products list empty</p>;
  } else if (!loading && products.length && !error) {
    content = products?.map((product, i) => (
      <ProductCart key={i} product={product}></ProductCart>
    ));
  }

  const [inf, conten] = useHook();
  console.log("inf",inf,'conten', conten);

  return (
    <section>
      {info}
      <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 justify-items-center">
        {content}
      </div>
    </section>
  );
};

export default Home;
