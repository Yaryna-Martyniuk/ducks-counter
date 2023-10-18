let saveElement = document.getElementById('save-el');

let countElement = document.getElementById('count-el');
let count = 0;

function incrementBtn() {
    console.log('btn was clicked');
    count += 1;
    // countElement.innerText = count;
    countElement.textContent = count;
}
// incrementBtn(); - do not invoke function here!!! it has been already invoked in html code in button!

function save() {
    let separator = ' - ';

    let saveMessage = count + ' ' + separator + ' ';

    saveElement.textContent += saveMessage; //textContent is an alternative to innerText, but renders hidden symbols like spaces etc.Also innerText trigger the reflow every tiem to check new styles appears so it is better to use textContent  instead

    console.log(count);
    count = 0;
    countElement.textContent=count;
}
