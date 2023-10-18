// document.getElementById('count-el').innerText = 5;

let count = 0;

let countEl = document.getElementById('count-el');

console.log(countEl);

function incrementBtn() {
    console.log('btn was clicked');
    count++;
    console.log(count);
    countEl.innerText = count;
}
// incrementBtn(); - do not invoke fuction here!!! it has been already invoked in html code in button!
 