//https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Flowers_of_Sweden&gcmlimit=500&gcmtype=file&prop=imageinfo&&iiprop=url&format=json

/*
async function getFlower() {
    let response = await fetch("https://commons.wikimedia.org/w/api.php?action=query&generator=categorymembers&gcmtitle=Category:Flowers_of_Sweden&gcmlimit=10&gcmtype=file&prop=imageinfo&&iiprop=url&format=json");
    let data = await response.json();
    return data;
}

getFlower().then(data => console.log(data));
*/

const imagedb = [
    {
        img: "https://http.cat/200.jpg",
        desc: "OK Cat"
    },
    {
        img: "https://http.cat/503.jpg",
        desc: "503 Cat"
    }
]

const randomize = imagedb.length * Math.random();
const randomimg = Math.floor(randomize);

const image = document.createElement("img");
image.setAttribute("src", imagedb[randomimg].img);
image.setAttribute("alt", imagedb[randomimg].desc);
document.getElementById("flower").appendChild(image);

console.log(randomimg)

console.log(imagedb[randomimg].img)