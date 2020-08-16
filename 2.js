function submit1() {
    let firstinput = document.querySelector("#inputbox1").value;
    let clonebox = document.querySelector("#sample").cloneNode(true);
    clonebox.innerHTML = firstinput;
    let dropbax = document.querySelector("#dropbax");
    dropbax.insertBefore(clonebox, dropbax.firstChild);
    document.querySelector("#inputbox11").value = "";

}




