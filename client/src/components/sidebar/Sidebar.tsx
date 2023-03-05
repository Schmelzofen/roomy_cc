import Icon from '@mdi/react';
import { mdiChartBoxOutline, mdiPlayCircleOutline, mdiAccountGroupOutline, mdiHomeCircleOutline } from '@mdi/js';

import "./Sidebar.scss";

const Sidebar = () => {
    return (
        <section className="sidebar__container">
            <div className="sidebar__header">
                <h1>ROOMY</h1>
            </div>
            <div className="sidebar__content">
                <ul className="sidebar__items">
                    <li className="sidebar__item">
                        <Icon path={mdiHomeCircleOutline} size={1} />
                        Home
                    </li>
                    <li className="sidebar__item">
                        <Icon path={mdiChartBoxOutline} size={1} />
                        Bookings
                    </li>
                    <li className="sidebar__item">
                        <Icon path={mdiPlayCircleOutline} size={1} />
                        All Rooms
                    </li>
                    <li className="sidebar__item">
                        <Icon path={mdiAccountGroupOutline} size={1} />
                        Community
                    </li>
                </ul>
            </div>
            <div className="sidebar__footer">
                <ul className="sidebar__footer__items">
                    <li className="sidebar__footer__item">
                        <i className="material-symbols-outlined">
                            notifications
                        </i>
                    </li>
                    <li className="sidebar__footer__item">
                        <i className="material-symbols-outlined">
                            person
                        </i>
                    </li>
                    <li className="sidebar__footer__item">
                        <i className="material-symbols-outlined">
                            logout
                        </i>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;
