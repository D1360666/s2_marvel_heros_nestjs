import * as mongoose from 'mongoose';
export const HeroSchema = new mongoose.Schema({
    id:String,
    idCharacter:String,
    name:String,
    description: String,
    thumbnail:String
})