import React from 'react';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FcIcons.FcHome />,
        cName: 'nav-text'
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <FcIcons.FcStatistics />,
        cName: 'nav-text'
    },
    {
        title: 'Timecards',
        path: '/timecards',
        icon: <FcIcons.FcOvertime />,
        cName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <FcIcons.FcCalendar />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FcIcons.FcSettings />,
        cName: 'nav-text'
    }
]