function inlineAllSVGs() {
  const images = document.querySelectorAll('img[src$=".svg"]');

  images.forEach(img => {
    const imgURL = img.getAttribute('src');

    fetch(imgURL)
      .then(response => response.text())
      .then(svgText => {
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
        const svg = svgDoc.querySelector('svg');

        if (svg) {
          if (img.id) svg.id = img.id;
          if (img.className) svg.classList = img.classList;

          svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');

          img.replaceWith(svg);
        }
      })
      .catch(err => console.error('Ошибка загрузки SVG:', err));
  });
}

// Вызываем после загрузки DOM
document.addEventListener('DOMContentLoaded', inlineAllSVGs);