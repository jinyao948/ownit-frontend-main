import "antd/dist/antd.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spin } from "antd";
import React, { useState, useEffect } from "react";
import Landing from "./components/landing/Landing";
// import Navigation from "./components/nav/Navigation";
import "./App.css"

export default function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="main-body">
            {/* <Navigation /> */}

            <BrowserRouter>
                {loading ? (
                    <div className="spin-large">
                        <Spin size="large" />
                    </div>
                ) : (
                    <Routes>
                        <Route path="/" element={<Landing />} />
                    </Routes>
                )}
            </BrowserRouter>
        </div>
    );
}
