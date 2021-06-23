
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'





export default function CardTrey(props) {
    const users = props.users
    const arr = []
    for(var i in users){
        arr.push(users[i])
    }
    // for(let i in users_json){
    //     arr.push(i.data)
    // } 
    // console.log(arr)
    const cardArray = arr.map((item) => (
        <Card key={item._id}>
            <Card.Body>
                <Card.Img src={`/images/${item._id}`} />
                <Card.Title>    
                    name : {item.name} 
                </Card.Title>
                <Card.Title>    
                    branch : {item.branch} 
                </Card.Title>
                <Card.Title>
                    Degree : {item.degree}
                </Card.Title>
                <Card.Title>
                    Year : {item.year}
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
