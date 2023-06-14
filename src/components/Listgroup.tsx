import {  useState } from "react";

interface Props {
    items:string[];
    heading : string;
    onSelectItme : (item:string) => void;
}

function Listgroup({items, heading , onSelectItme}: Props) {

   const [selectedIndex , setSelectedIndex] = useState(-1)
     return (
        <div className="col-md-5 mx-auto">
            <h2>{heading}</h2>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {
                    items.map((item , index) => (
                        <li key={item} 
                            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
                            onClick={() => {
                                setSelectedIndex(index); 
                                onSelectItme(item)
                            }}>
                                {item}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Listgroup;