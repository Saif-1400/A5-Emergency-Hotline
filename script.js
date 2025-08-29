  let likeCount = 0;
const likeDisplay = document.getElementById('likeCount');
const heartButtons = document.querySelectorAll('.heart i');
heartButtons.forEach(span => {
  span.addEventListener('click', function () {
    likeCount++;
    likeDisplay.textContent = likeCount;
  });
});


let copyCount = 0;
document.querySelectorAll(".copyBtn").forEach(function(button) {
  button.addEventListener("click", function() {
    let hotline = this.closest(".card").querySelector(".hotline").innerText;
    navigator.clipboard.writeText(hotline).then(function() {
      copyCount++; 
      document.getElementById("count").innerText = copyCount;
      alert("Hotline copied! You can paste it anywhere.");
    });
  });
});


let coins = 100;
let coinBox = document.querySelector('.coin-display');
coinBox.textContent = coins;
let callHistory = document.getElementById('callHistory');
let callButtons = document.querySelectorAll('.call-button');
document.getElementById('clearHistory').addEventListener('click', function() {
    callHistory.innerHTML = '';
});
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
        let now = new Date();
        let time = now.toLocaleTimeString();
        alert(`Calling ${serviceName} at ${serviceNumber}...`);
        let li = document.createElement('li');
        li.innerHTML = `<span class="time">${time}</span> <span class="info">${serviceName} - ${serviceNumber}</span>`;
        callHistory.appendChild(li);
    });
});
