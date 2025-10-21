
type ProdutosProps = { 
    _id: number,
    nome: string,
    preco: number,
    descricao:string, 
    urlfoto:string
}

function Estudante({_id, nome, preco, descricao, urlfoto}: ProdutosProps){

    return <>

        <div className='w-30 h-40 bg-blue-600' key={_id}>
            <img src={urlfoto} alt=""></img>
            <h2>{nome}</h2>
            <p>preço: {preco}</p>
            <p>Descrição: {descricao}</p>
        </div>
    
    </>

}

export default Estudante;