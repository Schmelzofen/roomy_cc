import Icon from '@mdi/react';
import { mdiChevronLeft, mdiChevronRight, mdiPlayCircleOutline } from '@mdi/js';

import "./Watch.scss";

const Watch = () => {
    return (
        <div className="watch__container">
            <div className="watch__header header-chevron">
                <h2>Continue to watch</h2>
                <div className="watch__header__bg">
                    <Icon path={mdiChevronLeft} size={1} />
                    <Icon path={mdiChevronRight} size={1} />
                </div>
            </div>
            <div className="watch__content">
                <div className="bueroEins">
                    <div className="buero__header">
                        <p>Head Office, Nürnberg</p>
                        <Icon path={mdiPlayCircleOutline} size={1} />
                    </div>
                    <span>aktuell 7/15</span>
                </div>
                <div className="bueroZwei">
                    <div className="buero__header">
                        <p>Office, Berlin</p>
                        <Icon path={mdiPlayCircleOutline} size={1} />
                    </div>
                    <span>aktuell 5/10</span>
                </div>
            </div>
        </div>
    );
};

export default Watch;
