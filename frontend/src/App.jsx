import { use, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHABLE_KEY);

function App() {
  return (
    <>
      <Header />
      <FoodMenu />
      <Footer />
    </>
  );
}

export default App;

// Header Component
function Header() {
  return (
    <div className="header">
      <h1>FAST REACT PIZZA CO.</h1>

      <h1>OUR MENU</h1>

      <p>
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
    </div>
  );
}

// FoodFetching Component
function FoodFetching({ setData }) {
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://free-food-menus-api-two.vercel.app/burgers",
      );
      console.log(res.data);
      setData(res.data);
    })();
  }, []);

  return null;
}

// FoodMenu Component
function FoodMenu() {
  const [data, setData] = useState([]);

  return (
    <>
      <FoodFetching setData={setData} />

      <div className="menu-container">
        {data.map((d) => {
          return (
            <div className="food-card" key={d.id}>
              <div className="food-image">
                <img src={d.img} alt={d.name} />
              </div>

              <div className="food-content">
                <h3>{d.name}</h3>
                <p>{d.dsc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// Footer Component
function Footer() {
  return (
    <div className="footer">
      <p>We are open until 22:00. Come visit us or order online.</p>

      <button>Order now!</button>
    </div>
  );
}

function Checkout() {
  const handlePayment = async () => {
    const res = await axios.post("http://localhost:5000/payment", {
      amount: 20,
    });

    console.log(res.data);
  };

  return <button onClick={handlePayment}>Pay Now</button>;
}
