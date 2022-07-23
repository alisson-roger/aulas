import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

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