// 1) створити інтерфейс на основі цього объекта:
//     Зверніть увагу там де масиви... в них може бути багато однотипних об'єктів
//
// {
//     mission_name: Starlink-15 (v1.0),
//     launch_date_local: 2020-10-24T11:31:00-04:00,
//     launch_site: {
//     site_name_long: Cape Canaveral Air Force Station Space Launch Complex 40
// },
//     links: {
//     article_link: http://some.com,
//         video_link: https://youtu/J442-ti-Dhg
// },
//     rocket: {
//     rocket_name: Falcon 9,
//         first_stage: {
//         cores: [
//             {
//                 flight: 7,
//                 core: {
//                     reuse_count: 6,
//                     status: unknown
//                 }
//             }
//         ]
//     },
//     second_stage: {
//         payloads: [
//             {
//                 payload_type: Satellite,
//                 payload_mass_kg: 15400,
//                 payload_mass_lbs: 33951.2
//             }
//         ]
//     }
// }
// }
function sum(a, b) {
    return a + b;
}
function showSum(a, b) {
    console.log(a + b);
}
function incAge(someUser, inc) {
    someUser.age += inc;
    return someUser;
}
var user = {
    name: 'Max',
    age: 12,
    gender: 'male'
};
console.log(sum(1, 2));
showSum(2, 3);
incAge(user, 2);
// interface IUser {
//     name: string;
//     age: number;
//     gender: string;
//
//     sum: (first, second) => number;
//     showSum: (first, second) => void;
//     incAge: (someUser, inc) => object;
//
// }
//
// class UsersFunctions implements IUser {
//
//     constructor(public name: string, public age: number, public gender: string) {
//     }
//
//     sum(first, second): number {
//         return first + second;
//     }
//
//     showSum(first, second): void {
//         console.log('showSum() =>', first + second);
//     }
//
//     incAge(someUser, inc): object {
//         someUser.age += inc;
//         return someUser;
//     }
//
// }
//
// const user1 = new UsersFunctions('Max', 18, 'male');
//
// console.log('sum() => ' + user1.sum(1, 2));
// user1.showSum(1, 2);
// console.log(user1.incAge(user1, 2));
