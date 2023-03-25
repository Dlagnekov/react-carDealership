import styles from './styles/Footer.module.css';

export const Footer = () => {
    return (

        <footer className={styles["footer-distributed"]}>

            <div className={styles["footer-left"]}>

                <h3>Car Dealership <span>Dlagnekov & Co</span></h3>

                <p className={styles["footer-company-name"]}>Dlagnekov & Co © 2023</p>


            </div>

        </footer>
    );
};