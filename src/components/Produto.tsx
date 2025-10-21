import api from "../api/api";

type ProdutosProps = {
    _id: string,
    nome: string,
    preco: number,
    descricao: string,
    urlfoto: string
}

function Produto({ _id, nome, preco, descricao, urlfoto }: ProdutosProps) {

    async function adicionarCarrinho(produtoId: String) {
        try {

            const res = await api.post('/produtos', { produtoId, quantidade: 1 })


        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='w-30 h-40 bg-blue-600'>
            <img src={urlfoto} alt=""></img>
            <h2>{nome}</h2>
            <p>preço: {preco}</p>
            <p>Descrição: {descricao}</p>
            <button onClick={() => adicionarCarrinho(_id)}></button>
        </div>
    )

}

export default Produto;