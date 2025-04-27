import PropTypes from "prop-types"

const Card = ({ image="https://static.toiimg.com/thumb/msid-114700295,imgsize-137900,width-400,resizemode-4/114700295.jpg", header="Your Beer", text="Tell us about your beer and what do you like most in your beer. We would love to hear about it" }) => {
    return (
        <div className="bg-amber-300 shadow-xl text-center w-11/12 mx-auto my-7 p-5 rounded-3xl">
            <img src={image} alt="" className="p-0.5 rounded-xl lg:h-50 w-full mx-auto" />
            <h2 className="text-red-500 text-5xl my-5">{header}</h2>
            <p className="text-gray-800">{text}</p>
        </div>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    text: PropTypes.string,
}

export default Card