import "./App.css";
import "antd/dist/antd.css";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import {
  AppFooter,
  Wishlist,
  Home,
  Profile,
  SideBarMenu,
  Cartlist,
} from "./components/views";
import { Layout } from "antd";
import AppHeader from "./components/common/Header";
import { useEffect } from "react";
import { connect } from "react-redux";
import Login from "./validations/Login";
import Modal1 from "./validations/Modal1";

const { Header, Content, Footer, Sider } = Layout;

const App = ({ cart, wish, profile }) => {
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wish", JSON.stringify(wish));
    // localStorage.setItem("profile", JSON.stringify(profile));
  }, [cart, wish]);

  return (
    <Layout>
      <Header style={{ backgroundColor: "black", height: "80px" }}>
        <AppHeader />
      </Header>
      <div style={{ display: "flex" }}>
        <Sider style={{ position: "fixed", top: "100px", left: "0" }}>
          <SideBarMenu />
        </Sider>
        <Layout style={{ margin: "20px 20px", paddingLeft: "200px" }}>
          <Content
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "80px",
            }}
          >
            <Content1 profile={profile} />
          </Content>
        </Layout>
      </div>
    </Layout>
  );
};

const Content1 = (profile) => {
  console.log("Checing Profile", profile);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Modal1 />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/cartlist" element={<Cartlist />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </div>
  );
};

const mapStateToProps = (store) => {
  return {
    cart: store.cart,
    wish: store.wishlist,
    profile: store.profile,
  };
};

export default connect(mapStateToProps)(App);
