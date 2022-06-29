import React from "react";

import './footer.styles.scss';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-logo">
                <img src="https://salinaka-ecommerce.web.app/images/logo-full.059e10fa5fedbfb65165e7565ed3936f.png" alt="" />
                <h6>© 2022</h6>
                <div className="developed"> Developed By
                    <a href="https://github.com/Yashbharadva">Yash Bharadva</a>
                </div>
                <div className="project"> For this project
                    <a href="https://github.com/Yashbharadva/eye-web">Here</a>
                </div>
            </div>
        </div>
    )
}
export default Footer;