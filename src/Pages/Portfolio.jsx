import Project from "../Components/Projects/Projects.jsx";
import "../Components/Projects/Project.css"
import {useState} from "react";
import Terminal from "../Components/Terminal/Terminal.jsx";

function Portfolio() {
    const [isHidden, setIsHidden] = useState(true);

    const handleEvent = () => {
        setIsHidden(!isHidden);
        /*
            The code above is doing the same thing as:

            if (isHidden == true){
                setIsHidden(false);
            }
            else{
                setIsHidden(true);    
            }
        */
    }

	return(
		<>
            <div buttonContainer>
                <button className="previewBtn" onClick={ () => {handleEvent()}}>Click Me!</button>
            </div>

            {/*You can't apply classes to <Project> so i just surrounded them by a div element and applied the class to the div */}
            <div className={isHidden ? "projectContainer hide" : "projectContainer"}> {/*MAKE SURE TO SURROUND THE CLASSNAMES WITH DOUBLE QUOTES*/}
                <Project projectName = "FlexBox and BEM" repo = "https://github.com/Wezazi/Learning-CSS-Flexboxes"/>
                <div className="buttonContainer">
                    <button className="previewBtn" onClick={ () => {handleEvent()}}>Click Me!</button>
                </div>

                <Project projectName = "CSS Grid" repo = "https://github.com/Wezazi/Learning-CSS-Grid" />
                <Project projectName = "Test Your Skills" repo = "https://github.com/Wezazi/Test-Your-Skills-12Hours and https://github.com/Wezazi/Responsive-Layout-Templates" />
            </div>
        </>
	)
}

export default Portfolio;