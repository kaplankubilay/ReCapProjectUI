export interface CarDetail{
    carId:number;
    colorId:number;
    brandId:number;
    brandName:string;
    modelName:string;
    fuelName:string;
    colorName:string;
    description:string;
    dailyPrice:number;
    modelYear?:number;
    plate:string
    imagePaths:string[];
}