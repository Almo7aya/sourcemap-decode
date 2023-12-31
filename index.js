/*!
 * Crafted with ❤ by Salla
 */
import { c as commonjsGlobal, a as createCommonjsModule } from './_commonjsHelpers.js';
export { setAssetPath, setNonce, setPlatformOptions } from '@stencil/core/internal/client';

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$1 = Array.isArray;

var isArray_1 = isArray$1;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$4.toString;

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$3(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$3;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$3(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$3;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$2).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED$1 ? undefined : result;
  }
  return hasOwnProperty$1.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString$1(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString$1;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var eventemitter2 = createCommonjsModule(function (module, exports) {
!function(undefined$1) {
  var hasOwnProperty= Object.hasOwnProperty;
  var isArray = Array.isArray ? Array.isArray : function _isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  var defaultMaxListeners = 10;
  var nextTickSupported= typeof process=='object' && typeof process.nextTick=='function';
  var symbolsSupported= typeof Symbol==='function';
  var reflectSupported= typeof Reflect === 'object';
  var setImmediateSupported= typeof setImmediate === 'function';
  var _setImmediate= setImmediateSupported ? setImmediate : setTimeout;
  var ownKeys= symbolsSupported? (reflectSupported && typeof Reflect.ownKeys==='function'? Reflect.ownKeys : function(obj){
    var arr= Object.getOwnPropertyNames(obj);
    arr.push.apply(arr, Object.getOwnPropertySymbols(obj));
    return arr;
  }) : Object.keys;

  function init() {
    this._events = {};
    if (this._conf) {
      configure.call(this, this._conf);
    }
  }

  function configure(conf) {
    if (conf) {
      this._conf = conf;

      conf.delimiter && (this.delimiter = conf.delimiter);

      if(conf.maxListeners!==undefined$1){
          this._maxListeners= conf.maxListeners;
      }

      conf.wildcard && (this.wildcard = conf.wildcard);
      conf.newListener && (this._newListener = conf.newListener);
      conf.removeListener && (this._removeListener = conf.removeListener);
      conf.verboseMemoryLeak && (this.verboseMemoryLeak = conf.verboseMemoryLeak);
      conf.ignoreErrors && (this.ignoreErrors = conf.ignoreErrors);

      if (this.wildcard) {
        this.listenerTree = {};
      }
    }
  }

  function logPossibleMemoryLeak(count, eventName) {
    var errorMsg = '(node) warning: possible EventEmitter memory ' +
        'leak detected. ' + count + ' listeners added. ' +
        'Use emitter.setMaxListeners() to increase limit.';

    if(this.verboseMemoryLeak){
      errorMsg += ' Event name: ' + eventName + '.';
    }

    if(typeof process !== 'undefined' && process.emitWarning){
      var e = new Error(errorMsg);
      e.name = 'MaxListenersExceededWarning';
      e.emitter = this;
      e.count = count;
      process.emitWarning(e);
    } else {
      console.error(errorMsg);

      if (console.trace){
        console.trace();
      }
    }
  }

  var toArray = function (a, b, c) {
    var n = arguments.length;
    switch (n) {
      case 0:
        return [];
      case 1:
        return [a];
      case 2:
        return [a, b];
      case 3:
        return [a, b, c];
      default:
        var arr = new Array(n);
        while (n--) {
          arr[n] = arguments[n];
        }
        return arr;
    }
  };

  function toObject(keys, values) {
    var obj = {};
    var key;
    var len = keys.length;
    var valuesCount = values ? values.length : 0;
    for (var i = 0; i < len; i++) {
      key = keys[i];
      obj[key] = i < valuesCount ? values[i] : undefined$1;
    }
    return obj;
  }

  function TargetObserver(emitter, target, options) {
    this._emitter = emitter;
    this._target = target;
    this._listeners = {};
    this._listenersCount = 0;

    var on, off;

    if (options.on || options.off) {
      on = options.on;
      off = options.off;
    }

    if (target.addEventListener) {
      on = target.addEventListener;
      off = target.removeEventListener;
    } else if (target.addListener) {
      on = target.addListener;
      off = target.removeListener;
    } else if (target.on) {
      on = target.on;
      off = target.off;
    }

    if (!on && !off) {
      throw Error('target does not implement any known event API');
    }

    if (typeof on !== 'function') {
      throw TypeError('on method must be a function');
    }

    if (typeof off !== 'function') {
      throw TypeError('off method must be a function');
    }

    this._on = on;
    this._off = off;

    var _observers= emitter._observers;
    if(_observers){
      _observers.push(this);
    }else {
      emitter._observers= [this];
    }
  }

  Object.assign(TargetObserver.prototype, {
    subscribe: function(event, localEvent, reducer){
      var observer= this;
      var target= this._target;
      var emitter= this._emitter;
      var listeners= this._listeners;
      var handler= function(){
        var args= toArray.apply(null, arguments);
        var eventObj= {
          data: args,
          name: localEvent,
          original: event
        };
        if(reducer){
          var result= reducer.call(target, eventObj);
          if(result!==false){
            emitter.emit.apply(emitter, [eventObj.name].concat(args));
          }
          return;
        }
        emitter.emit.apply(emitter, [localEvent].concat(args));
      };


      if(listeners[event]){
        throw Error('Event \'' + event + '\' is already listening');
      }

      this._listenersCount++;

      if(emitter._newListener && emitter._removeListener && !observer._onNewListener){

        this._onNewListener = function (_event) {
          if (_event === localEvent && listeners[event] === null) {
            listeners[event] = handler;
            observer._on.call(target, event, handler);
          }
        };

        emitter.on('newListener', this._onNewListener);

        this._onRemoveListener= function(_event){
          if(_event === localEvent && !emitter.hasListeners(_event) && listeners[event]){
            listeners[event]= null;
            observer._off.call(target, event, handler);
          }
        };

        listeners[event]= null;

        emitter.on('removeListener', this._onRemoveListener);
      }else {
        listeners[event]= handler;
        observer._on.call(target, event, handler);
      }
    },

    unsubscribe: function(event){
      var observer= this;
      var listeners= this._listeners;
      var emitter= this._emitter;
      var handler;
      var events;
      var off= this._off;
      var target= this._target;
      var i;

      if(event && typeof event!=='string'){
        throw TypeError('event must be a string');
      }

      function clearRefs(){
        if(observer._onNewListener){
          emitter.off('newListener', observer._onNewListener);
          emitter.off('removeListener', observer._onRemoveListener);
          observer._onNewListener= null;
          observer._onRemoveListener= null;
        }
        var index= findTargetIndex.call(emitter, observer);
        emitter._observers.splice(index, 1);
      }

      if(event){
        handler= listeners[event];
        if(!handler) return;
        off.call(target, event, handler);
        delete listeners[event];
        if(!--this._listenersCount){
          clearRefs();
        }
      }else {
        events= ownKeys(listeners);
        i= events.length;
        while(i-->0){
          event= events[i];
          off.call(target, event, listeners[event]);
        }
        this._listeners= {};
        this._listenersCount= 0;
        clearRefs();
      }
    }
  });

  function resolveOptions(options, schema, reducers, allowUnknown) {
    var computedOptions = Object.assign({}, schema);

    if (!options) return computedOptions;

    if (typeof options !== 'object') {
      throw TypeError('options must be an object')
    }

    var keys = Object.keys(options);
    var length = keys.length;
    var option, value;
    var reducer;

    function reject(reason) {
      throw Error('Invalid "' + option + '" option value' + (reason ? '. Reason: ' + reason : ''))
    }

    for (var i = 0; i < length; i++) {
      option = keys[i];
      if (!allowUnknown && !hasOwnProperty.call(schema, option)) {
        throw Error('Unknown "' + option + '" option');
      }
      value = options[option];
      if (value !== undefined$1) {
        reducer = reducers[option];
        computedOptions[option] = reducer ? reducer(value, reject) : value;
      }
    }
    return computedOptions;
  }

  function constructorReducer(value, reject) {
    if (typeof value !== 'function' || !value.hasOwnProperty('prototype')) {
      reject('value must be a constructor');
    }
    return value;
  }

  function makeTypeReducer(types) {
    var message= 'value must be type of ' + types.join('|');
    var len= types.length;
    var firstType= types[0];
    var secondType= types[1];

    if (len === 1) {
      return function (v, reject) {
        if (typeof v === firstType) {
          return v;
        }
        reject(message);
      }
    }

    if (len === 2) {
      return function (v, reject) {
        var kind= typeof v;
        if (kind === firstType || kind === secondType) return v;
        reject(message);
      }
    }

    return function (v, reject) {
      var kind = typeof v;
      var i = len;
      while (i-- > 0) {
        if (kind === types[i]) return v;
      }
      reject(message);
    }
  }

  var functionReducer= makeTypeReducer(['function']);

  var objectFunctionReducer= makeTypeReducer(['object', 'function']);

  function makeCancelablePromise(Promise, executor, options) {
    var isCancelable;
    var callbacks;
    var timer= 0;
    var subscriptionClosed;

    var promise = new Promise(function (resolve, reject, onCancel) {
      options= resolveOptions(options, {
        timeout: 0,
        overload: false
      }, {
        timeout: function(value, reject){
          value*= 1;
          if (typeof value !== 'number' || value < 0 || !Number.isFinite(value)) {
            reject('timeout must be a positive number');
          }
          return value;
        }
      });

      isCancelable = !options.overload && typeof Promise.prototype.cancel === 'function' && typeof onCancel === 'function';

      function cleanup() {
        if (callbacks) {
          callbacks = null;
        }
        if (timer) {
          clearTimeout(timer);
          timer = 0;
        }
      }

      var _resolve= function(value){
        cleanup();
        resolve(value);
      };

      var _reject= function(err){
        cleanup();
        reject(err);
      };

      if (isCancelable) {
        executor(_resolve, _reject, onCancel);
      } else {
        callbacks = [function(reason){
          _reject(reason || Error('canceled'));
        }];
        executor(_resolve, _reject, function (cb) {
          if (subscriptionClosed) {
            throw Error('Unable to subscribe on cancel event asynchronously')
          }
          if (typeof cb !== 'function') {
            throw TypeError('onCancel callback must be a function');
          }
          callbacks.push(cb);
        });
        subscriptionClosed= true;
      }

      if (options.timeout > 0) {
        timer= setTimeout(function(){
          var reason= Error('timeout');
          reason.code = 'ETIMEDOUT';
          timer= 0;
          promise.cancel(reason);
          reject(reason);
        }, options.timeout);
      }
    });

    if (!isCancelable) {
      promise.cancel = function (reason) {
        if (!callbacks) {
          return;
        }
        var length = callbacks.length;
        for (var i = 1; i < length; i++) {
          callbacks[i](reason);
        }
        // internal callback to reject the promise
        callbacks[0](reason);
        callbacks = null;
      };
    }

    return promise;
  }

  function findTargetIndex(observer) {
    var observers = this._observers;
    if(!observers){
      return -1;
    }
    var len = observers.length;
    for (var i = 0; i < len; i++) {
      if (observers[i]._target === observer) return i;
    }
    return -1;
  }

  // Attention, function return type now is array, always !
  // It has zero elements if no any matches found and one or more
  // elements (leafs) if there are matches
  //
  function searchListenerTree(handlers, type, tree, i, typeLength) {
    if (!tree) {
      return null;
    }

    if (i === 0) {
      var kind = typeof type;
      if (kind === 'string') {
        var ns, n, l = 0, j = 0, delimiter = this.delimiter, dl = delimiter.length;
        if ((n = type.indexOf(delimiter)) !== -1) {
          ns = new Array(5);
          do {
            ns[l++] = type.slice(j, n);
            j = n + dl;
          } while ((n = type.indexOf(delimiter, j)) !== -1);

          ns[l++] = type.slice(j);
          type = ns;
          typeLength = l;
        } else {
          type = [type];
          typeLength = 1;
        }
      } else if (kind === 'object') {
        typeLength = type.length;
      } else {
        type = [type];
        typeLength = 1;
      }
    }

    var listeners= null, branch, xTree, xxTree, isolatedBranch, endReached, currentType = type[i],
        nextType = type[i + 1], branches, _listeners;

    if (i === typeLength) {
      //
      // If at the end of the event(s) list and the tree has listeners
      // invoke those listeners.
      //

      if(tree._listeners) {
        if (typeof tree._listeners === 'function') {
          handlers && handlers.push(tree._listeners);
          listeners = [tree];
        } else {
          handlers && handlers.push.apply(handlers, tree._listeners);
          listeners = [tree];
        }
      }
    } else {

      if (currentType === '*') {
        //
        // If the event emitted is '*' at this part
        // or there is a concrete match at this patch
        //
        branches = ownKeys(tree);
        n = branches.length;
        while (n-- > 0) {
          branch = branches[n];
          if (branch !== '_listeners') {
            _listeners = searchListenerTree(handlers, type, tree[branch], i + 1, typeLength);
            if (_listeners) {
              if (listeners) {
                listeners.push.apply(listeners, _listeners);
              } else {
                listeners = _listeners;
              }
            }
          }
        }
        return listeners;
      } else if (currentType === '**') {
        endReached = (i + 1 === typeLength || (i + 2 === typeLength && nextType === '*'));
        if (endReached && tree._listeners) {
          // The next element has a _listeners, add it to the handlers.
          listeners = searchListenerTree(handlers, type, tree, typeLength, typeLength);
        }

        branches = ownKeys(tree);
        n = branches.length;
        while (n-- > 0) {
          branch = branches[n];
          if (branch !== '_listeners') {
            if (branch === '*' || branch === '**') {
              if (tree[branch]._listeners && !endReached) {
                _listeners = searchListenerTree(handlers, type, tree[branch], typeLength, typeLength);
                if (_listeners) {
                  if (listeners) {
                    listeners.push.apply(listeners, _listeners);
                  } else {
                    listeners = _listeners;
                  }
                }
              }
              _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
            } else if (branch === nextType) {
              _listeners = searchListenerTree(handlers, type, tree[branch], i + 2, typeLength);
            } else {
              // No match on this one, shift into the tree but not in the type array.
              _listeners = searchListenerTree(handlers, type, tree[branch], i, typeLength);
            }
            if (_listeners) {
              if (listeners) {
                listeners.push.apply(listeners, _listeners);
              } else {
                listeners = _listeners;
              }
            }
          }
        }
        return listeners;
      } else if (tree[currentType]) {
        listeners = searchListenerTree(handlers, type, tree[currentType], i + 1, typeLength);
      }
    }

      xTree = tree['*'];
    if (xTree) {
      //
      // If the listener tree will allow any match for this part,
      // then recursively explore all branches of the tree
      //
      searchListenerTree(handlers, type, xTree, i + 1, typeLength);
    }

    xxTree = tree['**'];
    if (xxTree) {
      if (i < typeLength) {
        if (xxTree._listeners) {
          // If we have a listener on a '**', it will catch all, so add its handler.
          searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
        }

        // Build arrays of matching next branches and others.
        branches= ownKeys(xxTree);
        n= branches.length;
        while(n-->0){
          branch= branches[n];
          if (branch !== '_listeners') {
            if (branch === nextType) {
              // We know the next element will match, so jump twice.
              searchListenerTree(handlers, type, xxTree[branch], i + 2, typeLength);
            } else if (branch === currentType) {
              // Current node matches, move into the tree.
              searchListenerTree(handlers, type, xxTree[branch], i + 1, typeLength);
            } else {
              isolatedBranch = {};
              isolatedBranch[branch] = xxTree[branch];
              searchListenerTree(handlers, type, {'**': isolatedBranch}, i + 1, typeLength);
            }
          }
        }
      } else if (xxTree._listeners) {
        // We have reached the end and still on a '**'
        searchListenerTree(handlers, type, xxTree, typeLength, typeLength);
      } else if (xxTree['*'] && xxTree['*']._listeners) {
        searchListenerTree(handlers, type, xxTree['*'], typeLength, typeLength);
      }
    }

    return listeners;
  }

  function growListenerTree(type, listener, prepend) {
    var len = 0, j = 0, i, delimiter = this.delimiter, dl= delimiter.length, ns;

    if(typeof type==='string') {
      if ((i = type.indexOf(delimiter)) !== -1) {
        ns = new Array(5);
        do {
          ns[len++] = type.slice(j, i);
          j = i + dl;
        } while ((i = type.indexOf(delimiter, j)) !== -1);

        ns[len++] = type.slice(j);
      }else {
        ns= [type];
        len= 1;
      }
    }else {
      ns= type;
      len= type.length;
    }

    //
    // Looks for two consecutive '**', if so, don't add the event at all.
    //
    if (len > 1) {
      for (i = 0; i + 1 < len; i++) {
        if (ns[i] === '**' && ns[i + 1] === '**') {
          return;
        }
      }
    }



    var tree = this.listenerTree, name;

    for (i = 0; i < len; i++) {
      name = ns[i];

      tree = tree[name] || (tree[name] = {});

      if (i === len - 1) {
        if (!tree._listeners) {
          tree._listeners = listener;
        } else {
          if (typeof tree._listeners === 'function') {
            tree._listeners = [tree._listeners];
          }

          if (prepend) {
            tree._listeners.unshift(listener);
          } else {
            tree._listeners.push(listener);
          }

          if (
              !tree._listeners.warned &&
              this._maxListeners > 0 &&
              tree._listeners.length > this._maxListeners
          ) {
            tree._listeners.warned = true;
            logPossibleMemoryLeak.call(this, tree._listeners.length, name);
          }
        }
        return true;
      }
    }

    return true;
  }

  function collectTreeEvents(tree, events, root, asArray){
     var branches= ownKeys(tree);
     var i= branches.length;
     var branch, branchName, path;
     var hasListeners= tree['_listeners'];
     var isArrayPath;

     while(i-->0){
         branchName= branches[i];

         branch= tree[branchName];

         if(branchName==='_listeners'){
             path= root;
         }else {
             path = root ? root.concat(branchName) : [branchName];
         }

         isArrayPath= asArray || typeof branchName==='symbol';

         hasListeners && events.push(isArrayPath? path : path.join(this.delimiter));

         if(typeof branch==='object'){
             collectTreeEvents.call(this, branch, events, path, isArrayPath);
         }
     }

     return events;
  }

  function recursivelyGarbageCollect(root) {
    var keys = ownKeys(root);
    var i= keys.length;
    var obj, key, flag;
    while(i-->0){
      key = keys[i];
      obj = root[key];

      if(obj){
          flag= true;
          if(key !== '_listeners' && !recursivelyGarbageCollect(obj)){
             delete root[key];
          }
      }
    }

    return flag;
  }

  function Listener(emitter, event, listener){
    this.emitter= emitter;
    this.event= event;
    this.listener= listener;
  }

  Listener.prototype.off= function(){
    this.emitter.off(this.event, this.listener);
    return this;
  };

  function setupListener(event, listener, options){
      if (options === true) {
        promisify = true;
      } else if (options === false) {
        async = true;
      } else {
        if (!options || typeof options !== 'object') {
          throw TypeError('options should be an object or true');
        }
        var async = options.async;
        var promisify = options.promisify;
        var nextTick = options.nextTick;
        var objectify = options.objectify;
      }

      if (async || nextTick || promisify) {
        var _listener = listener;
        var _origin = listener._origin || listener;

        if (nextTick && !nextTickSupported) {
          throw Error('process.nextTick is not supported');
        }

        if (promisify === undefined$1) {
          promisify = listener.constructor.name === 'AsyncFunction';
        }

        listener = function () {
          var args = arguments;
          var context = this;
          var event = this.event;

          return promisify ? (nextTick ? Promise.resolve() : new Promise(function (resolve) {
            _setImmediate(resolve);
          }).then(function () {
            context.event = event;
            return _listener.apply(context, args)
          })) : (nextTick ? process.nextTick : _setImmediate)(function () {
            context.event = event;
            _listener.apply(context, args);
          });
        };

        listener._async = true;
        listener._origin = _origin;
      }

    return [listener, objectify? new Listener(this, event, listener): this];
  }

  function EventEmitter(conf) {
    this._events = {};
    this._newListener = false;
    this._removeListener = false;
    this.verboseMemoryLeak = false;
    configure.call(this, conf);
  }

  EventEmitter.EventEmitter2 = EventEmitter; // backwards compatibility for exporting EventEmitter property

  EventEmitter.prototype.listenTo= function(target, events, options){
    if(typeof target!=='object'){
      throw TypeError('target musts be an object');
    }

    var emitter= this;

    options = resolveOptions(options, {
      on: undefined$1,
      off: undefined$1,
      reducers: undefined$1
    }, {
      on: functionReducer,
      off: functionReducer,
      reducers: objectFunctionReducer
    });

    function listen(events){
      if(typeof events!=='object'){
        throw TypeError('events must be an object');
      }

      var reducers= options.reducers;
      var index= findTargetIndex.call(emitter, target);
      var observer;

      if(index===-1){
        observer= new TargetObserver(emitter, target, options);
      }else {
        observer= emitter._observers[index];
      }

      var keys= ownKeys(events);
      var len= keys.length;
      var event;
      var isSingleReducer= typeof reducers==='function';

      for(var i=0; i<len; i++){
        event= keys[i];
        observer.subscribe(
            event,
            events[event] || event,
            isSingleReducer ? reducers : reducers && reducers[event]
        );
      }
    }

    isArray(events)?
        listen(toObject(events)) :
        (typeof events==='string'? listen(toObject(events.split(/\s+/))): listen(events));

    return this;
  };

  EventEmitter.prototype.stopListeningTo = function (target, event) {
    var observers = this._observers;

    if(!observers){
      return false;
    }

    var i = observers.length;
    var observer;
    var matched= false;

    if(target && typeof target!=='object'){
      throw TypeError('target should be an object');
    }

    while (i-- > 0) {
      observer = observers[i];
      if (!target || observer._target === target) {
        observer.unsubscribe(event);
        matched= true;
      }
    }

    return matched;
  };

  // By default EventEmitters will print a warning if more than
  // 10 listeners are added to it. This is a useful default which
  // helps finding memory leaks.
  //
  // Obviously not all Emitters should be limited to 10. This function allows
  // that to be increased. Set to zero for unlimited.

  EventEmitter.prototype.delimiter = '.';

  EventEmitter.prototype.setMaxListeners = function(n) {
    if (n !== undefined$1) {
      this._maxListeners = n;
      if (!this._conf) this._conf = {};
      this._conf.maxListeners = n;
    }
  };

  EventEmitter.prototype.getMaxListeners = function() {
    return this._maxListeners;
  };

  EventEmitter.prototype.event = '';

  EventEmitter.prototype.once = function(event, fn, options) {
    return this._once(event, fn, false, options);
  };

  EventEmitter.prototype.prependOnceListener = function(event, fn, options) {
    return this._once(event, fn, true, options);
  };

  EventEmitter.prototype._once = function(event, fn, prepend, options) {
    return this._many(event, 1, fn, prepend, options);
  };

  EventEmitter.prototype.many = function(event, ttl, fn, options) {
    return this._many(event, ttl, fn, false, options);
  };

  EventEmitter.prototype.prependMany = function(event, ttl, fn, options) {
    return this._many(event, ttl, fn, true, options);
  };

  EventEmitter.prototype._many = function(event, ttl, fn, prepend, options) {
    var self = this;

    if (typeof fn !== 'function') {
      throw new Error('many only accepts instances of Function');
    }

    function listener() {
      if (--ttl === 0) {
        self.off(event, listener);
      }
      return fn.apply(this, arguments);
    }

    listener._origin = fn;

    return this._on(event, listener, prepend, options);
  };

  EventEmitter.prototype.emit = function() {
    if (!this._events && !this._all) {
      return false;
    }

    this._events || init.call(this);

    var type = arguments[0], ns, wildcard= this.wildcard;
    var args,l,i,j, containsSymbol;

    if (type === 'newListener' && !this._newListener) {
      if (!this._events.newListener) {
        return false;
      }
    }

    if (wildcard) {
      ns= type;
      if(type!=='newListener' && type!=='removeListener'){
        if (typeof type === 'object') {
          l = type.length;
          if (symbolsSupported) {
            for (i = 0; i < l; i++) {
              if (typeof type[i] === 'symbol') {
                containsSymbol = true;
                break;
              }
            }
          }
          if (!containsSymbol) {
            type = type.join(this.delimiter);
          }
        }
      }
    }

    var al = arguments.length;
    var handler;

    if (this._all && this._all.length) {
      handler = this._all.slice();

      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this, type);
          break;
        case 2:
          handler[i].call(this, type, arguments[1]);
          break;
        case 3:
          handler[i].call(this, type, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, arguments);
        }
      }
    }

    if (wildcard) {
      handler = [];
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0, l);
    } else {
      handler = this._events[type];
      if (typeof handler === 'function') {
        this.event = type;
        switch (al) {
        case 1:
          handler.call(this);
          break;
        case 2:
          handler.call(this, arguments[1]);
          break;
        case 3:
          handler.call(this, arguments[1], arguments[2]);
          break;
        default:
          args = new Array(al - 1);
          for (j = 1; j < al; j++) args[j - 1] = arguments[j];
          handler.apply(this, args);
        }
        return true;
      } else if (handler) {
        // need to make copy of handlers because list can change in the middle
        // of emit call
        handler = handler.slice();
      }
    }

    if (handler && handler.length) {
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          handler[i].call(this);
          break;
        case 2:
          handler[i].call(this, arguments[1]);
          break;
        case 3:
          handler[i].call(this, arguments[1], arguments[2]);
          break;
        default:
          handler[i].apply(this, args);
        }
      }
      return true;
    } else if (!this.ignoreErrors && !this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        throw arguments[1]; // Unhandled 'error' event
      } else {
        throw new Error("Uncaught, unspecified 'error' event.");
      }
    }

    return !!this._all;
  };

  EventEmitter.prototype.emitAsync = function() {
    if (!this._events && !this._all) {
      return false;
    }

    this._events || init.call(this);

    var type = arguments[0], wildcard= this.wildcard, ns, containsSymbol;
    var args,l,i,j;

    if (type === 'newListener' && !this._newListener) {
        if (!this._events.newListener) { return Promise.resolve([false]); }
    }

    if (wildcard) {
      ns= type;
      if(type!=='newListener' && type!=='removeListener'){
        if (typeof type === 'object') {
          l = type.length;
          if (symbolsSupported) {
            for (i = 0; i < l; i++) {
              if (typeof type[i] === 'symbol') {
                containsSymbol = true;
                break;
              }
            }
          }
          if (!containsSymbol) {
            type = type.join(this.delimiter);
          }
        }
      }
    }

    var promises= [];

    var al = arguments.length;
    var handler;

    if (this._all) {
      for (i = 0, l = this._all.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(this._all[i].call(this, type));
          break;
        case 2:
          promises.push(this._all[i].call(this, type, arguments[1]));
          break;
        case 3:
          promises.push(this._all[i].call(this, type, arguments[1], arguments[2]));
          break;
        default:
          promises.push(this._all[i].apply(this, arguments));
        }
      }
    }

    if (wildcard) {
      handler = [];
      searchListenerTree.call(this, handler, ns, this.listenerTree, 0);
    } else {
      handler = this._events[type];
    }

    if (typeof handler === 'function') {
      this.event = type;
      switch (al) {
      case 1:
        promises.push(handler.call(this));
        break;
      case 2:
        promises.push(handler.call(this, arguments[1]));
        break;
      case 3:
        promises.push(handler.call(this, arguments[1], arguments[2]));
        break;
      default:
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
        promises.push(handler.apply(this, args));
      }
    } else if (handler && handler.length) {
      handler = handler.slice();
      if (al > 3) {
        args = new Array(al - 1);
        for (j = 1; j < al; j++) args[j - 1] = arguments[j];
      }
      for (i = 0, l = handler.length; i < l; i++) {
        this.event = type;
        switch (al) {
        case 1:
          promises.push(handler[i].call(this));
          break;
        case 2:
          promises.push(handler[i].call(this, arguments[1]));
          break;
        case 3:
          promises.push(handler[i].call(this, arguments[1], arguments[2]));
          break;
        default:
          promises.push(handler[i].apply(this, args));
        }
      }
    } else if (!this.ignoreErrors && !this._all && type === 'error') {
      if (arguments[1] instanceof Error) {
        return Promise.reject(arguments[1]); // Unhandled 'error' event
      } else {
        return Promise.reject("Uncaught, unspecified 'error' event.");
      }
    }

    return Promise.all(promises);
  };

  EventEmitter.prototype.on = function(type, listener, options) {
    return this._on(type, listener, false, options);
  };

  EventEmitter.prototype.prependListener = function(type, listener, options) {
    return this._on(type, listener, true, options);
  };

  EventEmitter.prototype.onAny = function(fn) {
    return this._onAny(fn, false);
  };

  EventEmitter.prototype.prependAny = function(fn) {
    return this._onAny(fn, true);
  };

  EventEmitter.prototype.addListener = EventEmitter.prototype.on;

  EventEmitter.prototype._onAny = function(fn, prepend){
    if (typeof fn !== 'function') {
      throw new Error('onAny only accepts instances of Function');
    }

    if (!this._all) {
      this._all = [];
    }

    // Add the function to the event listener collection.
    if(prepend){
      this._all.unshift(fn);
    }else {
      this._all.push(fn);
    }

    return this;
  };

  EventEmitter.prototype._on = function(type, listener, prepend, options) {
    if (typeof type === 'function') {
      this._onAny(type, listener);
      return this;
    }

    if (typeof listener !== 'function') {
      throw new Error('on only accepts instances of Function');
    }
    this._events || init.call(this);

    var returnValue= this, temp;

    if (options !== undefined$1) {
      temp = setupListener.call(this, type, listener, options);
      listener = temp[0];
      returnValue = temp[1];
    }

    // To avoid recursion in the case that type == "newListeners"! Before
    // adding it to the listeners, first emit "newListeners".
    if (this._newListener) {
      this.emit('newListener', type, listener);
    }

    if (this.wildcard) {
      growListenerTree.call(this, type, listener, prepend);
      return returnValue;
    }

    if (!this._events[type]) {
      // Optimize the case of one listener. Don't need the extra array object.
      this._events[type] = listener;
    } else {
      if (typeof this._events[type] === 'function') {
        // Change to array.
        this._events[type] = [this._events[type]];
      }

      // If we've already got an array, just add
      if(prepend){
        this._events[type].unshift(listener);
      }else {
        this._events[type].push(listener);
      }

      // Check for listener leak
      if (
        !this._events[type].warned &&
        this._maxListeners > 0 &&
        this._events[type].length > this._maxListeners
      ) {
        this._events[type].warned = true;
        logPossibleMemoryLeak.call(this, this._events[type].length, type);
      }
    }

    return returnValue;
  };

  EventEmitter.prototype.off = function(type, listener) {
    if (typeof listener !== 'function') {
      throw new Error('removeListener only takes instances of Function');
    }

    var handlers,leafs=[];

    if(this.wildcard) {
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      leafs = searchListenerTree.call(this, null, ns, this.listenerTree, 0);
      if(!leafs) return this;
    } else {
      // does not use listeners(), so no side effect of creating _events[type]
      if (!this._events[type]) return this;
      handlers = this._events[type];
      leafs.push({_listeners:handlers});
    }

    for (var iLeaf=0; iLeaf<leafs.length; iLeaf++) {
      var leaf = leafs[iLeaf];
      handlers = leaf._listeners;
      if (isArray(handlers)) {

        var position = -1;

        for (var i = 0, length = handlers.length; i < length; i++) {
          if (handlers[i] === listener ||
            (handlers[i].listener && handlers[i].listener === listener) ||
            (handlers[i]._origin && handlers[i]._origin === listener)) {
            position = i;
            break;
          }
        }

        if (position < 0) {
          continue;
        }

        if(this.wildcard) {
          leaf._listeners.splice(position, 1);
        }
        else {
          this._events[type].splice(position, 1);
        }

        if (handlers.length === 0) {
          if(this.wildcard) {
            delete leaf._listeners;
          }
          else {
            delete this._events[type];
          }
        }
        if (this._removeListener)
          this.emit("removeListener", type, listener);

        return this;
      }
      else if (handlers === listener ||
        (handlers.listener && handlers.listener === listener) ||
        (handlers._origin && handlers._origin === listener)) {
        if(this.wildcard) {
          delete leaf._listeners;
        }
        else {
          delete this._events[type];
        }
        if (this._removeListener)
          this.emit("removeListener", type, listener);
      }
    }

    this.listenerTree && recursivelyGarbageCollect(this.listenerTree);

    return this;
  };

  EventEmitter.prototype.offAny = function(fn) {
    var i = 0, l = 0, fns;
    if (fn && this._all && this._all.length > 0) {
      fns = this._all;
      for(i = 0, l = fns.length; i < l; i++) {
        if(fn === fns[i]) {
          fns.splice(i, 1);
          if (this._removeListener)
            this.emit("removeListenerAny", fn);
          return this;
        }
      }
    } else {
      fns = this._all;
      if (this._removeListener) {
        for(i = 0, l = fns.length; i < l; i++)
          this.emit("removeListenerAny", fns[i]);
      }
      this._all = [];
    }
    return this;
  };

  EventEmitter.prototype.removeListener = EventEmitter.prototype.off;

  EventEmitter.prototype.removeAllListeners = function (type) {
    if (type === undefined$1) {
      !this._events || init.call(this);
      return this;
    }

    if (this.wildcard) {
      var leafs = searchListenerTree.call(this, null, type, this.listenerTree, 0), leaf, i;
      if (!leafs) return this;
      for (i = 0; i < leafs.length; i++) {
        leaf = leafs[i];
        leaf._listeners = null;
      }
      this.listenerTree && recursivelyGarbageCollect(this.listenerTree);
    } else if (this._events) {
      this._events[type] = null;
    }
    return this;
  };

  EventEmitter.prototype.listeners = function (type) {
    var _events = this._events;
    var keys, listeners, allListeners;
    var i;
    var listenerTree;

    if (type === undefined$1) {
      if (this.wildcard) {
        throw Error('event name required for wildcard emitter');
      }

      if (!_events) {
        return [];
      }

      keys = ownKeys(_events);
      i = keys.length;
      allListeners = [];
      while (i-- > 0) {
        listeners = _events[keys[i]];
        if (typeof listeners === 'function') {
          allListeners.push(listeners);
        } else {
          allListeners.push.apply(allListeners, listeners);
        }
      }
      return allListeners;
    } else {
      if (this.wildcard) {
        listenerTree= this.listenerTree;
        if(!listenerTree) return [];
        var handlers = [];
        var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
        searchListenerTree.call(this, handlers, ns, listenerTree, 0);
        return handlers;
      }

      if (!_events) {
        return [];
      }

      listeners = _events[type];

      if (!listeners) {
        return [];
      }
      return typeof listeners === 'function' ? [listeners] : listeners;
    }
  };

  EventEmitter.prototype.eventNames = function(nsAsArray){
    var _events= this._events;
    return this.wildcard? collectTreeEvents.call(this, this.listenerTree, [], null, nsAsArray) : (_events? ownKeys(_events) : []);
  };

  EventEmitter.prototype.listenerCount = function(type) {
    return this.listeners(type).length;
  };

  EventEmitter.prototype.hasListeners = function (type) {
    if (this.wildcard) {
      var handlers = [];
      var ns = typeof type === 'string' ? type.split(this.delimiter) : type.slice();
      searchListenerTree.call(this, handlers, ns, this.listenerTree, 0);
      return handlers.length > 0;
    }

    var _events = this._events;
    var _all = this._all;

    return !!(_all && _all.length || _events && (type === undefined$1 ? ownKeys(_events).length : _events[type]));
  };

  EventEmitter.prototype.listenersAny = function() {

    if(this._all) {
      return this._all;
    }
    else {
      return [];
    }

  };

  EventEmitter.prototype.waitFor = function (event, options) {
    var self = this;
    var type = typeof options;
    if (type === 'number') {
      options = {timeout: options};
    } else if (type === 'function') {
      options = {filter: options};
    }

    options= resolveOptions(options, {
      timeout: 0,
      filter: undefined$1,
      handleError: false,
      Promise: Promise,
      overload: false
    }, {
      filter: functionReducer,
      Promise: constructorReducer
    });

    return makeCancelablePromise(options.Promise, function (resolve, reject, onCancel) {
      function listener() {
        var filter= options.filter;
        if (filter && !filter.apply(self, arguments)) {
          return;
        }
        self.off(event, listener);
        if (options.handleError) {
          var err = arguments[0];
          err ? reject(err) : resolve(toArray.apply(null, arguments).slice(1));
        } else {
          resolve(toArray.apply(null, arguments));
        }
      }

      onCancel(function(){
        self.off(event, listener);
      });

      self._on(event, listener, false);
    }, {
      timeout: options.timeout,
      overload: options.overload
    })
  };

  function once(emitter, name, options) {
    options= resolveOptions(options, {
      Promise: Promise,
      timeout: 0,
      overload: false
    }, {
      Promise: constructorReducer
    });

    var _Promise= options.Promise;

    return makeCancelablePromise(_Promise, function(resolve, reject, onCancel){
      var handler;
      if (typeof emitter.addEventListener === 'function') {
        handler=  function () {
          resolve(toArray.apply(null, arguments));
        };

        onCancel(function(){
          emitter.removeEventListener(name, handler);
        });

        emitter.addEventListener(
            name,
            handler,
            {once: true}
        );
        return;
      }

      var eventListener = function(){
        errorListener && emitter.removeListener('error', errorListener);
        resolve(toArray.apply(null, arguments));
      };

      var errorListener;

      if (name !== 'error') {
        errorListener = function (err){
          emitter.removeListener(name, eventListener);
          reject(err);
        };

        emitter.once('error', errorListener);
      }

      onCancel(function(){
        errorListener && emitter.removeListener('error', errorListener);
        emitter.removeListener(name, eventListener);
      });

      emitter.once(name, eventListener);
    }, {
      timeout: options.timeout,
      overload: options.overload
    });
  }

  var prototype= EventEmitter.prototype;

  Object.defineProperties(EventEmitter, {
    defaultMaxListeners: {
      get: function () {
        return prototype._maxListeners;
      },
      set: function (n) {
        if (typeof n !== 'number' || n < 0 || Number.isNaN(n)) {
          throw TypeError('n must be a non-negative number')
        }
        prototype._maxListeners = n;
      },
      enumerable: true
    },
    once: {
      value: once,
      writable: true,
      configurable: true
    }
  });

  Object.defineProperties(prototype, {
      _maxListeners: {
          value: defaultMaxListeners,
          writable: true,
          configurable: true
      },
      _observers: {value: null, writable: true, configurable: true}
  });

  if (typeof undefined$1 === 'function' && undefined$1.amd) {
     // AMD. Register as an anonymous module.
    undefined$1(function() {
      return EventEmitter;
    });
  } else {
    // CommonJS
    module.exports = EventEmitter;
  }
}();
});

