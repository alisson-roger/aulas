import { useCallback, useMemo, useState, useRef, useContext } from "react"
import { UsuarioLogadoContext } from "../../shared/contexts";
import { ButtonLogin } from "./components/ButtonLogin";
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

  const usuarioLogadoContext = useContext(UsuarioLogadoContext);

  return (
    <div>
      <form>
        <label>
          <p>Quantidade de caracteres no e-mail: {emailLength}</p>
          <p>Quantidade de caracteres no e-mail: {usuarioLogadoContext.nomeDoUsuario}</p>

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
            ref={inputPasswordRef}
            onChange={newValue => setSenha(newValue)}
          />

          <ButtonLogin type="button" onClick={handleEntrar}>
            Entrar
          </ButtonLogin>
        </label>
      </form>
    </div>
  )
}