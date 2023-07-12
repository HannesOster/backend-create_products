import {
  StyledForm,
  StyledHeading,
  StyledLabel,
} from "../ProductForm/ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";

export default function ReviewForm() {
  function handleSubmit() {}
  return (
    <StyledForm>
      <StyledHeading>Add a comment</StyledHeading>
      <StyledLabel htmlFor="title">
        Title:
        <input type="text" id="title" name="title" />
      </StyledLabel>
      <StyledLabel htmlFor="text">
        Text:
        <input type="text" id="description" name="description" />
      </StyledLabel>

      <StyledLabel htmlFor="rating">
        Rating:
        <select id="rating" name="rating">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
