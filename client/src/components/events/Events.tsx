import Icon from '@mdi/react';
import { mdiArrowRightThin, mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import "./Events.scss";

const Events = () => {
    return (
        <div className="events__container">
            <div className="events__header header-chevron">
                <h2>Continue to watch</h2>
                <div className="events__header__bg">
                    <Icon path={mdiChevronLeft} size={1} />
                    <Icon path={mdiChevronRight} size={1} />
                </div>
            </div>
            <div className="events__content">
                <div className="book__room ebone">
                    <h2>Book a room</h2>
                    <p>Book a room for this week</p>
                    <div className="events__bottom">
                        <Icon path={mdiArrowRightThin} size={1} />
                    </div>

                </div>
                <div className="manage__booking ebtwo">
                    <h2>Manage Your Bookings</h2>
                    <p>Bookingsmanagement</p>
                    <div className="events__bottom">
                        <Icon path={mdiArrowRightThin} size={1} />
                    </div>
                </div>
                <div className="calendar ebthree">
                    <h2>Calendar</h2>
                    <p>Manage your bookings in the calendar</p>
                    <div className="events__bottom">
                        <Icon path={mdiArrowRightThin} size={1} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Events;
