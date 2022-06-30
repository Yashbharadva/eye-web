import React, { useEffect, useState, useHistory } from "react";
import 'antd/dist/antd.css';
// import './index.css';
import { Button, Form, Input } from 'antd';
import './signUpBar.styles.scss';

// import Firebase from "../../../firebase/firebase.utils";

// import { Database } from "firebase/database";
// import {ref,push,child,update} from "firebase/database";
import auth from "../../../firebase/firebase.utils";

const Navigation = () => {
//     const [loading, setLoading] = useState(false);
//     const [authenticating, setAuthenticating] = useState(false);

//   const [registering, setRegistering] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   // const [confirm, setConfirm] = useState<string>('');
//   const [error, setError] = useState('');
//   const history = useHistory();

//   const signUpWithEmailAndPassword = () => {

    // if (password !== confirm) 
    // {
    //   setError('Please make sure your passwords match.');

    // }

    // if (error !== '') setError('');

    // setRegistering(true);

    // auth.createUserWithEmailAndPassword(email, password)
    //   .then(result => {
    //     history.push('/HomePage');
    //     localStorage.setItem('login', 'true')
    //   })
    //   .catch(error => {

    //     if (error.code.includes('auth/weak-password')) {
    //       setError('Please Enter a Stronger Password.');
    //     }
    //     else if (error.code.includes('auth/email-already-in-use')) {
    //       setError('Email alreday in Use.')
    //     }
    //     else {
    //       setError('Unable to Register.Please Try again later');
    //     }
    //     setRegistering(false);
    //   });

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
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 5,
                    }}
                    initialValues={{
                        remember: true,
                    }}
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
                    // value={props.user}
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
                    > <Button 
                    // onClick={() => signUpWithEmailAndPassword()}
                        className="button-up" type="primary" htmlType="submit">
                            Sign Up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}

export default Navigation;