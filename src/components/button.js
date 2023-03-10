
const Button = ({ className, ...restOfProps }) => {

    return (
        <button
            className={className}
            {...restOfProps}
        >
        </button>

    )
}

export default Button