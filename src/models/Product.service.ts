import { shapeIntoMongooseObjectId } from "../libs/config";
import {
  Product,
  ProductInput,
  ProductUpdateInput,
} from "../libs/enums/products";
import Errors, { HttpCode, Message } from "../libs/Errors";
import ProductModel from "../schema/Product.model";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  /** SPA */

  /** SSR */

  public async createNewProduct(input: ProductInput): Promise<Product> {
    try {
      const product = await this.productModel.create(input);
      return product.toObject() as Product;
    } catch (err) {
      console.log("Error, mode:createNewProduct:", err);
      throw new Errors(HttpCode.BAD_REQUEST, Message.CREATE_FAILED);
    }
  }

  public async updateChosenProduct(
    id: string,
    input: ProductUpdateInput,
  ): Promise<Product> {
    // string => ObjectId
    id = shapeIntoMongooseObjectId(id);
    const result = await this.productModel
      .findByIdAndUpdate({ _id: id }, input, { new: true })
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.UPDATE_FAILED);

    console.log("result:", result);
    return result.toObject() as Product;
  }
}

export default ProductService;
