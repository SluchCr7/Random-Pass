let LengthInput = document.getElementById("LengthInput")
let resultView = document.getElementById("resultView")
let HomeResult = document.getElementById("HomeResult")
let buttSubmit = document.getElementById("buttSubmit")
let buttReset = document.getElementById("buttreset")


let iconMore = document.getElementById("iconMore")
let ContainerOptions = document.getElementById("Container_options")
iconMore.onclick = () => {
    ContainerOptions.classList.toggle("noneDisplay")
}

buttSubmit.onclick = () => {    
    function randomPassGenerate(length , includeUpperCase , includeLowerCase , includeNembers , includeSympols) {
        const lowerCase = "abcdefghijklmnopqrstuvwzyz"
        const uppercase = "ABCDEFGHIGKLMNOPQRSTUVWXYZ"
        const Numbers = "123456789"
        const sympols = "!@#$%^&*()_+=-/|"
    
        let allowedchars = ""
        let Passward = ""
    
        allowedchars += includeUpperCase ? uppercase : "";
        allowedchars += includeLowerCase ? lowerCase : "";
        allowedchars += includeNembers ? Numbers : "";
        allowedchars += includeSympols ? sympols : "";
    
        if (length <= 0 ) {
            return `Passward length must have 1 character`
        } else if (length > 50) {
            return `Passward length is more long`
        }
        else {
            for (i = 0; i < length; i++){
                const passmaker = Math.ceil(Math.random() * allowedchars.length)
                Passward += allowedchars[passmaker]
            }        
            return Passward
        }
        
    }
    const passLength = LengthInput.value

        let ButtonUpper = document.getElementById("buttonUppercaseLetters")
    let ButtonYesLowercase = document.getElementById("ButtonYesLowercase")
    let ButtonYesNumbers = document.getElementById("ButtonYesNumbers")
    let ButtonYesSymbols = document.getElementById("ButtonYesSymbols")

    const includeUpperCase = true
    const includeLowerCase = true
    const includeNembers = true
    const includeSympols = true
    
    
    const Passward = randomPassGenerate(passLength, includeUpperCase, includeLowerCase, includeNembers, includeSympols)
    HomeResult.innerHTML = `
    <span id="resultView">passward : ${Passward}</span>
    `
}

buttReset.onclick = () => {
    let cont = `
    <span id="resultView">passward : </span>
    `
    HomeResult.innerHTML = cont
    
    LengthInput.value = "";
}

let ButtonUpperYes = document.getElementById("buttonUppercaseLetters")

