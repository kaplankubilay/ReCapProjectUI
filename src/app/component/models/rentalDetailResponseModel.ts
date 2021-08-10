import { RentalDetail } from "./RentalDetail";
import { ResponseModel } from "./responseModel";

export interface RentalDetailResponseModel extends ResponseModel{
    data:RentalDetail[];
}