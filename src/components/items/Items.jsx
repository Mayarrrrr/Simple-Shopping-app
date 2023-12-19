import React, { useContext, useState, useEffect } from "react";
import './items.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import itemImg from '../../imgs/t-shirt.jpg';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";
import { ShopContext } from "../../context/ShoppingContext";
import { useTranslation } from 'react-i18next';

const Items = ({products}) => {
  const {addToCart, cartItems}= useContext(ShopContext);
  const { t } = useTranslation();
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    setCurrentTheme(localStorage.getItem("theme") ?? "light");
  }, []);

  return ( 
        <div>    
          <MDBContainer fluid className={`my-5`}>
            <MDBRow>
              {products.map((item) => (
                <MDBCol md="12" lg="4" className="mb-4 mb-lg-0 d-flex">
                  <MDBCard key={item.id}>
                    <MDBCardImage
                      src={item.images[0]}
                      position="top"
                      alt={item.title}
                      className="card-image"
                    />
                    <MDBCardBody>
                      <div className="d-flex justify-content-between">
                        <p className="small">
                          <a href="#!" className="text-muted">
                          {item.category}
                          </a>
                        </p>
                        <p className="small text-danger">
                          <s>{item.discountPercentage} %</s>
                        </p>
                      </div>

                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">{item.title}</h5>
                        <h5 className="text-dark mb-0">${item.price}</h5>
                      </div>
                
                      <div className="d-flex justify-content-between p-3">
                      <p className="mb-0 description">{item.description}</p>
                    </div>
                      <div class="d-flex justify-content-between mb-2">
                        <p class="text-muted mb-0">
                          Available: <span class="fw-bold">{item.stock}</span>
                        </p>
                        <div class="ms-auto text-warning">
                          <MDBIcon fas icon="star" /> {item.rating} / 5
                        </div>
                      </div>
                      <Button variant="dark" onClick={() => addToCart(item.id)} className="addButton">
                          {t('Add to cart')} {cartItems[item.id] > 0 ? cartItems[item.id] : ""}
                      </Button>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                ))}
            </MDBRow>
          </MDBContainer>
        </div>
     );
}
 
export default Items;