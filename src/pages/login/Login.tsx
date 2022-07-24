import { useCallback, useMemo, useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    
    const emailLength = useMemo(() => {
        console.log('Executou')
        return email.length * 1000;
    }, [email.length]);

    const handleEntrar = useCallback(() =>{
        console.log(email)
        console.log(senha)
    },[email, senha])

    return(
        <div>
            <form>
                <p>Quantidade de caracteres no e-mail: {emailLength}</p>

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