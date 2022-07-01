import React from "react";
import { useState } from "react";
import 'antd/dist/antd.min.css';
import { Button, Form, Input } from 'antd';
import './signUpBar.styles.scss';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../../firebase/firebase.utils";
import { useHistory } from "react-router-dom";

// import Firebase from "../../../firebase/firebase.utils";

// import { Database } from "firebase/database";
// import {ref,push,child,update} from "firebase/database";
// import auth from "../../../firebase/firebase.utils";

const Navigation = () => {
    // const [user, setUser] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState(true);
   const history = useHistory()

   const handleSignup = (e) =>{
    setLoading(true);
     e.preventDefault();

     createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        history.push("/")
        
     })
     .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message
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

        return (
            <div className='all-box'>
                <div className="sign-up-bar">
                    <Form
                        name="basic"
                        labelCol={{span: 8,}}
                        wrapperCol={{span: 11,}}
                        initialValues={{remember: true,}}
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
                                },
                            ]}
                            // onChange={(e) => setUser(e.target.value)}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}
                            type="email"
                            placeholder="john Doe"
                            onChange={(e) => setEmail(e.target.value)}
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
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
                            type="password"
                            placeholder="Your password"
                            onChange={(e) => setPassword(e.target.value)}
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
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
                            // onClick={() => signUpWithEmailAndPassword()}
                            className="button-up" type="primary " htmlType="submit">
                                Sign Up
                            </Button>
                            )}
                            {loading && (
                                <Button
                                onClick={handleSignup}
                                // onClick={() => signUpWithEmailAndPassword()}
                                className="button-up" type="primary " htmlType="submit" disabled>
                                    Loading...
                                </Button>
                            )}
                            {error && (<span>*Wrong email id and password*</span>)}
                        </Form.Item>
                    </Form>
                </div>
            </div>
        )
    }
    export default Navigation;