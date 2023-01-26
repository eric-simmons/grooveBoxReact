const Button = ({ children, className , ...restOfProps }) => {
    return (
        <button
            className={`btn ${className}`}
            {...restOfProps}>
            {children}
        </button>
    )
}

export default Button