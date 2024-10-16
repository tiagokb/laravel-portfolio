import React from 'react'
import {Link} from '@inertiajs/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const Icon = ({icon, className, href, ...props}) => {
    return (
        <div className="flex space-x-4">
            <a
                {...props}
                href={href}
                target={"_blank"}
                className={className}
            >
                <FontAwesomeIcon icon={icon} size={"lg"}/>
            </a>
        </div>
    );
};

export default Icon;
