
type EstudanteProps = { 
    _id: number,
    nome: string,
    idade: number
}

function Estudante({_id, nome, idade}: EstudanteProps){

    return <>

        <div className='w-30 h-40 bg-blue-600' key={_id}>
            <h2>{nome}</h2>
            <p>Idade: {idade}</p>
        </div>
    
    </>

}

export default Estudante;