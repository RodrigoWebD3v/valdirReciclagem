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


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('meuFormulario');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Preencha os campos do formulário aqui
        const toName = document.getElementById('name').value;
        const toEmail = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const materials = getSelectedMaterials(); // Função para obter materiais selecionados

        emailjs.init('71r0raaV8zfdlPp7T');

        // Parâmetros para enviar o e-mail
        const params = {
            to_name: toName,
            to_email: toEmail,
            from_name: 'VC Reciclagem', // Nome da empresa
            message: message,
            materials: materials
        };

        // Envie o e-mail usando EmailJS
        emailjs.send('service_0tehlml', 'template_bqp9sjc', params)
            .then(function(response) {
                // Limpa os campos do formulário ou adicione uma mensagem de sucesso aqui
                form.reset(); // Limpa o formulário após o envio
            }, function(error) {
                console.error('Erro ao enviar e-mail:', error);
                // Adicione uma mensagem de erro aqui, se necessário
            });
    });

    // Função para obter os materiais selecionados
    function getSelectedMaterials() {
        const checkboxes = document.querySelectorAll('input[name="material"]:checked');
        const selectedMaterials = [];
        checkboxes.forEach(function(checkbox) {
            selectedMaterials.push(checkbox.value);
        });
        return selectedMaterials.join(', '); // Retorna os materiais como uma string separada por vírgula
    }
});
