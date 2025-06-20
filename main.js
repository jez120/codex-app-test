const showBtn = document.getElementById('showHaircutsBtn');
const suggestionsContainer = document.getElementById('haircutSuggestions');
const barberCard = document.getElementById('barberCard');
const barberCardContent = document.getElementById('barberCardContent');
const printBtn = document.getElementById('printBarberCardBtn');

const haircutImages = {
  "Crew Cut": "https://via.placeholder.com/100?text=Crew+Cut",
  "Fade": "https://via.placeholder.com/100?text=Fade",
  "Pompadour": "https://via.placeholder.com/100?text=Pompadour"
};

showBtn.addEventListener('click', () => {
  const suggestions = Object.keys(haircutImages).map(name => ({
    name,
    img: haircutImages[name]
  }));

  suggestionsContainer.innerHTML = '';
  suggestions.forEach(s => {
    const div = document.createElement('div');
    div.className = 'flex items-center space-x-2';
    div.innerHTML = `<img src="${s.img}" alt="${s.name}" class="w-16 h-16 object-cover rounded"><span>${s.name}</span>`;
    suggestionsContainer.appendChild(div);
  });

  barberCardContent.innerHTML = suggestionsContainer.innerHTML;
  barberCard.classList.remove('hidden');
  printBtn.classList.remove('hidden');
});

printBtn.addEventListener('click', () => {
  const card = document.getElementById('barberCard').innerHTML;
  const w = window.open('', '', 'width=600,height=600');
  w.document.write(`
    <html>
      <head>
        <title>Barber Card</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body class="p-4">
        <div class="border border-gray-300 p-4 shadow">
          ${card}
        </div>
      </body>
    </html>
  `);
  w.document.close();
  w.focus();
  w.print();
  w.close();
});
