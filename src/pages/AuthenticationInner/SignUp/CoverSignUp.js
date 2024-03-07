import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row, Form, Input, Button } from 'reactstrap';

import AuthSlider from '../authCarousel';

// formik
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignUp = () => {
    document.title = "SignUp ";

    const [passwordShow, setPasswordShow] = useState(false);
    const navigate = useNavigate();

    const validation = useFormik({
        enableReinitialize: true,

        initialValues: {
            username: "",
            password: "",
            useremail: "",
            userprofile: "Client", // default profile
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            password: Yup.string()
                .min(8, 'Password must be at least 8 characters')
                .matches(RegExp('(.*[a-z].*)'), 'At least one lowercase letter')
                .matches(RegExp('(.*[A-Z].*)'), 'At least one uppercase letter')
                .matches(RegExp('(.*[0-9].*)'), 'At least one number')
                .required("Password is required"),
            useremail: Yup.string().email("Invalid email format").required("Email is required"),
        }),
        onSubmit: (values) => {
            // Handle form submission
            navigate('/advance-ui-swiper');
        }
    });

    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Card className="overflow-hidden m-0">
                                    <Row className="justify-content-center g-0">
                                        <AuthSlider />

                                        <Col lg={6}>
                                            <div className="p-lg-5 p-4">
                                                <div>
                                                    <h5 className="text-primary">Register Account</h5>
                                                </div>

                                                <div className="mt-4">
                                                    <Form onSubmit={validation.handleSubmit} className="needs-validation" noValidate>
                                                        <div className="mb-3">
                                                            <label htmlFor="username" className="form-label">Username <span className="text-danger">*</span></label>
                                                            <Input
                                                                type="text"
                                                                className={`form-control ${validation.errors.username && validation.touched.username ? 'is-invalid' : ''}`}
                                                                id="username"
                                                                placeholder="Enter username"
                                                                required
                                                                value={validation.values.username}
                                                                onBlur={validation.handleBlur}
                                                                onChange={validation.handleChange}
                                                            />
                                                            {validation.errors.username && validation.touched.username && (
                                                                <div className="invalid-feedback">{validation.errors.username}</div>
                                                            )}
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label" htmlFor="password-input">Password <span className="text-danger">*</span></label>
                                                            <div className="position-relative auth-pass-inputgroup">
                                                                <Input
                                                                    type={passwordShow ? "text" : "password"}
                                                                    className={`form-control pe-5 password-input ${validation.errors.password && validation.touched.password ? 'is-invalid' : ''}`}
                                                                    placeholder="Enter password"
                                                                    required
                                                                    id="password-input"
                                                                    name="password"
                                                                    value={validation.values.password}
                                                                    onBlur={validation.handleBlur}
                                                                    onChange={validation.handleChange}
                                                                />
                                                                {validation.errors.password && validation.touched.password && (
                                                                    <div className="invalid-feedback">{validation.errors.password}</div>
                                                                )}
                                                                <Button
                                                                    color="link"
                                                                    onClick={() => setPasswordShow(!passwordShow)}
                                                                    className="position-absolute end-0 top-0 text-decoration-none text-muted password-addon"
                                                                    type="button"
                                                                    id="password-addon"
                                                                >
                                                                    <i className="ri-eye-fill align-middle"></i>
                                                                </Button>
                                                            </div>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label htmlFor="useremail" className="form-label">Email <span className="text-danger">*</span></label>
                                                            <Input
                                                                type="email"
                                                                className={`form-control ${validation.errors.useremail && validation.touched.useremail ? 'is-invalid' : ''}`}
                                                                id="useremail"
                                                                placeholder="Enter email address"
                                                                required
                                                                value={validation.values.useremail}
                                                                onBlur={validation.handleBlur}
                                                                onChange={validation.handleChange}
                                                            />
                                                            {validation.errors.useremail && validation.touched.useremail && (
                                                                <div className="invalid-feedback">{validation.errors.useremail}</div>
                                                            )}
                                                        </div>

                                                        <div className="checkBox">
                                                            <label htmlFor="userprofile" className="form-label">User Profile <span className="text-danger">*</span></label>
                                                            <div className="form-check mb-2">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="userprofile"
                                                                    id="sellerProfile"
                                                                    value="seller"
                                                                    checked={validation.values.userprofile === "seller"}
                                                                    onChange={validation.handleChange}
                                                                />
                                                                <label className="form-check-label" htmlFor="sellerProfile">Seller</label>
                                                            </div>

                                                            <div className="form-check">
                                                                <Input
                                                                    className="form-check-input"
                                                                    type="radio"
                                                                    name="userprofile"
                                                                    id="clientProfile"
                                                                    value="client"
                                                                    checked={validation.values.userprofile === "client"}
                                                                    onChange={validation.handleChange}
                                                                />
                                                                <label className="form-check-label" htmlFor="clientProfile">Client</label>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4">
                                                            <Button className="btn btn-success w-100" type="submit">Sign Up</Button>
                                                        </div>
                                                    </Form>
                                                </div>

                                                <div className="mt-5 text-center">
                                                    <p className="mb-0">Already have an account? <Link to="/auth-signin-cover" className="fw-semibold text-primary text-decoration-underline">Sign In</Link></p>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SignUp;
