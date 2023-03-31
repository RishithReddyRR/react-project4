import {createReducer} from '@reduxjs/toolkit'
export const cartReducer=createReducer(
    {
        cartItems:[],
        subTotal:0,
        shipping:0,
        tax:0,
        total:0
    },{
        addToCart:(state,action)=>{
            const item=action.payload;
            const itemExist=state.cartItems.find(i=>i.id===item.id)
            if(itemExist){
                state.cartItems.forEach(i=>{
                    if(i.id==item.id)
                    i.qty++;
                })
            }
            else{
                state.cartItems.push(item);
            }
        },
        minus:(state,action)=>{
            const id=action.payload;
            state.cartItems.forEach((i,idx)=>{
                if(i.id==id){
                    if(i.qty==1){
                        state.cartItems.splice(idx,1)
                    }
                    else{
                        i.qty--;
                    }
                }
                
            })
        },
        add:(state,action)=>{
            const id=action.payload;
            state.cartItems.forEach((i,idx)=>{
                if(i.id==id){
                    
                        i.qty++;
        
                }
                
            })
        },
        delete:(state,action)=>{
            const id=action.payload;
            state.cartItems.forEach((i,idx)=>{
                if(i.id==id){
                    state.cartItems.splice(idx,1)
                }
                
            })
        },
        calculatePrice:(state)=>{
            let sum=0;
            state.cartItems.forEach(i=>(sum+=i.qty*i.price))
            state.subTotal=sum;
            state.shipping=sum>1000 || state.cartItems.length==0?0:200;
            state.tax=(state.subTotal*(0.18)).toFixed();
            state.total=state.subTotal+state.tax+state.shipping;
        }
    }
)