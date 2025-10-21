import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../api/api";

function Login(){
    const [searchParams] = useSearchParams();
    const mensagem = searchParams.get("mensagem");
    const navigate = useNavigate();

    async function handleForm(event:React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        const formData = new FormData(event.currentTarget);
        const email = formData.get("email")
        const senha = formData.get("senha")

        try {
           const res = await api.post("/login", {email, senha});
           if(res.status === 200){
                localStorage.setItem("token", res?.data?.token)
           }

        } catch (error:any) {
            const mensagem = error?.response?.data?.error ?? error?.mensagem ?? "Erro desconhecido";
            navigate(`/login?mensagem=${encodeURIComponent(mensagem)}`)
        }
        
        

    }


    return(

        <>
            <form onSubmit={handleForm}>
                <input type="text" name="email" placeholder="Email"/>
                <input type="passward" name="senha" placeholder="Senha"/>

            </form>
        </>
    )
}

export default Login