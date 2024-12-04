function checkContainers(A, H, R, M) {
    console.log("A, H, R, M")
    let a = parseInt(elementA.innerText);
    let h = parseInt(elementH.innerText);
    let r = parseInt(elementR.innerText);
    let m = parseInt(elementM.innerText);
    console.log(a, h, r, m)
    const cubeVolume = Math.pow(a, 3);
    const cylinderVolume = Math.PI * Math.pow(r, 2) * h;

    const canFillCube = m <= cubeVolume;
    const canFillCylinder = m <= cylinderVolume;
    const canFillBoth = m <= cubeVolume + cylinderVolume;

    if (canFillCube && canFillCylinder) {
        result = "Можно заполнить любую из ёмкостей";
        document.getElementById("result").innerText =  result;
    } else if (canFillCube) {
        result = "Можно заполнить только кубическую ёмкость";
        document.getElementById("result").innerText =  result;
    } else if (canFillCylinder) {
        result = "Можно заполнить только цилиндрическую ёмкость";
        document.getElementById("result").innerText =  result;
    } else if (canFillBoth) {
        result = "Можно заполнить обе ёмкости вместе";
        document.getElementById("result").innerText =  result;
    } else {
        result = "Объём M слишком велик для обеих ёмкостей";
        document.getElementById("result").innerText =  result;
    }
}


const elementA = document.getElementById("a");
const elementH = document.getElementById("h");
const elementR = document.getElementById("r");
const elementM = document.getElementById("m");

const elementVerify = document.getElementById("check");
elementVerify.addEventListener('click', checkContainers);