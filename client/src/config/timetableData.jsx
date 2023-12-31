// // IMPORTANT
// // Months are in the range 0-11.

// import React, { useState, useEffect } from 'react';
// import useAxiosMethods from '../hooks/useAxiosMethods';

// const TimetableData = () => {

//     //const [data, setData] = useState([]);
//     const { get } = useAxiosMethods();

//     export const data = [
//         {
//             title: 'MIT4204',
//             priorityId: 'MIT',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 8, 30), // year, month, day, hour, minute
//             endDate: new Date(2023, 10, 4, 10, 30), // year, month, day, hour, minute
//             hallName: 'S104',
//             lecturerName: 'TAW',
//             id: 1,
//         }, 
//         {
//             title: 'MIT4203',
//             priorityId: 'MIT',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 10, 45),
//             endDate: new Date(2023, 10, 4, 12, 45),
//             hallName: 'S202',
//             lecturerName: 'KTK(M)/KADM Kasthurirathna',
//             id: 2,
//         }, {
//             title: 'MIT4202',
//             priorityId: 'MIT',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 13, 30),
//             endDate: new Date(2023, 10, 4, 15, 30),
//             hallName: 'S104',
//             lecturerName: 'RND',
//             id: 3,
//         }, {
//             title: 'MCS4201',
//             priorityId: 'MCS',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 8, 30),
//             endDate: new Date(2023, 10, 4, 10, 30),
//             hallName: 'W002',
//             lecturerName: 'HBE',
//             id: 4,
//         }, {
//             title: 'MCS4201',
//             priorityId: 'MCS',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 10, 45),
//             endDate: new Date(2023, 10, 4, 12, 45),
//             hallName: 'W002',
//             lecturerName: 'HBE',
//             id: 5,
//         }, {
//             title: 'MCS4203',
//             priorityId: 'MCS',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 13, 30),
//             endDate: new Date(2023, 10, 4, 15, 30),
//             hallName: 'W002',
//             lecturerName: 'MIE',
//             id: 6,
//         }, {
//             title: 'MCS4204',
//             priorityId: 'MCS',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 15, 45),
//             endDate: new Date(2023, 10, 4, 17, 45),
//             hallName: 'W002',
//             lecturerName: 'TAW',
//             id: 7,
//         }, {
//             title: 'BA4002',
//             priorityId: 'MBA',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 8, 30),
//             endDate: new Date(2023, 10, 4, 10, 30),
//             hallName: 'S202',
//             lecturerName: 'GPS/LNC',
//             id: 8,
//         }, {
//             title: 'BA4003',
//             priorityId: 'MBA',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 10, 45),
//             endDate: new Date(2023, 10, 4, 12, 45),
//             hallName: 'S202',
//             lecturerName: 'KTK(M)/KADM Kasthurirathna',
//             id: 9,
//         }, {
//             title: 'BA4001',
//             priorityId: 'MBA',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 13, 30),
//             endDate: new Date(2023, 10, 4, 15, 30),
//             hallName: 'S202',
//             lecturerName: 'KTK/Mr. Asanka Abeykoon',
//             id: 10,
//         }, {
//             title: 'BA4004',
//             priorityId: 'MBA',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 15, 45),
//             endDate: new Date(2023, 10, 4, 17, 45),
//             hallName: 'S202',
//             lecturerName: 'RND',
//             id: 11,
//         }, {
//             title: 'MIS4203',
//             priorityId: 'MIS',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 10, 45),
//             endDate: new Date(2023, 10, 4, 12, 45),
//             hallName: 'Lab A',
//             lecturerName: 'KMT',
//             id: 12,
//         }, {
//             title: 'MIS4201',
//             priorityId: 'MIS',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 13, 30),
//             endDate: new Date(2023, 10, 4, 15, 30),
//             hallName: 'Lab B',
//             lecturerName: 'VL (KK)',
//             id: 13,
//         }, {
//             title: 'MIS4201',
//             priorityId: 'MIS',
//             semester: 1,
//             startDate: new Date(2023, 10, 4, 15, 45),
//             endDate: new Date(2023, 10, 4, 17, 45),
//             hallName: 'Lab B',
//             lecturerName: 'VL (KK)',
//             id: 14,
//         }, 
//     ];

//     // export const priorityData = [
//     //     {
//     //         text: 'Low Priority',
//     //         id: 1,
//     //     }, {
//     //         text: 'High Priority',
//     //         id: 2,
//     //     },
//     // ];
// }


// export default TimetableData;
