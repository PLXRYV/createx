import './copyright.scss'

const Copyright = () => {
    return (
        <section className="footer__copyright">
            <div className="container">
                <div className="footer__copyright-info">
                    <div className="footer__copyright-text">
                        <p className="copyright">© All rights reserved.</p>
                        <p className="copyright">Made with</p>
                        <img src="/src/images/footer/heart.svg" data-svg-fill="false" alt="image love"/>
                        <p className="copyright">by Createx Studio</p>
                    </div>
                    <a href="#header" className="btn__up">GO TO TOP</a>
                </div>
            </div>
        </section>
    )
}

export default Copyright