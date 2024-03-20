import { Link, NavLink } from "react-router-dom";

export default function Contact() {




    return (
        <div className="contact-page">

            <div className="contact-page-header">

                <div className="container">

                    <img src="./img/all/logo2.png" alt="" />

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

                </div>

            </div>

            <div className="contact-page-directory">

                <div className="container">

                    <h1>İletişime Geç</h1>
                    <p>Anasayfa {'>'} İletişim</p>

                </div>

            </div>

            <div className="contact-page-main">

                <div className="container">

                    <form>

                        <h1>İletişime Geç</h1>
                        <p>24 saat içinde cevaplayacağız.</p>

                        <div>
                            <input type="text" placeholder="İsminizi giriniz."/>
                            <input type="text" placeholder="E-posta adresi giriniz."/>
                        </div>

                        <div>
                            <input type="number" placeholder="Telefon numarası giriniz."/>
                            <input type="text" placeholder="Website giriniz.."/>
                        </div>

                        <textarea name="" id="" cols="30" rows="10" placeholder="Mesajınızı giriniz."></textarea>

                        <button>Mesaj Gönder</button>

                    </form>

                    <div>
                        <div className="john-aston">

                            <img src="./img/home-page/img11.jpg" alt="" />

                            <img src="./img/blog-page/text-jhon-aston.png" alt="" />

                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima, architecto maxime, illum harum quisquam aperiam, natus unde velit eum est debitis officia! Delectus doloribus optio vel numquam nihil odio!</p>

                            <div>
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                <a href=""><i className="fa-brands fa-pinterest"></i></a>
                                <a href=""><i className="fa-brands fa-google-plus-g"></i></a>
                            </div>

                        </div>

                        <div className="contact-links">

                            <p><i class="fa-solid fa-keyboard"></i> support@dot.com</p>
                            <p><i class="fa-solid fa-phone"></i> +00-3452-4325</p>

                        </div>
                    </div>

                </div>

            </div>

            <div className="blog-page-footer">

                <div style={{backgroundColor: '#2A2D34'}}>
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

                <footer>
                    <div className="container">
                        <p>© 2024 coded by yasiralakus. All Rights Reserved</p>
                        <div>
                            <a href=""><i className="fa-brands fa-facebook"></i></a>
                            <a href=""><i className="fa-brands fa-twitter"></i></a>
                            <a href=""><i className="fa-brands fa-linkedin"></i></a>
                            <a href=""><i className="fa-brands fa-pinterest"></i></a>
                            <a href=""><i className="fa-brands fa-google-plus-g"></i></a>
                        </div>
                    </div>
                </footer>

            </div>

        </div>
    )
}