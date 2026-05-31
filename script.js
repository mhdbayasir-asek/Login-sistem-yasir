function login(){

    let username =
    document.getElementById("username").value;

    let password =
    document.getElementById("password").value;

    if(username == "bayasir" &&
       password == "12345")
    {
        document.getElementById("hasil").innerText =
        "Login Berhasil";
    }
    else
    {
        document.getElementById("hasil").innerText =
        "Login Gagal";
    }

}