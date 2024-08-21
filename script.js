let count=10;
let imageContainer=document.getElementById("img-container");
let apikey="SKC6l31iz0cIfhjWfdoekO2dsyKWxo4hmaRdsSlufE8";
let apiUrl=`https://api.unsplash.com/photos/random/?client_id=${apikey}&count=${count}`;

let photoArr=[];

function setAttributes(element,attributes){
    for(let key in attributes){
        element.setAttribute(key,attributes[key]);
    }
}
function displayphotos(){
    photoArr.forEach((photo)=>{
        let item=document.createElement("a");
        setAttributes(item,{
            href:photo.links.html,
            target:"_blank"
        })
        let img=document.createElement("img");
        setAttributes(img,{
            src:photo.urls.regular,
            alt:`${photo.alt_description}`
        });

        item.append(img);
        imageContainer.append(item); 
    })
}
async function getPhotos(){
    let responce=await fetch(apiUrl);
    photoArr=await responce.json();
    // console.log(photoArr); 
    displayphotos();
}
    window.addEventListener("scroll",()=>{
    //    console.log(window.scrollY,window.innerHeight,document.body.offsetHeight);
       if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        getPhotos()
    }
    })
getPhotos();