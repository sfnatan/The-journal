import theJornal from "../../assets/TheJornal_white.svg"
import style from "./style.module.scss"

export const Footer = () => {
    return (
        <>
        <footer className={style.footer}>
        <img src={theJornal} alt="Frase the jornal" />
        </footer>
        </>
    )
}