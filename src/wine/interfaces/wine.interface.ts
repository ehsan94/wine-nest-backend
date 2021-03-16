import {Document} from 'mongoose';

export interface Wine extends Document {
    id?: string;
    country: string;
    region: string,
    lage: string,
    sweetness: string,
    sugarLevel: string,
    wineType: string,
    wineColor: string,
    title: string,
    description: string,
    alcoholLevel: string,
    vintage: string,
    validEan: boolean,
    acidity: string,
    winery: string,
    grape: string,
    appellation: string
}