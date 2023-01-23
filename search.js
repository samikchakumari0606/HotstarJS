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




async function searchMovies(){
  try{
    let query=document.getElementById("query").value;
    console.log("query",query)
    let res=await fetch(`http://www.omdbapi.com/?apikey=fcbdda70&s=${query}`)
    let data=await res.json();
    //var actual_data=data.Search;
    appendmovies(data.Search)
    //console.log("actual_data",actual_data)
    console.log("data",data);
  }
  catch(err){
    console.log("err",err)
  }
   
}

function appendmovies(data){
    console.log(data);
    if(data==undefined){
        return false
    }
    let container=document.getElementById("container");
    container.innerHTML=null;

    data.forEach(function(el){
        let div=document.createElement("div");

        let name=document.createElement("p");
        name.innerText=`Name ${el.Title}`;

        let rating=document.createElement("p");
        rating.innerText=`Rating ${el.Year}`;

        let img=document.createElement("img");
        img.id='poster';
        img.src=el.Poster;

        div.append(img,name,rating)
        container.append(div)
    })
}

let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }

   id= setTimeout(function(){

        func()
    },delay)
}




