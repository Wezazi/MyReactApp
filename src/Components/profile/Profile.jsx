import "./Profile.css"
import profilePic from "../../assets/profile.jpg"
import johnProfile from "../../assets/john.jpg"

function Profile(props){

    return(
        <>
            <div className="profile">
                <img src={props.john ? johnProfile : profilePic} alt="Profile Picture" className="img"/>
                <h2 className="profileTitle">{props.title}</h2>
                <h3 className="profileText">Hello! I'm {props.age} years old and I'm {props.calling ? "calling you" : "not calling you"}</h3>
            </div>
        </>
    )
}

export default Profile;