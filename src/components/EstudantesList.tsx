import { useEffect, useState } from 'react';
import Estudante from './Estudante';

type EstudanteType = {
  _id: string,
  nome: string,
  idade:number
}


function ListarEstudante(){
    
    const [Estudantes, setEstudante] = useState<EstudanteType[]>([])
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState(0);
    

    useEffect(()=>{



        async function buscarEstudantes() {

        try {

            const res = await fetch("/api/usuarios", {
                headers:{
                    'Authorization': `Bearer ${}`
                }
            });

            const data = await res.json();

            setEstudante(data);

            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
        }

        buscarEstudantes()

    }, []);

    async function handleSubmit(e:React.FormEvent){
        e.preventDefault()
        const estudante = {nome, idade}

        try {

            const res = await fetch("/api/estudantes",{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }, 
                body: JSON.stringify(estudante)
            })
            
        } catch (error) {
            console.log(error)
        }
        

        

    }

    return (
        <>
        <main className="w-full">

        <div> 
            <h1>Cdastro de estudante</h1>
            <form onSubmit={handleSubmit}>
            <input type="text" placeholder='nome' value={nome} onChange={(e)=> setNome(e.target.value)}/>
            <input type="text" placeholder='idade' value={idade} onChange={(e)=> setIdade(Number(e.target.value))}/>
            <button type='submit'>Cadastrar</button>
            
            </form>
        </div>
           

            <h1>Lista de estudantes</h1>

            <div className="estudantes">
                {
                    Estudantes.map((estudante)=>{
                        return<>
                            <Estudante _id={Number(estudante._id)} nome={estudante.nome} idade={estudante.idade}/>
                        </>
                    })
                }

            </div>
        </main>
        

        </>
    )
}

export default ListarEstudante