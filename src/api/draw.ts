
// interface IQueuesApi{

import base from "./base"
import req from "./request"

 /**
  * 
  * @returns 任务队列
  */   
// }
export const getQueuesApi=()=>{
    return req.get<any,any>(base.queues)

}

export const postUploadApi=(fd:any)=>{
    return req.post<any,any>(base.stylize,fd)
}
interface IViewApi{
    prompt_id:string;
    client_id:string;
}
export const getViewApi=(queryParams:IViewApi)=>{
    return req.get<any,any>(base.view,{params:queryParams})

}
interface IOssApi{
    prompt_id?:string;
    client_id:string;
}
export const getOssApi=(queryParams:IOssApi)=>{
    // console.log(params);
    
    return req.get<any,any>(base.getoss,{params:queryParams})

}