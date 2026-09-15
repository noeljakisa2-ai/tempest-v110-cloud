import { kv } from '@vercel/kv';
export default async function handler(req,res){
let s=await kv.get('tempest_state')||{balance:10000,profit:0,trades:[],isAuto:true};
if(!s.isAuto)return res.json({paused:true});
const price=4292+(Math.random()-0.5)*8;
const profit=parseFloat((Math.random()*12-3).toFixed(2));
s.balance+=profit;s.profit+=profit;
s.trades.unshift({t:new Date().toLocaleTimeString(),sig:profit>0?'BUY':'SELL',price:price.toFixed(2),p:profit});
s.trades=s.trades.slice(0,100);
await kv.set('tempest_state',s);
return res.json({ok:true});
}
