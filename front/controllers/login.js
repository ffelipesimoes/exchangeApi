function login() {
    var emailField = document.getElementById("email");
    var passwordField = document.getElementById("password");

    var email = emailField.value;
    var password = passwordField.value;

    axios.post("http://localhost:9090/auth", {
        email,
        password
    }).then(res => {
        var token = res.data.token;
        
        localStorage.setItem("token", token);
        axiosConfig.headers.Authorization = "Bearer " + localStorage.getItem("token");
       
        
        alert("logado: ");
        location.reload()
    }).catch(err => {
        alert("buxo");


    })
}

var axiosConfig = {
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
}
