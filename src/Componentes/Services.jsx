export default function Services(){
    return(
        <section>
        <h2 className="section-title">My Services</h2>
        <div className="services-card-container">
            <div className="services-card">
                <h2 className="services-card-title">Landing pages</h2>
                <p className="services-card-content">Modern websites designed to build trust and convert visitors into clients.</p>
                <ul className="service-list">
                    <li>Optimized</li>
                    <li>Custom design</li>
                    <li>Fast and optimized</li>
                </ul>
            </div>
            <div className="services-card">
                <h2 className="services-card-title">Business websites</h2>
                <p className="services-card-content">Present your business professionally on any device.</p>
                <ul className="service-list">
                    <li>Greater credibility for your business</li>
                    <li>Accessible information for your clients</li>
                    <li>Professional presence on the internet</li>
                </ul>
            </div>
            <div className="services-card">
                <h2 className="services-card-title">UI/UX Design</h2>
                <p className="services-card-content">Design modern, intuitive and responsive interfaces focused on delivering a good user experience before starting development.</p>
                   <ul className="service-list">
                    <li>Responsive interfaces</li>
                    <li>User experience</li>
                    <li>Modern designs</li>
                </ul>
            </div>
            <div className="services-card">
                <h2 className="services-card-title">Frontend Development</h2>
                <p className="services-card-content">Develop modern and responsive interfaces using current technologies.</p>
                <ul className="service-list">
                    <li>Modern technologies</li>
                    <li>Responsive designs</li>
                </ul>
            </div>
        </div>
        </section>

    );
}