const showBtn = document.getElementById('showHaircutsBtn');
const suggestionsContainer = document.getElementById('haircutSuggestions');
const barberCard = document.getElementById('barberCard');
const barberCardContent = document.getElementById('barberCardContent');
const printBtn = document.getElementById('printBarberCardBtn');

showBtn.addEventListener('click', () => {
  const suggestions = [
    { name: 'Crew Cut', img: 'https://via.placeholder.com/150' },
    { name: 'Fade', img: 'https://via.placeholder.com/150' },
    { name: 'Pompadour', img: 'https://via.placeholder.com/150' }
  ];

  suggestionsContainer.innerHTML = '';
  suggestions.forEach(s => {
    const li = document.createElement('li');
    li.className = 'flex items-center gap-4 border rounded p-3 mb-2 bg-white shadow';
    li.innerHTML = `<img src="${s.img}" alt="${s.name}" class="w-20 h-20 object-cover rounded" />` +
      `<span class="text-lg font-medium">${s.name}</span>`;
    suggestionsContainer.appendChild(li);
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