var assign = make_assign();
var create$1 = make_create();
var trim$2 = make_trim();
var Global$3 = (typeof window !== 'undefined' ? window : commonjsGlobal);

var util = {
	assign: assign,
	create: create$1,
	trim: trim$2,
	bind: bind$2,
	slice: slice$1,
	each: each$5,
	map: map,
	pluck: pluck$1,
	isList: isList$1,
	isFunction: isFunction$2,
	isObject: isObject$2,
	Global: Global$3
};

function make_assign() {
	if (Object.assign) {
		return Object.assign
	} else {
		return function shimAssign(obj, props1, props2, etc) {
			for (var i = 1; i < arguments.length; i++) {
				each$5(Object(arguments[i]), function(val, key) {
					obj[key] = val;
				});
			}			
			return obj
		}
	}
}

function make_create() {
	if (Object.create) {
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice$1(arguments, 1);
			return assign.apply(this, [Object.create(obj)].concat(assignArgsList))
		}
	} else {
		function F() {} // eslint-disable-line no-inner-declarations
		return function create(obj, assignProps1, assignProps2, etc) {
			var assignArgsList = slice$1(arguments, 1);
			F.prototype = obj;
			return assign.apply(this, [new F()].concat(assignArgsList))
		}
	}
}

function make_trim() {
	if (String.prototype.trim) {
		return function trim(str) {
			return String.prototype.trim.call(str)
		}
	} else {
		return function trim(str) {
			return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
		}
	}
}

function bind$2(obj, fn) {
	return function() {
		return fn.apply(obj, Array.prototype.slice.call(arguments, 0))
	}
}

function slice$1(arr, index) {
	return Array.prototype.slice.call(arr, index || 0)
}

function each$5(obj, fn) {
	pluck$1(obj, function(val, key) {
		fn(val, key);
		return false
	});
}

function map(obj, fn) {
	var res = (isList$1(obj) ? [] : {});
	pluck$1(obj, function(v, k) {
		res[k] = fn(v, k);
		return false
	});
	return res
}

function pluck$1(obj, fn) {
	if (isList$1(obj)) {
		for (var i=0; i<obj.length; i++) {
			if (fn(obj[i], i)) {
				return obj[i]
			}
		}
	} else {
		for (var key in obj) {
			if (obj.hasOwnProperty(key)) {
				if (fn(obj[key], key)) {
					return obj[key]
				}
			}
		}
	}
}

function isList$1(val) {
	return (val != null && typeof val != 'function' && typeof val.length == 'number')
}

function isFunction$2(val) {
	return val && {}.toString.call(val) === '[object Function]'
}

function isObject$2(val) {
	return val && {}.toString.call(val) === '[object Object]'
}

var slice = util.slice;
var pluck = util.pluck;
var each$4 = util.each;
var bind$1 = util.bind;
var create = util.create;
var isList = util.isList;
var isFunction$1 = util.isFunction;
var isObject$1 = util.isObject;

var storeEngine = {
	createStore: createStore
};

var storeAPI = {
	version: '2.0.12',
	enabled: false,
	
	// get returns the value of the given key. If that value
	// is undefined, it returns optionalDefaultValue instead.
	get: function(key, optionalDefaultValue) {
		var data = this.storage.read(this._namespacePrefix + key);
		return this._deserialize(data, optionalDefaultValue)
	},

	// set will store the given value at key and returns value.
	// Calling set with value === undefined is equivalent to calling remove.
	set: function(key, value) {
		if (value === undefined) {
			return this.remove(key)
		}
		this.storage.write(this._namespacePrefix + key, this._serialize(value));
		return value
	},

	// remove deletes the key and value stored at the given key.
	remove: function(key) {
		this.storage.remove(this._namespacePrefix + key);
	},

	// each will call the given callback once for each key-value pair
	// in this store.
	each: function(callback) {
		var self = this;
		this.storage.each(function(val, namespacedKey) {
			callback.call(self, self._deserialize(val), (namespacedKey || '').replace(self._namespaceRegexp, ''));
		});
	},

	// clearAll will remove all the stored key-value pairs in this store.
	clearAll: function() {
		this.storage.clearAll();
	},

	// additional functionality that can't live in plugins
	// ---------------------------------------------------

	// hasNamespace returns true if this store instance has the given namespace.
	hasNamespace: function(namespace) {
		return (this._namespacePrefix == '__storejs_'+namespace+'_')
	},

	// createStore creates a store.js instance with the first
	// functioning storage in the list of storage candidates,
	// and applies the the given mixins to the instance.
	createStore: function() {
		return createStore.apply(this, arguments)
	},
	
	addPlugin: function(plugin) {
		this._addPlugin(plugin);
	},
	
	namespace: function(namespace) {
		return createStore(this.storage, this.plugins, namespace)
	}
};

function _warn() {
	var _console = (typeof console == 'undefined' ? null : console);
	if (!_console) { return }
	var fn = (_console.warn ? _console.warn : _console.log);
	fn.apply(_console, arguments);
}

function createStore(storages, plugins, namespace) {
	if (!namespace) {
		namespace = '';
	}
	if (storages && !isList(storages)) {
		storages = [storages];
	}
	if (plugins && !isList(plugins)) {
		plugins = [plugins];
	}

	var namespacePrefix = (namespace ? '__storejs_'+namespace+'_' : '');
	var namespaceRegexp = (namespace ? new RegExp('^'+namespacePrefix) : null);
	var legalNamespaces = /^[a-zA-Z0-9_\-]*$/; // alpha-numeric + underscore and dash
	if (!legalNamespaces.test(namespace)) {
		throw new Error('store.js namespaces can only have alphanumerics + underscores and dashes')
	}
	
	var _privateStoreProps = {
		_namespacePrefix: namespacePrefix,
		_namespaceRegexp: namespaceRegexp,

		_testStorage: function(storage) {
			try {
				var testStr = '__storejs__test__';
				storage.write(testStr, testStr);
				var ok = (storage.read(testStr) === testStr);
				storage.remove(testStr);
				return ok
			} catch(e) {
				return false
			}
		},

		_assignPluginFnProp: function(pluginFnProp, propName) {
			var oldFn = this[propName];
			this[propName] = function pluginFn() {
				var args = slice(arguments, 0);
				var self = this;

				// super_fn calls the old function which was overwritten by
				// this mixin.
				function super_fn() {
					if (!oldFn) { return }
					each$4(arguments, function(arg, i) {
						args[i] = arg;
					});
					return oldFn.apply(self, args)
				}

				// Give mixing function access to super_fn by prefixing all mixin function
				// arguments with super_fn.
				var newFnArgs = [super_fn].concat(args);

				return pluginFnProp.apply(self, newFnArgs)
			};
		},

		_serialize: function(obj) {
			return JSON.stringify(obj)
		},

		_deserialize: function(strVal, defaultVal) {
			if (!strVal) { return defaultVal }
			// It is possible that a raw string value has been previously stored
			// in a storage without using store.js, meaning it will be a raw
			// string value instead of a JSON serialized string. By defaulting
			// to the raw string value in case of a JSON parse error, we allow
			// for past stored values to be forwards-compatible with store.js
			var val = '';
			try { val = JSON.parse(strVal); }
			catch(e) { val = strVal; }

			return (val !== undefined ? val : defaultVal)
		},
		
		_addStorage: function(storage) {
			if (this.enabled) { return }
			if (this._testStorage(storage)) {
				this.storage = storage;
				this.enabled = true;
			}
		},

		_addPlugin: function(plugin) {
			var self = this;

			// If the plugin is an array, then add all plugins in the array.
			// This allows for a plugin to depend on other plugins.
			if (isList(plugin)) {
				each$4(plugin, function(plugin) {
					self._addPlugin(plugin);
				});
				return
			}

			// Keep track of all plugins we've seen so far, so that we
			// don't add any of them twice.
			var seenPlugin = pluck(this.plugins, function(seenPlugin) {
				return (plugin === seenPlugin)
			});
			if (seenPlugin) {
				return
			}
			this.plugins.push(plugin);

			// Check that the plugin is properly formed
			if (!isFunction$1(plugin)) {
				throw new Error('Plugins must be function values that return objects')
			}

			var pluginProperties = plugin.call(this);
			if (!isObject$1(pluginProperties)) {
				throw new Error('Plugins must return an object of function properties')
			}

			// Add the plugin function properties to this store instance.
			each$4(pluginProperties, function(pluginFnProp, propName) {
				if (!isFunction$1(pluginFnProp)) {
					throw new Error('Bad plugin property: '+propName+' from plugin '+plugin.name+'. Plugins should only return functions.')
				}
				self._assignPluginFnProp(pluginFnProp, propName);
			});
		},
		
		// Put deprecated properties in the private API, so as to not expose it to accidential
		// discovery through inspection of the store object.
		
		// Deprecated: addStorage
		addStorage: function(storage) {
			_warn('store.addStorage(storage) is deprecated. Use createStore([storages])');
			this._addStorage(storage);
		}
	};

	var store = create(_privateStoreProps, storeAPI, {
		plugins: []
	});
	store.raw = {};
	each$4(store, function(prop, propName) {
		if (isFunction$1(prop)) {
			store.raw[propName] = bind$1(store, prop);			
		}
	});
	each$4(storages, function(storage) {
		store._addStorage(storage);
	});
	each$4(plugins, function(plugin) {
		store._addPlugin(plugin);
	});
	return store
}

var Global$2 = util.Global;

var localStorage_1 = {
	name: 'localStorage',
	read: read$3,
	write: write$3,
	each: each$3,
	remove: remove$3,
	clearAll: clearAll$3,
};

function localStorage() {
	return Global$2.localStorage
}

function read$3(key) {
	return localStorage().getItem(key)
}

function write$3(key, data) {
	return localStorage().setItem(key, data)
}

function each$3(fn) {
	for (var i = localStorage().length - 1; i >= 0; i--) {
		var key = localStorage().key(i);
		fn(read$3(key), key);
	}
}

function remove$3(key) {
	return localStorage().removeItem(key)
}

function clearAll$3() {
	return localStorage().clear()
}

const n$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), localStorage_1, {
  'default': localStorage_1
}));

var Global$1 = util.Global;

var sessionStorage_1 = {
	name: 'sessionStorage',
	read: read$2,
	write: write$2,
	each: each$2,
	remove: remove$2,
	clearAll: clearAll$2
};

function sessionStorage() {
	return Global$1.sessionStorage
}

function read$2(key) {
	return sessionStorage().getItem(key)
}

function write$2(key, data) {
	return sessionStorage().setItem(key, data)
}

function each$2(fn) {
	for (var i = sessionStorage().length - 1; i >= 0; i--) {
		var key = sessionStorage().key(i);
		fn(read$2(key), key);
	}
}

function remove$2(key) {
	return sessionStorage().removeItem(key)
}

function clearAll$2() {
	return sessionStorage().clear()
}

const o$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), sessionStorage_1, {
  'default': sessionStorage_1
}));

// cookieStorage is useful Safari private browser mode, where localStorage
// doesn't work but cookies do. This implementation is adopted from
// https://developer.mozilla.org/en-US/docs/Web/API/Storage/LocalStorage


var Global = util.Global;
var trim$1 = util.trim;

var cookieStorage = {
	name: 'cookieStorage',
	read: read$1,
	write: write$1,
	each: each$1,
	remove: remove$1,
	clearAll: clearAll$1,
};

var doc = Global.document;

function read$1(key) {
	if (!key || !_has(key)) { return null }
	var regexpStr = "(?:^|.*;\\s*)" +
		escape(key).replace(/[\-\.\+\*]/g, "\\$&") +
		"\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
	return unescape(doc.cookie.replace(new RegExp(regexpStr), "$1"))
}

function each$1(callback) {
	var cookies = doc.cookie.split(/; ?/g);
	for (var i = cookies.length - 1; i >= 0; i--) {
		if (!trim$1(cookies[i])) {
			continue
		}
		var kvp = cookies[i].split('=');
		var key = unescape(kvp[0]);
		var val = unescape(kvp[1]);
		callback(val, key);
	}
}

function write$1(key, data) {
	if(!key) { return }
	doc.cookie = escape(key) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/";
}

function remove$1(key) {
	if (!key || !_has(key)) {
		return
	}
	doc.cookie = escape(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
}

function clearAll$1() {
	each$1(function(_, key) {
		remove$1(key);
	});
}

function _has(key) {
	return (new RegExp("(?:^|;\\s*)" + escape(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(doc.cookie)
}

const i$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), cookieStorage, {
  'default': cookieStorage
}));

// memoryStorage is a useful last fallback to ensure that the store
// is functions (meaning store.get(), store.set(), etc will all function).
// However, stored values will not persist when the browser navigates to
// a new page or reloads the current page.

var memoryStorage_1 = {
	name: 'memoryStorage',
	read: read,
	write: write,
	each: each,
	remove: remove,
	clearAll: clearAll,
};

var memoryStorage = {};

function read(key) {
	return memoryStorage[key]
}

function write(key, data) {
	memoryStorage[key] = data;
}

function each(callback) {
	for (var key in memoryStorage) {
		if (memoryStorage.hasOwnProperty(key)) {
			callback(memoryStorage[key], key);
		}
	}
}

function remove(key) {
	delete memoryStorage[key];
}

function clearAll(key) {
	memoryStorage = {};
}

const a = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.assign(/*#__PURE__*/Object.create(null), memoryStorage_1, {
  'default': memoryStorage_1
}));

