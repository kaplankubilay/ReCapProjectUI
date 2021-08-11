import { ResponseModel } from "./responseModel";

export interface GetListResponseModel<T> extends ResponseModel{
    data:T[];
}