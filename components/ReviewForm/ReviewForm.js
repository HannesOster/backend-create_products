import {
  StyledForm,
  StyledHeading,
  StyledLabel,
} from "../ProductForm/ProductForm.styled";
import { StyledButton } from "../Button/Button.styled";
import useSWR from "swr";

export default function ReviewForm({ id }) {
  const { mutate } = useSWR("/api/products");
  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const reviewData = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "POST",
      body: JSON.stringify(reviewData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      mutate();
      const data = await response.json();
    }
    event.target.reset();
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledHeading>Add a comment</StyledHeading>
      <StyledLabel htmlFor="title">
        Title:
        <input type="text" id="title" name="title" />
      </StyledLabel>
      <StyledLabel htmlFor="text">
        Text:
        <input type="text" id="text" name="text" />
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
