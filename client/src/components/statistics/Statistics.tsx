import "./Statistics.scss";

const Statistics = () => {
    return (
        <div className="statistics__container">
            <h2>Statistics</h2>
            <div className="statistics__content">
                <div className="not__available">
                    <h3>3</h3>
                    <p>Räume in Beabeitung</p>
                </div>
                <div className="occupied">
                    <h3>2</h3>
                    <p>Räume sind belegt</p>
                </div>
                <div className="ordered__rooms">
                    <h3>15</h3>
                    <p>Personen haben diese Woche einen Platz in einem Raum gebucht</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;
