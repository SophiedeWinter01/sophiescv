function validateForm() {
    console.log("here")
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let problem1 = document.getElementById("problem1");
    let problem2 = document.getElementById("problem2");
    let problem3 = document.getElementById("problem3");

    if (name == "" || email == "" || problem1.checked == false && problem2.checked == false && problem3.checked == false) {
        alert("Everything must be filled in.")
    } else {
        alert("Welcome" + name + "Your email is:" + email + "I will get back to you very soon!")
    }
}