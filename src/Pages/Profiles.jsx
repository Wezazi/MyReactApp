import Profile from "../Components/Profiles/Profiles.jsx";
/*The imported component can't have the same alias as the function. That's why i chaned the Profile function to ProfileF instead. I could also have changed import Profile to import ProfileC but i would need to modify all instances of <profile> </> in the html*/


function ProfileF(){ 

    
    return(
        <>
            <div>
                <Profile title = "John Pork" age = "300" calling = {true} john = {true}/>
			    <Profile title = "Anna" age = "5000" calling = {false} john = {false}/>
			    <Profile title = "Peter Mcneeley" age = "32" calling = {true} john = {false}/>
            </div>
        
        </>
    )
}

export default ProfileF;