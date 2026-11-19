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

    const [isOpen, setIsOpen] = useState(false);
    function popup(){
        setIsOpen(true);
        let button = document.getElementsByClassName("popupBtn")[0];
        button.classList.add("hide");

        let close = document.getElementById("bar__button--exit");

        close.addEventListener("click", () => {
            setIsOpen(false);
        });


    }



	return(
		<>
            <div buttonContainer>
                <button className="previewBtn" onClick={ () => {handleEvent()}}>Click Me!</button>
            </div>

            {/*You can't apply classes to <Project> so i just surrounded them by a div element and applied the class to the div */}
            <div className={isHidden ? "projectContainer hide" : "projectContainer"}> {/*MAKE SURE TO SURROUND THE CLASSNAMES WITH DOUBLE QUOTES*/}
                <Project projectName = "FlexBox and BEM" repo = "https://github.com/Wezazi/Learning-CSS-Flexboxes"/>

                <div className={isOpen ? "" : "hide"}>
                    <Terminal name= "FlexBox and BEM" repo = "https://github.com/Wezazi/Learning-CSS-Flexboxes" tech = '["HTML", "CSS"]' writeUp = "Created webpages based on a figma design. Positioned the elements within the containers using only flexbox property values. Used BEM naming convention in the project" learned = '["Flexbox", "BEM"]' challenges = "This assingment was my first time using flexboxes so it took some time to get used to. I struggled alot with BEM naming convention. BEM is very unintuative to me, you can probably tell that i still struggle with it."/>
                </div>
                <div className="buttonContainer">
                    <button className="popupBtn" onClick={ () => {popup()}}>Click Me!</button>
                </div>



                <Project projectName = "CSS Grid" repo = "https://github.com/Wezazi/Learning-CSS-Grid" />
                <Project projectName = "Test Your Skills" repo = "https://github.com/Wezazi/Test-Your-Skills-12Hours and https://github.com/Wezazi/Responsive-Layout-Templates" />
            </div>
        </>
	)
}

export default Portfolio;