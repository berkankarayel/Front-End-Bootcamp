const formwrapper = document.querySelector(".form-wrapper")
const form = document.querySelector("#form")
const Searchinput = document.querySelector("#searchinput")
const buttonwrapper = document.querySelector(".button-wrapper")
const searchButton = document.querySelector("#searchButton")
const clearButton = document.querySelector("#clearButton")

const imageListWrapper = document.querySelector(".imagelist-wrapper")

runEventListener()

function runEventListener() {
    form.addEventListener("submit", search)
    clearButton.addEventListener("click", clearImg)

}


function search(e) {

    const value = Searchinput.value.trim();
    // soru işareti requestparamdir. url adresinden parametre geçirmek için kullanılır 
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",// KARŞIDAN BİRşey alacağımız için get. yükleswydik post olurdu. 
        headers: {
            Authorization: "Client-ID M82oidu712n-0MJ7S-nc02pHNZ2iiLsTcFuPc4uTXME" // bizim tokenımız
        }
    })
        .then((res) => res.json())
        .then((data) => {
            Array.from(data.results).forEach((image) => {
                // console.log(image.urls.small)

                addImageToUI(image.urls.small)

            })
        })
        .catch((err) => console.log(err))



    e.preventDefault() // sayfa yönelndirmesini kapatır.
}


function addImageToUI(url) {
    console.log(imageListWrapper)
    const div = document.createElement("div")
    div.className = "card"

    const img = document.createElement("img")
    img.setAttribute("src", url)
    img.height = '400'
    img.width = '400'

    div.append(img)
    imageListWrapper.append(div)
}


function clearImg() {
    Searchinput.value = ""
    //Array.from(imageListWrapper.children).forEach((x) => x.remove())
    imageListWrapper.innerHTML = "";

}

