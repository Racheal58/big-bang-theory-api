import { Request, Response } from "express";
import modelCharacter from "../models/character";

const createCharacter = async (req: Request, res: Response) => {
  const { first_name, last_name, gender } = req.body;

  try {
    if (!first_name && !last_name && !gender) {
      return res.status(422).json({
        message: "The fields first_name, last_name and gender are required",
      });
    }

    const characterCreated = await modelCharacter.create(req.body);

    return res.status(201).json({
      message: "Your character has been successfully created",
      data: characterCreated,
    });
  } catch (error) {
    console.log(error);
  }
};

const getAllCharacters = async (req: Request, res: Response) => {
  const characters = await modelCharacter.find().sort("-created_at").exec();
  console.log("characters", characters);

  return res.status(200).json({
    message: "Characters retrieved successfully",
    data: characters,
  });
  // const characters = [
  //   {
  //     _id: "61ce4184850fb5926b4b4760",
  //     first_name: "Penny",
  //     last_name: "Hofstadter",
  //     gender: "female",
  //     episode: [],
  //     created_at: "2021-12-30T23:32:20.542Z",
  //     __v: 0,
  //   },
  //   {
  //     _id: "61ce30a3edfc385265cb61ce",
  //     first_name: "Leonard",
  //     last_name: "Hofstadter",
  //     gender: "male",
  //     episode: [],
  //     created_at: "2021-12-30T22:20:19.442Z",
  //     __v: 0,
  //   },
  // ];

  // res.statusCode = 200;
  // res.send({ message: "Characters retrieved successfully", data: characters });
};

const getCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;

  const character = await modelCharacter.findOne({ _id: id });

  if (!character) {
    return res
      .status(404)
      .json({ message: `Character with id "${id}" not found.` });
  }

  return res.status(200).json({
    message: "Character retrieved successfully",
    data: character,
  });
};

const updateCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { first_name, last_name, gender } = req.body;

  const character = await modelCharacter.findOne({ _id: id });

  if (!character) {
    return res
      .status(404)
      .json({ message: `Character with id "${id}" not found.` });
  }

  if ((!first_name && !last_name) || !gender) {
    return res.status(422).json({
      message: "The fields first_name, last_name and gender are required",
    });
  }

  await modelCharacter.updateOne(
    { _id: id },
    { first_name, last_name, gender }
  );

  const characterUpdated = await modelCharacter.findById(id, {
    first_name,
    last_name,
    gender,
  });

  return res.status(200).json({
    message: "Your character has been successfully updated",
    data: characterUpdated,
  });
};

const deleteCharacter = async (req: Request, res: Response) => {
  const { id } = req.params;

  await modelCharacter.findByIdAndDelete(id);

  return res.status(200).json({ message: "Character deleted successfully." });
};

export {
  createCharacter,
  getAllCharacters,
  getCharacter,
  updateCharacter,
  deleteCharacter,
};
