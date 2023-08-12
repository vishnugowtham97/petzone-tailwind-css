import Filters from "./components/Filters";
import Footer from "./components/Footer";
import ItemList from "./components/ItemList";
import MonthlySpecial from "./components/MonthlySpecial";
import Navbar from "./components/Navbar";
import SpecialOffer from "./components/SpecialOffer";

function App() {
  return (
    <div className="bg-gray-50">
      <Navbar />
      <Filters />
      <ItemList />
      <SpecialOffer />
      <MonthlySpecial />
      <Footer />
    </div>
  );
}

export default App;
