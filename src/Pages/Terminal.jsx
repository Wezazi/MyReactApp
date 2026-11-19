import Terminal from "../Components/Terminal/Terminal.jsx";

function TerminalF(){ 

    
    return(
        <>
            <div>
                {/*MAKE SURE TO WRITE <Terminal /> and NOT <Terminal> </Terminal> */}
                <Terminal name= "FlexBox and BEM" tech = '["HTML", "CSS"]' writeUp = "Created webpages based on a figma design. Positioned the elements within the containers using only flexbox property values. Used BEM naming convention in the project" learned = '["Flexbox", "BEM"]' challenges = "This assingment was my first time using flexboxes so it took some time to get used to. I struggled alot with BEM naming convention. BEM is very unintuative to me, you can probably tell that i still struggle with it."/>
            </div>
        
        </>
    );
}

export default TerminalF;