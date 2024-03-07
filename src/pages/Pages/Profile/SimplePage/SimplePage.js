import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown } from 'reactstrap';
import classnames from 'classnames';
import SwiperCore, { Autoplay } from "swiper";

//Images
import profileBg from '../../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../../assets/images/users/avatar-6.jpg';
import avatar7 from '../../../../assets/images/users/avatar-7.jpg';
import avatar8 from '../../../../assets/images/users/avatar-8.jpg';

import smallImage2 from '../../../../assets/images/small/img-2.jpg';
import smallImage3 from '../../../../assets/images/small/img-3.jpg';
import smallImage4 from '../../../../assets/images/small/img-4.jpg';
import smallImage5 from '../../../../assets/images/small/img-5.jpg';
import smallImage6 from '../../../../assets/images/small/img-6.jpg';
import smallImage7 from '../../../../assets/images/small/img-7.jpg';
import smallImage9 from '../../../../assets/images/small/img-9.jpg';

import { projects, document } from '../../../../common/data';

const SimplePage = () => {

    SwiperCore.use([Autoplay]);

    const [activeTab, setActiveTab] = useState('1');
    const [activityTab, setActivityTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const toggleActivityTab = (tab) => {
        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    };

    document.title = "Profile Vendeur";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={profileBg} alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src={avatar1} alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>
                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">X</h3>
                                    <p className="text-white-75">Owner & Founder</p>
                                    <div className="hstack text-white-50 gap-1">
                                        <div className="me-2">
                                        <i className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>
                                            </div>
                                        <div>

                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} className="col-lg-auto order-last order-lg-0">
                                <Row className="text text-white-50 text-center">
                                    <Col lg={6} xs={4}>
                                        <div className="p-2">
                                            <h4 className="text-white mb-1">1.3K</h4>
                                            <p className="fs-14 mb-0">Following</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </div>
                    <Row>
                        <Col lg={12}>
                            <div>
                                <div className="d-flex">
                                    <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                href="#overview-tab"
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggleTab('1'); }}
                                            >
                                                <i className="ri-airplay-fill d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Overview</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggleTab('2'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Activities</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#projects"
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggleTab('3'); }}
                                            >
                                                <i className="ri-price-tag-line d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Projects</span>
                                            </NavLink>
                                        </NavItem>

                                    </Nav>
                                    <div className="flex-shrink-0">
                                        <Link to="/pages-profile-settings" className="btn btn-success"><i
                                            className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                                    </div>
                                </div>

                                <TabContent activeTab={activeTab} className="pt-4">
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xxl={3}>
                                            <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">Info</h5>
                                                        <div className="table-responsive">
                                                            <Table className="table-borderless mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Full Name :</th>
                                                                        <td className="text-muted">aya Bouriga</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Mobile :</th>
                                                                        <td className="text-muted">+(216) 27 734 977</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">E-mail :</th>
                                                                        <td className="text-muted">ayabouriga10@gmail.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Location:</th>
                                                                        <td className="text-muted">Sousse,Tunisie
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                                <Card>
                                                    <CardBody>
                                                        <div className="d-flex align-items-center mb-4">
                                                            <div className="flex-grow-1">
                                                                <h5 className="card-title mb-0">Popular Posts</h5>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <UncontrolledDropdown direction='start'>
                                                                    <DropdownToggle tag="a" id="dropdownMenuLink1" role="button">
                                                                        <i className="ri-more-2-fill fs-14"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu>
                                                                        <DropdownItem>View</DropdownItem>
                                                                        <DropdownItem>Edit</DropdownItem>
                                                                        <DropdownItem>Delete</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mb-4">
                                                            <div className="flex-shrink-0">
                                                                <img src={smallImage4} alt=""
                                                                    height="50" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3 overflow-hidden">
                                                                <Link to="/pages-starter">
                                                                    <h6 className="text-truncate fs-14">  Montre pour femme   </h6> 
                                                                </Link>
                                                                <p className="text-muted mb-0">Michael Kors</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mb-4">
                                                            <div className="flex-shrink-0">
                                                                <img src={smallImage5} alt=""
                                                                    height="50" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3 overflow-hidden">
                                                                <Link to="/pages-starter">
                                                                    <h6 className="text-truncate fs-14">Montre pour femme </h6>
                                                                        
                                                                </Link>
                                                                <p className="text-muted mb-0">Michael Kors</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img src={smallImage6} alt=""
                                                                    height="50" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3 overflow-hidden">
                                                                <Link to="/pages-starter">
                                                                    <h6 className="text-truncate fs-14">Montre pour femme</h6>
                                                                </Link>
                                                                <p className="text-muted mb-0">Michael Kors</p>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col xxl={9}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">À Propos</h5>
                                                        <p>Je suis une vendeuse passionnée et expérimentée,spécialisée dans 
                                                           dans la vente des vétements de femme. Avec une expérience
                                                           dans l'industrie depuis plusieurs années, je m'efforce de 
                                                           fournir des produits de qualité supérieure et un service clientèle
                                                           exceptionnel à chaque client.
                                                        </p>
                                                        <p> Ma passion pour la mode se reflète dans chaque
                                                            article que je propose. Je m'engage à offrir
                                                             à mes clients une sélection soigneusement choisie de produits de 
                                                             haute qualité qui répondent à leurs besoins et dépassent leurs attentes.
                                                        </p>
                                                        <Row>
                                                            <Col xs={6} md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div
                                                                        className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                        <div
                                                                            className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                            <i className="ri-user-2-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-1">Designation :</p>
                                                                        <h6 className="text-truncate mb-0">Lead Designer /
                                                                            Developer</h6>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col xs={6} md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div
                                                                        className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                        <div
                                                                            className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                            <i className="ri-global-line"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-1">Website :</p>
                                                                        <Link to="#" className="fw-semibold">www.velzon.com</Link>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>

                                                <Row>
                                                    <Col lg={12}>
                                                        <Card>
                                                            <CardHeader className="align-items-center d-flex">
                                                                <h4 className="card-title mb-0  me-2">Recent Activity</h4>
                                                                <div className="flex-shrink-0 ms-auto">
                                                                    <Nav className="justify-content-end nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                                                        role="tablist">
                                                                        <NavItem>
                                                                            <NavLink
                                                                                to="#today-tab"
                                                                                className={classnames({ active: activityTab === '1' })}
                                                                                onClick={() => { toggleActivityTab('1'); }}
                                                                            >
                                                                                Today
                                                                            </NavLink>
                                                                        </NavItem>
                                                                        <NavItem>
                                                                            <NavLink
                                                                                to="#weekly-tab"
                                                                                className={classnames({ active: activityTab === '2' })}
                                                                                onClick={() => { toggleActivityTab('2'); }}
                                                                            >
                                                                                Weekly
                                                                            </NavLink>
                                                                        </NavItem>
                                                                        <NavItem className="nav-item">
                                                                            <NavLink
                                                                                to="#monthly-tab"
                                                                                className={classnames({ active: activityTab === '3' })}
                                                                                onClick={() => { toggleActivityTab('3'); }}
                                                                            >
                                                                                Monthly
                                                                            </NavLink>
                                                                        </NavItem>
                                                                    </Nav>
                                                                </div>
                                                            </CardHeader>
                                                            <CardBody>
                                                                <TabContent activeTab={activityTab} className="text-muted">
                                                                    <TabPane tabId="1">
                                                                        <div className="profile-timeline">
                                                                            <div>
                                                                            </div>
                                                                            <div className="accordion accordion-flush" id="todayExample">
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header">
                                                                                        <button className="accordion-button p-2 shadow-none" type="button" id="headingOne" >
                                                                                            <div className="d-flex">
                                                                                                <div className="flex-shrink-0">
                                                                                                    <img src={avatar2} alt="" className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Jacqueline Steve
                                                                                                    </h6>
                                                                                                    <small className="text-muted">We has changed 2 attributes on 05:16PM</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </button>
                                                                                    </div>
                                                                                    <UncontrolledCollapse className="accordion-collapse" toggler="#headingOne" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            In an awareness campaign, it
                                                                                            is vital for people to begin
                                                                                            put 2 and 2 together and
                                                                                            begin to recognize your
                                                                                            cause. Too much or too
                                                                                            little spacing, as in the
                                                                                            example below, can make
                                                                                            things unpleasant for the
                                                                                            reader. The goal is to make
                                                                                            your text as comfortable to
                                                                                            read as possible. A
                                                                                            wonderful serenity has taken
                                                                                            possession of my entire
                                                                                            soul, like these sweet
                                                                                            mornings of spring which I
                                                                                            enjoy with my whole heart.
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header" id="headingTwo">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none" id="collapseTwo">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0 avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title bg-light text-success rounded-circle">
                                                                                                        M
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Megan Elmore
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">Adding
                                                                                                        a new event with
                                                                                                        attachments -
                                                                                                        04:45PM</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="collapseTwo" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            <Row className="g-2">
                                                                                                <div className="col-auto">
                                                                                                    <div
                                                                                                        className="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                        <div
                                                                                                            className="flex-shrink-0">
                                                                                                            <i
                                                                                                                className="ri-image-2-line fs-17 text-danger"></i>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="flex-grow-1 ms-2">
                                                                                                            <h6><Link to="#"
                                                                                                                className="stretched-link">Business
                                                                                                                Template
                                                                                                                -
                                                                                                                UI/UX
                                                                                                                design</Link>
                                                                                                            </h6>
                                                                                                            <small>685
                                                                                                                KB</small>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-auto">
                                                                                                    <div
                                                                                                        className="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                        <div
                                                                                                            className="flex-shrink-0">
                                                                                                            <i
                                                                                                                className="ri-file-zip-line fs-17 text-info"></i>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="flex-grow-1 ms-2">
                                                                                                            <h6><Link to="#"
                                                                                                                className="stretched-link">Bank
                                                                                                                Management
                                                                                                                System
                                                                                                                -
                                                                                                                PSD</Link>
                                                                                                            </h6>
                                                                                                            <small>8.78
                                                                                                                MB</small>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </Row>
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="headingThree">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    <img src={avatar5}
                                                                                                        alt=""
                                                                                                        className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        New ticket
                                                                                                        received</h6>
                                                                                                    <small
                                                                                                        className="text-muted mb-2">User
                                                                                                        <span
                                                                                                            className="text-secondary">Erica245</span>
                                                                                                        submitted a
                                                                                                        ticket -
                                                                                                        02:33PM</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="headingFour">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none" id="collapseFour" >
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0 avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title bg-light text-muted rounded-circle">
                                                                                                        <i
                                                                                                            className="ri-user-3-fill"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Nancy Martino
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">Commented
                                                                                                        on
                                                                                                        12:57PM</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="collapseFour" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            " A wonderful serenity has
                                                                                            taken possession of my
                                                                                            entire soul, like these
                                                                                            sweet mornings of spring
                                                                                            which I enjoy with my whole
                                                                                            heart. Each design is a new,
                                                                                            unique piece of art birthed
                                                                                            into this world, and while
                                                                                            you have the opportunity to
                                                                                            be creative and make your
                                                                                            own style choices. "
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="headingFive">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none" id="collapseFive" >
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    <img src={avatar7}
                                                                                                        alt=""
                                                                                                        className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Lewis Arnold
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">Create
                                                                                                        new project
                                                                                                        buildng product
                                                                                                        -
                                                                                                        10:05AM</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="collapseFive" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            <p className="text-muted mb-2">
                                                                                                Every team project can
                                                                                                have a velzon. Use the
                                                                                                velzon to share
                                                                                                information with your
                                                                                                team to understand and
                                                                                                contribute to your
                                                                                                project.</p>
                                                                                            <div className="avatar-group">
                                                                                                <Link to="#"
                                                                                                    className="avatar-group-item"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    data-bs-trigger="hover"
                                                                                                    data-bs-placement="top"
                                                                                                    title=""
                                                                                                    data-bs-original-title="Christi">
                                                                                                    <img src={avatar4}
                                                                                                        alt=""
                                                                                                        className="rounded-circle avatar-xs" />
                                                                                                </Link>
                                                                                                <Link to="#"
                                                                                                    className="avatar-group-item"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    data-bs-trigger="hover"
                                                                                                    data-bs-placement="top"
                                                                                                    title=""
                                                                                                    data-bs-original-title="Frank Hook">
                                                                                                    <img src={avatar3}
                                                                                                        alt=""
                                                                                                        className="rounded-circle avatar-xs" />
                                                                                                </Link>
                                                                                                <Link to="#"
                                                                                                    className="avatar-group-item"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    data-bs-trigger="hover"
                                                                                                    data-bs-placement="top"
                                                                                                    title=""
                                                                                                    data-bs-original-title=" Ruby">
                                                                                                    <div
                                                                                                        className="avatar-xs">
                                                                                                        <div
                                                                                                            className="avatar-title rounded-circle bg-light text-primary">
                                                                                                            R
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Link>
                                                                                                <Link to="#"
                                                                                                    className="avatar-group-item"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    data-bs-trigger="hover"
                                                                                                    data-bs-placement="top"
                                                                                                    title=""
                                                                                                    data-bs-original-title="more">
                                                                                                    <div
                                                                                                        className="avatar-xs">
                                                                                                        <div
                                                                                                            className="avatar-title rounded-circle">
                                                                                                            2+
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </TabPane>
                                                                    <TabPane tabId="2">
                                                                        <div className="profile-timeline">
                                                                            <div className="accordion accordion-flush"
                                                                                id="weeklyExample">
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading6">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none" id="collapse6">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    <img src={avatar3}
                                                                                                        alt=""
                                                                                                        className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Joseph Parker
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">New
                                                                                                        people joined
                                                                                                        with our company
                                                                                                        -
                                                                                                        Yesterday</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="#collapse6" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            It makes a statement, it’s
                                                                                            impressive graphic design.
                                                                                            Increase or decrease the
                                                                                            letter spacing depending on
                                                                                            the situation and try, try
                                                                                            again until it looks right,
                                                                                            and each letter has the
                                                                                            perfect spot of its own.
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading7">
                                                                                        <Link className="accordion-button p-2 shadow-none"
                                                                                            data-bs-toggle="collapse"
                                                                                            to="#collapse7"
                                                                                            aria-expanded="false">
                                                                                            <div className="d-flex">
                                                                                                <div className="avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title rounded-circle bg-light text-danger">
                                                                                                        <i
                                                                                                            className="ri-shopping-bag-line"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Your order is
                                                                                                        placed <span
                                                                                                            className="badge bg-soft-success text-success align-middle">Completed</span>
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">These
                                                                                                        customers can
                                                                                                        rest assured
                                                                                                        their order has
                                                                                                        been placed - 1
                                                                                                        week Ago</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading8">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none"
                                                                                            id="collapse8" >
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0 avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title bg-light text-success rounded-circle">
                                                                                                        <i
                                                                                                            className="ri-home-3-line"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Velzon admin
                                                                                                        dashboard
                                                                                                        templates layout
                                                                                                        upload</h6>
                                                                                                    <small
                                                                                                        className="text-muted">We
                                                                                                        talked about a
                                                                                                        project on
                                                                                                        linkedin - 1
                                                                                                        week Ago</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="#collapse8" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5 fst-italic">
                                                                                            Powerful, clean & modern
                                                                                            responsive bootstrap 5 admin
                                                                                            template. The maximum file
                                                                                            size for uploads in this
                                                                                            demo :
                                                                                            <Row className="mt-2">
                                                                                                <Col xxl={6}>
                                                                                                    <Row
                                                                                                        className="border border-dashed gx-2 p-2">
                                                                                                        <Col xs={3}>
                                                                                                            <img src={smallImage3} alt="" className="img-fluid rounded" />
                                                                                                        </Col>

                                                                                                        <Col xs={3}>
                                                                                                            <img src={smallImage5} alt="" className="img-fluid rounded" />
                                                                                                        </Col>

                                                                                                        <Col xs={3}>
                                                                                                            <img src={smallImage7} alt="" className="img-fluid rounded" />
                                                                                                        </Col>

                                                                                                        <Col xs={3}>
                                                                                                            <img src={smallImage9} alt="" className="img-fluid rounded" />
                                                                                                        </Col>

                                                                                                    </Row>

                                                                                                </Col>
                                                                                            </Row>
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading9">
                                                                                        <Link className="accordion-button p-2 shadow-none"
                                                                                            data-bs-toggle="collapse"
                                                                                            to="#collapse9"
                                                                                            aria-expanded="false">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    <img src={avatar6}
                                                                                                        alt=""
                                                                                                        className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        New ticket
                                                                                                        created <span
                                                                                                            className="badge bg-soft-info text-info align-middle">Inprogress</span>
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted mb-2">User
                                                                                                        <span
                                                                                                            className="text-secondary">Jack365</span>
                                                                                                        submitted a
                                                                                                        ticket - 2 week
                                                                                                        Ago</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading10">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none" id="collapse10">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    <img src={avatar5} alt="" className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Jennifer Carter
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">Commented
                                                                                                        - 4 week
                                                                                                        Ago</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="#collapse10" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            <p
                                                                                                className="text-muted fst-italic mb-2">
                                                                                                " This is an awesome
                                                                                                admin dashboard
                                                                                                template. It is
                                                                                                extremely well
                                                                                                structured and uses
                                                                                                state of the art
                                                                                                components (e.g. one of
                                                                                                the only templates using
                                                                                                boostrap 5.1.3 so far).
                                                                                                I integrated it into a
                                                                                                Rails 6 project. Needs
                                                                                                manual integration work
                                                                                                of course but the
                                                                                                template structure made
                                                                                                it easy. "</p>
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                            </div>

                                                                        </div>
                                                                    </TabPane>
                                                                    <TabPane tabId="3">
                                                                        <div className="profile-timeline">
                                                                            <div className="accordion accordion-flush"
                                                                                id="monthlyExample">
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading11">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none" id="collapse11" >
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0 avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title bg-light text-success rounded-circle">
                                                                                                        M
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Megan Elmore
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">Adding
                                                                                                        a new event with
                                                                                                        attachments - 1
                                                                                                        month
                                                                                                        Ago.</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="#collapse11" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            <div className="row g-2">
                                                                                                <div className="col-auto">
                                                                                                    <div
                                                                                                        className="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                        <div
                                                                                                            className="flex-shrink-0">
                                                                                                            <i
                                                                                                                className="ri-image-2-line fs-17 text-danger"></i>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="flex-grow-1 ms-2">
                                                                                                            <h6><Link to="#"
                                                                                                                className="stretched-link">Business
                                                                                                                Template
                                                                                                                -
                                                                                                                UI/UX
                                                                                                                design</Link>
                                                                                                            </h6>
                                                                                                            <small>685
                                                                                                                KB</small>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-auto">
                                                                                                    <div
                                                                                                        className="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                        <div
                                                                                                            className="flex-shrink-0">
                                                                                                            <i
                                                                                                                className="ri-file-zip-line fs-17 text-info"></i>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="flex-grow-1 ms-2">
                                                                                                            <h6><Link to="#"
                                                                                                                className="stretched-link">Bank
                                                                                                                Management
                                                                                                                System
                                                                                                                -
                                                                                                                PSD</Link>
                                                                                                            </h6>
                                                                                                            <small>8.78
                                                                                                                MB</small>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div className="col-auto">
                                                                                                    <div
                                                                                                        className="d-flex border border-dashed p-2 rounded position-relative">
                                                                                                        <div
                                                                                                            className="flex-shrink-0">
                                                                                                            <i
                                                                                                                className="ri-file-zip-line fs-17 text-info"></i>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="flex-grow-1 ms-2">
                                                                                                            <h6><Link to="#"
                                                                                                                className="stretched-link">Bank
                                                                                                                Management
                                                                                                                System
                                                                                                                -
                                                                                                                PSD</Link>
                                                                                                            </h6>
                                                                                                            <small>8.78
                                                                                                                MB</small>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading12">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none"
                                                                                            id="collapse12"
                                                                                            aria-expanded="true">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    <img src={avatar2}
                                                                                                        alt=""
                                                                                                        className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Jacqueline Steve
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">We
                                                                                                        has changed 2
                                                                                                        attributes on 3
                                                                                                        month
                                                                                                        Ago</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="collapse12" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            In an awareness campaign, it
                                                                                            is vital for people to begin
                                                                                            put 2 and 2 together and
                                                                                            begin to recognize your
                                                                                            cause. Too much or too
                                                                                            little spacing, as in the
                                                                                            example below, can make
                                                                                            things unpleasant for the
                                                                                            reader. The goal is to make
                                                                                            your text as comfortable to
                                                                                            read as possible. A
                                                                                            wonderful serenity has taken
                                                                                            possession of my entire
                                                                                            soul, like these sweet
                                                                                            mornings of spring which I
                                                                                            enjoy with my whole heart.
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading13">
                                                                                        <Link className="accordion-button p-2 shadow-none"
                                                                                            data-bs-toggle="collapse"
                                                                                            to="#collapse13"
                                                                                            aria-expanded="false">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    <img src={avatar6}
                                                                                                        alt=""
                                                                                                        className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        New ticket
                                                                                                        received</h6>
                                                                                                    <small
                                                                                                        className="text-muted mb-2">User
                                                                                                        <span
                                                                                                            className="text-secondary">Erica245</span>
                                                                                                        submitted a
                                                                                                        ticket - 5 month
                                                                                                        Ago</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading14">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none" id="collapse14">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0 avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title bg-light text-muted rounded-circle">
                                                                                                        <i
                                                                                                            className="ri-user-3-fill"></i>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Nancy Martino
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">Commented
                                                                                                        on 24 Nov,
                                                                                                        2021.</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="#collapse14" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5 fst-italic">
                                                                                            " A wonderful serenity has
                                                                                            taken possession of my
                                                                                            entire soul, like these
                                                                                            sweet mornings of spring
                                                                                            which I enjoy with my whole
                                                                                            heart. Each design is a new,
                                                                                            unique piece of art birthed
                                                                                            into this world, and while
                                                                                            you have the opportunity to
                                                                                            be creative and make your
                                                                                            own style choices. "
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                                <div className="accordion-item border-0">
                                                                                    <div className="accordion-header"
                                                                                        id="heading15">
                                                                                        <Link to="#" className="accordion-button p-2 shadow-none" id="collapse15">
                                                                                            <div className="d-flex">
                                                                                                <div
                                                                                                    className="flex-shrink-0">
                                                                                                    <img src={avatar7}
                                                                                                        alt=""
                                                                                                        className="avatar-xs rounded-circle" />
                                                                                                </div>
                                                                                                <div
                                                                                                    className="flex-grow-1 ms-3">
                                                                                                    <h6
                                                                                                        className="fs-14 mb-1">
                                                                                                        Lewis Arnold
                                                                                                    </h6>
                                                                                                    <small
                                                                                                        className="text-muted">Create
                                                                                                        new project
                                                                                                        buildng product
                                                                                                        - 8 month
                                                                                                        Ago</small>
                                                                                                </div>
                                                                                            </div>
                                                                                        </Link>
                                                                                    </div>
                                                                                    <UncontrolledCollapse toggler="#collapse15" defaultOpen>
                                                                                        <div
                                                                                            className="accordion-body ms-2 ps-5">
                                                                                            <p className="text-muted mb-2">
                                                                                                Every team project can
                                                                                                have a velzon. Use the
                                                                                                velzon to share
                                                                                                information with your
                                                                                                team to understand and
                                                                                                contribute to your
                                                                                                project.</p>
                                                                                            <div className="avatar-group">
                                                                                                <Link to="#"
                                                                                                    className="avatar-group-item"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    data-bs-trigger="hover"
                                                                                                    data-bs-placement="top"
                                                                                                    title=""
                                                                                                    data-bs-original-title="Christi">
                                                                                                    <img src={avatar4}
                                                                                                        alt=""
                                                                                                        className="rounded-circle avatar-xs" />
                                                                                                </Link>
                                                                                                <Link to="#"
                                                                                                    className="avatar-group-item"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    data-bs-trigger="hover"
                                                                                                    data-bs-placement="top"
                                                                                                    title=""
                                                                                                    data-bs-original-title="Frank Hook">
                                                                                                    <img src={avatar3}
                                                                                                        alt=""
                                                                                                        className="rounded-circle avatar-xs" />
                                                                                                </Link>
                                                                                                <Link to="#"
                                                                                                    className="avatar-group-item"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    data-bs-trigger="hover"
                                                                                                    data-bs-placement="top"
                                                                                                    title=""
                                                                                                    data-bs-original-title=" Ruby">
                                                                                                    <div
                                                                                                        className="avatar-xs">
                                                                                                        <div
                                                                                                            className="avatar-title rounded-circle bg-light text-primary">
                                                                                                            R
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Link>
                                                                                                <Link to="#"
                                                                                                    className="avatar-group-item"
                                                                                                    data-bs-toggle="tooltip"
                                                                                                    data-bs-trigger="hover"
                                                                                                    data-bs-placement="top"
                                                                                                    title=""
                                                                                                    data-bs-original-title="more">
                                                                                                    <div
                                                                                                        className="avatar-xs">
                                                                                                        <div
                                                                                                            className="avatar-title rounded-circle">
                                                                                                            2+
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Link>
                                                                                            </div>
                                                                                        </div>
                                                                                    </UncontrolledCollapse>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </TabPane>
                                                                </TabContent>
                                                            </CardBody>
                                                        </Card>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Activities</h5>
                                                <div className="acitivity-timeline">
                                                    <div className="acitivity-item d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar1} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Oliver Phillips <span
                                                                className="badge bg-soft-primary text-primary align-middle">New</span>
                                                            </h6>
                                                            <p className="text-muted mb-2">We talked about a project on linkedin.</p>
                                                            <small className="mb-0 text-muted">Today</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                            <div className="avatar-title bg-soft-success text-success rounded-circle"> N </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Nancy Martino <span
                                                                className="badge bg-soft-secondary text-secondary align-middle">In
                                                                Progress</span></h6>
                                                            <p className="text-muted mb-2"><i
                                                                className="ri-file-text-line align-middle ms-2"></i>
                                                                Create new project Buildng product</p>
                                                            <div className="avatar-group mb-2">
                                                                <Link to="#" className="avatar-group-item"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="" data-bs-original-title="Christi">
                                                                    <img src={avatar4} alt=""
                                                                        className="rounded-circle avatar-xs" />
                                                                </Link>
                                                                <Link to="#" className="avatar-group-item"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="" data-bs-original-title="Frank Hook">
                                                                    <img src={avatar3} alt=""
                                                                        className="rounded-circle avatar-xs" />
                                                                </Link>
                                                                <Link to="#" className="avatar-group-item"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="" data-bs-original-title=" Ruby">
                                                                    <div className="avatar-xs">
                                                                        <div className="avatar-title rounded-circle bg-light text-primary">R</div>
                                                                    </div>
                                                                </Link>
                                                                <Link to="#" className="avatar-group-item"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="" data-bs-original-title="more">
                                                                    <div className="avatar-xs">
                                                                        <div className="avatar-title rounded-circle">
                                                                            2+
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <small className="mb-0 text-muted">Yesterday</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Natasha Carey <span className="badge bg-soft-success text-success align-middle">Completed</span>
                                                            </h6>
                                                            <p className="text-muted mb-2">Adding a new event with
                                                                attachments</p>
                                                            <Row >
                                                                <Col xxl={4}>
                                                                    <div className="row border border-dashed gx-2 p-2 mb-2">
                                                                        <div className="col-4">
                                                                            <img src={smallImage2}
                                                                                alt="" className="img-fluid rounded" />
                                                                        </div>

                                                                        <div className="col-4">
                                                                            <img src={smallImage3}
                                                                                alt="" className="img-fluid rounded" />
                                                                        </div>

                                                                        <div className="col-4">
                                                                            <img src={smallImage4}
                                                                                alt="" className="img-fluid rounded" />
                                                                        </div>

                                                                    </div>

                                                                </Col>
                                                            </Row>
                                                            <small className="mb-0 text-muted">25 Nov</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar6} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Bethany Johnson</h6>
                                                            <p className="text-muted mb-2">added a new member to velzon
                                                                dashboard</p>
                                                            <small className="mb-0 text-muted">19 Nov</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <div className="avatar-xs acitivity-avatar">
                                                                <div
                                                                    className="avatar-title rounded-circle bg-soft-danger text-danger">
                                                                    <i className="ri-shopping-bag-line"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Your order is placed <span
                                                                className="badge bg-soft-danger text-danger align-middle ms-1">Out
                                                                of Delivery</span></h6>
                                                            <p className="text-muted mb-2">These customers can rest assured
                                                                their order has been placed.</p>
                                                            <small className="mb-0 text-muted">16 Nov</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar7} alt=""
                                                                className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Lewis Pratt</h6>
                                                            <p className="text-muted mb-2">They all have something to say
                                                                beyond the words on the page. They can come across as
                                                                casual or neutral, exotic or graphic. </p>
                                                            <small className="mb-0 text-muted">22 Oct</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <div className="avatar-xs acitivity-avatar">
                                                                <div
                                                                    className="avatar-title rounded-circle bg-soft-info text-info">
                                                                    <i className="ri-line-chart-line"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Monthly sales report</h6>
                                                            <p className="text-muted mb-2"><span className="text-danger">2 days
                                                                left</span> notification to submit the monthly sales
                                                                report. <Link to="#" className="link-warning text-decoration-underline">Reports
                                                                    Builder</Link></p>
                                                            <small className="mb-0 text-muted">15 Oct</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar8} alt=""
                                                                className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">New ticket received <span
                                                                className="badge bg-soft-success text-success align-middle">Completed</span>
                                                            </h6>
                                                            <p className="text-muted mb-2">User <span
                                                                className="text-secondary">Erica245</span> submitted a
                                                                ticket.</p>
                                                            <small className="mb-0 text-muted">26 Aug</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                    <TabPane tabId="3">
                                        <Card>
                                            <CardBody>
                                                <Row>
                                                    {(projects || []).map((item, key) => (
                                                        <Col xxl={3} sm={6} key={key}>
                                                            <Card className={`profile-project-card shadow-none profile-project-${item.cardBorderColor}`}>
                                                                <CardBody className="p-4">
                                                                    <div className="d-flex">
                                                                        <div className="flex-grow-1 text-muted overflow-hidden">
                                                                            <h5 className="fs-14 text-truncate"><Link to="#"
                                                                                className="text-dark">{item.title}</Link>
                                                                            </h5>
                                                                            <p className="text-muted text-truncate mb-0">Last
                                                                                Update : <span
                                                                                    className="fw-semibold text-dark">{item.updatedTime}</span></p>
                                                                        </div>
                                                                        <div className="flex-shrink-0 ms-2">
                                                                            <div className={`badge badge-soft-${item.badgeClass} fs-10`}>
                                                                                {item.badgeText}</div>
                                                                        </div>
                                                                    </div>

                                                                    <div className="d-flex mt-4">
                                                                        <div className="flex-grow-1">
                                                                            <div className="d-flex align-items-center gap-2">
                                                                                <div>
                                                                                    <h5 className="fs-12 text-muted mb-0">
                                                                                        Members :</h5>
                                                                                </div>
                                                                                <div className="avatar-group">
                                                                                    {(item.member || []).map((subitem, key) => (
                                                                                        <div className="avatar-group-item" key={key}>
                                                                                            <div className="avatar-xs">
                                                                                                <img src={subitem.img} alt="" className="rounded-circle img-fluid" />
                                                                                            </div>
                                                                                        </div>
                                                                                    ))}

                                                                                    {(item.memberName || []).map((element, key) => (
                                                                                        <div className="avatar-group-item" key={key}>
                                                                                            <div className="avatar-xs">
                                                                                                <div
                                                                                                    className="avatar-title rounded-circle bg-light text-primary">
                                                                                                    {element.memberText}
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </CardBody>
                                                            </Card>
                                                        </Col>
                                                    ))}
                                                    <Col lg={12}>
                                                        <Pagination listClassName="justify-content-center" className="pagination-separated mb-0">
                                                            <PaginationItem disabled> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> </PaginationLink> </PaginationItem>
                                                            <PaginationItem active> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 4 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 5 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-right" /> </PaginationLink> </PaginationItem>
                                                        </Pagination>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </TabPane>

                                   
                                </TabContent>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default SimplePage;