import { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import ProductCard from './ProductCard';

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    await fetch(`${import.meta.env.VITE_API_URL}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container px-5 text-center mt-10">
      <span className='text-orange font-medium text-4xl '>Menu</span>
      <h2 className='dark font-bold text-[31px] mt-1 '>Food Full of treaty Love</h2>
      <p className='dark font-normal max-w-[715px] mx-auto mt-5 '>
        There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers,
      </p>
      <div className="grid grid-cols-3 gap-[30px] mt-20">
        {data.length
          ? data.map((el) => (
            <ProductCard key={el.id} {...el} />
          ))
          : Array.from({ length: 20 }).map((el) => (
            <Skeleton
              key={el}
              width={360}
              height={460}
            />
          ))}
      </div>
    </div>
  );
}

export default App;