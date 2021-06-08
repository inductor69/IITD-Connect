
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'





export default function CardTrey(props) {
    const data = props.data
    let arr = []
    for(let i in data){
        arr.push(i)
    } 
    console.log(arr)
    const cardArray = arr.map((item) => (
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
    return (
        <CardDeck>
            {cardArray}
        </CardDeck>
    )
}
