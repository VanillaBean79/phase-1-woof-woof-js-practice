document.addEventListener("DOMContentLoaded", (e)=>{
    // console.log('You/re doing great Ruben!')

    fetch('http://localhost:3000/pups')

    .then(res => res.json())
    .then(data => {
        
        data.forEach(dogObject =>{
        const dogData = document.getElementById('dog-bar')
        const span = document.createElement('span')
        span.className = 'Dogs'
        // console.log(span)
        span.innerText = dogObject.name
        // console.log(dogObject)
        dogData.append(span)

        span.addEventListener('click',(e)=>{
            // console.log("Jam!")

            const dogInfo = document.getElementById('dog-info')
            const dogImg =  document.createElement('img')
            dogImg.className = 'Dog-img' 
            dogImg.src = dogObject.image
            // console.log(dogImg)
            dogInfo.append(dogImg)

            const h2 = document.createElement('h2')
            h2.className = 'name'
            h2.innerText = dogObject.name
            dogInfo.append(h2)

            const button = document.createElement('button')
            const goodDog = document.getElementById('isGoodDog')
            if(dogObject.isGoodDog === true){
                button.innerText = 'Good Dog!'
            }else{
                button.innerText = 'Bad Dog!'
            }
            dogInfo.append(button)
         
    
console.log(button)
button.addEventListener('click', (e)=>{
    if(dogObject.isGoodDog === true){
        button.innerText = 'Bad Dog!'

        fetch(`http://localhost:3000/pups/${dogObject.id}`,{
            method:'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
          body: JSON.stringify(dogObject)  
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }else{
        button.innerText = 'Good Dog!'
    }
})
        
           
            })
        })
     })
    .catch(error => console.error(error))
})

