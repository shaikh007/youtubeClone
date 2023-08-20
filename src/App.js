import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Headerss from "./Components/header/Headerss";
import SideBar from "./Components/sideBar/SideBar";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screen/homeScreen/HomeScreen";

import "./_app.scss";

import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import { useSelector } from "react-redux";
import WatchScreen from "./Screen/watchScreen/WatchScreen";
import SearchScreen from "./Screen/SearchScreen";
import SubscriptionsScreen from "./Screen/subscriptionsScreen/SubscriptionsScreen";
import ChannelScreen from "./Screen/channelScreen/ChannelScreen";
const Layout = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const handleToggle = () => setSidebar((value) => !value);
  return (
    <>
      <Headerss handleToggle={handleToggle} />
      <div className="app_container">
        <SideBar sidebar={sidebar} handleToggle={handleToggle} />
        <Container fluid className="app_main">
          {children}
        </Container>
      </div>
    </>
  );
};
function App() {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading, navigate]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          exact
          element={
            <>
              <Layout>
                <HomeScreen />
              </Layout>
            </>
          }
        />
        <Route path="/auth" element={<LoginScreen />} />
        <Route
          path="/search/:query"
          element={
            <Layout>
              <SearchScreen />
            </Layout>
          }
        />
        <Route
          path="/watch/:id"
          element={
            <Layout>
              <WatchScreen />
            </Layout>
          }
        />
        <Route
          path="/feed/subscriptions"
          element={
            <Layout>
              <SubscriptionsScreen />
            </Layout>
          }
        />
        <Route
          path="/channel/:channelId"
          element={
            <Layout>
              <ChannelScreen />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
