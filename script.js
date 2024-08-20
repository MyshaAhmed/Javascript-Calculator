let input=document.getElementById('inputBox');
let buttons=document.querySelectorAll('button');

let string="";
let arr=Array.from(buttons); //this will converts an array of all button obj
arr.forEach(button =>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='=')
        {
            string=eval(string); // will auto evaluate the mathematical calculations 
            input.value=string;
        }
        else if(e.target.innerHTML=='AC')
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL')
        {
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else
        {
            string +=e.target.innerHTML;
            input.value=string; 
        }
        
    })
})