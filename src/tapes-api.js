import request from 'superagent';

const URL = `https://sjc-alchemy.herokuapp.com`;

export function fetchTapes() {
    return request.get(`${URL}/tapes`);
}

export function fetchTape(tapeId) {
    return request.get(`${URL}/tapes/${tapeId}`)
}

export function addTapes(newTape) {
    return request.post(`${URL}/tapes`, newTape);
}
