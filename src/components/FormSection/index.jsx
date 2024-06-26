import rectangle from "../../assets/rectangle.svg";
import { Input } from "../../fragments/Input";
import { Select } from "../../fragments/Select";
import { TextArea } from "../../fragments/TextArea";
import style from "./style.module.scss";

export const FormSection = () => {
  return (
    <>
      <form action="">
        <Input type={"text"} id={"name"} placeholder={"Nome"} />
        <Input type={"email"} id={"email"} placeholder={"E-mail"} />
        <Select name={"option"} id={"option"}
        
        />
        <TextArea name={"text"} id={"text"} cols={"30"} rows={"10"} />
      </form>
    </>
  );
};