function l$1(t,e){void 0===e&&(e=!1),t+="";for(var r,n=["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"],o=["0","1","2","3","4","5","6","7","8","9"],i=(e=e||!Salla.config.get("store.settings.arabic_numbers_enabled"))?n:o,a=e?o:n,l=0;l<i.length;l++)r=new RegExp(i[l],"g"),t=t.replace(r,a[l]);return t.replace(e?"٫":".",e?".":"٫")}function s(t){var e=("".concat(t).match(/\./g)||[]).length;return e&&1!==e?s(t.replace(/\.(.+)\./g,".$1")):t}function c$1(t){return "".concat(t).startsWith("https://")||"".concat(t).startsWith("http://")}function u$1(t){if(c$1(t))return t;var e=Salla.config.get("store.url");return e||(e=window.location.href.split("/").slice(0,-1).join("/"),Salla.config.set("store.url",e)),e.rtrim("/")+"/"+(null==t?void 0:t.ltrim("/"))}function p$1(t,e,r){if(r=r||window.location.href,!e||!t)return r;var n=new RegExp("([?&])"+t+"=[^&]+[&]?","g");return (r=r.replace(n,"$1").split("#")[0].replace(/&$|\?$/,"")).includes("?")?r+="&":r+=(r.endsWith("/")?"":"/")+"?",(r+t+"="+encodeURIComponent(e)).replace(/&$|\?$/,"")}function d$1(t){return window.location.origin+"/"+(null==t?void 0:t.ltrim("/"))}function f$1(t){return c$1(t)?t:Salla.config.get("theme.assets")?Salla.config.get("theme.assets").replace(":path",null==t?void 0:t.ltrim("/")):d$1("themes/"+Salla.config.get("theme.name")+"/"+(null==t?void 0:t.ltrim("/")))}function g$1(t,e,r){var n,o=t[0];return r&&0==t.length?Array.isArray(r)?(r.push(e),r):[r,e]:Array.isArray(r)?(r.push(e),r):"string"==typeof r?[r,e]:r?(r[o]=g$1(t.slice(1),e,r[o]),r):o?((n={})[o]=g$1(t.slice(1),e),n):""===o?[e]:e}String.prototype.toStudlyCase=function(){return this.trim().replace(/([^a-zA-Z\d].)/g,(function(t){return t.toUpperCase().replace(/[^a-zA-Z\d]/g,"")}))},String.prototype.toDatasetName=function(){return this.startsWith("data-")?this.substr(5).toStudlyCase():this.toStudlyCase()},String.prototype.toSelector=function(){return this.trim().startsWith(".")||this.trim().startsWith("#")?this.toString():"#"+this.toString()},String.prototype.replaceArray=function(t,e){for(var r,n=this,o=0;o<t.length;o++)r=new RegExp(t[o],"g"),n=n.replace(r,e[o]);return n},String.prototype.rtrim=function(t){return void 0===t&&(t="\\s"),this.replace(new RegExp("["+t+"]*$"),"")},String.prototype.ltrim=function(t){return void 0===t&&(t="\\s"),this.replace(new RegExp("^["+t+"]*"),"")},String.prototype.digitsOnly=function(){return Salla.helpers.digitsOnly(this)};var h$1={digitsOnly:function(t){return l$1(t,!0).replace(/[^0-9.]/g,"").replace("..",".").rtrim(".")},inputDigitsOnly:function t(e,r){if(void 0===r&&(r=!1),"string"==typeof e)return document.querySelectorAll(e).forEach((function(e){return t(e,r)}));if(e){var n=Salla.helpers.digitsOnly(e.value);return e.min&&n<parseInt(e.min)?e.value=e.min:e.max&&n>parseInt(e.max)?e.value=e.max:e.maxLength>=1&&n.toString().length>e.maxLength?e.value=n.toString().substring(0,e.maxLength):e.value=r||e.dataset.hasOwnProperty("digitsWithDecimal")?s(n):n.replace(/\D/g,"")}Salla.logger.warn("Can't find Object With Id: "+e);},number:l$1,money:function(t){var e=Salla.config.currency(null==t?void 0:t.currency).symbol;return l$1(t="object"==typeof t?t.amount:t)+" "+e},setNested:function(t,e,r){for(var n=t,o=e.split("."),i=o.length,a=0;a<i-1;a++){var l=o[a];n[l]||(n[l]={}),n=n[l];}return n[o[i-1]]=r,t},getNested:function(e,r,n){var o=get_1(e,r);return void 0!==o?o:n},inputData:function(t,e,r){if(void 0===r&&(r={}),t.includes("[")){var n=t.split("]").join("").split("[");return {name:n[0],value:g$1(n.slice(1),e,r[n[0]])}}return {name:t,value:e}},url:Object.freeze({__proto__:null,is_full_url:c$1,base:function(t){return c$1(t)?t:"https://"+new URL(u$1("/")).hostname+"/"+(null==t?void 0:t.ltrim("/"))},get:u$1,domain:function(t){return c$1(t)?t:"".concat(Salla.config.get("store.url",window.location.href.split("/").slice(0,-1).join("/")).rtrim("/"),"/").concat(null==t?void 0:t.ltrim("/"))},addParamToUrl:p$1,baseUrl:d$1,asset:f$1,cdn:function(t){return "https://cdn.salla.network/"+(null==t?void 0:t.ltrim("/"))},api:function(t){var e;return (null===(e=Salla.config.get("store.api",u$1("")))||void 0===e?void 0:e.rtrim("/"))+"/"+(null==t?void 0:t.ltrim("/"))},is_page:function(t){return t&&Salla.config.get("page.slug")===t},is_placeholder:function(t){return f$1(salla.config.get("theme.settings.placeholder"))===f$1(t)}}),addParamToUrl:p$1,debounce:function(t,e){e=e||100;var r,n=[];return function(){for(var o=[],i=0;i<arguments.length;i++)o[i]=arguments[i];return clearTimeout(r),r=setTimeout((function(){var e=t.apply(void 0,o);n.forEach((function(t){return t(e)})),n=[];}),e),new Promise((function(t){return n.push(t)}))}}},v$1=function(t,e){return v$1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e;}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);},v$1(t,e)};var y$1=function(){return y$1=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},y$1.apply(this,arguments)};function m$1(t,e,r){if(r||2===arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))}var w$1,S$1,b$1=(w$1=console,S$1={log:function(t,e){if(w$1&&salla.config.isDebug()){"trace"===salla.config.get("debug")&&(e="trace");var r=w$1.log,n=void 0===e?r:this.__dict__[e]||r,o=["%cTwilight","color: #5cd5c4;font-weight:bold; border:1px solid #5cd5c4; padding: 2px 6px; border-radius: 5px;"],i={event:"#CFF680",backend:"#7b68ee"}[e];i&&(o[0]+="%c"+e[0].toUpperCase()+e.substring(1),o.push("margin-left: 5px;color: ".concat(i,";font-weight:bold; border:1px solid ").concat(i,"; padding: 2px 6px; border-radius: 5px;"))),n.call.apply(n,m$1([w$1],o.concat.apply(o,t),!1));}},__dict__:{trace:w$1.trace,debug:w$1.debug,info:w$1.info,warn:w$1.warn,error:w$1.error}},{event:function(){S$1.log(arguments,"event");},trace:function(){S$1.log(arguments,"trace");},debug:function(){S$1.log(arguments,"debug");},info:function(){S$1.log(arguments,"info");},warn:function(){S$1.log(arguments,"warn");},error:function(){S$1.log(arguments,"error");},log:function(){S$1.log(arguments,void 0);},backend:function(){S$1.log(arguments,"backend");},logs:function(t){[t].flat().forEach((function(t){return t&&S$1.log([t].flat(),"backend")}));}}),_$1=function(){function t(t,e){void 0===t&&(t={}),void 0===e&&(e={}),this.default_properties=e,this.properties_=y$1(y$1({},this.default_properties),t);}return t.prototype.merge=function(t){var e;return this.properties_=y$1(y$1({},this.properties_),t),this.properties_.store=y$1(y$1({},(null===(e=this.default_properties)||void 0===e?void 0:e.store)||{}),this.properties_.store),this},t.prototype.set=function(t,e){return t.includes(".")?(Salla.helpers.setNested(this.properties_,t,e),this):(this.properties_[t]=e,this)},t.prototype.currency=function(t){return void 0===t&&(t=void 0),t=t||this.get("user.currency_code"),this.get("currencies."+t)||Object.values(this.get("currencies"))[0]},t.prototype.get=function(t,e){return void 0===e&&(e=null),t.includes(".")?Salla.helpers.getNested(this.properties_,t,e):this.properties_.hasOwnProperty(t)?this.properties_[t]||e:e||void 0},t.prototype.all=function(){return this.properties_},t.prototype.isDebug=function(){return this.get("debug")||Salla.storage.get("debug")},t}(),x$1=function(t){function e(){var e=this;return (e=t.call(this,{wildcard:!0,delimiter:"::",newListener:!1,removeListener:!1,maxListeners:10,verboseMemoryLeak:!1,ignoreErrors:!1})||this).delimiter="::","undefined"!=typeof document&&(e.body=document.querySelector("body")),e.logableEvents=["cart::item.added.failed","cart::item.deleted.failed"],e.ingoreLogEvents=["document::click","document::keyup","document::change"],e.noneFireableActions=["document.request"],e}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t;}v$1(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r);}(e,t),e.prototype.createAndDispatch=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];this.dispatch.apply(this,m$1([t],e,!1));},e.prototype.emit=function(e){for(var r,n=[],o=1;o<arguments.length;o++)n[o-1]=arguments[o];var i=e.replace("::",".");if(!this.noneFireableActions.includes(i)&&Salla.call&&"function"==typeof Salla.call(i))return Salla.log("'Salla.".concat(i,"(...)' triggered using event '").concat(e,"'")),i=i.split("."),Array.isArray(n[0])&&(n=n[0]),void(r=salla[i[0]])[i[1]].apply(r,n);t.prototype.emit.apply(this,m$1([e],n,!1)),this.trackEvents.apply(this,m$1([e],n,!1));},e.prototype.emitAsync=function(e){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];var o=t.prototype.emitAsync.apply(this,m$1([e],r,!1));try{this.trackEvents.apply(this,m$1([e],r,!1));}catch(t){Salla.logger.warn("error on tracking event (".concat(e,")"),r,t);}return o},e.prototype.trackEvents=function(t){for(var e,r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];if("undefined"!=typeof window)try{window.dataLayer=window.dataLayer||[];var o={event:t};r.map((function(t){return "object"==typeof t&&(o=y$1(y$1({},o),t))})),window.dataLayer.push(o);}catch(t){salla.logger.error(t.message);}Salla.logger&&!this.ingoreLogEvents.includes(t)&&(e=Salla.logger).event.apply(e,m$1([t],r,!1)),this.dispatchMobileEvent.apply(this,m$1([t],r,!1));},e.prototype.dispatch=function(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];return this.emit.apply(this,m$1([t],e,!1))},e.prototype.dispatchEvents=function(t){if(t)if("object"!=typeof t||Array.isArray(t))Salla.log("Events object is wrong, it should be object of {event:payload}",t);else for(var e=0,r=Object.entries(t);e<r.length;e++){var n=r[e],o=n[0],i=n[1];this.dispatch(o,i);}else Salla.log("No Events To Dispatch!",t);},e.prototype.addListener=function(t,e){return this.on(t,e)},e.prototype.addEventListener=function(t,e){return this.on(t,e)},e.prototype.listen=function(t,e){return this.on(t,e)},e.prototype.registerGlobalListener=function(t,e){return this.onAny(e)},e.prototype.dispatchMobileEvent=function(t,e){if(void 0===e&&(e={}),!("undefined"!=typeof window&&window.dataLayer&&window.dataLayer[0]&&window.dataLayer[0].page&&window.dataLayer[0].page.mobileApp))return "";if(window.webkit)try{window.webkit.messageHandlers.callbackHandler.postMessage(JSON.stringify({event:t,details:e}));}catch(t){Salla.log(t,"The native context does not exist yet");}else if(void 0!==window.Android)try{window.Android.customEventWithData(t,JSON.stringify({details:e}));}catch(t){Salla.log(t,"The native context does not exist yet");}},e}(eventemitter2.EventEmitter2),A$1=storeEngine.createStore([n$2,o$2,i$1,a],[]),k=function(){function t(){var t=this;Salla.event.on("storage::item.remove",(function(e){return t.remove(e)})),Salla.event.on("storage::item.set",(function(e,r){return t.set(e,r)})),this.store=A$1;}return t.prototype.set=function(t,e){var r;if(t.includes(".")){var n=t.split(".")[0],o=((r={})[n]=this.store.get(n),r);return o=Salla.helpers.setNested(o,t,e),this.store.set(n,o[n])}return this.store.set(t,e)},t.prototype.remove=function(t){return this.store.remove(t)},t.prototype.clearAll=function(){return this.store.clearAll()},t.prototype.get=function(t,e){var r;if(t.includes(".")){var n=t.split(".")[0];return Salla.helpers.getNested(((r={})[n]=this.store.get(n),r),t)}return this.store.get(t,e)},t}(),E$1=function(){function t(){var t=this;Salla.event.on("cookies::remove",(function(e){return t.remove(e)})),Salla.event.on("cookies::add",(function(e,r){return t.set(e,r)}));}return t.prototype.get=function(t){var e;return null===(e=document.cookie.split("; ").find((function(e){return e.startsWith(t+"=")})))||void 0===e?void 0:e.split("=")[1]},t.prototype.set=function(t,e,r){void 0===e&&(e=""),void 0===r&&(r=10);var n="";if(r){var o=new Date;o.setTime(o.getTime()+24*r*60*60*1e3),n="; expires="+o.toUTCString();}return document.cookie="".concat(t,"=").concat(e).concat(n,'"; path=/; secure; SameSite=Lax"'),this},t.prototype.remove=function(t){return document.cookie="".concat(t,"=; Max-Age=0; path=/;"),this},t.prototype.clearAll=function(){for(var t=document.cookie.split(";"),e=0;e<t.length;e++){var r=t[e],n=r.indexOf("="),o=n>-1?r.substr(0,n):r;this.remove(o);}},t}();"undefined"!=typeof window&&(window.salla=window.salla||window.Salla||{},window.Salla=window.salla),"undefined"!=typeof global&&(global.salla=global.salla||global.Salla||{},global.Salla=global.salla),Salla.status="base",Salla.config=new _$1,Salla.logger=b$1,Salla.event=new x$1,Salla.helpers=h$1,Salla.storage=new k,Salla.cookie=new E$1,Salla.log=Salla.logger.log,Salla.money=Salla.helpers.money,Salla.url=Salla.helpers.url,Salla.versions={base:"[VI]{version}[/VI]"};var O=Salla;

var evEmitter = createCommonjsModule(function (module) {
/**
 * EvEmitter v2.1.1
 * Lil' event emitter
 * MIT License
 */

( function( global, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS - Browserify, Webpack
    module.exports = factory();
  } else {
    // Browser globals
    global.EvEmitter = factory();
  }

}( typeof window != 'undefined' ? window : commonjsGlobal, function() {

function EvEmitter() {}

let proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // set events hash
  let events = this._events = this._events || {};
  // set listeners array
  let listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( !listeners.includes( listener ) ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) return this;

  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  let onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  let onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  let index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  let listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice( 0 );
  args = args || [];
  // once stuff
  let onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( let listener of listeners ) {
    let isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
  return this;
};

return EvEmitter;

} ) );
});

var utils$1 = createCommonjsModule(function (module) {
/**
 * Fizzy UI utils v3.0.0
 * MIT license
 */

( function( global, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS
    module.exports = factory( global );
  } else {
    // browser global
    global.fizzyUIUtils = factory( global );
  }

}( commonjsGlobal, function factory( global ) {

let utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  return Object.assign( a, b );
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  // use object if already an array
  if ( Array.isArray( obj ) ) return obj;

  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) return [];

  let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if ( isArrayLike ) return [ ...obj ];

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  let index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( elem.matches( selector ) ) return elem;
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  let method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );

  return elems
    // check that elem is an actual element
    .filter( ( elem ) => elem instanceof HTMLElement )
    .reduce( ( ffElems, elem ) => {
      // add elem if no selector
      if ( !selector ) {
        ffElems.push( elem );
        return ffElems;
      }
      // filter & find items if we have a selector
      // filter
      if ( elem.matches( selector ) ) {
        ffElems.push( elem );
      }
      // find children
      let childElems = elem.querySelectorAll( selector );
      // concat childElems to filterFound array
      ffElems = ffElems.concat( ...childElems );
      return ffElems;
    }, [] );
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  let method = _class.prototype[ methodName ];
  let timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    clearTimeout( this[ timeoutName ] );

    let args = arguments;
    this[ timeoutName ] = setTimeout( () => {
      method.apply( this, args );
      delete this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( onDocReady ) {
  let readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( onDocReady );
  } else {
    document.addEventListener( 'DOMContentLoaded', onDocReady );
  }
};

// ----- htmlInit ----- //

// http://bit.ly/3oYLusc
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  } ).toLowerCase();
};

let console = global.console;

// allow user to initialize classes via [data-namespace] or .js-namespace class
// htmlInit( Widget, 'widgetName' )
// options are parsed from data-namespace-options
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    let dashedNamespace = utils.toDashed( namespace );
    let dataAttr = 'data-' + dashedNamespace;
    let dataAttrElems = document.querySelectorAll( `[${dataAttr}]` );
    let jQuery = global.jQuery;

    [ ...dataAttrElems ].forEach( ( elem ) => {
      let attr = elem.getAttribute( dataAttr );
      let options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( `Error parsing ${dataAttr} on ${elem.className}: ${error}` );
        }
        return;
      }
      // initialize
      let instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    } );

  } );
};

// -----  ----- //

return utils;

} ) );
});

