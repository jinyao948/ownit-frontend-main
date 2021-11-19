import "./Landing.css";
import React, { useState } from "react";
import { Modal } from "antd";
// import handyman from "../../assets/handyman.jpg";

export default function Landing() {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/api/users/all", {
            method: "POST",
            body: JSON.stringify({
                email: event.target.email.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            if (res.status === 200) {
                setIsModalVisible(true);
            }
        });
    };

    return (
        <div className="landing">
            <div className="left-body">
                <div className="textbox">
                    <h1 className="title">Own It!</h1>
                    <h2 className="subtitle">
                        Don't find your next customer, let them find you.
                    </h2>
                    <h3 className="mailing-list">
                        Join our mailing list to find out more.
                    </h3>
                    <form onSubmit={handleSubmit}>
                        <input type="email" name="email" placeholder="Email" />
                        <input
                            type="submit"
                            value="Submit"
                            className="submit-button"
                        />
                    </form>
                </div>
            </div>
            <div className="right-body" />
            <Modal
                title="Email Submission"
                visible={isModalVisible}
                onOk={handleOk}
            >
                <p>
                    We have received your email! Please check your mailbox for
                    our welcome message!
                </p>
            </Modal>
        </div>
    );
}
