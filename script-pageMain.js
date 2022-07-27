const Event = document.querySelector("#email");
const submitBtn = document.querySelector("#btn");
const Result = document.querySelector("#result");
const errorImg = document.querySelector(".zdj");
const valid = "@"

const EventHappen = () =>{
    if(Event.value.match(valid))
    {
        return 0;

    }else{
        Result.textContent = "Please provide a valid email";
        errorImg.style.display = "inline";

    }
    
}
submitBtn.addEventListener("click",EventHappen);