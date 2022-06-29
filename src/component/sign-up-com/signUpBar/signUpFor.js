import React, { useEffect, useState, useHistory } from "react";
import 'antd/dist/antd.css';
// import './index.css';
import { Button, Form, Input } from 'antd';
import './signUpBar.styles.scss';
import Firebase from "../../../firebase/firebase.utils";


const Navigation = () => {
    const [authenticating, setAuthenticating] = useState(false);
    const [registering, setRegistering] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [confirm, setConfirm] = useState<string>('');
    const [error, setError] = useState ('');
    const history = useHistory();


    const signUpWithEmailAndPassword = () => {

        // if (password !== confirm) 
        // {
        //   setError('Please make sure your passwords match.');

        // }

        if (error !== '') setError('');

        setRegistering(true);

        Firebase
        .auth().createUserWithEmailAndPassword(email, password)
          .then(result => {
            // logging.info(result);
            history.push('/dashboard');
            localStorage.setItem('login', 'true')
          })
          .catch(error => {
            // logging.error(error);

            if (error.code.includes('auth/weak-password')) {
              setError('Please Enter a Stronger Password.');
            }
            else if (error.code.includes('auth/email-already-in-use')) {
              setError('Email alreday in Use.')
            }
            else {
              setError('Unable to Register.Please Try again later');
            }
            setRegistering(false);
          });
      }

    /*const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

    const handleSignup = () => {
        Firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            switch(error.code){
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                setEmailError(error.message);
                break;
                case"auth/weak-password":
                setPasswordError(error.message);
                break;
            }
        })
    }

    const authListener = () => {
        Firebase.auth().onAuthStateChanged((user) => {
            if(user){
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);*/



    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='all-box'>
            <div className="sign-up-bar">
                {/* <img src="https://salinaka-ecommerce.web.app/images/banner-girl.789f1fa6f451ad26c5039fcbc049ace7.png" alt="" /> */}
                {/* <div className="sign-up">
            </div> */}

                {/* <div className="all-thing">
                <div 
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    setEmailError={setEmailError}
                    />
            </div> */}
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
                    value={setEmail}
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
                    value={setPassword}
                    onChange={(e) => setPassword(e.target.value)}
                    >
                        <Input.Password />
                    </Form.Item>


                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 9,
                        }}
                    > <Button
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