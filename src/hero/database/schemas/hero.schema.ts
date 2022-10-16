import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type HeroDocument = Hero & Document;

@Schema({versionKey: false})
export class Hero{

    @Prop()
    heroId: string;

    @Prop()
    name: string;

    @Prop()
    description: string;

    @Prop()
    thumbnail: string;
    // heroId: any;
}
export const HeroSchema = SchemaFactory.createForClass(Hero)