import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";
import Review from "@/db/models/Review";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "POST") {
    const newReview = request.body;
    console.log(newReview);

    await Review.create(newReview);
    const reviews = await Review.find();
    await Product.findByIdAndUpdate(id, {
      reviews: reviews.map((review) => review._id),
    });

    response.status(200).json({ status: "Review created." });
    return;
  }

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  }
}
