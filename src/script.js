const add = document.getElementById("add");
const dif = document.getElementById("dif");
const div = document.getElementById("div");
const multi = document.getElementById("multi");
const ans = document.getElementById("ans");
const closebtn = document.getElementById("close");
add.onclick = function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 + num2;
    ans.textContent = result;
}

dif.onclick = function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 - num2;
    ans.textContent = result;
}

div.onclick = function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 / num2;
    ans.textContent = result;
}

multi.onclick = function () {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);

    const result = num1 * num2;
    ans.textContent = result;
}

closebtn.onclick = function () {
    window.close();
}