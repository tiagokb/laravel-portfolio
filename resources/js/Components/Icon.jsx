import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Icon = ({icon, className, href, ...props}) => {
    return (
        <div className="flex space-x-4 text-primary">
            <a
                {...props}
                href={href}
                target={"_blank"}
                className={className}
            >
                <FontAwesomeIcon icon={icon} size={"2xl"}/>
            </a>
        </div>
    );
};

export default Icon;
