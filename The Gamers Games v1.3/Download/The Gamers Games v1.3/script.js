document.getElementById('downloadBtn').addEventListener('click', function() {
    var link = document.createElement('a');
    link.href = 'Assets/The Gamers Games v1.3.zip'; // Path to your file
    link.download = 'The Gamers Games v1.3.zip'; // Suggested file name for download
    link.click();
});
