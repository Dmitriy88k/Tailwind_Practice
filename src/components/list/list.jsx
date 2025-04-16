import { useState } from "react";

const List = (props) => {
    const planetsList = props.planets;
    const sportsList = props.sports;

    const [showPlanets, setShowPlanets] = useState(false);
    const [showSports, setShowSports] = useState(false);

    const planetsButtonClick = () => {
        setShowPlanets(!showPlanets);
        setShowSports(false)
    }

    const sportsButtonClick = () => {
        setShowSports(!showSports);
        setShowPlanets(false);
    }
//True False
//False True
//True True
//False False     



    const listOfPlanets = planetsList.map((planet) => {
       return (
        <li>{planet.name} - <span>Temperature: </span> {planet.temperature}</li>
        )
    })

    const listOfSports = sportsList.map((sport) => {
        return (
            <li>{sport.name} - <span>Origin Country - </span> <span className="font-extrabold">{sport.origin}</span></li>
        )
    })

    

    return (
        <div className="text-center list-decimal">
            <h1 className="text-3xl font-extrabold">What are you intrested in?</h1>
            <div className="my-3">
                <button onClick={planetsButtonClick} className="border rounded-md py-2 px-5 bg-blue-500 text-amber-50 cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-150" >Planets</button>
                <span className="mx-5"> or </span>
                <button onClick={sportsButtonClick} className="border rounded-md py-2 px-5 bg-orange-700 text-amber-50 cursor-pointer hover:scale-110 active:scale-90 transition-transform duration-150">Sports</button>
            </div>
            
            <div>
                
                    {showPlanets ? <ul>{listOfPlanets}</ul> : showSports && <ul>{listOfSports}</ul>} 
                    
            </div>
        </div>
    )
}


export default List