function Listgroup (){

    const items = [
        'New York',
        'San Farnsico',
        'Tokyo',
        'London',
        'Paris'
    ]

    return(
        <div>
            <h2>Lists</h2>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {
                    items.map(item => (
                        <li  key={item} className="list-group-item">{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}
export default Listgroup;