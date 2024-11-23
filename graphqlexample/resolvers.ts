import { ObjectId } from "mongodb";
import { dinosaursCollection } from "./main.ts";
import { Dinosaur, DinosaurModel } from "./types.ts";
import { getDinosaurFromModel } from "./utils.ts";

export const resolvers = {
	Query: {
		getDinosaurs: async (): Promise<Dinosaur[]> => {
			const dinoModels: DinosaurModel[] = await dinosaursCollection
				.find()
				.toArray();
			const dinosaurs: Dinosaur[] = dinoModels.map((d) =>
				getDinosaurFromModel(d)
			);
			return dinosaurs;
		},
		getDinosaur: async (
			_: unknown,
			args: { id: string }
		): Promise<Dinosaur | undefined> => {
			const dinoId = new ObjectId(args.id);
			const dinoModel: DinosaurModel | null = await dinosaursCollection.findOne(
				{ _id: dinoId }
			);
			if (!dinoModel) {
				return undefined;
			}
			return getDinosaurFromModel(dinoModel);
		},
	},
	Mutation: {
		addDinosaur: async (
			_: unknown,
			args: { name: string; type: string }
		): Promise<Dinosaur> => {
			const { insertedId } = await dinosaursCollection.insertOne({
				_id: new ObjectId(),
				name: args.name,
				type: args.type,
			});
			return {
				id: insertedId.toString(),
				name: args.name,
				type: args.type,
			};
		},
	},
};
