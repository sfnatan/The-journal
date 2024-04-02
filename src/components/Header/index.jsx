import theJornal from "../../assets/theJornal.svg"
import style from "./style.module.scss"
export const Header = () => {
    return (
        <>
        <header className={style.header}>
            <img src={theJornal} alt="Frase the jornal" />
            <button>Fale Conosco</button>
        </header>
        </>
    )
}