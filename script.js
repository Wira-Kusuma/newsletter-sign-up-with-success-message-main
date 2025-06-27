document.getElementById("subs").addEventListener("click", function() {

    let email = document.getElementById("email");
    let validation = document.querySelector(".validation");
    if (email.value.trim() === "") {
        validation.innerHTML="Email can't be blank";
        validation.style.color="red";
        email.classList.add("error");
    }
    else if(!email.value.trim().includes("@")) {
        validation.innerHTML="Email invalid missing '@'";
        email.classList.add("error");
    }
    else {
        validation.innerHTML="";
        email.classList.remove("error");

        document.querySelector("main").classList.add("closing");

        document.querySelector(".userEmail").innerHTML = email.value;


        setTimeout(() => {
            document.querySelector("main").classList.add("hide");

            document.querySelector("main").classList.remove("closing");

            document.querySelector(".modal").classList.add("showing");

            document.querySelector("main").classList.add("hide");

            document.querySelector(".modal").classList.add("show");
        },1000);
    }
});


document.querySelector(".dismiss").addEventListener("click", function() {
    document.querySelector(".modal").classList.remove("showing");
    document.getElementById("email").value="";
    document.querySelector(".modal").classList.add("closing");
    document.querySelector("main").classList.add("showing");

    setTimeout(() => {
        document.querySelector("main").classList.remove("hide");
        document.querySelector(".modal").classList.remove("show");
    },1000);
});
