import axios from 'axios'

export let instance = axios.create({
    timeout: 10000,
    headers: {'X-Custom-Header': 'foobar'}
});

export let instancepost = axios.create({
    timeout: 10000,
    headers: {'content-type': 'application/json'},
});

export let instancepost_img = axios.create({
    headers: {'content-type': false},
    timeout: 10000,
});


export const getData = (url, param ={}) => {
    return (
        instance.get(`${url}`, {
            params: param
        })
    )
}

export const postData = (url, param={}) => {
    return (
        instancepost.post(`${url}`, param)
    )
}


export const postData_img = (url, param={}) => {
    return (
        instancepost_img.post(`${url}`, param)
    )
}

function xuliehua(oJson){
    for (var i in oJson) {
        if(Object.prototype.toString.call(oJson[i])=='[object Array]'){
            oJson[i]=JSON.stringify(oJson[i]);
        }
    }
    return oJson;
}