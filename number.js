function getRandomInt(num) {
    return Math.ceil(Math.random() * num);
}

function update(numberRange){

    let allTheNumberElements = document.querySelectorAll(".match-one");//
    console.log(allTheNumberElements);
    
    //loop
    for (let k = 0; k < allTheNumberElements.length; k++) {
        const currentElement = allTheNumberElements[k];
        let randomNumber = getRandomInt(numberRange);    
        // console.log("Number",num);
        currentElement.innerHTML = randomNumber;
    }
}

//console.log(getRandomInt())
update(9);
// expected output: a number between 0 and 1