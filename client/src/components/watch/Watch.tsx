import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';

import "./Watch.scss";

const Watch = () => {
    return (
        <div className="watch__container">
            <div className="watch__header">
                <h2>Continue to watch</h2>
                <div className="watch__header__bg">
                    <Icon path={mdiChevronLeft} size={1} />
                    <Icon path={mdiChevronRight} size={1} />
                </div>
            </div>
            <div className="watch__content">
                <div className="bueroEins">
                    <p>Büro 1</p>
                    <span>Bla</span>
                </div>
                <div className="bueroZwei">
                    <p>Büro 2</p>
                    <span>Bla</span>
                </div>
            </div>
        </div>
    );
};

export default Watch;
