// função para atualizar o relógio e a data a cada segundo
function updateClock() {
  var now = new Date(); // cria um objeto de data com a hora atual
  var hours = now.getHours(); // obtém a hora
  var minutes = now.getMinutes(); // obtém os minutos
  var seconds = now.getSeconds(); // obtém os segundos
  var day = now.getDate(); // obtém o dia
  var month = now.getMonth() + 1; // obtém o mês (começa em 0)
  var year = now.getFullYear(); // obtém o ano
  // formata a hora, os minutos e os segundos como números de duas casas decimais
  var timeString = hours.toString().padStart(2, '0') + ':' +
                   minutes.toString().padStart(2, '0') + ':' +
                   seconds.toString().padStart(2, '0');
  // formata a data como "dd/mm/aaaa"
  var dateString = day.toString().padStart(2, '0') + '/' +
                    month.toString().padStart(2, '0') + '/' +
                    year.toString();
  // atualiza o texto do relógio e da data
  document.getElementById('clock').textContent = timeString;
  document.getElementById('date').textContent = dateString;
}

// atualiza o relógio e a data a cada segundo
setInterval(updateClock, 1000);
