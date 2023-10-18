let countElement = document.getElementById('count-el');
let count = 0;

function incrementBtn() {
    console.log('btn was clicked');
    count = count + 1;
    countElement.innerText = count;
}
// incrementBtn(); - do not invoke function here!!! it has been already invoked in html code in button!

function save() {
    console.log(count);
}
