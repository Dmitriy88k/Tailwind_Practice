import Header from "../src/components/header/header"
import Footer from "../src/components/footer/footer"
import Food from "../src/components/food/food"
import Card from "../src/components/card/card"
import List from "../src/components/list/list"

import './index.css'

function App() {

  const vegies = [
    {id: 2, name: "Eggplant", calories: 188}, 
    {id: 1, name:  "Potato", calories: 223}, 
    {id: 3, name: "Cabage", calories: 112},
    {id: 4, name:  "Carrot", calories: 121}
  ];

  const fruits = [
    {id: 5, name: "Apple", calories: 52},
    {id: 6, name: "Strawberry", calories: 76},
    {id: 7, name: "Cherry", calories: 112},
    {id: 8, name: "Orange", calories: 35},
    {id: 9, name: "Kiwi", calories: 23},
    {id: 10, name: "Banana", calories: 42}
  ];

  return (
    <div>
      <Header/>
      <Food isVegetarian={true} name="Oliver"/>
      <div className="lg:flex justify-between gap-5 w-11/12 mx-auto">
        <Card header="Sapporo Beer" image="https://www.thebeertown.co.uk/cdn/shop/articles/sapporoskyline.png?v=1607343886" text="Sapporo Breweries Limited, founded in 1876, is a Japanese beer brewing company known for its Sapporo beer brand, which is the oldest beer brand in Japan.  "/>
        <Card header="Asahi Beer" image="https://i.vimeocdn.com/video/1557395059-dbc7afaba29af54c4e5e5f2d985da212f6d8ba11e42a826ccee1d2f035b2dc86-d?f=webp" text="
Asahi Super Dry Beer is a rice lager from Japan. These beers are prepared with rice and malted barley, just like American lagers"/>
        <Card header="Kirin Ichiban Beer" image="https://foodex-group.eu/wp-content/uploads/2023/05/Copy-of-WEBSITE-ILLUSTRATION-2.png" text="Kirin Ichiban is a Lager-type beer, which means it is fermented at low temperatures and offers a light and refreshing texture with a smooth and balanced flavor."/>
        <Card/>
      </div>
      <List items={vegies} category="Vegetables"/>
      <List items={fruits} category="Fruits"/>
      
      
      <Footer/>
    </div>

  )
}

export default App
