// model 을 만든 이유는 타입스크립트의 경우 Str, Int, List, Bool 외에도 타입을 만들 수 있다.
    // interface, type

export type Resturant = {
    name:string;
    address:Address;
    menu:Menu[]
}

export type Address = {
    city:string;
    country:string;
}

export type Menu = {  // [{name:"창석이네 고기집",price:2000,category:"가쥬아"},{name:"순신이네 해산물",price:30000,category:"바다"}]
    name:string;
    price:number;
    category:string;
}