import entries from 'core-js/fn/object/entries';
import values from 'core-js/fn/object/values';
import assign from 'core-js/fn/object/assign';
import arrayIncludes from 'core-js/fn/array/includes';
import includes from 'core-js/library/fn/string/includes';
import find from 'core-js/fn/array/find';
import findIndex from 'core-js/fn/array/find-index';
import isNaN from 'core-js/fn/number/is-nan';

if (!Array.find) {
	Array.find = find;
}
if (!Array.findIndex) {
	Array.findIndex = findIndex;
}
if (!Object.values) {
	Object.values = values;
}
if (!Object.entries) {
	Object.entries = entries;
}
if (!Object.assign) {
	Object.assign = assign;
}
if (!String.includes) {
	String.includes = includes;
}
if (!Array.includes) {
	Array.includes = arrayIncludes;
}
if(Number.isNaN) {
  Number.isNaN = isNaN;
}