import { instance } from "./base.api";

 const enpointInfo = 'information';

 export const information = {
      getById:function ( {id} : {id: number}) {
        return instance.get(`${id}/${enpointInfo}`) 
    }

 }