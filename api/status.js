import { kv } from '@vercel/kv';
export default async function handler(req,res){
let s=await kv.get('tempest_state')||{balance:10000,profit:0,trades:[],isAuto:true};
return res.json(s);
}
