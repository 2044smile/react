// model 을 만든 이유는 타입스크립트의 경우 Str, Int, List, Bool 외에도 타입을 만들 수 있다.
    // interface, type

export type Resturant = {
    name:string;
    address: {
      city:string;
      country:string;
    }
    menu:{
        name:string;
        price:number;
        category:string;
    }[]
}