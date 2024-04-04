import { forwardRef } from "react";

export const TextArea = forwardRef(({...rest}, ref) => {
  return (
    <>
      <textarea {...rest} ref={ref}></textarea>
      {/* <textarea ></textarea> */}
    </>
  );
});
