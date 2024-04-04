import { DefaultTemplate } from "../../components/DefaultTamplete";
import banner from "../../assets/rectangle.svg";
import { FormSection } from "../../components/FormSection";
import style from "./style.module.scss";

export const ContactPage = () => {
  return (
    <>
      <DefaultTemplate>
        <section className={style.contactPage}>
          <div>
            <img src={banner} alt="" />
          </div>
          <div className={style.boxForm}>
            <h1>Fale Conosco</h1>
            <p>Preencha o formulário para enviar mensagem</p>
            <FormSection />
          </div>
        </section>
      </DefaultTemplate>
    </>
  );
};
