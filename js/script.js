var httpRequest= new XMLHttpRequest();
httpRequest.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza");
httpRequest.send();

var posts=[];

var htmlele=document.getElementById("postRow");

httpRequest.addEventListener('readystatechange',function(){
    if(httpRequest.readyState==4 && httpRequest.status==200){
     posts= JSON.parse(httpRequest.response).recipes;
     console.log(JSON.parse(httpRequest.response).recipes);
     displaydata();

    }

});

function displaydata(){
  var trs="";
  for(var i=0;i<posts.length;i++){
      trs+=`
      <div class="col-md-4">
      <img src="${posts[i].image_url}" class="img-fluid">
      <h2>${posts[i].title}</h2>
      <p>${posts[i].publisher}</p>
      <a  class="btn btn-secondary" href="${posts[i].source_url}">source</a>
      <a  class="btn btn-danger" href='details.html?id=${posts[i].recipe_id}'>details</a>


       </div> `;
  }
  htmlele.innerHTML=trs;
}
