
const Button = ({ className, ...restOfProps }) => {

    return (
        <button
            // className='btn'
            className={className}
            {...restOfProps}
            >
        </button>
        
    )
}

export default Button