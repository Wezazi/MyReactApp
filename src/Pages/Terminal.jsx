import Terminal from "../Components/Terminal/Terminal.jsx";

function TerminalF(){ 
    return(
        <>
            <div>
                {/*MAKE SURE TO WRITE <Terminal /> and NOT <Terminal> </Terminal> */}
                <Terminal name= "FlexBox and BEM" repo = "https://github.com/Wezazi/Learning-CSS-Flexboxes" tech = '["HTML", "CSS"]' writeUp = "Created webpages based on a figma design. Positioned the elements within the containers using only flexbox property values. Used BEM naming convention in the project" learned = '["Flexbox", "BEM"]' challenges = "This assingment was my first time using flexboxes so it took some time to get used to. I struggled alot with BEM naming convention. BEM is very unintuative to me, you can probably tell that i still struggle with it."/>
            
                <Terminal name = "CSS Grid" repo = "https://github.com/Wezazi/Learning-CSS-Grid"  tech = '["html", "CSS"]' writeUp = "Created page based on a figma design. Positioned the elements within the containers using only gridbox property values" learned = '["Gridbox"]' challenges = "This was my first time using gridbox, I was reverse engineering the structure because i didn't know that you could see it in figma. It helped learn grid even though it took alot of time"/>

                <Terminal name = "Test Your Skills" repo = "https://github.com/Wezazi/Test-Your-Skills-12Hours and https://github.com/Wezazi/Responsive-Layout-Templates" tech = '["html", "CSS", "SCSS/SASS"]' writeUp = "Created a couple of pages based on all skills i had learned up till that point. The assingment needed to be done within 12 hours, it was really fun. I practiced on the material in a seperate repo afterwards which led to me finally learning how to create a fully reactive website." learned = '["SCSS", "Reactive/Adaptive layout", "time management"]' challenges = "It was really stressfull because i only had 12 hours to finish it. I spent alot of time trying to figure out how to make the site reactive. I was able to finish the assignment however one of the sections ended up being pretty bad because i was running out of time"/>
            </div>
        
        </>
    );
}

export default TerminalF;