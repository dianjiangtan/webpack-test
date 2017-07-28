/**
 * Created by TC on 2017/7/27.
 */
import _ from "lodash"
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    // var btn = document.createElement('button');

    // element.innerHTML = _.join(['Hello', 'webapack'], ' ');

    // btn.innerHTML = 'Click me and check the console!';
    // btn.onclick = printMe;
    //
    // element.appendChild(btn);
    var button = document.createElement('button');
    var br = document.createElement('br');

    button.innerHTML = 'Click me and look at the console!';
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.appendChild(br);
    element.appendChild(button);

    // Note that because a network request is involved, some indication
    // of loading would need to be shown in a production-level site/app.
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        var print = module.default;

        print();
    });

    return element;
}
document.body.appendChild(component());

/*import Library from './library';
 // import './styles.css';
 if (module.hot) {
 module.hot.accept('./library', function() {
 console.log('Accepting the updated library module!');
 Library.log();
 })
 }*/

