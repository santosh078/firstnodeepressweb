// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={e28b884ee4188ce24fe1a50d064d9fc6}
const submitBtn = document.getElementById("idSubmit");
console.log(`submit button is - ${submitBtn}`);
const getCtiy = async (event) => {
    // console.log("innder index called");
    event.preventDefault();
    let searchString = document.getElementById("idSearch").value;

    if (searchString === "") {
        alert("city name can not be blank");
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=e28b884ee4188ce24fe1a50d064d9fc6`
            const oResp = await fetch(url);
            const data= await oResp.json();
            let city = document.getElementById("idCity");
            let temp = document.getElementById("idTemp");
            city.innerText = data.name;
            temp.innerText= data.main.temp;
            console.log(oResp);
        } catch {
            alert("enter a valid city name");
        }
    }
}

submitBtn.addEventListener("click", getCtiy);