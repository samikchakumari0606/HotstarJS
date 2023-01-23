/*for slideshow I took function slideshow
1.hardcode aur slideshow image data
1.used setInterval for the slideshow

 */
function slideshow(){
    const arr=
    
['https://wallpapercave.com/dwp1x/wp8807385.jpg',
'https://wallpapercave.com/dwp1x/wp8807414.jpg',
'https://wallpapercave.com/wp/wp8807452.jpg']

let div=document.getElementById("ss");
let img=document.createElement('img');
let i=0;

img.src=arr[0];
div.append(img);
i++;
setInterval(function(){
    if(i==3){
        i=0
    }

    img.src=arr[i];
    i++;
    div.append(img)

},3000)

}
slideshow();


//for display 3*3 grid hardcode the data in the form of arrays of object
const movies=[
 
    {
        name:"Phobla",
        rating:6,
        img:"https://i.pinimg.com/236x/fd/0d/9d/fd0d9d4c85d3dcf09fa6f8526ed40458.jpg",
    },
    
    {
        name:'The Jungle Book',
        rating:9,
        img:"https://i.pinimg.com/236x/34/69/5c/34695caa9cf423e7680a92952a699fd1.jpg",
    },

    {
        name:"Ki & Ka",
        rating:5,
        img:"https://i.pinimg.com/236x/42/b7/06/42b706fa6b94dfdd03209063b26fe52f.jpg"
    },

    {
        name:"Bajirao Mastani",
        rating:"7" ,
        img:"https://i.pinimg.com/236x/4b/83/83/4b83830289033abadd8892538793a21e.jpg"
    },

    {
        name:"Sanam Teri Kasam",
        rating:4,
        img:"https://i.pinimg.com/236x/4b/9e/eb/4b9eeb978011485a563d90ba5f59f2ae.jpg"
    },

    {
        name:"Airlift",
        rating:8,
        img:"https://i.pinimg.com/236x/97/c9/b1/97c9b18f3aa3bc41b94f17ccf5068837.jpg"
    },

    {
        name:"Masan",
        rating:9,
        img:"https://i.pinimg.com/236x/da/15/81/da1581be1c2ab284cfb07b8b3f3c0b39.jpg"
    },
    {
        name:"Bhag Milkha Bhag",
        rating:10,
        img:"https://i.pinimg.com/236x/cb/96/f7/cb96f766487640fda1ce8fc04a88a9a9.jpg"
    },
    {
        name:"Aashiqui 2",
        rating:10,
        img:"https://i.pinimg.com/236x/fa/90/58/fa90586f6e43ee7c78207146b636bd81.jpg"
    }
    
]

/*here we store our all data in local storage 
 append==>div==>img,name,rating ==>container*/

localStorage.setItem("movies",JSON.stringify(movies))
let data=JSON.parse(localStorage.getItem('movies'))||[]

function appendmovies(data){

    let container=document.getElementById("basic");
    container.innerHTML=null;//so that loader will display only for 5 sec
    //container.id='movies';

    data.forEach(function(el){
        let div=document.createElement("div");

        let name=document.createElement("p");
        name.innerText=`Name ${el.name}`;

        let rating=document.createElement("p");
        rating.innerText=`Rating: ${el.rating}`;
    
        let img=document.createElement("img");
        img.id='poster';
        img.src=el.img;


        div.append(img,name,rating);
        container.append(div)
    })
}
 

//appendmovies(data)

                /*for showing the loader we used Promise
                promise==>construct function==>pass parameter as function()==>parameter(resolve,reject)
                resolve==>we store success value;
                reject==>we store err value;
                .then==>finally for displaying our data
                .catch==>to catch error
                
                */


let getme_dataPromise=new Promise(function(resolve,reject){

    setTimeout(function(){
        let movies=data;

        if(data!=null){  // if data in not null then we display our appeded data of movie//5sec loader
            resolve(movies);
        }
        else{
            reject('ERR: Server could not get you data/:')
        }
    },5000);

});
//console.log(getme_dataPromise);

getme_dataPromise.then(function(res){

    appendmovies(res)// 3*3 movie data

})
 
.catch(function(err){
    console.log("err:",err)
})

// for searching from high to low and from low to high
function sortLH(){
    let data=JSON.parse(localStorage.getItem("movies"));
    data=data.sort((a,b)=>a.rating-b.rating);
    appendmovies(data)
}
function sortHL(){
    let data=JSON.parse(localStorage.getItem("movies"));
    data=data.sort((a,b)=>b.rating-a.rating)
    appendmovies(data)
}