var core = createCommonjsModule(function (module) {
// core
( function( window, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        evEmitter,
        utils$1,
    );
  } else {
    // browser global
    window.InfiniteScroll = factory(
        window,
        window.EvEmitter,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, EvEmitter, utils ) {

let jQuery = window.jQuery;
// internal store of all InfiniteScroll intances
let instances = {};

function InfiniteScroll( element, options ) {
  let queryElem = utils.getQueryElement( element );

  if ( !queryElem ) {
    console.error( 'Bad element for InfiniteScroll: ' + ( queryElem || element ) );
    return;
  }
  element = queryElem;
  // do not initialize twice on same element
  if ( element.infiniteScrollGUID ) {
    let instance = instances[ element.infiniteScrollGUID ];
    instance.option( options );
    return instance;
  }

  this.element = element;
  // options
  this.options = { ...InfiniteScroll.defaults };
  this.option( options );
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  this.create();
}

// defaults
InfiniteScroll.defaults = {
  // path: null,
  // hideNav: null,
  // debug: false,
};

// create & destroy methods
InfiniteScroll.create = {};
InfiniteScroll.destroy = {};

let proto = InfiniteScroll.prototype;
// inherit EvEmitter
Object.assign( proto, EvEmitter.prototype );

// --------------------------  -------------------------- //

// globally unique identifiers
let GUID = 0;

proto.create = function() {
  // create core
  // add id for InfiniteScroll.data
  let id = this.guid = ++GUID;
  this.element.infiniteScrollGUID = id; // expando
  instances[ id ] = this; // associate via id
  // properties
  this.pageIndex = 1; // default to first page
  this.loadCount = 0;
  this.updateGetPath();
  // bail if getPath not set, or returns falsey #776
  let hasPath = this.getPath && this.getPath();
  if ( !hasPath ) {
    console.error('Disabling InfiniteScroll');
    return;
  }
  this.updateGetAbsolutePath();
  this.log( 'initialized', [ this.element.className ] );
  this.callOnInit();
  // create features
  for ( let method in InfiniteScroll.create ) {
    InfiniteScroll.create[ method ].call( this );
  }
};

proto.option = function( opts ) {
  Object.assign( this.options, opts );
};

// call onInit option, used for binding events on init
proto.callOnInit = function() {
  let onInit = this.options.onInit;
  if ( onInit ) {
    onInit.call( this, this );
  }
};

// ----- events ----- //

proto.dispatchEvent = function( type, event, args ) {
  this.log( type, args );
  let emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );
  // trigger jQuery event
  if ( !jQuery || !this.$element ) {
    return;
  }
  // namespace jQuery event
  type += '.infiniteScroll';
  let $event = type;
  if ( event ) {
    // create jQuery event
    /* eslint-disable-next-line new-cap */
    let jQEvent = jQuery.Event( event );
    jQEvent.type = type;
    $event = jQEvent;
  }
  this.$element.trigger( $event, args );
};

let loggers = {
  initialized: ( className ) => `on ${className}`,
  request: ( path ) => `URL: ${path}`,
  load: ( response, path ) => `${response.title || ''}. URL: ${path}`,
  error: ( error, path ) => `${error}. URL: ${path}`,
  append: ( response, path, items ) => `${items.length} items. URL: ${path}`,
  last: ( response, path ) => `URL: ${path}`,
  history: ( title, path ) => `URL: ${path}`,
  pageIndex: function( index, origin ) {
    return `current page determined to be: ${index} from ${origin}`;
  },
};

// log events
proto.log = function( type, args ) {
  if ( !this.options.debug ) return;

  let message = `[InfiniteScroll] ${type}`;
  let logger = loggers[ type ];
  if ( logger ) message += '. ' + logger.apply( this, args );
  console.log( message );
};

// -------------------------- methods used amoung features -------------------------- //

proto.updateMeasurements = function() {
  this.windowHeight = window.innerHeight;
  let rect = this.element.getBoundingClientRect();
  this.top = rect.top + window.scrollY;
};

proto.updateScroller = function() {
  let elementScroll = this.options.elementScroll;
  if ( !elementScroll ) {
    // default, use window
    this.scroller = window;
    return;
  }
  // if true, set to element, otherwise use option
  this.scroller = elementScroll === true ? this.element :
    utils.getQueryElement( elementScroll );
  if ( !this.scroller ) {
    throw new Error(`Unable to find elementScroll: ${elementScroll}`);
  }
};

// -------------------------- page path -------------------------- //

proto.updateGetPath = function() {
  let optPath = this.options.path;
  if ( !optPath ) {
    console.error(`InfiniteScroll path option required. Set as: ${optPath}`);
    return;
  }
  // function
  let type = typeof optPath;
  if ( type == 'function' ) {
    this.getPath = optPath;
    return;
  }
  // template string: '/pages/{{#}}.html'
  let templateMatch = type == 'string' && optPath.match('{{#}}');
  if ( templateMatch ) {
    this.updateGetPathTemplate( optPath );
    return;
  }
  // selector: '.next-page-selector'
  this.updateGetPathSelector( optPath );
};

proto.updateGetPathTemplate = function( optPath ) {
  // set getPath with template string
  this.getPath = () => {
    let nextIndex = this.pageIndex + 1;
    return optPath.replace( '{{#}}', nextIndex );
  };
  // get pageIndex from location
  // convert path option into regex to look for pattern in location
  // escape query (?) in url, allows for parsing GET parameters
  let regexString = optPath
    .replace( /(\\\?|\?)/, '\\?' )
    .replace( '{{#}}', '(\\d\\d?\\d?)' );
  let templateRe = new RegExp( regexString );
  let match = location.href.match( templateRe );

  if ( match ) {
    this.pageIndex = parseInt( match[1], 10 );
    this.log( 'pageIndex', [ this.pageIndex, 'template string' ] );
  }
};

let pathRegexes = [
  // WordPress & Tumblr - example.com/page/2
  // Jekyll - example.com/page2
  /^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/,
  // Drupal - example.com/?page=1
  /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/,
  // catch all, last occurence of a number
  /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/,
];

// try matching href to pathRegexes patterns
let getPathParts = InfiniteScroll.getPathParts = function( href ) {
  if ( !href ) return;
  for ( let regex of pathRegexes ) {
    let match = href.match( regex );
    if ( match ) {
      let [ , begin, index, end ] = match;
      return { begin, index, end };
    }
  }
};

proto.updateGetPathSelector = function( optPath ) {
  // parse href of link: '.next-page-link'
  let hrefElem = document.querySelector( optPath );
  if ( !hrefElem ) {
    console.error(`Bad InfiniteScroll path option. Next link not found: ${optPath}`);
    return;
  }

  let href = hrefElem.getAttribute('href');
  let pathParts = getPathParts( href );
  if ( !pathParts ) {
    console.error(`InfiniteScroll unable to parse next link href: ${href}`);
    return;
  }

  let { begin, index, end } = pathParts;
  this.isPathSelector = true; // flag for checkLastPage()
  this.getPath = () => begin + ( this.pageIndex + 1 ) + end;
  // get pageIndex from href
  this.pageIndex = parseInt( index, 10 ) - 1;
  this.log( 'pageIndex', [ this.pageIndex, 'next link' ] );
};

proto.updateGetAbsolutePath = function() {
  let path = this.getPath();
  // path doesn't start with http or /
  let isAbsolute = path.match( /^http/ ) || path.match( /^\// );
  if ( isAbsolute ) {
    this.getAbsolutePath = this.getPath;
    return;
  }

  let { pathname } = location;
  // query parameter #829. example.com/?pg=2
  let isQuery = path.match( /^\?/ );
  // /foo/bar/index.html => /foo/bar
  let directory = pathname.substring( 0, pathname.lastIndexOf('/') );
  let pathStart = isQuery ? pathname : directory + '/';

  this.getAbsolutePath = () => pathStart + this.getPath();
};

// -------------------------- nav -------------------------- //

// hide navigation
InfiniteScroll.create.hideNav = function() {
  let nav = utils.getQueryElement( this.options.hideNav );
  if ( !nav ) return;

  nav.style.display = 'none';
  this.nav = nav;
};

InfiniteScroll.destroy.hideNav = function() {
  if ( this.nav ) this.nav.style.display = '';
};

// -------------------------- destroy -------------------------- //

proto.destroy = function() {
  this.allOff(); // remove all event listeners
  // call destroy methods
  for ( let method in InfiniteScroll.destroy ) {
    InfiniteScroll.destroy[ method ].call( this );
  }

  delete this.element.infiniteScrollGUID;
  delete instances[ this.guid ];
  // remove jQuery data. #807
  if ( jQuery && this.$element ) {
    jQuery.removeData( this.element, 'infiniteScroll' );
  }
};

// -------------------------- utilities -------------------------- //

// https://remysharp.com/2010/07/21/throttling-function-calls
InfiniteScroll.throttle = function( fn, threshold ) {
  threshold = threshold || 200;
  let last, timeout;

  return function() {
    let now = +new Date();
    let args = arguments;
    let trigger = () => {
      last = now;
      fn.apply( this, args );
    };
    if ( last && now < last + threshold ) {
      // hold on to it
      clearTimeout( timeout );
      timeout = setTimeout( trigger, threshold );
    } else {
      trigger();
    }
  };
};

InfiniteScroll.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  let id = elem && elem.infiniteScrollGUID;
  return id && instances[ id ];
};

// set internal jQuery, for Webpack + jQuery v3
InfiniteScroll.setJQuery = function( jqry ) {
  jQuery = jqry;
};

// -------------------------- setup -------------------------- //

utils.htmlInit( InfiniteScroll, 'infinite-scroll' );

// add noop _init method for jQuery Bridget. #768
proto._init = function() {};

let { jQueryBridget } = window;
if ( jQuery && jQueryBridget ) {
  jQueryBridget( 'infiniteScroll', InfiniteScroll, jQuery );
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );
});

var pageLoad = createCommonjsModule(function (module) {
// page-load
( function( window, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        core,
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
    );
  }

}( window, function factory( window, InfiniteScroll ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  // append: false,
  loadOnScroll: true,
  checkLastPage: true,
  responseBody: 'text',
  domParseResponse: true,
  // prefill: false,
  // outlayer: null,
} );

InfiniteScroll.create.pageLoad = function() {
  this.canLoad = true;
  this.on( 'scrollThreshold', this.onScrollThresholdLoad );
  this.on( 'load', this.checkLastPage );
  if ( this.options.outlayer ) {
    this.on( 'append', this.onAppendOutlayer );
  }
};

proto.onScrollThresholdLoad = function() {
  if ( this.options.loadOnScroll ) this.loadNextPage();
};

let domParser = new DOMParser();

proto.loadNextPage = function() {
  if ( this.isLoading || !this.canLoad ) return;

  let { responseBody, domParseResponse, fetchOptions } = this.options;
  let path = this.getAbsolutePath();
  this.isLoading = true;
  if ( typeof fetchOptions == 'function' ) fetchOptions = fetchOptions();

  let fetchPromise = fetch( path, fetchOptions )
    .then( ( response ) => {
      if ( !response.ok ) {
        let error = new Error( response.statusText );
        this.onPageError( error, path, response );
        return { response };
      }

      return response[ responseBody ]().then( ( body ) => {
        let canDomParse = responseBody == 'text' && domParseResponse;
        if ( canDomParse ) {
          body = domParser.parseFromString( body, 'text/html' );
        }
        if ( response.status == 204 ) {
          this.lastPageReached( body, path );
          return { body, response };
        } else {
          return this.onPageLoad( body, path, response );
        }
      } );
    } )
    .catch( ( error ) => {
      this.onPageError( error, path );
    } );

  this.dispatchEvent( 'request', null, [ path, fetchPromise ] );

  return fetchPromise;
};

proto.onPageLoad = function( body, path, response ) {
  // done loading if not appending
  if ( !this.options.append ) {
    this.isLoading = false;
  }
  this.pageIndex++;
  this.loadCount++;
  this.dispatchEvent( 'load', null, [ body, path, response ] );
  return this.appendNextPage( body, path, response );
};

proto.appendNextPage = function( body, path, response ) {
  let { append, responseBody, domParseResponse } = this.options;
  // do not append json
  let isDocument = responseBody == 'text' && domParseResponse;
  if ( !isDocument || !append ) return { body, response };

  let items = body.querySelectorAll( append );
  let promiseValue = { body, response, items };
  // last page hit if no items. #840
  if ( !items || !items.length ) {
    this.lastPageReached( body, path );
    return promiseValue;
  }

  let fragment = getItemsFragment( items );
  let appendReady = () => {
    this.appendItems( items, fragment );
    this.isLoading = false;
    this.dispatchEvent( 'append', null, [ body, path, items, response ] );
    return promiseValue;
  };

  // TODO add hook for option to trigger appendReady
  if ( this.options.outlayer ) {
    return this.appendOutlayerItems( fragment, appendReady );
  } else {
    return appendReady();
  }
};

proto.appendItems = function( items, fragment ) {
  if ( !items || !items.length ) return;

  // get fragment if not provided
  fragment = fragment || getItemsFragment( items );
  refreshScripts( fragment );
  this.element.appendChild( fragment );
};

function getItemsFragment( items ) {
  // add items to fragment
  let fragment = document.createDocumentFragment();
  if ( items ) fragment.append( ...items );
  return fragment;
}

// replace <script>s with copies so they load
// <script>s added by InfiniteScroll will not load
// similar to https://stackoverflow.com/questions/610995
function refreshScripts( fragment ) {
  let scripts = fragment.querySelectorAll('script');
  for ( let script of scripts ) {
    let freshScript = document.createElement('script');
    // copy attributes
    let attrs = script.attributes;
    for ( let attr of attrs ) {
      freshScript.setAttribute( attr.name, attr.value );
    }
    // copy inner script code. #718, #782
    freshScript.innerHTML = script.innerHTML;
    script.parentNode.replaceChild( freshScript, script );
  }
}

// ----- outlayer ----- //

proto.appendOutlayerItems = function( fragment, appendReady ) {
  let imagesLoaded = InfiniteScroll.imagesLoaded || window.imagesLoaded;
  if ( !imagesLoaded ) {
    console.error('[InfiniteScroll] imagesLoaded required for outlayer option');
    this.isLoading = false;
    return;
  }
  // append once images loaded
  return new Promise( function( resolve ) {
    imagesLoaded( fragment, function() {
      let bodyResponse = appendReady();
      resolve( bodyResponse );
    } );
  } );
};

proto.onAppendOutlayer = function( response, path, items ) {
  this.options.outlayer.appended( items );
};

// ----- checkLastPage ----- //

// check response for next element
proto.checkLastPage = function( body, path ) {
  let { checkLastPage, path: pathOpt } = this.options;
  if ( !checkLastPage ) return;

  // if path is function, check if next path is truthy
  if ( typeof pathOpt == 'function' ) {
    let nextPath = this.getPath();
    if ( !nextPath ) {
      this.lastPageReached( body, path );
      return;
    }
  }
  // get selector from checkLastPage or path option
  let selector;
  if ( typeof checkLastPage == 'string' ) {
    selector = checkLastPage;
  } else if ( this.isPathSelector ) {
    // path option is selector string
    selector = pathOpt;
  }
  // check last page for selector
  // bail if no selector or not document response
  if ( !selector || !body.querySelector ) return;

  // check if response has selector
  let nextElem = body.querySelector( selector );
  if ( !nextElem ) this.lastPageReached( body, path );
};

proto.lastPageReached = function( body, path ) {
  this.canLoad = false;
  this.dispatchEvent( 'last', null, [ body, path ] );
};

// ----- error ----- //

proto.onPageError = function( error, path, response ) {
  this.isLoading = false;
  this.canLoad = false;
  this.dispatchEvent( 'error', null, [ error, path, response ] );
  return error;
};

// -------------------------- prefill -------------------------- //

InfiniteScroll.create.prefill = function() {
  if ( !this.options.prefill ) return;

  let append = this.options.append;
  if ( !append ) {
    console.error(`append option required for prefill. Set as :${append}`);
    return;
  }
  this.updateMeasurements();
  this.updateScroller();
  this.isPrefilling = true;
  this.on( 'append', this.prefill );
  this.once( 'error', this.stopPrefill );
  this.once( 'last', this.stopPrefill );
  this.prefill();
};

proto.prefill = function() {
  let distance = this.getPrefillDistance();
  this.isPrefilling = distance >= 0;
  if ( this.isPrefilling ) {
    this.log('prefill');
    this.loadNextPage();
  } else {
    this.stopPrefill();
  }
};

proto.getPrefillDistance = function() {
  // element scroll
  if ( this.options.elementScroll ) {
    return this.scroller.clientHeight - this.scroller.scrollHeight;
  }
  // window
  return this.windowHeight - this.element.clientHeight;
};

proto.stopPrefill = function() {
  this.log('stopPrefill');
  this.off( 'append', this.prefill );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );
});

var scrollWatch = createCommonjsModule(function (module) {
// scroll-watch
( function( window, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        core,
        utils$1,
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// default options
Object.assign( InfiniteScroll.defaults, {
  scrollThreshold: 400,
  // elementScroll: null,
} );

InfiniteScroll.create.scrollWatch = function() {
  // events
  this.pageScrollHandler = this.onPageScroll.bind( this );
  this.resizeHandler = this.onResize.bind( this );

  let scrollThreshold = this.options.scrollThreshold;
  let isEnable = scrollThreshold || scrollThreshold === 0;
  if ( isEnable ) this.enableScrollWatch();
};

InfiniteScroll.destroy.scrollWatch = function() {
  this.disableScrollWatch();
};

proto.enableScrollWatch = function() {
  if ( this.isScrollWatching ) return;

  this.isScrollWatching = true;
  this.updateMeasurements();
  this.updateScroller();
  // TODO disable after error?
  this.on( 'last', this.disableScrollWatch );
  this.bindScrollWatchEvents( true );
};

proto.disableScrollWatch = function() {
  if ( !this.isScrollWatching ) return;

  this.bindScrollWatchEvents( false );
  delete this.isScrollWatching;
};

proto.bindScrollWatchEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.pageScrollHandler );
  window[ addRemove ]( 'resize', this.resizeHandler );
};

proto.onPageScroll = InfiniteScroll.throttle( function() {
  let distance = this.getBottomDistance();
  if ( distance <= this.options.scrollThreshold ) {
    this.dispatchEvent('scrollThreshold');
  }
} );

proto.getBottomDistance = function() {
  let bottom, scrollY;
  if ( this.options.elementScroll ) {
    bottom = this.scroller.scrollHeight;
    scrollY = this.scroller.scrollTop + this.scroller.clientHeight;
  } else {
    bottom = this.top + this.element.clientHeight;
    scrollY = window.scrollY + this.windowHeight;
  }
  return bottom - scrollY;
};

proto.onResize = function() {
  this.updateMeasurements();
};

utils.debounceMethod( InfiniteScroll, 'onResize', 150 );

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );
});

var history_1 = createCommonjsModule(function (module) {
// history
( function( window, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        core,
        utils$1,
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

Object.assign( InfiniteScroll.defaults, {
  history: 'replace',
  // historyTitle: false,
} );

let link = document.createElement('a');

// ----- create/destroy ----- //

InfiniteScroll.create.history = function() {
  if ( !this.options.history ) return;

  // check for same origin
  link.href = this.getAbsolutePath();
  // MS Edge does not have origin on link
  // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12236493/
  let linkOrigin = link.origin || link.protocol + '//' + link.host;
  let isSameOrigin = linkOrigin == location.origin;
  if ( !isSameOrigin ) {
    console.error( '[InfiniteScroll] cannot set history with different origin: ' +
      `${link.origin} on ${location.origin} . History behavior disabled.` );
    return;
  }

  // two ways to handle changing history
  if ( this.options.append ) {
    this.createHistoryAppend();
  } else {
    this.createHistoryPageLoad();
  }
};

proto.createHistoryAppend = function() {
  this.updateMeasurements();
  this.updateScroller();
  // array of scroll positions of appended pages
  this.scrollPages = [
    // first page
    {
      top: 0,
      path: location.href,
      title: document.title,
    },
  ];
  this.scrollPage = this.scrollPages[0];
  // events
  this.scrollHistoryHandler = this.onScrollHistory.bind( this );
  this.unloadHandler = this.onUnload.bind( this );
  this.scroller.addEventListener( 'scroll', this.scrollHistoryHandler );
  this.on( 'append', this.onAppendHistory );
  this.bindHistoryAppendEvents( true );
};

proto.bindHistoryAppendEvents = function( isBind ) {
  let addRemove = isBind ? 'addEventListener' : 'removeEventListener';
  this.scroller[ addRemove ]( 'scroll', this.scrollHistoryHandler );
  window[ addRemove ]( 'unload', this.unloadHandler );
};

proto.createHistoryPageLoad = function() {
  this.on( 'load', this.onPageLoadHistory );
};

InfiniteScroll.destroy.history =
proto.destroyHistory = function() {
  let isHistoryAppend = this.options.history && this.options.append;
  if ( isHistoryAppend ) {
    this.bindHistoryAppendEvents( false );
  }
};

// ----- append history ----- //

proto.onAppendHistory = function( response, path, items ) {
  // do not proceed if no items. #779
  if ( !items || !items.length ) return;

  let firstItem = items[0];
  let elemScrollY = this.getElementScrollY( firstItem );
  // resolve path
  link.href = path;
  // add page data to hash
  this.scrollPages.push({
    top: elemScrollY,
    path: link.href,
    title: response.title,
  });
};

proto.getElementScrollY = function( elem ) {
  if ( this.options.elementScroll ) {
    return elem.offsetTop - this.top;
  } else {
    let rect = elem.getBoundingClientRect();
    return rect.top + window.scrollY;
  }
};

proto.onScrollHistory = function() {
  // cycle through positions, find biggest without going over
  let scrollPage = this.getClosestScrollPage();
  // set history if changed
  if ( scrollPage != this.scrollPage ) {
    this.scrollPage = scrollPage;
    this.setHistory( scrollPage.title, scrollPage.path );
  }
};

utils.debounceMethod( InfiniteScroll, 'onScrollHistory', 150 );

proto.getClosestScrollPage = function() {
  let scrollViewY;
  if ( this.options.elementScroll ) {
    scrollViewY = this.scroller.scrollTop + this.scroller.clientHeight / 2;
  } else {
    scrollViewY = window.scrollY + this.windowHeight / 2;
  }

  let scrollPage;
  for ( let page of this.scrollPages ) {
    if ( page.top >= scrollViewY ) break;

    scrollPage = page;
  }
  return scrollPage;
};

proto.setHistory = function( title, path ) {
  let optHistory = this.options.history;
  let historyMethod = optHistory && history[ optHistory + 'State' ];
  if ( !historyMethod ) return;

  history[ optHistory + 'State' ]( null, title, path );
  if ( this.options.historyTitle ) document.title = title;
  this.dispatchEvent( 'history', null, [ title, path ] );
};

// scroll to top to prevent initial scroll-reset after page refresh
// https://stackoverflow.com/a/18633915/182183
proto.onUnload = function() {
  if ( this.scrollPage.top === 0 ) return;

  // calculate where scroll position would be on refresh
  let scrollY = window.scrollY - this.scrollPage.top + this.top;
  // disable scroll event before setting scroll #679
  this.destroyHistory();
  scrollTo( 0, scrollY );
};

// ----- load history ----- //

// update URL
proto.onPageLoadHistory = function( response, path ) {
  this.setHistory( response.title, path );
};

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );
});

var button = createCommonjsModule(function (module) {
// button
( function( window, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        core,
        utils$1,
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

// -------------------------- InfiniteScrollButton -------------------------- //

class InfiniteScrollButton {
  constructor( element, infScroll ) {
    this.element = element;
    this.infScroll = infScroll;
    // events
    this.clickHandler = this.onClick.bind( this );
    this.element.addEventListener( 'click', this.clickHandler );
    infScroll.on( 'request', this.disable.bind( this ) );
    infScroll.on( 'load', this.enable.bind( this ) );
    infScroll.on( 'error', this.hide.bind( this ) );
    infScroll.on( 'last', this.hide.bind( this ) );
  }

  onClick( event ) {
    event.preventDefault();
    this.infScroll.loadNextPage();
  }

  enable() {
    this.element.removeAttribute('disabled');
  }

  disable() {
    this.element.disabled = 'disabled';
  }

  hide() {
    this.element.style.display = 'none';
  }

  destroy() {
    this.element.removeEventListener( 'click', this.clickHandler );
  }

}

// -------------------------- InfiniteScroll methods -------------------------- //

// InfiniteScroll.defaults.button = null;

InfiniteScroll.create.button = function() {
  let buttonElem = utils.getQueryElement( this.options.button );
  if ( buttonElem ) {
    this.button = new InfiniteScrollButton( buttonElem, this );
  }
};

InfiniteScroll.destroy.button = function() {
  if ( this.button ) this.button.destroy();
};

// --------------------------  -------------------------- //

InfiniteScroll.Button = InfiniteScrollButton;

return InfiniteScroll;

} ) );
});

var status = createCommonjsModule(function (module) {
// status
( function( window, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS
    module.exports = factory(
        window,
        core,
        utils$1,
    );
  } else {
    // browser global
    factory(
        window,
        window.InfiniteScroll,
        window.fizzyUIUtils,
    );
  }

}( window, function factory( window, InfiniteScroll, utils ) {

let proto = InfiniteScroll.prototype;

// InfiniteScroll.defaults.status = null;

InfiniteScroll.create.status = function() {
  let statusElem = utils.getQueryElement( this.options.status );
  if ( !statusElem ) return;

  // elements
  this.statusElement = statusElem;
  this.statusEventElements = {
    request: statusElem.querySelector('.infinite-scroll-request'),
    error: statusElem.querySelector('.infinite-scroll-error'),
    last: statusElem.querySelector('.infinite-scroll-last'),
  };
  // events
  this.on( 'request', this.showRequestStatus );
  this.on( 'error', this.showErrorStatus );
  this.on( 'last', this.showLastStatus );
  this.bindHideStatus('on');
};

proto.bindHideStatus = function( bindMethod ) {
  let hideEvent = this.options.append ? 'append' : 'load';
  this[ bindMethod ]( hideEvent, this.hideAllStatus );
};

proto.showRequestStatus = function() {
  this.showStatus('request');
};

proto.showErrorStatus = function() {
  this.showStatus('error');
};

proto.showLastStatus = function() {
  this.showStatus('last');
  // prevent last then append event race condition from showing last status #706
  this.bindHideStatus('off');
};

proto.showStatus = function( eventName ) {
  show( this.statusElement );
  this.hideStatusEventElements();
  let eventElem = this.statusEventElements[ eventName ];
  show( eventElem );
};

proto.hideAllStatus = function() {
  hide( this.statusElement );
  this.hideStatusEventElements();
};

proto.hideStatusEventElements = function() {
  for ( let type in this.statusEventElements ) {
    let eventElem = this.statusEventElements[ type ];
    hide( eventElem );
  }
};

// --------------------------  -------------------------- //

function hide( elem ) {
  setDisplay( elem, 'none' );
}

function show( elem ) {
  setDisplay( elem, 'block' );
}

function setDisplay( elem, value ) {
  if ( elem ) {
    elem.style.display = value;
  }
}

// --------------------------  -------------------------- //

return InfiniteScroll;

} ) );
});

var js = createCommonjsModule(function (module) {
/*!
 * Infinite Scroll v4.0.1
 * Automatically add next page
 *
 * Licensed GPLv3 for open source use
 * or Infinite Scroll Commercial License for commercial use
 *
 * https://infinite-scroll.com
 * Copyright 2018-2020 Metafizzy
 */

( function( window, factory ) {
  // universal module definition
  if ( module.exports ) {
    // CommonJS
    module.exports = factory(
        core,
        pageLoad,
        scrollWatch,
        history_1,
        button,
        status,
    );
  }

} )( window, function factory( InfiniteScroll ) {
  return InfiniteScroll;
} );
});

