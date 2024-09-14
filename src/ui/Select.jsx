import styled from "styled-components";

const StyledSelect = styled.select`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: var(--color-grey-0);
  font-weight: 500;
  box-shadow: var(--shadow-sm);

  @media (max-width: 1160px) {
    font-size: 1.1rem;
    padding: 0.8rem 1rem;
  } 
`;

const StyledOption = styled.option`
  font-size: inherit;

  @media (max-width: 1160px) {
    font-size: 0.8rem;
  } 
  @media (max-width: 450px) {
    font-size: 0.5rem;
  } 
`;

function Select({ options, value, onChange, ...props }) {
  return (
    <StyledSelect value={value} onChange={onChange} {...props}>
      {options.map((option) => (
        <StyledOption value={option.value} key={option.value}>
          {option.label}
        </StyledOption>
      ))}
    </StyledSelect>
  );
}

export default Select;
