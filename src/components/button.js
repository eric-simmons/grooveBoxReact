
const Button = ({ className, ...restOfProps }) => {

    return (
        <button
            className="btn"
            {...restOfProps}
            >
        </button>
    )
}

export default Button