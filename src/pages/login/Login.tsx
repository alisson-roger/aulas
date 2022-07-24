import { useEffect, useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(() => {
        if(window.confirm('Você é Homem?')){
            console.log('Você é Homem.')
        } else {
            console.log('Você é Mulher.')
        }
    }, [])

    useEffect(() => {
        console.log(email)
        console.log(senha)
    }, [])

    const handleEntrar = () =>{
        console.log(email)
        console.log(senha)
    }

    return(
        <div>
            <form>

                <label>
                    <span>
                        E-mail: 
                    </span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                    <span>
                        Senha:
                    </span>
                    <input type='password' value={senha} onChange={e => setSenha(e.target.value)}/>

                    <button type='button' onClick={handleEntrar}>
                        Entrar
                    </button>
                </label>
            </form>
        </div>
    )
}