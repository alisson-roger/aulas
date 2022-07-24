import { Link } from "react-router-dom"
import { useUsuarioLogado } from "../../shared/hooks"


export const Dashboard = () => {
  const {nomeDoUsuario} = useUsuarioLogado()

  return (
    <div>
      <p>Dashboard</p>

      <p>{nomeDoUsuario}</p>

      <Link to='/entrar'>Login</Link>
    </div>
  )
}