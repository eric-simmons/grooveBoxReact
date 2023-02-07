const Button = ({ className, ...restOfProps }) => {
    return (
        <button
            className={`btn ${className}`}
            {...restOfProps}
            >
            
        </button>
    )
}

export default Button