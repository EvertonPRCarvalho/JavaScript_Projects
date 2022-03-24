var numBin = document.querySelector('.inputBinario');
var btnToConvert = document.querySelector('.btntoconvert');

var result = document.querySelector('.resultDecimal');

btnToConvert.addEventListener('click', ()=>{
    var binary = Number (numBin.value);
    result.textContent = parseInt(binary, 2)
});

