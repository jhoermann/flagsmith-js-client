function Eventjs(){"use strict";var e={};var r=this;for(var t=0;t<arguments.length;t++){var n=arguments[t];switch(typeof n){case"string":e[n]=[];break;case"object":r=n;break;default:throw new TypeError("Eventjs() only accepts string and object parameters");break}}if(r===this&&!(this instanceof Eventjs)){throw new ReferenceError('Eventjs is not called with "new" keyword and no parameter of type object is passed to it')}function s(r){"use strict";if(typeof r!=="string"||!e[r]){throw new ReferenceError("The event name does not exist in this event manager: "+r)}return true}r.on=function(r){"use strict";s(r);for(var t=1;t<arguments.length;t++){var n=arguments[t];if(e[r].indexOf(n)===-1){e[r].push(n)}}return this};r.off=function(t){"use strict";switch(arguments.length){case 0:for(var n in e){if(e.hasOwnProperty(n)){r.off(n)}}break;case 1:s(t);e[t].length=0;break;default:s(t);for(var a=1;a<arguments.length;a++){var i=arguments[a];var o=e[t].indexOf(i);if(o!==-1){e[t].splice(o,1)}}break}return this};r.trigger=function(t){"use strict";s(t);var n=[];for(var a=1;a<arguments.length;a++){n.push(arguments[a])}var i=e[t];var o=[];for(var f=0;f<i.length;f++){var u=i[f];try{u.apply(r,n)}catch(c){o.push({listener:u,error:c})}}if(o.length>0){throw o}return this};return r}
export default new Eventjs( 'event' );
