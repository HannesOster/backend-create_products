import dbConnect from "../../../db/connect";
import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const products = await Product.find();
    return response.status(200).json(products);
  }
  if (request.method === "POST") {
    const newProduct = request.body;

    await Product.create(newProduct);

    response.status(200).json({ status: "Product created." });
    return;
  }
  response.status(405).json({ status: "Request method not implemented" });
}
