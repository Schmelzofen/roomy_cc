import "./Main.scss";

export const Main = () => {
    return (
        <div className="main__container">
            <div className="main__header">
                <p>New rooms available.
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                    <a href="/">Link here</a>
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </p>
            </div>
            <div className="main__content">
                <div className="main__content__header">
                    <div className="main__greeting__header">
                        <h2>Welcome back, Max!</h2>
                        <p>You're doing great this week. Keep it up!</p>
                    </div>
                    <div className="main__greeting__searchbar">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <div className="main__content__search">
                    <div className="main__content__search__input">
                        <input type="text" placeholder="Search for a room" />
                    </div>
                    <div className="main__content__search__button">
                        <button>Search</button>
                    </div>
                </div>
            </div>
        </div>

    );
};
