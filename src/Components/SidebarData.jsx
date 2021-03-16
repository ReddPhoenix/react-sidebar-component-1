import React from 'react';
import * as FcIcons from 'react-icons/fc';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <FcIcons.FcHome />,
        contentName: 'nav-text'
    },
    {
        title: 'Statistics',
        path: '/statistics',
        icon: <FcIcons.FcStatistics />,
        contentName: 'nav-text'
    },
    {
        title: 'Timecards',
        path: '/timecards',
        icon: <FcIcons.FcOvertime />,
        contentName: 'nav-text'
    },
    {
        title: 'Calendar',
        path: '/calendar',
        icon: <FcIcons.FcCalendar />,
        contentName: 'nav-text'
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <FcIcons.FcSettings />,
        contentName: 'nav-text'
    }
]