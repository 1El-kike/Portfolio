import React from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className='footer' style={{ position: "relative", bottom: "0", width: "100%" }}>


            <MDBFooter className='text-center' color='info' bgColor='black'>
                <MDBContainer className='p-4'>
                    <section className='mb-4'>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#3b5998' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='facebook-f' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#55acee' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='twitter' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#dd4b39' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='google' />
                        </MDBBtn>
                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='instagram' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#0082ca' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='linkedin-in' />
                        </MDBBtn>

                        <MDBBtn
                            floating
                            className='m-1'
                            style={{ backgroundColor: '#85b40d' }}
                            href='#!'
                            role='button'
                        >
                            <MDBIcon fab icon='github' />
                        </MDBBtn>
                    </section>

                    <section className=''>
                        <form action=''>
                            <MDBRow className='d-flex justify-content-center'>
                                <MDBCol size="auto">
                                    <p className='pt-2'>
                                        <strong>Sign up for our newsletter</strong>
                                    </p>
                                </MDBCol>

                                <MDBCol md='5' start>
                                    <MDBInput contrast type='email' label='Email address' className='mb-4' />
                                </MDBCol>

                                <MDBCol size="auto">
                                    <MDBBtn outline color='light' type='submit' className='mb-4'>
                                        Subscribe
                                    </MDBBtn>
                                </MDBCol>
                            </MDBRow>
                        </form>
                    </section>

                    <section className='mb-4'>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
                            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
                            sequi voluptate quas.
                        </p>
                    </section>

                    <section className=''>
                        <MDBRow>
                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Project</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Download
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Changelog
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Commission Icons
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            All Versions
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Community</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            GitHub
                                        </a>
                                    </li>
                                    <li>
                                        <Link to='/blog' className='text-white'>
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Twitter
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Blog Awesome
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Help</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Support
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Traubleshooting
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Status
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>

                            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                                <h5 className='text-uppercase'>Links</h5>

                                <ul className='list-unstyled mb-0'>
                                    <li>
                                        <a href='/prueba' className='text-white'>
                                            Link 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 3
                                        </a>
                                    </li>
                                    <li>
                                        <a href='#!' className='text-white'>
                                            Link 4
                                        </a>
                                    </li>
                                </ul>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2020 Copyright:
                    <a className='text-white' href='https://mdbootstrap.com/'>
                        MDBootstrap.com
                    </a>
                </div>
            </MDBFooter>
        </div>
    );
}