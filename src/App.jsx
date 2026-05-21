import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  return (
    <>
      <foodFetching />
    </>
  );
}

export default App;

function foodFetching() {
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://free-food-menus-api-two.vercel.app/burgers",
      );
      console.log(res);
    })();
  });
}
