//https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Flowers_of_Sweden&gcmlimit=500&gcmtype=file&prop=imageinfo&&iiprop=url&format=json

async function getFlower() {
    let response = await fetch("https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Flowers_of_Sweden&gcmlimit=10&gcmtype=file&prop=imageinfo&&iiprop=url&format=json");
    let data = await response.json();
    return data;
}

getFlower().then(data => console.log(data));

const image = document.createElement("img");
image.setAttribute("src", "https://http.cat/200.jpg");
image.setAttribute("alt", "cat");
document.getElementById("flower").appendChild(image);