

document.getElementById("post_btn").addEventListener("click",function(){

 let x= document.getElementById("input_id");                                                            ;

 let postText=x.value;


 let containerP= document.getElementById('hello');

 console.log(containerP)
 let newP= document.createElement("p");



 newP.innerText=postText;

containerP.appendChild(newP)

x.value="";

})




document.getElementById("profile_btn").addEventListener("click",function(){



   let Name= document.getElementById("profileName");

   let pName=Name.value;

   let myname= document.getElementById("profileText");

   myname.innerText=pName;


Name.value="";
    
})





// delete btn


document.getElementById("delete_input").addEventListener("keyup",function(event){

 let text=event.target.value;
 let dBtn=    document.getElementById("delete_btn");
 dBtn.addEventListener("click",function(){
     document.getElementById("delete_input").value='';
 })
 if(text ==='delete'){


dBtn.removeAttribute("disabled");

 }else{
    dBtn.setAttribute("disabled",true);
 
 }




 
})





// list item



let x= document.getElementsByClassName('item'); 



// for(let item of x){

//  item.addEventListener("click",function(event){

    
// console.log(event.target.parentNode.removeChild(event.target));

//  })

// }


document.getElementById("list-item").addEventListener("click",function(event){

   event.target.parentNode.removeChild(event.target);
})

document.getElementById("add_item").addEventListener("click",function(){

   let list= document.getElementById("list-item");

  let li= document.createElement("li");
li.innerText="added new brands shoe";


list.appendChild(li);
})