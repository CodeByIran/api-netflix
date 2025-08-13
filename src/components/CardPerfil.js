import '../styles/CardPerfil.css';
import {Link} from 'react-router-dom';

function CardPerfil({usuario}){
  return (
    <Link to={'/home'} className="card-perfil">
        <img className="foto" src={usuario.foto}/>
        <span className='nome'>{usuario.nome}</span>
    </Link>
  );
}
export default CardPerfil;

