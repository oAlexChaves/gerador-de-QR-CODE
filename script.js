function GerarQR(){
    var conteudo = document.getElementById('linkQR').value;
    var GoogleCharts = 'https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=';
    var imagemQRCode = GoogleCharts + conteudo;
    document.getElementById('imageQRCode').src = imagemQRCode;
}