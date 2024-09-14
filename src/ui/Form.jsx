import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
      width: 95vw;
      max-width: 60rem;
    `}


  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.4rem;

  @media (max-width: 930px) {
    width: 100%;
  }
  @media (max-width: 1150px) {
    margin: 0 auto;
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
