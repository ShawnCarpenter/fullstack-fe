import request from 'superagent';

const URL = `http://localhost:3001`|| 'https://sjc-alchemy.herokuapp.com/';

export function fetchTapes() {
    try{
        return request.get(`${URL}/tapes`);
    }
    catch(err){
        console.log(err);
    }
}

export function fetchTape(tapeId) {
    try{
        return request.get(`${URL}/tapes/${tapeId}`)
    }
    catch(err){
        console.log(err);
    }
}

export function fetchGenres() {
    try{
        return request.get(`${URL}/genres`);
    }
    catch(err){
        console.log(err);
    }
}

export function addTapes(newTape) {
    try{
        return request.post(`${URL}/tapes`, newTape);
    }
    catch(err){
        console.log(err);
    }    
}

export function updateTape(newTape, tapeId) {
    try{
        return request.put(`${URL}/tapes/${tapeId}`, newTape);
    }
    catch(err){
        console.log(err);
    }
}

export function deleteTape(tapeId) {
    try{
        return request.delete(`${URL}/tapes/${tapeId}`);
    }
    catch(err){
        console.log(err);
    }
}