import * as React from "react"
import { Link } from "gatsby"
import { Button, Container } from "react-bootstrap"
import { IoMail } from "react-icons/io5";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import '../styles/footer.css';



const Footer = () => (
        <Container>
            <div className="footer_wrapper">
                <div className="flex_contain">
                    <div className="flex_two">
                        <form>
                            <h4 className="footer_heading">Join thousands of supporters by signing up for our newsletter.</h4>
                            <div className="sub_contain">
                                <div className="input_contain">
                                    <label className="visually-hidden">EMAIL*</label>
                                    <input className="footer_input" placeholder="Email address"></input>
                                    <IoMail className="email-icon" color='#3DA9FC'/>
                                </div>
                                <div>
                                    <Button className="footer_btn" variant="dark">Subscribe</Button>
                                </div>
                            </div>
                        </form>
                        <div>
                            <nav>
                                <ul>
                                    <li><a href="https://www.facebook.com/valuesuniversity" target="_blank"><FaFacebookF size="35" color="#3DA9FC"/></a></li>
                                    <li><a href="https://twitter.com/valuesuni" target="_blank"><FaTwitter size="35" color="#3DA9FC"/></a></li>
                                    <li><a href="https://www.instagram.com/valuesuniversity/" target="_blank"><FaInstagram size="35" color="#3DA9FC"/></a></li>
                                    <li><a href="https://www.youtube.com/channel/UCiZLU0-2yD4pAKVvj8E_Daw" target="_blank"><FaYoutube size="35" color="#3DA9FC"/></a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="main-nav-container">
                        <nav>
                            <dl>
                                <dt>
                                    <Link to="/videos">Explore Our Media</Link>
                                </dt>
                                <dd>Explore the variety of content the Values University (VU) Initiative has to offer, whether you prefer short and inspirational, or long, detailed and though provoking- VU has something to offer for everyone’s preference.</dd>
                                {/*
                                <DescTitle>
                                    <Link link="/">Browse The Store</Link>
                                </DescTitle>
                                <Descript>Shop Values University merchandise and subscriptions. Additionally, every week guest speaker specific merchandise will be added, so you could read, learn and listen to more of your favorite Values University speakers.</Descript>
                                */}
                                <dt>
                                    <Link to="/blog">Perspectives</Link>
                                </dt>
                                <dd>Come learn what a values based lifestyle means to us at the Values University, why it is a topic we find so significant, and how it can help inspire and reshape your perspectives, leading to a fuller, more enjoyable life. </dd>

                                <dt>
                                    <Link to="/about">About Us</Link>
                                </dt>
                                <dd>Spearheaded by the World Values Network, the VU initiative was developed  to help spread values  at the global level, highlighting  the individual experiences and approaches of global change makers and influencers, leveraging  personal narratives to help contribute towards a universal consensus on social cohesion, unity and cooperation. </dd>

                                <dt>
                                    <Link to="/contact">Get In Touch</Link>
                                </dt>
                                <dd>Have any questions, feeling inspired and want to get involved, or simply want to provide some feedback? Contact us through our online submission form- we would love to hear from you.</dd>
                            </dl>
                        </nav>
                    </div>
                    <div className="text-center order-3 legal-links">
                        <nav>
                            <ul>
                                <li className="footer-legal-link"><Link>Privacy Policy</Link></li>
                                <li className="footer-legal-link"><a href="https://shockmouse.com">Site Credit</a></li>
                            </ul>
                        </nav>
                        <p className="footer-rights text-black-50">©The World Values Network, All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </Container>
)

export default Footer