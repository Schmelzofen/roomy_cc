import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import Roomformation from "../roomformation/Roomformation";
import Statistics from '../statistics/Statistics';
import Watch from '../watch/Watch';
import Events from '../events/Events';

import "./Main.scss";


const Main = () => {
    return (
        <div className="main__wrapper">
            <div className="main__container">
                <div className="main__header">
                    <p>New rooms available.
                        <Icon path={mdiChevronLeft} size={1} />
                        <a href="/">Link here</a>
                        <Icon path={mdiChevronRight} size={1} />
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
                </div>
                {/* Statistics & Watch */}
                <div className="statistics__watch">
                    <Statistics />
                    <Watch />
                </div>

                {/* Events */}
                <div className="events__container">
                    <Events />
                </div>
            </div>
            {/* Sidebar Rechts mit Infos zu den Büros */}
            <Roomformation />
        </div>
    );
};

export default Main;
