import {useState} from 'react'
const CriarEnquete = () => {

    const [enquete, setEnquete] = useState('')
    console.log(enquete)

  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="flex flex-col space-y-2">
          <p className="text-6xl mb-3">Sua enquete</p>
          <div className="flex flex-row space-x-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md shadow" onClick={()=> {setEnquete('enquete')}}>
              Criar enquete
            </button>
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-2 rounded-md shadow" onClick={() => {setEnquete('historico')}}>
              Ver histórico de enquetes
            </button>
          </div>

        {enquete == 'enquete' && (
             <div className="flex flex-col space-y-3 ">
            <div className="flex flex-col">
              <label htmlFor="titulo">Título da Enquete</label>
              <input
                type="text"
                name="titulo"
                id="titulo"
                className="border rounded border-neutral-700 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="descricao">Descrição</label>
              <input
                type="text"
                name="descricao"
                id="descricao"
                className="border rounded border-neutral-700 py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="adicionarItens">
                Adicionar itens para votação
              </label>
              <input
                type="text"
                name="adicionarItens"
                id="adicionarItens"
                className="border rounded border-neutral-700 py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="quantidadeVotos">
                Quantidade de votos por pessoa
              </label>
              <input
                type="text"
                name="quantidadeVotos"
                id="quantidadeVotos"
                className="border rounded border-neutral-700 py-1"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="data">Data limite para votar</label>
              <input
                type="date"
                name="data"
                id="data"
                className="py-1 border border-neutral-700 rounded"
              />
            </div>

            <button className="bg-green-500 rounded-md text-white py-4 hover:bg-green-600 font-bold">
              Salvar Enquete
            </button>
          </div>
        )}
        
        {enquete == 'historico' && (
            <div>
            <p className="text-center">Não há historico de enquetes</p>
          </div>
        )}
          
        </div>
      </div>
    </>
  );
};

export default CriarEnquete;
