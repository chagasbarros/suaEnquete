
export default function HistoryEnquete ({data}) {
    console.log(data)
    if(!data) return <p className="text-center text-2xl">Nenhuma enquete criada ainda.</p>
    return(
        <>
        <h1 className="text-3xl text-center">Histórico de Enquetes</h1>
        <p>Título:{data.titulo}</p>
        <p>Descrição:{data.descricao}</p>
        <p>Itens para votar:</p>
        <p>Quantidade de Votos:</p>
        <p>Data Limite para votar:</p>
        </>
    )
}