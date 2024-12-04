const change = document.getElementById("change");

function change_all() {
    const surname = document.querySelector(".block0");
    const name = document.querySelector(".block1");
    const birthDate = document.querySelector(".block3");

    if (surname.innerText === "Сергеевна") {
        surname.innerText = "Sergeevna";
        name.innerText = "Viktoria";
        birthDate.innerText = "14.03.1998";
    } else if (surname.innerText === "Sergeevna") {
        surname.innerText = "Сергеевна";
        name.innerText = "Виктория";
        birthDate.innerText = "18.03.2000";
    }
}

change.addEventListener("click", change_all);