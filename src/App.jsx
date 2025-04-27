import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";
import Card from "../src/components/card/card";
import List from "../src/components/list/list";
import Button from "../src/components/Button/Button"
import ColorPicker from "../src/components/ColorPicker/ColorPicker"


import "./index.css";

function App() {
  const planets = [
    { name: "Mercury", temperature: 167, cold: false },
    { name: "Venus", temperature: 464, cold: false },
    { name: "Earth", temperature: 15, cold: false },
    { name: "Mars", temperature: -65, cold: true },
    { name: "Jupiter", temperature: -110, cold: true },
    { name: "Saturn", temperature: -140, cold: true },
    { name: "Uranus", temperature: -195, cold: true },
    { name: "Neptune", temperature: -200, cold: true },
  ];

  const sports = [
    { name: "Soccer", origin: "England", teamSize: 11 },
    { name: "Basketball", origin: "United States", teamSize: 5 },
    { name: "Voleyball", origin: "United States", teamSize: 6 },
    { name: "Hockey", origin: "Canada", teamSize: 6 },
    { name: "Handball", origin: "Germany", teamSize: 7 },
  ];

  return (
    <div>
      <Header />
      <div className="lg:flex justify-between gap-5 w-11/12 mx-auto">
        <Card
          header="Sapporo Beer"
          image="https://www.thebeertown.co.uk/cdn/shop/articles/sapporoskyline.png?v=1607343886"
          text="Sapporo Breweries Limited, founded in 1876, is a Japanese beer brewing company known for its Sapporo beer brand, which is the oldest beer brand in Japan.  "
        />
        <Card
          header="Asahi Beer"
          image="https://i.vimeocdn.com/video/1557395059-dbc7afaba29af54c4e5e5f2d985da212f6d8ba11e42a826ccee1d2f035b2dc86-d?f=webp"
          text="
Asahi Super Dry Beer is a rice lager from Japan. These beers are prepared with rice and malted barley, just like American lagers"
        />
        <Card
          header="Kirin Ichiban Beer"
          image="https://foodex-group.eu/wp-content/uploads/2023/05/Copy-of-WEBSITE-ILLUSTRATION-2.png"
          text="Kirin Ichiban is a Lager-type beer, which means it is fermented at low temperatures and offers a light and refreshing texture with a smooth and balanced flavor."
        />
        <Card />
      </div>

      <List planets={planets} sports={sports}/>

      <Button/>
      <ColorPicker/>
      

      <Footer />
    </div>
  );
}

export default App;
