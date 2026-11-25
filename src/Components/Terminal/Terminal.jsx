import "./Terminal.css";
import { useState } from "react";



function Terminal(props){

    const [isOpen, setIsOpen] = useState(false);

    return(

        <>

            
            <div className="buttonContainer">
                <button onClick={() => {
                    setIsOpen(!isOpen);
                }}>{isOpen ? "Less Details" : "More Details"}</button>
            </div>
            


            {isOpen &&(
                <div className="block-c">
                    <div className="code-block oxanium-font">
                        const tech = {props.tech};
                        <br></br><br></br>
                        var writeup = "{props.writeup}";
                        <br></br><br></br>
                        const learned = {props.learned};
                        <br></br><br></br>
                        var challenges = "{props.challenges}";
                    </div>

                </div>
            )}
        </>
    )
}

export default Terminal;
