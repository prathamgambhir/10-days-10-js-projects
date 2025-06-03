const boxes = document.querySelectorAll('.boxes')
const boxContainer = document.querySelector('.box-container')
const body = document.querySelector('body')

let intervalID; //for rgb 

function replacemessage(color){
    let newmsg = document.createElement('h2');
    newmsg.className = 'message';
    newmsg.appendChild(document.createTextNode(`Your Background color changed to ${color}!!!`));
    document.querySelector('.message').replaceWith(newmsg);
}

boxes.forEach((button)=>(
    button.addEventListener('click', function(event){
        if(event.target.id === 'white'){
            body.style.backgroundColor = event.target.id
            boxContainer.style.border = `2px solid ${event.target.id}`
            body.style.color = 'black'           
            replacemessage('white');
            stopRgb()
        }else if (event.target.id === 'blue'){
            body.style.backgroundColor = event.target.id
            boxContainer.style.border = `2px solid ${event.target.id}`
            body.style.color = 'white'           
            replacemessage('Blue');
            stopRgb()
        }else if (event.target.id === 'green'){
            body.style.backgroundColor = event.target.id
            boxContainer.style.border = `2px solid ${event.target.id}`
            body.style.color = 'white'           
            replacemessage('Green');
            stopRgb()
        }else if (event.target.id === 'orange'){
            body.style.backgroundColor = event.target.id
            boxContainer.style.border = `2px solid ${event.target.id}`
            body.style.color = 'white'           
            replacemessage('Orange');
            stopRgb()
        }else if (event.target.id === 'red'){
            body.style.backgroundColor = event.target.id
            boxContainer.style.border = `2px solid ${event.target.id}`
            body.style.color = 'white'           
            replacemessage('Red');
            stopRgb()
        }else if (event.target.id === 'rgb'){
            if(!intervalID){
                intervalID = setInterval((rgbColors),600);
                replacemessage("RGB")
            }
        }else{
            body.style.backgroundColor = "rgb(151, 52, 151)"
            boxContainer.style.border = `2px solid rgb(151, 52, 151)`
            body.style.color = 'white'           
            replacemessage('Violet');
            stopRgb()
        }
    })
))

const randomColor = function(){
    let hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i<6; i++){
        color+= hex[(Math.floor(Math.random()*16))]
    }
    return color
}

function rgbColors(){
    body.style.backgroundColor = randomColor()
    boxContainer.style.border = `2px solid ${randomColor()}`
}

function stopRgb(){
    clearInterval(intervalID);
    intervalID = null;
}

