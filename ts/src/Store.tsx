import React from "react";
import { Address, Resturant } from "./model/resturant";

interface OwnProps {
    info:Resturant,
    changeAddress(address:Address):void
}

const Store:React.FC<OwnProps> = ({info}) => {  // Store:React.FC typescript; props 에도 타입을 설정해야 한다
    return (
        <div>
            {info.name}
            {info.address.city}
        </div>
    )
}

export default Store;