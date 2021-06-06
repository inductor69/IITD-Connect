
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import data from "./data.js";

const cardArray = data.map((item) => (
<Card>
    <Card.Body>
        <Card.Title>    
            `name : ${item.name} `
        </Card.Title>
        <Card.Title>    
            `branch : ${item.branch} `
        </Card.Title>
    </Card.Body>
</Card>
))



export default function CardTrey(props) {
    return (
        <CardDeck>
            {cardArray}
        </CardDeck>
    )
}
