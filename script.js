  let likeCount = 0;
const likeDisplay = document.getElementById('likeCount');
const heartButtons = document.querySelectorAll('.heart i');

heartButtons.forEach(span => {
  span.addEventListener('click', () => {
    likeCount++;
    likeDisplay.textContent = likeCount;
  });
});
// alert('pleas Check your script dox')

let coins = 100;
let coinBox = document.querySelector('.coin-display');
coinBox.textContent = coins;

let callHistory = document.getElementById('callHistory');

let callButtons = document.querySelectorAll('.call-button');

callButtons.forEach(btn => {
    btn.addEventListener('click', function(){
        if(coins < 20){
            alert('Not enough to make a call!');
            return;
        }

        let card = btn.closest(".card");
        let serviceName = card.querySelector('.service-name').textContent;
        let serviceNumber = card.querySelector('.service-number').textContent;

        coins -= 20;
        coinBox.textContent = coins;

        alert(`Calling ${serviceName} at ${serviceNumber}...`);

        let li = document.createElement('li');
        li.textContent = `${serviceName} - ${serviceNumber}`;
        callHistory.appendChild(li);

        document.getElementById('clearHistory').addEventListener('click', () =>{
            callHistory.innerHTML = '';
        })
    })
})