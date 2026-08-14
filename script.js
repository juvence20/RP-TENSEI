document.addEventListener('DOMContentLoaded', () => {
  const btnExport = document.getElementById('btn-export');
  const carteElement = document.getElementById('carte-to-export');
  const imageInput = document.getElementById('image-input');
  const imgPreview = document.getElementById('img-preview');
  const illustrationWrapper = document.getElementById('illustration-wrapper');

  // IMPORTATION DE L'IMAGE
  imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imgPreview.src = event.target.result;
        illustrationWrapper.classList.remove('hidden');
      };
      reader.readAsDataURL(file);
    }
  });

  // EXPORTATION EN JPG SANS COUPURE ET HAUTE RÉSOLUTION
  btnExport.addEventListener('click', () => {
    html2canvas(carteElement, {
      backgroundColor: '#08090c',
      scale: 2, // Haute résolution
      useCORS: true
    }).then(canvas => {
      const link = document.createElement('a');
      link.download = 'Carte_Technique RP-TENSEI.jpg';
      link.href = canvas.toDataURL('image/jpeg', 0.95);
      link.click();
    });
  });
});