import usePageTitle from "../Hooks/usePageTitle";
import "../assets/css/Home.css";
import RestaurantInfo from "../Components/RestaurantInfo";
import OrderSectionMain from "../Components/OrderSectionMain";
import { ChevronsDown } from "lucide-react";

const Home = () => {
  usePageTitle("Inicio");
  return (
    <div className="home">
      <div className="home__main">
        <div className="home__main-container">
          <h1 className="home__main-container-title">Essenza</h1>
          <h2 className="home__main-container-subtitle">
            Donde los sabores cuentan su historia.
          </h2>
          <div className="scroll-indicator">
            <ChevronsDown size={50} />
          </div>
        </div>
      </div>
      <RestaurantInfo />
      <OrderSectionMain />
    </div>
  );
};

export default Home;
