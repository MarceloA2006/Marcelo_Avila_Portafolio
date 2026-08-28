export default function Services(){
    return(
        <section>
        <h2 className="section-title">Technical skills</h2>
        <div className="services-card-container">
            <div className="services-card">
                <h2 className="services-card-title">Data analysis</h2>
                <p className="services-card-content">Transform data into meaningful insights through analysis and statistical methods.</p>
                <ul className="service-list">
                    <li>Data cleaning & exploration</li>
                    <li>Statistical analysis</li>
                    <li>KPI development</li>
                    <li>Data-driven insights</li>
                </ul>
            </div>
            <div className="services-card">
                <h2 className="services-card-title">SQL & Databases</h2>
                <p className="services-card-content">Work with structured and non-structured data to extract and organize relevant information.</p>
                <ul className="service-list">
                    <li>SQL, complex queries and stored procedures</li>
                    <li>PostgreSQL / MySQL</li>
                    <li>MongoDB</li>
                    <li>Data modeling</li>
                </ul>
            </div>
            <div className="services-card">
                <h2 className="services-card-title">Data visualization</h2>
                <p className="services-card-content">Communicate complex information through clear and meaningful visualizations.</p>
                   <ul className="service-list">
                    <li>KPI dashboards</li>
                    <li>Data storytelling</li>
                    <li>Trend & pattern analysis</li>
                </ul>
            </div>
            <div className="services-card">
                <h2 className="services-card-title">Software Development</h2>
                <p className="services-card-content">Build applications and data-driven solutions using modern development technologies.</p>
                <ul className="service-list">
                    <li>Python / Flask</li>
                    <li>React / JavaScript</li>
                    <li>REST APIs</li>
                    <li>Git & GitHub</li>
                </ul>
            </div>
        </div>
        </section>

    );
}