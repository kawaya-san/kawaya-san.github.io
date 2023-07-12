function getRandomImage(folder, totalImages) {
  const randomIndex = Math.floor(Math.random() * totalImages) + 1;
  return `assets/${folder}/image${randomIndex}.jpg`;
}

function roll(category, folder, totalImages) {
  const resultDiv = document.getElementById('result');
  const waifuImage = document.getElementById('waifu-image');

  const imageUrl = getRandomImage(folder, totalImages);
  waifuImage.src = imageUrl;

  resultDiv.style.display = 'block';

  // Enlarge image on hover
  waifuImage.addEventListener('mouseenter', () => {
    waifuImage.style.transform = 'scale(1.1)';
    waifuImage.style.transition = 'transform 0.3s ease';
  });

  // Restore image size when mouse leaves
  waifuImage.addEventListener('mouseleave', () => {
    waifuImage.style.transform = 'scale(1)';
  });

  // Toggle full size image on click
  waifuImage.addEventListener('click', () => {
    waifuImage.classList.toggle('full-size');
  });
}

const rollIRLButton = document.getElementById('roll-irl');
rollIRLButton.addEventListener('click', () => roll('IRL', 'sent2', 75));

const rollCosplayButton = document.getElementById('roll-cosplay');
rollCosplayButton.addEventListener('click', () => roll('Cosplay', 'sent', 60));

const rollGenericButton = document.getElementById('roll-generic');
rollGenericButton.addEventListener('click', () => roll('Generic', 'sent3', 94));
