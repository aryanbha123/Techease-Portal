const settings = {
    dots: true,       // Show dot navigation
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: '30px', // Adjust this value for more space
    responsive: [
        {
            breakpoint: 1024, // for tablets and laptops
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768, // for tablets
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640, // for mobile screens
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
}

export default settings;
const CustomPrevArrow = (props) => {
    const { className, style, onClick } = props; // Destructure only valid props
    return (
        <button
            className={className}
            style={{ ...style, display: 'block', background: 'gray' }}
            onClick={onClick}
        >
            &#8592; {/* Left Arrow */}
        </button>
    );
};

const CustomNextArrow = (props) => {
    const { className, style, onClick } = props; // Destructure only valid props
    return (
        <button
            className={className}
            style={{ ...style, display: 'block', background: 'gray' }}
            onClick={onClick}
        >
            &#8594; {/* Right Arrow */}
        </button>
    );
};
