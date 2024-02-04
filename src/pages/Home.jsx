import { useEffect, useState } from "react";

const Home = () => {
    const [data, setData] = useState([]);

    console.log(data);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])


  return (
    <div>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </div>
  );
};

export default Home;
