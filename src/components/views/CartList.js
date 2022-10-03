import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Col, Row, Modal } from "antd";
import * as actionTypes from "../../Redux/Actions/action";
import { Card } from "antd";

const { Meta } = Card;

const CartList = ({ cart, search, removeFromCart }) => {
  const [show, setShow] = useState(false);
  // console.log("Cart wala cart", cart);

  // useEffect(() => {
  //   if (cart?.length === 0) {
  //     return Modal.error({
  //       title: "This is an error message",
  //       content: "some messages...some messages...",
  //     });
  //   }
  // });

  // const error = () => {
  //   return Modal.error({
  //     title: "This is an error message",
  //     content: "some messages...some messages...",
  //   });
  //   setShow(true);
  // };

  return (
    <div>
      <div className="container-fluid">
        <Row
          gutter={[16, 16]}
          className="media"
          style={{
            margin: "auto",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {cart?.map((product) => {
            return (
              <Col
                span={6}
                // sm={8}
                // xs={8}
                // lg={7}
                // xl={7}
                // style={{ display: "flex", justifyContent: "center" }}
              >
                <Card hoverable style={{ width: "100%" }} key={product.id}>
                  <div className="productImg">
                    <img src={product.image} alt="example" />
                  </div>
                  <Meta
                    title={product.title}
                    description={product.description?.substring(0, 40)}
                  />

                  <div className="productButt">
                    <Button
                      type="primary"
                      onClick={() => removeFromCart(product.id)}
                    >
                      REMOVE FROM CART
                    </Button>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    cart: store.cart,
    search: store.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) =>
      dispatch({
        type: actionTypes.DELETE_FROM_CART,
        payload: { id: id },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartList);
