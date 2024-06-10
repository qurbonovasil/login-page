document.querySelector('#text').addEventListener('focusout', myText);
document.querySelector('#password').addEventListener('focusout', myPass);

 document.querySelector('#btn').addEventListener('click',function(){
    myText();
    myPass();
});
function myText(){
    let massage,text;
    let errElement=document.getElementById('text');
    message =document.getElementById('error');
    text = document.getElementById('text').value;

    try{
        if(text==""){
            errElement.classList.remove('valid')
            errElement.classList.add('error');
            throw "empty";
    }
    if(text.length>=16){
        errElement.classList.remove('valid')
        errElement.classList.add('error');
        throw"more than 16"
    }
    if(text.length<=4){
        errElement.classList.remove('valid')
        errElement.classList.add('error');
        throw"less than 4"
    }
    if(text.length>0){
        errElement.classList.remove('error');
       errElement.classList.add('valid');
       message.innerHTML="";
    }
    }catch(e){
        message.innerHTML=e;
    }
}


function myPass(){
    let massage,text;
    let errElement=document.getElementById('password');
    message =document.getElementById('error2');
    text = document.getElementById('password').value;

    try{
        if(text==""){
            errElement.classList.remove('valid')
            errElement.classList.add('error2');
            throw "empty";
    }
    if(text.length>4){
        errElement.classList.remove('error2');
       errElement.classList.add('valid');
       message.innerHTML="";
    }
    if(text.length<16){
        errElement.classList.remove('error2');
       errElement.classList.add('valid');
       message.innerHTML="";
    }
    }catch(e){
        message.innerHTML=e;
    }
}