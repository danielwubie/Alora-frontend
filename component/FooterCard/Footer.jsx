import React from "react";
import styles from "./footer.module.css";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
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
            <li>Women's Fashion</li>
            <li>Men's Fashion</li>
            <li>Kids & Baby</li>
            <li>Beauty & Care</li>
            <li>Home & Furniture</li>
            <li>Toys & Games</li>
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
