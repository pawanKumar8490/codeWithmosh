import { MouseEvent } from "react";

function Listgroup() {

    const items = [
        'New York',
        'San Farnsico',
        'Tokyo',
        'London',
        'Paris'
    ]

    // event handleer
    const handleclick = (event:MouseEvent) => console.log(event)
    return (
        <div>
            <h2>Lists</h2>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {
                    items.map((item , index) => (
                        <li key={item} className="list-group-item" onClick={handleclick}>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Listgroup;