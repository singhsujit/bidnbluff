// Sample items data
const items = [
  {
    id: 1,
    name: "Miracle Productivity Pen",
    desc: "Used by a Nobel Prize winner. Scientifically proven to improve focus.",
    image: "https://via.placeholder.com/200?text=Pen",
    trueCost: 4
  },
  {
    id: 2,
    name: "CEO's Lucky Stress Ball",
    desc: "Used during a $1B deal negotiation. May contain residual leadership energy.",
    image: "https://via.placeholder.com/200?text=Stress+Ball",
    trueCost: 1
  }
];

// Shared state
let currentItemIndex = 0;
let bids = [];
let timer = 120; // 2 minutes

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('professor')) {
    updateProfessorUI();
  } else {
    loadItem(currentItemIndex);
    setInterval(updateTimer, 1000);
  }
});

// Student functions
function loadItem(index) {
  const item = items[index];
  document.getElementById('item-image').src = item.image;
  document.getElementById('item-title').textContent = item.name;
  document.getElementById('item-desc').textContent = item.desc;
}

function placeBid() {
  const amount = parseInt(document.getElementById('bid-amount').value);
  if (amount) {
    bids.push(amount);
    updateBidHistory();
    // In a real app, send to Firebase here
  }
}

// Professor functions
function startAuction() {
  alert("Auction started! Students can now bid.");
}

function revealCost() {
  document.getElementById('true-cost').textContent = 
    items[currentItemIndex].trueCost;
}

// Shared UI updates
function updateBidHistory() {
  const list = document.getElementById('bids-list');
  list.innerHTML = bids.map(bid => `<li>€${bid}</li>`).join('');
}

function updateTimer() {
  timer--;
  document.getElementById('timer').textContent = `Time left: ${Math.floor(timer/60)}:${timer%60}`;
}
