import request from 'superagent'

const tekkenURL = "https://t7frames-server.herokuapp.com/frame-data"


export function getFrameData () {
    return request.get(tekkenURL).then((response) => response.body)
}