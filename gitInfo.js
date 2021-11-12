/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

let gitDefinition = 'Git acts as a version control system so we can interact with different versions of our code, meaning we can view past or present versions of our code, while continuing to add to it without disrupting the current code that has already been exported to the global universe.'


//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

let gitHubDefinition = 'A website where you can upload your code and view other peoples code!'

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/


let init = "This step creates a git repository for your code, the command is git init."


//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/
const clone = {
    description:''
    code:''
}


let clone = "This step takes a copy of the code that is already uploaded on Github, and puts it on your local device. The command line is git clone REPO_URL"

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

let status = "This step reviews information about the repo that you have selected, it can show whether there has been updates made or if there are files that have yet to be committed. The command line is git status."

//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

let add = "This step will track the file that you have selected, meaning it is being prepared to be saved. The command line is git add ."


//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

let commit = "This step takes all the changes that have been made and organizes it into the version that will soon be uploaded to Github. The command line is git commit -m 'first commit or logical reference'"


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

let push = "This step uploads your code to the repository on Github! The command line is git push."
}