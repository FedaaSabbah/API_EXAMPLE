var query=new URLSearchParams(window.location.search);//without ?(id=12342)
var currentId=query.get('id');
var recData;
var recIngr=[];
var listt=document.getElementById('detalis_list');
var detalis_img=document.getElementById('detalis_img');



var HttpRequst=new XMLHttpRequest();
HttpRequst.open("GET",`https://forkify-api.herokuapp.com/api/get?rId=${currentId}`);
HttpRequst.send();

HttpRequst.addEventListener("readystatechange",function(){
    if(HttpRequst.readyState==4){
        recData=JSON.parse(HttpRequst.response).recipe;
        recIngr=recData.ingredients;
        detalis_img.src=recData.image_url;
        displayData();

    }

    });

    function displayData(){
     
        var trs="";
        for(var i=0;i<recIngr.length;i++){
            trs+=` <li> ${recIngr[i]}</li>`;

        }
        listt.innerHTML=trs;


    }




