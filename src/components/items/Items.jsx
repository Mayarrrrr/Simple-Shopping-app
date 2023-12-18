import React, { useContext, useState } from "react";
import './items.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import itemImg from '../../imgs/t-shirt.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { ShopContext } from "../../context/ShoppingContext";
import { useTranslation } from 'react-i18next';

const Items = ({products}) => {
  /*const [yourProduct , setYourProduct] = useState ([]);
  const updateCart = (id) => {
    const selectedProduct = products.find(product => product.id === id);
    setYourProduct([...yourProduct , selectedProduct]);
  };*/
  const {addToCart, cartItems}= useContext(ShopContext);
  const { t } = useTranslation();
  console.log('cartItems are', cartItems)
    return ( 
        <div>
            <CardGroup className="group">
                {products.map((item) => (
                    <Col lg="3">
                    <Card key={item.id} className="card">
                        <Card.Img variant="top" src={item.images[0]} />
                        <Card.Body>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">{t('Rating')} {item.rating}</small>
                        </Card.Footer>
                        <Button variant="dark" onClick={() => addToCart(item.id)} className="addButton">
                          {t('Add to cart')} {cartItems[item.id] > 0 ? cartItems[item.id] : ""}
                        </Button>

                    </Card>
                    </Col>
                ))}
            </CardGroup>
            {/*<h2>YOUR CART</h2>
            <>
              {yourProduct.map((myProduct) => (
                <h3>{myProduct.title}</h3>
              ))}
              </>*/}
        </div>
     );
}
 
export default Items;