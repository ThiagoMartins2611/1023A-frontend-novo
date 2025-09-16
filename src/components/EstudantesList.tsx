import { useEffect, useState } from 'react';

type EstudanteType = {
  _id: string,
  nome: string,
  idade:number
}


function ListarEstudante(){
    
    const [Estudantes, setEstudante] = useState<EstudanteType[]>([])
    useEffect(()=>{

        async function buscarEstudantes() {

        try {

            const res = await fetch("/api/estudantes");
            const data = await res.json();

            setEstudante(data);

            console.log(data)
            
        } catch (error) {
            console.log(error)
        }
        }

        buscarEstudantes()

    }, []);

    return (
        <>
        <main className=''>
        <h1>Lista de estudantes</h1>

        <div className="estudantes">
            {
            Estudantes.map((estudante)=>{
                return(<>
                <div className='estudante' key={estudante._id}>
                    <h2>{estudante.nome}</h2>
                    <p>Idade: {estudante.idade}</p>
                </div>
                </>)
            })
            }

        </div>
        </main>
        

        </>
    )
}

export default ListarEstudante