import { ObjectId, OptionalId } from "mongodb";

export type Dinosaur = {
	id: string;
	name: string;
	type: string;
};

export type DinosaurModel = {
	_id: ObjectId;
	name: string;
	type: string;
};