var lang = createCommonjsModule(function (module, exports) {
/*!
 *  Lang.js for Laravel localization in JavaScript.
 *
 *  @version 1.1.12
 *  @license MIT https://github.com/rmariuzzo/Lang.js/blob/master/LICENSE
 *  @site    https://github.com/rmariuzzo/Lang.js
 *  @author  Rubens Mariuzzo <rubens@mariuzzo.com>
 */

(function(root, factory) {

    {
        // NodeJS support.
        module.exports = factory();
    }

}(commonjsGlobal, function() {

    function inferLocale() {
        if (typeof document !== 'undefined' && document.documentElement) {
            return document.documentElement.lang;
        }
    }
    function convertNumber(str) {
        if (str === '-Inf') {
            return -Infinity;
        } else if (str === '+Inf' || str === 'Inf' || str === '*') {
            return Infinity;
        }
        return parseInt(str, 10);
    }

    // Derived from: https://github.com/symfony/translation/blob/460390765eb7bb9338a4a323b8a4e815a47541ba/Interval.php
    var intervalRegexp = /^({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])$/;
    var anyIntervalRegexp = /({\s*(\-?\d+(\.\d+)?[\s*,\s*\-?\d+(\.\d+)?]*)\s*})|([\[\]])\s*(-Inf|\*|\-?\d+(\.\d+)?)\s*,\s*(\+?Inf|\*|\-?\d+(\.\d+)?)\s*([\[\]])/;

    // Default options //

    var defaults = {
        locale: 'en'/** The default locale if not set. */
    };

    // Constructor //

    var Lang = function(options) {
        options = options || {};
        this.locale = options.locale || inferLocale() || defaults.locale;
        this.fallback = options.fallback;
        this.messages = options.messages;
    };

    // Methods //

    /**
     * Set messages source.
     *
     * @param messages {object} The messages source.
     *
     * @return void
     */
    Lang.prototype.setMessages = function(messages) {
        this.messages = messages;
    };

    /**
     * Get the current locale.
     *
     * @return {string} The current locale.
     */
    Lang.prototype.getLocale = function() {
        return this.locale || this.fallback;
    };

    /**
     * Set the current locale.
     *
     * @param locale {string} The locale to set.
     *
     * @return void
     */
    Lang.prototype.setLocale = function(locale) {
        this.locale = locale;
    };

    /**
     * Get the fallback locale being used.
     *
     * @return void
     */
    Lang.prototype.getFallback = function() {
        return this.fallback;
    };

    /**
     * Set the fallback locale being used.
     *
     * @param fallback {string} The fallback locale.
     *
     * @return void
     */
    Lang.prototype.setFallback = function(fallback) {
        this.fallback = fallback;
    };

    /**
     * This method act as an alias to get() method.
     *
     * @param key {string} The key of the message.
     * @param locale {string} The locale of the message
     *
     * @return {boolean} true if the given key is defined on the messages source, otherwise false.
     */
    Lang.prototype.has = function(key, locale) {
        if (typeof key !== 'string' || !this.messages) {
            return false;
        }

        return this._getMessage(key, locale) !== null;
    };

    /**
     * Get a translation message.
     *
     * @param key {string} The key of the message.
     * @param replacements {object} The replacements to be done in the message.
     * @param locale {string} The locale to use, if not passed use the default locale.
     *
     * @return {string} The translation message, if not found the given key.
     */
    Lang.prototype.get = function(key, replacements, locale) {
        if (!this.has(key, locale)) {
            return key;
        }

        var message = this._getMessage(key, locale);
        if (message === null) {
            return key;
        }

        if (replacements) {
            message = this._applyReplacements(message, replacements);
        }

        return message;
    };

    /**
     * This method act as an alias to get() method.
     *
     * @param key {string} The key of the message.
     * @param replacements {object} The replacements to be done in the message.
     *
     * @return {string} The translation message, if not found the given key.
     */
    Lang.prototype.trans = function(key, replacements) {
        return this.get(key, replacements);
    };

    /**
     * Gets the plural or singular form of the message specified based on an integer value.
     *
     * @param key {string} The key of the message.
     * @param count {number} The number of elements.
     * @param replacements {object} The replacements to be done in the message.
     * @param locale {string} The locale to use, if not passed use the default locale.
     *
     * @return {string} The translation message according to an integer value.
     */
    Lang.prototype.choice = function(key, number, replacements, locale) {
        // Set default values for parameters replace and locale
        replacements = typeof replacements !== 'undefined'
            ? replacements
            : {};

        // The count must be replaced if found in the message
        replacements.count = number;

        // Message to get the plural or singular
        var message = this.get(key, replacements, locale);

        // Check if message is not null or undefined
        if (message === null || message === undefined) {
            return message;
        }

        // Separate the plural from the singular, if any
        var messageParts = message.split('|');

        // Get the explicit rules, If any
        var explicitRules = [];

        for (var i = 0; i < messageParts.length; i++) {
            messageParts[i] = messageParts[i].trim();

            if (anyIntervalRegexp.test(messageParts[i])) {
                var messageSpaceSplit = messageParts[i].split(/\s/);
                explicitRules.push(messageSpaceSplit.shift());
                messageParts[i] = messageSpaceSplit.join(' ');
            }
        }

        // Check if there's only one message
        if (messageParts.length === 1) {
            // Nothing to do here
            return message;
        }

        // Check the explicit rules
        for (var j = 0; j < explicitRules.length; j++) {
            if (this._testInterval(number, explicitRules[j])) {
                return messageParts[j];
            }
        }

        locale = locale || this._getLocale(key);
        var pluralForm = this._getPluralForm(number, locale);

        return messageParts[pluralForm];
    };

    /**
     * This method act as an alias to choice() method.
     *
     * @param key {string} The key of the message.
     * @param count {number} The number of elements.
     * @param replacements {object} The replacements to be done in the message.
     *
     * @return {string} The translation message according to an integer value.
     */
    Lang.prototype.transChoice = function(key, count, replacements) {
        return this.choice(key, count, replacements);
    };

    /**
     * Parse a message key into components.
     *
     * @param key {string} The message key to parse.
     * @param key {string} The message locale to parse
     * @return {object} A key object with source and entries properties.
     */
    Lang.prototype._parseKey = function(key, locale) {
        if (typeof key !== 'string' || typeof locale !== 'string') {
            return null;
        }

        var segments = key.split('.');
        var source = segments[0].replace(/\//g, '.');

        return {
            source: locale + '.' + source,
            sourceFallback: this.getFallback() + '.' + source,
            entries: segments.slice(1)
        };
    };

    /**
     * Returns a translation message. Use `Lang.get()` method instead, this methods assumes the key exists.
     *
     * @param key {string} The key of the message.
     * @param locale {string} The locale of the message
     *
     * @return {string} The translation message for the given key.
     */
    Lang.prototype._getMessage = function(key, locale) {
        locale = locale || this.getLocale();
        
        key = this._parseKey(key, locale);

        // Ensure message source exists.
        if (this.messages[key.source] === undefined && this.messages[key.sourceFallback] === undefined) {
            return null;
        }

        // Get message from default locale.
        var message = this.messages[key.source];
        var entries = key.entries.slice();
        var subKey = entries.join('.');
        message = message !== undefined ? this._getValueInKey(message, subKey) : undefined;


        // Get message from fallback locale.
        if (typeof message !== 'string' && this.messages[key.sourceFallback]) {
            message = this.messages[key.sourceFallback];
            entries = key.entries.slice();
            subKey = '';
            while (entries.length && message !== undefined) {
                var subKey = !subKey ? entries.shift() : subKey.concat('.', entries.shift());
                if (message[subKey]) {
                    message = message[subKey];
                    subKey = '';
                }
            }
        }

        if (typeof message !== 'string') {
            return null;
        }

        return message;
    };

    Lang.prototype._getValueInKey = function(obj, str) {
        // If the full key exists just return the value
        if (typeof obj[str] === 'string') {
            return obj[str]
        }

        str = str.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
        str = str.replace(/^\./, '');           // strip a leading dot

        var parts = str.split('.');

        for (var i = 0, n = parts.length; i < n; ++i) {
            var currentKey = parts.slice(0, i + 1).join('.');
            var restOfTheKey = parts.slice(i + 1, parts.length).join('.');
            
            if (obj[currentKey]) {
                return this._getValueInKey(obj[currentKey], restOfTheKey)
            }
        }

        return obj;
    };

    /**
     * Return the locale to be used between default and fallback.
     * @param {String} key
     * @return {String}
     */
    Lang.prototype._getLocale = function(key) {
        key = this._parseKey(key, this.locale);
        if (this.messages[key.source]) {
            return this.locale;
        }
        if (this.messages[key.sourceFallback]) {
            return this.fallback;
        }
        return null;
    };

    /**
     * Find a message in a translation tree using both dotted keys and regular ones
     *
     * @param pathSegments {array} An array of path segments such as ['family', 'father']
     * @param tree {object} The translation tree
     */
    Lang.prototype._findMessageInTree = function(pathSegments, tree) {
        while (pathSegments.length && tree !== undefined) {
            var dottedKey = pathSegments.join('.');
            if (tree[dottedKey]) {
                tree = tree[dottedKey];
                break;
            }

            tree = tree[pathSegments.shift()];
        }

        return tree;
    };

    /**
     * Sort replacement keys by length in descending order.
     *
     * @param a {string} Replacement key
     * @param b {string} Sibling replacement key
     * @return {number}
     * @private
     */
    Lang.prototype._sortReplacementKeys = function(a, b) {
        return b.length - a.length;
    };

    /**
     * Apply replacements to a string message containing placeholders.
     *
     * @param message {string} The text message.
     * @param replacements {object} The replacements to be done in the message.
     *
     * @return {string} The string message with replacements applied.
     */
    Lang.prototype._applyReplacements = function(message, replacements) {
        var keys = Object.keys(replacements).sort(this._sortReplacementKeys);

        keys.forEach(function(replace) {
            message = message.replace(new RegExp(':' + replace, 'gi'), function (match) {
                var value = replacements[replace];

                // Capitalize all characters.
                var allCaps = match === match.toUpperCase();
                if (allCaps) {
                    return value.toUpperCase();
                }

                // Capitalize first letter.
                var firstCap = match === match.replace(/\w/i, function(letter) {
                    return letter.toUpperCase();
                });
                if (firstCap) {
                    return value.charAt(0).toUpperCase() + value.slice(1);
                }

                return value;
            });
        });
        return message;
    };

    /**
     * Checks if the given `count` is within the interval defined by the {string} `interval`
     *
     * @param  count     {int}    The amount of items.
     * @param  interval  {string} The interval to be compared with the count.
     * @return {boolean}          Returns true if count is within interval; false otherwise.
     */
    Lang.prototype._testInterval = function(count, interval) {
        /**
         * From the Symfony\Component\Translation\Interval Docs
         *
         * Tests if a given number belongs to a given math interval.
         *
         * An interval can represent a finite set of numbers:
         *
         *  {1,2,3,4}
         *
         * An interval can represent numbers between two numbers:
         *
         *  [1, +Inf]
         *  ]-1,2[
         *
         * The left delimiter can be [ (inclusive) or ] (exclusive).
         * The right delimiter can be [ (exclusive) or ] (inclusive).
         * Beside numbers, you can use -Inf and +Inf for the infinite.
         */

        if (typeof interval !== 'string') {
            throw 'Invalid interval: should be a string.';
        }

        interval = interval.trim();

        var matches = interval.match(intervalRegexp);
        if (!matches) {
            throw 'Invalid interval: ' + interval;
        }

        if (matches[2]) {
            var items = matches[2].split(',');
            for (var i = 0; i < items.length; i++) {
                if (parseInt(items[i], 10) === count) {
                    return true;
                }
            }
        } else {
            // Remove falsy values.
            matches = matches.filter(function(match) {
                return !!match;
            });

            var leftDelimiter = matches[1];
            var leftNumber = convertNumber(matches[2]);
            if (leftNumber === Infinity) {
                leftNumber = -Infinity;
            }
            var rightNumber = convertNumber(matches[3]);
            var rightDelimiter = matches[4];

            return (leftDelimiter === '[' ? count >= leftNumber : count > leftNumber)
                && (rightDelimiter === ']' ? count <= rightNumber : count < rightNumber);
        }

        return false;
    };

    /**
     * Returns the plural position to use for the given locale and number.
     *
     * The plural rules are derived from code of the Zend Framework (2010-09-25),
     * which is subject to the new BSD license (http://framework.zend.com/license/new-bsd).
     * Copyright (c) 2005-2010 Zend Technologies USA Inc. (http://www.zend.com)
     *
     * @param {Number} count
     * @param {String} locale
     * @return {Number}
     */
    Lang.prototype._getPluralForm = function(count, locale) {
        switch (locale) {
            case 'az':
            case 'bo':
            case 'dz':
            case 'id':
            case 'ja':
            case 'jv':
            case 'ka':
            case 'km':
            case 'kn':
            case 'ko':
            case 'ms':
            case 'th':
            case 'tr':
            case 'vi':
            case 'zh':
                return 0;

            case 'af':
            case 'bn':
            case 'bg':
            case 'ca':
            case 'da':
            case 'de':
            case 'el':
            case 'en':
            case 'eo':
            case 'es':
            case 'et':
            case 'eu':
            case 'fa':
            case 'fi':
            case 'fo':
            case 'fur':
            case 'fy':
            case 'gl':
            case 'gu':
            case 'ha':
            case 'he':
            case 'hu':
            case 'is':
            case 'it':
            case 'ku':
            case 'lb':
            case 'ml':
            case 'mn':
            case 'mr':
            case 'nah':
            case 'nb':
            case 'ne':
            case 'nl':
            case 'nn':
            case 'no':
            case 'om':
            case 'or':
            case 'pa':
            case 'pap':
            case 'ps':
            case 'pt':
            case 'so':
            case 'sq':
            case 'sv':
            case 'sw':
            case 'ta':
            case 'te':
            case 'tk':
            case 'ur':
            case 'zu':
                return (count == 1)
                    ? 0
                    : 1;

            case 'am':
            case 'bh':
            case 'fil':
            case 'fr':
            case 'gun':
            case 'hi':
            case 'hy':
            case 'ln':
            case 'mg':
            case 'nso':
            case 'xbr':
            case 'ti':
            case 'wa':
                return ((count === 0) || (count === 1))
                    ? 0
                    : 1;

            case 'be':
            case 'bs':
            case 'hr':
            case 'ru':
            case 'sr':
            case 'uk':
                return ((count % 10 == 1) && (count % 100 != 11))
                    ? 0
                    : (((count % 10 >= 2) && (count % 10 <= 4) && ((count % 100 < 10) || (count % 100 >= 20)))
                        ? 1
                        : 2);

            case 'cs':
            case 'sk':
                return (count == 1)
                    ? 0
                    : (((count >= 2) && (count <= 4))
                        ? 1
                        : 2);

            case 'ga':
                return (count == 1)
                    ? 0
                    : ((count == 2)
                        ? 1
                        : 2);

            case 'lt':
                return ((count % 10 == 1) && (count % 100 != 11))
                    ? 0
                    : (((count % 10 >= 2) && ((count % 100 < 10) || (count % 100 >= 20)))
                        ? 1
                        : 2);

            case 'sl':
                return (count % 100 == 1)
                    ? 0
                    : ((count % 100 == 2)
                        ? 1
                        : (((count % 100 == 3) || (count % 100 == 4))
                            ? 2
                            : 3));

            case 'mk':
                return (count % 10 == 1)
                    ? 0
                    : 1;

            case 'mt':
                return (count == 1)
                    ? 0
                    : (((count === 0) || ((count % 100 > 1) && (count % 100 < 11)))
                        ? 1
                        : (((count % 100 > 10) && (count % 100 < 20))
                            ? 2
                            : 3));

            case 'lv':
                return (count === 0)
                    ? 0
                    : (((count % 10 == 1) && (count % 100 != 11))
                        ? 1
                        : 2);

            case 'pl':
                return (count == 1)
                    ? 0
                    : (((count % 10 >= 2) && (count % 10 <= 4) && ((count % 100 < 12) || (count % 100 > 14)))
                        ? 1
                        : 2);

            case 'cy':
                return (count == 1)
                    ? 0
                    : ((count == 2)
                        ? 1
                        : (((count == 8) || (count == 11))
                            ? 2
                            : 3));

            case 'ro':
                return (count == 1)
                    ? 0
                    : (((count === 0) || ((count % 100 > 0) && (count % 100 < 20)))
                        ? 1
                        : 2);

            case 'ar':
                return (count === 0)
                    ? 0
                    : ((count == 1)
                        ? 1
                        : ((count == 2)
                            ? 2
                            : (((count % 100 >= 3) && (count % 100 <= 10))
                                ? 3
                                : (((count % 100 >= 11) && (count % 100 <= 99))
                                    ? 4
                                    : 5))));

            default:
                return 0;
        }
    };

    return Lang;

}));
});

var bind = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

// eslint-disable-next-line func-names
var kindOf = (function(cache) {
  // eslint-disable-next-line func-names
  return function(thing) {
    var str = toString.call(thing);
    return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
  };
})(Object.create(null));

function kindOfTest(type) {
  type = type.toLowerCase();
  return function isKindOf(thing) {
    return kindOf(thing) === type;
  };
}

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return Array.isArray(val);
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
var isArrayBuffer = kindOfTest('ArrayBuffer');


/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (kindOf(val) !== 'object') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
var isDate = kindOfTest('Date');

/**
 * Determine if a value is a File
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFile = kindOfTest('File');

/**
 * Determine if a value is a Blob
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
var isBlob = kindOfTest('Blob');

/**
 * Determine if a value is a FileList
 *
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
var isFileList = kindOfTest('FileList');

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} thing The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(thing) {
  var pattern = '[object FormData]';
  return thing && (
    (typeof FormData === 'function' && thing instanceof FormData) ||
    toString.call(thing) === pattern ||
    (isFunction(thing.toString) && thing.toString() === pattern)
  );
}

/**
 * Determine if a value is a URLSearchParams object
 * @function
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
var isURLSearchParams = kindOfTest('URLSearchParams');

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

/**
 * Inherit the prototype methods from one constructor into another
 * @param {function} constructor
 * @param {function} superConstructor
 * @param {object} [props]
 * @param {object} [descriptors]
 */

function inherits(constructor, superConstructor, props, descriptors) {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors);
  constructor.prototype.constructor = constructor;
  props && Object.assign(constructor.prototype, props);
}

/**
 * Resolve object with deep prototype chain to a flat object
 * @param {Object} sourceObj source object
 * @param {Object} [destObj]
 * @param {Function} [filter]
 * @returns {Object}
 */

function toFlatObject(sourceObj, destObj, filter) {
  var props;
  var i;
  var prop;
  var merged = {};

  destObj = destObj || {};

  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if (!merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = Object.getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);

  return destObj;
}

/*
 * determines whether a string ends with the characters of a specified string
 * @param {String} str
 * @param {String} searchString
 * @param {Number} [position= 0]
 * @returns {boolean}
 */
function endsWith(str, searchString, position) {
  str = String(str);
  if (position === undefined || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  var lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
}


/**
 * Returns new array from array like object
 * @param {*} [thing]
 * @returns {Array}
 */
function toArray(thing) {
  if (!thing) return null;
  var i = thing.length;
  if (isUndefined(i)) return null;
  var arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
}

// eslint-disable-next-line func-names
var isTypedArray = (function(TypedArray) {
  // eslint-disable-next-line func-names
  return function(thing) {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== 'undefined' && Object.getPrototypeOf(Uint8Array));

var utils = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM,
  inherits: inherits,
  toFlatObject: toFlatObject,
  kindOf: kindOf,
  kindOfTest: kindOfTest,
  endsWith: endsWith,
  toArray: toArray,
  isTypedArray: isTypedArray,
  isFileList: isFileList
};

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
var buildURL = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

var InterceptorManager_1 = InterceptorManager;

var normalizeHeaderName = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [config] The config.
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  this.message = message;
  this.name = 'AxiosError';
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}

utils.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});

var prototype = AxiosError.prototype;
var descriptors = {};

[
  'ERR_BAD_OPTION_VALUE',
  'ERR_BAD_OPTION',
  'ECONNABORTED',
  'ETIMEDOUT',
  'ERR_NETWORK',
  'ERR_FR_TOO_MANY_REDIRECTS',
  'ERR_DEPRECATED',
  'ERR_BAD_RESPONSE',
  'ERR_BAD_REQUEST',
  'ERR_CANCELED'
// eslint-disable-next-line func-names
].forEach(function(code) {
  descriptors[code] = {value: code};
});

Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, 'isAxiosError', {value: true});

// eslint-disable-next-line func-names
AxiosError.from = function(error, code, config, request, response, customProps) {
  var axiosError = Object.create(prototype);

  utils.toFlatObject(error, axiosError, function filter(obj) {
    return obj !== Error.prototype;
  });

  AxiosError.call(axiosError, error.message, code, config, request, response);

  axiosError.name = error.name;

  customProps && Object.assign(axiosError, customProps);

  return axiosError;
};

var AxiosError_1 = AxiosError;

var transitional = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

/**
 * Convert a data object to FormData
 * @param {Object} obj
 * @param {?Object} [formData]
 * @returns {Object}
 **/

function toFormData(obj, formData) {
  // eslint-disable-next-line no-param-reassign
  formData = formData || new FormData();

  var stack = [];

  function convertValue(value) {
    if (value === null) return '';

    if (utils.isDate(value)) {
      return value.toISOString();
    }

    if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
      return typeof Blob === 'function' ? new Blob([value]) : Buffer.from(value);
    }

    return value;
  }

  function build(data, parentKey) {
    if (utils.isPlainObject(data) || utils.isArray(data)) {
      if (stack.indexOf(data) !== -1) {
        throw Error('Circular reference detected in ' + parentKey);
      }

      stack.push(data);

      utils.forEach(data, function each(value, key) {
        if (utils.isUndefined(value)) return;
        var fullKey = parentKey ? parentKey + '.' + key : key;
        var arr;

        if (value && !parentKey && typeof value === 'object') {
          if (utils.endsWith(key, '{}')) {
            // eslint-disable-next-line no-param-reassign
            value = JSON.stringify(value);
          } else if (utils.endsWith(key, '[]') && (arr = utils.toArray(value))) {
            // eslint-disable-next-line func-names
            arr.forEach(function(el) {
              !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
            });
            return;
          }
        }

        build(value, fullKey);
      });

      stack.pop();
    } else {
      formData.append(parentKey, convertValue(data));
    }
  }

  build(obj);

  return formData;
}

var toFormData_1 = toFormData;

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
var settle = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_1(
      'Request failed with status code ' + response.status,
      [AxiosError_1.ERR_BAD_REQUEST, AxiosError_1.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
};

var cookies = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
var isAbsoluteURL = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
};

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
var combineURLs = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
var buildFullPath = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
var parseHeaders = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

var isURLSameOrigin = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

/**
 * A `CanceledError` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function CanceledError(message) {
  // eslint-disable-next-line no-eq-null,eqeqeq
  AxiosError_1.call(this, message == null ? 'canceled' : message, AxiosError_1.ERR_CANCELED);
  this.name = 'CanceledError';
}

utils.inherits(CanceledError, AxiosError_1, {
  __CANCEL__: true
});

var CanceledError_1 = CanceledError;

var parseProtocol = function parseProtocol(url) {
  var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || '';
};

var xhr = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;
    var onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }

      if (config.signal) {
        config.signal.removeEventListener('abort', onCanceled);
      }
    }

    if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);

    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(new AxiosError_1('Request aborted', AxiosError_1.ECONNABORTED, config, request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(new AxiosError_1('Network Error', AxiosError_1.ERR_NETWORK, config, request, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
      var transitional$1 = config.transitional || transitional;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError_1(
        timeoutErrorMessage,
        transitional$1.clarifyTimeoutError ? AxiosError_1.ETIMEDOUT : AxiosError_1.ECONNABORTED,
        config,
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken || config.signal) {
      // Handle cancellation
      // eslint-disable-next-line func-names
      onCanceled = function(cancel) {
        if (!request) {
          return;
        }
        reject(!cancel || (cancel && cancel.type) ? new CanceledError_1() : cancel);
        request.abort();
        request = null;
      };

      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
      }
    }

    if (!requestData) {
      requestData = null;
    }

    var protocol = parseProtocol(fullPath);

    if (protocol && [ 'http', 'https', 'file' ].indexOf(protocol) === -1) {
      reject(new AxiosError_1('Unsupported protocol ' + protocol + ':', AxiosError_1.ERR_BAD_REQUEST, config));
      return;
    }


    // Send the request
    request.send(requestData);
  });
};

// eslint-disable-next-line strict
var _null = null;

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = xhr;
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = xhr;
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: transitional,

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }

    var isObjectPayload = utils.isObject(data);
    var contentType = headers && headers['Content-Type'];

    var isFileList;

    if ((isFileList = utils.isFileList(data)) || (isObjectPayload && contentType === 'multipart/form-data')) {
      var _FormData = this.env && this.env.FormData;
      return toFormData_1(isFileList ? {'files[]': data} : data, _FormData && new _FormData());
    } else if (isObjectPayload || contentType === 'application/json') {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }

    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional || defaults.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw AxiosError_1.from(e, AxiosError_1.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  env: {
    FormData: _null
  },

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },

  headers: {
    common: {
      'Accept': 'application/json, text/plain, */*'
    }
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

var defaults_1 = defaults;

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
var transformData = function transformData(data, headers, fns) {
  var context = this || defaults_1;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};

var isCancel = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }

  if (config.signal && config.signal.aborted) {
    throw new CanceledError_1();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
var dispatchRequest = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults_1.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
var mergeConfig = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  // eslint-disable-next-line consistent-return
  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      return getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  // eslint-disable-next-line consistent-return
  function mergeDirectKeys(prop) {
    if (prop in config2) {
      return getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      return getMergedValue(undefined, config1[prop]);
    }
  }

  var mergeMap = {
    'url': valueFromConfig2,
    'method': valueFromConfig2,
    'data': valueFromConfig2,
    'baseURL': defaultToConfig2,
    'transformRequest': defaultToConfig2,
    'transformResponse': defaultToConfig2,
    'paramsSerializer': defaultToConfig2,
    'timeout': defaultToConfig2,
    'timeoutMessage': defaultToConfig2,
    'withCredentials': defaultToConfig2,
    'adapter': defaultToConfig2,
    'responseType': defaultToConfig2,
    'xsrfCookieName': defaultToConfig2,
    'xsrfHeaderName': defaultToConfig2,
    'onUploadProgress': defaultToConfig2,
    'onDownloadProgress': defaultToConfig2,
    'decompress': defaultToConfig2,
    'maxContentLength': defaultToConfig2,
    'maxBodyLength': defaultToConfig2,
    'beforeRedirect': defaultToConfig2,
    'transport': defaultToConfig2,
    'httpAgent': defaultToConfig2,
    'httpsAgent': defaultToConfig2,
    'cancelToken': defaultToConfig2,
    'socketPath': defaultToConfig2,
    'responseEncoding': defaultToConfig2,
    'validateStatus': mergeDirectKeys
  };

  utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
    var merge = mergeMap[prop] || mergeDeepProperties;
    var configValue = merge(prop);
    (utils.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
  });

  return config;
};

var data = {
  "version": "0.27.2"
};

var VERSION = data.version;


var validators$1 = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators$1[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};

/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */
validators$1.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new AxiosError_1(
        formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')),
        AxiosError_1.ERR_DEPRECATED
      );
    }

    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new AxiosError_1('options must be an object', AxiosError_1.ERR_BAD_OPTION_VALUE);
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_1('option ' + opt + ' must be ' + result, AxiosError_1.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_1('Unknown option ' + opt, AxiosError_1.ERR_BAD_OPTION);
    }
  }
}

var validator = {
  assertOptions: assertOptions,
  validators: validators$1
};

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager_1(),
    response: new InterceptorManager_1()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(configOrUrl, config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof configOrUrl === 'string') {
    config = config || {};
    config.url = configOrUrl;
  } else {
    config = configOrUrl || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean),
      forcedJSONParsing: validators.transitional(validators.boolean),
      clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  var fullPath = buildFullPath(config.baseURL, config.url);
  return buildURL(fullPath, config.params, config.paramsSerializer);
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/

  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method: method,
        headers: isForm ? {
          'Content-Type': 'multipart/form-data'
        } : {},
        url: url,
        data: data
      }));
    };
  }

  Axios.prototype[method] = generateHTTPMethod();

  Axios.prototype[method + 'Form'] = generateHTTPMethod(true);
});

