import "./Terminal.css";


function Terminal(props){

    return(
        <>
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
        </>
    )
}

export default Terminal;
