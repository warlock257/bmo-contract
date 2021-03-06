import React from 'react'

export default function Card(props) {
    const {name, address, price} = props
    
    let dollarSigns = []
    for (let i = 0; i < price; i++){
        dollarSigns.push("$")
    }
    const priceMap = dollarSigns.map((item, index) => <span key={index}>{item}</span>)

    return (
        <section className="cardContainer">
            <p><strong> Name: </strong>{name}</p>
            <p><strong> Address: </strong>{address}</p>
            <p><strong> Price: </strong>{priceMap}</p>
        </section>
    )
}
