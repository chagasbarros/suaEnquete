import {useState} from 'react'
import EditEnquete from './EditEnquete';
import HistoryEnquete from './HistoryEnquete';


const CriarEnquete = () => {

    const [enquete, setEnquete] = useState('')
    const [dadosEnquete, setDadosEnquete] = useState(null)

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

        {enquete == 'enquete' &&  <EditEnquete aoEnviar={(data) =>{
          setDadosEnquete(data);
          setEnquete('')
        } }/>}
        
        {enquete == 'historico' && <HistoryEnquete dados={dadosEnquete}/>}
          
        </div>
      </div>
    </>
  );
};

export default CriarEnquete;
