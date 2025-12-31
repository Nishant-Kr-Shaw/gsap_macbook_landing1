import {footerLinks} from "../Constants/index.js";

const Footer = () => {
    return (
        <footer>
            <div className="info">
                <p>More ways to shop
                    <a href="#" className="text-primary"> Find an Apple Store</a> or
                    <a href="#" className="text-primary"> other retailer </a>
                    near you. Or call 000800 040 1966</p>
                <img src="/logo.svg" alt="Apple logo" />
            </div>
            <hr/>

            <div className="links">
                <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
                <ul>
                    {footerLinks.map(({label, link})=>(
                        <li key={label}>
                            <a href={link}>{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}
export default Footer
