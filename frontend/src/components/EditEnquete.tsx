import { useForm, useFieldArray} from "react-hook-form";


export default function EditEnquete({aoEnviar}: {aoEnviar: (data: Inputs) => void}) {

type Inputs = {
    titulo: string
    descricao: string
    itens: { valor: string }[] 
    quantVotos: number
    dataLimite: Date
}
const {register, handleSubmit, control, formState: {errors}} = useForm<Inputs>({
    defaultValues: {
        itens: [{valor: ''}]
    }
});

const { fields, append, remove } = useFieldArray({
    control,
    name: 'itens'
})

const salvarEnquete: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    alert('Enquete Salva')
    aoEnviar(data)
} 

    return (
      <>
        <form onSubmit={handleSubmit(salvarEnquete)}>
          <div className="flex flex-col space-y-3 ">
            <div className="flex flex-col">
              <label htmlFor="titulo">Título da Enquete</label>
              <input
                type="text"
                id="titulo"
                className="border rounded border-neutral-700 py-1"
                defaultValue="título"
                {...register("titulo")}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="descricao">Descrição</label>
              <input
                type="text"
                id="descricao"
                className="border rounded border-neutral-700 py-1"
                defaultValue=""
                {...register("descricao")}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="adicionarItens">
                Adicionar itens para votação
              </label>
              {fields.map((field, index) => (
                <div key={field.id} className="flex flex-row gap-2">
                  <input
                    type="text"
                    id="adicionarItens"
                    className="border rounded border-neutral-700 py-1 flex-grow"
                    defaultValue=""
                    {...register(`itens.${index}.valor` as const)}
                  />
                  <button
                    type="button"
                    onClick={() => remove(index)}
                    className="bg-red-500 rounded-md text-white p-1"
                  >
                    Remover
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={() => append({ valor: "" })}
                className="bg-yellow-500 rounded-md border-neutral-700 text-white mt-1 p-1"
              >
                Adicionar Opção
              </button>
            </div>

            <div className="flex flex-col">
              <label htmlFor="quantidadeVotos">
                Quantidade de votos por pessoa
              </label>
              <input
                type="text"
                id="quantidadeVotos"
                className="border rounded border-neutral-700 py-1"
                defaultValue="votos"
                {...register("quantVotos")}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="data">Data limite para votar</label>
              <input
                type="date"
                id="data"
                className="py-1 border border-neutral-700 rounded"
                defaultValue=""
                {...register("dataLimite")}
              />
            </div>

            <button className="bg-green-500 rounded-md text-white py-4 hover:bg-green-600 font-bold">
              Salvar Enquete
            </button>
          </div>
        </form>
      </>
    );
}
