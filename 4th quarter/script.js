function confirmAction() {
    let result = confirm("kore wo suru no ga ii no ka?");
    if (result == true) {
        alert("Kodo ga kakunin sa reta");
        let input = prompt("Onamae wo nyuryoku shite kudasai:");
        if (input != null) {
            document.getElementById("result").innerHTML = "Konnichiwa, " + input + "!";
        }
    } else {
        alert("Kodo ga torikeshi ni natte imasu");
    }
}