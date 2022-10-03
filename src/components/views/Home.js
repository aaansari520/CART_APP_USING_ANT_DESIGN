import React from "react";
import { Button, Col, Row, Modal } from "antd";
import { Card } from "antd";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as actionTypes from "../../Redux/Actions/action";
import { HeartFilled, HeartOutlined } from "@ant-design/icons";

const { Meta } = Card;

const Home = ({
  products,
  cart,
  wish,
  addToCart,
  removeFromCart,
  addToWish,
  search,
}) => {
  console.log("HomeProd", products);
  const navigate = useNavigate();

  const gotoCart = () => {
    navigate("/cartlist");
  };
  console.log("WISH", wish);
  console.log("SEARCHHHH", search);

  const success = (product) => {
    Modal.success({
      content: "Want to add item to wishlist? press yes or escape",
      okText: "yes",
      onOk: () => {
        addToWish(product.id);
      },
    });
  };

  console.log(
    "filtered Array...",
    products.filter((prod) =>
      prod.title.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div
    // className="block featureBlock bgGrey"
    // style={{ backgroundColor: "#d0dbd6" }}
    >
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
          {/* .filter((val) => {
              if (search === "") {
                return val;
              } else if (
                val.title.toLowerCase().includes(search.toLowerCase())
              )
            }) */}

          {products
            .filter((prod) =>
              prod.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((product) => {
              return (
                <Col
                  span={6}
                  // sm={8}
                  // xs={8}
                  // lg={7}
                  // xl={7}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Card hoverable style={{ width: "100%" }} key={product.id}>
                    {wish.find((e) => e.id === product.id) ? (
                      <Button
                        className="Hover"
                        style={{ border: "none", color: "red" }}
                        // onClick={() => success(product)}
                      >
                        <HeartFilled />
                      </Button>
                    ) : (
                      <Button
                        className="Hover"
                        style={{ border: "none", color: "red" }}
                        onClick={() => success(product)}
                      >
                        <HeartOutlined />
                      </Button>
                    )}
                    {/* <Button
                    className="Hover"
                    style={{ border: "none", color: "red" }}
                    onClick={() => success(product)}
                  >
                    {wish?.find((prod) =>
                      prod.id === product.id ? (
                        <HeartFilled />
                      ) : (
                        <HeartOutlined />
                      )
                    )}
                  </Button> */}
                    <div className="productImg">
                      <img src={product.image} alt="example" />
                    </div>
                    <Meta
                      title={product.title}
                      description={product.description.slice(0, 25)}
                      className="truncate-1"
                    />
                    <div className="productButt">
                      {/* {cart.includes(product) ? (
                      <> */}
                      {/* <Button
                          type="primary"
                          onClick={() => removeFromCart(product.id)}
                        >
                          REMOVE FROM CART
                        </Button> */}

                      {/* <Button type="primary" onClick={gotoCart}>
                          Goto Cart
                        </Button>
                      </>
                    ) : (
                      <Button
                        type="primary"
                        onClick={() => addToCart(product.id)}
                      >
                        ADD TO CART
                      </Button>
                    )} */}

                      <Button
                        type="primary"
                        onClick={() => addToCart(product.id)}
                      >
                        ADD TO CART
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
    products: store.products,
    cart: store.cart,
    wish: store.wishlist,
    search: store.searchValue,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) =>
      dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: { id: id },
      }),
    removeFromCart: (id) =>
      dispatch({
        type: actionTypes.DELETE_FROM_CART,
        payload: { id: id },
      }),
    addToWish: (id) =>
      dispatch({
        type: actionTypes.ADD_TO_WISHLIST,
        payload: { id: id },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
