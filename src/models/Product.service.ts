import { shapeIntoMongooseObjectId } from "../libs/config";
import { ProductStatus } from "../libs/enums/product.enum";
import {
  Product,
  ProductInput,
  ProductInquiry,
  ProductUpdateInput,
} from "../libs/enums/products";
import Errors, { HttpCode, Message } from "../libs/Errors";
import { T } from "../libs/types/common";
import ProductModel from "../schema/Product.model";

class ProductService {
  private readonly productModel;

  constructor() {
    this.productModel = ProductModel;
  }

  /** SPA */
  public async getProducts(inquiry: ProductInquiry): Promise<Product[]> {
    console.log("inquiry:", inquiry);
    const match: T = { productStatus: ProductStatus.PROCESS };
    if (inquiry.productCollection) {
      match.productCollection = inquiry.productCollection;
    }
    if (inquiry.search) {
      match.productName = { $regex: new RegExp(inquiry.search, "i") };
    }

    const sort: T =
      inquiry.order === "productPrice"
        ? { [inquiry.order]: 1 } // ascending va bu dynamic key  => productPrice
        : { [inquiry.order]: -1 }; // descending // inquiry.order => dynamic key

    const result = await this.productModel
      .aggregate([
        { $match: match },
        { $sort: sort },
        { $skip: (inquiry.page * 1 - 1) * inquiry.limit }, // page * 1 => string => number
        { $limit: inquiry.limit },
      ])
      .exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result;
  }

  /** SSR */

  public async getAllProducts(): Promise<Product[]> {
    // string => ObjectId
    const result = await this.productModel.find().exec();
    if (!result) throw new Errors(HttpCode.NOT_FOUND, Message.NO_DATA_FOUND);

    return result as unknown as Product[];
  }

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
