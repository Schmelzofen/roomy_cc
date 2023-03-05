import Icon from '@mdi/react';
import { mdiChartBoxOutline, mdiPlayCircleOutline, mdiAccountOutline, mdiAccountGroupOutline, mdiHomeCircleOutline, mdiBellOutline, mdiLogout } from '@mdi/js';

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
                        <span>Home</span>
                    </li>
                    <li className="sidebar__item">
                        <Icon path={mdiChartBoxOutline} size={1} />
                        <span>Bookings</span>
                    </li>
                    <li className="sidebar__item">
                        <Icon path={mdiPlayCircleOutline} size={1} />
                        <span>All Rooms</span>
                    </li>
                    <li className="sidebar__item">
                        <Icon path={mdiAccountGroupOutline} size={1} />
                        <span>Community</span>
                    </li>
                </ul>
            </div>
            <div className="sidebar__footer">
                <ul className="sidebar__footer__items">
                    <li className="sidebar__footer__item">
                        <Icon path={mdiBellOutline} size={1} />
                    </li>
                    <li className="sidebar__footer__item">
                        <Icon path={mdiAccountOutline} size={1} />
                    </li>
                    <li className="sidebar__footer__item">
                        <Icon path={mdiLogout} size={1} />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Sidebar;
