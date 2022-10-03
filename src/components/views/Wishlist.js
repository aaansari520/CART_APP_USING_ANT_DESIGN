import React from "react";
import { Col, Row, Button, Modal } from "antd";
import { Card } from "antd";
import Image1 from "../../assets/images/modern-design.jpg";
import { connect } from "react-redux";
import * as actionTypes from "../../Redux/Actions/action";

const { Meta } = Card;

const Wishlist = ({ wish, removeFromWish }) => {
  // warning;
  const success = (product) => {
    Modal.success({
      content: "Want to remove item from wishlist?",
      okText: "yes",
      onOk: () => {
        removeFromWish(product.id);
      },
    });
  };

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
          {wish?.map((product) => {
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
                  <Button
                    className="Hover"
                    style={{ border: "none", color: "red" }}
                    // onClick={() => removeFromWish(product.id)}
                    onClick={() => success(product)}
                  >
                    <i class="fa fa-heart"></i>
                  </Button>
                  {/* <div className="hide">
                    <p>removeFromWishList</p>
                  </div> */}
                  <div className="productImg">
                    <img src={product.image} alt="example" />
                  </div>
                  <Meta
                    title={product.title}
                    description={product.description?.substring(0, 40)}
                  />

                  <div className="productButt">
                    <Button type="primary">Check Out</Button>
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
    wish: store.wishlist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromWish: (id) =>
      dispatch({
        type: actionTypes.DELETE_FROM_WISHLIST,
        payload: { id: id },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
