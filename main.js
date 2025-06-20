const showBtn = document.getElementById('showHaircutsBtn');
const suggestionsContainer = document.getElementById('haircutSuggestions');
const barberCard = document.getElementById('barberCard');
const barberCardContent = document.getElementById('barberCardContent');
const printBtn = document.getElementById('printBarberCardBtn');

showBtn.addEventListener('click', () => {
  const suggestions = [
    { name: 'Crew Cut' },
    { name: 'Fade' },
    { name: 'Pompadour' }
  ];

  suggestionsContainer.innerHTML = '';
  suggestions.forEach(s => {
    const div = document.createElement('div');
    div.className = 'flex items-center gap-4 p-3 rounded shadow bg-white';
    const imgUrl = `https://via.placeholder.com/100?text=${encodeURIComponent(s.name)}`;
    div.innerHTML = `<img src="${imgUrl}" alt="${s.name}" class="w-16 h-16 object-cover rounded"><span>${s.name}</span>`;
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
        <div class="border border-gray-300 p-4 shadow bg-white rounded max-w-md mx-auto">
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
