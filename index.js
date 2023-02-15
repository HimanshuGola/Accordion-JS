const quesContList = document.querySelectorAll(".question-container");

// Functions

function openContainer(accItem, quesCont){
    const quesChildren = quesCont.children;
    quesChildren[0].classList.add("heading-transform-active");
    quesChildren[1].classList.add("arrow-transform-active");
    quesCont.nextElementSibling.classList.add("container-transform-active");
    accItem.setAttribute("data-expanded", true);
    closeRest(accItem.getAttribute("data-index"));
}

function closeContainer(accItem, quesCont){
    const quesChildren = quesCont.children;
    accItem.setAttribute("data-expanded", false);
    quesCont.nextElementSibling.classList.remove("container-transform-active");
    quesChildren[0].classList.remove("heading-transform-active");
    quesChildren[1].classList.remove("arrow-transform-active");
}

function closeRest(index){
    Array.from(quesContList).forEach((quesCont)=>{
        const accItem = quesCont.parentNode;
        if ((accItem.getAttribute("data-index") !== index) && (accItem.getAttribute("data-expanded") === "true")){
            closeContainer(accItem, quesCont)
        }
    })
}

// Event Listeners

Array.from(quesContList).forEach((questionCont)=>{
    questionCont.addEventListener("click", ()=>{
        const accItem = questionCont.parentNode;
        const ifExpanded = accItem.getAttribute("data-expanded");
        if (ifExpanded === "false"){
            openContainer(accItem, questionCont)
        }
        else{
            closeContainer(accItem, questionCont)
        }
    })
})