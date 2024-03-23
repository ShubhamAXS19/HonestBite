import { prop, getModelForClass } from "@typegoose/typegoose";

class FoodItem {
  @prop({ required: true })
  itemName: string;

  @prop({ required: true })
  price: number;

  constructor(itemName: string, price: number) {
    this.itemName = itemName;
    this.price = price;
  }
} // Added the closing curly brace for the FoodItem class

class Post {
  @prop({ required: true })
  name: string;

  @prop({ required: true })
  address: string;

  @prop({ required: true, type: () => [String] })
  images: string[];

  @prop({ required: true, type: () => [FoodItem] })
  foodList?: FoodItem[];

  @prop({ default: Date.now() })
  createdAt?: Date;

  constructor(
    name: string,
    address: string,
    images: string[],
    foodList?: FoodItem[]
  ) {
    this.name = name;
    this.address = address;
    this.images = images;
    this.foodList = foodList;
  }
} // Removed the misplaced closing curly brace

const PostModel = getModelForClass(Post);

export default PostModel;
