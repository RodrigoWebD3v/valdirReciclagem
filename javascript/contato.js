document.addEventListener('DOMContentLoaded', function() {
    const copyBtns = document.querySelectorAll('.copy-btn');

    copyBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const originalSrc = btn.querySelector('img').getAttribute('src');
            const newSrc = 'img/copyPasteSelected.svg'; // Caminho da nova imagem

            // Altera o src da imagem para a nova imagem
            btn.querySelector('img').setAttribute('src', newSrc);

            // Copia o texto para a área de transferência
            const textToCopy = btn.getAttribute('data-text');
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    console.log('Texto copiado com sucesso:', textToCopy);

                    // Restaura o src original após alguns segundos
                    setTimeout(() => {
                        btn.querySelector('img').setAttribute('src', originalSrc);
                    }, 1500);
                })
                .catch(err => {
                    console.error('Erro ao copiar texto:', err);
                    alert('Erro ao copiar texto. Por favor, utilize Ctrl+C para copiar.');

                    // Em caso de erro, restaura o src original imediatamente
                    btn.querySelector('img').setAttribute('src', originalSrc);
                });
        });
    });
});