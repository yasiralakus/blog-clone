import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Blog() {

    const [popular, setPopular] = useState(false);


    return (
        <div className="blog-page">

            <div className="blog-page-header">

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

            <div className="blog-page-directory">

                <div className="container">

                    <h1>Single Post v1</h1>

                    <p>Anasayfa {'>'} Single Post</p>

                </div>

            </div>

            <div className="blog-page-main">

                <div className="container">

                <div className="blog-page-main-left">
                    
                    <div className="blog-page-post-details">

                        <img src="./img/blog-page/img53.jpg" alt="" />

                        <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas accusantium autem non, incidunt molestias recusandae nemo repudiandae voluptates, perspiciatis asperiores aliquid accusamus, minus itaque id. Harum temporibus facilis illum maiores debitis pariatur eum, nam, magnam aperiam fugiat, tempora rerum adipisci sed sequi quam quaerat. Earum sed vel soluta illum unde!</p>

                        <p><i>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, sed beatae iure doloribus rerum fugit architecto cupiditate numquam eveniet sapiente perspiciatis nam, laborum a saepe.</i></p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non hic, placeat quidem dignissimos repudiandae ut. Tempora laudantium sit veritatis ipsa explicabo aliquam natus eligendi! Labore.</p>

                    </div>

                    <div className="post-interaction">

                        <a href=""><i class="fa-solid fa-user"></i> David Raman</a>
                        <a href=""><i class="fa-solid fa-comments"></i> 12 Yorum</a>
                        <a href=""><i class="fa-solid fa-tag"></i> Travel, Life, Enjoy</a>
                        <a href=""><i class="fa-solid fa-share-nodes"></i> 138 Paylaşım</a>

                    </div>

                    <div className="post-sharing-details">

                        <img src="./img/blog-page/img54.jpg" alt="" />
                        <div>
                            <h4>David Ramon</h4>
                            <h6>www.davidramon.com</h6>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, voluptatum itaque et distinctio eius totam corporis consequuntur sed ullam magnam iste eaque, id qui eum, dicta voluptate animi soluta ad.</p>
                            <div>
                                <a href=""><i className="fa-brands fa-facebook"></i></a>
                                <a href=""><i className="fa-brands fa-twitter"></i></a>
                                <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                <a href=""><i className="fa-brands fa-pinterest"></i></a>
                                <a href=""><i className="fa-brands fa-google-plus-g"></i></a>

                            </div>
                        </div>

                    </div>

                    <div className="related-posts">

                        <h1>Benzer Payaşımlar</h1>
                        <p>Beğenebileceğiniz paylaşımlar.</p>

                        <div>
                            <div>
                                <img src="./img/blog-page/img55.jpg" alt="" />
                                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing.</h2>
                            </div>

                            <div>
                                <img src="./img/blog-page/img71.jpg" alt="" />
                                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                            </div>
                        </div>

                    </div>

                    <div className="this-post-comments">

                        <h1>Gönderi Yorumları</h1>
                        <p>3 yorum</p>

                        <div>
                            <div>
                                <img src="./img/blog-page/img56.jpg" alt="" />
                                <div>
                                    <h4>John Doe <span> - 2 saat önce</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ipsa velit laudantium vero dolorem. Commodi soluta sunt in repellat odit!</p>
                                </div>
                            </div>

                            <div>
                                <img src="./img/blog-page/img57.jpg" alt="" />
                                <div>
                                    <h4>Gretchen Morgan <span>- 11 saat önce</span></h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ut beatae nam facere perspiciatis esse officiis, ratione repellat accusamus quae deserunt aliquid, nisi ipsam maiores, architecto ea est distinctio aperiam!</p>
                                </div>
                            </div>

                            <div>
                                <img src="./img/blog-page/img58.jpg" alt="" />
                                <div>
                                    <h4>John Abruzzi <span>- 1 gün önce</span></h4>
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur hic expedita minus, ipsa repellat sed fugit laborum sunt rerum.</p>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="this-post-add-comment">

                        <h1>Yorum Yap</h1>
                        <p>Gönderiyle ilgili görüşlerini belirt.</p>

                        <form>
                            <div>
                                <input type="text" placeholder="Adınızı giriniz" />
                                <input type="text" placeholder="E-posta adresi giriniz." />
                            </div>
                            <textarea placeholder="Yorumunuzu giriniz." name="" id="" cols="30" rows="10"></textarea>
                            <button>Yorum Yap</button>
                        </form>

                    </div>

                </div>

                <div className="blog-page-main-right">
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

                    <div className="search-input">

                        <input type="text" placeholder="Aranacak Kelime giriniz."/>
                        <button><i class="fa-solid fa-magnifying-glass"></i></button>

                    </div>

                    <div className="recent-popular-posts">

                        <header>
                            <button  className={popular === false ? 'active-button' : {}} onClick={() => (setPopular(false))}>Son Gönderiler</button>
                            <button  className={popular === true ? 'active-button' : {}} onClick={() => (setPopular(true))}>Popüler Gönderiler</button>
                        </header>

                        <main>

                            {popular === false && 
                            <div>

                            <div>
                                <img src="./img/blog-page/img27.jpg" alt="" />
                                <div>
                                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                                    <p>25TH MAY</p>
                                </div>
                            </div>

                            <div>
                                <img src="./img/blog-page/img28.jpg" alt="" />
                                <div>
                                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                                    <p>25TH MAY</p>
                                </div>
                            </div>

                            <div>
                                <img src="./img/blog-page/img29.jpg" alt="" />
                                <div>
                                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
                                    <p>25TH MAY</p>
                                </div>
                            </div>

                        </div>}

                            {popular === true && 
                            <div>

                            <div>
                                <img src="./img/blog-page/img29.jpg" alt="" />
                                <div>
                                    <h1>Illo, possimus error! Voluptas vel repellendus odit laudantium vero.</h1>
                                    <p>25TH MAY</p>
                                </div>
                            </div>

                            <div>
                                <img src="./img/blog-page/img27.jpg" alt="" />
                                <div>
                                    <h1>Illo, possimus error! Voluptas vel repellendus odit laudantium vero.</h1>
                                    <p>25TH MAY</p>
                                </div>
                            </div>

                            <div>
                                <img src="./img/blog-page/img28.jpg" alt="" />
                                <div>
                                    <h1>Illo, possimus error! Voluptas vel repellendus odit laudantium vero.</h1>
                                    <p>25TH MAY</p>
                                </div>
                            </div>

                        </div>}

                        </main>


                    </div>

                    <div className="this-post-categories">
                        
                        <h1>Kategoriler</h1>

                        <div>
                            <p>- Lifestyle</p>
                            <p>- Movie</p>
                            <p>- Sports</p>
                            <p>- Travel</p>
                            <p>- Music</p>
                            <p>- Art</p>
                            <p>- Software</p>
                            <p>- Technology</p>
                            <p>- Recipies</p>
                            <p>- Fashion</p>
                        </div>

                    </div>

                </div>

                </div>


            </div>

            <div className="blog-page-images">
                <img src="./img/home-page/img36.jpg" alt="" />
                <img src="./img/home-page/img35.jpg" alt="" />
                <img src="./img/home-page/img34.jpg" alt="" />
                <img src="./img/home-page/img33.jpg" alt="" />
                <img src="./img/home-page/img32.jpg" alt="" />
                <img src="./img/home-page/img31.jpg" alt="" />
                <img src="./img/home-page/img30.jpg" alt="" />
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