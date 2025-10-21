import { useEffect, useState } from 'react';
import Produto from './Produto';
import api from '../api/api';

type ProdutoType = {
  _id: string,
  nome: string,
  preco: number,
  descricao: string,
  urlfoto: string

}


function ListarProdutos(){
    
    const token = localStorage.getItem("token")
    useEffect(()=>{

    })
    const [produtos, setProdutos] = useState<ProdutoType[]>([])

    useEffect(()=>{
        async function buscarProdutos() {

        try {

            const res = await api.get("/produtos")
            const data = res.data;

            setProdutos(data);

            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
        }

        buscarProdutos()

    }, []);

    async function handleSubmit(e:React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        
        const formData = new FormData(e?.currentTarget);
        const nome = formData.get("nome")
        const preco = formData.get("preco")
        const descricao = formData.get("descricao")
        const urlfoto = formData.get("urlfoto")

        const produto = {nome, preco, descricao, urlfoto}


        try {

            const res = await api.post('/produtos', produto)
            setProdutos([...produtos, res.data])
            
        } catch (error) {
            console.log(error)
        }
        

        

    }

    return (
        <>
        <main className="w-full">

        <div> 
            <h1>Cadastro de produto</h1>
            <form onSubmit={handleSubmit}>

            <input type="text" placeholder='nome' name='nome'/>
            <input type='number' placeholder='preco' name='preco' />
            <input type="text" placeholder='descrição' name='descricao'/>
            <input type="text" placeholder='URL foto' name='urlfoto'/>
            
            <button type='submit'>Cadastrar</button>
            
            </form>
        </div>
           

            <h1>Lista de estudantes</h1>

            <div className="produtos">
                {
                    produtos.map((produto)=>{
                        return<>
                            <Produto _id={Number(produto._id)} nome={produto.nome} preco={produto.preco} descricao={produto.descricao} urlfoto={produto.urlfoto}/>
                        </>
                    })
                }

            </div>
        </main>
        

        </>
    )
}

export default ListarProdutos