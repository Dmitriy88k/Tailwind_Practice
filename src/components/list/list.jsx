import PropTypes from "prop-types";

const List = (props) => {
    const category = props.category;
    const itemsList = props.items;
    
    
    const listThings = itemsList.map(item => <li key={item.id}>{item.name}: <b>{item.calories}</b></li>)

    return (
        <div className="text-center list-decimal">
            <p className="text-3xl font-extrabold">{category}</p>
            <ul >
                {listThings} 
            </ul>
        </div>
    )
}

List.propTypes = {
    category: PropTypes.string,
    itemsList: PropTypes.array,
    calories: PropTypes.number,
}

export default List