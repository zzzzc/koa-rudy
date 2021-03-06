/*
 * @Author: enzo
 * @Date:   2016-12-28 16:38:35
 * @Last Modified by:   enzo
 * @Last Modified time: 2016-12-28 18:01:59
 */

import request from "../request";

class Subject extends request {
    constructor() {
        super();

        this.host = global._appConfig.movieSoa;

        this.actions = {
            'subject': 'subject.json',
            'tag': 'tag.json'
        }
    }
}

const subject = new Subject();

export async function getSubject(id) {
    let data = await subject.fetch({
        url: "subject"
    }).then(function(data) {
        return data;
    }, function(error) {
        global.log_error('getSubject error ' + error);
    })

    return data;
}

export async function getTag(id) {
    let data = await subject.fetch({
        url: "tag"
    }).then(function(data) {
        return data;
    }, function(error) {
        global.log_error('getTag error');
    })

    return data;
}