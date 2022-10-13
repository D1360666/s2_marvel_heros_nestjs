import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type HeroDocument = Hero & Document;

@Schema()
export class Hero{

    @Prop()
    idCharacter: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    thumbnail: string;
}
export const HeroSchema = SchemaFactory.createForClass(Hero)