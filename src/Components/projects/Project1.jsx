import "./Project.css"
import screen1 from "../../assets/flex1.png"
import screen2 from "../../assets/flex2.png"

function Project(props){

    return(
        <>
            <div className="">
                <div className="cyber-razor-top"></div>
                <h1 className="text cyber-banner cyber-glitch-2">Projects</h1>
                <div className="cyber-razor-bottom"></div>
            </div>
          
            <div className="cyber-con">
                <h2 className="text">FlexBox and BEM</h2>
                <p className="text">https<span className="cyber-glitch-3">://</span>github<span className="cyber-glitch-3">.</span>com<span className="cyber-glitch-3">/</span>Wezazi<span className="cyber-glitch-3">/</span>Learning<span className="cyber-glitch-3">-</span>CSS<span className="cyber-glitch-3">-</span>Flexboxes</p>

                
                <div className="nested">
                    <div className="cyber-tile">
                        <img className="cyber-img cyber-glitch-0" src={screen1}/>
                    </div>
                    <div className="cyber-tile">
                        <img className="cyber-img cyber-glitch-1" src={screen2}/>
                    </div>
                </div> {/*Was tricky getting the heights of the images to match height while making them shrink with vieport*/}
                
                {/*<div className="nested">
                    <img src={screen1}/>
                    <img src={screen2}/>
                </div>*/}

                
            </div>
            <div className="block-c">
                <div className="code-block oxanium-font">
                    var tech = ["HTML", "CSS"];
                    <br></br><br></br>
                    var writeup = "Created webpages based on a figma design. Positioned the elements within the containers using only flexbox property values. Used BEM naming convention in the project" 
                    <br></br><br></br>
                    const learned = ["Flexbox", "BEM"]
                    <br></br><br></br>
                    var challenges = "This assingment was my first time using flexboxes so it took some time to get used to. I struggled alot with BEM naming convention. BEM is very unintuative to me, you can probably tell that i still struggle with it."
                </div>

            </div>
            
        </>
    )
}

export default Project;