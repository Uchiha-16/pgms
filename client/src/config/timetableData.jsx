// IMPORTANT
// Months are in the range 0-11.

export const data = [
    {
        title: 'Website Re-Design Plan',
        priorityId: 1,
        startDate: new Date(2023, 9, 22, 8, 30), // year, month, day, hour, minute
        endDate: new Date(2023, 9, 22, 10, 30), // year, month, day, hour, minute
        id: 1,
    }, {
        title: 'Book Flights to San Fran for Sales Trip',
        priorityId: 1,
        startDate: new Date(2023, 9, 28, 10, 0),
        endDate: new Date(2023, 9, 28, 12, 0),
        id: 2,
    }, {
        title: 'Install New Router in Dev Room',
        priorityId: 3,
        startDate: new Date(2018, 4, 7, 13),
        endDate: new Date(2018, 4, 7, 15, 30),
        id: 3,
    }, {
        title: 'New Brochures',
        priorityId: 2,
        startDate: new Date(2018, 4, 7, 13, 0),
        endDate: new Date(2018, 4, 7, 15, 15),
        id: 4,
    }, {
        title: 'Install New Database',
        priorityId: 1,
        startDate: new Date(2018, 4, 8, 9),
        endDate: new Date(2018, 4, 8, 12, 15),
        id: 5,
    }, {
        title: 'Approve New Online Marketing Strategy',
        priorityId: 3,
        startDate: new Date(2018, 4, 9, 12, 0),
        endDate: new Date(2018, 4, 9, 14, 0),
        id: 6,
    }, {
        title: 'Upgrade Personal Computers',
        priorityId: 4,
        startDate: new Date(2018, 4, 7, 9),
        endDate: new Date(2018, 4, 7, 11, 30),
        id: 7,
    },
];

export const priorityData = [
    {
        text: 'Low Priority',
        id: 1,
    }, {
        text: 'High Priority',
        id: 2,
    },
];
