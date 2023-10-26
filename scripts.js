const sendNameBtn = document.querySelector(".sendNameBtn");

sendNameBtn.addEventListener("click", () => {

    let name = document.querySelector(".name");

    function randomXToY(minVal,maxVal)
  {
    var randVal = minVal+(Math.random()*(maxVal-minVal));
    return Math.round(randVal);
  }

  let random = randomXToY(101, 999);

    const outputInfo = document.querySelector(".outputInfo");
    const emailName = name.value.split(" ").join("").toLowerCase();
    outputInfo.innerHTML += `${name.value} | ${emailName}${random}@gmail.com</br>`;

    name.value = "";
})

