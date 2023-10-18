let saveElement = document.getElementById('save-el');

let countElement = document.getElementById('count-el');
let count = 0;

function incrementBtn() {
    console.log('btn was clicked');
    count += 1;
    countElement.innerText = count;
}
// incrementBtn(); - do not invoke function here!!! it has been already invoked in html code in button!

function save() {
    let separator = ' - ';

    let saveMessage = count + ' ' + separator + ' ';

    saveElement.textContent += saveMessage; //textContent is an alternative to innerText, but renders hidden symbols like spaces etc.

    console.log(count);
}
