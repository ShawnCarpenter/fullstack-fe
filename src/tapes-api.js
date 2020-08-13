import request from 'superagent';

const URL = `https://sjc-alchemy.herokuapp.com/`;

export function fetchTapes() {
    return request.get(`${URL}tapes`);
}

