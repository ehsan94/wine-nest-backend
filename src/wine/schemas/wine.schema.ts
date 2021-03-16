import * as mongoose from 'mongoose';


export const WineSchema = new mongoose.Schema({
    country: String,
    region: String,
    lage: String,
    sweetness: String,
    sugarLevel: String,
    wineType: String,
    wineColor: String,
    title: String,
    description: String,
    alcoholLevel: String,
    vintage: String,
    validEan: Boolean,
    acidity: String,
    winery: String,
    grape: String,
    appellation: String
});