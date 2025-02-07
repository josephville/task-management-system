import styles from "./banner.module.css"; // Import the CSS file
import PropTypes from 'prop-types'; // Import PropTypes for props validation

const greeting = "Howdy";

// Banner is a component. Components are functions that return JSX
const Banner = ({children}) => {
    return (
        <>
            <h1 className="h1">Header</h1>
            <div>{greeting}</div>
            <header className="row mb-0"> {/* margin bottom 4*/}
                <div className="col-5">
                    <img src="./task_list_icon.png" alt="logo" className={styles.logo}/> {/* Use the imported CSS class. This is a JS expression */}
                </div>

                {/* 2 ways of doing the same thing. Fist way obv doesn't need the const subtitleStyle 
                but the use of the style attribute is discouraged - use separate CSS files instead
                
                {/* <div className="col-7 mt-5" style={{fontStyle: "italic"}}>Task Management System</div> */}
                <div className={`col-7 mt-5 ${styles.bannerTextStyle}`}>
                    {children}
                </div>
            </header>  
        </>
    );
};
Banner.propTypes = {
    children: PropTypes.any,
};

export default Banner;