import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import Comments from "../Comments";
import { StyledLink } from "../Link/Link.styled";
import ReviewForm from "../ReviewForm/ReviewForm";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.length > 0 && <Comments reviews={data.reviews} />}

      <ReviewForm id={id} />
      <StyledLink style={{ marginTop: 20 }} href="/">
        Back to all
      </StyledLink>
    </ProductCard>
  );
}

// title
// "I like!"
// text
// "Love this one, very handsome!"
// rating
// 5
