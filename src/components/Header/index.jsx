import { useNavigate } from "react-router-dom"
import theJornal from "../../assets/theJornal.svg"
import style from "./style.module.scss"
export const Header = () => {

    const navigate = useNavigate();


    return (
        <>
        <header className={style.header}>
            <img src={theJornal} alt="Frase the jornal" />
            <button onClick={()=>navigate("/contact")}>Fale Conosco</button>
        </header>
        </>
    )
}