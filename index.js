let saveElement = document.getElementById('save-el');

let countElement = document.getElementById('count-el');
let count = 0;

function incrementBtn() {
    console.log('btn was clicked'); //to check if the function works 
    count += 1;
    // countElement.innerText = count; 
    countElement.textContent = count;  //textContent is an alternative to innerText but renders hidden symbols like spaces etc. Also, innerText triggers the reflow every time new styles appear so it is better to use textContent  instead
}
// incrementBtn(); - do not invoke function here!!! it has already been invoked in the HTML code in the button tag!

function save() {
    let separator = ' - ';

    let saveMessage = count + ' ' + separator + ' ';

    saveElement.textContent += saveMessage;

    console.log(count);
    count = 0;
    countElement.textContent=count;
}
