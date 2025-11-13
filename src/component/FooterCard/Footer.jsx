import React from "react";
import styles from "./footer.module.css";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate()
  const handleClickWomen=()=>{
    navigate("/category/1")
  }
    const handleClickMen=()=>{
    navigate("/category/2")
  }
    const handleClickKids=()=>{
    navigate("/category/37")
  }
    const handleClickBeauty=()=>{
    navigate("/category/38")
  }
    const handleClickHome=()=>{
    navigate("/category/39")
  }
    const handleClickToys=()=>{
    navigate("/category/41")
  }
    return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.section}>
          <h2 className={styles.title}>ALORA</h2>
          <p className={styles.text}>
            Your one-stop destination for fashion, beauty, home, and lifestyle products.
          </p>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Shop</h3>
          <ul className={styles.list}>
            <li onClick={handleClickWomen}>Women's Fashion</li>
            <li onClick={handleClickMen}>Men's Fashion</li>
            <li onClick={handleClickKids}>Kids & Baby</li>
            <li onClick={handleClickBeauty}>Beauty & Care</li>
            <li onClick={handleClickHome}>Home & Furniture</li>
            <li onClick={handleClickToys}>Toys & Games</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Customer Service</h3>
          <ul className={styles.list}>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Shipping Info</li>
            <li>Returns & Exchanges</li>
            <li>Size Guide</li>
            <li>Track Your Order</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Get in Touch</h3>
          <ul className={styles.list}>
            <li>+1 (555) 123-4567</li>
            <li>hello@alora.com</li>
            <li>123 Fashion St, NY 10001</li>
          </ul>

          <div className={styles.icons}>
            <Facebook className={styles.icon} />
            <Instagram className={styles.icon} />
            <Twitter className={styles.icon} />
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <ul className={styles.bottomLinks}>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Cookie Policy</li>
        </ul>
        <p className={styles.copy}>© 2024 Alora. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