var Axios_1 = Axios;

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;

  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;

  // eslint-disable-next-line func-names
  this.promise.then(function(cancel) {
    if (!token._listeners) return;

    var i;
    var l = token._listeners.length;

    for (i = 0; i < l; i++) {
      token._listeners[i](cancel);
    }
    token._listeners = null;
  });

  // eslint-disable-next-line func-names
  this.promise.then = function(onfulfilled) {
    var _resolve;
    // eslint-disable-next-line func-names
    var promise = new Promise(function(resolve) {
      token.subscribe(resolve);
      _resolve = resolve;
    }).then(onfulfilled);

    promise.cancel = function reject() {
      token.unsubscribe(_resolve);
    };

    return promise;
  };

  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new CanceledError_1(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `CanceledError` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Subscribe to the cancel signal
 */

CancelToken.prototype.subscribe = function subscribe(listener) {
  if (this.reason) {
    listener(this.reason);
    return;
  }

  if (this._listeners) {
    this._listeners.push(listener);
  } else {
    this._listeners = [listener];
  }
};

/**
 * Unsubscribe from the cancel signal
 */

CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
  if (!this._listeners) {
    return;
  }
  var index = this._listeners.indexOf(listener);
  if (index !== -1) {
    this._listeners.splice(index, 1);
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

var CancelToken_1 = CancelToken;

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
var spread = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
var isAxiosError = function isAxiosError(payload) {
  return utils.isObject(payload) && (payload.isAxiosError === true);
};

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios_1(defaultConfig);
  var instance = bind(Axios_1.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios_1.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  // Factory for creating new instances
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };

  return instance;
}

// Create the default instance to be exported
var axios$1 = createInstance(defaults_1);

// Expose Axios class to allow class inheritance
axios$1.Axios = Axios_1;

// Expose Cancel & CancelToken
axios$1.CanceledError = CanceledError_1;
axios$1.CancelToken = CancelToken_1;
axios$1.isCancel = isCancel;
axios$1.VERSION = data.version;
axios$1.toFormData = toFormData_1;

// Expose AxiosError class
axios$1.AxiosError = AxiosError_1;

// alias for CanceledError for backward compatibility
axios$1.Cancel = axios$1.CanceledError;

// Expose all/spread
axios$1.all = function all(promises) {
  return Promise.all(promises);
};
axios$1.spread = spread;

// Expose isAxiosError
axios$1.isAxiosError = isAxiosError;

var axios_1 = axios$1;

// Allow use of default import syntax in TypeScript
var _default = axios$1;
axios_1.default = _default;

var axios = axios_1;

function e(e){this.message=e;}e.prototype=new Error,e.prototype.name="InvalidCharacterError";var r="undefined"!=typeof window&&window.atob&&window.atob.bind(window)||function(r){var t=String(r).replace(/=+$/,"");if(t.length%4==1)throw new e("'atob' failed: The string to be decoded is not correctly encoded.");for(var n,o,a=0,i=0,c="";o=t.charAt(i++);~o&&(n=a%4?64*n+o:o,a++%4)?c+=String.fromCharCode(255&n>>(-2*a&6)):0)o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(o);return c};function t(e){var t=e.replace(/-/g,"+").replace(/_/g,"/");switch(t.length%4){case 0:break;case 2:t+="==";break;case 3:t+="=";break;default:throw "Illegal base64url string!"}try{return function(e){return decodeURIComponent(r(e).replace(/(.)/g,(function(e,r){var t=r.charCodeAt(0).toString(16).toUpperCase();return t.length<2&&(t="0"+t),"%"+t})))}(t)}catch(e){return r(t)}}function n$1(e){this.message=e;}function o$1(e,r){if("string"!=typeof e)throw new n$1("Invalid token specified");var o=!0===(r=r||{}).header?0:1;try{return JSON.parse(t(e.split(".")[o]))}catch(e){throw new n$1("Invalid token specified: "+e.message)}}n$1.prototype=new Error,n$1.prototype.name="InvalidTokenError";

let i=function(e,t,a){return alert(e)},n=function(e,t){return i(e,l.error,t)},l={error:"error",success:"success",info:"info"};var o={fire:function(e,t,a){return i(e,t,a)},setNotifier:function(e){i=e,salla.event.emit("twilight::notifier.changed");},error:n,success:function(e,t){return i(e,l.success,t)},info:function(e,t){return i(e,l.info,t)},sallaInitiated:function(){let e=window.location.href.match(/([\?\&]danger=)[^&]+/g);e&&(window.history.replaceState(null,document.title,window.location.pathname),salla.event.once("twilight::notifier.changed",(()=>{e.forEach((e=>{n(decodeURI(e.replace("?danger=","").replace("&danger=","")));}));})));},types:l};class d{constructor(e,t){return this.api=e,this.event=t,new Proxy(this,{get:function(a,r){return "event"===r?t:"api"===r?e:e&&e[r]||a[r]}})}}Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement;}}),Element.prototype.getElementSallaData=function(e,...t){if(!this.getAttribute)return;if(this.hasAttribute("data-json"))try{return JSON.parse(this.getAttribute("data-json"))}catch(e){}let a=this.getAttribute("data-function");if(a&&window[a])return "function"==typeof window[a]?this.getFilteredData(window[a].call(this,...t)):this.getFilteredData(window[a]);let r=this.hasAttribute("data-form-selector")?document.querySelector(this.dataset.formSelector):void 0;if(r="FORM"===this.tagName?this:r||this.closest("form")||this.closest("[salla-form-data]")||this,r&&"FORM"===r.tagName)return this.getFilteredData(new FormData(r),null,r);let s=r.querySelectorAll("[name]");if(!s.length)return this.getFilteredData();let i=Object.assign({},this.dataset);return s.forEach((e=>{if(!["checkbox","radio"].includes(e.type)||e.checked)try{let t=Salla.helpers.inputData(e.name,e.value,i);i[t.name]=t.value;}catch(t){Salla.log(e.name+" can't be send");}})),this.getFilteredData(i)},Element.prototype.canEventFireHook=function(e){return !!this.hasAttribute&&this.hasAttribute(Salla.api.hooksPrefix+e.type)},Element.prototype.hasAttributeStartsWith=function(e,t){e=e.toLowerCase();for(var a=0;a<this.attributes.length;a++){let r=this.attributes[a].name.toLowerCase();if(0===r.indexOf(e))return !t||r}return !1},HTMLFormElement.prototype.getAjaxFormData=function(e){var t=this.querySelectorAll('input[type="file"]');t.forEach((e=>{e.files.length||e.setAttribute("disabled","");}));var a=new FormData(this);return t.forEach((e=>{e.files.length||e.removeAttribute("disabled");})),{formData:this.getFilteredData(a,e),url:this.getAttribute("action"),method:this.getAttribute("method")||"post",events:{success:this.dataset.onSuccess,fail:this.dataset.onFail}}},Element.prototype.getFilteredData=function(e=null,t=null,a=null){return e=e||a?.dataset||this.dataset,a&&this.name&&void 0!==this.value&&(e=function(e,t,a){e instanceof FormData?e.append(t,a):e[t]=a;return e}(e,this.name,this.value)),["filterBeforeSubmit","filterBeforeSend"].forEach((r=>{let s=a?.dataset[r]||this.dataset[r];if(s){var i=window[s];if("function"==typeof i){if(!i(e,a||this,t)&&e)throw `Data failed to be pass verify function window.${s}(formData, element, event)!`;return i(e,a||this,t)}Salla.log("window."+s+"() not found!");}})),e},HTMLAnchorElement.prototype.getAjaxFormData=function(e){return {formData:this.getFilteredData(null,e),url:this.getAttribute("href"),method:this.dataset.type||"get",events:{success:this.dataset.onSuccess,fail:this.dataset.onFail}}};class c{constructor(){this.events={},this.namespace="";let e=/function (.{1,})\(/.exec(this.constructor.toString());this.className=(e&&e.length>1?e[1]:"").toLowerCase();}after_init(){this.createDynamicFunctions();}createDynamicFunctions(){Object.keys(this.events).forEach((e=>{this.createDynamicEventFuns(e),this.createDynamicListenerFuns(e);}));}createDynamicEventFuns(e){if(this[e])return;let t=this;this[e]=function(...a){return t.dispatch(e,...a)};}createDynamicListenerFuns(e){let t="on"+e.charAt(0).toUpperCase()+e.slice(1);if(this[t])return;let a=this;this[t]=function(t){return a.on(e,(async(...e)=>t(...e)))};}getEventName(e){return e=this.events[e]||e,!this.namespace||e.includes("::")?e:this.namespace+Salla.event.delimiter+e}dispatch(e,...t){return Salla.event.emitAsync(this.getEventName(e),...t)}on(e,t){return Salla.event.addListener(this.getEventName(e),t)}once(e,t){return Salla.event.once(this.getEventName(e),t)}}function u(e){e&&e.sallaInitiated&&!e.initiated&&(e.sallaInitiated(),e.initiated=!0);}Salla.event.auth=new class extends c{constructor(){super(),this.namespace="auth",this.events={login:"login",logout:"logout",codeSent:"code.sent",codeNotSent:"code.not-sent",verified:"verified",verificationFailed:"verification.failed",loggedIn:"logged.in",registered:"registered",registrationFailed:"registration.failed",loggedOut:"logged.out",failedLogout:"failed.logout",refreshFailed:"refresh.failed",tokenFetched:"token.fetched"},this.after_init();}login(e){return e?(e.type&&this.setTypeActionOnVerified(e.type),this.next_event=e.next_event||null,this.dispatch("login",...arguments)):(this.next_event=null,this.dispatch("login",...arguments))}loggedIn(e){return Salla.profile.info().finally((()=>this.dispatch("loggedIn",e)))}setTypeActionOnVerified(e){this.type_action_on_verified=e;}getTypeActionOnVerified(){return this.type_action_on_verified||"redirect"}},Salla.event.cart=new class extends c{constructor(){super(),this.namespace="cart",this.events={latestFetched:"latest.fetched",latestFailed:"latest.failed",updated:"updated",itemUpdated:"item.updated",itemUpdatedFailed:"item.updated.failed",itemAdded:"item.added",itemAddedFailed:"item.added.failed",itemDeleted:"item.deleted",itemDeletedFailed:"item.deleted.failed",submitted:"submitted",submitFailed:"submit.failed",imageDeleted:"image.deleted",imageNotDeleted:"image.not.deleted",detailsFetched:"details.fetched",detailsNotFetched:"details.not.fetched",successReset:"success.reset",priceQuoteSucceeded:"price-quote.succeeded",priceQuoteFailed:"price-quote.failed",couponAdded:"coupon.added",couponDeleted:"coupon.deleted",couponAdditionFailed:"coupon.addition.failed",couponDeletionFailed:"coupon.deletion.failed",quickOrderSettingFetched:"quick-order.fetched",quickOrderSettingFailed:"quick-order.failed",quickOrderSucceeded:"quick-order.succeeded",quickOrderFailed:"quick-order.failed"},this.after_init();}updated(e){return Salla.cookie.set("fresh_summary",1),e&&"object"==typeof e?(e.offer&&salla.product.event.offerExisted(e.offer),e.redirect&&(salla.log("The current cart is purchased!"),salla.cart.api.reset()),e.cart?(salla.storage.set("cart.summary",{total:e.cart.total,sub_total:e.cart.sub_total,discount:e.cart.discount,real_shipping_cost:e.cart.real_shipping_cost,count:e.cart.count,shipping_cost:e.cart.free_shipping_bar?.has_free_shipping?0:e.cart.real_shipping_cost}),this.dispatch("updated",e.cart)):void salla.log("Failed to get the cart summary!")):(Salla.logger.info("Cart summary not an object!",e),this.dispatch("updated"))}latestFetched(e){return this.updated(e.data),this.dispatch("latestFetched",e)}itemAdded(e,t){return this.updated(e.data),this.dispatch("itemAdded",e,t)}itemDeleted(e,t){return this.updated(e.data),this.dispatch("itemDeleted",e,t)}itemUpdated(e,t){return this.updated(e.data),this.dispatch("itemUpdated",e,t)}couponAdded(e,t){return this.updated(e.data),this.dispatch("couponAdded",e,t)}couponDeleted(e,t){return this.updated(e.data),this.dispatch("couponDeleted",e,t)}},Salla.event.order=new class extends c{constructor(){super(),this.namespace="order",this.events={canceled:"canceled",notCanceled:"not.canceled",orderCreated:"order.created",orderCreationFailed:"order.creation.failed",invoiceSent:"invoice.sent",invoiceNotSent:"invoice.not.sent"},this.after_init();}},Salla.event.scope=new class extends c{constructor(){super(),this.namespace="scope",this.events={fetched:"fetched",notFetched:"not.fetched",productAvailabilityFetched:"product-availability.fetched",productAvailabilityNotFetched:"product-availability.not.fetched",changeSucceeded:"changed",changeFailed:"not.changed"},this.after_init();}},Salla.event.rating=new class extends c{constructor(){super(),this.namespace="rating",this.events={orderNotFetched:"order.not.fetched",orderFetched:"order.fetched",storeRated:"store.rated",storeFailed:"store.failed",productsRated:"products.rated",productsFailed:"products.failed",shippingRated:"shipping.rated",shippingFailed:"shipping.failed"},this.after_init();}},Salla.event.booking=new class extends c{constructor(){super(),this.namespace="booking",this.events={added:"added",additionFailed:"addition.failed"},this.after_init();}},Salla.event.comment=new class extends c{constructor(){super(),this.namespace="comment",this.events={added:"added",additionFailed:"addition.failed",fetched:"fetched",fetchFailed:"fetch.failed"},this.after_init();}},Salla.event.landing=new class extends c{constructor(){super(),this.namespace="landing",this.events={detailsFetched:"order.fetched",getDetailsFailed:"get.details.failed",orderCreated:"order.created",orderCreationFailed:"order.creation.failed"},this.after_init();}},Salla.event.loyalty=new class extends c{constructor(){super(),this.namespace="loyalty",this.events={exchangeSucceeded:"exchange.succeeded",exchangeFailed:"exchange.failed",programFetched:"program.fetched",programNotFetched:"program.not.fetched",resetSucceeded:"exchange-reset.succeeded",resetFailed:"exchange-reset.failed"},this.after_init();}exchangeSucceeded(e,t){return salla.cart.event.updated(e.data),this.dispatch("exchangeSucceeded",e,t)}resetSucceeded(e){return salla.cart.event.updated(e.data),this.dispatch("resetSucceeded",e)}},Salla.event.product=new class extends c{constructor(){super(),this.namespace="product",this.events={priceUpdated:"price.updated",priceUpdateFailed:"price.updated.failed",availabilitySubscribed:"availability.subscribed",availabilitySubscribeFailed:"availability.subscribe.failed",categoriesFetched:"categories.fetched",categoriesFailed:"categories.failed",searchFailed:"search.failed",searchResults:"search.results",offerExisted:"offer.existed",fetchOffersFailed:"fetch.offers.failed",offersFetched:"offers.fetched",sizeGuideFetched:"size-guide.fetched",sizeGuideFetchFailed:"size-guide.failed",giftFetched:"gift.fetched",giftFetchFailed:"gift.failed",detailFetched:"detail.fetched",detailFetchFailed:"detail.failed",addGiftToCartSucceeded:"gift.add-to-cart.succeeded",addGiftToCartFailed:"gift.add-to-cart.failed",giftImageUploadSucceeded:"gift.image-upload.succeeded",giftImageUploadFailed:"gift.image-upload.failed",productListFetchSucceeded:"fetch.succeeded",productListFetchFailed:"fetch.failed"},this.after_init();}},Salla.event.profile=new class extends c{constructor(){super(),this.namespace="profile",this.events={updated:"updated",updateFailed:"update.failed",verificationCodeSent:"verification.code.sent",updateContactsFailed:"update.contacts.failed",verified:"verified",unverified:"unverified",infoFetched:"info.fetched",infoNotFetched:"info.not.fetched",settingsUpdated:"settings.updated",updateSettingsFailed:"update.settings.failed",deleted:"deleted",notDeleted:"not.deleted"},this.after_init();}},Salla.event.currency=new class extends c{constructor(){super(),this.namespace="currency",this.events={changed:"changed",failed:"failed",fetched:"fetched",failedToFetch:"failed.to.fetch"},this.after_init();}},Salla.event.document=new class extends c{constructor(){super(),this.namespace="document",this.events={click:"click",change:"change",submit:"submit",keyup:"keyup",leaving:"leaving",request:"request",requestFailed:"request.failed"},this.after_init();}onClick(e,t){this.fireCallableFuns("click",e,t);}onChange(e,t){this.fireCallableFuns("change",e,t);}onSubmit(e,t){this.fireCallableFuns("submit",e,t);}onKeyup(e,t){this.fireCallableFuns("keyup",e,t);}fireCallableFuns(e,t,a){this.on(e,(e=>{"function"!=typeof t?"function"==typeof a&&e.target.matches(t)&&a(e):t(e);}));}fireEvent(e,t,...a){return this.fireEventForElements(e,t,!1,...a)}fireEventForAll(e,t,...a){return this.fireEventForElements(e,t,!0,...a)}fireEventForElements(e,t,a,...r){if("string"==typeof e){if(a)return document.querySelectorAll(e).forEach((e=>this.fireEventForElements(e,t,!1,...r)));e=document.querySelector(e);}if(!e)return void salla.log("Failed To get element to fire event: "+t);const s=new CustomEvent(t,...r);return e.dispatchEvent(s)}},Salla.event.wishlist=new class extends c{constructor(){super(),this.namespace="wishlist",this.events={added:"added",removed:"removed",additionFailed:"addition.failed",removingFailed:"removing.failed"},this.after_init();}},Salla.event.infiniteScroll=new class extends c{constructor(){super(),this.namespace="infiniteScroll",this.events={scrollThreshold:"scroll.threshold",request:"request",load:"load",append:"append",error:"error",last:"last",history:"history"},this.after_init();}},Salla.event.on("twilight::initiated",(()=>{Object.keys(Salla).forEach((e=>{"object"==typeof(e=Salla[e])&&(u(e),Object.keys(e).forEach((t=>{u(e[t]);})));}));})),Salla.config.default_properties={debug:"undefined"!=typeof process&&"development"==="production",token:null,fastRequests:!0,canLeave:!0,store:{api:"https://api.salla.dev/store/v1/"},currencies:{SAR:{code:"SAR",name:"ريال سعودي",symbol:"ر.س",amount:1,country_code:"sa"}}},Salla.config.merge(Salla.config.default_properties),Salla.config.triedToGetCurrencies_=!1,Salla.config.triedToGetLanguages_=!1,Salla.config.isUser=()=>"user"===Salla.config.get("user.type"),Salla.config.isGuest=()=>!Salla.config.isUser(),Salla.config.languages=async()=>{if(Salla.config.triedToGetLanguages_)return Salla.config.get("languages");Salla.config.triedToGetLanguages_=!0;let e=!0,t=[];return (await salla.document.api.request("languages",null,"get"))?.data?.map((a=>{e&&(t=[],e=!1),a.code=a.code||a.iso_code,a.url=salla.url.get(a.code),a.is_rtl=a.is_rtl||a.rtl,t.push(a);})),Salla.config.set("languages",t),t},Salla.config.currencies=async()=>{if(Salla.config.triedToGetCurrencies_)return Salla.config.get("currencies");Salla.config.triedToGetCurrencies_=!0;let e=!0,t={};return (await salla.currency.api.list())?.data?.map((a=>{e&&(t={},e=!1),a.country_code=a.code.substr(0,2).toLowerCase(),t[a.code]=a;})),Salla.config.set("currencies",t),t};class h{constructor(){this.endpoints={},this.webEndpoints=[],this.namespace="BaseApi",this.endpointsMethods={},this.endpointsHeaders={};let e=/function (.{1,})\(/.exec(this.constructor.toString());this.className=(e&&e.length>1?e[1]:"").toLowerCase(),this.debounce={request:void 0,time:300,enabled:!0,exclude:[]};}after_init(){}normalRequest(e,t,a=null){let r=Array.isArray(e),s=r?this.getUrl(...e):this.getUrl(e);e=r?e[0]:e,a=a||this.endpointsMethods[e]||"post";let i=this.endpointsHeaders[e];if("get"===a&&t instanceof FormData){let e={};Array.from(t.entries()).forEach((function(t){e[t[0]]=t[1];})),t={params:e};}return i&&"get"===a&&(t=t?Object.assign(t,i):i),this.webEndpoints.includes(e)?s=salla.url.get(s):"http"!==s.substring(0,4)&&(s=salla.url.api(s)),Salla.api.request(s,t,a,{headers:i})}request(e,t,a=null){return !salla.api.isFastRequestsAllowed()&&this.debounce.enabled?(this.debounce.request||(this.debounce.request=salla.helpers.debounce(this.normalRequest.bind(this),this.debounce.time)),this.debounce.request(e,t,a)):this.normalRequest(e,t,a)}getUrl(e){let t=this.endpoints[e]||e;const a=/{[^{}]+}/i;for(let e=1;e<arguments.length;e++)t=t.replace(a,arguments[e]);return t}event(){return salla.event[this.className]}}class p extends h{constructor(){super(),this.namespace="cart",this.endpoints={latest:"cart/latest",details:"cart/{cart}",quickAdd:"cart/{cart}/item/{product}/quick-add",addItem:"cart/{cart}/item/{product}/add",deleteItem:"cart/{cart}/item/{item}",updateItem:"cart/{cart}/item/{item}",deleteImage:"cart/{cart}/image/{image}",uploadImage:"cart/{cart}/image",status:"cart/{cart}/status",addCoupon:"cart/{id}/coupon",deleteCoupon:"cart/{id}/coupon",getQuickOrderSettings:"checkout/quick-order",createQuickOrder:"checkout/quick-order",priceQuote:"cart/{cartId}/price-quote"},this.endpointsMethods={latest:"get",details:"get",status:"get",updateItem:"post",deleteItem:"delete",deleteImage:"delete",deleteCoupon:"put",getQuickOrderSettings:"get"},this.webEndpoints=["latest"],this.latestCart=null,this.after_init(),salla.event.on("api::initiated",(()=>this.getCurrentCartId()));}async getCurrentCartId(){if(salla.cart.api.latestCart)return salla.cart.api.latestCart.cart.id;let e=salla.storage.get("cart.id");if(e)return e;let t=await this.latest();return salla.cart.api.latestCart=t.data,salla.cart.api.latestCart.cart.id}getUploadImageEndpoint(e){return salla.url.api(this.getUrl("uploadImage",e||salla.storage.get("cart.id")))}latest(){return this.request("latest",{params:{source:""}}).then((e=>(salla.storage.set("cart",e.data.cart),salla.event.cart.latestFetched(e),e))).catch((e=>{throw salla.storage.set("cart",""),salla.event.cart.latestFailed(e),e}))}async details(e,t=[]){return e=e||await this.getCurrentCartId(),this.request(["details",e],{params:{with:t}}).then((function(e){return salla.cart.event.detailsFetched(e),e})).catch((function(e){throw salla.cart.event.detailsNotFetched(e),e}))}async quickAdd(e,t){return this.addItem({id:e,quantity:t,endpoint:"quickAdd"})}async addItem(e){let t=this.getCartPayload(e);if(!t.id){let e='There is no product "id"!';return salla.cart.event.itemAddedFailed(e),salla.api.errorPromise(e)}let a=salla.form.getPossibleValue(t.payload,["endpoint"]);a&&["addItem","quickAdd"].includes(a)||(a=salla.form.getPossibleValue(t.payload,["quantity","donating_amount"])?"addItem":"quickAdd");let r=await this.getCurrentCartId();return this.request([a,r,t.id],t.payload).then((function(e){return salla.cart.event.itemAdded(e,t.id),e})).catch((function(e){throw salla.cart.event.itemAddedFailed(e,t.id),e}))}async deleteItem(e){let t=this.getCartPayload(e);if(!t.id){let e='There is no "id"!';return salla.cart.event.itemDeletedFailed(e),salla.api.errorPromise(e)}let a=await this.getCurrentCartId();return this.request(["deleteItem",a,t.id]).then((function(e){return salla.cart.event.itemDeleted(e,t.id),e})).catch((function(e){throw salla.cart.event.itemDeletedFailed(e,t.id),e}))}async updateItem(e){let t=this.getCartPayload(e);if(!t.id){let e='There is no "id"!';return salla.cart.event.itemUpdatedFailed(e),salla.api.errorPromise(e)}let a=await this.getCurrentCartId();return "Object"===t.payload.constructor?.name?t.payload._method="PUT":t.payload.append("_method","PUT"),this.request(["updateItem",a,t.id],t.payload).then((function(e){return salla.cart.event.itemUpdated(e,t.id),e})).catch((function(e){throw salla.cart.event.itemUpdatedFailed(e,t.id),e}))}async deleteImage(e){if(!(e=salla.form.getPossibleValue(e,["id","image_id","photo_id"]))){let e='There is no "id"!';return salla.cart.event.imageNotDeleted(e),salla.api.errorPromise(e)}let t=await this.getCurrentCartId();return this.request(["deleteImage",t,e]).then((function(t){return salla.cart.event.imageDeleted(t,e),t})).catch((function(t){throw salla.cart.event.imageNotDeleted(t,e),t}))}async status(e){return this.request(["status",e||await this.getCurrentCartId()],{params:{has_apple_pay:!!window.ApplePaySession}})}async submit(){this.status(await this.getCurrentCartId()).then((e=>{let t=e.data.next_step.to;if(!["checkout","refresh","login"].includes(t)){let e="Can't find next_step );";throw salla.cart.event.submitFailed(e),e}if(salla.cart.event.submitted(e),"login"===t)return salla.auth.setCanRedirect(!1),salla.event.dispatch("login::open"),void salla.auth.event.onLoggedIn((e=>{salla.event.dispatch("login::close"),this.submit();}));"checkout"===t?window.location.href=e.data.next_step.url+(window.ApplePaySession?"?has_apple_pay=true":""):window.location.reload();})).catch((function(e){throw salla.cart.event.submitFailed(e),e}));}getCartPayload(e){let t=e?.data||("object"==typeof e?e:void 0);return e=t?salla.form.getPossibleValue(t,["prod_id","product_id","item_id","id"]):e,t="object"==typeof t?t:void 0,{id:e,payload:t}}normalRequest(e,t,a=null){return super.normalRequest(e,t,a).catch((e=>{throw 403===e?.response?.status&&(salla.cart.api.reset(),salla.error(salla.lang.get("pages.checkout.try_again"))),e}))}reset(){salla.api.cart.latestCart=null,salla.storage.remove("cart"),salla.cart.event.successReset();}async addCoupon(e){if(e=e.data||e,!(e=salla.form.getPossibleValue(e,["coupon"]))){let e=new Error('There is no "Coupon Code"!');return e.name="EmptyCoupon",salla.event.cart.couponAdditionFailed(e),salla.api.errorPromise(e)}let t=await salla.cart.api.getCurrentCartId();return this.request(["addCoupon",t],{coupon:e}).then((function(e){return salla.event.cart.couponAdded(e,t),e})).catch((function(e){throw salla.event.cart.couponAdditionFailed(e,t),e}))}async deleteCoupon(){let e=await salla.cart.api.getCurrentCartId();return this.request(["deleteCoupon",e],{}).then((function(t){return salla.event.cart.couponDeleted(t,e),t})).catch((function(t){throw salla.event.cart.couponDeletionFailed(t,e),t}))}getQuickOrderSettings(){return this.request("getQuickOrderSettings").then((e=>(salla.event.cart.quickOrderSettingFetched(e),e))).catch((e=>{throw salla.event.cart.quickOrderSettingFailed(e),e}))}createQuickOrder(e){return this.request("createQuickOrder",e).then((e=>(salla.event.cart.quickOrderSucceeded(e),e))).catch((e=>{throw salla.event.cart.quickOrderFailed(e),e}))}async priceQuote(e){return salla.config.isGuest()?(salla.auth.api.setAfterLoginEvent("cart::priceQuote",e),void salla.event.dispatch("login::open")):this.request(["priceQuote",e||await this.getCurrentCartId()]).then((e=>(salla.cart.api.reset(),salla.event.cart.priceQuoteSucceeded(e).then((()=>(setTimeout((()=>window.location.href=salla.url.get("/")),1e3),e)))))).catch((e=>salla.event.cart.priceQuoteFailed(e).then((()=>{throw 404===e.error?.code&&window.location.reload(),e}))))}}class g extends h{constructor(){super(),this.namespace="loyalty",this.endpoints={getProgram:"loyalty",exchange:"loyalty/exchange",reset:"loyalty/exchange"},this.endpointsMethods={getProgram:"get",reset:"put"},this.after_init();}getProgram(){return this.request("getProgram").then((e=>(salla.loyalty.event.programFetched(e),e))).catch((e=>{throw salla.loyalty.event.programNotFetched(e),e}))}async exchange(e,t=null){if(!(e=salla.form.getPossibleValue(e,["id","loyalty_prize_id","prize_id"]))){let e="Unable to find cart id. Please provide one.";return salla.loyalty.event.exchangeFailed(e),salla.api.errorPromise(e)}if(!(t=t||await salla.cart.getCurrentCartId())){let e="Unable to find cart id. Please provide one.";return salla.loyalty.event.exchangeFailed(e),salla.api.errorPromise(e)}return this.request("exchange",{loyalty_prize_id:e,cart_id:t}).then((function(t){return salla.loyalty.event.exchangeSucceeded(t,e),t})).catch((function(t){throw salla.loyalty.event.exchangeFailed(t,e),t}))}async reset(e=null){if(!(e=e||await salla.cart.getCurrentCartId())){let e="Unable to find cart id. Please provide one.";return salla.loyalty.event.resetFailed(e),salla.api.errorPromise(e)}return this.request("reset",{cart_id:e}).then((e=>(salla.loyalty.event.resetSucceeded(e),e))).catch((e=>{throw salla.loyalty.event.resetFailed(e),e}))}}class f extends h{constructor(){super(),this.namespace="auth",this.canRedirect_=!0,this.afterLoginEvent={event:null,payload:null},this.endpoints={login:"auth/{type}/send_verification",resend:"auth/resend_verification",verify:"auth/{type}/verify",register:"auth/register",logout:"logout",refresh:"auth/refresh"},this.webEndpoints=["logout","auth/jwt","refresh"],this.endpointsMethods={logout:"get"},this.after_init();}setAfterLoginEvent(e,t){salla.api.auth.afterLoginEvent={event:e,payload:t};}setCanRedirect(e){salla.api.auth.canRedirect_=e;}canRedirect(){return salla.api.auth.canRedirect_&&!salla.api.auth.afterLoginEvent.event}login(e){e?.data&&(e=e.data);let t=salla.form.getPossibleValue(e,["type"]);if(!["email","mobile"].includes(t)){let e="Login type should be in: [email, mobile]";return salla.auth.event.codeNotSent(e),salla.api.errorPromise(e)}return this.request(["login",t],e).then((function(e){return salla.auth.event.codeSent(e,t),e})).catch((function(e){throw salla.auth.event.codeNotSent(e,t),e}))}async verify(e,t=!0){let a=salla.form.getPossibleValue(e,["type"]);if(!a){let e="Failed to know what's login type!";return salla.auth.event.verificationFailed(e),salla.api.errorPromise(e)}t=!1!==salla.form.getPossibleValue(e,["supportWebAuth"])&&t,salla.auth.event.next_event&&(e.next_event=salla.auth.event.next_event);let r=await salla.auth.api.request(["verify",a],e);if(200!==r?.status)return salla.auth.event.verificationFailed(r,a),salla.api.errorPromise(r);let s="authenticated"===r.data?.case;return s&&salla.auth.event.tokenFetched(r.data.token),t&&await salla.auth.api.request("auth/jwt"),s&&salla.auth.event.loggedIn(r).then((()=>salla.auth.api.afterUserLogin())),salla.auth.event.verified(r,a),salla.api.successPromise(r)}resend(e){let t;return (e=e.data||e).type=e.type||"mobile","mobile"!==e.type||e.phone&&e.country_code?"email"!==e.type||e.email?this.request("resend",e).then((function(t){return salla.auth.event.codeSent(t,e),t})).catch((function(t){throw salla.auth.event.codeNotSent(t,e),t})):(salla.auth.event.codeNotSent(t="There is no email!",e),salla.api.errorPromise(t)):(salla.auth.event.codeNotSent(t="There is no phone or country_code!",e),salla.api.errorPromise(t))}register(e){let t;return e.data&&(t=e.element,e=e.data),salla.auth.event.next_event&&(e.next_event=salla.auth.event.next_event),this.request("register",e).then((async function(e){return salla.auth.event.registered.call(t,e),"authenticated"===e.data?.case&&(salla.auth.event.tokenFetched(e.data.token),await salla.auth.request("auth/jwt"),salla.auth.event.loggedIn(e),salla.auth.api.afterUserLogin()),e})).catch((function(e){throw salla.auth.event.registrationFailed.call(t,e),e}))}logout(e="twilight"){return salla.storage.clearAll(),salla.cookie.clearAll(),e=encodeURI(e),salla.auth.event.loggedOut().then((()=>{let t=salla.url.get(`logout?from=${e}`);console.log(`Going to ${t}, to do any thing before this action use: salla.auth.even.onLoggedOut(()=>{...})`);try{location.href=t;}catch(e){salla.log(e);}}))}refresh(){return this.request("refresh").then((function(e){return salla.auth.event.tokenFetched(e.data.token),e})).catch((function(e){throw salla.auth.event.refreshFailed(e),e}))}afterUserLogin(){this.afterLoginEvent.event&&salla.event.emit(this.afterLoginEvent.event,this.afterLoginEvent.payload);}}class m extends h{constructor(){super(),this.namespace="order",this.endpoints={cancel:"orders/cancel/{id}",createCartFromOrder:"reorder/{id}",sendInvoice:"orders/send/{id}"},this.endpointsMethods={createCartFromOrder:"get"},this.after_init();}show(e){let t=salla.form.getPossibleValue(e?.data||e,["id","order_id"]);salla.event.dispatch("mobile::order.placed",{order_id:t}),location.href=salla.form.getPossibleValue(e?.data||e,["url"]);}cancel(e){return e=e||Salla.config.get("page.id"),this.request(["cancel",e],{params:{has_apple_pay:!!window.ApplePaySession}}).then((function(t){return salla.event.order.canceled(t,e),t})).catch((function(t){throw salla.event.order.notCanceled(t,e),t}))}createCartFromOrder(e){return e=e||salla.config.get("page.id"),this.request(["createCartFromOrder",e]).then((function(t){return salla.cart.reset(),salla.event.order.orderCreated(t,e),window.location.href=t.data.url,t})).catch((function(t){throw salla.event.order.orderCreationFailed(t,e),t}))}sendInvoice(e){let t=salla.form.getPossibleValue(e,["id"])||salla.config.get("page.id");if(!t||isNaN(t)){let e="There is no id!";return salla.order.event.invoiceNotSent(e),salla.api.errorPromise(e)}return this.request(["sendInvoice",t],e).then((e=>(salla.event.order.invoiceSent(e,t),e))).catch((e=>{throw salla.event.order.invoiceNotSent(e,t),e}))}}class v extends h{constructor(){super(),this.namespace="product",this.previousQuery="",this.endpoints={getPrice:"products/{id}/price",availabilitySubscribe:"products/{id}/availability-notify",search:"products/search",details:"products/{product_id}/details",categories:"products/categories/{?id}",offers:"products/{product_id}/specialoffer",getSizeGuides:"products/{prod_id}/size-guides",giftDetail:"products/{product_id}/buy-as-gift",giftToCart:"products/{product_id}/buy-as-gift",giftImage:"products/buy-as-gift/image",buyNow:"products/{product_id}/buy-now",fetch:"products"},this.endpointsMethods={details:"get",giftDetail:"get",fetch:"get"},this.after_init();}getPrice(e){let t=e.data||e,a=salla.form.getPossibleValue(t,["id","prod_id","product_id"]);return this.request(["getPrice",a],"object"==typeof t?t:void 0).then((function(e){return salla.product.event.priceUpdated(e,a),e})).catch((function(e){throw salla.product.event.priceUpdateFailed(e,a),e}))}categories(e){return this.request(["categories",e||""],null,"get").then((function(e){return salla.product.event.categoriesFetched(e),e})).catch((function(e){throw salla.product.event.categoriesFailed(e),e}))}availabilitySubscribe(e){let t=e.data||e;return e=salla.form.getPossibleValue(t,["id","prod_id"]),this.request(["availabilitySubscribe",e],"object"==typeof t?t:void 0).then((function(t){return salla.product.event.availabilitySubscribed(t,e),t})).catch((function(t){throw salla.product.event.availabilitySubscribeFailed(t,e),t}))}search(e){let t=e.data;if(t||(t={params:"string"==typeof e?{query:e}:e}),!(e=t instanceof FormData?t.get("query"):t.query||t.params?.query)){let e='There is no "query"!';return salla.product.event.searchFailed(e),salla.api.errorPromise(e)}if(e===salla.api.product.previousQuery){let e="Query is same as previous one!";return salla.product.event.searchFailed(e),salla.api.product.previousQuery=null,salla.api.errorPromise(e)}return salla.api.product.previousQuery=e,this.request("search",t,"get").then((function(t){return salla.product.event.searchResults(t,e),t})).catch((function(t){throw salla.product.event.searchFailed(t,e),t}))}offers(e){if(!(e=salla.form.getPossibleValue(e?.data|e,["product_id","id"]))){let e='There is no "product_id"!';return salla.product.event.fetchOffersFailed(e),salla.api.errorPromise(e)}return this.request(["offers",e]).then((function(t){return salla.product.event.offersFetched(t,e),t})).catch((function(t){throw salla.product.event.fetchOffersFailed(t,e),t}))}getSizeGuides(e){return this.request(`products/${e}/size-guides`,null,"get").then((t=>(salla.product.event.sizeGuideFetched(t,e),t))).catch((t=>{throw salla.product.event.sizeGuideFetchFailed(t,e),t}))}getGiftDetails(e){return this.request(["giftDetail",e]).then((t=>(salla.product.event.giftFetched(t,e),t))).catch((t=>{throw salla.product.event.giftFetchFailed(t,e),t}))}getDetails(e,t=[]){if(!Array.isArray(t)){let e="withItems should be array.";return salla.product.event.detailFetchFailed(e),salla.api.errorPromise(e)}if(!e){let e="productId is not passed.";return salla.product.event.detailFetchFailed(e),salla.api.errorPromise(e)}return this.request(["details",e],{params:{with:t}}).then((function(t){return salla.product.event.detailFetched(t,e),t})).catch((function(t){throw salla.product.event.availabilitySubscribeFailed(t,e),t}))}addGiftToCart(e,t,a=!1){return this.request(["giftToCart",e],t).then((t=>(salla.product.event.addGiftToCartSucceeded(t,e),a&&(window.location.href=t.redirect),t))).catch((t=>{throw salla.product.event.addGiftToCartFailed(t,e),t}))}uploadGiftImage(e){return this.request("giftImage",e).then((e=>(salla.product.event.giftImageUploadSucceeded(e),e))).catch((e=>{throw salla.product.event.giftImageUploadFailed(e),e}))}fetch(e){if(!e.source){const e="Source cannot be empty. Please provide one.";return salla.product.event.productListFetchFailed(e),salla.api.errorPromise(e)}const t=!e.source_value,a="string"==typeof e.source_value&&"[]"===e.source_value,r=Array.isArray(e.source_value)&&!e.source_value.length;if((t||a||r)&&!["offers","latest","sales"].includes(e.source)){const e="Source value cannot be empty. Please provide one.";return salla.product.event.productListFetchFailed(e),salla.api.errorPromise(e)}if(["categories","brands","tags","selected"].includes(e.source)&&!Array.isArray(e.source_value)){const e="SourceValue type error. Expected an array.";return salla.product.event.productListFetchFailed(e),salla.api.errorPromise(e)}if("search"===e.source&&"string"!=typeof e.source_value){const e="SourceValue type error. Expected a string.";return salla.product.event.productListFetchFailed(e),salla.api.errorPromise(e)}if("related"===e.source&&isNaN(e.source_value)){const e="SourceValue type error. Expected a number.";return salla.product.event.productListFetchFailed(e),salla.api.errorPromise(e)}return this.request(this.endpoints.fetch,{params:e},"get").then((e=>(salla.product.event.productListFetchSucceeded(e),e))).catch((e=>{throw salla.product.event.productListFetchFailed(e),e}))}}class y extends h{constructor(){super(),this.namespace="profile",this.endpoints={info:"auth/user",update:"profile/update",updateContacts:"profile/contacts/update",updateSettings:"profile/settings",verify:"profile/verify",delete:"profile"},this.endpointsMethods={delete:"delete"},this.after_init();}info(){return this.request("info",null,"get").then((e=>{let t={id:e.data.id,type:"user",email:e.data.email,mobile:e.data.phone.code+e.data.phone.number,country_code:e.data.phone.country,language_code:e.data.language,currency_code:e.data.currency,notifications:e.data.notifications,pending_orders:e.data.pending_orders,avatar:e.data.avatar,first_name:e.data.first_name,last_name:e.data.last_name,fetched_at:Date.now()};return salla.config.set("user",t),salla.storage.set("user",t),salla.profile.event.infoFetched(e),e})).catch((e=>{throw salla.profile.event.infoNotFetched(e),e}))}update(e){return this.request("update",e).then((e=>(salla.profile.event.updated(e),e))).catch((e=>{throw salla.event.profile.updateFailed(e),e}))}updateContacts(e){return this.request("updateContacts",e).then((e=>(salla.profile.event.verificationCodeSent(e),e))).catch((e=>{throw salla.event.profile.updateContactsFailed(e),e}))}verify(e){return this.request("verify",e).then((e=>(salla.profile.event.verified(e),e))).catch((e=>{throw salla.event.profile.unverified(e),e}))}updateSettings(e){return this.request("updateSettings",e).then((e=>(salla.event.profile.settingsUpdated(e),e))).catch((e=>{throw salla.event.profile.updateSettingsFailed(e),e}))}delete(){return this.request("delete").then((e=>(salla.storage.clearAll(),salla.cookie.clearAll(),salla.event.profile.deleted(e),window.location.href=salla.url.get("logout"),e))).catch((e=>{throw salla.event.profile.notDeleted(e),e}))}}class w extends h{constructor(){super(),this.namespace="comment",this.endpoints={comments:"{type}/{id}/comments"},this.after_init();}add(e){if(e?.data&&(e=e.data),"string"==typeof(e=this.getCommentPayload(e,!0)))return salla.event.comment.additionFailed(e),salla.api.errorPromise(e);if(!e.comment){let e="can't find comment content!";return salla.event.comment.additionFailed(e),salla.api.errorPromise(e)}return this.request(["comments",e.type,e.id],{comment:e.comment}).then((function(t){return salla.event.comment.added(t,e.id),t})).catch((function(t){throw salla.event.comment.additionFailed(t,e.id),t}))}getCommentPayload(e){let t={};return ["id","type","comment","per_page","page"].forEach((a=>{let r=salla.form.getPossibleValue(e,[a]);r&&(t[a]=r);})),t.id?t.type&&["products","pages","product","page"].includes(t.type)?(t.type+=["product","page"].includes(t.type)?"s":"",t):"Failed to get type one of:(products, product, page, pages)!":"Failed to get id!"}fetch(e){return "string"==typeof(e=this.getCommentPayload(e))?(salla.event.comment.fetchFailed(e),salla.api.errorPromise(e)):this.request(["comments",e.type,e.id],{params:e},"get").then((function(t){return salla.event.comment.fetched(t,e),t})).catch((function(t){throw salla.event.comment.fetchFailed(t,e),t}))}getPageComments(e,t=1,a=10){return this.fetch({id:e,type:"pages",page:t,per_page:a})}getProductComments(e,t=1,a=10){return this.fetch({id:e,type:"products",page:t,per_page:a})}}class F extends h{constructor(){super(),this.namespace="currency",this.endpoints={change:"/",list:"currencies"},this.endpointsMethods={change:"get",list:"get"},this.webEndpoints=["change"],this.after_init();}change(e){if(!(e=salla.form.getPossibleValue(e.data||e,["currency","code"]))){let e="Can't find currency code!";return salla.currency.event.failed(e),salla.api.errorPromise(e)}return this.request("change",{params:{change_currency:"",currency:e}}).then((function(t){return salla.cookie.set("fresh_summary",1),salla.storage.set("cart",""),salla.currency.event.changed(t,e),t})).catch((function(t){throw salla.currency.event.failed(t,e),t}))}list(){return this.request("list").then((function(e){return salla.currency.event.fetched(e),e})).catch((function(e){throw salla.currency.event.failedToFetch(e),e}))}}class b extends h{constructor(){super(),this.namespace="document";}}class S extends h{constructor(){super(),this.namespace="rating",this.endpoints={store:"rating/store",products:"rating/products",shipping:"rating/shipping",order:"rating/{order_id}"},this.endpointsMethods={order:"get"},this.after_init();}order(e){let t="object"==typeof e?e:{},a=salla.form.getPossibleValue(e?.data||e,["order_id","id"]);if(!a){let e='There is no "order_id"!';return salla.event.rating.orderNotFetched(e),salla.api.errorPromise(e)}return this.request(["order",a],t).then((function(e){return salla.event.rating.orderFetched(e,a),e})).catch((function(e){throw salla.event.rating.orderNotFetched(e,a),e}))}store(e){if(!(e=e?.data||e)){let e='There is no "data"!';return salla.event.rating.storeFailed(e),salla.api.errorPromise(e)}return this.request("store",e).then((function(t){return salla.event.rating.storeRated(t,e),t})).catch((function(t){throw salla.event.rating.storeFailed(t,e),t}))}products(e){if(!(e=e?.data||e)){let e='There is no "data"!';return salla.event.rating.productsFailed(e),salla.api.errorPromise(e)}return this.request("products",e).then((function(t){return salla.event.rating.productsRated(t,e),t})).catch((function(t){throw salla.event.rating.productsFailed(t,e),t}))}shipping(e){if(!(e=e?.data||e)){let e='There is no "data"!';return salla.event.rating.shippingFailed(e),salla.api.errorPromise(e)}return this.request("shipping",e).then((function(t){return salla.event.rating.shippingRated(t,e),t})).catch((function(t){throw salla.event.rating.shippingFailed(t,e),t}))}}class _ extends h{constructor(){super(),this.namespace="wishlist",this.endpoints={add:"products/favorites/{id}",remove:"products/favorites/{id}"},this.endpointsMethods={remove:"delete"},this.after_init();}toggle(e){return salla.storage.get("salla::wishlist",[]).includes(e)?this.remove(e):this.add(e)}add(e){let t;return salla.config.isGuest()?(salla.wishlist.event.additionFailed(t=salla.lang.get("common.messages.must_login")),salla.error(t),salla.api.errorPromise(t)):(e=salla.form.getPossibleValue(e?.data||e,["product_id","id"]))?this.request(["add",e]).then((t=>(this.updateWishlistStorage(e),salla.wishlist.event.added(t,e),t))).catch((function(t){throw salla.wishlist.event.additionFailed(t,e),t})):(salla.wishlist.event.additionFailed(t="Failed to get product id!"),salla.api.errorPromise(t))}remove(e){let t;return salla.config.isGuest()?(salla.wishlist.event.additionFailed(t=salla.lang.get("common.messages.must_login")),salla.error(t),salla.api.errorPromise(t)):(e=salla.form.getPossibleValue(e?.data||e,["product_id","id"]))?this.request(["remove",e]).then((t=>(this.updateWishlistStorage(e,!1),salla.wishlist.event.removed(t,e),t))).catch((function(t){throw salla.wishlist.event.removingFailed(t,e),t})):(salla.wishlist.event.removingFailed(t="Failed to get id!"),salla.api.errorPromise(t))}updateWishlistStorage(e,t=!0){let a=salla.storage.get("salla::wishlist",[]);t?a.push(e):a.splice(a.indexOf(e),1),salla.storage.set("salla::wishlist",a);}}class q extends h{constructor(){super(),this.namespace="scopes",this.endpoints={get:"scopes",change:"scopes",getProductAvailability:"scopes/availability?product_id={id}"},this.after_init();}get(){return this.request("scopes",null,"get").then((e=>(salla.scope.event.fetched(e),e))).catch((e=>{throw salla.scope.event.notFetched(e),e}))}change(e){return this.request("scopes",e).then((e=>(salla.scope.event.changeSucceeded(e),e))).catch((e=>{throw salla.scope.event.changeFailed(e),e}))}getProductAvailability(e=null){return this.request(`scopes/availability?product_id=${e}`,null,"get").then((t=>(salla.scope.event.productAvailabilityFetched(t,e),t))).catch((e=>{throw salla.scope.event.productAvailabilityNotFetched(e),e}))}}class A extends h{constructor(){super(),this.namespace="booking",this.endpoints={add:"cart/booking/product/{id}"},this.endpointsMethods={add:"get"};}async add(e,t=!0){if(!e){let e="Please provide product id.";return salla.booking.event.additionFailed(e),salla.api.errorPromise(e)}return this.request(["add",e]).then((function(e){return salla.booking.event.added(e),t&&"booking"===e.data.redirect.to&&(window.location.href=e.data.redirect.url),e})).catch((function(e){throw salla.booking.event.additionFailed(e),e}))}}class C extends h{constructor(){super(),this.namespace="landing",this.endpoints={getDetails:"landing/{landing_page_id}",createCartFromPage:"landing/{landing_page_id}"},this.endpointsMethods={getDetails:"get"},this.after_init();}getDetails(e){if(!e){let e="page landing id not passed";return salla.event.landing.getDetailsFailed(e),salla.api.errorPromise(e)}return this.request(["getDetails",e]).then((function(t){return salla.event.landing.detailsFetched(t,e),t})).catch((function(t){throw salla.event.landing.getDetailsFailed(t,e),t}))}createCartFromPage(e){if(!e){let e="page landing id not passed";return salla.event.landing.orderCreationFailed(e),salla.api.errorPromise(e)}return salla.config.isGuest()?(salla.auth.api.setAfterLoginEvent("landing::createCartFromPage",e),salla.event.dispatch("login::open"),salla.api.successPromise("")):this.request(["createCartFromPage",e]).then((function(t){return salla.event.landing.orderCreated(t,e).then((()=>location.href=t.data.url)),t})).catch((function(t){throw salla.event.landing.orderCreationFailed(t,e),t}))}}class x{constructor(){salla.event.on("twilight::before.ready",(e=>this.initiateRequest(e))),salla.event.on("profile::info.fetched",(e=>this.setCurrencyAndLanguage(e))),salla.event.on("auth::token.fetched",(e=>{salla.storage.set("token",e),this.setToken(e),salla.cart.api.reset();})),this.notifier_handler_disabled=!1,this.axios=axios.create({headers:{common:{"X-Requested-With":"XMLHttpRequest","S-SOURCE":"twilight","S-APP-VERSION":"v2.0.0","S-APP-OS":"browser","cache-control":"no-cache",pragma:"no-cache"}}});}getHeaders(){return this.axios.defaults.headers.common}setHeaders(e){return Object.entries(e).forEach((e=>this.setHeader(e[0],e[1]))),this}setHeader(e,t){return salla.infiniteScroll.fetchOptions.headers[e]=this.axios.defaults.headers.common[e]=t,this}async withoutNotifier(e){return this.notifier_handler_disabled=!0,await e().finally((()=>{this.notifier_handler_disabled=!1;}))}initiateRequest(e){this.axios.defaults.baseURL=Salla.config.get("store.api",Salla.config.get("store.url")),this.setHeaders({"Store-Identifier":Salla.config.get("store.id"),currency:e.user?.currency_code||"SAR","accept-language":salla.lang.getLocale(),"s-user-id":e.user?.id});let t=salla.storage.get("scope");t&&this.setHeaders({"s-scope-type":t.type,"s-scope-id":t.id}),this.injectTokenToTheRequests(e),salla.storage.get("affiliate_code")&&this.setHeader("s-affiliate-code",salla.storage.get("affiliate_code"));}injectTokenToTheRequests(e){let t=salla.storage.get("token"),a="guest"===e.user.type,r=salla.storage.get("cart"),i=e.user?.id,n=salla.storage.get("user.id");if(n&&n!==i&&(salla.log("Api:: case1 = >user in localStorage is not same as user in the config"),salla.storage.remove("user")),r&&(r.user_id!==i||r.store_id!==e.store?.id))return salla.log("cart",{user_id:r.user_id,store_id:r.store_id}),salla.log("current",{user_id:i,store_id:e.store?.id}),salla.log("Api:: case2 => The cart is not belong to current "+(r.user_id!==i?"user":"store")+"!"),void salla.cart.api.reset();if(a&&!t)return void salla.log("Api:: case3 => current user is a guest and there is no token");if(a&&t)return salla.log("Api:: case4 => there is a token and current user is guest"),salla.log("Auth:: Token without user!"),salla.storage.remove("token"),void salla.cart.api.reset();if(!t)return salla.log("Api:: case5 => current user is logged-in but there is no token"),salla.cart.api.reset(),void salla.auth.api.refresh();let l=o$1(t);return Date.now()/1e3>l.exp?(salla.log("Api:: case6 => current user is logged-in and there is a token, but it's expired"),salla.storage.remove("token"),salla.cart.api.reset(),void salla.auth.api.refresh()):l.sub!==i?(salla.log("Api:: case7 => The user id is not match the token details"),salla.storage.remove("token"),salla.cart.api.reset(),void salla.auth.api.refresh()):(this.setToken(t),salla.log("Api:: case8 => current user is logged-in and there is a token, and it's not expired"),void salla.event.emit("api::initiated"))}setToken(e){return this.setHeader("Authorization","Bearer "+e),salla.event.emit("api::token.injected",e),this.token=e,this}setCurrencyAndLanguage(e){return this.setHeaders({currency:e.data.currency,"accept-language":e.data.language})}request(e,t,a="get",r={}){let s={endPoint:e,payload:t,method:a,options:r},i="undefined"!=typeof event?event.currentTarget:null,n=!1;return "SALLA-BUTTON"===i?.tagName&&(n=!0),n&&i?.load(),this.axios[s.method](s.endPoint,s.payload,s.options).then((e=>(n&&i?.stop(),e.data&&e.request&&(e=e.data),this.handleAfterResponseActions(e),e))).catch((e=>{throw n&&i?.stop(),salla.event.document.requestFailed(s,e),this.handleErrorResponse(e),e}))}handleAfterResponseActions(e){if(!e)return;let{data:t,googleTags:a=null}=e,r=t&&t.googleTags?t.googleTags:a;try{dataLayer&&r&&dataLayer.push(r);}catch(e){salla.logger.error(e.message);}this.fireEventsForResponse(e),this.showAlert(e);}fireEventsForResponse(e){let t=e?.events||e.data?.events||e.error?.events;"string"==typeof t&&(t=JSON.parse(t)),t&&Object.keys(t).forEach((e=>salla.event.dispatch(e,t[e])));}handleErrorResponse(e){if(e.response&&e.response.data)return e.response.data.error&&e.response.data.error.fields&&!this.notifier_handler_disabled?this.handleInvalidFields(e):this.handleAfterResponseActions(e.response.data)}showAlert(e){if(e&&!this.notifier_handler_disabled)return e.case&&e.msg?salla.notify.fire(e.msg,e.case,e):e.hasOwnProperty("success")&&e.data?.message?salla.notify.fire(e.data?.message,e.success?salla.notify.types.success:salla.notify.types.error,e):e.error&&e.error.message&&"FORBIDDEN"!==e.error.message?salla.error(e.error.message,e):void 0}handleInvalidFields(e){let t=e.response.data.error.fields,a=[];Object.keys(t).forEach((e=>{let r=t[e];Array.isArray(r)?r.forEach((e=>a.push(e))):a.push(r);}));let r=(a.length>1?"* ":"")+a.join("\n* ");salla.error(r,e);}isFastRequestsAllowed(){return Salla.config.get("fastRequests")}promise(e,t=!0){return new Promise(((a,r)=>t?a(e):r(e)))}errorPromise(e){return this.promise(e,!1)}successPromise(e){return this.promise(e,!0)}}class E{constructor(t){"ready"!==O.status?t?(O.config.merge(t),t?.events&&O.event.dispatchEvents(t?.events),t._token&&salla.api.setHeader("X-CSRF-TOKEN",t._token),this.injectMaintenanceAlert(),this.injectTemplateStoreAlert(),this.injectThemePreviewAlert(),this.injectEditAlert(),t?.user?.language_code&&salla.lang.setLocale(t?.user?.language_code),salla.lang.loadStoreTranslations(),this.setSallaReady(t)):this.setSallaReady(t):salla.log("Trying to re-initiate Salla, while its status === 'ready'!");}injectMaintenanceAlert(){salla.config.get("maintenance")&&(document.body.classList.add("has-maintenance-bar"),document.querySelector("salla-maintenance-alert")?salla.logger.warn("salla-maintenance-alert element Existed before!"):salla.lang.onLoaded((()=>document.body.prepend(document.createElement("salla-maintenance-alert")))));}injectTemplateStoreAlert(){salla.config.get("store.is_template")&&(document.body.classList.add("has-bottom-alert"),document.querySelector("salla-bottom-alert")?salla.logger.warn("salla-bottom-alert element Existed before!"):salla.lang.onLoaded((()=>document.body.append(document.createElement("salla-bottom-alert")))));}injectThemePreviewAlert(){"preview"===salla.config.get("theme.mode")&&(document.body.classList.add("has-preview-bar"),document.querySelector("#s-theme_preview_bar")?salla.logger.warn("#s-theme_preview_bar element Existed before!"):salla.lang.onLoaded((()=>{let e=document.createElement("div");e.id="s-theme_preview_bar",e.setAttribute("style","display: flex; justify-content: space-between; text-align: center; background-color: #232323; color: #fff; padding: 10px; font-size: 0.875rem; line-height: 1.25rem; position: relative;"),e.innerHTML=`\n              <div style="display:flex; align-items:center;">\n                <img width="32" src="https://assets.salla.sa/cp/assets/images/logo-new.png">\n                <span style="margin:0 10px;">${salla.lang.get("blocks.header.preview_mode")}: <span style="background:rgba(255,255,255,0.25);border-radius:15px; padding:2px 15px 4px">${salla.config.get("theme.name")}</span></span>\n              </div>\n              <a href="${salla.url.get("preview_theme/cancel/preview")}" style="line-height:32px; width:32px;"><i class="sicon-cancel"></i></a>\n            `,document.body.prepend(e);})));}injectEditAlert(){let e=salla.config.get("edit");e&&(document.querySelector("#s-edit-alert")?salla.logger.warn("#s-edit-alert element Existed before!"):salla.lang.onLoaded((()=>{let t=document.createElement("div");t.id="s-edit-alert",t.innerHTML=`\n              <a href="${e}" style="display:block; background-color:${salla.config.get("theme.color.primary","#5cd5c4")}; color:${salla.config.get("theme.color.reverse","#fff")}; padding: 10px; text-align:center; font-size: 0.875rem; line-height: 1.25rem;">\n                <i class="sicon-edit"></i> \n                ${salla.lang.get("pages.products.quick_edit")}\n              </a>\n            `,document.body.prepend(t);})));}handleElementAjaxRequest(e,t){if(!(t instanceof HTMLFormElement||t instanceof HTMLAnchorElement))return salla.logger.warn("trying to call ajax from non Element!!"),!1;e.preventDefault();let a=t.getAjaxFormData(e),r=a.method?a.method.toLowerCase():void 0;salla.api.request(a.url,a.formData,r).then((e=>(e.data&&e.request&&(e=e.data),salla.api.handleAfterResponseActions(e),this.callAjaxEvent(a.events.success,e,a.formData),e))).catch((e=>{throw salla.api.handleErrorResponse(e),this.callAjaxEvent(a.events.fail,e,a.formData),e}));}callAjaxEvent(e,t,a){if(e){if(a instanceof FormData){const e={};Array.from(a.entries()).forEach((function(t){e[t[0]]=t[1];})),a=e;}window[e]?window[e](t,a):salla.event.dispatch(e,t,a);}}setSallaReady(t){O.event.dispatch("twilight::before.ready",t),O.status="ready",O.event.dispatch("twilight::initiated",t),window.dispatchEvent(new CustomEvent("twilight::initiated",{detail:t}));}}O.status="loading",O.notify=o,O.lang=new class extends lang{constructor(e){(e=e||{}).messages=e.messages||window.translations,e.locale=e.locale||(window.locale||navigator.language||navigator.userLanguage||"ar").split("-")[0],e.fallback=e.fallback||e.locale,super(e),this.translationsLoaded=!1;}onLoaded(e){if(this.translationsLoaded)return e();Salla.event.once("languages::translations.loaded",e);}loadStoreTranslations(){if(this.hash=salla.config.get("theme.translations_hash",salla.config.get("store.id","twilight")),this.message||(salla.log("try to load translations from localstorage"),this.messages=salla.storage.get(`s_translations.${this.hash}`),this.messages&&(this.translationsLoaded=!0)&&super.setMessages(this.messages)),this.messages)return salla.event.dispatch("languages::translations.loaded"),void salla.logger.info("The messages of transactions is already loaded");salla.url.get("")?this.loadScript(salla.url.get(`languages/assets/${this.hash}.js`)):this.loadScript("https://cdn.salla.network/js/translations.js",!1);}setMessages(e){super.setMessages(e),salla.event.dispatch("languages::translations.loaded"),this.translationsLoaded=!0;}loadScript(e,t=!0){let a=document.createElement("script");a.src=e,a.onload=()=>{if(window.translations)return salla.storage.remove("s_translations"),salla.storage.set("s_translations",{[this.hash]:window.translations}),this.setMessages(window.translations);a.onerror();},a.onerror=()=>{if(t)return salla.logger.warn("Failed to load Translations for store, lets try load it from CDN"),this.loadScript("https://cdn.salla.network/js/translations.js",!1);salla.logger.error("Failed to load Translations, check your network logs for more details\nor: salla.lang.setMessages({....}), see https://docs.salla.dev for more information's.");},document.head.appendChild(a);}getWithDefault(e,t,a,r){let s=this.get(e,a,r);return s!==e?s:t}get(e,t,a){let r=e;(window.translations||this.translationsLoaded)&&(r="trans."+e);let s=super.get(r,t,a);return s!==r?s:super.get(r,t,"en").replace(r,e)}set(e,t){return salla.helpers.setNested(this.messages[this.getLocale()+".trans"],e,t),this}},O.form=new class{async submit(e,t=null){let a=t;if("SubmitEvent"===t?.constructor?.name||"submit"===t?.type){if(t.preventDefault(),"FORM"!==t.target?.tagName)return Salla.logger.warn("Failed find the target element for submit action. make sure you submit a form element"),new Promise((()=>{throw "Failed find the target element for submit action. make sure you submit a form element"}));"SALLA-BUTTON"===t?.submitter?.parentElement?.tagName&&t.submitter.parentElement.load(),a=t.target.getElementSallaData(),salla.log("Data from element",a);}if(/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm.test(e))return salla.api.request(e,a,"post").finally((()=>{loaderSupported&&t?.submitter?.parentElement.stop();}));let r=e.split("."),s=r.splice(-1);return await salla.call(r.join("."))[s](a).finally((()=>t?.submitter?.parentElement?.stop())).catch((e=>{throw salla.logger.warn(e),e}))}onSubmit(e,t){return salla.form.submit(e,t),!1}onChange(e,t){return t?.currentTarget?"FORM"!==t?.currentTarget?.tagName||t.currentTarget.checkValidity()?(salla.form.submit(e,t.currentTarget.getElementSallaData()),!0):(salla.logger.warn(`Trying to trigger '${e}' without filling required fields!`),!1):(salla.logger.warn(`Trying to trigger '${e}' without event!`),!1)}getPossibleValue(e,t,a=!1){if(!e)return;if("object"!=typeof e)return e;let r;for(let a=0;a<t.length&&!(r=e[t[a]])&&!("undefined"!=typeof FormData&&e instanceof FormData&&(r=e.get(t[a])));a++);return r=r||e,"object"!=typeof r||a?r:void 0}},O.infiniteScroll=new class extends d{constructor(e,t){super(e,t),this.options={path:".infinite-scroll-btn",history:"push",status:".infinite-scroll-status",append:".list-block"},this.fetchOptions={headers:{"S-INFINITE-SCROLL":!0}},this.instances=[];}initiate(e,a,r,s=!1){s?((r=r||{}).fetchOptions={...this.fetchOptions,...r.fetchOptions||{}},r.responseBody="json"):r=this.getCustomOptions(a,r);let i="string"!=typeof e?e:document.querySelector(e),n=r.path;if(!i||!n||"string"==typeof n&&!document.querySelector(n))return void Salla.logger.warn(i?"Path Option (a link that has next page link) Not Existed!":"Container For InfiniteScroll not Existed!");let l=new js(i,r);return l.on("scrollThreshold",Salla.infiniteScroll.event.scrollThreshold),l.on("request",Salla.infiniteScroll.event.request),l.on("load",Salla.infiniteScroll.event.load),l.on("append",Salla.infiniteScroll.event.append),l.on("error",Salla.infiniteScroll.event.error),l.on("last",Salla.infiniteScroll.event.last),l.on("history",Salla.infiniteScroll.event.history),this.instances.push(l),l}getCustomOptions(e,t){return (t="object"==typeof e&&e||t||this.options).fetchOptions=this.fetchOptions,t.path=t.path||this.options.path,t.button=t.button||t.path,t.status=t.status||this.options.status,t.hasOwnProperty("history")||(t.history=this.options.history),t.nextPage=t.nextPage||t.next_page,t.append="string"==typeof e&&e||t.append||this.options.append,t}loadNextPage(e){("string"!=typeof e?e:document.querySelector(e)).loadNextPage();}destroy(e){("string"!=typeof e?e:document.querySelector(e)).destroy();}}(void 0,salla.event.infiniteScroll),O.api=new class extends x{constructor(){super(),this.auth=new f,this.cart=new p,this.loyalty=new g,this.order=new m,this.rating=new S,this.product=new v,this.profile=new y,this.comment=new w,this.currency=new F,this.document=new b,this.wishlist=new _,this.scope=new q,this.booking=new A,this.landing=new C;}},["cart","auth","order","scope","rating","comment","loyalty","product","profile","currency","document","wishlist","booking","landing"].forEach((t=>O[t]=new d(O.api[t],O.event[t]))),O.call=t=>{let a=O,r=t.split(".");for(;r.length&&(a=a[r.shift()]););return a},O.init=e=>new E(e),salla.event.once("twilight::init",salla.init),salla.event.once("twilight::api",(e=>{let t=e?.events;t&&salla.event.dispatchEvents(t);})),O.success=O.notify.success,O.error=O.notify.error,O.versions.twilight="[VI]{version}[/VI]",O.onInitiated=e=>salla.event.once("twilight::initiated",e),O.onReady=O.onReady||function(t){"ready"!==salla.status?O.onInitiated(t):t(salla.config.all());},window.dispatchEvent(new CustomEvent("salla::created"));

var lazyload_min = createCommonjsModule(function (module, exports) {
!function(n,t){module.exports=t();}(commonjsGlobal,(function(){function n(){return n=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);}return n},n.apply(this,arguments)}var t="undefined"!=typeof window,e=t&&!("onscroll"in window)||"undefined"!=typeof navigator&&/(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent),i=t&&"IntersectionObserver"in window,o=t&&"classList"in document.createElement("p"),a=t&&window.devicePixelRatio>1,r={elements_selector:".lazy",container:e||t?document:null,threshold:300,thresholds:null,data_src:"src",data_srcset:"srcset",data_sizes:"sizes",data_bg:"bg",data_bg_hidpi:"bg-hidpi",data_bg_multi:"bg-multi",data_bg_multi_hidpi:"bg-multi-hidpi",data_bg_set:"bg-set",data_poster:"poster",class_applied:"applied",class_loading:"loading",class_loaded:"loaded",class_error:"error",class_entered:"entered",class_exited:"exited",unobserve_completed:!0,unobserve_entered:!1,cancel_on_exit:!0,callback_enter:null,callback_exit:null,callback_applied:null,callback_loading:null,callback_loaded:null,callback_error:null,callback_finish:null,callback_cancel:null,use_native:!1,restore_on_error:!1},c=function(t){return n({},r,t)},l=function(n,t){var e,i="LazyLoad::Initialized",o=new n(t);try{e=new CustomEvent(i,{detail:{instance:o}});}catch(n){(e=document.createEvent("CustomEvent")).initCustomEvent(i,!1,!1,{instance:o});}window.dispatchEvent(e);},u="src",s="srcset",d="sizes",f="poster",_="llOriginalAttrs",g="data",v="loading",b="loaded",m="applied",p="error",h="native",E="data-",I="ll-status",y=function(n,t){return n.getAttribute(E+t)},k=function(n){return y(n,I)},w=function(n,t){return function(n,t,e){var i="data-ll-status";null!==e?n.setAttribute(i,e):n.removeAttribute(i);}(n,0,t)},A=function(n){return w(n,null)},L=function(n){return null===k(n)},O=function(n){return k(n)===h},x=[v,b,m,p],C=function(n,t,e,i){n&&(void 0===i?void 0===e?n(t):n(t,e):n(t,e,i));},N=function(n,t){o?n.classList.add(t):n.className+=(n.className?" ":"")+t;},M=function(n,t){o?n.classList.remove(t):n.className=n.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"");},z=function(n){return n.llTempImage},T=function(n,t){if(t){var e=t._observer;e&&e.unobserve(n);}},R=function(n,t){n&&(n.loadingCount+=t);},G=function(n,t){n&&(n.toLoadCount=t);},j=function(n){for(var t,e=[],i=0;t=n.children[i];i+=1)"SOURCE"===t.tagName&&e.push(t);return e},D=function(n,t){var e=n.parentNode;e&&"PICTURE"===e.tagName&&j(e).forEach(t);},H=function(n,t){j(n).forEach(t);},V=[u],F=[u,f],B=[u,s,d],J=[g],P=function(n){return !!n[_]},S=function(n){return n[_]},U=function(n){return delete n[_]},$=function(n,t){if(!P(n)){var e={};t.forEach((function(t){e[t]=n.getAttribute(t);})),n[_]=e;}},q=function(n,t){if(P(n)){var e=S(n);t.forEach((function(t){!function(n,t,e){e?n.setAttribute(t,e):n.removeAttribute(t);}(n,t,e[t]);}));}},K=function(n,t,e){N(n,t.class_applied),w(n,m),e&&(t.unobserve_completed&&T(n,t),C(t.callback_applied,n,e));},Q=function(n,t,e){N(n,t.class_loading),w(n,v),e&&(R(e,1),C(t.callback_loading,n,e));},W=function(n,t,e){e&&n.setAttribute(t,e);},X=function(n,t){W(n,d,y(n,t.data_sizes)),W(n,s,y(n,t.data_srcset)),W(n,u,y(n,t.data_src));},Y={IMG:function(n,t){D(n,(function(n){$(n,B),X(n,t);})),$(n,B),X(n,t);},IFRAME:function(n,t){$(n,V),W(n,u,y(n,t.data_src));},VIDEO:function(n,t){H(n,(function(n){$(n,V),W(n,u,y(n,t.data_src));})),$(n,F),W(n,f,y(n,t.data_poster)),W(n,u,y(n,t.data_src)),n.load();},OBJECT:function(n,t){$(n,J),W(n,g,y(n,t.data_src));}},Z=["IMG","IFRAME","VIDEO","OBJECT"],nn=function(n,t){!t||function(n){return n.loadingCount>0}(t)||function(n){return n.toLoadCount>0}(t)||C(n.callback_finish,t);},tn=function(n,t,e){n.addEventListener(t,e),n.llEvLisnrs[t]=e;},en=function(n,t,e){n.removeEventListener(t,e);},on=function(n){return !!n.llEvLisnrs},an=function(n){if(on(n)){var t=n.llEvLisnrs;for(var e in t){var i=t[e];en(n,e,i);}delete n.llEvLisnrs;}},rn=function(n,t,e){!function(n){delete n.llTempImage;}(n),R(e,-1),function(n){n&&(n.toLoadCount-=1);}(e),M(n,t.class_loading),t.unobserve_completed&&T(n,e);},cn=function(n,t,e){var i=z(n)||n;on(i)||function(n,t,e){on(n)||(n.llEvLisnrs={});var i="VIDEO"===n.tagName?"loadeddata":"load";tn(n,i,t),tn(n,"error",e);}(i,(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_loaded),w(t,b),C(e.callback_loaded,t,i),o||nn(e,i);}(0,n,t,e),an(i);}),(function(o){!function(n,t,e,i){var o=O(t);rn(t,e,i),N(t,e.class_error),w(t,p),C(e.callback_error,t,i),e.restore_on_error&&q(t,B),o||nn(e,i);}(0,n,t,e),an(i);}));},ln=function(n,t,e){!function(n){return Z.indexOf(n.tagName)>-1}(n)?function(n,t,e){!function(n){n.llTempImage=document.createElement("IMG");}(n),cn(n,t,e),function(n){P(n)||(n[_]={backgroundImage:n.style.backgroundImage});}(n),function(n,t,e){var i=y(n,t.data_bg),o=y(n,t.data_bg_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage='url("'.concat(r,'")'),z(n).setAttribute(u,r),Q(n,t,e));}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_multi),o=y(n,t.data_bg_multi_hidpi),r=a&&o?o:i;r&&(n.style.backgroundImage=r,K(n,t,e));}(n,t,e),function(n,t,e){var i=y(n,t.data_bg_set);if(i){var o=i.split("|"),a=o.map((function(n){return "image-set(".concat(n,")")}));n.style.backgroundImage=a.join(),""===n.style.backgroundImage&&(a=o.map((function(n){return "-webkit-image-set(".concat(n,")")})),n.style.backgroundImage=a.join()),K(n,t,e);}}(n,t,e);}(n,t,e):function(n,t,e){cn(n,t,e),function(n,t,e){var i=Y[n.tagName];i&&(i(n,t),Q(n,t,e));}(n,t,e);}(n,t,e);},un=function(n){n.removeAttribute(u),n.removeAttribute(s),n.removeAttribute(d);},sn=function(n){D(n,(function(n){q(n,B);})),q(n,B);},dn={IMG:sn,IFRAME:function(n){q(n,V);},VIDEO:function(n){H(n,(function(n){q(n,V);})),q(n,F),n.load();},OBJECT:function(n){q(n,J);}},fn=function(n,t){(function(n){var t=dn[n.tagName];t?t(n):function(n){if(P(n)){var t=S(n);n.style.backgroundImage=t.backgroundImage;}}(n);})(n),function(n,t){L(n)||O(n)||(M(n,t.class_entered),M(n,t.class_exited),M(n,t.class_applied),M(n,t.class_loading),M(n,t.class_loaded),M(n,t.class_error));}(n,t),A(n),U(n);},_n=["IMG","IFRAME","VIDEO"],gn=function(n){return n.use_native&&"loading"in HTMLImageElement.prototype},vn=function(n,t,e){n.forEach((function(n){return function(n){return n.isIntersecting||n.intersectionRatio>0}(n)?function(n,t,e,i){var o=function(n){return x.indexOf(k(n))>=0}(n);w(n,"entered"),N(n,e.class_entered),M(n,e.class_exited),function(n,t,e){t.unobserve_entered&&T(n,e);}(n,e,i),C(e.callback_enter,n,t,i),o||ln(n,e,i);}(n.target,n,t,e):function(n,t,e,i){L(n)||(N(n,e.class_exited),function(n,t,e,i){e.cancel_on_exit&&function(n){return k(n)===v}(n)&&"IMG"===n.tagName&&(an(n),function(n){D(n,(function(n){un(n);})),un(n);}(n),sn(n),M(n,e.class_loading),R(i,-1),A(n),C(e.callback_cancel,n,t,i));}(n,t,e,i),C(e.callback_exit,n,t,i));}(n.target,n,t,e)}));},bn=function(n){return Array.prototype.slice.call(n)},mn=function(n){return n.container.querySelectorAll(n.elements_selector)},pn=function(n){return function(n){return k(n)===p}(n)},hn=function(n,t){return function(n){return bn(n).filter(L)}(n||mn(t))},En=function(n,e){var o=c(n);this._settings=o,this.loadingCount=0,function(n,t){i&&!gn(n)&&(t._observer=new IntersectionObserver((function(e){vn(e,n,t);}),function(n){return {root:n.container===document?null:n.container,rootMargin:n.thresholds||n.threshold+"px"}}(n)));}(o,this),function(n,e){t&&(e._onlineHandler=function(){!function(n,t){var e;(e=mn(n),bn(e).filter(pn)).forEach((function(t){M(t,n.class_error),A(t);})),t.update();}(n,e);},window.addEventListener("online",e._onlineHandler));}(o,this),this.update(e);};return En.prototype={update:function(n){var t,o,a=this._settings,r=hn(n,a);G(this,r.length),!e&&i?gn(a)?function(n,t,e){n.forEach((function(n){-1!==_n.indexOf(n.tagName)&&function(n,t,e){n.setAttribute("loading","lazy"),cn(n,t,e),function(n,t){var e=Y[n.tagName];e&&e(n,t);}(n,t),w(n,h);}(n,t,e);})),G(e,0);}(r,a,this):(o=r,function(n){n.disconnect();}(t=this._observer),function(n,t){t.forEach((function(t){n.observe(t);}));}(t,o)):this.loadAll(r);},destroy:function(){this._observer&&this._observer.disconnect(),t&&window.removeEventListener("online",this._onlineHandler),mn(this._settings).forEach((function(n){U(n);})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount;},loadAll:function(n){var t=this,e=this._settings;hn(n,e).forEach((function(n){T(n,t),ln(n,e,t);}));},restoreAll:function(){var n=this._settings;mn(n).forEach((function(t){fn(t,n);}));}},En.load=function(n,t){var e=c(t);ln(n,e);},En.resetStatus=function(n){A(n);},t&&function(n,t){if(t)if(t.length)for(var e,i=0;e=t[i];i+=1)l(n,e);else l(n,t);}(En,window.lazyLoadOptions),En}));
});

