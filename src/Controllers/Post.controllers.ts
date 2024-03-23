import { Request, Response } from "express";
import PostModel from "../models/Post.model";

interface FoodItem {
  itemName: string;
  price: number;
}

interface RequestBody {
  name: string;
  images: string[];
  address: string;
  foodList: FoodItem[];
}

export const createPost = async (
  req: Request<{}, {}, RequestBody>,
  res: Response
) => {
  try {
    // Get data from request body
    const { name, images, address, foodList }: RequestBody = req.body;
    if (!name || !images || !address || !foodList) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Create new post in database
    const newPost = new PostModel({
      name: name,
      images: images,
      address: address,
      foodList: foodList,
    });

    // Save the new post
    const savedPost = await newPost.save();
    console.log("HI");
    // Send success response
    res.status(201).json({
      message: "Post created successfully",
      post: savedPost,
    });
  } catch (error) {
    // Handle error
    console.error("Error creating post:", error);
    res.status(500).json({ message: "Failed to create post" });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  try {
    // Get all posts from database
    const posts = await PostModel.find();

    // Send success response
    res.status(200).json({ posts });
  } catch (error) {
    // Handle error
    console.error("Error getting posts:", error);
    res.status(500).json({ message: "Failed to get posts" });
  }
};
