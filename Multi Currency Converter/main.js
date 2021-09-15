let dollarInput = document.getElementById("number");
let currencyOption = document.getElementById("select");
let resultDiv = document.getElementById("result");

let inputs = [dollarInput, currencyOption];

let dollarValue;
let currency;

let dollarToSdBound  = 443.50;
let dollarToEgBound  = 15.65;
let dollarToKsaRiyal = 3.75;
let dollarToUaeDirham = 3.67;
let dollarToKwdDinar = 0.30;
let dollarToTRY = 8.45;
let dollarToEuro = 0.85;


inputs.forEach(el => [
  el.oninput = () => {
    dollarValue = dollarInput.value;
    currency = currencyOption.value;
    
    if (currency === "sd-bound")
      resultDiv.innerHTML = `<span>${dollarValue} Dollars</span> = <span>${(dollarValue * dollarToSdBound).toFixed(2)} Sudanese Bound</span>`;
    if (currency === "eg-bound")
      resultDiv.innerHTML = `<span>${dollarValue} Dollars</span> = <span>${(dollarValue * dollarToEgBound).toFixed(2)} Egyption Bound</span>`;
    if (currency === "ksa-riyal")
      resultDiv.innerHTML = `<span>${dollarValue} Dollars</span> = <span>${(dollarValue * dollarToKsaRiyal).toFixed(2)} Saudi Riyal</span>`;
    if (currency === "uae-dirham")
      resultDiv.innerHTML = `<span>${dollarValue} Dollars</span> = <span>${(dollarValue * dollarToUaeDirham).toFixed(2)} Emirates Dirham</span>`;
    if (currency === "kwd-dinar")
      resultDiv.innerHTML = `<span>${dollarValue} Dollars</span> = <span>${(dollarValue * dollarToKwdDinar).toFixed(2)} Kwaiti Dinar</span>`;
    if (currency === "turk-try")
      resultDiv.innerHTML = `<span>${dollarValue} Dollars</span> = <span>${(dollarValue * dollarToTRY).toFixed(2)} Turkish TRY</span>`;
    if (currency === "euro")
      resultDiv.innerHTML = `<span>${dollarValue} Dollars</span> = <span>${(dollarValue * dollarToEuro).toFixed(2)} EURO</span>`;
  }
])