//if there are a failed with ts build because twilight use the final bundle temporary
function appGlobalScript () {
  // Only initialize it one time for the entire application
  if (!document.lazyLoadInstance) {
    document.lazyLoadInstance = new lazyload_min({
      use_native: true, //native not support lazyLoad backgrounds
      // restore_on_error: true,
      // Your custom settings go here
      // callback_finish: () => document.lazyLoadBackgrounds.update(document.querySelectorAll('.lazy[data-bg]:not(.loaded)'))
    });
    document.lazyLoadBackgrounds = new lazyload_min({
      elements_selector: '.lazy[data-bg]:not(.loaded)',
    });
    //native way doesn't load backgrounds
    // document.lazyLoadBackgrounds = new LazyLoad();
  }
  //make sure that lazyLoad will be fired after loading the page too.
  if (document.readyState !== 'complete') {
    document.addEventListener("DOMContentLoaded", () => document.lazyLoadInstance.update());
    document.addEventListener("DOMContentLoaded", () => document.lazyLoadBackgrounds.update());
  }
  // fire it after each load more request;
  // @ts-ignore
  salla.infiniteScroll.event.onAppend(() => {
    document.lazyLoadInstance.update();
    document.lazyLoadBackgrounds.update();
  });
}

const globalScripts = appGlobalScript;

globalScripts();

//# sourceMappingURL=index.js.map