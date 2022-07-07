import React from "react";
import { useState } from "react";
import 'antd/dist/antd.min.css';
import { Button, Form, Input } from 'antd';
import './signUpBar.styles.scss';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";
import ErrorText from "../error/error";

// import Firebase from "../../../firebase/firebase.utils";

// import { Database } from "firebase/database";
// import {ref,push,child,update} from "firebase/database";
// import auth from "../../../firebase/firebase.utils";

const Navigation = () => {
    // const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const history = useHistory()
    // const [value, setValue] = useState({
    //     username: "",
    //     email: "",
    //     password: "",
    // });

    const handleSignup = (e) => {
        setLoading(true);
        e.preventDefault();
        // localStorage.setItem('Email');

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)
                history.push("/")

            })
            .catch((error) => {
                setError("Please add Valid input")
                // const errorCode = error.code;
                // const errorMessage = error.message
            });
        //  setEmail("")
        //  console.log(email)
        //     setPassword("")
    }

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    // const validateMessages = {
    //     required: '${label} is required!',
    //     types: {
    //         email: '${label} is not a valid email!',
    //         // password: '${label} is not valid password',
    //         // text: '${label} is not valid Username'
    //     },
    //     number: {
    //         range: '${label} must be between ${min} and ${max}',
    //     },
    // };

    return (
        <div className='all-box'>
            <div className="sign-up-bar">
                {/* <Form validateMessages={validateMessages}
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 11, }}
                    initialValues={{ remember: true, }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >

                    <Form.Item
                        label="Full Name"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                                // type: 'text',
                            },
                        ]}
                        value={value.username}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        name={['user', 'email']}
                        label="Email"
                        rules={[
                            {   required: true,
                                type: 'email',
                            },
                        ]}
                        // value={value.email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                                // type: 'password',
                            },
                        ]}
                        value={value.password}
                        type="password"
                        placeholder="Your password"
                        onChange={(e) => setPassword(e.target.value)}

                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 9,
                        }}
                    >

                        {!loading && (<Button
                            onClick={handleSignup}
                            className="button-up" type="primary " htmlType="submit" >
                            Sign Up
                        </Button>

                        )}
                        {loading && (
                            <Button
                                onClick={handleSignup}
                                className="button-up" type="primary " htmlType="submit" disabled>
                                Sign Up...
                            </Button>
                        )}
                        <div style={{ width: "100%", textAlign: "center" }}>
                            <ErrorText error={error} />
                        </div>
                    </Form.Item>
                </Form> */}




                {/* <form onSubmit={handleSignup}> */}
                <Form 
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 11,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item 
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Email!',
                                type: 'email',
                            },
                        ]}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 9,
                        }}
                    >
                        <Button type="primary" htmlType="submit" onClick={handleSignup}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                {/* </form> */}
                {/* </form> */}
            </div>
        </div>
    )
}
export default Navigation;