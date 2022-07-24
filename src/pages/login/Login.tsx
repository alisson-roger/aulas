import { useCallback, useMemo, useState, useRef } from "react"
import { InputLogin } from "./components/inputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const emailLength = useMemo(() => {
    console.log('Executou')
    return email.length * 1000;
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email)
    console.log(senha)
  }, [email, senha])

  return (
    <div>
      <form>
        <label>
          <p>Quantidade de caracteres no e-mail: {emailLength}</p>

          <InputLogin
            label="Email"
            value={email}
            onChange={newValue => setEmail(newValue)}
            onPressEnter={() => inputPasswordRef.current?.focus()}
          />

          <InputLogin
            label="Senha"
            value={senha}
            type='password'
            onChange={newValue => setSenha(newValue)}
          />

          {/*<label>
          <span>
            Senha:
          </span>
          <input type='password' value={senha} onChange={e => setSenha(e.target.value)} />
      */}
          <button type='button' onClick={handleEntrar}>
            Entrar
          </button>
        </label>
      </form>
    </div>
  )
}