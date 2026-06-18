document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('img').forEach(function (img) {
      img.addEventListener('error', function () {
        img.style.display = 'none';
        var fallback = document.createElement('span');
        fallback.className = 'image-fallback';
        fallback.textContent = img.getAttribute('alt') || 'Imagem não encontrada';
        img.insertAdjacentElement('afterend', fallback);
      }, { once: true });
    });
});