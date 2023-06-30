// get user IP
function getIpAddress() {
    return fetch("https://api.ipify.org/?format=json")
        .then((response) => response.json())
        .then((data) => data.ip)
        .catch((error) => console.error(error));
}

// get user ip details
async function getIpDetails() {
    try {
        const ipAddress = await getIpAddress();
        const response = await fetch(`https://ipapi.co/${ipAddress}/json/`);
        const user = await response.json();
        const userCountry = user.country_name;
        const currencyName = user.currency_name;
        const currency = user.currency;
        const countryFlags = {
            Pakistan: "resources/Pakistan.png",
            "United Arab Emirates": "resources/UAE.png",
            "United States": "resources/USA.png",
        };
        if (countryFlags.hasOwnProperty(userCountry)) {
            // TODO add more lists as options for countries increases
            const countryFlag = countryFlags[userCountry];
            document.getElementById("user-info").innerHTML = `
      <img src="${countryFlag}" alt="${countryFlag} flag">
      <div>Your Location is set to <b>${userCountry}.</b></div>
      <ul>
          <li>Shop in ${currencyName} ${currency}</li>
      </ul>
      <br>
      <button id="accept-Dialog" onclick="acceptDialogOnclick()" title="Accept">Continue</button>`;
            body.style.overflow = "hidden";
            dialogBox.showModal();
        }
    } catch (error) {
        console.log(error);
    }
}
getIpDetails();

closeDialogBox.addEventListener("click", (e) => {
    dialogBox.close();
    body.style.overflow = "auto";
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        dialogBox.close();
        body.style.overflow = "auto";
    }
});
function acceptDialogOnclick() {
    dialogBox.close();
    body.style.overflow = "auto";
    // TODO add logic of setting price or other things when user click this.
}
