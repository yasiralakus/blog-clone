import { Link, NavLink } from "react-router-dom";
import Homeslider from "../Components/Homeslider";

export default function Home() {



    return (
        <div className="home-page">

            <div className="home-page-hero">

                <div className="container">

                    <header>

                        <img src="./img/all/logo.png" alt="" />

                        <ul>
                            <li>
                                <NavLink to={'/'}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/blog'}>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to={'a'}>Archive</NavLink>
                            </li>
                            <li>
                                <NavLink to={'a'}>Pages</NavLink>
                            </li>
                            <li>
                                <NavLink to={'a'}>Shortcodes</NavLink>
                            </li>
                            <li>
                                <NavLink to={'/contact'}>Contact</NavLink>
                            </li>
                        </ul>

                    </header>

                    <main>

                        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

                    </main>

                    <div className="home-page-slider">
                        <Homeslider />
                    </div>

                </div>

            </div>

            <div className="home-page-posts">

                <div className="container">

                    <div className="home-page-posts-left">
                        <div>
                            <img src="./img/home-page/img06.jpg" alt="" />
                            <h6>25TH MAY - <span>TRAVEL</span></h6>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id cumque architecto.</p>
                            <Link>READ MORE</Link>
                        </div>

                        <div>
                            <img src="./img/home-page/img07.jpg" alt="" />
                            <h6>25TH MAY - <span>TRAVEL</span></h6>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id cumque architecto.</p>
                            <Link>READ MORE</Link>
                        </div>

                        <div>
                            <img src="./img/home-page/img08.jpg" alt="" />
                            <h6>25TH MAY - <span>TRAVEL</span></h6>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id cumque architecto.</p>
                            <Link>READ MORE</Link>
                        </div>

                        <div>
                            <img src="./img/home-page/img09.jpg" alt="" />
                            <h6>25TH MAY - <span>TRAVEL</span></h6>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id cumque architecto.</p>
                            <Link>READ MORE</Link>
                        </div>

                        <div>
                            <img src="./img/home-page/img06.jpg" alt="" />
                            <h6>25TH MAY - <span>TRAVEL</span></h6>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id cumque architecto.</p>
                            <Link>READ MORE</Link>
                        </div>

                        <div>
                            <img src="./img/home-page/img07.jpg" alt="" />
                            <h6>25TH MAY - <span>TRAVEL</span></h6>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id cumque architecto.</p>
                            <Link>READ MORE</Link>
                        </div>

                        <div>
                            <img src="./img/home-page/img08.jpg" alt="" />
                            <h6>25TH MAY - <span>TRAVEL</span></h6>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id cumque architecto.</p>
                            <Link>READ MORE</Link>
                        </div>

                        <div>
                            <img src="./img/home-page/img09.jpg" alt="" />
                            <h6>25TH MAY - <span>TRAVEL</span></h6>
                            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id cumque architecto.</p>
                            <Link>READ MORE</Link>
                        </div>
                    </div>

                    <div className="home-page-posts-right">

                        <div className="home-page-blogger-details">

                            <img src="./img/home-page/img11.jpg" alt="" />

                            <h2>JOHN ASTON</h2>

                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum natus quisquam, odio non a eveniet pariatur excepturi beatae sed assumenda soluta. Ipsam tenetur velit incidunt.</p>

                            <div>
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                <a href=""><i className="fa-brands fa-pinterest"></i></a>
                                <a href=""><i className="fa-brands fa-google-plus-g"></i></a>

                            </div>

                        </div>

                        <div className="home-page-recent-posts">

                            <h2>Son Eklenenler</h2>

                            <div>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsum?</h6>
                                <p>25TH MAY - <span>TRENDING</span></p>
                            </div>

                            <div>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsum?</h6>
                                <p>25TH MAY - <span>LIFESTYLE</span></p>
                            </div>

                            <div>
                                <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, ipsum?</h6>
                                <p>25TH MAY - <span>TRAVEL</span></p>
                            </div>

                        </div>

                        <div className="home-page-category">

                            <h2>Kategoriler</h2>

                            <div>
                                <p>Lifestyle (4)</p>
                                <p>Movie (2)</p>
                                <p>Travel (6)</p>
                                <p>Sports (5)</p>
                                <p>Music (4)</p>
                                <p>Education (4)</p>
                                <p>International (3)</p>
                                <p>Design (1)</p>
                                <p>News (11)</p>
                                <p>Review (6)</p>
                            </div>

                        </div>
                    </div>


                </div>

            </div>

            <div className="home-other-page">

                <div className="container">

                    <button>PREV PAGE</button>
                    <button style={{backgroundColor: '#000'}}>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>NEXT PAGE</button>

                </div>

            </div>

            <div className="home-slide">
                <img src="./img/home-page/img36.jpg" alt="" />
                <img src="./img/home-page/img35.jpg" alt="" />
                <img src="./img/home-page/img34.jpg" alt="" />
                <img src="./img/home-page/img33.jpg" alt="" />
                <img src="./img/home-page/img32.jpg" alt="" />
                <img src="./img/home-page/img31.jpg" alt="" />
                <img src="./img/home-page/img30.jpg" alt="" />
            </div>

            <div className="home-page-footer">

                <div className="container">

                    <div>

                        <img src="./img/all/logo2.png" alt="" />

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid excepturi velit, unde doloremque fugiat enim molestiae molestias labore consectetur mollitia, ipsam ut sed ab iste.</p>

                        <div>
                            <a href=""><i class="fa-brands fa-facebook"></i></a>
                            <a href=""><i class="fa-brands fa-twitter"></i></a>
                            <a href=""><i class="fa-brands fa-google-plus-g"></i></a>
                            <a href=""><i class="fa-brands fa-pinterest-p"></i></a>
                            <a href=""><i class="fa-brands fa-linkedin-in"></i></a>
                        </div>

                    </div>

                    <div>

                        <h3>Important Links</h3>

                        <Link>About us</Link>
                        <Link>Terms & Conditions</Link>
                        <Link>Privacy Policy</Link>
                        <Link>Sitemap</Link>
                        <Link>Support</Link>

                    </div>

                    <div>
                        
                        <h3>Popular Posts</h3>

                        <Link>1 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ullam quod iure. <span>21ST JAN</span></Link>

                        <Link>2 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ullam quod iure. <span>22ND FEB</span></Link>

                        <Link>3 - Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ullam quod iure. <span>21ST MAR</span></Link>

                    </div>

                    <div>

                        <h3>Subscribe to Newslatter</h3>

                        <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie.</p>

                        <form>
                            <input type="text" placeholder="Enter e-mail"/>
                            <button><i class="fa-solid fa-paper-plane"></i></button>
                        </form>

                    </div>

                </div>

            </div>

            <div className="home-page-bottom">

                <div className="container">
                    <p>© 2024 coded by yasiralakus. All Rights Reserved</p>
                </div>

            </div>

        </div>
    )
}