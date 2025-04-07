import PropTypes from "prop-types";

const Food = (props) => {
    const food1 = "Banana";
    const food2 = "Peach";

    return ( 
    <div className="text-center text-3xl my-2 text-blue-500">
        {props.isVegetarian ? <h2>Ok {props.name} eat more {food1} and {food2} </h2> : <h2>{props.name}, you are not Vegetarian so eat meat</h2>} 
    </div>
    )
}

Food.proptypes = {
    isVegetarian: PropTypes.bool,
    name: PropTypes.string, 
}

Food.defaultProps = {
    isVegetarian: false,
    name: "Kevin",
}

export default Food