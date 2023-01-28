const Button = ({ children, className, active = false, ...restOfProps }) => {
    return (
        <button
            className={`btn ${className}`}
            {...restOfProps}>
            {children}
        </button>
    )
}

export default Button