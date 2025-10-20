import api from "../../api/api";

function Login(){

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

        } catch (error) {
            
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