import axios from "axios"
const get = ({
    url
}) => {
    return new Promise((resolve, reject) => {
        axios({
            url
        }).then(ret => {
            resolve(ret)
        }).then(error => {
            reject(error)
        })
    })
}
const post = ({
    url,
    data
}) => {
    return new Promise((resolve, reject) => {
        axios({
            url,
            data
        }).then(ret => {
            resolve(ret)
        }).then(error => {
            reject(error)
        })
    })
}
export {get,post}