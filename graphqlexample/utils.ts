import { Dinosaur, DinosaurModel } from "./types.ts";

export const getDinosaurFromModel = (dinoModel: DinosaurModel): Dinosaur => {
	return {
		id: dinoModel._id.toString(),
		name: dinoModel.name,
		type: dinoModel.type,
	};
};
