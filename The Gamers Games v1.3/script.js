document.getElementById('downloadBtn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'Download/The Gamers Games v1.3.zip';
    link.download = 'The Gamers Games v1.3 Package.zip'; 
    link.click();
});
