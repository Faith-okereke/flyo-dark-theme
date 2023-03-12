function validate(){
    const email = document.getElementById("email").value;
    const para = document.getElementById("demo");
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
        para.style.display= "block";
        return false
    }
    return true
} 