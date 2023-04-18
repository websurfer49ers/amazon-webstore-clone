import http from 'k6/http';
import { check, sleep } from 'k6';

//init
export let options = {
    stages: [
        {duration: '15s', target: 25},
        {duration: '30s', target: 25},
        {duration: '15s', target: 0},
    ],
};

//MongoDB query
//vu script
// export default function () {
//     const params = {
//         timeout: "120s"
//       };
//     let res = http.get('http://localhost:3006/reviews/1', params);
//     check(res, {'status was 200': r=> r.status == 200 });
// //sleep(1);
// }

//Postgres Query
export default function () {
    const params = {
        timeout: "120s"
      };
    let res = http.get('http://localhost:3006/api/rating/product/1', params);
    check(res, {'status was 200': r=> r.status == 200 });
sleep(1);
}
