/**
 * Created by TC on 2017/7/27.
 */
import _ from "lodash"

function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());