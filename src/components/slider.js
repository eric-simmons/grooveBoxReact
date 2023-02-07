const Slider = ({className, ...restOfProps}) => {
    return (
        <input
            className="slider"
            type="range"
            {...restOfProps}
        />
    )
}

export default Slider