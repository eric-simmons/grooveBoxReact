
const Button = ({ className, ...restOfProps }) => {

    return (
        <button
            // className='btn'
            //rest of props action true?
            className={className}
            {...restOfProps}
            >
        </button>
        
    )
}

export default Button