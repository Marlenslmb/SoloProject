import React from 'react';
import { useContext } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { dotaContext } from '../DotaContext/DotaContext';

const HeroCard = ({item, history}) => {
    const { deleteHeroes } = useContext(dotaContext)
    console.log(item)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{width: '165px', margin: '0 auto', height: "200px"}} src={item.image} />
                <Card.Body>
                    <Card.Title>
                        {item.name}
                    </Card.Title>
                    <Card.Text>
                    {item.description.substring(0,100)}...
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>{item.type}</ListGroupItem>
                </ListGroup>
            </Card>
        </div>
    );
};

export default HeroCard;