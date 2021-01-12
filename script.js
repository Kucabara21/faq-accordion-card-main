const question =  document.querySelectorAll('.question');
console.log(question);
question.forEach(drop => {
    drop.addEventListener('click', function(){
        if(this.parentNode.classList.contains("active")){
            this.parentNode.classList.toggle("active");
        }
        else{question.forEach(item =>{
            item.parentNode.classList.remove("active");  
        })
            this.parentNode.classList.add("active");
        }
        
        
    })
})