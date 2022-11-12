
/*Display all the emojiis*/


function  displayEmoji(){
    let emoji = document.querySelector(".emoji");
    emoji.innerHTML = "["+ arritem +"]";
    emoji.classList.add("animatedemoji");
}



/* Adding the emojis in the array */

 function pushfunction(emojis,arritem) {
    let temp = emojis[Math.floor(Math.random() * emojis.length)];
    if (!(arritem.includes(temp))) {
        arritem.push(temp);
    }
    if (arritem.length == emojis.length) {
        emoji.innerHTML = "No emojis are there";
        return;
    }
    displayEmoji(arritem);
    
}


/*Adding the emojis in the array in the first position*/

function unshiftfunction(emojis,arritem) {
    let temp = emojis[Math.floor(Math.random() * emojis.length)];
    if (!(arritem.includes(temp))) {
        arritem.unshift(temp);
    }
    displayEmoji(arritem);
}



/*Insert the emojis in between of the array*/

function insertfunction(emojis,arritem) {
    let inputvalue = document.getElementById("quantityadd");
    let inputindex = inputvalue.value;
    let temp = emojis[Math.floor(Math.random() * emojis.length)];

    if (!(arritem.includes(temp))) {
        arritem.splice(inputindex, 0, temp);
    }
    displayEmoji(arritem);
}



/*Remove the emojis from the array*/


function popfunction(emojis,arritem) {
    let item = arritem.pop();
    emojis.push(item);
    displayEmoji(arritem);

}

/*Remove the emojis from the first position of the array*/

function shiftfunction(emojis,arritem) {
    let item = arritem.shift();
    emojis.push(item);
    displayEmoji(arritem);
}




/*Remove the emojis in between of the array*/

function removefunction(arritem) {
    let inputvalue = document.getElementById("quantityremove");
    let inputindex = inputvalue.value;
    arritem.splice(inputindex, 1);
    displayEmoji(arritem);
}

// module.exports=pushfunction