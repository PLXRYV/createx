import './certificate.scss';

const Certificate = () => {
    return (
        <section className="certificate">
            <div className="container">
                <div className="certificate__container">
                    <div className="certificate__content">
                        <div className="certificate__header">
                            <h6 className="certificate__header-text">
                                <span>CREATEX CERTIFICATE</span>
                                Your expertise will be confirmed
                            </h6>
                        </div>
                        <div className="certificate__description">
                            <p className="certificate__description-text">
                                We are accredited by international professional organizations and institutes:
                            </p>
                            <div className="certificate__description-images">
                                <img className="certificate__description-image"
                                     src="/src/images/certificate/certificate_image-1.svg" alt="certificate image"/>
                                <img className="certificate__description-image"
                                     src="/src/images/certificate/certificate_image-2.svg" alt="certificate image"/>
                                <img className="certificate__description-image"
                                     src="/src/images/certificate/certificate_image-3.svg" alt="certificate image"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="certificate__createx" src="/src/images/certificate/certificate_createx.jpg"
                             alt="certificate"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificate;