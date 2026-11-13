import "./Project.css"
import flex1 from "../../assets/flex1.png"
import flex2 from "../../assets/flex2.png"


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
        for (let image of array){
            codeList.push(
                <div className="cyber-tile">
                    <img className="cyber-img cyber-glitch-0" src={image}/>
                </div>
            )
        }
        return codeList;
    }

    let flexImages = images([flex1, flex2]);



    return(
        <>
            <div className="">
                <div className="cyber-razor-top"></div>
                <h1 className="text cyber-banner cyber-glitch-2">Projects</h1>
                <div className="cyber-razor-bottom"></div>
            </div>

            <div className="cyber-con">
                <h2 className="text">{props.projectName}</h2>
                <p className="text">{props.repo}</p>

                
                <div className="nested">
                    {flexImages} {/*I was worried about how i was gonna make this work because i can't run for loop inside the html but thankefully react automatically renders each value in the list*/}
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