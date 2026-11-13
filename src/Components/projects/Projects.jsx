import "./Project.css"
import flex1 from "../../assets/flex1.png"
import flex2 from "../../assets/flex2.png"
import grid1 from "../../assets/grid.png"

import skills1 from "../../assets/t2.png"
import skills2 from "../../assets/t2-r.png"
import skills3 from "../../assets/t4.png"
import skills4 from "../../assets/t4-r.png"

function Project(props){
    
    var tech = props.tech; // I don't need to use {props.tech} because im outside of the return()
    var learned = props.learned;
    
    //Function to take each list value and make a string that looks like a list  
    function quotes(array){
        let list = [];
        for (let value of array){
            list.push(`"${value}"`);
        }
        let string = list.join(", ").toUpperCase();
        string = `[${string}]`
        return string;
    }

    tech = quotes(tech);
    learned = quotes(learned);


    function images(array){
        let codeList = [];
        let n = 0;
        for (let image of array){
            if (n == 0){
                n = 1;
            }
            else{
                n = 0;
            }

            codeList.push(
                <div className="cyber-tile">
                    <img className={`cyber-img cyber-glitch-${n}`} src={image}/>
                </div>
            )
        }
        return codeList;
    }

    let flexImages = images([flex1, flex2]);
    let gridImages = images([grid1])
    let skillImages = images([skills1, skills2, skills3, skills4])

    function test(name){

        if (name.toLowerCase().includes("flex")){
            return flexImages;
        }
        else if (name.toLowerCase().includes("grid")){
            return gridImages;
        }
        else if (name.toLowerCase().includes("skill")){
            return skillImages;
        }

    }

    //This reminds me of php, it's pretty similar to how you use variables within html.
    return(
        <>
            <div className="cyber-con">
                <h2 className="text">{props.projectName}</h2>
                <p className="text">{props.repo}</p>

                
                <div className="nested">
                    {test(props.projectName)} {/*I was worried about how i was gonna make this work because i can't run for loop inside the html but thankefully react automatically renders each value in the list*/}
                </div>
            </div>

            
            <div className="block-c">
                <div className="code-block oxanium-font">
                    const tech = {tech};
                    <br></br><br></br>
                    var writeup = "{props.writeup}";
                    <br></br><br></br>
                    const learned = {learned};
                    <br></br><br></br>
                    var challenges = "{props.challenges}";
                </div>

            </div>
            
        </>
    )
}



export default Project;