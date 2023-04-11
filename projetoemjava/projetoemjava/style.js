function calcular() {
    var quantidade = document.getElementById("quantidade").value;
    var preco = document.getElementById("preco").value;
    var subtotal = quantidade * preco;
    var imposto = subtotal * 0.1;
    var total = subtotal + imposto;
    document.getElementById("subtotal").value = subtotal.toFixed(2);
    document.getElementById("imposto").value = imposto.toFixed(2);
    document.getElementById("total").value = total.toFixed(2);
  }
  