import { useEffect,useState } from "react";
import { useFakestoreApi } from "../hooks/useFakestoreApi";
import ProductItem from "../components/ProductItem";


const Home = () => {
  const { data: products, loading, error, getProducts } = useFakestoreApi();
  const [search, setSearch] = useState("");
  useEffect(() => {
    getProducts();
  }, []);
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const filteredProducts = products
    ? products.filter((product) =>
        product.title.toUpperCase().includes(search.toUpperCase())
      )
    : null;
  return (
    <div className="text-black">
      <h1>Home</h1>
      <div className="mt-4">
      <label htmlFor="search">Buscar productos: </label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={handleSearch}
        />      
      </div>
      <div className="mt-10">
      {loading ? <span>Cargando...</span> : null}
      {error ? <span>Hubo un error</span> : null}
      {products ? (
        <ul className="grid grid-cols-5 gap-4 ">
          {filteredProducts.map((product) => (
            <ProductItem product={product} key={product.id}/>
          ))}
        </ul>
      ) : null}
      </div>
    </div>
  );
};

export default Home;
