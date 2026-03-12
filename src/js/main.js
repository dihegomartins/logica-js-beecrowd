const btnResolver = document.getElementById('solve');

// Objeto com vírgulas e nomes exatos das pastas
const categorias = {
    "1001": "01-Iniciante",
    "1002": "01-Iniciante",
    "1189": "01-Iniciante",
    "1190": "01-Iniciante"
};

btnResolver.addEventListener('click', async () => {

    const id = document.getElementById('problem').value.trim();
    const categoria = categorias[id];

    console.log("Tentando resolver o ID:", id);

    if (!categoria) {
        alert(`O problema ${id} não está mapeado no categorias.`);
        return;
    }

    try {
        const caminho = `../../exercicios/${categoria}/${id}.js`;
        const modulo = await import(caminho);
        
        const inputDados = document.getElementById('input').value;
        const dadosRaw = inputDados.split('\n');
        
        const resultado = modulo.problem(dadosRaw);
        
        if (resultado !== undefined) {
            const outputDiv = document.getElementById('output');

            outputDiv.textContent = resultado;
        }
    } catch (error) {
        console.error("Erro ao carregar o arquivo:", error);
        alert("Erro: Arquivo não encontrado ou erro no código do exercício.");
    }
});