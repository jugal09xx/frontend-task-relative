import "./App.css";
import Card from "./components/Card";
import Card2 from './components/Card2'
import Card4 from './components/Card4'
import Card3 from './components/Card3'
import Card5 from './components/Card5'
import trendingAsset from "./assets/activity.svg";

function App() {
  return (
    <div className="m-6 mainContainer">
      <div className="flex flex-row mt-24 mb-36">
        <img src={trendingAsset} alt="icon1" />
        <h1 className="text-base text-[#ECF0FF] ml-3 font-semibold">
          Trending Assets
        </h1>
      </div>
      <div className="flex flex-row m-6 justify-between">
        <Card />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </div>
    </div>
  );
}

export default App;
