const input = document.getElementById("input");
const submitBtn = document.getElementById("submit");
const imgEl = document.getElementById("img");

submitBtn.addEventListener("click", () => {
    if (!input.value) {
        return alert("Enter text to generate QRCODE");
    }
    const URL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    img.src = URL;
    img.style.display = "block";
});