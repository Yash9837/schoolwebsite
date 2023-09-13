import "./footerStyles.css";

const Footer = () =>{
    return(
        <div className="footer">
            <div className="top">
                <div>
                    <h1>School Name</h1>
                <p>
                A place where dreams becomes reality.
                </p>
                </div>
                <div>
                    <a href="/">
                        <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="/">
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <h4>Address</h4>
                    <a>Abc nituk mark Delhi road,Mirzapur park,</a>
                     <a>Los Angles, 201002, UttarPradesh, India.</a>
                    <h4>CBSE AFFILIATION NUMBER</h4>
                    <a>-2130750</a>
                    
                </div>
                <div>
                    <h4>Phone No</h4>
                    <a>+9154216654545</a>
                    <a>+9156255654545</a>
                    <h4>SCHOOL CODE</h4>
                    <a>-52148</a>
                </div>
                <div>
                    <h4>Email ID</h4>
                    <a>FRONT OFFICE :</a>
                    <a>frontoffice@gmail.com</a>
                    <a>FOR ADMISSIONS </a>
                    <a>admission@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;