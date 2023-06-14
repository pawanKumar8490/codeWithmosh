import {  useState } from "react";

function Listgroup() {

    const items = [
        'New York',
        'San Farnsico',
        'Tokyo',
        'London',
        'Paris'
    ]


    

    const [selectedIndex , setSelectedIndex] = useState(-1)
     return (
        <div className="col-md-5 mx-auto">
            <h2>Lists</h2>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {
                    items.map((item , index) => (
                        <li key={item} className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} onClick={() => setSelectedIndex(index)}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Listgroup;