import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, o as onMount, v as validate_slots, a as space, e as element, t as text, q as query_selector_all, b as detach_dev, c as claim_space, f as claim_element, g as children, h as claim_text, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, p as validate_each_argument, r as set_data_dev, u as destroy_each } from './client.4dec7bff.js';
import util from 'util';
import https from 'https';
import http from 'http';

var status = {
	request: "success",
	requests_remaining: 464
};
var alliance = [
	{
		name: "Tiger-Team1",
		rank: 99,
		members: 54,
		maxMembers: 60,
		value: 12.72,
		ipo: 1,
		minSV: 0
	}
];
var members = [
	{
		company: "KcK Airways",
		joined: 1586903176,
		flights: 34469,
		contributed: 1225049,
		shareValue: 676.66
	},
	{
		company: "Test1",
		joined: 1586902976,
		flights: 26923,
		contributed: 1085437,
		shareValue: 727.41
	},
	{
		company: "Marairways",
		joined: 1586905076,
		flights: 23921,
		contributed: 788114,
		shareValue: 595.71
	},
	{
		company: "Camby Air",
		joined: 1586903050,
		flights: 32457,
		contributed: 744326,
		shareValue: 361.78
	},
	{
		company: "Diggs AirLines",
		joined: 1586910730,
		flights: 24504,
		contributed: 719634,
		shareValue: 403
	},
	{
		company: "Ron Airways",
		joined: 1586903047,
		flights: 20597,
		contributed: 687468,
		shareValue: 400.7
	},
	{
		company: "LAPA",
		joined: 1586903480,
		flights: 26507,
		contributed: 629540,
		shareValue: 124.68
	},
	{
		company: "AirLalau",
		joined: 1587836154,
		flights: 26770,
		contributed: 589235,
		shareValue: 129.49
	},
	{
		company: "June Airways ",
		joined: 1590358634,
		flights: 31537,
		contributed: 568444,
		shareValue: 373.85
	},
	{
		company: "FlatSpin",
		joined: 1586903046,
		flights: 22161,
		contributed: 551100,
		shareValue: 311.52
	},
	{
		company: "Akashairs",
		joined: 1589467488,
		flights: 10445,
		contributed: 518961,
		shareValue: 483.27
	},
	{
		company: "bighouse",
		joined: 1589971658,
		flights: 11429,
		contributed: 469700,
		shareValue: 509.06
	},
	{
		company: "Happy airways 1",
		joined: 1586903480,
		flights: 11199,
		contributed: 327384,
		shareValue: 204.38
	},
	{
		company: "VUELAMEX",
		joined: 1588712231,
		flights: 12716,
		contributed: 260385,
		shareValue: 48.16
	},
	{
		company: "TwentyFiveAir",
		joined: 1589280683,
		flights: 8283,
		contributed: 258997,
		shareValue: 40.26
	},
	{
		company: "Aero Cargo",
		joined: 1588106252,
		flights: 12989,
		contributed: 249216,
		shareValue: 41.39
	},
	{
		company: "Yvan",
		joined: 1588177022,
		flights: 7176,
		contributed: 177215,
		shareValue: 21.07
	},
	{
		company: "bluWings",
		joined: 1586904386,
		flights: 2832,
		contributed: 154023,
		shareValue: 48.83
	},
	{
		company: "Spartan Tech Airlines ",
		joined: 1590531459,
		flights: 4010,
		contributed: 148655,
		shareValue: 75.31
	},
	{
		company: "Halcón Airlines",
		joined: 1588177036,
		flights: 5980,
		contributed: 145879,
		shareValue: 17.33
	},
	{
		company: "Pebble Airline",
		joined: 1586908409,
		flights: 8784,
		contributed: 145006,
		shareValue: 23.17
	},
	{
		company: "Silver_Lining",
		joined: 1587708987,
		flights: 6010,
		contributed: 135168,
		shareValue: 33.29
	},
	{
		company: "ScottyAir",
		joined: 1592102533,
		flights: 2371,
		contributed: 132198,
		shareValue: 251.95
	},
	{
		company: "MYSTARU AIR",
		joined: 1587659558,
		flights: 5797,
		contributed: 121215,
		shareValue: 20.72
	},
	{
		company: "DreamyWings",
		joined: 1590275533,
		flights: 5187,
		contributed: 102860,
		shareValue: 9.32
	},
	{
		company: "Letsflayaway",
		joined: 1588834186,
		flights: 4863,
		contributed: 98350,
		shareValue: 5.71
	},
	{
		company: "turkish airlines wxb",
		joined: 1590493192,
		flights: 3041,
		contributed: 98091,
		shareValue: 27.15
	},
	{
		company: "EestiLiner",
		joined: 1590445813,
		flights: 10129,
		contributed: 95716,
		shareValue: 145.85
	},
	{
		company: "RomanianSkies",
		joined: 1588815572,
		flights: 5557,
		contributed: 95305,
		shareValue: 35.25
	},
	{
		company: "Aeroplatano",
		joined: 1590358632,
		flights: 3347,
		contributed: 87834,
		shareValue: 16.45
	},
	{
		company: "Diggs Air",
		joined: 1587855394,
		flights: 3370,
		contributed: 69269,
		shareValue: 22.05
	},
	{
		company: "Tadair1",
		joined: 1587216660,
		flights: 1841,
		contributed: 69201,
		shareValue: 58.87
	},
	{
		company: "Ycsy Airlines",
		joined: 1590493377,
		flights: 2698,
		contributed: 68893,
		shareValue: 6.67
	},
	{
		company: "Glacticos",
		joined: 1592597848,
		flights: 2909,
		contributed: 68346,
		shareValue: 12.26
	},
	{
		company: "Englands Airline",
		joined: 1587671078,
		flights: 10087,
		contributed: 68221,
		shareValue: 9.04
	},
	{
		company: "Calvanard Airlines",
		joined: 1587728073,
		flights: 2263,
		contributed: 59746,
		shareValue: 8.28
	},
	{
		company: "Blessed to be",
		joined: 1589239278,
		flights: 2064,
		contributed: 53394,
		shareValue: 4.19
	},
	{
		company: "ARC LINE ",
		joined: 1587770825,
		flights: 2840,
		contributed: 51096,
		shareValue: 5.94
	},
	{
		company: "Ethos Air",
		joined: 1590403676,
		flights: 4276,
		contributed: 48218,
		shareValue: 12.34
	},
	{
		company: "JaysAir",
		joined: 1589885127,
		flights: 2287,
		contributed: 40553,
		shareValue: 23.93
	},
	{
		company: "Flybird Airline",
		joined: 1587063641,
		flights: 741,
		contributed: 35719,
		shareValue: 31.12
	},
	{
		company: "RAUS AIRLINES",
		joined: 1588177035,
		flights: 1502,
		contributed: 31866,
		shareValue: 1.53
	},
	{
		company: "Zandy Airways",
		joined: 1589367271,
		flights: 1251,
		contributed: 28023,
		shareValue: 3.26
	},
	{
		company: "Kingfishar airline limit",
		joined: 1588353174,
		flights: 1705,
		contributed: 23763,
		shareValue: 3.32
	},
	{
		company: "Swift Air Express",
		joined: 1591077023,
		flights: 1962,
		contributed: 15761,
		shareValue: 2.32
	},
	{
		company: "Skyfire Airlines",
		joined: 1589439544,
		flights: 699,
		contributed: 15250,
		shareValue: 2.37
	},
	{
		company: "KAir GMBH",
		joined: 1590358633,
		flights: 1422,
		contributed: 14775,
		shareValue: 1.33
	},
	{
		company: "JezzAir",
		joined: 1592935982,
		flights: 266,
		contributed: 10607,
		shareValue: 13.94
	},
	{
		company: "Blikra Air",
		joined: 1593271108,
		flights: 373,
		contributed: 7603,
		shareValue: 7.92
	},
	{
		company: "Shulgin",
		joined: 1590493372,
		flights: 186,
		contributed: 4302,
		shareValue: 1.31
	},
	{
		company: "LET Airline",
		joined: 1593250259,
		flights: 341,
		contributed: 2599,
		shareValue: 2.27
	},
	{
		company: "RomanianSkiez",
		joined: 1593521480,
		flights: 7,
		contributed: 169,
		shareValue: 0.52
	},
	{
		company: "Aer Germany",
		joined: 1593533368,
		flights: 23,
		contributed: 135,
		shareValue: 0.8
	}
];
var res = {
	status: status,
	alliance: alliance,
	members: members
};

var btoaBrowser = function _btoa(str) {
  return btoa(str)
};

/**
 * FaunaDB error types. Request errors can originate from
 * the client (e.g. bad method parameters) or from the FaunaDB Server (e.g.
 * invalid queries, timeouts.) Server errors will subclass
 * {@link module:errors~FaunaHTTPError}.
 *
 * @module errors
 */

/**
 * The base exception type for all FaunaDB errors.
 *
 * @param {string} message
 * @extends Error
 * @constructor
 */
function FaunaError(name, message, description) {
  Error.call(this);

  /**
   * Name of this exception.
   * @type {string}
   */
  this.name = name;

  /**
   * Message for this exception.
   * @type {string}
   */
  this.message = message;

  /**
   * Description for this exception.
   * @type {string}
   */
  this.description = description;
}

util.inherits(FaunaError, Error);

/**
 * Exception thrown by this client library when an invalid
 * value is provided as a function argument.
 *
 * @extends module:errors~FaunaError
 * @constructor
 */
function InvalidValue(message) {
  FaunaError.call(this, 'InvalidValue', message);
}

util.inherits(InvalidValue, FaunaError);

/**
 * Exception thrown by this client library when an invalid
 * value is provided as a function argument.
 *
 * @extends module:errors~FaunaError
 * @constructor
 */
function InvalidArity(min, max, actual, callerFunc) {
  const arityInfo = `${callerFunc} function requires ${messageForArity(
    min,
    max
  )} argument(s) but ${actual} were given`;
  const documentationLink = logDocumentationLink(callerFunc);

  FaunaError.call(this, 'InvalidArity', `${arityInfo}\n${documentationLink}`);

  /**
   * Minimum number of arguments.
   * @type {number}
   */
  this.min = min;

  /**
   * Maximum number of arguments.
   * @type {number}
   */
  this.max = max;

  /**
   * Actual number of arguments called with.
   * @type {number}
   */
  this.actual = actual;

  function messageForArity(min, max) {
    if (max === null) return 'at least ' + min
    if (min === null) return 'up to ' + max
    if (min === max) return min
    return 'from ' + min + ' to ' + max
  }

  function logDocumentationLink(functionName) {
    const docsURL = 'https://docs.fauna.com/fauna/current/api/fql/functions/';
    return `For more info, see the docs: ${docsURL}${functionName.toLowerCase()}`
  }
}

util.inherits(InvalidArity, FaunaError);

/**
 * Base exception type for errors returned by the FaunaDB server.
 *
 * @param {RequestResult} requestResult
 *
 * @extends module:errors~FaunaError
 * @constructor
 */
function FaunaHTTPError(name, requestResult) {
  var response = requestResult.responseContent;
  var errors = response.errors;
  var message = errors.length === 0 ? '(empty "errors")' : errors[0].code;
  var description =
    errors.length === 0 ? '(empty "errors")' : errors[0].description;
  FaunaError.call(this, name, message, description);

  /**
   * A wrapped {@link RequestResult} object, containing the request and response
   * context of the failed request.
   *
   * @type {RequestResult}
   */
  this.requestResult = requestResult;
}

util.inherits(FaunaHTTPError, FaunaError);

/**
 * Convenience method to return the errors from the response object.
 *
 * @returns {Object}
 */
FaunaHTTPError.prototype.errors = function() {
  return this.requestResult.responseContent.errors
};

/**
 * Takes a {@link RequestResult} and throws an appropriate exception if
 * it contains a failed request.
 *
 * @param requestResult {RequestResult}
 */
FaunaHTTPError.raiseForStatusCode = function(requestResult) {
  var code = requestResult.statusCode;
  if (code < 200 || code >= 300) {
    switch (code) {
      case 400:
        throw new BadRequest(requestResult)
      case 401:
        throw new Unauthorized(requestResult)
      case 403:
        throw new PermissionDenied(requestResult)
      case 404:
        throw new NotFound(requestResult)
      case 405:
        throw new MethodNotAllowed(requestResult)
      case 500:
        throw new InternalError(requestResult)
      case 503:
        throw new UnavailableError(requestResult)
      default:
        throw new FaunaHTTPError('UnknownError', requestResult)
    }
  }
};

/**
 * A HTTP 400 error.
 *
 * @param {RequestResult} requestResult
 * @extends module:errors~FaunaHTTPError
 * @constructor
 */
function BadRequest(requestResult) {
  FaunaHTTPError.call(this, 'BadRequest', requestResult);
}

util.inherits(BadRequest, FaunaHTTPError);

/**
 * A HTTP 401 error.
 * @param {RequestResult} requestResult
 * @extends module:errors~FaunaHTTPError
 * @constructor
 */
function Unauthorized(requestResult) {
  FaunaHTTPError.call(this, 'Unauthorized', requestResult);
}

util.inherits(Unauthorized, FaunaHTTPError);

/**
 * A HTTP 403 error.
 * @param {RequestResult} requestResult
 * @extends module:errors~FaunaHTTPError
 * @constructor
 */
function PermissionDenied(requestResult) {
  FaunaHTTPError.call(this, 'PermissionDenied', requestResult);
}

util.inherits(PermissionDenied, FaunaHTTPError);

/**
 * A HTTP 404 error.
 * @param {RequestResult} requestResult
 * @extends module:errors~FaunaHTTPError
 * @constructor
 */
function NotFound(requestResult) {
  FaunaHTTPError.call(this, 'NotFound', requestResult);
}

util.inherits(NotFound, FaunaHTTPError);

/**
 * A HTTP 405 error.
 * @param {RequestResult} requestResult
 * @extends module:errors~FaunaHTTPError
 * @constructor
 */
function MethodNotAllowed(requestResult) {
  FaunaHTTPError.call(this, 'MethodNotAllowed', requestResult);
}

util.inherits(MethodNotAllowed, FaunaHTTPError);

/**
 * A HTTP 500 error.
 * @param {RequestResult} requestResult
 * @extends module:errors~FaunaHTTPError
 * @constructor
 */
function InternalError(requestResult) {
  FaunaHTTPError.call(this, 'InternalError', requestResult);
}

util.inherits(InternalError, FaunaHTTPError);

/**
 * A HTTP 503 error.
 * @param {RequestResult} requestResult
 * @extends module:errors~FaunaHTTPError
 * @constructor
 */
function UnavailableError(requestResult) {
  FaunaHTTPError.call(this, 'UnavailableError', requestResult);
}

util.inherits(UnavailableError, FaunaHTTPError);

var errors = {
  FaunaHTTPError: FaunaHTTPError,
  InvalidValue: InvalidValue,
  InvalidArity: InvalidArity,
  BadRequest: BadRequest,
  Unauthorized: Unauthorized,
  PermissionDenied: PermissionDenied,
  NotFound: NotFound,
  MethodNotAllowed: MethodNotAllowed,
  InternalError: InternalError,
  UnavailableError: UnavailableError,
};

var fnAnnotate = annotate;

function annotate(fn) {

  if (typeof fn !== 'function') {
    throw new Error('Could not parse function signature for injection dependencies: Object is not a function');
  }

  if (!fn.length) return [];

  var injects = /^()\(?([^)=]*)\)? *=>/.exec(fn + '') ||
                /^[^(]+([^ \(]*) *\(([^\)]*)\)/.exec(fn + '');

  if (!injects) {
    throw new Error('Could not parse function signature for injection dependencies: ' + fn + '');
  }

  var argumentString = injects[2]

  // Strip multi-line comments:
  // Uses the lazy-quantifier (.*?): http://www.rexegg.com/regex-quantifiers.html#lazy_solution
  .replace(/\/\*[\S\s]*?\*\//g, ' ')

  // Strip single-line comments:
  .replace(/\/\/.*/g, ' ');

  function groupSubArguments(_, type, keys) {
    return type + keys.split(',')
    .map(function (arg) {
      return arg && arg.trim();
    })
    .filter(Boolean)
    .join('@');
  }

  argumentString = argumentString.replace(/(\{)([^}]*)\}/g, groupSubArguments);
  argumentString = argumentString.replace(/(\[)([^}]*)\]/g, groupSubArguments);

  return argumentString.split(',')
  .map(function (arg) {
    return arg && arg.trim();
  })
  .map(function (arg) {
    if (arg[0] === '{') {
      return arg.substring(1).split('@');
    }
    if (arg[0] === '[') {
      return { items: arg.substring(1).split('@') };
    }
    return arg;
  })
  .filter(Boolean);

}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/**
 * Module exports.
 */

var browser = deprecate;

/**
 * Mark that a method should not be used.
 * Returns a modified function which warns once by default.
 *
 * If `localStorage.noDeprecation = true` is set, then it is a no-op.
 *
 * If `localStorage.throwDeprecation = true` is set, then deprecated functions
 * will throw an Error when invoked.
 *
 * If `localStorage.traceDeprecation = true` is set, then deprecated functions
 * will invoke `console.trace()` instead of `console.error()`.
 *
 * @param {Function} fn - the function to deprecate
 * @param {String} msg - the string to print to the console when `fn` is invoked
 * @returns {Function} a new "deprecated" version of `fn`
 * @api public
 */

function deprecate (fn, msg) {
  if (config('noDeprecation')) {
    return fn;
  }

  var warned = false;
  function deprecated() {
    if (!warned) {
      if (config('throwDeprecation')) {
        throw new Error(msg);
      } else if (config('traceDeprecation')) {
        console.trace(msg);
      } else {
        console.warn(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }

  return deprecated;
}

/**
 * Checks `localStorage` for boolean values for the given `name`.
 *
 * @param {String} name
 * @returns {Boolean}
 * @api private
 */

function config (name) {
  // accessing global.localStorage can trigger a DOMException in sandboxed iframes
  try {
    if (!commonjsGlobal.localStorage) return false;
  } catch (_) {
    return false;
  }
  var val = commonjsGlobal.localStorage[name];
  if (null == val) return false;
  return String(val).toLowerCase() === 'true';
}

/**
 * Used for functions that take an options objects.
 * Fills in defaults for options not provided.
 * Throws errors for provided options that aren't recognized.
 * A default value of `undefined` is used to indicate that the option must be provided.
 * @private
 */
function applyDefaults(provided, defaults) {
  var out = {};

  for (var providedKey in provided) {
    if (!(providedKey in defaults)) {
      throw new Error('No such option ' + providedKey)
    }
    out[providedKey] = provided[providedKey];
  }

  for (var defaultsKey in defaults) {
    if (!(defaultsKey in out)) {
      out[defaultsKey] = defaults[defaultsKey];
    }
  }

  return out
}

/**
 * Returns a new object without any keys where the value would be null or undefined.
 * @private
 * */
function removeNullAndUndefinedValues(object) {
  var res = {};
  for (var key in object) {
    var val = object[key];
    if (val !== null && val !== undefined) {
      res[key] = val;
    }
  }
  return res
}

/**
 * Returns a new object without any keys where the value would be undefined.
 * @private
 * */
function removeUndefinedValues(object) {
  var res = {};
  for (var key in object) {
    var val = object[key];
    if (val !== undefined) {
      res[key] = val;
    }
  }
  return res
}

/**
 * Returns a boolean stating if the given object has a given property
 * @private
 * */
function checkInstanceHasProperty(obj, prop) {
  return typeof obj === 'object' && obj !== null && Boolean(obj[prop])
}

var _util = {
  applyDefaults: applyDefaults,
  removeNullAndUndefinedValues: removeNullAndUndefinedValues,
  removeUndefinedValues: removeUndefinedValues,
  checkInstanceHasProperty: checkInstanceHasProperty,
};

/**
 * A representation of a FaunaDB Query Expression. Generally, you shouldn't need
 * to use this class directly; use the Query helpers defined in {@link module:query}.
 *
 * @param {Object} obj The object that represents a Query to be treated as an Expression.
 * @constructor
 */
function Expr(obj) {
  this.raw = obj;
}

Expr.prototype._isFaunaExpr = true;

Expr.prototype.toJSON = function() {
  return this.raw
};

var varArgsFunctions = [
  'Do',
  'Call',
  'Union',
  'Intersection',
  'Difference',
  'Equals',
  'Add',
  'BitAnd',
  'BitOr',
  'BitXor',
  'Divide',
  'Max',
  'Min',
  'Modulo',
  'Multiply',
  'Subtract',
  'LT',
  'LTE',
  'GT',
  'GTE',
  'And',
  'Or',
];

// FQL function names come across the wire as all lowercase letters
// (like the key of this object). Not all are properly snake-cased
// on the Core side, which causes improper capitalizations.
//
// JS Driver patch: https://faunadb.atlassian.net/browse/FE-540
// Core update: https://faunadb.atlassian.net/browse/ENG-2110

var specialCases = {
  containsstr: 'ContainsStr',
  containsstrregex: 'ContainsStrRegex',
  endswith: 'EndsWith',
  findstr: 'FindStr',
  findstrregex: 'FindStrRegex',
  gt: 'GT',
  gte: 'GTE',
  is_nonempty: 'is_non_empty',
  lowercase: 'LowerCase',
  lt: 'LT',
  lte: 'LTE',
  ltrim: 'LTrim',
  rtrim: 'RTrim',
  regexescape: 'RegexEscape',
  replacestr: 'ReplaceStr',
  replacestrregex: 'ReplaceStrRegex',
  startswith: 'StartsWith',
  substring: 'SubString',
  titlecase: 'TitleCase',
  uppercase: 'UpperCase',
};

var exprToString = function(expr, caller) {
  var isExpr = function(e) {
    return e instanceof Expr || _util.checkInstanceHasProperty(e, '_isFaunaExpr')
  };

  if (isExpr(expr)) {
    if ('value' in expr) return expr.toString()
    expr = expr.raw;
  }

  var type = typeof expr;

  if (type === 'string') {
    return JSON.stringify(expr)
  }

  if (type === 'symbol' || type === 'number' || type === 'boolean') {
    return expr.toString()
  }

  if (type === 'undefined') {
    return 'undefined'
  }

  if (expr === null) {
    return 'null'
  }

  var printObject = function(obj) {
    return (
      '{' +
      Object.keys(obj)
        .map(function(k) {
          return k + ': ' + exprToString(obj[k])
        })
        .join(', ') +
      '}'
    )
  };

  var printArray = function(array, toStr) {
    return array
      .map(function(item) {
        return toStr(item)
      })
      .join(', ')
  };

  if (Array.isArray(expr)) {
    var array = printArray(expr, exprToString);

    return varArgsFunctions.indexOf(caller) != -1 ? array : '[' + array + ']'
  }

  if ('match' in expr) {
    var matchStr = exprToString(expr['match']);
    var terms = expr['terms'] || [];

    if (isExpr(terms)) terms = terms.raw;

    if (Array.isArray(terms) && terms.length == 0)
      return 'Match(' + matchStr + ')'

    return 'Match(' + matchStr + ', ' + printArray(terms, exprToString) + ')'
  }

  if ('paginate' in expr) {
    var setStr = exprToString(expr['paginate']);

    var expr2 = Object.assign({}, expr);
    delete expr2['paginate'];

    if (Object.keys(expr2).length == 0) return 'Paginate(' + setStr + ')'

    return 'Paginate(' + setStr + ', ' + printObject(expr2) + ')'
  }

  if ('let' in expr && 'in' in expr) {
    var letExpr = '';

    if (Array.isArray(expr['let']))
      letExpr = '[' + printArray(expr['let'], printObject) + ']';
    else letExpr = printObject(expr['let']);

    return 'Let(' + letExpr + ', ' + exprToString(expr['in']) + ')'
  }

  if ('object' in expr) return printObject(expr['object'])

  var keys = Object.keys(expr);
  var fn = keys[0];

  // For FQL functions with special formatting concerns, we
  // use the specialCases object above to define their casing.
  if (fn in specialCases) fn = specialCases[fn];

  fn = fn
    .split('_')
    .map(function(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    })
    .join('');

  var args = keys.map(function(k) {
    var v = expr[k];
    return exprToString(v, fn)
  });

  var shouldReverseArgs = ['filter', 'map', 'foreach'].some(function(fn) {
    return fn in expr
  });

  if (shouldReverseArgs) {
    args.reverse();
  }

  args = args.join(', ');

  return fn + '(' + args + ')'
};

Expr.toString = exprToString;

var Expr_1 = Expr;

var byteLength_1 = byteLength;
var toByteArray_1 = toByteArray;
var fromByteArray_1 = fromByteArray;

var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i];
  revLookup[code.charCodeAt(i)] = i;
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;

function getLens (b64) {
  var len = b64.length;

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=');
  if (validLen === -1) validLen = len;

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4);

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp;
  var lens = getLens(b64);
  var validLen = lens[0];
  var placeHoldersLen = lens[1];

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));

  var curByte = 0;

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen;

  var i;
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)];
    arr[curByte++] = (tmp >> 16) & 0xFF;
    arr[curByte++] = (tmp >> 8) & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4);
    arr[curByte++] = tmp & 0xFF;
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2);
    arr[curByte++] = (tmp >> 8) & 0xFF;
    arr[curByte++] = tmp & 0xFF;
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp;
  var output = [];
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF);
    output.push(tripletToBase64(tmp));
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp;
  var len = uint8.length;
  var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
  var parts = [];
  var maxChunkLength = 16383; // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ));
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1];
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    );
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1];
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    );
  }

  return parts.join('')
}

var base64Js = {
	byteLength: byteLength_1,
	toByteArray: toByteArray_1,
	fromByteArray: fromByteArray_1
};

var customInspect = util && util.inspect && util.inspect.custom;
var stringify = (util && util.inspect) || JSON.stringify;

/**
 * FaunaDB value types. Generally, these collections do not need to be instantiated
 * directly; they can be constructed through helper methods in {@link module:query}.
 *
 * Instances of these collections will be returned in responses if the response object
 * contains these values. For example, a FaunaDB response containing
 *`{ "@ref": { "id": "123", "collection": { "@ref": { "id": "frogs", "collection": { "@ref": { "id": "collectiones" } } } } } }`
 * will be returned as `new values.Ref("123", new values.Ref("frogs", values.Native.COLLECTIONS))`.
 *
 * See the [FaunaDB Query API Documentation](https://app.fauna.com/documentation/reference/queryapi#simple-type)
 * for more information.
 *
 * @module values
 */

/**
 * Base type for FaunaDB value objects.
 *
 * @extends Expr
 * @abstract
 * @constructor
 */
function Value() {}

Value.prototype._isFaunaValue = true;

util.inherits(Value, Expr_1);

/**
 * FaunaDB ref.
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {string} id
 *   The id portion of the ref.
 * @param {Ref} [collection]
 *   The collection portion of the ref.
 * @param {Ref} [database]
 *   The database portion of the ref.
 *
 * @extends module:values~Value
 * @constructor
 */
function Ref(id, collection, database) {
  if (!id) throw new errors.InvalidValue('id cannot be null or undefined')

  this.value = { id: id };
  if (collection) this.value['collection'] = collection;
  if (database) this.value['database'] = database;
}

Ref.prototype._isFaunaRef = true;

util.inherits(Ref, Value);

/**
 * Gets the collection part out of the Ref.
 *
 * @member {string}
 * @name module:values~Ref#collection
 */
Object.defineProperty(Ref.prototype, 'collection', {
  get: function() {
    return this.value['collection']
  },
});

/**
 * DEPRECATED. Gets the class part out of the Ref.
 *
 * @member {string}
 * @name module:values~Ref#class
 */
Object.defineProperty(Ref.prototype, 'class', {
  get: browser(function() {
    return this.value['collection']
  }, 'class is deprecated, use collection instead'),
});

/**
 * Gets the database part out of the Ref.
 *
 * @member {Ref}
 * @name module:values~Ref#database
 */
Object.defineProperty(Ref.prototype, 'database', {
  get: function() {
    return this.value['database']
  },
});

/**
 * Gets the id part out of the Ref.
 *
 * @member {Ref}
 * @name module:values~Ref#id
 */
Object.defineProperty(Ref.prototype, 'id', {
  get: function() {
    return this.value['id']
  },
});

/** @ignore */
Ref.prototype.toJSON = function() {
  return { '@ref': this.value }
};

wrapToString(Ref, function() {
  var constructors = {
    collections: 'Collection',
    databases: 'Database',
    indexes: 'Index',
    functions: 'Function',
    roles: 'Role',
  };

  var toString = function(ref) {
    if (ref.collection === undefined) {
      var db = ref.database !== undefined ? ref.database.toString() : '';
      return ref.id.charAt(0).toUpperCase() + ref.id.slice(1) + '(' + db + ')'
    }

    var constructor = constructors[ref.collection.id];
    if (constructor !== undefined) {
      var db = ref.database !== undefined ? ', ' + ref.database.toString() : '';
      return constructor + '("' + ref.id + '"' + db + ')'
    }

    return 'Ref(' + toString(ref.collection) + ', "' + ref.id + '")'
  };

  return toString(this)
});

/** @ignore */
Ref.prototype.valueOf = function() {
  return this.value
};

/**
 * Whether these are both Refs and have the same value.
 * @param {any} other
 * @returns {boolean}
 */
Ref.prototype.equals = function(other) {
  return (
    (other instanceof Ref ||
      util.checkInstanceHasProperty(other, '_isFaunaRef')) &&
    this.id === other.id &&
    ((this.collection === undefined && other.collection === undefined) ||
      this.collection.equals(other.collection)) &&
    ((this.database === undefined && other.database === undefined) ||
      this.database.equals(other.database))
  )
};

var Native = {
  COLLECTIONS: new Ref('collections'),
  INDEXES: new Ref('indexes'),
  DATABASES: new Ref('databases'),
  FUNCTIONS: new Ref('functions'),
  ROLES: new Ref('roles'),
  KEYS: new Ref('keys'),
};

Native.fromName = function(name) {
  switch (name) {
    case 'collections':
      return Native.COLLECTIONS
    case 'indexes':
      return Native.INDEXES
    case 'databases':
      return Native.DATABASES
    case 'functions':
      return Native.FUNCTIONS
    case 'roles':
      return Native.ROLES
    case 'keys':
      return Native.KEYS
  }
  return new Ref(name)
};

/**
 * FaunaDB Set.
 * This represents a set returned as part of a response.
 * This looks like `{"@set": set_query}`.
 * For query sets see {@link match}, {@link union},
 * {@link intersection}, {@link difference}, and {@link join}.
 *
 * @extends module:values~Value
 * @constructor
 */
function SetRef(value) {
  /** Raw query object. */
  this.value = value;
}

util.inherits(SetRef, Value);

wrapToString(SetRef, function() {
  return Expr_1.toString(this.value)
});

/** @ignore */
SetRef.prototype.toJSON = function() {
  return { '@set': this.value }
};

/** FaunaDB time. See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {string|Date} value If a Date, this is converted to a string.
 * @extends module:values~Value
 * @constructor
 */
function FaunaTime(value) {
  if (value instanceof Date) {
    value = value.toISOString();
  } else if (!(value.charAt(value.length - 1) === 'Z')) {
    throw new errors.InvalidValue("Only allowed timezone is 'Z', got: " + value)
  }

  this.value = value;
}

util.inherits(FaunaTime, Value);

/**
 * Returns the date wrapped by this object.
 * This is lossy as Dates have millisecond rather than nanosecond precision.
 *
 * @member {Date}
 * @name module:values~FaunaTime#date
 */
Object.defineProperty(FaunaTime.prototype, 'date', {
  get: function() {
    return new Date(this.value)
  },
});

wrapToString(FaunaTime, function() {
  return 'Time("' + this.value + '")'
});

/** @ignore */
FaunaTime.prototype.toJSON = function() {
  return { '@ts': this.value }
};

/** FaunaDB date. See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {string|Date} value
 *   If a Date, this is converted to a string, with time-of-day discarded.
 * @extends module:values~Value
 * @constructor
 */
function FaunaDate(value) {
  if (value instanceof Date) {
    // The first 10 characters 'YYYY-MM-DD' are the date portion.
    value = value.toISOString().slice(0, 10);
  }

  /**
   * ISO8601 date.
   * @type {string}
   */
  this.value = value;
}

util.inherits(FaunaDate, Value);

/**
 * @member {Date}
 * @name module:values~FaunaDate#date
 */
Object.defineProperty(FaunaDate.prototype, 'date', {
  get: function() {
    return new Date(this.value)
  },
});

wrapToString(FaunaDate, function() {
  return 'Date("' + this.value + '")'
});

/** @ignore */
FaunaDate.prototype.toJSON = function() {
  return { '@date': this.value }
};

/** FaunaDB bytes. See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {Uint8Array|ArrayBuffer|string} value
 *    If ArrayBuffer it's converted to Uint8Array
 *    If string it must be base64 encoded and it's converted to Uint8Array
 * @extends module:values~Value
 * @constructor
 */
function Bytes(value) {
  if (value instanceof ArrayBuffer) {
    this.value = new Uint8Array(value);
  } else if (typeof value === 'string') {
    this.value = base64Js.toByteArray(value);
  } else if (value instanceof Uint8Array) {
    this.value = value;
  } else {
    throw new errors.InvalidValue(
      'Bytes type expect argument to be either Uint8Array|ArrayBuffer|string, got: ' +
        stringify(value)
    )
  }
}

util.inherits(Bytes, Value);

wrapToString(Bytes, function() {
  return 'Bytes("' + base64Js.fromByteArray(this.value) + '")'
});

/** @ignore */
Bytes.prototype.toJSON = function() {
  return { '@bytes': base64Js.fromByteArray(this.value) }
};

/** FaunaDB query. See the [docs](https://app.fauna.com/documentation/reference/queryapi#special-type).
 *
 * @param {any} value
 * @extends module:values~Value
 * @constructor
 */
function Query(value) {
  this.value = value;
}

util.inherits(Query, Value);

wrapToString(Query, function() {
  return 'Query(' + Expr_1.toString(this.value) + ')'
});

/** @ignore */
Query.prototype.toJSON = function() {
  return { '@query': this.value }
};

/** @ignore */
function wrapToString(type, fn) {
  type.prototype.toString = fn;
  type.prototype.inspect = fn;

  if (customInspect) {
    type.prototype[customInspect] = fn;
  }
}

var values = {
  Value: Value,
  Ref: Ref,
  Native: Native,
  SetRef: SetRef,
  FaunaTime: FaunaTime,
  FaunaDate: FaunaDate,
  Bytes: Bytes,
  Query: Query,
};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * This module contains functions used to construct FaunaDB Queries.
 *
 * See the [FaunaDB Query API Documentation](https://app.fauna.com/documentation/reference/queryapi)
 * for per-function documentation.
 *
 * @module query
 */

/**
 * @typedef {(Expr|string|number|boolean|Object)} module:query~ExprTerm
 */

/**
 * @typedef {(module:query~ExprTerm|Array<module:query~ExprTerm>)} module:query~ExprArg
 */

// Type helpers

/**
 * If one parameter is provided, constructs a literal Ref value.
 * The string `collections/widget/123` will be equivalent to `new values.Ref('123', new values.Ref('widget', values.Native.COLLECTIONS))`
 *
 * If two are provided, constructs a Ref() function that, when evaluated, returns a Ref value.
 *
 * @param {string|module:query~ExprArg} ref|cls
 *   Alone, the ref in path form. Combined with `id`, must be a collection ref.
 * @param {module:query~ExprArg} [id]
 *   A numeric id of the given collection.
 * @return {Expr}
 */
function Ref$1() {
  arity.between(1, 2, arguments, Ref$1.name);
  switch (arguments.length) {
    case 1:
      return new Expr_1({ '@ref': wrap(arguments[0]) })
    case 2:
      return new Expr_1({ ref: wrap(arguments[0]), id: wrap(arguments[1]) })
  }
}

/**
 * @param {Uint8Array|ArrayBuffer|module:query~ExprArg} bytes
 *   A base64 encoded string or a byte array
 * @return {Expr}
 */
function Bytes$1(bytes) {
  arity.exact(1, arguments, Bytes$1.name);
  return new values.Bytes(bytes)
}

// Basic forms

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} msg
 *   The message to send back to the client.
 * @return {Expr}
 * */
function Abort(msg) {
  arity.exact(1, arguments, Abort.name);
  return new Expr_1({ abort: wrap(msg) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} timestamp
 *   An Expr that will evaluate to a Time.
 * @param {module:query~ExprArg} expr
 *   The Expr to run at the given snapshot time.
 * @return {Expr}
 * */
function At(timestamp, expr) {
  arity.exact(2, arguments, At.name);
  return new Expr_1({ at: wrap(timestamp), expr: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} bindings
 *   A set of bindings to use within the given expression.
 * @param {module:query~ExprArg} in
 *   The expression to run with the given bindings.
 * @return {Expr}
 * */
function Let(vars, expr) {
  arity.exact(2, arguments, Let.name);
  var bindings = [];

  if (Array.isArray(vars)) {
    bindings = vars.map(function(item) {
      return wrapValues(item)
    });
  } else {
    bindings = Object.keys(vars).map(function(k) {
      var b = {};
      b[k] = wrap(vars[k]);
      return b
    });
  }

  if (typeof expr === 'function') {
    if (Array.isArray(vars)) {
      var expr_vars = [];

      vars.forEach(function(item) {
        Object.keys(item).forEach(function(name) {
          expr_vars.push(Var(name));
        });
      });

      expr = expr.apply(null, expr_vars);
    } else {
      expr = expr.apply(
        null,
        Object.keys(vars).map(function(name) {
          return Var(name)
        })
      );
    }
  }

  return new Expr_1({ let: bindings, in: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} varName
 *   The name of the bound var.
 * @return {Expr}
 * */
function Var(varName) {
  arity.exact(1, arguments, Var.name);
  return new Expr_1({ var: wrap(varName) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {module:query~ExprArg} condition
 *   An expression that returns a boolean.
 * @param {module:query~ExprArg} then
 *   The expression to run if condition is true.
 * @param {module:query~ExprArg} else
 *   The expression to run if the condition is false.
 * @return {Expr}
 * */
function If(condition, then, _else) {
  arity.exact(3, arguments, If.name);
  return new Expr_1({ if: wrap(condition), then: wrap(then), else: wrap(_else) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {...module:query~ExprArg} args
 *   A series of expressions to run.
 * @return {Expr}
 * */
function Do() {
  arity.min(1, arguments, Do.name);
  var args = argsToArray(arguments);
  return new Expr_1({ do: wrap(args) })
}

/** See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * @param {...module:query~ExprArg} fields
 *   The object to be escaped.
 * @return {Expr}
 * */
var objectFunction = function(fields) {
  arity.exact(1, arguments, objectFunction.name);
  return new Expr_1({ object: wrapValues(fields) })
};
/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * Directly produces a FaunaDB Lambda expression as described in the FaunaDB reference
 * documentation.
 *
 * @param {module:query~ExprArg} var
 *   The names of the variables to be bound in this lambda expression.
 * @param {module:query~ExprArg} expr
 *   The lambda expression.
 * @return {Expr}
 */

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * Takes a Javascript function, and will transform it
 * into the appropriate FaunaDB query. For example:
 *
 * ```
 * Lambda(function(a) { return Add(a, a); });
 * // Returns { lambda: 'a', expr: { add: [{ var: a }, { var: a }] } }
 * ```
 * Note that the driver will handle wrapping all usages of the lambda's bound
 * variables with the {@link modules:query~Var} function.
 *
 * @param {function} func
 *   Takes the provided function and produces the appropriate FaunaDB query expression.
 * @return {Expr}
 *
 */ function Lambda() {
  arity.between(1, 2, arguments, Lambda.name);
  switch (arguments.length) {
    case 1:
      var value = arguments[0];
      if (typeof value === 'function') {
        return _lambdaFunc(value)
      } else if (
        value instanceof Expr_1 ||
        _util.checkInstanceHasProperty(value, '_isFaunaExpr')
      ) {
        return value
      } else {
        throw new errors.InvalidValue(
          'Lambda function takes either a Function or an Expr.'
        )
      }
    case 2:
      var var_name = arguments[0];
      var expr = arguments[1];

      return _lambdaExpr(var_name, expr)
  }
}

/**
 * @private
 */
function _lambdaFunc(func) {
  var vars = fnAnnotate(func);
  switch (vars.length) {
    case 0:
      throw new errors.InvalidValue(
        'Provided Function must take at least 1 argument.'
      )
    case 1:
      return _lambdaExpr(vars[0], func(Var(vars[0])))
    default:
      return _lambdaExpr(
        vars,
        func.apply(
          null,
          vars.map(function(name) {
            return Var(name)
          })
        )
      )
  }
}

/**
 * @private
 */
function _lambdaExpr(var_name, expr) {
  return new Expr_1({ lambda: wrap(var_name), expr: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * Invokes a given function passing in the provided arguments
 *
 * ```
 * Call(Ref("functions/a_function"), 1, 2)
 * ```
 *
 * @param {module:query~ExprArg} ref
 *   The ref of the UserDefinedFunction to call
 * @param {...module:query~ExprArg} args
 *   A series of values to pass as arguments to the UDF.
 * @return {Expr}
 * */
function Call(ref) {
  arity.min(1, arguments, Call.name);
  var args = argsToArray(arguments);
  args.shift();
  return new Expr_1({ call: wrap(ref), arguments: wrap(varargs(args)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#basic-forms).
 *
 * Constructs a `@query` type using the Lambda() or a function.
 *
 * ```
 * Query(Lambda(['a', 'b'], Add(Var('a'), Var('b'))))
 * Query(function (a, b) { return Add(a, b) })
 * ```
 *
 * @param {module:query~ExprArg|function} lambda
 *   A function to escape as a query.
 * @return {Expr}
 * */
function Query$1(lambda) {
  arity.exact(1, arguments, Query$1.name);
  return new Expr_1({ query: wrap(lambda) })
}

// Collection functions

/** See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection to be mapped over.
 * @param {module:query~ExprArg|function} lambda
 *   A function to be called for each element of the collection.
 * @return {Expr}
 * */
function Map(collection, lambda_expr) {
  arity.exact(2, arguments, Map.name);
  return new Expr_1({ map: wrap(lambda_expr), collection: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection to be iterated over.
 * @param {module:query~ExprArg|function} lambda
 *   A function to be called for each element of the collection.
 * @return {Expr}
 * */
function Foreach(collection, lambda_expr) {
  arity.exact(2, arguments, Foreach.name);
  return new Expr_1({ foreach: wrap(lambda_expr), collection: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection to be filtered.
 * @param {module:query~ExprArg|function} lambda
 *   A function that returns a boolean used to filter unwanted values.
 * @return {Expr}
 * */
function Filter(collection, lambda_expr) {
  arity.exact(2, arguments, Filter.name);
  return new Expr_1({ filter: wrap(lambda_expr), collection: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} number
 *   An expression resulting in the number of elements to take from the collection.
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 * */
function Take(number, collection) {
  arity.exact(2, arguments, Take.name);
  return new Expr_1({ take: wrap(number), collection: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} number
 *   An expression resulting in the number of elements to drop from the collection.
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 * */
function Drop(number, collection) {
  arity.exact(2, arguments, Drop.name);
  return new Expr_1({ drop: wrap(number), collection: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} elements
 *   An expression resulting in a collection of elements to prepend to the given collection.
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 */
function Prepend(elements, collection) {
  arity.exact(2, arguments, Prepend.name);
  return new Expr_1({ prepend: wrap(elements), collection: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} elements
 *   An expression resulting in a collection of elements to append to the given collection.
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 */
function Append(elements, collection) {
  arity.exact(2, arguments, Append.name);
  return new Expr_1({ append: wrap(elements), collection: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 */
function IsEmpty(collection) {
  arity.exact(1, arguments, IsEmpty.name);
  return new Expr_1({ is_empty: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#collections).
 *
 * @param {module:query~ExprArg} collection
 *   An expression resulting in a collection.
 * @return {Expr}
 */
function IsNonEmpty(collection) {
  arity.exact(1, arguments, IsNonEmpty.name);
  return new Expr_1({ is_nonempty: wrap(collection) })
}

// Type check functions

/**
 * Check if the expression is a number.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isnumber">IsNumber</a>
 */
function IsNumber(expr) {
  arity.exact(1, arguments, IsNumber.name);
  return new Expr_1({ is_number: wrap(expr) })
}

/**
 * Check if the expression is a double.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isdouble">IsDouble</a>
 */
function IsDouble(expr) {
  arity.exact(1, arguments, IsDouble.name);
  return new Expr_1({ is_double: wrap(expr) })
}

/**
 * Check if the expression is an integer.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isinteger">IsInteger</a>
 */
function IsInteger(expr) {
  arity.exact(1, arguments, IsInteger.name);
  return new Expr_1({ is_integer: wrap(expr) })
}

/**
 * Check if the expression is a boolean.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isboolean">IsBoolean</a>
 */
function IsBoolean(expr) {
  arity.exact(1, arguments, IsBoolean.name);
  return new Expr_1({ is_boolean: wrap(expr) })
}

/**
 * Check if the expression is null.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isnull">IsNull</a>
 */
function IsNull(expr) {
  arity.exact(1, arguments, IsNull.name);
  return new Expr_1({ is_null: wrap(expr) })
}

/**
 * Check if the expression is a byte array.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isbytes">IsBytes</a>
 */
function IsBytes(expr) {
  arity.exact(1, arguments, IsBytes.name);
  return new Expr_1({ is_bytes: wrap(expr) })
}

/**
 * Check if the expression is a timestamp.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/istimestamp">IsTimestamp</a>
 */
function IsTimestamp(expr) {
  arity.exact(1, arguments, IsTimestamp.name);
  return new Expr_1({ is_timestamp: wrap(expr) })
}

/**
 * Check if the expression is a date.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isdate">IsDate</a>
 */
function IsDate(expr) {
  arity.exact(1, arguments, IsDate.name);
  return new Expr_1({ is_date: wrap(expr) })
}

/**
 * Check if the expression is a string.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isstring">IsString</a>
 */
function IsString(expr) {
  arity.exact(1, arguments, IsString.name);
  return new Expr_1({ is_string: wrap(expr) })
}

/**
 * Check if the expression is an array.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isarray">IsArray</a>
 */
function IsArray(expr) {
  arity.exact(1, arguments, IsArray.name);
  return new Expr_1({ is_array: wrap(expr) })
}

/**
 * Check if the expression is an object.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isobject">IsObject</a>
 */
function IsObject(expr) {
  arity.exact(1, arguments, IsObject.name);
  return new Expr_1({ is_object: wrap(expr) })
}

/**
 * Check if the expression is a reference.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isref">IsRef</a>
 */
function IsRef(expr) {
  arity.exact(1, arguments, IsRef.name);
  return new Expr_1({ is_ref: wrap(expr) })
}

/**
 * Check if the expression is a set.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isset">IsSet</a>
 */
function IsSet(expr) {
  arity.exact(1, arguments, IsSet.name);
  return new Expr_1({ is_set: wrap(expr) })
}

/**
 * Check if the expression is a document (either a reference or an instance).
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isdoc">IsDoc</a>
 */
function IsDoc(expr) {
  arity.exact(1, arguments, IsDoc.name);
  return new Expr_1({ is_doc: wrap(expr) })
}

/**
 * Check if the expression is a lambda.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/islambda">IsLambda</a>
 */
function IsLambda(expr) {
  arity.exact(1, arguments, IsLambda.name);
  return new Expr_1({ is_lambda: wrap(expr) })
}

/**
 * Check if the expression is a collection.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/iscollection">IsCollection</a>
 */
function IsCollection(expr) {
  arity.exact(1, arguments, IsCollection.name);
  return new Expr_1({ is_collection: wrap(expr) })
}

/**
 * Check if the expression is a database.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isdatabase">IsDatabase</a>
 */
function IsDatabase(expr) {
  arity.exact(1, arguments, IsDatabase.name);
  return new Expr_1({ is_database: wrap(expr) })
}

/**
 * Check if the expression is an index.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isindex">IsIndex</a>
 */
function IsIndex(expr) {
  arity.exact(1, arguments, IsIndex.name);
  return new Expr_1({ is_index: wrap(expr) })
}

/**
 * Check if the expression is a function.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isfunction">IsFunction</a>
 */
function IsFunction(expr) {
  arity.exact(1, arguments, IsFunction.name);
  return new Expr_1({ is_function: wrap(expr) })
}

/**
 * Check if the expression is a key.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/iskey">IsKey</a>
 */
function IsKey(expr) {
  arity.exact(1, arguments, IsKey.name);
  return new Expr_1({ is_key: wrap(expr) })
}

/**
 * Check if the expression is a token.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/istoken">IsToken</a>
 */
function IsToken(expr) {
  arity.exact(1, arguments, IsToken.name);
  return new Expr_1({ is_token: wrap(expr) })
}

/**
 * Check if the expression is credentials.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/iscredentials">IsCredentials</a>
 */
function IsCredentials(expr) {
  arity.exact(1, arguments, IsCredentials.name);
  return new Expr_1({ is_credentials: wrap(expr) })
}

/**
 * Check if the expression is a role.
 *
 * @param {module:query~ExprArg} expr
 *   The expression to check
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/isrole">IsRole</a>
 */
function IsRole(expr) {
  arity.exact(1, arguments, IsRole.name);
  return new Expr_1({ is_role: wrap(expr) })
}

// Read functions

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#read-functions).
 *
 * @param {module:query~ExprArg} ref
 *   An expression resulting in either a Ref or SetRef.
 * @param {?module:query~ExprArg} ts
 *   The snapshot time at which to get the document.
 * @return {Expr}
 */
function Get(ref, ts) {
  arity.between(1, 2, arguments, Get.name);
  ts = defaults(ts, null);

  return new Expr_1(params({ get: wrap(ref) }, { ts: wrap(ts) }))
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#read-functions).
 *
 * @param {module:query~ExprArg} secret
 *   The key or token secret to lookup.
 * @return {Expr}
 */
function KeyFromSecret(secret) {
  arity.exact(1, arguments, KeyFromSecret.name);
  return new Expr_1({ key_from_secret: wrap(secret) })
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/reduce).
 *
 * @param {module:query~ExprArg} lambda
 *   The accumulator function
 * @param {module:query~ExprArg} initial
 *   The initial value
 * @param {module:query~ExprArg} collection
 *   The colleciton to be reduced
 * @return {Expr}
 */
function Reduce(lambda, initial, collection) {
  arity.exact(3, arguments, Reduce.name);
  return new Expr_1({
    reduce: wrap(lambda),
    initial: wrap(initial),
    collection: wrap(collection),
  })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#read-functions).
 * You may want to utilize {@link Client#paginate} to obtain a {@link PageHelper},
 * rather than using this query function directly.
 *
 * @param {module:query~ExprArg} set
 *   An expression resulting in a SetRef to page over.
 * @param {?Object} opts
 *  An object representing options for pagination.
 *    - size: Maximum number of results to return.
 *    - after: Return the next page of results after this cursor (inclusive).
 *    - before: Return the previous page of results before this cursor (exclusive).
 *    - sources: If true, include the source sets along with each element.
 * @return {Expr}
 */
function Paginate(set, opts) {
  arity.between(1, 2, arguments, Paginate.name);
  opts = defaults(opts, {});

  return new Expr_1(objectAssign({ paginate: wrap(set) }, wrapValues(opts)))
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#read-functions).
 *
 * @param {module:query~ExprArg} ref
 *   An expression resulting in a Ref.
 * @param {?module:query~ExprArg} ts
 *   The snapshot time at which to check for the document's existence.
 * @return {Expr}
 */
function Exists(ref, ts) {
  arity.between(1, 2, arguments, Exists.name);
  ts = defaults(ts, null);

  return new Expr_1(params({ exists: wrap(ref) }, { ts: wrap(ts) }))
}

// Write functions

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref (usually a CollectionRef) to create.
 * @param {?module:query~ExprArg} params
 *   An object representing the parameters of the document.
 * @return {Expr}
 */
function Create(collection_ref, params) {
  arity.between(1, 2, arguments, Create.name);
  return new Expr_1({ create: wrap(collection_ref), params: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to update.
 * @param {module:query~ExprArg} params
 *   An object representing the parameters of the document.
 * @return {Expr}
 */
function Update(ref, params) {
  arity.exact(2, arguments, Update.name);
  return new Expr_1({ update: wrap(ref), params: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to replace.
 * @param {module:query~ExprArg} params
 *   An object representing the parameters of the document.
 * @return {Expr}
 */
function Replace(ref, params) {
  arity.exact(2, arguments, Replace.name);
  return new Expr_1({ replace: wrap(ref), params: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to delete.
 * @return {Expr}
 */
function Delete(ref) {
  arity.exact(1, arguments, Delete.name);
  return new Expr_1({ delete: wrap(ref) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to insert against
 * @param {module:query~ExprArg} ts
 *   The valid time of the inserted event
 * @param {module:query~ExprArg} action
 *   Whether the event should be a Create, Update, or Delete.
 * @param {module:query~ExprArg} params
 *   If this is a Create or Update, the parameters of the document.
 * @return {Expr}
 */
function Insert(ref, ts, action, params) {
  arity.exact(4, arguments, Insert.name);
  return new Expr_1({
    insert: wrap(ref),
    ts: wrap(ts),
    action: wrap(action),
    params: wrap(params),
  })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref of the document whose event should be removed.
 * @param {module:query~ExprArg} ts
 *   The valid time of the event.
 * @param {module:query~ExprArg} action
 *   The event action (Create, Update, or Delete) that should be removed.
 * @return {Expr}
 */
function Remove(ref, ts, action) {
  arity.exact(3, arguments, Remove.name);
  return new Expr_1({ remove: wrap(ref), ts: wrap(ts), action: wrap(action) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a class.
 *     - name (required): the name of the class to create
 * @return {Expr}
 *
 * @deprecated use CreateCollection instead
 */
function CreateClass(params) {
  arity.exact(1, arguments, CreateClass.name);
  return new Expr_1({ create_class: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a collection.
 *     - name (required): the name of the collection to create
 * @return {Expr}
 */
function CreateCollection(params) {
  arity.exact(1, arguments, CreateCollection.name);
  return new Expr_1({ create_collection: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a database.
 *     - name (required): the name of the database to create
 * @return {Expr}
 */
function CreateDatabase(params) {
  arity.exact(1, arguments, CreateDatabase.name);
  return new Expr_1({ create_database: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create an index.
 *     - name (required): the name of the index to create
 *     - source: One or more source objects describing source collections and (optional) field bindings.
 *     - terms: An array of term objects describing the fields to be indexed. Optional
 *     - values: An array of value objects describing the fields to be covered. Optional
 *     - unique: If true, maintains a uniqueness constraint on combined terms and values. Optional
 *     - partitions: The number of sub-partitions within each term. Optional
 * @return {Expr}
 */
function CreateIndex(params) {
  arity.exact(1, arguments, CreateIndex.name);
  return new Expr_1({ create_index: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a new key
 *     - database: Ref of the database the key will be scoped to. Optional.
 *     - role: The role of the new key
 * @return {Expr}
 */
function CreateKey(params) {
  arity.exact(1, arguments, CreateKey.name);
  return new Expr_1({ create_key: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a new user defined function.
 *     - name: The name of the function
 *     - body: A lambda function (escaped with `query`).
 * @return {Expr}
 */
function CreateFunction(params) {
  arity.exact(1, arguments, CreateFunction.name);
  return new Expr_1({ create_function: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#write-functions).
 *
 * @param {module:query~ExprArg} params
 *   An object of parameters used to create a new role.
 *     - name: The name of the role
 *     - privileges: An array of privileges
 *     - membership: An array of membership bindings
 * @return {Expr}
 */
function CreateRole(params) {
  arity.exact(1, arguments, CreateRole.name);
  return new Expr_1({ create_role: wrap(params) })
}

// Sets

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref of the document for which to retrieve the singleton set.
 * @return {Expr}
 */
function Singleton(ref) {
  arity.exact(1, arguments, Singleton.name);
  return new Expr_1({ singleton: wrap(ref) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} ref
 *   A Ref or SetRef to retrieve an event set from.
 * @return {Expr}
 */
function Events(ref_set) {
  arity.exact(1, arguments, Events.name);
  return new Expr_1({ events: wrap(ref_set) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} index
 *   The Ref of the index to match against.
 * @param {...module:query~ExprArg} terms
 *   A list of terms used in the match.
 * @return {Expr}
 */
function Match(index) {
  arity.min(1, arguments, Match.name);
  var args = argsToArray(arguments);
  args.shift();
  return new Expr_1({ match: wrap(index), terms: wrap(varargs(args)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {...module:query~ExprArg} sets
 *   A list of SetRefs to union together.
 * @return {Expr}
 */
function Union() {
  arity.min(1, arguments, Union.name);
  return new Expr_1({ union: wrap(varargs(arguments)) })
}

/**
 * Merge two or more objects..
 *
 * @param {...module:query~ExprArg} merge merge the first object.
 * @param {...module:query~ExprArg} _with the second object or a list of objects
 * @param {...module:query~ExprArg} lambda a lambda to resolve possible conflicts
 * @return {Expr}
 * */
function Merge(merge, _with, lambda) {
  arity.between(2, 3, arguments, Merge.name);
  return new Expr_1(
    params({ merge: wrap(merge), with: wrap(_with) }, { lambda: wrap(lambda) })
  )
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {...module:query~ExprArg} sets
 *   A list of SetRefs to intersect.
 * @return {Expr}
 * */
function Intersection() {
  arity.min(1, arguments, Intersection.name);
  return new Expr_1({ intersection: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {...module:query~ExprArg} sets
 *   A list of SetRefs to diff.
 * @return {Expr}
 * */
function Difference() {
  arity.min(1, arguments, Difference.name);
  return new Expr_1({ difference: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} set
 *   A SetRef to remove duplicates from.
 * @return {Expr}
 * */
function Distinct(set) {
  arity.exact(1, arguments, Distinct.name);
  return new Expr_1({ distinct: wrap(set) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#sets).
 *
 * @param {module:query~ExprArg} source
 *   A SetRef of the source set
 * @param {module:query~ExprArg|function} target
 *   A Lambda that will accept each element of the source Set and return a Set
 * @return {Expr}
 */
function Join(source, target) {
  arity.exact(2, arguments, Join.name);
  return new Expr_1({ join: wrap(source), with: wrap(target) })
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/range).
 *
 * @param {module:query~ExprArg} set
 *   A SetRef of the source set
 * @param {module:query~ExprArg} from
 *   The lower bound
 * @param {module:query~ExprArg} to
 *   The upper bound
 * @return {Expr}
 */
function Range(set, from, to) {
  arity.exact(3, arguments, Range.name);
  return new Expr_1({ range: wrap(set), from: wrap(from), to: wrap(to) })
}

// Authentication

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @param {module:query~ExprArg} ref
 *   A Ref with credentials to authenticate against
 * @param {module:query~ExprArg} params
 *   An object of parameters to pass to the login function
 *     - password: The password used to login
 * @return {Expr}
 * */
function Login(ref, params) {
  arity.exact(2, arguments, Login.name);
  return new Expr_1({ login: wrap(ref), params: wrap(params) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @param {module:query~ExprArg} delete_tokens
 *   If true, log out all tokens associated with the current session.
 * @return {Expr}
 */
function Logout(delete_tokens) {
  arity.exact(1, arguments, Logout.name);
  return new Expr_1({ logout: wrap(delete_tokens) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @param {module:query~ExprArg} ref
 *   The Ref to check the password against.
 * @param {module:query~ExprArg} password
 *   The credentials password to check.
 * @return {Expr}
 */
function Identify(ref, password) {
  arity.exact(2, arguments, Identify.name);
  return new Expr_1({ identify: wrap(ref), password: wrap(password) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @return {Expr}
 */
function Identity() {
  arity.exact(0, arguments, Identity.name);
  return new Expr_1({ identity: null })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#authentication).
 *
 * @return {Expr}
 */
function HasIdentity() {
  arity.exact(0, arguments, HasIdentity.name);
  return new Expr_1({ has_identity: null })
}

// String functions

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} strings - A list of strings to concatenate.
 * @param {string} separator  - The separator to use between each string.
 * @return {string} a single combined string
 */
function Concat(strings, separator) {
  arity.min(1, arguments, Concat.name);
  separator = defaults(separator, null);
  return new Expr_1(
    params({ concat: wrap(strings) }, { separator: wrap(separator) })
  )
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} string - The string to casefold.
 * @param {string} normalizer - The algorithm to use. One of: NFKCCaseFold, NFC, NFD, NFKC, NFKD.
 * @return {string} a normalized string
 */
function Casefold(string, normalizer) {
  arity.min(1, arguments, Casefold.name);
  return new Expr_1(
    params({ casefold: wrap(string) }, { normalizer: wrap(normalizer) })
  )
}

/**
 * Returns true if the string contains the given substring, or false if otherwise
 *
 * @param {string} value  - the string to evaluate
 * @param {string} search - the substring to search for
 * @return {boolean}      - was the search result found
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/containsstr">FaunaDB ContainsStr Function</a>
 */
function ContainsStr(value, search) {
  arity.exact(2, arguments, ContainsStr.name);
  return new Expr_1({ containsstr: wrap(value), search: wrap(search) })
}

/**
 * Returns true if the string contains the given pattern, or false if otherwise
 *
 * @param {string} value   - the string to evaluate
 * @param {string} pattern - the pattern to search for
 * @return {boolean}       - was the regex search result found
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/containsstrregex">FaunaDB ContainsStrRegex Function</a>
 */
function ContainsStrRegex(value, pattern) {
  arity.exact(2, arguments, ContainsStrRegex.name);
  return new Expr_1({ containsstrregex: wrap(value), pattern: wrap(pattern) })
}

/**
 * Returns true if the string starts with the given prefix value, or false if otherwise
 *
 * @param {string} value   - the string to evaluate
 * @param {string} search  - the prefix to search for
 * @return {boolean}       - does `value` start with `search`
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/startswith">FaunaDB StartsWith Function</a>
 */
function StartsWith(value, search) {
  arity.exact(2, arguments, StartsWith.name);
  return new Expr_1({ startswith: wrap(value), search: wrap(search) })
}

/**
 * Returns true if the string ends with the given suffix value, or false if otherwise
 *
 * @param {string} value   - the string to evaluate
 * @param {string} search  - the suffix to search for
 * @return {boolean}       - does `value` end with `search`
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/endswith">FaunaDB EndsWith Function</a>
 */
function EndsWith(value, search) {
  arity.exact(2, arguments, EndsWith.name);
  return new Expr_1({ endswith: wrap(value), search: wrap(search) })
}

/**
 * It takes a string and returns a regex which matches the input string verbatim.
 *
 * @param value      - the string to analyze
 * @return {string}  - a regex which matches the input string verbatim
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/regexescape">FaunaDB RegexEscape Function</a>
 */
function RegexEscape(value) {
  arity.exact(1, arguments, RegexEscape.name);
  return new Expr_1({ regexescape: wrap(value) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - A string to search.
 * @param {string} find - Find the first position of this string in the search string
 * @param {int} start - An optional start offset into the search string
 * @return {int} location of the found string or -1 if not found
 */
function FindStr(value, find, start) {
  arity.between(2, 3, arguments, FindStr.name);
  start = defaults(start, null);
  return new Expr_1(
    params({ findstr: wrap(value), find: wrap(find) }, { start: wrap(start) })
  )
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - A string to search.
 * @param {string} pattern - Find the first position of this pattern in the search string using a java regular expression syntax
 * @param {int} start - An optional start offset into the search string
 * @param {int} numResults - An optional number of results to return, max 1024
 * @return {Array} an array of object describing where the search pattern was located
 */
function FindStrRegex(value, pattern, start, numResults) {
  arity.between(2, 4, arguments, FindStrRegex.name);
  start = defaults(start, null);
  return new Expr_1(
    params(
      { findstrregex: wrap(value), pattern: wrap(pattern) },
      { start: wrap(start), num_results: wrap(numResults) }
    )
  )
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to calculate the length in codepoints.
 * @return {int} the length of the string in codepoints
 */
function Length(value) {
  arity.exact(1, arguments, Length.name);
  return new Expr_1({ length: wrap(value) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to LowerCase.
 * @return {string} the string converted to lowercase
 */
function LowerCase(value) {
  arity.exact(1, arguments, LowerCase.name);
  return new Expr_1({ lowercase: wrap(value) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to trim leading white space.
 * @return {string} the string with leading white space removed
 */
function LTrim(value) {
  arity.exact(1, arguments, LTrim.name);
  return new Expr_1({ ltrim: wrap(value) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {module:query~ExprArg} terms
 *   A document from which to produce ngrams.
 * @param {?Object} opts
 *   An object of options
 *     - min: The minimum ngram size.
 *     - max: The maximum ngram size.
 * @return {Array|Value}
 */
function NGram(terms, min, max) {
  arity.between(1, 3, arguments, NGram.name);
  min = defaults(min, null);
  max = defaults(max, null);

  return new Expr_1(
    params({ ngram: wrap(terms) }, { min: wrap(min), max: wrap(max) })
  )
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - A string to repeat.
 * @param {int} number - The number of times to repeat the string
 * @return {string} a string which was repeated
 */
function Repeat(value, number) {
  arity.between(1, 2, arguments, Repeat.name);
  number = defaults(number, null);
  return new Expr_1(params({ repeat: wrap(value) }, { number: wrap(number) }))
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - A string to search.
 * @param {string} find - The string to find in the search string
 * @param {string} replace - The string to replace in the search string
 * @return {String} all the occurrences of find substituted with replace string
 */
function ReplaceStr(value, find, replace) {
  arity.exact(3, arguments, ReplaceStr.name);
  return new Expr_1({
    replacestr: wrap(value),
    find: wrap(find),
    replace: wrap(replace),
  })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - A string to search.
 * @param {string} pattern - The pattern to find in the search string using a java regular expression syntax
 * @param {string} replace - The string to replace in the search string
 * @param {boolean} first - Replace all or just the first
 * @return {string} all the occurrences of find pattern substituted with replace string
 */
function ReplaceStrRegex(value, pattern, replace, first) {
  arity.between(3, 4, arguments, ReplaceStrRegex.name);
  first = defaults(first, null);
  return new Expr_1(
    params(
      {
        replacestrregex: wrap(value),
        pattern: wrap(pattern),
        replace: wrap(replace),
      },
      { first: wrap(first) }
    )
  )
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to remove white space from the end.
 * @return {string} the string with trailing whitespaces removed
 */
function RTrim(value) {
  arity.exact(1, arguments, RTrim.name);
  return new Expr_1({ rtrim: wrap(value) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {int} num - The string of N Space(s).
 * @return {string} a string with spaces
 */
function Space(num) {
  arity.exact(1, arguments, Space.name);
  return new Expr_1({ space: wrap(num) })
}
/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value  The string to SubString.
 * @param {int} start  The position the first character of the return string begins at
 * @param {int} length  An optional length, if omitted then returns to the end of string
 * @return {string}
 */
function SubString(value, start, length) {
  arity.between(1, 3, arguments, SubString.name);
  start = defaults(start, null);
  length = defaults(length, null);
  return new Expr_1(
    params(
      { substring: wrap(value) },
      { start: wrap(start), length: wrap(length) }
    )
  )
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to TitleCase.
 * @return {string}  A string converted to titlecase
 */
function TitleCase(value) {
  arity.exact(1, arguments, TitleCase.name);
  return new Expr_1({ titlecase: wrap(value) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to Trim.
 * @return {string} a string with leading and trailing whitespace removed
 */
function Trim(value) {
  arity.exact(1, arguments, Trim.name);
  return new Expr_1({ trim: wrap(value) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#string-functions).
 *
 * @param {string} value - The string to Uppercase.
 * @return {string} An uppercase string
 */
function UpperCase(value) {
  arity.exact(1, arguments, UpperCase.name);
  return new Expr_1({ uppercase: wrap(value) })
}

/**
 * Format values into a string.
 *
 * @param  {string}  string string with format specifiers
 * @param  {array}   values list of values to format
 * @return {string}         a string
 */
function Format(string) {
  arity.min(1, arguments, Format.name);
  var args = argsToArray(arguments);
  args.shift();
  return new Expr_1({ format: wrap(string), values: wrap(varargs(args)) })
}

// Time and date functions
/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#time-and-date).
 *
 * @param {module:query~ExprArg} string
 *   A string to converted to a time object.
 * @return {Expr}
 */
function Time(string) {
  arity.exact(1, arguments, Time.name);
  return new Expr_1({ time: wrap(string) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#time-and-date).
 *
 * @param {module:query~ExprArg} number
 *   The number of `unit`s from Epoch
 * @param {module:query~ExprArg} unit
 *   The unit of `number`. One of second, millisecond, microsecond, nanosecond.
 * @return {Expr}
 */
function Epoch(number, unit) {
  arity.exact(2, arguments, Epoch.name);
  return new Expr_1({ epoch: wrap(number), unit: wrap(unit) })
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/timeadd).
 *
 * Returns a new time or date with the offset in terms of the unit
 * added.
 *
 * @param base the base time or data
 * @param offset the number of units
 * @param unit the unit type
 * @return {Expr}
 */
function TimeAdd(base, offset, unit) {
  arity.exact(3, arguments, TimeAdd.name);
  return new Expr_1({
    time_add: wrap(base),
    offset: wrap(offset),
    unit: wrap(unit),
  })
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/timesubtract).
 *
 * Returns a new time or date with the offset in terms of the unit
 * subtracted.
 *
 * @param base the base time or data
 * @param offset the number of units
 * @param unit the unit type
 * @return {Expr}
 */
function TimeSubtract(base, offset, unit) {
  arity.exact(3, arguments, TimeSubtract.name);
  return new Expr_1({
    time_subtract: wrap(base),
    offset: wrap(offset),
    unit: wrap(unit),
  })
}

/**
 * See the [docs](https://docs.fauna.com/fauna/current/api/fql/functions/timediff).
 *
 * Returns the number of intervals in terms of the unit between
 * two times or dates. Both start and finish must be of the same
 * type.
 *
 * @param start the starting time or date, inclusive
 * @param finish the ending time or date, exclusive
 * @param unit the unit type
 * @return {Expr}
 */
function TimeDiff(start, finish, unit) {
  arity.exact(3, arguments, TimeDiff.name);
  return new Expr_1({
    time_diff: wrap(start),
    other: wrap(finish),
    unit: wrap(unit),
  })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#time-and-date).
 *
 * @param {module:query~ExprArg} string
 *   A string to convert to a Date object
 * @return {Expr}
 */
function Date$1(string) {
  arity.exact(1, arguments, Date$1.name);
  return new Expr_1({ date: wrap(string) })
}

/**
 * Returns the current snapshot time.
 *
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/now">Now function</a>
 */
function Now() {
  arity.exact(0, arguments, Now.name);
  return new Expr_1({ now: wrap(null) })
}

// Miscellaneous functions

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @deprecated use NewId instead
 * @return {Expr}
 */
function NextId() {
  arity.exact(0, arguments, NextId.name);
  return new Expr_1({ next_id: null })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @return {Expr}
 */
function NewId() {
  arity.exact(0, arguments, NewId.name);
  return new Expr_1({ new_id: null })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the database.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the database's scope.
 * @return {Expr}
 */
function Database(name, scope) {
  arity.between(1, 2, arguments, Database.name);
  switch (arguments.length) {
    case 1:
      return new Expr_1({ database: wrap(name) })
    case 2:
      return new Expr_1({ database: wrap(name), scope: wrap(scope) })
  }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the index.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the index's scope.
 * @return {Expr}
 */
function Index(name, scope) {
  arity.between(1, 2, arguments, Index.name);
  switch (arguments.length) {
    case 1:
      return new Expr_1({ index: wrap(name) })
    case 2:
      return new Expr_1({ index: wrap(name), scope: wrap(scope) })
  }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the class.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the class's scope.
 * @return {Expr}
 *
 * @deprecated Class is deprecated, use Collection instead
 */
function Class(name, scope) {
  arity.between(1, 2, arguments, Class.name);
  switch (arguments.length) {
    case 1:
      return new Expr_1({ class: wrap(name) })
    case 2:
      return new Expr_1({ class: wrap(name), scope: wrap(scope) })
  }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the collection.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the collection's scope.
 * @return {Expr}
 */
function Collection(name, scope) {
  arity.between(1, 2, arguments, Collection.name);
  switch (arguments.length) {
    case 1:
      return new Expr_1({ collection: wrap(name) })
    case 2:
      return new Expr_1({ collection: wrap(name), scope: wrap(scope) })
  }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the user defined function.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the user defined function's scope.
 * @return {Expr}
 */
function FunctionFn(name, scope) {
  arity.between(1, 2, arguments, FunctionFn.name);
  switch (arguments.length) {
    case 1:
      return new Expr_1({ function: wrap(name) })
    case 2:
      return new Expr_1({ function: wrap(name), scope: wrap(scope) })
  }
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} name
 *   The name of the role.
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the role's scope.
 * @return {Expr}
 */
function Role(name, scope) {
  arity.between(1, 2, arguments, Role.name);
  scope = defaults(scope, null);
  return new Expr_1(params({ role: wrap(name) }, { scope: wrap(scope) }))
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `classes` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the class set's scope.
 * @return {Expr}
 */
function Classes(scope) {
  arity.max(1, arguments, Classes.name);
  scope = defaults(scope, null);
  return new Expr_1({ classes: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `collections` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the collection set's scope.
 * @return {Expr}
 */
function Collections(scope) {
  arity.max(1, arguments, Collections.name);
  scope = defaults(scope, null);
  return new Expr_1({ collections: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `databases` functions that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the database set's scope.
 * @return {Expr}
 */
function Databases(scope) {
  arity.max(1, arguments, Databases.name);
  scope = defaults(scope, null);
  return new Expr_1({ databases: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs an `indexes` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the index set's scope.
 * @return {Expr}
 */
function Indexes(scope) {
  arity.max(1, arguments, Indexes.name);
  scope = defaults(scope, null);
  return new Expr_1({ indexes: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `functions` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the user defined function set's scope.
 * @return {Expr}
 */
function Functions(scope) {
  arity.max(1, arguments, Functions.name);
  scope = defaults(scope, null);
  return new Expr_1({ functions: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `roles` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the role set's scope.
 * @return {Expr}
 */
function Roles(scope) {
  arity.max(1, arguments, Roles.name);
  scope = defaults(scope, null);
  return new Expr_1({ roles: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `keys` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the key set's scope.
 * @return {Expr}
 */
function Keys(scope) {
  arity.max(1, arguments, Keys.name);
  scope = defaults(scope, null);
  return new Expr_1({ keys: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `tokens` function that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the token set's scope.
 * @return {Expr}
 */
function Tokens(scope) {
  arity.max(1, arguments, Tokens.name);
  scope = defaults(scope, null);
  return new Expr_1({ tokens: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * Constructs a `credentials` functions that, when evaluated, returns a Ref value.
 *
 * @param {module:query~ExprArg} [scope]
 *   The Ref of the credential set's scope.
 * @return {Expr}
 */
function Credentials(scope) {
  arity.max(1, arguments, Credentials.name);
  scope = defaults(scope, null);
  return new Expr_1({ credentials: wrap(scope) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of expressions to check for equivalence.
 * @return {Expr}
 */
function Equals() {
  arity.min(1, arguments, Equals.name);
  return new Expr_1({ equals: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} path
 *   An array representing a path to check for the existence of.
 * @param {module:query~ExprArg} in
 *   An object to search against.
 * @return {Expr}
 */
function Contains(path, _in) {
  arity.exact(2, arguments, Contains.name);
  return new Expr_1({ contains: wrap(path), in: wrap(_in) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} path
 *   An array representing a path to pull from an object.
 * @param {module:query~ExprArg} from
 *   The object to select from
 * @param {?module:query~ExprArg} default
 *   A default value if the path does not exist.
 * @return {Expr}
 */
function Select(path, from, _default) {
  arity.between(2, 3, arguments, Select.name);
  var exprObj = { select: wrap(path), from: wrap(from) };
  if (_default !== undefined) {
    exprObj.default = wrap(_default);
  }
  return new Expr_1(exprObj)
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#miscellaneous-functions).
 *
 * @param {module:query~ExprArg} path
 *   An array representing a path to pull from an object.
 * @param {module:query~ExprArg} from
 *   The object to select from
 * @return {Expr}
 *
 * @deprecated avoid using
 */
function SelectAll(path, from) {
  arity.exact(2, arguments, SelectAll.name);
  return new Expr_1({ select_all: wrap(path), from: wrap(from) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A numbers to provide the absolute value.
 * @return {Expr}
 */
function Abs(expr) {
  arity.exact(1, arguments, Abs.name);
  return new Expr_1({ abs: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to sum together.
 * @return {Expr}
 */
function Add() {
  arity.min(1, arguments, Add.name);
  return new Expr_1({ add: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to bitwise and together.
 * @return {Expr}
 */
function BitAnd() {
  arity.min(1, arguments, BitAnd.name);
  return new Expr_1({ bitand: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A numbers to provide the bitwise not.
 * @return {Expr}
 */
function BitNot(expr) {
  arity.exact(1, arguments, BitNot.name);
  return new Expr_1({ bitnot: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to bitwise Or'd together.
 * @return {Expr}
 */
function BitOr() {
  arity.min(1, arguments, BitOr.name);
  return new Expr_1({ bitor: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to bitwise Xor'd together.
 * @return {Expr}
 */
function BitXor() {
  arity.min(1, arguments, BitXor.name);
  return new Expr_1({ bitxor: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The least integer that is greater than or equal to the number
 * @return {Expr}
 */
function Ceil(expr) {
  arity.exact(1, arguments, Ceil.name);
  return new Expr_1({ ceil: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to compute the quotient of.
 * @return {Expr}
 */
function Divide() {
  arity.min(1, arguments, Divide.name);
  return new Expr_1({ divide: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The greatest integer that is less than or equal to the number
 * @return {Expr}
 */
function Floor(expr) {
  arity.exact(1, arguments, Floor.name);
  return new Expr_1({ floor: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to multiply together.
 * @return {Expr}
 */
function Max() {
  arity.min(1, arguments, Max.name);
  return new Expr_1({ max: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to multiply together.
 * @return {Expr}
 */
function Min() {
  arity.min(1, arguments, Min.name);
  return new Expr_1({ min: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to compute the quotient of. The remainder will be returned.
 * @return {Expr}
 */
function Modulo() {
  arity.min(1, arguments, Modulo.name);
  return new Expr_1({ modulo: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to multiply together.
 * @return {Expr}
 */
function Multiply() {
  arity.min(1, arguments, Multiply.name);
  return new Expr_1({ multiply: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A numbers to round.
 * @param {...module:query~ExprArg} terms
 *   An optional precision
 * @return {Expr}
 */
function Round(value, precision) {
  arity.min(1, arguments, Round.name);
  precision = defaults(precision, null);
  return new Expr_1(
    params({ round: wrap(value) }, { precision: wrap(precision) })
  )
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of numbers to compute the difference of.
 * @return {Expr}
 */
function Subtract() {
  arity.min(1, arguments, Subtract.name);
  return new Expr_1({ subtract: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The sign of the number is returned as positive 1, zero 0 , negative -1
 * @return {Expr}
 */
function Sign(expr) {
  arity.exact(1, arguments, Sign.name);
  return new Expr_1({ sign: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The square root of the number
 * @return {Expr}
 */
function Sqrt(expr) {
  arity.exact(1, arguments, Sqrt.name);
  return new Expr_1({ sqrt: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A numbers to truncate.
 * @param {...module:query~ExprArg} terms
 *   An optional precision
 * @return {Expr}
 */
function Trunc(value, precision) {
  arity.min(1, arguments, Trunc.name);
  precision = defaults(precision, null);
  return new Expr_1(
    params({ trunc: wrap(value) }, { precision: wrap(precision) })
  )
}

/**
 *
 * Count the number of elements in the collection.
 *
 * @param {array}    - array of items
 * @return {integer} - number of items in the collection
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/count">Count function</a>
 */
function Count(collection) {
  arity.exact(1, arguments, Count.name);
  return new Expr_1({ count: wrap(collection) })
}

/**
 *
 * Sum the elements in the collection.
 *
 * @param {array} - collection of numbers
 * @return {integer} - total of all numbers in collection
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/sum">Sum function</a>
 */
function Sum(collection) {
  arity.exact(1, arguments, Sum.name);
  return new Expr_1({ sum: wrap(collection) })
}

/**
 *
 * Returns the mean of all elements in the collection.
 *
 * @param {array} - collection the numbers
 * @return {float} - the mean of all numbers in the collection
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/mean">Mean function</a>
 */
function Mean(collection) {
  arity.exact(1, arguments, Mean.name);
  return new Expr_1({ mean: wrap(collection) })
}

/**
 *
 * Evaluates to true if any element of the collection is true.
 *
 * @param {array} - collection the collection
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/any">Any function</a>
 */
function Any(collection) {
  arity.exact(1, arguments, Any.name);
  return new Expr_1({ any: wrap(collection) })
}

/**
 *
 * Evaluates to true if all elements of the collection are true.
 *
 * @param {array} - collection the collection
 * @return {Expr}
 * @see <a href="https://docs.fauna.com/fauna/current/api/fql/functions/all">All function</a>
 */
function All(collection) {
  arity.exact(1, arguments, All.name);
  return new Expr_1({ all: wrap(collection) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The arc cosine of the number
 * @return {Expr}
 */
function Acos(expr) {
  arity.exact(1, arguments, Acos.name);
  return new Expr_1({ acos: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The arc sine of the number
 * @return {Expr}
 */
function Asin(expr) {
  arity.exact(1, arguments, Asin.name);
  return new Expr_1({ asin: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The arc tangent of the number
 * @return {Expr}
 */
function Atan(expr) {
  arity.exact(1, arguments, Atan.name);
  return new Expr_1({ atan: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The cosine of a number
 * @return {Expr}
 */
function Cos(expr) {
  arity.exact(1, arguments, Cos.name);
  return new Expr_1({ cos: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The hyperbolic cosine of the number
 * @return {Expr}
 */
function Cosh(expr) {
  arity.exact(1, arguments, Cosh.name);
  return new Expr_1({ cosh: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   Take radians and convert it to degrees 360 degrees = 2 * pi radians
 * @return {Expr}
 */
function Degrees(expr) {
  arity.exact(1, arguments, Degrees.name);
  return new Expr_1({ degrees: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The e raised to an exponent number
 * @return {Expr}
 */
function Exp(expr) {
  arity.exact(1, arguments, Exp.name);
  return new Expr_1({ exp: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A side of the right triangle
 * @param {...module:query~ExprArg} terms
 *   The second side of a right triange, defaults to the first side
 * @return {Expr}
 */
function Hypot(value, side) {
  arity.min(1, arguments, Hypot.name);
  side = defaults(side, null);
  return new Expr_1(params({ hypot: wrap(value) }, { b: wrap(side) }))
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The natural log of the number
 * @return {Expr}
 */
function Ln(expr) {
  arity.exact(1, arguments, Ln.name);
  return new Expr_1({ ln: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The log base 10 of a number
 * @return {Expr}
 */
function Log(expr) {
  arity.exact(1, arguments, Log.name);
  return new Expr_1({ log: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A numbers to raise to the power.
 * @param {...module:query~ExprArg} terms
 *   An optional exponent
 * @return {Expr}
 */
function Pow(value, exponent) {
  arity.min(1, arguments, Pow.name);
  exponent = defaults(exponent, null);
  return new Expr_1(params({ pow: wrap(value) }, { exp: wrap(exponent) }))
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   Take degrees and convert the number to radians 2 * pi = 360 degrees
 * @return {Expr}
 */
function Radians(expr) {
  arity.exact(1, arguments, Radians.name);
  return new Expr_1({ radians: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The sine of a number
 * @return {Expr}
 */
function Sin(expr) {
  arity.exact(1, arguments, Sin.name);
  return new Expr_1({ sin: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The hyperbolic sine of a number
 * @return {Expr}
 */
function Sinh(expr) {
  arity.exact(1, arguments, Sinh.name);
  return new Expr_1({ sinh: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The Tangent of a number
 * @return {Expr}
 */
function Tan(expr) {
  arity.exact(1, arguments, Tan.name);
  return new Expr_1({ tan: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#mathematical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   The hyberbolic tangent of a number
 * @return {Expr}
 */
function Tanh(expr) {
  arity.exact(1, arguments, Tanh.name);
  return new Expr_1({ tanh: wrap(expr) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of terms to compare.
 * @return {Expr}
 */
function LT() {
  arity.min(1, arguments, LT.name);
  return new Expr_1({ lt: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of terms to compare.
 * @return {Expr}
 */
function LTE() {
  arity.min(1, arguments, LTE.name);
  return new Expr_1({ lte: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of terms to compare.
 * @return {Expr}
 */
function GT() {
  arity.min(1, arguments, GT.name);
  return new Expr_1({ gt: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection of terms to compare.
 * @return {Expr}
 */
function GTE() {
  arity.min(1, arguments, GTE.name);
  return new Expr_1({ gte: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection to compute the conjunction of.
 * @return {Expr}
 */
function And() {
  arity.min(1, arguments, And.name);
  return new Expr_1({ and: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {...module:query~ExprArg} terms
 *   A collection to compute the disjunction of.
 * @return {Expr}
 */
function Or() {
  arity.min(1, arguments, Or.name);
  return new Expr_1({ or: wrap(varargs(arguments)) })
}

/**
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi#logical-functions).
 *
 * @param {module:query~ExprArg} boolean
 *   A boolean to produce the negation of.
 * @return {Expr}
 */
function Not(boolean) {
  arity.exact(1, arguments, Not.name);
  return new Expr_1({ not: wrap(boolean) })
}

/**
 * Converts an expression to a string literal.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a string.
 * @return {Expr}
 */
function ToString(expr) {
  arity.exact(1, arguments, ToString.name);
  return new Expr_1({ to_string: wrap(expr) })
}

/**
 * Converts an expression to a number literal.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a number.
 * @return {Expr}
 */
function ToNumber(expr) {
  arity.exact(1, arguments, ToNumber.name);
  return new Expr_1({ to_number: wrap(expr) })
}

/**
 * Converts an expression to an Object.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to an Object.
 * @return {Expr}
 */
function ToObject(expr) {
  arity.exact(1, arguments, ToObject.name);
  return new Expr_1({ to_object: wrap(expr) })
}

/**
 * Converts an expression to an Array.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to an Array.
 * @return {Expr}
 */
function ToArray(expr) {
  arity.exact(1, arguments, ToArray.name);
  return new Expr_1({ to_array: wrap(expr) })
}

/**
 * Converts an expression to a double value, if possible.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a double.
 * @return {Expr}
 */
function ToDouble(expr) {
  arity.exact(1, arguments, ToDouble.name);
  return new Expr_1({ to_double: wrap(expr) })
}

/**
 * Converts an expression to an integer value, if possible.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to an integer.
 * @return {Expr}
 */
function ToInteger(expr) {
  arity.exact(1, arguments, ToInteger.name);
  return new Expr_1({ to_integer: wrap(expr) })
}

/**
 * Converts an expression to a time literal.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a time.
 * @return {Expr}
 */
function ToTime(expr) {
  arity.exact(1, arguments, ToTime.name);
  return new Expr_1({ to_time: wrap(expr) })
}

/**
 * Converts an expression evaluating to a time to seconds since epoch.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to seconds numeric value.
 * @return {Expr}
 */
function ToSeconds(expr) {
  arity.exact(1, arguments, ToSeconds.name);
  return new Expr_1({ to_seconds: wrap(expr) })
}

/**
 * Converts a time expression to milliseconds since the UNIX epoch.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to millisecond numeric value.
 * @return {Expr}
 */
function ToMillis(expr) {
  arity.exact(1, arguments, ToMillis.name);
  return new Expr_1({ to_millis: wrap(expr) })
}

/**
 * Converts a time expression to microseconds since the UNIX epoch.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to microsecond numeric value.
 * @return {Expr}
 */
function ToMicros(expr) {
  arity.exact(1, arguments, ToMicros.name);
  return new Expr_1({ to_micros: wrap(expr) })
}

/**
 * Returns a time expression's day of the week following ISO-8601 convention, from 1 (Monday) to 7 (Sunday).
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to day of week.
 * @return {Expr}
 */
function DayOfWeek(expr) {
  arity.exact(1, arguments, DayOfWeek.name);
  return new Expr_1({ day_of_week: wrap(expr) })
}

/**
 * Returns a time expression's day of the year, from 1 to 365, or 366 in a leap year.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to day of year.
 * @return {Expr}
 */
function DayOfYear(expr) {
  arity.exact(1, arguments, DayOfYear.name);
  return new Expr_1({ day_of_year: wrap(expr) })
}

/**
 * Returns a time expression's day of the month, from 1 to 31.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to day of month.
 * @return {Expr}
 */
function DayOfMonth(expr) {
  arity.exact(1, arguments, DayOfMonth.name);
  return new Expr_1({ day_of_month: wrap(expr) })
}

/**
 * Returns a time expression's second of the minute, from 0 to 59.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a hour.
 * @return {Expr}
 */
function Hour(expr) {
  arity.exact(1, arguments, Hour.name);
  return new Expr_1({ hour: wrap(expr) })
}

/**
 * Returns a time expression's second of the minute, from 0 to 59.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a month.
 * @return {Expr}
 */
function Minute(expr) {
  arity.exact(1, arguments, Minute.name);
  return new Expr_1({ minute: wrap(expr) })
}

/**
 * Returns a time expression's second of the minute, from 0 to 59.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a month.
 * @return {Expr}
 */
function Second(expr) {
  arity.exact(1, arguments, Second.name);
  return new Expr_1({ second: wrap(expr) })
}

/**
 * Returns a time expression's month of the year, from 1 to 12.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a month.
 * @return {Expr}
 */
function Month(expr) {
  arity.exact(1, arguments, Month.name);
  return new Expr_1({ month: wrap(expr) })
}

/**
 * Returns the time expression's year, following the ISO-8601 standard.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a year.
 * @return {Expr}
 */
function Year(expr) {
  arity.exact(1, arguments, Year.name);
  return new Expr_1({ year: wrap(expr) })
}

/**
 * Converts an expression to a date literal.
 *
 * @param {module:query~ExprArg} expression
 *   An expression to convert to a date.
 * @return {Expr}
 */
function ToDate(expr) {
  arity.exact(1, arguments, ToDate.name);
  return new Expr_1({ to_date: wrap(expr) })
}

/**
 * Move database to a new hierarchy.
 *
 * @param {string}  from database reference to be moved.
 * @param {string}  to new parent database reference.
 * @return {Expr}   The expression wrapping the provided object.
 * @see <a href="https://app.fauna.com/documentation/reference/queryapi#write-functions">FaunaDB Write Functions</a>
 */
function MoveDatabase(from, to) {
  arity.exact(2, arguments, MoveDatabase.name);
  return new Expr_1({ move_database: wrap(from), to: wrap(to) })
}

/**
 * Returns a set of all documents in the given collection.
 * A set must be paginated in order to retrieve its values.
 *
 * @param collection a reference to the collection. Type: Ref
 * @return a new {@link Expr} instance
 * @see #Paginate(Expr)
 */
function Documents(collection) {
  arity.exact(1, arguments, Documents.name);
  return new Expr_1({ documents: wrap(collection) })
}

// Helpers

/**
 * @ignore
 */
function arity(min, max, args, callerFunc) {
  if (
    (min !== null && args.length < min) ||
    (max !== null && args.length > max)
  ) {
    throw new errors.InvalidArity(min, max, args.length, callerFunc)
  }
}

arity.exact = function(n, args, callerFunc) {
  arity(n, n, args, callerFunc);
};
arity.max = function(n, args, callerFunc) {
  arity(null, n, args, callerFunc);
};
arity.min = function(n, args, callerFunc) {
  arity(n, null, args, callerFunc);
};
arity.between = function(min, max, args, callerFunc) {
  arity(min, max, args, callerFunc);
};

/** Adds optional parameters to the query.
 *
 * @ignore
 * */
function params(mainParams, optionalParams) {
  for (var key in optionalParams) {
    var val = optionalParams[key];
    if (val !== null) {
      mainParams[key] = val;
    }
  }
  return mainParams
}

/**
 * Called on rest arguments.
 * This ensures that a single value passed is not put in an array, so
 * `query.add([1, 2])` will work as well as `query.add(1, 2)`.
 *
 * @ignore
 */
function varargs(values) {
  var valuesAsArr = Array.isArray(values)
    ? values
    : Array.prototype.slice.call(values);
  return values.length === 1 ? values[0] : valuesAsArr
}

/**
 * @ignore
 */
function argsToArray(args) {
  var rv = [];
  rv.push.apply(rv, args);
  return rv
}

/**
 * @ignore
 */
function defaults(param, def) {
  if (param === undefined) {
    return def
  } else {
    return param
  }
}

/**
 * Wraps an object as an Expression. This will automatically wrap any bare objects with
 * the appropriate {@link object} escaping.
 * @param {Object} obj
 *  The object to be wrapped as an Expression.
 * @returns {Expr}
 *   The expression wrapping the provided object.
 * @private
 */
function wrap(obj) {
  arity.exact(1, arguments, wrap.name);
  if (obj === null) {
    return null
  } else if (
    obj instanceof Expr_1 ||
    _util.checkInstanceHasProperty(obj, '_isFaunaExpr')
  ) {
    return obj
  } else if (typeof obj === 'symbol') {
    return obj.toString().replace(/Symbol\((.*)\)/, function(str, symbol) {
      return symbol
    })
  } else if (typeof obj === 'function') {
    return Lambda(obj)
  } else if (Array.isArray(obj)) {
    return new Expr_1(
      obj.map(function(elem) {
        return wrap(elem)
      })
    )
  } else if (obj instanceof Uint8Array || obj instanceof ArrayBuffer) {
    return new values.Bytes(obj)
  } else if (typeof obj === 'object') {
    return new Expr_1({ object: wrapValues(obj) })
  } else {
    return obj
  }
}

/**
 * Wraps all of the values of a provided Object, while leaving the parent object unwrapped.
 * @param {Object} obj
 *  The object whose values are to be wrapped as Expressions.
 * @returns {Object}
 *  A copy of the provided object, with the values wrapped as Expressions.
 * @private
 */
function wrapValues(obj) {
  if (obj !== null) {
    var rv = {};

    Object.keys(obj).forEach(function(key) {
      rv[key] = wrap(obj[key]);
    });

    return rv
  } else {
    return null
  }
}

var query = {
  Ref: Ref$1,
  Bytes: Bytes$1,
  Abort: Abort,
  At: At,
  Let: Let,
  Var: Var,
  If: If,
  Do: Do,
  Object: objectFunction,
  Lambda: Lambda,
  Call: Call,
  Query: Query$1,
  Map: Map,
  Foreach: Foreach,
  Filter: Filter,
  Take: Take,
  Drop: Drop,
  Prepend: Prepend,
  Append: Append,
  IsEmpty: IsEmpty,
  IsNonEmpty: IsNonEmpty,
  IsNumber: IsNumber,
  IsDouble: IsDouble,
  IsInteger: IsInteger,
  IsBoolean: IsBoolean,
  IsNull: IsNull,
  IsBytes: IsBytes,
  IsTimestamp: IsTimestamp,
  IsDate: IsDate,
  IsString: IsString,
  IsArray: IsArray,
  IsObject: IsObject,
  IsRef: IsRef,
  IsSet: IsSet,
  IsDoc: IsDoc,
  IsLambda: IsLambda,
  IsCollection: IsCollection,
  IsDatabase: IsDatabase,
  IsIndex: IsIndex,
  IsFunction: IsFunction,
  IsKey: IsKey,
  IsToken: IsToken,
  IsCredentials: IsCredentials,
  IsRole: IsRole,
  Get: Get,
  KeyFromSecret: KeyFromSecret,
  Reduce: Reduce,
  Paginate: Paginate,
  Exists: Exists,
  Create: Create,
  Update: Update,
  Replace: Replace,
  Delete: Delete,
  Insert: Insert,
  Remove: Remove,
  CreateClass: browser(
    CreateClass,
    'CreateClass() is deprecated, use CreateCollection() instead'
  ),
  CreateCollection: CreateCollection,
  CreateDatabase: CreateDatabase,
  CreateIndex: CreateIndex,
  CreateKey: CreateKey,
  CreateFunction: CreateFunction,
  CreateRole: CreateRole,
  Singleton: Singleton,
  Events: Events,
  Match: Match,
  Union: Union,
  Merge: Merge,
  Intersection: Intersection,
  Difference: Difference,
  Distinct: Distinct,
  Join: Join,
  Range: Range,
  Login: Login,
  Logout: Logout,
  Identify: Identify,
  Identity: Identity,
  HasIdentity: HasIdentity,
  Concat: Concat,
  Casefold: Casefold,
  ContainsStr: ContainsStr,
  ContainsStrRegex: ContainsStrRegex,
  StartsWith: StartsWith,
  EndsWith: EndsWith,
  FindStr: FindStr,
  FindStrRegex: FindStrRegex,
  Length: Length,
  LowerCase: LowerCase,
  LTrim: LTrim,
  NGram: NGram,
  Repeat: Repeat,
  ReplaceStr: ReplaceStr,
  ReplaceStrRegex: ReplaceStrRegex,
  RegexEscape: RegexEscape,
  RTrim: RTrim,
  Space: Space,
  SubString: SubString,
  TitleCase: TitleCase,
  Trim: Trim,
  UpperCase: UpperCase,
  Format: Format,
  Time: Time,
  TimeAdd: TimeAdd,
  TimeSubtract: TimeSubtract,
  TimeDiff: TimeDiff,
  Epoch: Epoch,
  Date: Date$1,
  Now: Now,
  NextId: browser(NextId, 'NextId() is deprecated, use NewId() instead'),
  NewId: NewId,
  Database: Database,
  Index: Index,
  Class: browser(Class, 'Class() is deprecated, use Collection() instead'),
  Collection: Collection,
  Function: FunctionFn,
  Role: Role,
  Classes: browser(
    Classes,
    'Classes() is deprecated, use Collections() instead'
  ),
  Collections: Collections,
  Databases: Databases,
  Indexes: Indexes,
  Functions: Functions,
  Roles: Roles,
  Keys: Keys,
  Tokens: Tokens,
  Credentials: Credentials,
  Equals: Equals,
  Contains: Contains,
  Select: Select,
  SelectAll: browser(SelectAll, 'SelectAll() is deprecated. Avoid use.'),
  Abs: Abs,
  Add: Add,
  BitAnd: BitAnd,
  BitNot: BitNot,
  BitOr: BitOr,
  BitXor: BitXor,
  Ceil: Ceil,
  Divide: Divide,
  Floor: Floor,
  Max: Max,
  Min: Min,
  Modulo: Modulo,
  Multiply: Multiply,
  Round: Round,
  Subtract: Subtract,
  Sign: Sign,
  Sqrt: Sqrt,
  Trunc: Trunc,
  Count: Count,
  Sum: Sum,
  Mean: Mean,
  Any: Any,
  All: All,
  Acos: Acos,
  Asin: Asin,
  Atan: Atan,
  Cos: Cos,
  Cosh: Cosh,
  Degrees: Degrees,
  Exp: Exp,
  Hypot: Hypot,
  Ln: Ln,
  Log: Log,
  Pow: Pow,
  Radians: Radians,
  Sin: Sin,
  Sinh: Sinh,
  Tan: Tan,
  Tanh: Tanh,
  LT: LT,
  LTE: LTE,
  GT: GT,
  GTE: GTE,
  And: And,
  Or: Or,
  Not: Not,
  ToString: ToString,
  ToNumber: ToNumber,
  ToObject: ToObject,
  ToArray: ToArray,
  ToDouble: ToDouble,
  ToInteger: ToInteger,
  ToTime: ToTime,
  ToSeconds: ToSeconds,
  ToMicros: ToMicros,
  ToMillis: ToMillis,
  DayOfMonth: DayOfMonth,
  DayOfWeek: DayOfWeek,
  DayOfYear: DayOfYear,
  Second: Second,
  Minute: Minute,
  Hour: Hour,
  Month: Month,
  Year: Year,
  ToDate: ToDate,
  MoveDatabase: MoveDatabase,
  Documents: Documents,
  wrap: wrap,
};

function toJSON(object, pretty) {
  pretty = typeof pretty !== 'undefined' ? pretty : false;

  if (pretty) {
    return JSON.stringify(object, null, '  ')
  } else {
    return JSON.stringify(object)
  }
}

function parseJSON(json) {
  return JSON.parse(json, json_parse)
}

function json_parse(_, val) {
  if (typeof val !== 'object' || val === null) {
    return val
  } else if ('@ref' in val) {
    var ref = val['@ref'];

    if (!('collection' in ref) && !('database' in ref)) {
      return values.Native.fromName(ref['id'])
    }

    var col = json_parse('collection', ref['collection']);
    var db = json_parse('database', ref['database']);

    return new values.Ref(ref['id'], col, db)
  } else if ('@obj' in val) {
    return val['@obj']
  } else if ('@set' in val) {
    return new values.SetRef(val['@set'])
  } else if ('@ts' in val) {
    return new values.FaunaTime(val['@ts'])
  } else if ('@date' in val) {
    return new values.FaunaDate(val['@date'])
  } else if ('@bytes' in val) {
    return new values.Bytes(val['@bytes'])
  } else if ('@query' in val) {
    return new values.Query(val['@query'])
  } else {
    return val
  }
}

var _json = {
  toJSON: toJSON,
  parseJSON: parseJSON,
};

/**
 * A structure containing the request and response context for a given FaunaDB request.
 * Provided to an observer function optionally defined in the {@link Client} constructor.
 *
 * @param {'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'} method
 *   The HTTP method used in the request.
 * @param {string} path
 *   The path that was queried. Relative to the client's domain.
 * @param {string} query
 *   URL query parameters. Only set if `method` is "GET".
 * @param {Object} requestRaw
 *   The JSON request string.
 * @param {Object} requestContent
 *   The request data.
 * @param {string} responseRaw
 *   The unparsed response data, as a string.
 * @param {object} responseContent
 *   The response data parsed as JSON.
 * @param {number} statusCode
 *   The HTTP response status code.
 * @param {object} responseHeaders
 *   The HTTP headers returned in the response.
 * @param {number} startTime
 *   The time the request was issued by the client.
 * @param {number} endTime
 *   The time the response was received by the client.
 * @constructor
 */
function RequestResult(
  method,
  path,
  query,
  requestRaw,
  requestContent,
  responseRaw,
  responseContent,
  statusCode,
  responseHeaders,
  startTime,
  endTime
) {
  /** @type {'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'} */
  this.method = method;

  /** @type {string} */
  this.path = path;

  /**
   * URL query. Null unless `method == 'get'`.
   * *Not* related to {@link Client.query}.
   * @type {object}
   */
  this.query = query;

  /** @type {string} */
  this.requestRaw = requestRaw;

  /** @type {object} */
  this.requestContent = requestContent;

  /** @type {string} */
  this.responseRaw = responseRaw;

  /**
   * Parsed value returned by the server.
   * Includes "resource" wrapper dict, or may be an "errors" dict instead.
   * @type {object}
   */
  this.responseContent = responseContent;

  /** @type {number} */
  this.statusCode = statusCode;

  /** @type {object} */
  this.responseHeaders = responseHeaders;

  /** @type {number} */
  this.startTime = startTime;

  /** @type {number} */
  this.endTime = endTime;
}

/**
 * `this.endTime - this.startTime`: Time taken in milliseconds.
 * @type {number}
 */
Object.defineProperty(RequestResult.prototype, 'timeTaken', {
  get: function() {
    return this.endTime - this.startTime
  },
});

var RequestResult_1 = RequestResult;

/**
 * A FaunaDB Lambda expression to be passed into one of the collection
 * functions: Map or Filter.
 *
 * @callback PageHelper~collectionFunction
 * @param {any} var
 *   The variable passed in by FaunaDB when this Lambda
 *   function is executed.
 * @return {Expr}
 *   The FaunaDB query expression to be returned by this Lambda.
 */

/**
 * @callback PageHelper~eachFunction
 * @param {Object} page
 *   A page returned by FaunaDB's Paginate function.
 */

/**
 * A wrapper that provides a helpful API for consuming FaunaDB pages.
 *
 * Generally this is constructed through the {@link Client#paginate} method.
 *
 * The {@link PageHelper#map} and {@link PageHelper#filter} methods will wrap the underlying query with a Map
 * and Filter query function, respectively. These will be executed on the server when a promise-returning function
 * is called.
 *
 * The {@link PageHelper#each} and {@link PageHelper#eachReverse} functions dispatch queries to FaunaDB, and return Promises
 * representing the completion of those queries. The callbacks provided to these functions are executed locally when the
 * queries return.
 *
 * The {@link PageHelper#nextPage} and {@link PageHelper#previousPage} functions also dispatch queries to FaunaDB,
 * but return their responses in a wrapped Promise.
 *
 * @param {Client} client
 *   The FaunaDB client used to paginate.
 * @param {Object} set
 *   The set to paginate.
 * @param {?Object} params
 *   Parameters to be passed to the FaunaDB Paginate function.
 * @param {?Object} options
 *   Object that configures the current pagination, overriding FaunaDB client options.
 * @param {?string} options.secret FaunaDB secret (see [Reference Documentation](https://app.fauna.com/documentation/intro/security))
 * @constructor
 */
function PageHelper(client, set, params, options) {
  if (params === undefined) {
    params = {};
  }

  if (options === undefined) {
    options = {};
  }

  this.reverse = false;
  this.params = {};

  this.before = undefined;
  this.after = undefined;

  objectAssign(this.params, params);

  var cursorParams = this.params.cursor || this.params;

  if ('before' in cursorParams) {
    this.before = cursorParams.before;
    delete cursorParams.before;
  } else if ('after' in cursorParams) {
    this.after = cursorParams.after;
    delete cursorParams.after;
  }

  this.options = {};
  objectAssign(this.options, options);

  this.client = client;
  this.set = set;

  /**
   * @member {Array.<Function>}
   * @type {Array.<Function>}
   * @private
   */
  this._faunaFunctions = [];
}

/**
 * Wraps the set to be paginated with a FaunaDB Map function.
 * As this function is executed on the server, the `lambda` param must
 * return a valid query expression.
 *
 * @param {PageHelper~collectionFunction} lambda
 *   The Lambda expression to be passed into the Map function.
 * @return {PageHelper}
 *
 */
PageHelper.prototype.map = function(lambda) {
  var rv = this._clone();
  rv._faunaFunctions.push(function(q) {
    return query.Map(q, lambda)
  });
  return rv
};

/**
 * Wraps the set to be paginated with a FaunaDB Filter funciton.
 * As this function is executed on the server, the `lambda` param must
 * return a valid query expression.
 *
 * @param {PageHelper~collectionFunction} lambda
 *   The lambda expression to be passed into the Filter function.
 * @return {PageHelper}
 */
PageHelper.prototype.filter = function(lambda) {
  var rv = this._clone();
  rv._faunaFunctions.push(function(q) {
    return query.Filter(q, lambda)
  });
  return rv
};

/**
 * Executes the provided function for each page.
 *
 * @param {PageHelper~eachFunction} lambda
 *   A function to be executed for each page.
 * @returns {external:Promise.<void>}
 */
PageHelper.prototype.each = function(lambda) {
  return this._retrieveNextPage(this.after, false).then(
    this._consumePages(lambda, false)
  )
};

/**
 * Executes the provided function for each page, in the reverse direction.
 * @param {PageHelper~eachFunction} lambda
 * @returns {external:Promise.<void>}
 */
PageHelper.prototype.eachReverse = function(lambda) {
  return this._retrieveNextPage(this.before, true).then(
    this._consumePages(lambda, true)
  )
};

/**
 * Queries for the previous page from the current cursor point; this mutates
 * the state of the PageHelper when the query completes, updating the internal
 * cursor state to that of the returned page.
 *
 * @returns {external:Promise.<object>}
 */
PageHelper.prototype.previousPage = function() {
  var self = this;
  return this._retrieveNextPage(this.before, true).then(
    this._adjustCursors.bind(self)
  )
};

/**
 * Queries for the next page from the current cursor point; this mutates
 * the state of the PageHelper when the query completes, updating the internal
 * cursor state to that of the returned page.
 *
 * @returns {external:Promise.<object>}
 */
PageHelper.prototype.nextPage = function() {
  var self = this;
  return this._retrieveNextPage(this.after, false).then(
    this._adjustCursors.bind(self)
  )
};

PageHelper.prototype._adjustCursors = function(page) {
  if (page.after !== undefined) {
    this.after = page.after;
  }

  if (page.before !== undefined) {
    this.before = page.before;
  }

  return page.data
};

PageHelper.prototype._consumePages = function(lambda, reverse) {
  var self = this;
  return function(page) {
    var data = [];
    page.data.forEach(function(item) {
      if (item.document) {
        item.instance = item.document;
      }
      if (item.value && item.value.document) {
        item.value.instance = item.value.document;
      }
      data.push(item);
    });
    lambda(data);

    var nextCursor;
    if (reverse) {
      nextCursor = page.before;
    } else {
      nextCursor = page.after;
    }

    if (nextCursor !== undefined) {
      return self
        ._retrieveNextPage(nextCursor, reverse)
        .then(self._consumePages(lambda, reverse))
    } else {
      return Promise.resolve()
    }
  }
};

/**
 *
 * @returns {external:Promise.<Object>}
 * @private
 */
PageHelper.prototype._retrieveNextPage = function(cursor, reverse) {
  var opts = {};
  objectAssign(opts, this.params);
  var cursorOpts = opts.cursor || opts;

  if (cursor !== undefined) {
    if (reverse) {
      cursorOpts.before = cursor;
    } else {
      cursorOpts.after = cursor;
    }
  } else {
    if (reverse) {
      cursorOpts.before = null;
    }
  }

  var q = query.Paginate(this.set, opts);

  if (this._faunaFunctions.length > 0) {
    this._faunaFunctions.forEach(function(lambda) {
      q = lambda(q);
    });
  }

  return this.client.query(q, this.options)
};

/**
 * @private
 * @returns {PageHelper}
 */
PageHelper.prototype._clone = function() {
  return Object.create(PageHelper.prototype, {
    client: { value: this.client },
    set: { value: this.set },
    _faunaFunctions: { value: this._faunaFunctions },
    before: { value: this.before },
    after: { value: this.after },
  })
};

var PageHelper_1 = PageHelper;

/**
 * Check if we're required to add a port number.
 *
 * @see https://url.spec.whatwg.org/#default-port
 * @param {Number|String} port Port number we need to check
 * @param {String} protocol Protocol we need to check against.
 * @returns {Boolean} Is it a default port for the given protocol
 * @api private
 */
var requiresPort = function required(port, protocol) {
  protocol = protocol.split(':')[0];
  port = +port;

  if (!port) return false;

  switch (protocol) {
    case 'http':
    case 'ws':
    return port !== 80;

    case 'https':
    case 'wss':
    return port !== 443;

    case 'ftp':
    return port !== 21;

    case 'gopher':
    return port !== 70;

    case 'file':
    return false;
  }

  return port !== 0;
};

var has = Object.prototype.hasOwnProperty
  , undef;

/**
 * Decode a URI encoded string.
 *
 * @param {String} input The URI encoded string.
 * @returns {String|Null} The decoded string.
 * @api private
 */
function decode(input) {
  try {
    return decodeURIComponent(input.replace(/\+/g, ' '));
  } catch (e) {
    return null;
  }
}

/**
 * Simple query string parser.
 *
 * @param {String} query The query string that needs to be parsed.
 * @returns {Object}
 * @api public
 */
function querystring(query) {
  var parser = /([^=?&]+)=?([^&]*)/g
    , result = {}
    , part;

  while (part = parser.exec(query)) {
    var key = decode(part[1])
      , value = decode(part[2]);

    //
    // Prevent overriding of existing properties. This ensures that build-in
    // methods like `toString` or __proto__ are not overriden by malicious
    // querystrings.
    //
    // In the case if failed decoding, we want to omit the key/value pairs
    // from the result.
    //
    if (key === null || value === null || key in result) continue;
    result[key] = value;
  }

  return result;
}

/**
 * Transform a query string to an object.
 *
 * @param {Object} obj Object that should be transformed.
 * @param {String} prefix Optional prefix.
 * @returns {String}
 * @api public
 */
function querystringify(obj, prefix) {
  prefix = prefix || '';

  var pairs = []
    , value
    , key;

  //
  // Optionally prefix with a '?' if needed
  //
  if ('string' !== typeof prefix) prefix = '?';

  for (key in obj) {
    if (has.call(obj, key)) {
      value = obj[key];

      //
      // Edge cases where we actually want to encode the value to an empty
      // string instead of the stringified value.
      //
      if (!value && (value === null || value === undef || isNaN(value))) {
        value = '';
      }

      key = encodeURIComponent(key);
      value = encodeURIComponent(value);

      //
      // If we failed to encode the strings, we should bail out as we don't
      // want to add invalid strings to the query.
      //
      if (key === null || value === null) continue;
      pairs.push(key +'='+ value);
    }
  }

  return pairs.length ? prefix + pairs.join('&') : '';
}

//
// Expose the module.
//
var stringify$1 = querystringify;
var parse = querystring;

var querystringify_1 = {
	stringify: stringify$1,
	parse: parse
};

var slashes = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//
  , protocolre = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i
  , whitespace = '[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]'
  , left = new RegExp('^'+ whitespace +'+');

/**
 * Trim a given string.
 *
 * @param {String} str String to trim.
 * @public
 */
function trimLeft(str) {
  return (str ? str : '').toString().replace(left, '');
}

/**
 * These are the parse rules for the URL parser, it informs the parser
 * about:
 *
 * 0. The char it Needs to parse, if it's a string it should be done using
 *    indexOf, RegExp using exec and NaN means set as current value.
 * 1. The property we should set when parsing this value.
 * 2. Indication if it's backwards or forward parsing, when set as number it's
 *    the value of extra chars that should be split off.
 * 3. Inherit from location if non existing in the parser.
 * 4. `toLowerCase` the resulting value.
 */
var rules = [
  ['#', 'hash'],                        // Extract from the back.
  ['?', 'query'],                       // Extract from the back.
  function sanitize(address) {          // Sanitize what is left of the address
    return address.replace('\\', '/');
  },
  ['/', 'pathname'],                    // Extract from the back.
  ['@', 'auth', 1],                     // Extract from the front.
  [NaN, 'host', undefined, 1, 1],       // Set left over value.
  [/:(\d+)$/, 'port', undefined, 1],    // RegExp the back.
  [NaN, 'hostname', undefined, 1, 1]    // Set left over.
];

/**
 * These properties should not be copied or inherited from. This is only needed
 * for all non blob URL's as a blob URL does not include a hash, only the
 * origin.
 *
 * @type {Object}
 * @private
 */
var ignore = { hash: 1, query: 1 };

/**
 * The location object differs when your code is loaded through a normal page,
 * Worker or through a worker using a blob. And with the blobble begins the
 * trouble as the location object will contain the URL of the blob, not the
 * location of the page where our code is loaded in. The actual origin is
 * encoded in the `pathname` so we can thankfully generate a good "default"
 * location from it so we can generate proper relative URL's again.
 *
 * @param {Object|String} loc Optional default location object.
 * @returns {Object} lolcation object.
 * @public
 */
function lolcation(loc) {
  var globalVar;

  if (typeof window !== 'undefined') globalVar = window;
  else if (typeof commonjsGlobal !== 'undefined') globalVar = commonjsGlobal;
  else if (typeof self !== 'undefined') globalVar = self;
  else globalVar = {};

  var location = globalVar.location || {};
  loc = loc || location;

  var finaldestination = {}
    , type = typeof loc
    , key;

  if ('blob:' === loc.protocol) {
    finaldestination = new Url(unescape(loc.pathname), {});
  } else if ('string' === type) {
    finaldestination = new Url(loc, {});
    for (key in ignore) delete finaldestination[key];
  } else if ('object' === type) {
    for (key in loc) {
      if (key in ignore) continue;
      finaldestination[key] = loc[key];
    }

    if (finaldestination.slashes === undefined) {
      finaldestination.slashes = slashes.test(loc.href);
    }
  }

  return finaldestination;
}

/**
 * @typedef ProtocolExtract
 * @type Object
 * @property {String} protocol Protocol matched in the URL, in lowercase.
 * @property {Boolean} slashes `true` if protocol is followed by "//", else `false`.
 * @property {String} rest Rest of the URL that is not part of the protocol.
 */

/**
 * Extract protocol information from a URL with/without double slash ("//").
 *
 * @param {String} address URL we want to extract from.
 * @return {ProtocolExtract} Extracted information.
 * @private
 */
function extractProtocol(address) {
  address = trimLeft(address);
  var match = protocolre.exec(address);

  return {
    protocol: match[1] ? match[1].toLowerCase() : '',
    slashes: !!match[2],
    rest: match[3]
  };
}

/**
 * Resolve a relative URL pathname against a base URL pathname.
 *
 * @param {String} relative Pathname of the relative URL.
 * @param {String} base Pathname of the base URL.
 * @return {String} Resolved pathname.
 * @private
 */
function resolve(relative, base) {
  if (relative === '') return base;

  var path = (base || '/').split('/').slice(0, -1).concat(relative.split('/'))
    , i = path.length
    , last = path[i - 1]
    , unshift = false
    , up = 0;

  while (i--) {
    if (path[i] === '.') {
      path.splice(i, 1);
    } else if (path[i] === '..') {
      path.splice(i, 1);
      up++;
    } else if (up) {
      if (i === 0) unshift = true;
      path.splice(i, 1);
      up--;
    }
  }

  if (unshift) path.unshift('');
  if (last === '.' || last === '..') path.push('');

  return path.join('/');
}

/**
 * The actual URL instance. Instead of returning an object we've opted-in to
 * create an actual constructor as it's much more memory efficient and
 * faster and it pleases my OCD.
 *
 * It is worth noting that we should not use `URL` as class name to prevent
 * clashes with the global URL instance that got introduced in browsers.
 *
 * @constructor
 * @param {String} address URL we want to parse.
 * @param {Object|String} [location] Location defaults for relative paths.
 * @param {Boolean|Function} [parser] Parser for the query string.
 * @private
 */
function Url(address, location, parser) {
  address = trimLeft(address);

  if (!(this instanceof Url)) {
    return new Url(address, location, parser);
  }

  var relative, extracted, parse, instruction, index, key
    , instructions = rules.slice()
    , type = typeof location
    , url = this
    , i = 0;

  //
  // The following if statements allows this module two have compatibility with
  // 2 different API:
  //
  // 1. Node.js's `url.parse` api which accepts a URL, boolean as arguments
  //    where the boolean indicates that the query string should also be parsed.
  //
  // 2. The `URL` interface of the browser which accepts a URL, object as
  //    arguments. The supplied object will be used as default values / fall-back
  //    for relative paths.
  //
  if ('object' !== type && 'string' !== type) {
    parser = location;
    location = null;
  }

  if (parser && 'function' !== typeof parser) parser = querystringify_1.parse;

  location = lolcation(location);

  //
  // Extract protocol information before running the instructions.
  //
  extracted = extractProtocol(address || '');
  relative = !extracted.protocol && !extracted.slashes;
  url.slashes = extracted.slashes || relative && location.slashes;
  url.protocol = extracted.protocol || location.protocol || '';
  address = extracted.rest;

  //
  // When the authority component is absent the URL starts with a path
  // component.
  //
  if (!extracted.slashes) instructions[3] = [/(.*)/, 'pathname'];

  for (; i < instructions.length; i++) {
    instruction = instructions[i];

    if (typeof instruction === 'function') {
      address = instruction(address);
      continue;
    }

    parse = instruction[0];
    key = instruction[1];

    if (parse !== parse) {
      url[key] = address;
    } else if ('string' === typeof parse) {
      if (~(index = address.indexOf(parse))) {
        if ('number' === typeof instruction[2]) {
          url[key] = address.slice(0, index);
          address = address.slice(index + instruction[2]);
        } else {
          url[key] = address.slice(index);
          address = address.slice(0, index);
        }
      }
    } else if ((index = parse.exec(address))) {
      url[key] = index[1];
      address = address.slice(0, index.index);
    }

    url[key] = url[key] || (
      relative && instruction[3] ? location[key] || '' : ''
    );

    //
    // Hostname, host and protocol should be lowercased so they can be used to
    // create a proper `origin`.
    //
    if (instruction[4]) url[key] = url[key].toLowerCase();
  }

  //
  // Also parse the supplied query string in to an object. If we're supplied
  // with a custom parser as function use that instead of the default build-in
  // parser.
  //
  if (parser) url.query = parser(url.query);

  //
  // If the URL is relative, resolve the pathname against the base URL.
  //
  if (
      relative
    && location.slashes
    && url.pathname.charAt(0) !== '/'
    && (url.pathname !== '' || location.pathname !== '')
  ) {
    url.pathname = resolve(url.pathname, location.pathname);
  }

  //
  // We should not add port numbers if they are already the default port number
  // for a given protocol. As the host also contains the port number we're going
  // override it with the hostname which contains no port number.
  //
  if (!requiresPort(url.port, url.protocol)) {
    url.host = url.hostname;
    url.port = '';
  }

  //
  // Parse down the `auth` for the username and password.
  //
  url.username = url.password = '';
  if (url.auth) {
    instruction = url.auth.split(':');
    url.username = instruction[0] || '';
    url.password = instruction[1] || '';
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  //
  // The href is just the compiled result.
  //
  url.href = url.toString();
}

/**
 * This is convenience method for changing properties in the URL instance to
 * insure that they all propagate correctly.
 *
 * @param {String} part          Property we need to adjust.
 * @param {Mixed} value          The newly assigned value.
 * @param {Boolean|Function} fn  When setting the query, it will be the function
 *                               used to parse the query.
 *                               When setting the protocol, double slash will be
 *                               removed from the final url if it is true.
 * @returns {URL} URL instance for chaining.
 * @public
 */
function set(part, value, fn) {
  var url = this;

  switch (part) {
    case 'query':
      if ('string' === typeof value && value.length) {
        value = (fn || querystringify_1.parse)(value);
      }

      url[part] = value;
      break;

    case 'port':
      url[part] = value;

      if (!requiresPort(value, url.protocol)) {
        url.host = url.hostname;
        url[part] = '';
      } else if (value) {
        url.host = url.hostname +':'+ value;
      }

      break;

    case 'hostname':
      url[part] = value;

      if (url.port) value += ':'+ url.port;
      url.host = value;
      break;

    case 'host':
      url[part] = value;

      if (/:\d+$/.test(value)) {
        value = value.split(':');
        url.port = value.pop();
        url.hostname = value.join(':');
      } else {
        url.hostname = value;
        url.port = '';
      }

      break;

    case 'protocol':
      url.protocol = value.toLowerCase();
      url.slashes = !fn;
      break;

    case 'pathname':
    case 'hash':
      if (value) {
        var char = part === 'pathname' ? '/' : '#';
        url[part] = value.charAt(0) !== char ? char + value : value;
      } else {
        url[part] = value;
      }
      break;

    default:
      url[part] = value;
  }

  for (var i = 0; i < rules.length; i++) {
    var ins = rules[i];

    if (ins[4]) url[ins[1]] = url[ins[1]].toLowerCase();
  }

  url.origin = url.protocol && url.host && url.protocol !== 'file:'
    ? url.protocol +'//'+ url.host
    : 'null';

  url.href = url.toString();

  return url;
}

/**
 * Transform the properties back in to a valid and full URL string.
 *
 * @param {Function} stringify Optional query stringify function.
 * @returns {String} Compiled version of the URL.
 * @public
 */
function toString(stringify) {
  if (!stringify || 'function' !== typeof stringify) stringify = querystringify_1.stringify;

  var query
    , url = this
    , protocol = url.protocol;

  if (protocol && protocol.charAt(protocol.length - 1) !== ':') protocol += ':';

  var result = protocol + (url.slashes ? '//' : '');

  if (url.username) {
    result += url.username;
    if (url.password) result += ':'+ url.password;
    result += '@';
  }

  result += url.host + url.pathname;

  query = 'object' === typeof url.query ? stringify(url.query) : url.query;
  if (query) result += '?' !== query.charAt(0) ? '?'+ query : query;

  if (url.hash) result += url.hash;

  return result;
}

Url.prototype = { set: set, toString: toString };

//
// Expose the URL parser and some additional properties that might be useful for
// others or testing.
//
Url.extractProtocol = extractProtocol;
Url.location = lolcation;
Url.trimLeft = trimLeft;
Url.qs = querystringify_1;

var urlParse = Url;

var browserPonyfill = createCommonjsModule(function (module, exports) {
var __self__ = (function (root) {
function F() {
this.fetch = false;
this.DOMException = root.DOMException;
}
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : commonjsGlobal);
(function(self) {

var irrelevant = (function (exports) {
  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  return exports;

}({}));
})(__self__);
delete __self__.fetch.polyfill;
exports = __self__.fetch; // To enable: import fetch from 'cross-fetch'
exports.default = __self__.fetch; // For TypeScript consumers without esModuleInterop.
exports.fetch = __self__.fetch; // To enable: import {fetch} from 'cross-fetch'
exports.Headers = __self__.Headers;
exports.Request = __self__.Request;
exports.Response = __self__.Response;
module.exports = exports;
});
var browserPonyfill_1 = browserPonyfill.fetch;
var browserPonyfill_2 = browserPonyfill.Headers;
var browserPonyfill_3 = browserPonyfill.Request;
var browserPonyfill_4 = browserPonyfill.Response;

var APIVersion = '2.7';



var query$1 = query;







/**
 * The callback that will be executed after every completed request.
 *
 * @callback Client~observerCallback
 * @param {RequestResult} res
 */

/**
 * A client for interacting with FaunaDB.
 *
 * Users will mainly call the {@link Client#query} method to execute queries.
 *
 * See the [FaunaDB Documentation](https://fauna.com/documentation) for detailed examples.
 *
 * All methods return promises containing a JSON object that represents the FaunaDB response.
 * Literal types in the response object will remain as strings, Arrays, and objects.
 * FaunaDB types, such as {@link Ref}, {@link SetRef}, {@link FaunaTime}, and {@link FaunaDate} will
 * be converted into the appropriate object.
 *
 * (So if a response contains `{ "@ref": "collections/frogs/123" }`,
 * it will be returned as `new Ref("collections/frogs/123")`.)
 *
 * @constructor
 * @param {?Object} options
 *   Object that configures this FaunaDB client.
 * @param {?string} options.domain
 *   Base URL for the FaunaDB server.
 * @param {?{ string: string }} options.headers
 *   Base URL for the FaunaDB server.
 * @param {?('http'|'https')} options.scheme
 *   HTTP scheme to use.
 * @param {?number} options.port
 *   Port of the FaunaDB server.
 * @param {?string} options.secret FaunaDB secret (see [Reference Documentation](https://app.fauna.com/documentation/intro/security))
 * @param {?number} options.timeout Read timeout in seconds.
 * @param {?Client~observerCallback} options.observer
 *   Callback that will be called after every completed request.
 * @param {?boolean} options.keepAlive
 *   Configures http/https keepAlive option (ignored in browser environments)
 * @param {?fetch} options.fetch
 *   a fetch compatible [API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) for making a request
 * @param {?number} options.queryTimeout
 *   Sets the maximum amount of time (in milliseconds) for query execution on the server,
 */
function Client(options) {
  var isNodeEnv = typeof window === 'undefined';
  var opts = _util.applyDefaults(options, {
    domain: 'db.fauna.com',
    scheme: 'https',
    port: null,
    secret: null,
    timeout: 60,
    observer: null,
    keepAlive: true,
    headers: {},
    fetch: undefined,
    queryTimeout: null,
  });
  var isHttps = opts.scheme === 'https';

  if (opts.port === null) {
    opts.port = isHttps ? 443 : 80;
  }

  this._baseUrl = opts.scheme + '://' + opts.domain + ':' + opts.port;
  this._timeout = Math.floor(opts.timeout * 1000);
  this._secret = opts.secret;
  this._observer = opts.observer;
  this._lastSeen = null;
  this._headers = opts.headers;
  this._fetch = opts.fetch || browserPonyfill;
  this._queryTimeout = opts.queryTimeout;

  if (isNodeEnv && opts.keepAlive) {
    this._keepAliveEnabledAgent = new (isHttps
      ? https
      : http
    ).Agent({ keepAlive: true });
  }
}

/**
 * Executes a query via the FaunaDB Query API.
 * See the [docs](https://app.fauna.com/documentation/reference/queryapi),
 * and the query functions in this documentation.
 * @param expression {Expr}
 *   The query to execute. Created from query functions such as {@link add}.
 * @param {?Object} options
 *   Object that configures the current query, overriding FaunaDB client options.
 * @param {?string} options.secret FaunaDB secret (see [Reference Documentation](https://app.fauna.com/documentation/intro/security))
 * @return {external:Promise<Object>} FaunaDB response object.
 */

Client.prototype.query = function(expression, options) {
  return this._execute('POST', '', query$1.wrap(expression), null, options)
};

/**
 * Returns a {@link PageHelper} for the given Query expression.
 * This provides a helpful API for paginating over FaunaDB responses.
 * @param expression {Expr}
 *   The Query expression to paginate over.
 * @param params {Object}
 *   Options to be passed to the paginate function. See [paginate](https://app.fauna.com/documentation/reference/queryapi#read-functions).
 * @param options {?Object}
 *   Object that configures the current pagination queries, overriding FaunaDB client options.
 * @param {?string} options.secret FaunaDB secret (see [Reference Documentation](https://app.fauna.com/documentation/intro/security))
 * @returns {PageHelper} A PageHelper that wraps the provided expression.
 */
Client.prototype.paginate = function(expression, params, options) {
  params = defaults$1(params, {});
  options = defaults$1(options, {});

  return new PageHelper_1(this, expression, params, options)
};

/**
 * Sends a `ping` request to FaunaDB.
 * @return {external:Promise<string>} Ping response.
 */
Client.prototype.ping = function(scope, timeout) {
  return this._execute('GET', 'ping', null, { scope: scope, timeout: timeout })
};

/**
 * Get the freshest timestamp reported to this client.
 * @returns {number} the last seen transaction time
 */
Client.prototype.getLastTxnTime = function() {
  return this._lastSeen
};

/**
 * Sync the freshest timestamp seen by this client.
 *
 * This has no effect if staler than currently stored timestamp.
 * WARNING: This should be used only when coordinating timestamps across
 *          multiple clients. Moving the timestamp arbitrarily forward into
 *          the future will cause transactions to stall.
 * @param time {number} the last seen transaction time
 */
Client.prototype.syncLastTxnTime = function(time) {
  if (this._lastSeen == null || this._lastSeen < time) {
    this._lastSeen = time;
  }
};

Client.prototype._execute = function(method, path, data, query, options) {
  query = defaults$1(query, null);

  if (
    path instanceof values.Ref ||
    _util.checkInstanceHasProperty(path, '_isFaunaRef')
  ) {
    path = path.value;
  }

  if (query !== null) {
    query = _util.removeUndefinedValues(query);
  }

  var startTime = Date.now();
  var self = this;
  var body =
    ['GET', 'HEAD'].indexOf(method) >= 0 ? undefined : JSON.stringify(data);

  return this._performRequest(method, path, body, query, options).then(function(
    response
  ) {
    var endTime = Date.now();
    var responseText = response.text;
    var responseObject = _json.parseJSON(responseText);
    var requestResult = new RequestResult_1(
      method,
      path,
      query,
      body,
      data,
      responseText,
      responseObject,
      response.status,
      responseHeadersAsObject(response),
      startTime,
      endTime
    );
    var txnTimeHeaderKey = 'x-txn-time';

    if (response.headers.has(txnTimeHeaderKey)) {
      self.syncLastTxnTime(parseInt(response.headers.get(txnTimeHeaderKey), 10));
    }

    if (self._observer != null) {
      self._observer(requestResult, self);
    }

    errors.FaunaHTTPError.raiseForStatusCode(requestResult);
    return responseObject['resource']
  })
};

Client.prototype._performRequest = function(
  method,
  path,
  body,
  query,
  options
) {
  var url = urlParse(this._baseUrl);
  url.set('pathname', path);
  url.set('query', query);
  options = defaults$1(options, {});
  var secret = options.secret || this._secret;
  var queryTimeout = this._queryTimeout;

  if (options && options.queryTimeout) {
    queryTimeout = options.queryTimeout;
  }

  return this._fetch(url.href, {
    agent: this._keepAliveEnabledAgent,
    body: body,
    headers: _util.removeNullAndUndefinedValues({
      ...this._headers,
      Authorization: secret && secretHeader(secret),
      'X-FaunaDB-API-Version': APIVersion,
      'X-Fauna-Driver': 'Javascript',
      'X-Last-Seen-Txn': this._lastSeen,
      'X-Query-Timeout': queryTimeout,
    }),
    method: method,
    timeout: this._timeout,
  }).then(function(response) {
    return response.text().then(function(text) {
      response.text = text;
      return response
    })
  })
};

function defaults$1(obj, def) {
  if (obj === undefined) {
    return def
  } else {
    return obj
  }
}

function secretHeader(secret) {
  return 'Basic ' + btoaBrowser(secret + ':')
}

function responseHeadersAsObject(response) {
  let headers = {};

  for (const [key, value] of response.headers.entries()) {
    headers[key] = value;
  }

  return headers
}

var Client_1 = Client;

/**
 * Functions to assist with debug logging.
 * @module clientLogger
 */

/**
 * A user provided log line handler.
 *
 * @callback loggerCallback
 * @param {string} logged
 */

/**
 * Function that can be the `observer` for a {@link Client}.
 * Will call `loggerFunction` with a string representation of each {@link RequestResult}.
 *
 * An example logging string:
 * ```plain
 * Fauna POST /
 * Request JSON: {
 *   "data": ...
 * }
 * Response headers: {
 *    "x-faunadb-host": ...,
 *    "x-faunadb-build": ...,
 *    "connection": "close",
 *    "content-length": ...,
 *    "content-type": "application/json;charset=utf-8"
 *  }
 * Response JSON: {
 *    "resource": {
 *      "ref": { ... },
 *      "class": { ... },
 *      "ts": ...
 *    }
 *  }
 * Response (201): Network latency 13ms
 * ```
 *
 * @param {loggerCallback} loggerFunction
 * @return {Client~observerCallback}
 * @example
 * var client = new Client({
 *   ... other options ...
 *   observer: logger(console.log)
 * })
 * client.ping() // Logs the request and response.
 */
function logger(loggerFunction) {
  return function(requestResult, client) {
    return loggerFunction(showRequestResult(requestResult), client)
  }
}

/**
 * Convenience function used by {@link logger} to transform a {@link RequestResult}
 * to a string for logging.
 * @param {RequestResult} requestResult
 * @returns {string} string to be logged.
 */
function showRequestResult(requestResult) {
  var query = requestResult.query,
    method = requestResult.method,
    path = requestResult.path,
    requestContent = requestResult.requestContent,
    responseHeaders = requestResult.responseHeaders,
    responseContent = requestResult.responseContent,
    statusCode = requestResult.statusCode,
    timeTaken = requestResult.timeTaken;

  var out = '';

  function log(str) {
    out = out + str;
  }

  log('Fauna ' + method + ' /' + path + _queryString(query) + '\n');
  if (requestContent != null) {
    log('  Request JSON: ' + _showJSON(requestContent) + '\n');
  }
  log('  Response headers: ' + _showJSON(responseHeaders) + '\n');
  log('  Response JSON: ' + _showJSON(responseContent) + '\n');
  log('  Response (' + statusCode + '): Network latency ' + timeTaken + 'ms\n');

  return out
}

function _indent(str) {
  var indentStr = '  ';
  return str.split('\n').join('\n' + indentStr)
}

function _showJSON(object) {
  return _indent(_json.toJSON(object, true))
}

function _queryString(query) {
  if (query == null) {
    return ''
  }

  var keys = Object.keys(query);
  if (keys.length === 0) {
    return ''
  }

  var pairs = keys.map(function(key) {
    return key + '=' + query[key]
  });
  return '?' + pairs.join('&')
}

var clientLogger = {
  logger: logger,
  showRequestResult: showRequestResult,
};

var faunadb = {
  Client: Client_1,
  Expr: Expr_1,
  PageHelper: PageHelper_1,
  RequestResult: RequestResult_1,

  clientLogger: clientLogger,
  errors: errors,
  values: values,
  query: query,
};

const q = faunadb.query;
const client = new faunadb.Client({
  secret: 'fnADvsSZphACAJMZtbFfkj4b83lYv_oQQGQRCyce',
});

const getFauna = (callback) => {
  client
    .query(q.Get(q.Ref(q.Collection('team'), '270057444654187008')))
    .then((res) => res.json())
    .then((ret) => {
      let current = ret.data.members.sort((a, b) => {
        let nameA = a.company.toUpperCase();
        let nameB = b.company.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      });
      callback(current);
    });
};

/* src/routes/index.svelte generated by Svelte v3.23.2 */
const file = "src/routes/index.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[2] = list[i];
	child_ctx[4] = i;
	return child_ctx;
}

// (64:2) {:else}
function create_else_block(ctx) {
	let p;
	let t;

	const block = {
		c: function create() {
			p = element("p");
			t = text("LOADING...");
			this.h();
		},
		l: function claim(nodes) {
			p = claim_element(nodes, "P", { class: true });
			var p_nodes = children(p);
			t = claim_text(p_nodes, "LOADING...");
			p_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(p, "class", "svelte-8am6hs");
			add_location(p, file, 64, 4, 1741);
		},
		m: function mount(target, anchor) {
			insert_dev(target, p, anchor);
			append_dev(p, t);
		},
		p: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(p);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_else_block.name,
		type: "else",
		source: "(64:2) {:else}",
		ctx
	});

	return block;
}

// (37:2) {#if members}
function create_if_block(ctx) {
	let table;
	let thead;
	let tr;
	let th0;
	let t0;
	let t1;
	let th1;
	let t2;
	let t3;
	let th2;
	let t4;
	let t5;
	let th3;
	let t6;
	let t7;
	let th4;
	let t8;
	let t9;
	let th5;
	let t10;
	let t11;
	let th6;
	let t12;
	let t13;
	let tbody;
	let each_value = /*members*/ ctx[0];
	validate_each_argument(each_value);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const block = {
		c: function create() {
			table = element("table");
			thead = element("thead");
			tr = element("tr");
			th0 = element("th");
			t0 = text("Company");
			t1 = space();
			th1 = element("th");
			t2 = text("Share Value");
			t3 = space();
			th2 = element("th");
			t4 = text("Flights");
			t5 = space();
			th3 = element("th");
			t6 = text("Start Contribution");
			t7 = space();
			th4 = element("th");
			t8 = text("Current Contribution");
			t9 = space();
			th5 = element("th");
			t10 = text("Raw");
			t11 = space();
			th6 = element("th");
			t12 = text("Growth");
			t13 = space();
			tbody = element("tbody");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			this.h();
		},
		l: function claim(nodes) {
			table = claim_element(nodes, "TABLE", { class: true });
			var table_nodes = children(table);
			thead = claim_element(table_nodes, "THEAD", {});
			var thead_nodes = children(thead);
			tr = claim_element(thead_nodes, "TR", {});
			var tr_nodes = children(tr);
			th0 = claim_element(tr_nodes, "TH", {});
			var th0_nodes = children(th0);
			t0 = claim_text(th0_nodes, "Company");
			th0_nodes.forEach(detach_dev);
			t1 = claim_space(tr_nodes);
			th1 = claim_element(tr_nodes, "TH", {});
			var th1_nodes = children(th1);
			t2 = claim_text(th1_nodes, "Share Value");
			th1_nodes.forEach(detach_dev);
			t3 = claim_space(tr_nodes);
			th2 = claim_element(tr_nodes, "TH", {});
			var th2_nodes = children(th2);
			t4 = claim_text(th2_nodes, "Flights");
			th2_nodes.forEach(detach_dev);
			t5 = claim_space(tr_nodes);
			th3 = claim_element(tr_nodes, "TH", {});
			var th3_nodes = children(th3);
			t6 = claim_text(th3_nodes, "Start Contribution");
			th3_nodes.forEach(detach_dev);
			t7 = claim_space(tr_nodes);
			th4 = claim_element(tr_nodes, "TH", {});
			var th4_nodes = children(th4);
			t8 = claim_text(th4_nodes, "Current Contribution");
			th4_nodes.forEach(detach_dev);
			t9 = claim_space(tr_nodes);
			th5 = claim_element(tr_nodes, "TH", {});
			var th5_nodes = children(th5);
			t10 = claim_text(th5_nodes, "Raw");
			th5_nodes.forEach(detach_dev);
			t11 = claim_space(tr_nodes);
			th6 = claim_element(tr_nodes, "TH", {});
			var th6_nodes = children(th6);
			t12 = claim_text(th6_nodes, "Growth");
			th6_nodes.forEach(detach_dev);
			tr_nodes.forEach(detach_dev);
			thead_nodes.forEach(detach_dev);
			t13 = claim_space(table_nodes);
			tbody = claim_element(table_nodes, "TBODY", {});
			var tbody_nodes = children(tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].l(tbody_nodes);
			}

			tbody_nodes.forEach(detach_dev);
			table_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(th0, file, 40, 10, 852);
			add_location(th1, file, 41, 10, 879);
			add_location(th2, file, 42, 10, 910);
			add_location(th3, file, 43, 10, 937);
			add_location(th4, file, 44, 10, 975);
			add_location(th5, file, 45, 10, 1015);
			add_location(th6, file, 46, 10, 1038);
			add_location(tr, file, 39, 8, 837);
			add_location(thead, file, 38, 6, 821);
			add_location(tbody, file, 49, 6, 1089);
			attr_dev(table, "class", "table is-striped");
			add_location(table, file, 37, 4, 782);
		},
		m: function mount(target, anchor) {
			insert_dev(target, table, anchor);
			append_dev(table, thead);
			append_dev(thead, tr);
			append_dev(tr, th0);
			append_dev(th0, t0);
			append_dev(tr, t1);
			append_dev(tr, th1);
			append_dev(th1, t2);
			append_dev(tr, t3);
			append_dev(tr, th2);
			append_dev(th2, t4);
			append_dev(tr, t5);
			append_dev(tr, th3);
			append_dev(th3, t6);
			append_dev(tr, t7);
			append_dev(tr, th4);
			append_dev(th4, t8);
			append_dev(tr, t9);
			append_dev(tr, th5);
			append_dev(th5, t10);
			append_dev(tr, t11);
			append_dev(tr, th6);
			append_dev(th6, t12);
			append_dev(table, t13);
			append_dev(table, tbody);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(tbody, null);
			}
		},
		p: function update(ctx, dirty) {
			if (dirty & /*current, members*/ 3) {
				each_value = /*members*/ ctx[0];
				validate_each_argument(each_value);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(tbody, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(table);
			destroy_each(each_blocks, detaching);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_if_block.name,
		type: "if",
		source: "(37:2) {#if members}",
		ctx
	});

	return block;
}

// (51:8) {#each members as member,i}
function create_each_block(ctx) {
	let tr;
	let th;
	let t0_value = /*member*/ ctx[2].company + "";
	let t0;
	let t1;
	let td0;
	let t2;
	let t3_value = /*member*/ ctx[2].shareValue + "";
	let t3;
	let t4;
	let td1;
	let t5_value = /*member*/ ctx[2].flights + "";
	let t5;
	let t6;
	let td2;
	let t7_value = /*member*/ ctx[2].contributed.toLocaleString("en-US", { style: "currency", currency: "USD" }) + "";
	let t7;
	let t8;
	let td3;
	let t9_value = /*current*/ ctx[1][/*i*/ ctx[4]].contributed.toLocaleString("en-US", { style: "currency", currency: "USD" }) + "";
	let t9;
	let t10;
	let td4;
	let t11_value = (/*current*/ ctx[1][/*i*/ ctx[4]].contributed - /*member*/ ctx[2].contributed) / /*member*/ ctx[2].contributed + "";
	let t11;
	let t12;
	let td5;
	let t13_value = (/*current*/ ctx[1][/*i*/ ctx[4]].contributed - /*member*/ ctx[2].contributed) / /*current*/ ctx[1][/*i*/ ctx[4]].contributed * 100 + "";
	let t13;
	let t14;
	let t15;

	const block = {
		c: function create() {
			tr = element("tr");
			th = element("th");
			t0 = text(t0_value);
			t1 = space();
			td0 = element("td");
			t2 = text("$");
			t3 = text(t3_value);
			t4 = space();
			td1 = element("td");
			t5 = text(t5_value);
			t6 = space();
			td2 = element("td");
			t7 = text(t7_value);
			t8 = space();
			td3 = element("td");
			t9 = text(t9_value);
			t10 = space();
			td4 = element("td");
			t11 = text(t11_value);
			t12 = space();
			td5 = element("td");
			t13 = text(t13_value);
			t14 = text("%");
			t15 = space();
			this.h();
		},
		l: function claim(nodes) {
			tr = claim_element(nodes, "TR", {});
			var tr_nodes = children(tr);
			th = claim_element(tr_nodes, "TH", {});
			var th_nodes = children(th);
			t0 = claim_text(th_nodes, t0_value);
			th_nodes.forEach(detach_dev);
			t1 = claim_space(tr_nodes);
			td0 = claim_element(tr_nodes, "TD", {});
			var td0_nodes = children(td0);
			t2 = claim_text(td0_nodes, "$");
			t3 = claim_text(td0_nodes, t3_value);
			td0_nodes.forEach(detach_dev);
			t4 = claim_space(tr_nodes);
			td1 = claim_element(tr_nodes, "TD", {});
			var td1_nodes = children(td1);
			t5 = claim_text(td1_nodes, t5_value);
			td1_nodes.forEach(detach_dev);
			t6 = claim_space(tr_nodes);
			td2 = claim_element(tr_nodes, "TD", {});
			var td2_nodes = children(td2);
			t7 = claim_text(td2_nodes, t7_value);
			td2_nodes.forEach(detach_dev);
			t8 = claim_space(tr_nodes);
			td3 = claim_element(tr_nodes, "TD", {});
			var td3_nodes = children(td3);
			t9 = claim_text(td3_nodes, t9_value);
			td3_nodes.forEach(detach_dev);
			t10 = claim_space(tr_nodes);
			td4 = claim_element(tr_nodes, "TD", {});
			var td4_nodes = children(td4);
			t11 = claim_text(td4_nodes, t11_value);
			td4_nodes.forEach(detach_dev);
			t12 = claim_space(tr_nodes);
			td5 = claim_element(tr_nodes, "TD", {});
			var td5_nodes = children(td5);
			t13 = claim_text(td5_nodes, t13_value);
			t14 = claim_text(td5_nodes, "%");
			td5_nodes.forEach(detach_dev);
			t15 = claim_space(tr_nodes);
			tr_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			add_location(th, file, 52, 12, 1160);
			add_location(td0, file, 53, 12, 1198);
			add_location(td1, file, 54, 12, 1240);
			add_location(td2, file, 55, 12, 1278);
			add_location(td3, file, 56, 12, 1382);
			add_location(td4, file, 57, 12, 1490);
			add_location(td5, file, 58, 12, 1580);
			add_location(tr, file, 51, 10, 1143);
		},
		m: function mount(target, anchor) {
			insert_dev(target, tr, anchor);
			append_dev(tr, th);
			append_dev(th, t0);
			append_dev(tr, t1);
			append_dev(tr, td0);
			append_dev(td0, t2);
			append_dev(td0, t3);
			append_dev(tr, t4);
			append_dev(tr, td1);
			append_dev(td1, t5);
			append_dev(tr, t6);
			append_dev(tr, td2);
			append_dev(td2, t7);
			append_dev(tr, t8);
			append_dev(tr, td3);
			append_dev(td3, t9);
			append_dev(tr, t10);
			append_dev(tr, td4);
			append_dev(td4, t11);
			append_dev(tr, t12);
			append_dev(tr, td5);
			append_dev(td5, t13);
			append_dev(td5, t14);
			append_dev(tr, t15);
		},
		p: function update(ctx, dirty) {
			if (dirty & /*members*/ 1 && t0_value !== (t0_value = /*member*/ ctx[2].company + "")) set_data_dev(t0, t0_value);
			if (dirty & /*members*/ 1 && t3_value !== (t3_value = /*member*/ ctx[2].shareValue + "")) set_data_dev(t3, t3_value);
			if (dirty & /*members*/ 1 && t5_value !== (t5_value = /*member*/ ctx[2].flights + "")) set_data_dev(t5, t5_value);
			if (dirty & /*members*/ 1 && t7_value !== (t7_value = /*member*/ ctx[2].contributed.toLocaleString("en-US", { style: "currency", currency: "USD" }) + "")) set_data_dev(t7, t7_value);
			if (dirty & /*current*/ 2 && t9_value !== (t9_value = /*current*/ ctx[1][/*i*/ ctx[4]].contributed.toLocaleString("en-US", { style: "currency", currency: "USD" }) + "")) set_data_dev(t9, t9_value);
			if (dirty & /*current, members*/ 3 && t11_value !== (t11_value = (/*current*/ ctx[1][/*i*/ ctx[4]].contributed - /*member*/ ctx[2].contributed) / /*member*/ ctx[2].contributed + "")) set_data_dev(t11, t11_value);
			if (dirty & /*current, members*/ 3 && t13_value !== (t13_value = (/*current*/ ctx[1][/*i*/ ctx[4]].contributed - /*member*/ ctx[2].contributed) / /*current*/ ctx[1][/*i*/ ctx[4]].contributed * 100 + "")) set_data_dev(t13, t13_value);
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(tr);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_each_block.name,
		type: "each",
		source: "(51:8) {#each members as member,i}",
		ctx
	});

	return block;
}

function create_fragment(ctx) {
	let t0;
	let main;
	let h2;
	let t1;
	let t2;

	function select_block_type(ctx, dirty) {
		if (/*members*/ ctx[0]) return create_if_block;
		return create_else_block;
	}

	let current_block_type = select_block_type(ctx);
	let if_block = current_block_type(ctx);

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			h2 = element("h2");
			t1 = text("Tiger Team1");
			t2 = space();
			if_block.c();
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-oofwcx\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", {});
			var main_nodes = children(main);
			h2 = claim_element(main_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t1 = claim_text(h2_nodes, "Tiger Team1");
			h2_nodes.forEach(detach_dev);
			t2 = claim_space(main_nodes);
			if_block.l(main_nodes);
			main_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "Sapper project template";
			attr_dev(h2, "class", "is-size-3");
			add_location(h2, file, 35, 2, 723);
			add_location(main, file, 34, 0, 714);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, h2);
			append_dev(h2, t1);
			append_dev(main, t2);
			if_block.m(main, null);
		},
		p: function update(ctx, [dirty]) {
			if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
				if_block.p(ctx, dirty);
			} else {
				if_block.d(1);
				if_block = current_block_type(ctx);

				if (if_block) {
					if_block.c();
					if_block.m(main, null);
				}
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			if_block.d();
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props, $$invalidate) {
	let members;
	let current;

	onMount(async () => {
		const data = await JSON.parse(JSON.stringify(res));
		$$invalidate(1, current = await getFauna(() => current));

		$$invalidate(0, members = await data.members.sort((a, b) => {
			let nameA = a.company.toUpperCase();
			let nameB = b.company.toUpperCase();

			if (nameA < nameB) {
				return -1;
			}

			if (nameA > nameB) {
				return 1;
			}

			return 0;
		}));

		window.scrollTo(0, 0);
	});

	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	let { $$slots = {}, $$scope } = $$props;
	validate_slots("Routes", $$slots, []);
	$$self.$capture_state = () => ({ onMount, res, getFauna, members, current });

	$$self.$inject_state = $$props => {
		if ("members" in $$props) $$invalidate(0, members = $$props.members);
		if ("current" in $$props) $$invalidate(1, current = $$props.current);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [members, current];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguNTkxMDU3NWEuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9idG9hLWxpdGUvYnRvYS1icm93c2VyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhdW5hZGIvc3JjL2Vycm9ycy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9mbi1hbm5vdGF0ZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy91dGlsLWRlcHJlY2F0ZS9icm93c2VyLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhdW5hZGIvc3JjL191dGlsLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhdW5hZGIvc3JjL0V4cHIuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFzZTY0LWpzL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhdW5hZGIvc3JjL3ZhbHVlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhdW5hZGIvc3JjL3F1ZXJ5LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhdW5hZGIvc3JjL19qc29uLmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhdW5hZGIvc3JjL1JlcXVlc3RSZXN1bHQuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmF1bmFkYi9zcmMvUGFnZUhlbHBlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXF1aXJlcy1wb3J0L2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5naWZ5L2luZGV4LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3VybC1wYXJzZS9pbmRleC5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXItcG9ueWZpbGwuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmF1bmFkYi9zcmMvQ2xpZW50LmpzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhdW5hZGIvc3JjL2NsaWVudExvZ2dlci5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYXVuYWRiL2luZGV4LmpzIiwiLi4vLi4vLi4vc3JjL3JvdXRlcy9fZ2V0RmF1bmEuanMiLCIuLi8uLi8uLi9zcmMvcm91dGVzL2luZGV4LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9idG9hKHN0cikge1xuICByZXR1cm4gYnRvYShzdHIpXG59XG4iLCIndXNlIHN0cmljdCdcblxudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJylcblxuLyoqXG4gKiBGYXVuYURCIGVycm9yIHR5cGVzLiBSZXF1ZXN0IGVycm9ycyBjYW4gb3JpZ2luYXRlIGZyb21cbiAqIHRoZSBjbGllbnQgKGUuZy4gYmFkIG1ldGhvZCBwYXJhbWV0ZXJzKSBvciBmcm9tIHRoZSBGYXVuYURCIFNlcnZlciAoZS5nLlxuICogaW52YWxpZCBxdWVyaWVzLCB0aW1lb3V0cy4pIFNlcnZlciBlcnJvcnMgd2lsbCBzdWJjbGFzc1xuICoge0BsaW5rIG1vZHVsZTplcnJvcnN+RmF1bmFIVFRQRXJyb3J9LlxuICpcbiAqIEBtb2R1bGUgZXJyb3JzXG4gKi9cblxuLyoqXG4gKiBUaGUgYmFzZSBleGNlcHRpb24gdHlwZSBmb3IgYWxsIEZhdW5hREIgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG4gKiBAZXh0ZW5kcyBFcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEZhdW5hRXJyb3IobmFtZSwgbWVzc2FnZSwgZGVzY3JpcHRpb24pIHtcbiAgRXJyb3IuY2FsbCh0aGlzKVxuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoaXMgZXhjZXB0aW9uLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5uYW1lID0gbmFtZVxuXG4gIC8qKlxuICAgKiBNZXNzYWdlIGZvciB0aGlzIGV4Y2VwdGlvbi5cbiAgICogQHR5cGUge3N0cmluZ31cbiAgICovXG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2VcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gZm9yIHRoaXMgZXhjZXB0aW9uLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG59XG5cbnV0aWwuaW5oZXJpdHMoRmF1bmFFcnJvciwgRXJyb3IpXG5cbi8qKlxuICogRXhjZXB0aW9uIHRocm93biBieSB0aGlzIGNsaWVudCBsaWJyYXJ5IHdoZW4gYW4gaW52YWxpZFxuICogdmFsdWUgaXMgcHJvdmlkZWQgYXMgYSBmdW5jdGlvbiBhcmd1bWVudC5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6ZXJyb3JzfkZhdW5hRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnZhbGlkVmFsdWUobWVzc2FnZSkge1xuICBGYXVuYUVycm9yLmNhbGwodGhpcywgJ0ludmFsaWRWYWx1ZScsIG1lc3NhZ2UpXG59XG5cbnV0aWwuaW5oZXJpdHMoSW52YWxpZFZhbHVlLCBGYXVuYUVycm9yKVxuXG4vKipcbiAqIEV4Y2VwdGlvbiB0aHJvd24gYnkgdGhpcyBjbGllbnQgbGlicmFyeSB3aGVuIGFuIGludmFsaWRcbiAqIHZhbHVlIGlzIHByb3ZpZGVkIGFzIGEgZnVuY3Rpb24gYXJndW1lbnQuXG4gKlxuICogQGV4dGVuZHMgbW9kdWxlOmVycm9yc35GYXVuYUVycm9yXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gSW52YWxpZEFyaXR5KG1pbiwgbWF4LCBhY3R1YWwsIGNhbGxlckZ1bmMpIHtcbiAgY29uc3QgYXJpdHlJbmZvID0gYCR7Y2FsbGVyRnVuY30gZnVuY3Rpb24gcmVxdWlyZXMgJHttZXNzYWdlRm9yQXJpdHkoXG4gICAgbWluLFxuICAgIG1heFxuICApfSBhcmd1bWVudChzKSBidXQgJHthY3R1YWx9IHdlcmUgZ2l2ZW5gXG4gIGNvbnN0IGRvY3VtZW50YXRpb25MaW5rID0gbG9nRG9jdW1lbnRhdGlvbkxpbmsoY2FsbGVyRnVuYylcblxuICBGYXVuYUVycm9yLmNhbGwodGhpcywgJ0ludmFsaWRBcml0eScsIGAke2FyaXR5SW5mb31cXG4ke2RvY3VtZW50YXRpb25MaW5rfWApXG5cbiAgLyoqXG4gICAqIE1pbmltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMubWluID0gbWluXG5cbiAgLyoqXG4gICAqIE1heGltdW0gbnVtYmVyIG9mIGFyZ3VtZW50cy5cbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIHRoaXMubWF4ID0gbWF4XG5cbiAgLyoqXG4gICAqIEFjdHVhbCBudW1iZXIgb2YgYXJndW1lbnRzIGNhbGxlZCB3aXRoLlxuICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5hY3R1YWwgPSBhY3R1YWxcblxuICBmdW5jdGlvbiBtZXNzYWdlRm9yQXJpdHkobWluLCBtYXgpIHtcbiAgICBpZiAobWF4ID09PSBudWxsKSByZXR1cm4gJ2F0IGxlYXN0ICcgKyBtaW5cbiAgICBpZiAobWluID09PSBudWxsKSByZXR1cm4gJ3VwIHRvICcgKyBtYXhcbiAgICBpZiAobWluID09PSBtYXgpIHJldHVybiBtaW5cbiAgICByZXR1cm4gJ2Zyb20gJyArIG1pbiArICcgdG8gJyArIG1heFxuICB9XG5cbiAgZnVuY3Rpb24gbG9nRG9jdW1lbnRhdGlvbkxpbmsoZnVuY3Rpb25OYW1lKSB7XG4gICAgY29uc3QgZG9jc1VSTCA9ICdodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvJ1xuICAgIHJldHVybiBgRm9yIG1vcmUgaW5mbywgc2VlIHRoZSBkb2NzOiAke2RvY3NVUkx9JHtmdW5jdGlvbk5hbWUudG9Mb3dlckNhc2UoKX1gXG4gIH1cbn1cblxudXRpbC5pbmhlcml0cyhJbnZhbGlkQXJpdHksIEZhdW5hRXJyb3IpXG5cbi8qKlxuICogQmFzZSBleGNlcHRpb24gdHlwZSBmb3IgZXJyb3JzIHJldHVybmVkIGJ5IHRoZSBGYXVuYURCIHNlcnZlci5cbiAqXG4gKiBAcGFyYW0ge1JlcXVlc3RSZXN1bHR9IHJlcXVlc3RSZXN1bHRcbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6ZXJyb3JzfkZhdW5hRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBGYXVuYUhUVFBFcnJvcihuYW1lLCByZXF1ZXN0UmVzdWx0KSB7XG4gIHZhciByZXNwb25zZSA9IHJlcXVlc3RSZXN1bHQucmVzcG9uc2VDb250ZW50XG4gIHZhciBlcnJvcnMgPSByZXNwb25zZS5lcnJvcnNcbiAgdmFyIG1lc3NhZ2UgPSBlcnJvcnMubGVuZ3RoID09PSAwID8gJyhlbXB0eSBcImVycm9yc1wiKScgOiBlcnJvcnNbMF0uY29kZVxuICB2YXIgZGVzY3JpcHRpb24gPVxuICAgIGVycm9ycy5sZW5ndGggPT09IDAgPyAnKGVtcHR5IFwiZXJyb3JzXCIpJyA6IGVycm9yc1swXS5kZXNjcmlwdGlvblxuICBGYXVuYUVycm9yLmNhbGwodGhpcywgbmFtZSwgbWVzc2FnZSwgZGVzY3JpcHRpb24pXG5cbiAgLyoqXG4gICAqIEEgd3JhcHBlZCB7QGxpbmsgUmVxdWVzdFJlc3VsdH0gb2JqZWN0LCBjb250YWluaW5nIHRoZSByZXF1ZXN0IGFuZCByZXNwb25zZVxuICAgKiBjb250ZXh0IG9mIHRoZSBmYWlsZWQgcmVxdWVzdC5cbiAgICpcbiAgICogQHR5cGUge1JlcXVlc3RSZXN1bHR9XG4gICAqL1xuICB0aGlzLnJlcXVlc3RSZXN1bHQgPSByZXF1ZXN0UmVzdWx0XG59XG5cbnV0aWwuaW5oZXJpdHMoRmF1bmFIVFRQRXJyb3IsIEZhdW5hRXJyb3IpXG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIHRvIHJldHVybiB0aGUgZXJyb3JzIGZyb20gdGhlIHJlc3BvbnNlIG9iamVjdC5cbiAqXG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5GYXVuYUhUVFBFcnJvci5wcm90b3R5cGUuZXJyb3JzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJlcXVlc3RSZXN1bHQucmVzcG9uc2VDb250ZW50LmVycm9yc1xufVxuXG4vKipcbiAqIFRha2VzIGEge0BsaW5rIFJlcXVlc3RSZXN1bHR9IGFuZCB0aHJvd3MgYW4gYXBwcm9wcmlhdGUgZXhjZXB0aW9uIGlmXG4gKiBpdCBjb250YWlucyBhIGZhaWxlZCByZXF1ZXN0LlxuICpcbiAqIEBwYXJhbSByZXF1ZXN0UmVzdWx0IHtSZXF1ZXN0UmVzdWx0fVxuICovXG5GYXVuYUhUVFBFcnJvci5yYWlzZUZvclN0YXR1c0NvZGUgPSBmdW5jdGlvbihyZXF1ZXN0UmVzdWx0KSB7XG4gIHZhciBjb2RlID0gcmVxdWVzdFJlc3VsdC5zdGF0dXNDb2RlXG4gIGlmIChjb2RlIDwgMjAwIHx8IGNvZGUgPj0gMzAwKSB7XG4gICAgc3dpdGNoIChjb2RlKSB7XG4gICAgICBjYXNlIDQwMDpcbiAgICAgICAgdGhyb3cgbmV3IEJhZFJlcXVlc3QocmVxdWVzdFJlc3VsdClcbiAgICAgIGNhc2UgNDAxOlxuICAgICAgICB0aHJvdyBuZXcgVW5hdXRob3JpemVkKHJlcXVlc3RSZXN1bHQpXG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgdGhyb3cgbmV3IFBlcm1pc3Npb25EZW5pZWQocmVxdWVzdFJlc3VsdClcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICB0aHJvdyBuZXcgTm90Rm91bmQocmVxdWVzdFJlc3VsdClcbiAgICAgIGNhc2UgNDA1OlxuICAgICAgICB0aHJvdyBuZXcgTWV0aG9kTm90QWxsb3dlZChyZXF1ZXN0UmVzdWx0KVxuICAgICAgY2FzZSA1MDA6XG4gICAgICAgIHRocm93IG5ldyBJbnRlcm5hbEVycm9yKHJlcXVlc3RSZXN1bHQpXG4gICAgICBjYXNlIDUwMzpcbiAgICAgICAgdGhyb3cgbmV3IFVuYXZhaWxhYmxlRXJyb3IocmVxdWVzdFJlc3VsdClcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBGYXVuYUhUVFBFcnJvcignVW5rbm93bkVycm9yJywgcmVxdWVzdFJlc3VsdClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBIEhUVFAgNDAwIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7UmVxdWVzdFJlc3VsdH0gcmVxdWVzdFJlc3VsdFxuICogQGV4dGVuZHMgbW9kdWxlOmVycm9yc35GYXVuYUhUVFBFcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEJhZFJlcXVlc3QocmVxdWVzdFJlc3VsdCkge1xuICBGYXVuYUhUVFBFcnJvci5jYWxsKHRoaXMsICdCYWRSZXF1ZXN0JywgcmVxdWVzdFJlc3VsdClcbn1cblxudXRpbC5pbmhlcml0cyhCYWRSZXF1ZXN0LCBGYXVuYUhUVFBFcnJvcilcblxuLyoqXG4gKiBBIEhUVFAgNDAxIGVycm9yLlxuICogQHBhcmFtIHtSZXF1ZXN0UmVzdWx0fSByZXF1ZXN0UmVzdWx0XG4gKiBAZXh0ZW5kcyBtb2R1bGU6ZXJyb3JzfkZhdW5hSFRUUEVycm9yXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gVW5hdXRob3JpemVkKHJlcXVlc3RSZXN1bHQpIHtcbiAgRmF1bmFIVFRQRXJyb3IuY2FsbCh0aGlzLCAnVW5hdXRob3JpemVkJywgcmVxdWVzdFJlc3VsdClcbn1cblxudXRpbC5pbmhlcml0cyhVbmF1dGhvcml6ZWQsIEZhdW5hSFRUUEVycm9yKVxuXG4vKipcbiAqIEEgSFRUUCA0MDMgZXJyb3IuXG4gKiBAcGFyYW0ge1JlcXVlc3RSZXN1bHR9IHJlcXVlc3RSZXN1bHRcbiAqIEBleHRlbmRzIG1vZHVsZTplcnJvcnN+RmF1bmFIVFRQRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBQZXJtaXNzaW9uRGVuaWVkKHJlcXVlc3RSZXN1bHQpIHtcbiAgRmF1bmFIVFRQRXJyb3IuY2FsbCh0aGlzLCAnUGVybWlzc2lvbkRlbmllZCcsIHJlcXVlc3RSZXN1bHQpXG59XG5cbnV0aWwuaW5oZXJpdHMoUGVybWlzc2lvbkRlbmllZCwgRmF1bmFIVFRQRXJyb3IpXG5cbi8qKlxuICogQSBIVFRQIDQwNCBlcnJvci5cbiAqIEBwYXJhbSB7UmVxdWVzdFJlc3VsdH0gcmVxdWVzdFJlc3VsdFxuICogQGV4dGVuZHMgbW9kdWxlOmVycm9yc35GYXVuYUhUVFBFcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIE5vdEZvdW5kKHJlcXVlc3RSZXN1bHQpIHtcbiAgRmF1bmFIVFRQRXJyb3IuY2FsbCh0aGlzLCAnTm90Rm91bmQnLCByZXF1ZXN0UmVzdWx0KVxufVxuXG51dGlsLmluaGVyaXRzKE5vdEZvdW5kLCBGYXVuYUhUVFBFcnJvcilcblxuLyoqXG4gKiBBIEhUVFAgNDA1IGVycm9yLlxuICogQHBhcmFtIHtSZXF1ZXN0UmVzdWx0fSByZXF1ZXN0UmVzdWx0XG4gKiBAZXh0ZW5kcyBtb2R1bGU6ZXJyb3JzfkZhdW5hSFRUUEVycm9yXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gTWV0aG9kTm90QWxsb3dlZChyZXF1ZXN0UmVzdWx0KSB7XG4gIEZhdW5hSFRUUEVycm9yLmNhbGwodGhpcywgJ01ldGhvZE5vdEFsbG93ZWQnLCByZXF1ZXN0UmVzdWx0KVxufVxuXG51dGlsLmluaGVyaXRzKE1ldGhvZE5vdEFsbG93ZWQsIEZhdW5hSFRUUEVycm9yKVxuXG4vKipcbiAqIEEgSFRUUCA1MDAgZXJyb3IuXG4gKiBAcGFyYW0ge1JlcXVlc3RSZXN1bHR9IHJlcXVlc3RSZXN1bHRcbiAqIEBleHRlbmRzIG1vZHVsZTplcnJvcnN+RmF1bmFIVFRQRXJyb3JcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBJbnRlcm5hbEVycm9yKHJlcXVlc3RSZXN1bHQpIHtcbiAgRmF1bmFIVFRQRXJyb3IuY2FsbCh0aGlzLCAnSW50ZXJuYWxFcnJvcicsIHJlcXVlc3RSZXN1bHQpXG59XG5cbnV0aWwuaW5oZXJpdHMoSW50ZXJuYWxFcnJvciwgRmF1bmFIVFRQRXJyb3IpXG5cbi8qKlxuICogQSBIVFRQIDUwMyBlcnJvci5cbiAqIEBwYXJhbSB7UmVxdWVzdFJlc3VsdH0gcmVxdWVzdFJlc3VsdFxuICogQGV4dGVuZHMgbW9kdWxlOmVycm9yc35GYXVuYUhUVFBFcnJvclxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFVuYXZhaWxhYmxlRXJyb3IocmVxdWVzdFJlc3VsdCkge1xuICBGYXVuYUhUVFBFcnJvci5jYWxsKHRoaXMsICdVbmF2YWlsYWJsZUVycm9yJywgcmVxdWVzdFJlc3VsdClcbn1cblxudXRpbC5pbmhlcml0cyhVbmF2YWlsYWJsZUVycm9yLCBGYXVuYUhUVFBFcnJvcilcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIEZhdW5hSFRUUEVycm9yOiBGYXVuYUhUVFBFcnJvcixcbiAgSW52YWxpZFZhbHVlOiBJbnZhbGlkVmFsdWUsXG4gIEludmFsaWRBcml0eTogSW52YWxpZEFyaXR5LFxuICBCYWRSZXF1ZXN0OiBCYWRSZXF1ZXN0LFxuICBVbmF1dGhvcml6ZWQ6IFVuYXV0aG9yaXplZCxcbiAgUGVybWlzc2lvbkRlbmllZDogUGVybWlzc2lvbkRlbmllZCxcbiAgTm90Rm91bmQ6IE5vdEZvdW5kLFxuICBNZXRob2ROb3RBbGxvd2VkOiBNZXRob2ROb3RBbGxvd2VkLFxuICBJbnRlcm5hbEVycm9yOiBJbnRlcm5hbEVycm9yLFxuICBVbmF2YWlsYWJsZUVycm9yOiBVbmF2YWlsYWJsZUVycm9yLFxufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFubm90YXRlO1xuXG5mdW5jdGlvbiBhbm5vdGF0ZShmbikge1xuXG4gIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBwYXJzZSBmdW5jdGlvbiBzaWduYXR1cmUgZm9yIGluamVjdGlvbiBkZXBlbmRlbmNpZXM6IE9iamVjdCBpcyBub3QgYSBmdW5jdGlvbicpO1xuICB9XG5cbiAgaWYgKCFmbi5sZW5ndGgpIHJldHVybiBbXTtcblxuICB2YXIgaW5qZWN0cyA9IC9eKClcXCg/KFteKT1dKilcXCk/ICo9Pi8uZXhlYyhmbiArICcnKSB8fFxuICAgICAgICAgICAgICAgIC9eW14oXSsoW14gXFwoXSopICpcXCgoW15cXCldKilcXCkvLmV4ZWMoZm4gKyAnJyk7XG5cbiAgaWYgKCFpbmplY3RzKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgcGFyc2UgZnVuY3Rpb24gc2lnbmF0dXJlIGZvciBpbmplY3Rpb24gZGVwZW5kZW5jaWVzOiAnICsgZm4gKyAnJyk7XG4gIH1cblxuICB2YXIgYXJndW1lbnRTdHJpbmcgPSBpbmplY3RzWzJdXG5cbiAgLy8gU3RyaXAgbXVsdGktbGluZSBjb21tZW50czpcbiAgLy8gVXNlcyB0aGUgbGF6eS1xdWFudGlmaWVyICguKj8pOiBodHRwOi8vd3d3LnJleGVnZy5jb20vcmVnZXgtcXVhbnRpZmllcnMuaHRtbCNsYXp5X3NvbHV0aW9uXG4gIC5yZXBsYWNlKC9cXC9cXCpbXFxTXFxzXSo/XFwqXFwvL2csICcgJylcblxuICAvLyBTdHJpcCBzaW5nbGUtbGluZSBjb21tZW50czpcbiAgLnJlcGxhY2UoL1xcL1xcLy4qL2csICcgJyk7XG5cbiAgZnVuY3Rpb24gZ3JvdXBTdWJBcmd1bWVudHMoXywgdHlwZSwga2V5cykge1xuICAgIHJldHVybiB0eXBlICsga2V5cy5zcGxpdCgnLCcpXG4gICAgLm1hcChmdW5jdGlvbiAoYXJnKSB7XG4gICAgICByZXR1cm4gYXJnICYmIGFyZy50cmltKCk7XG4gICAgfSlcbiAgICAuZmlsdGVyKEJvb2xlYW4pXG4gICAgLmpvaW4oJ0AnKTtcbiAgfVxuXG4gIGFyZ3VtZW50U3RyaW5nID0gYXJndW1lbnRTdHJpbmcucmVwbGFjZSgvKFxceykoW159XSopXFx9L2csIGdyb3VwU3ViQXJndW1lbnRzKTtcbiAgYXJndW1lbnRTdHJpbmcgPSBhcmd1bWVudFN0cmluZy5yZXBsYWNlKC8oXFxbKShbXn1dKilcXF0vZywgZ3JvdXBTdWJBcmd1bWVudHMpO1xuXG4gIHJldHVybiBhcmd1bWVudFN0cmluZy5zcGxpdCgnLCcpXG4gIC5tYXAoZnVuY3Rpb24gKGFyZykge1xuICAgIHJldHVybiBhcmcgJiYgYXJnLnRyaW0oKTtcbiAgfSlcbiAgLm1hcChmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGFyZ1swXSA9PT0gJ3snKSB7XG4gICAgICByZXR1cm4gYXJnLnN1YnN0cmluZygxKS5zcGxpdCgnQCcpO1xuICAgIH1cbiAgICBpZiAoYXJnWzBdID09PSAnWycpIHtcbiAgICAgIHJldHVybiB7IGl0ZW1zOiBhcmcuc3Vic3RyaW5nKDEpLnNwbGl0KCdAJykgfTtcbiAgICB9XG4gICAgcmV0dXJuIGFyZztcbiAgfSlcbiAgLmZpbHRlcihCb29sZWFuKTtcblxufVxuIiwiXG4vKipcbiAqIE1vZHVsZSBleHBvcnRzLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZGVwcmVjYXRlO1xuXG4vKipcbiAqIE1hcmsgdGhhdCBhIG1ldGhvZCBzaG91bGQgbm90IGJlIHVzZWQuXG4gKiBSZXR1cm5zIGEgbW9kaWZpZWQgZnVuY3Rpb24gd2hpY2ggd2FybnMgb25jZSBieSBkZWZhdWx0LlxuICpcbiAqIElmIGBsb2NhbFN0b3JhZ2Uubm9EZXByZWNhdGlvbiA9IHRydWVgIGlzIHNldCwgdGhlbiBpdCBpcyBhIG5vLW9wLlxuICpcbiAqIElmIGBsb2NhbFN0b3JhZ2UudGhyb3dEZXByZWNhdGlvbiA9IHRydWVgIGlzIHNldCwgdGhlbiBkZXByZWNhdGVkIGZ1bmN0aW9uc1xuICogd2lsbCB0aHJvdyBhbiBFcnJvciB3aGVuIGludm9rZWQuXG4gKlxuICogSWYgYGxvY2FsU3RvcmFnZS50cmFjZURlcHJlY2F0aW9uID0gdHJ1ZWAgaXMgc2V0LCB0aGVuIGRlcHJlY2F0ZWQgZnVuY3Rpb25zXG4gKiB3aWxsIGludm9rZSBgY29uc29sZS50cmFjZSgpYCBpbnN0ZWFkIG9mIGBjb25zb2xlLmVycm9yKClgLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIC0gdGhlIGZ1bmN0aW9uIHRvIGRlcHJlY2F0ZVxuICogQHBhcmFtIHtTdHJpbmd9IG1zZyAtIHRoZSBzdHJpbmcgdG8gcHJpbnQgdG8gdGhlIGNvbnNvbGUgd2hlbiBgZm5gIGlzIGludm9rZWRcbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYSBuZXcgXCJkZXByZWNhdGVkXCIgdmVyc2lvbiBvZiBgZm5gXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGRlcHJlY2F0ZSAoZm4sIG1zZykge1xuICBpZiAoY29uZmlnKCdub0RlcHJlY2F0aW9uJykpIHtcbiAgICByZXR1cm4gZm47XG4gIH1cblxuICB2YXIgd2FybmVkID0gZmFsc2U7XG4gIGZ1bmN0aW9uIGRlcHJlY2F0ZWQoKSB7XG4gICAgaWYgKCF3YXJuZWQpIHtcbiAgICAgIGlmIChjb25maWcoJ3Rocm93RGVwcmVjYXRpb24nKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcbiAgICAgIH0gZWxzZSBpZiAoY29uZmlnKCd0cmFjZURlcHJlY2F0aW9uJykpIHtcbiAgICAgICAgY29uc29sZS50cmFjZShtc2cpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICB9XG4gICAgICB3YXJuZWQgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIHJldHVybiBkZXByZWNhdGVkO1xufVxuXG4vKipcbiAqIENoZWNrcyBgbG9jYWxTdG9yYWdlYCBmb3IgYm9vbGVhbiB2YWx1ZXMgZm9yIHRoZSBnaXZlbiBgbmFtZWAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEByZXR1cm5zIHtCb29sZWFufVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gY29uZmlnIChuYW1lKSB7XG4gIC8vIGFjY2Vzc2luZyBnbG9iYWwubG9jYWxTdG9yYWdlIGNhbiB0cmlnZ2VyIGEgRE9NRXhjZXB0aW9uIGluIHNhbmRib3hlZCBpZnJhbWVzXG4gIHRyeSB7XG4gICAgaWYgKCFnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm4gZmFsc2U7XG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHZhbCA9IGdsb2JhbC5sb2NhbFN0b3JhZ2VbbmFtZV07XG4gIGlmIChudWxsID09IHZhbCkgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gU3RyaW5nKHZhbCkudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbi8qKlxuICogVXNlZCBmb3IgZnVuY3Rpb25zIHRoYXQgdGFrZSBhbiBvcHRpb25zIG9iamVjdHMuXG4gKiBGaWxscyBpbiBkZWZhdWx0cyBmb3Igb3B0aW9ucyBub3QgcHJvdmlkZWQuXG4gKiBUaHJvd3MgZXJyb3JzIGZvciBwcm92aWRlZCBvcHRpb25zIHRoYXQgYXJlbid0IHJlY29nbml6ZWQuXG4gKiBBIGRlZmF1bHQgdmFsdWUgb2YgYHVuZGVmaW5lZGAgaXMgdXNlZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSBvcHRpb24gbXVzdCBiZSBwcm92aWRlZC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGFwcGx5RGVmYXVsdHMocHJvdmlkZWQsIGRlZmF1bHRzKSB7XG4gIHZhciBvdXQgPSB7fVxuXG4gIGZvciAodmFyIHByb3ZpZGVkS2V5IGluIHByb3ZpZGVkKSB7XG4gICAgaWYgKCEocHJvdmlkZWRLZXkgaW4gZGVmYXVsdHMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIHN1Y2ggb3B0aW9uICcgKyBwcm92aWRlZEtleSlcbiAgICB9XG4gICAgb3V0W3Byb3ZpZGVkS2V5XSA9IHByb3ZpZGVkW3Byb3ZpZGVkS2V5XVxuICB9XG5cbiAgZm9yICh2YXIgZGVmYXVsdHNLZXkgaW4gZGVmYXVsdHMpIHtcbiAgICBpZiAoIShkZWZhdWx0c0tleSBpbiBvdXQpKSB7XG4gICAgICBvdXRbZGVmYXVsdHNLZXldID0gZGVmYXVsdHNbZGVmYXVsdHNLZXldXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG91dFxufVxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGhvdXQgYW55IGtleXMgd2hlcmUgdGhlIHZhbHVlIHdvdWxkIGJlIG51bGwgb3IgdW5kZWZpbmVkLlxuICogQHByaXZhdGVcbiAqICovXG5mdW5jdGlvbiByZW1vdmVOdWxsQW5kVW5kZWZpbmVkVmFsdWVzKG9iamVjdCkge1xuICB2YXIgcmVzID0ge31cbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIHZhciB2YWwgPSBvYmplY3Rba2V5XVxuICAgIGlmICh2YWwgIT09IG51bGwgJiYgdmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc1trZXldID0gdmFsXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IG9iamVjdCB3aXRob3V0IGFueSBrZXlzIHdoZXJlIHRoZSB2YWx1ZSB3b3VsZCBiZSB1bmRlZmluZWQuXG4gKiBAcHJpdmF0ZVxuICogKi9cbmZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZFZhbHVlcyhvYmplY3QpIHtcbiAgdmFyIHJlcyA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICB2YXIgdmFsID0gb2JqZWN0W2tleV1cbiAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc1trZXldID0gdmFsXG4gICAgfVxuICB9XG4gIHJldHVybiByZXNcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgYm9vbGVhbiBzdGF0aW5nIGlmIHRoZSBnaXZlbiBvYmplY3QgaGFzIGEgZ2l2ZW4gcHJvcGVydHlcbiAqIEBwcml2YXRlXG4gKiAqL1xuZnVuY3Rpb24gY2hlY2tJbnN0YW5jZUhhc1Byb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsICYmIEJvb2xlYW4ob2JqW3Byb3BdKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYXBwbHlEZWZhdWx0czogYXBwbHlEZWZhdWx0cyxcbiAgcmVtb3ZlTnVsbEFuZFVuZGVmaW5lZFZhbHVlczogcmVtb3ZlTnVsbEFuZFVuZGVmaW5lZFZhbHVlcyxcbiAgcmVtb3ZlVW5kZWZpbmVkVmFsdWVzOiByZW1vdmVVbmRlZmluZWRWYWx1ZXMsXG4gIGNoZWNrSW5zdGFuY2VIYXNQcm9wZXJ0eTogY2hlY2tJbnN0YW5jZUhhc1Byb3BlcnR5LFxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciB1dGlsID0gcmVxdWlyZSgnLi9fdXRpbCcpXG5cbi8qKlxuICogQSByZXByZXNlbnRhdGlvbiBvZiBhIEZhdW5hREIgUXVlcnkgRXhwcmVzc2lvbi4gR2VuZXJhbGx5LCB5b3Ugc2hvdWxkbid0IG5lZWRcbiAqIHRvIHVzZSB0aGlzIGNsYXNzIGRpcmVjdGx5OyB1c2UgdGhlIFF1ZXJ5IGhlbHBlcnMgZGVmaW5lZCBpbiB7QGxpbmsgbW9kdWxlOnF1ZXJ5fS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdGhhdCByZXByZXNlbnRzIGEgUXVlcnkgdG8gYmUgdHJlYXRlZCBhcyBhbiBFeHByZXNzaW9uLlxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEV4cHIob2JqKSB7XG4gIHRoaXMucmF3ID0gb2JqXG59XG5cbkV4cHIucHJvdG90eXBlLl9pc0ZhdW5hRXhwciA9IHRydWVcblxuRXhwci5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnJhd1xufVxuXG52YXIgdmFyQXJnc0Z1bmN0aW9ucyA9IFtcbiAgJ0RvJyxcbiAgJ0NhbGwnLFxuICAnVW5pb24nLFxuICAnSW50ZXJzZWN0aW9uJyxcbiAgJ0RpZmZlcmVuY2UnLFxuICAnRXF1YWxzJyxcbiAgJ0FkZCcsXG4gICdCaXRBbmQnLFxuICAnQml0T3InLFxuICAnQml0WG9yJyxcbiAgJ0RpdmlkZScsXG4gICdNYXgnLFxuICAnTWluJyxcbiAgJ01vZHVsbycsXG4gICdNdWx0aXBseScsXG4gICdTdWJ0cmFjdCcsXG4gICdMVCcsXG4gICdMVEUnLFxuICAnR1QnLFxuICAnR1RFJyxcbiAgJ0FuZCcsXG4gICdPcicsXG5dXG5cbi8vIEZRTCBmdW5jdGlvbiBuYW1lcyBjb21lIGFjcm9zcyB0aGUgd2lyZSBhcyBhbGwgbG93ZXJjYXNlIGxldHRlcnNcbi8vIChsaWtlIHRoZSBrZXkgb2YgdGhpcyBvYmplY3QpLiBOb3QgYWxsIGFyZSBwcm9wZXJseSBzbmFrZS1jYXNlZFxuLy8gb24gdGhlIENvcmUgc2lkZSwgd2hpY2ggY2F1c2VzIGltcHJvcGVyIGNhcGl0YWxpemF0aW9ucy5cbi8vXG4vLyBKUyBEcml2ZXIgcGF0Y2g6IGh0dHBzOi8vZmF1bmFkYi5hdGxhc3NpYW4ubmV0L2Jyb3dzZS9GRS01NDBcbi8vIENvcmUgdXBkYXRlOiBodHRwczovL2ZhdW5hZGIuYXRsYXNzaWFuLm5ldC9icm93c2UvRU5HLTIxMTBcblxudmFyIHNwZWNpYWxDYXNlcyA9IHtcbiAgY29udGFpbnNzdHI6ICdDb250YWluc1N0cicsXG4gIGNvbnRhaW5zc3RycmVnZXg6ICdDb250YWluc1N0clJlZ2V4JyxcbiAgZW5kc3dpdGg6ICdFbmRzV2l0aCcsXG4gIGZpbmRzdHI6ICdGaW5kU3RyJyxcbiAgZmluZHN0cnJlZ2V4OiAnRmluZFN0clJlZ2V4JyxcbiAgZ3Q6ICdHVCcsXG4gIGd0ZTogJ0dURScsXG4gIGlzX25vbmVtcHR5OiAnaXNfbm9uX2VtcHR5JyxcbiAgbG93ZXJjYXNlOiAnTG93ZXJDYXNlJyxcbiAgbHQ6ICdMVCcsXG4gIGx0ZTogJ0xURScsXG4gIGx0cmltOiAnTFRyaW0nLFxuICBydHJpbTogJ1JUcmltJyxcbiAgcmVnZXhlc2NhcGU6ICdSZWdleEVzY2FwZScsXG4gIHJlcGxhY2VzdHI6ICdSZXBsYWNlU3RyJyxcbiAgcmVwbGFjZXN0cnJlZ2V4OiAnUmVwbGFjZVN0clJlZ2V4JyxcbiAgc3RhcnRzd2l0aDogJ1N0YXJ0c1dpdGgnLFxuICBzdWJzdHJpbmc6ICdTdWJTdHJpbmcnLFxuICB0aXRsZWNhc2U6ICdUaXRsZUNhc2UnLFxuICB1cHBlcmNhc2U6ICdVcHBlckNhc2UnLFxufVxuXG52YXIgZXhwclRvU3RyaW5nID0gZnVuY3Rpb24oZXhwciwgY2FsbGVyKSB7XG4gIHZhciBpc0V4cHIgPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIGUgaW5zdGFuY2VvZiBFeHByIHx8IHV0aWwuY2hlY2tJbnN0YW5jZUhhc1Byb3BlcnR5KGUsICdfaXNGYXVuYUV4cHInKVxuICB9XG5cbiAgaWYgKGlzRXhwcihleHByKSkge1xuICAgIGlmICgndmFsdWUnIGluIGV4cHIpIHJldHVybiBleHByLnRvU3RyaW5nKClcbiAgICBleHByID0gZXhwci5yYXdcbiAgfVxuXG4gIHZhciB0eXBlID0gdHlwZW9mIGV4cHJcblxuICBpZiAodHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZXhwcilcbiAgfVxuXG4gIGlmICh0eXBlID09PSAnc3ltYm9sJyB8fCB0eXBlID09PSAnbnVtYmVyJyB8fCB0eXBlID09PSAnYm9vbGVhbicpIHtcbiAgICByZXR1cm4gZXhwci50b1N0cmluZygpXG4gIH1cblxuICBpZiAodHlwZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gJ3VuZGVmaW5lZCdcbiAgfVxuXG4gIGlmIChleHByID09PSBudWxsKSB7XG4gICAgcmV0dXJuICdudWxsJ1xuICB9XG5cbiAgdmFyIHByaW50T2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICd7JyArXG4gICAgICBPYmplY3Qua2V5cyhvYmopXG4gICAgICAgIC5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgICAgIHJldHVybiBrICsgJzogJyArIGV4cHJUb1N0cmluZyhvYmpba10pXG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcsICcpICtcbiAgICAgICd9J1xuICAgIClcbiAgfVxuXG4gIHZhciBwcmludEFycmF5ID0gZnVuY3Rpb24oYXJyYXksIHRvU3RyKSB7XG4gICAgcmV0dXJuIGFycmF5XG4gICAgICAubWFwKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIHRvU3RyKGl0ZW0pXG4gICAgICB9KVxuICAgICAgLmpvaW4oJywgJylcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KGV4cHIpKSB7XG4gICAgdmFyIGFycmF5ID0gcHJpbnRBcnJheShleHByLCBleHByVG9TdHJpbmcpXG5cbiAgICByZXR1cm4gdmFyQXJnc0Z1bmN0aW9ucy5pbmRleE9mKGNhbGxlcikgIT0gLTEgPyBhcnJheSA6ICdbJyArIGFycmF5ICsgJ10nXG4gIH1cblxuICBpZiAoJ21hdGNoJyBpbiBleHByKSB7XG4gICAgdmFyIG1hdGNoU3RyID0gZXhwclRvU3RyaW5nKGV4cHJbJ21hdGNoJ10pXG4gICAgdmFyIHRlcm1zID0gZXhwclsndGVybXMnXSB8fCBbXVxuXG4gICAgaWYgKGlzRXhwcih0ZXJtcykpIHRlcm1zID0gdGVybXMucmF3XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0ZXJtcykgJiYgdGVybXMubGVuZ3RoID09IDApXG4gICAgICByZXR1cm4gJ01hdGNoKCcgKyBtYXRjaFN0ciArICcpJ1xuXG4gICAgcmV0dXJuICdNYXRjaCgnICsgbWF0Y2hTdHIgKyAnLCAnICsgcHJpbnRBcnJheSh0ZXJtcywgZXhwclRvU3RyaW5nKSArICcpJ1xuICB9XG5cbiAgaWYgKCdwYWdpbmF0ZScgaW4gZXhwcikge1xuICAgIHZhciBzZXRTdHIgPSBleHByVG9TdHJpbmcoZXhwclsncGFnaW5hdGUnXSlcblxuICAgIHZhciBleHByMiA9IE9iamVjdC5hc3NpZ24oe30sIGV4cHIpXG4gICAgZGVsZXRlIGV4cHIyWydwYWdpbmF0ZSddXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoZXhwcjIpLmxlbmd0aCA9PSAwKSByZXR1cm4gJ1BhZ2luYXRlKCcgKyBzZXRTdHIgKyAnKSdcblxuICAgIHJldHVybiAnUGFnaW5hdGUoJyArIHNldFN0ciArICcsICcgKyBwcmludE9iamVjdChleHByMikgKyAnKSdcbiAgfVxuXG4gIGlmICgnbGV0JyBpbiBleHByICYmICdpbicgaW4gZXhwcikge1xuICAgIHZhciBsZXRFeHByID0gJydcblxuICAgIGlmIChBcnJheS5pc0FycmF5KGV4cHJbJ2xldCddKSlcbiAgICAgIGxldEV4cHIgPSAnWycgKyBwcmludEFycmF5KGV4cHJbJ2xldCddLCBwcmludE9iamVjdCkgKyAnXSdcbiAgICBlbHNlIGxldEV4cHIgPSBwcmludE9iamVjdChleHByWydsZXQnXSlcblxuICAgIHJldHVybiAnTGV0KCcgKyBsZXRFeHByICsgJywgJyArIGV4cHJUb1N0cmluZyhleHByWydpbiddKSArICcpJ1xuICB9XG5cbiAgaWYgKCdvYmplY3QnIGluIGV4cHIpIHJldHVybiBwcmludE9iamVjdChleHByWydvYmplY3QnXSlcblxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV4cHIpXG4gIHZhciBmbiA9IGtleXNbMF1cblxuICAvLyBGb3IgRlFMIGZ1bmN0aW9ucyB3aXRoIHNwZWNpYWwgZm9ybWF0dGluZyBjb25jZXJucywgd2VcbiAgLy8gdXNlIHRoZSBzcGVjaWFsQ2FzZXMgb2JqZWN0IGFib3ZlIHRvIGRlZmluZSB0aGVpciBjYXNpbmcuXG4gIGlmIChmbiBpbiBzcGVjaWFsQ2FzZXMpIGZuID0gc3BlY2lhbENhc2VzW2ZuXVxuXG4gIGZuID0gZm5cbiAgICAuc3BsaXQoJ18nKVxuICAgIC5tYXAoZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpXG4gICAgfSlcbiAgICAuam9pbignJylcblxuICB2YXIgYXJncyA9IGtleXMubWFwKGZ1bmN0aW9uKGspIHtcbiAgICB2YXIgdiA9IGV4cHJba11cbiAgICByZXR1cm4gZXhwclRvU3RyaW5nKHYsIGZuKVxuICB9KVxuXG4gIHZhciBzaG91bGRSZXZlcnNlQXJncyA9IFsnZmlsdGVyJywgJ21hcCcsICdmb3JlYWNoJ10uc29tZShmdW5jdGlvbihmbikge1xuICAgIHJldHVybiBmbiBpbiBleHByXG4gIH0pXG5cbiAgaWYgKHNob3VsZFJldmVyc2VBcmdzKSB7XG4gICAgYXJncy5yZXZlcnNlKClcbiAgfVxuXG4gIGFyZ3MgPSBhcmdzLmpvaW4oJywgJylcblxuICByZXR1cm4gZm4gKyAnKCcgKyBhcmdzICsgJyknXG59XG5cbkV4cHIudG9TdHJpbmcgPSBleHByVG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBFeHByXG4iLCIndXNlIHN0cmljdCdcblxuZXhwb3J0cy5ieXRlTGVuZ3RoID0gYnl0ZUxlbmd0aFxuZXhwb3J0cy50b0J5dGVBcnJheSA9IHRvQnl0ZUFycmF5XG5leHBvcnRzLmZyb21CeXRlQXJyYXkgPSBmcm9tQnl0ZUFycmF5XG5cbnZhciBsb29rdXAgPSBbXVxudmFyIHJldkxvb2t1cCA9IFtdXG52YXIgQXJyID0gdHlwZW9mIFVpbnQ4QXJyYXkgIT09ICd1bmRlZmluZWQnID8gVWludDhBcnJheSA6IEFycmF5XG5cbnZhciBjb2RlID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky8nXG5mb3IgKHZhciBpID0gMCwgbGVuID0gY29kZS5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICBsb29rdXBbaV0gPSBjb2RlW2ldXG4gIHJldkxvb2t1cFtjb2RlLmNoYXJDb2RlQXQoaSldID0gaVxufVxuXG4vLyBTdXBwb3J0IGRlY29kaW5nIFVSTC1zYWZlIGJhc2U2NCBzdHJpbmdzLCBhcyBOb2RlLmpzIGRvZXMuXG4vLyBTZWU6IGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0Jhc2U2NCNVUkxfYXBwbGljYXRpb25zXG5yZXZMb29rdXBbJy0nLmNoYXJDb2RlQXQoMCldID0gNjJcbnJldkxvb2t1cFsnXycuY2hhckNvZGVBdCgwKV0gPSA2M1xuXG5mdW5jdGlvbiBnZXRMZW5zIChiNjQpIHtcbiAgdmFyIGxlbiA9IGI2NC5sZW5ndGhcblxuICBpZiAobGVuICUgNCA+IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgc3RyaW5nLiBMZW5ndGggbXVzdCBiZSBhIG11bHRpcGxlIG9mIDQnKVxuICB9XG5cbiAgLy8gVHJpbSBvZmYgZXh0cmEgYnl0ZXMgYWZ0ZXIgcGxhY2Vob2xkZXIgYnl0ZXMgYXJlIGZvdW5kXG4gIC8vIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2JlYXRnYW1taXQvYmFzZTY0LWpzL2lzc3Vlcy80MlxuICB2YXIgdmFsaWRMZW4gPSBiNjQuaW5kZXhPZignPScpXG4gIGlmICh2YWxpZExlbiA9PT0gLTEpIHZhbGlkTGVuID0gbGVuXG5cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IHZhbGlkTGVuID09PSBsZW5cbiAgICA/IDBcbiAgICA6IDQgLSAodmFsaWRMZW4gJSA0KVxuXG4gIHJldHVybiBbdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbl1cbn1cblxuLy8gYmFzZTY0IGlzIDQvMyArIHVwIHRvIHR3byBjaGFyYWN0ZXJzIG9mIHRoZSBvcmlnaW5hbCBkYXRhXG5mdW5jdGlvbiBieXRlTGVuZ3RoIChiNjQpIHtcbiAgdmFyIGxlbnMgPSBnZXRMZW5zKGI2NClcbiAgdmFyIHZhbGlkTGVuID0gbGVuc1swXVxuICB2YXIgcGxhY2VIb2xkZXJzTGVuID0gbGVuc1sxXVxuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gX2J5dGVMZW5ndGggKGI2NCwgdmFsaWRMZW4sIHBsYWNlSG9sZGVyc0xlbikge1xuICByZXR1cm4gKCh2YWxpZExlbiArIHBsYWNlSG9sZGVyc0xlbikgKiAzIC8gNCkgLSBwbGFjZUhvbGRlcnNMZW5cbn1cblxuZnVuY3Rpb24gdG9CeXRlQXJyYXkgKGI2NCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW5zID0gZ2V0TGVucyhiNjQpXG4gIHZhciB2YWxpZExlbiA9IGxlbnNbMF1cbiAgdmFyIHBsYWNlSG9sZGVyc0xlbiA9IGxlbnNbMV1cblxuICB2YXIgYXJyID0gbmV3IEFycihfYnl0ZUxlbmd0aChiNjQsIHZhbGlkTGVuLCBwbGFjZUhvbGRlcnNMZW4pKVxuXG4gIHZhciBjdXJCeXRlID0gMFxuXG4gIC8vIGlmIHRoZXJlIGFyZSBwbGFjZWhvbGRlcnMsIG9ubHkgZ2V0IHVwIHRvIHRoZSBsYXN0IGNvbXBsZXRlIDQgY2hhcnNcbiAgdmFyIGxlbiA9IHBsYWNlSG9sZGVyc0xlbiA+IDBcbiAgICA/IHZhbGlkTGVuIC0gNFxuICAgIDogdmFsaWRMZW5cblxuICB2YXIgaVxuICBmb3IgKGkgPSAwOyBpIDwgbGVuOyBpICs9IDQpIHtcbiAgICB0bXAgPVxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpKV0gPDwgMTgpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA8PCAxMikgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMildIDw8IDYpIHxcbiAgICAgIHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMyldXG4gICAgYXJyW2N1ckJ5dGUrK10gPSAodG1wID4+IDE2KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9ICh0bXAgPj4gOCkgJiAweEZGXG4gICAgYXJyW2N1ckJ5dGUrK10gPSB0bXAgJiAweEZGXG4gIH1cblxuICBpZiAocGxhY2VIb2xkZXJzTGVuID09PSAyKSB7XG4gICAgdG1wID1cbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSldIDw8IDIpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDEpXSA+PiA0KVxuICAgIGFycltjdXJCeXRlKytdID0gdG1wICYgMHhGRlxuICB9XG5cbiAgaWYgKHBsYWNlSG9sZGVyc0xlbiA9PT0gMSkge1xuICAgIHRtcCA9XG4gICAgICAocmV2TG9va3VwW2I2NC5jaGFyQ29kZUF0KGkpXSA8PCAxMCkgfFxuICAgICAgKHJldkxvb2t1cFtiNjQuY2hhckNvZGVBdChpICsgMSldIDw8IDQpIHxcbiAgICAgIChyZXZMb29rdXBbYjY0LmNoYXJDb2RlQXQoaSArIDIpXSA+PiAyKVxuICAgIGFycltjdXJCeXRlKytdID0gKHRtcCA+PiA4KSAmIDB4RkZcbiAgICBhcnJbY3VyQnl0ZSsrXSA9IHRtcCAmIDB4RkZcbiAgfVxuXG4gIHJldHVybiBhcnJcbn1cblxuZnVuY3Rpb24gdHJpcGxldFRvQmFzZTY0IChudW0pIHtcbiAgcmV0dXJuIGxvb2t1cFtudW0gPj4gMTggJiAweDNGXSArXG4gICAgbG9va3VwW251bSA+PiAxMiAmIDB4M0ZdICtcbiAgICBsb29rdXBbbnVtID4+IDYgJiAweDNGXSArXG4gICAgbG9va3VwW251bSAmIDB4M0ZdXG59XG5cbmZ1bmN0aW9uIGVuY29kZUNodW5rICh1aW50OCwgc3RhcnQsIGVuZCkge1xuICB2YXIgdG1wXG4gIHZhciBvdXRwdXQgPSBbXVxuICBmb3IgKHZhciBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkgKz0gMykge1xuICAgIHRtcCA9XG4gICAgICAoKHVpbnQ4W2ldIDw8IDE2KSAmIDB4RkYwMDAwKSArXG4gICAgICAoKHVpbnQ4W2kgKyAxXSA8PCA4KSAmIDB4RkYwMCkgK1xuICAgICAgKHVpbnQ4W2kgKyAyXSAmIDB4RkYpXG4gICAgb3V0cHV0LnB1c2godHJpcGxldFRvQmFzZTY0KHRtcCkpXG4gIH1cbiAgcmV0dXJuIG91dHB1dC5qb2luKCcnKVxufVxuXG5mdW5jdGlvbiBmcm9tQnl0ZUFycmF5ICh1aW50OCkge1xuICB2YXIgdG1wXG4gIHZhciBsZW4gPSB1aW50OC5sZW5ndGhcbiAgdmFyIGV4dHJhQnl0ZXMgPSBsZW4gJSAzIC8vIGlmIHdlIGhhdmUgMSBieXRlIGxlZnQsIHBhZCAyIGJ5dGVzXG4gIHZhciBwYXJ0cyA9IFtdXG4gIHZhciBtYXhDaHVua0xlbmd0aCA9IDE2MzgzIC8vIG11c3QgYmUgbXVsdGlwbGUgb2YgM1xuXG4gIC8vIGdvIHRocm91Z2ggdGhlIGFycmF5IGV2ZXJ5IHRocmVlIGJ5dGVzLCB3ZSdsbCBkZWFsIHdpdGggdHJhaWxpbmcgc3R1ZmYgbGF0ZXJcbiAgZm9yICh2YXIgaSA9IDAsIGxlbjIgPSBsZW4gLSBleHRyYUJ5dGVzOyBpIDwgbGVuMjsgaSArPSBtYXhDaHVua0xlbmd0aCkge1xuICAgIHBhcnRzLnB1c2goZW5jb2RlQ2h1bmsoXG4gICAgICB1aW50OCwgaSwgKGkgKyBtYXhDaHVua0xlbmd0aCkgPiBsZW4yID8gbGVuMiA6IChpICsgbWF4Q2h1bmtMZW5ndGgpXG4gICAgKSlcbiAgfVxuXG4gIC8vIHBhZCB0aGUgZW5kIHdpdGggemVyb3MsIGJ1dCBtYWtlIHN1cmUgdG8gbm90IGZvcmdldCB0aGUgZXh0cmEgYnl0ZXNcbiAgaWYgKGV4dHJhQnl0ZXMgPT09IDEpIHtcbiAgICB0bXAgPSB1aW50OFtsZW4gLSAxXVxuICAgIHBhcnRzLnB1c2goXG4gICAgICBsb29rdXBbdG1wID4+IDJdICtcbiAgICAgIGxvb2t1cFsodG1wIDw8IDQpICYgMHgzRl0gK1xuICAgICAgJz09J1xuICAgIClcbiAgfSBlbHNlIGlmIChleHRyYUJ5dGVzID09PSAyKSB7XG4gICAgdG1wID0gKHVpbnQ4W2xlbiAtIDJdIDw8IDgpICsgdWludDhbbGVuIC0gMV1cbiAgICBwYXJ0cy5wdXNoKFxuICAgICAgbG9va3VwW3RtcCA+PiAxMF0gK1xuICAgICAgbG9va3VwWyh0bXAgPj4gNCkgJiAweDNGXSArXG4gICAgICBsb29rdXBbKHRtcCA8PCAyKSAmIDB4M0ZdICtcbiAgICAgICc9J1xuICAgIClcbiAgfVxuXG4gIHJldHVybiBwYXJ0cy5qb2luKCcnKVxufVxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBiYXNlNjQgPSByZXF1aXJlKCdiYXNlNjQtanMnKVxudmFyIGRlcHJlY2F0ZSA9IHJlcXVpcmUoJ3V0aWwtZGVwcmVjYXRlJylcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuL2Vycm9ycycpXG52YXIgRXhwciA9IHJlcXVpcmUoJy4vRXhwcicpXG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKVxuXG52YXIgY3VzdG9tSW5zcGVjdCA9IHV0aWwgJiYgdXRpbC5pbnNwZWN0ICYmIHV0aWwuaW5zcGVjdC5jdXN0b21cbnZhciBzdHJpbmdpZnkgPSAodXRpbCAmJiB1dGlsLmluc3BlY3QpIHx8IEpTT04uc3RyaW5naWZ5XG5cbi8qKlxuICogRmF1bmFEQiB2YWx1ZSB0eXBlcy4gR2VuZXJhbGx5LCB0aGVzZSBjb2xsZWN0aW9ucyBkbyBub3QgbmVlZCB0byBiZSBpbnN0YW50aWF0ZWRcbiAqIGRpcmVjdGx5OyB0aGV5IGNhbiBiZSBjb25zdHJ1Y3RlZCB0aHJvdWdoIGhlbHBlciBtZXRob2RzIGluIHtAbGluayBtb2R1bGU6cXVlcnl9LlxuICpcbiAqIEluc3RhbmNlcyBvZiB0aGVzZSBjb2xsZWN0aW9ucyB3aWxsIGJlIHJldHVybmVkIGluIHJlc3BvbnNlcyBpZiB0aGUgcmVzcG9uc2Ugb2JqZWN0XG4gKiBjb250YWlucyB0aGVzZSB2YWx1ZXMuIEZvciBleGFtcGxlLCBhIEZhdW5hREIgcmVzcG9uc2UgY29udGFpbmluZ1xuICpgeyBcIkByZWZcIjogeyBcImlkXCI6IFwiMTIzXCIsIFwiY29sbGVjdGlvblwiOiB7IFwiQHJlZlwiOiB7IFwiaWRcIjogXCJmcm9nc1wiLCBcImNvbGxlY3Rpb25cIjogeyBcIkByZWZcIjogeyBcImlkXCI6IFwiY29sbGVjdGlvbmVzXCIgfSB9IH0gfSB9IH1gXG4gKiB3aWxsIGJlIHJldHVybmVkIGFzIGBuZXcgdmFsdWVzLlJlZihcIjEyM1wiLCBuZXcgdmFsdWVzLlJlZihcImZyb2dzXCIsIHZhbHVlcy5OYXRpdmUuQ09MTEVDVElPTlMpKWAuXG4gKlxuICogU2VlIHRoZSBbRmF1bmFEQiBRdWVyeSBBUEkgRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3NpbXBsZS10eXBlKVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKlxuICogQG1vZHVsZSB2YWx1ZXNcbiAqL1xuXG4vKipcbiAqIEJhc2UgdHlwZSBmb3IgRmF1bmFEQiB2YWx1ZSBvYmplY3RzLlxuICpcbiAqIEBleHRlbmRzIEV4cHJcbiAqIEBhYnN0cmFjdFxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIFZhbHVlKCkge31cblxuVmFsdWUucHJvdG90eXBlLl9pc0ZhdW5hVmFsdWUgPSB0cnVlXG5cbnV0aWwuaW5oZXJpdHMoVmFsdWUsIEV4cHIpXG5cbi8qKlxuICogRmF1bmFEQiByZWYuXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc3BlY2lhbC10eXBlKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gaWRcbiAqICAgVGhlIGlkIHBvcnRpb24gb2YgdGhlIHJlZi5cbiAqIEBwYXJhbSB7UmVmfSBbY29sbGVjdGlvbl1cbiAqICAgVGhlIGNvbGxlY3Rpb24gcG9ydGlvbiBvZiB0aGUgcmVmLlxuICogQHBhcmFtIHtSZWZ9IFtkYXRhYmFzZV1cbiAqICAgVGhlIGRhdGFiYXNlIHBvcnRpb24gb2YgdGhlIHJlZi5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6dmFsdWVzflZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmVmKGlkLCBjb2xsZWN0aW9uLCBkYXRhYmFzZSkge1xuICBpZiAoIWlkKSB0aHJvdyBuZXcgZXJyb3JzLkludmFsaWRWYWx1ZSgnaWQgY2Fubm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJylcblxuICB0aGlzLnZhbHVlID0geyBpZDogaWQgfVxuICBpZiAoY29sbGVjdGlvbikgdGhpcy52YWx1ZVsnY29sbGVjdGlvbiddID0gY29sbGVjdGlvblxuICBpZiAoZGF0YWJhc2UpIHRoaXMudmFsdWVbJ2RhdGFiYXNlJ10gPSBkYXRhYmFzZVxufVxuXG5SZWYucHJvdG90eXBlLl9pc0ZhdW5hUmVmID0gdHJ1ZVxuXG51dGlsLmluaGVyaXRzKFJlZiwgVmFsdWUpXG5cbi8qKlxuICogR2V0cyB0aGUgY29sbGVjdGlvbiBwYXJ0IG91dCBvZiB0aGUgUmVmLlxuICpcbiAqIEBtZW1iZXIge3N0cmluZ31cbiAqIEBuYW1lIG1vZHVsZTp2YWx1ZXN+UmVmI2NvbGxlY3Rpb25cbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZi5wcm90b3R5cGUsICdjb2xsZWN0aW9uJywge1xuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlWydjb2xsZWN0aW9uJ11cbiAgfSxcbn0pXG5cbi8qKlxuICogREVQUkVDQVRFRC4gR2V0cyB0aGUgY2xhc3MgcGFydCBvdXQgb2YgdGhlIFJlZi5cbiAqXG4gKiBAbWVtYmVyIHtzdHJpbmd9XG4gKiBAbmFtZSBtb2R1bGU6dmFsdWVzflJlZiNjbGFzc1xuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoUmVmLnByb3RvdHlwZSwgJ2NsYXNzJywge1xuICBnZXQ6IGRlcHJlY2F0ZShmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVsnY29sbGVjdGlvbiddXG4gIH0sICdjbGFzcyBpcyBkZXByZWNhdGVkLCB1c2UgY29sbGVjdGlvbiBpbnN0ZWFkJyksXG59KVxuXG4vKipcbiAqIEdldHMgdGhlIGRhdGFiYXNlIHBhcnQgb3V0IG9mIHRoZSBSZWYuXG4gKlxuICogQG1lbWJlciB7UmVmfVxuICogQG5hbWUgbW9kdWxlOnZhbHVlc35SZWYjZGF0YWJhc2VcbiAqL1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KFJlZi5wcm90b3R5cGUsICdkYXRhYmFzZScsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZVsnZGF0YWJhc2UnXVxuICB9LFxufSlcblxuLyoqXG4gKiBHZXRzIHRoZSBpZCBwYXJ0IG91dCBvZiB0aGUgUmVmLlxuICpcbiAqIEBtZW1iZXIge1JlZn1cbiAqIEBuYW1lIG1vZHVsZTp2YWx1ZXN+UmVmI2lkXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZWYucHJvdG90eXBlLCAnaWQnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVbJ2lkJ11cbiAgfSxcbn0pXG5cbi8qKiBAaWdub3JlICovXG5SZWYucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyAnQHJlZic6IHRoaXMudmFsdWUgfVxufVxuXG53cmFwVG9TdHJpbmcoUmVmLCBmdW5jdGlvbigpIHtcbiAgdmFyIGNvbnN0cnVjdG9ycyA9IHtcbiAgICBjb2xsZWN0aW9uczogJ0NvbGxlY3Rpb24nLFxuICAgIGRhdGFiYXNlczogJ0RhdGFiYXNlJyxcbiAgICBpbmRleGVzOiAnSW5kZXgnLFxuICAgIGZ1bmN0aW9uczogJ0Z1bmN0aW9uJyxcbiAgICByb2xlczogJ1JvbGUnLFxuICB9XG5cbiAgdmFyIHRvU3RyaW5nID0gZnVuY3Rpb24ocmVmKSB7XG4gICAgaWYgKHJlZi5jb2xsZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBkYiA9IHJlZi5kYXRhYmFzZSAhPT0gdW5kZWZpbmVkID8gcmVmLmRhdGFiYXNlLnRvU3RyaW5nKCkgOiAnJ1xuICAgICAgcmV0dXJuIHJlZi5pZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHJlZi5pZC5zbGljZSgxKSArICcoJyArIGRiICsgJyknXG4gICAgfVxuXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gY29uc3RydWN0b3JzW3JlZi5jb2xsZWN0aW9uLmlkXVxuICAgIGlmIChjb25zdHJ1Y3RvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZGIgPSByZWYuZGF0YWJhc2UgIT09IHVuZGVmaW5lZCA/ICcsICcgKyByZWYuZGF0YWJhc2UudG9TdHJpbmcoKSA6ICcnXG4gICAgICByZXR1cm4gY29uc3RydWN0b3IgKyAnKFwiJyArIHJlZi5pZCArICdcIicgKyBkYiArICcpJ1xuICAgIH1cblxuICAgIHJldHVybiAnUmVmKCcgKyB0b1N0cmluZyhyZWYuY29sbGVjdGlvbikgKyAnLCBcIicgKyByZWYuaWQgKyAnXCIpJ1xuICB9XG5cbiAgcmV0dXJuIHRvU3RyaW5nKHRoaXMpXG59KVxuXG4vKiogQGlnbm9yZSAqL1xuUmVmLnByb3RvdHlwZS52YWx1ZU9mID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnZhbHVlXG59XG5cbi8qKlxuICogV2hldGhlciB0aGVzZSBhcmUgYm90aCBSZWZzIGFuZCBoYXZlIHRoZSBzYW1lIHZhbHVlLlxuICogQHBhcmFtIHthbnl9IG90aGVyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAqL1xuUmVmLnByb3RvdHlwZS5lcXVhbHMgPSBmdW5jdGlvbihvdGhlcikge1xuICByZXR1cm4gKFxuICAgIChvdGhlciBpbnN0YW5jZW9mIFJlZiB8fFxuICAgICAgdXRpbC5jaGVja0luc3RhbmNlSGFzUHJvcGVydHkob3RoZXIsICdfaXNGYXVuYVJlZicpKSAmJlxuICAgIHRoaXMuaWQgPT09IG90aGVyLmlkICYmXG4gICAgKCh0aGlzLmNvbGxlY3Rpb24gPT09IHVuZGVmaW5lZCAmJiBvdGhlci5jb2xsZWN0aW9uID09PSB1bmRlZmluZWQpIHx8XG4gICAgICB0aGlzLmNvbGxlY3Rpb24uZXF1YWxzKG90aGVyLmNvbGxlY3Rpb24pKSAmJlxuICAgICgodGhpcy5kYXRhYmFzZSA9PT0gdW5kZWZpbmVkICYmIG90aGVyLmRhdGFiYXNlID09PSB1bmRlZmluZWQpIHx8XG4gICAgICB0aGlzLmRhdGFiYXNlLmVxdWFscyhvdGhlci5kYXRhYmFzZSkpXG4gIClcbn1cblxudmFyIE5hdGl2ZSA9IHtcbiAgQ09MTEVDVElPTlM6IG5ldyBSZWYoJ2NvbGxlY3Rpb25zJyksXG4gIElOREVYRVM6IG5ldyBSZWYoJ2luZGV4ZXMnKSxcbiAgREFUQUJBU0VTOiBuZXcgUmVmKCdkYXRhYmFzZXMnKSxcbiAgRlVOQ1RJT05TOiBuZXcgUmVmKCdmdW5jdGlvbnMnKSxcbiAgUk9MRVM6IG5ldyBSZWYoJ3JvbGVzJyksXG4gIEtFWVM6IG5ldyBSZWYoJ2tleXMnKSxcbn1cblxuTmF0aXZlLmZyb21OYW1lID0gZnVuY3Rpb24obmFtZSkge1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlICdjb2xsZWN0aW9ucyc6XG4gICAgICByZXR1cm4gTmF0aXZlLkNPTExFQ1RJT05TXG4gICAgY2FzZSAnaW5kZXhlcyc6XG4gICAgICByZXR1cm4gTmF0aXZlLklOREVYRVNcbiAgICBjYXNlICdkYXRhYmFzZXMnOlxuICAgICAgcmV0dXJuIE5hdGl2ZS5EQVRBQkFTRVNcbiAgICBjYXNlICdmdW5jdGlvbnMnOlxuICAgICAgcmV0dXJuIE5hdGl2ZS5GVU5DVElPTlNcbiAgICBjYXNlICdyb2xlcyc6XG4gICAgICByZXR1cm4gTmF0aXZlLlJPTEVTXG4gICAgY2FzZSAna2V5cyc6XG4gICAgICByZXR1cm4gTmF0aXZlLktFWVNcbiAgfVxuICByZXR1cm4gbmV3IFJlZihuYW1lKVxufVxuXG4vKipcbiAqIEZhdW5hREIgU2V0LlxuICogVGhpcyByZXByZXNlbnRzIGEgc2V0IHJldHVybmVkIGFzIHBhcnQgb2YgYSByZXNwb25zZS5cbiAqIFRoaXMgbG9va3MgbGlrZSBge1wiQHNldFwiOiBzZXRfcXVlcnl9YC5cbiAqIEZvciBxdWVyeSBzZXRzIHNlZSB7QGxpbmsgbWF0Y2h9LCB7QGxpbmsgdW5pb259LFxuICoge0BsaW5rIGludGVyc2VjdGlvbn0sIHtAbGluayBkaWZmZXJlbmNlfSwgYW5kIHtAbGluayBqb2lufS5cbiAqXG4gKiBAZXh0ZW5kcyBtb2R1bGU6dmFsdWVzflZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gU2V0UmVmKHZhbHVlKSB7XG4gIC8qKiBSYXcgcXVlcnkgb2JqZWN0LiAqL1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbn1cblxudXRpbC5pbmhlcml0cyhTZXRSZWYsIFZhbHVlKVxuXG53cmFwVG9TdHJpbmcoU2V0UmVmLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIEV4cHIudG9TdHJpbmcodGhpcy52YWx1ZSlcbn0pXG5cbi8qKiBAaWdub3JlICovXG5TZXRSZWYucHJvdG90eXBlLnRvSlNPTiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4geyAnQHNldCc6IHRoaXMudmFsdWUgfVxufVxuXG4vKiogRmF1bmFEQiB0aW1lLiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc3BlY2lhbC10eXBlKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xEYXRlfSB2YWx1ZSBJZiBhIERhdGUsIHRoaXMgaXMgY29udmVydGVkIHRvIGEgc3RyaW5nLlxuICogQGV4dGVuZHMgbW9kdWxlOnZhbHVlc35WYWx1ZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIEZhdW5hVGltZSh2YWx1ZSkge1xuICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZS50b0lTT1N0cmluZygpXG4gIH0gZWxzZSBpZiAoISh2YWx1ZS5jaGFyQXQodmFsdWUubGVuZ3RoIC0gMSkgPT09ICdaJykpIHtcbiAgICB0aHJvdyBuZXcgZXJyb3JzLkludmFsaWRWYWx1ZShcIk9ubHkgYWxsb3dlZCB0aW1lem9uZSBpcyAnWicsIGdvdDogXCIgKyB2YWx1ZSlcbiAgfVxuXG4gIHRoaXMudmFsdWUgPSB2YWx1ZVxufVxuXG51dGlsLmluaGVyaXRzKEZhdW5hVGltZSwgVmFsdWUpXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZGF0ZSB3cmFwcGVkIGJ5IHRoaXMgb2JqZWN0LlxuICogVGhpcyBpcyBsb3NzeSBhcyBEYXRlcyBoYXZlIG1pbGxpc2Vjb25kIHJhdGhlciB0aGFuIG5hbm9zZWNvbmQgcHJlY2lzaW9uLlxuICpcbiAqIEBtZW1iZXIge0RhdGV9XG4gKiBAbmFtZSBtb2R1bGU6dmFsdWVzfkZhdW5hVGltZSNkYXRlXG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYXVuYVRpbWUucHJvdG90eXBlLCAnZGF0ZScsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUodGhpcy52YWx1ZSlcbiAgfSxcbn0pXG5cbndyYXBUb1N0cmluZyhGYXVuYVRpbWUsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ1RpbWUoXCInICsgdGhpcy52YWx1ZSArICdcIiknXG59KVxuXG4vKiogQGlnbm9yZSAqL1xuRmF1bmFUaW1lLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHsgJ0B0cyc6IHRoaXMudmFsdWUgfVxufVxuXG4vKiogRmF1bmFEQiBkYXRlLiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc3BlY2lhbC10eXBlKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xEYXRlfSB2YWx1ZVxuICogICBJZiBhIERhdGUsIHRoaXMgaXMgY29udmVydGVkIHRvIGEgc3RyaW5nLCB3aXRoIHRpbWUtb2YtZGF5IGRpc2NhcmRlZC5cbiAqIEBleHRlbmRzIG1vZHVsZTp2YWx1ZXN+VmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBGYXVuYURhdGUodmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIC8vIFRoZSBmaXJzdCAxMCBjaGFyYWN0ZXJzICdZWVlZLU1NLUREJyBhcmUgdGhlIGRhdGUgcG9ydGlvbi5cbiAgICB2YWx1ZSA9IHZhbHVlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gIH1cblxuICAvKipcbiAgICogSVNPODYwMSBkYXRlLlxuICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgKi9cbiAgdGhpcy52YWx1ZSA9IHZhbHVlXG59XG5cbnV0aWwuaW5oZXJpdHMoRmF1bmFEYXRlLCBWYWx1ZSlcblxuLyoqXG4gKiBAbWVtYmVyIHtEYXRlfVxuICogQG5hbWUgbW9kdWxlOnZhbHVlc35GYXVuYURhdGUjZGF0ZVxuICovXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoRmF1bmFEYXRlLnByb3RvdHlwZSwgJ2RhdGUnLCB7XG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMudmFsdWUpXG4gIH0sXG59KVxuXG53cmFwVG9TdHJpbmcoRmF1bmFEYXRlLCBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICdEYXRlKFwiJyArIHRoaXMudmFsdWUgKyAnXCIpJ1xufSlcblxuLyoqIEBpZ25vcmUgKi9cbkZhdW5hRGF0ZS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7ICdAZGF0ZSc6IHRoaXMudmFsdWUgfVxufVxuXG4vKiogRmF1bmFEQiBieXRlcy4gU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3NwZWNpYWwtdHlwZSkuXG4gKlxuICogQHBhcmFtIHtVaW50OEFycmF5fEFycmF5QnVmZmVyfHN0cmluZ30gdmFsdWVcbiAqICAgIElmIEFycmF5QnVmZmVyIGl0J3MgY29udmVydGVkIHRvIFVpbnQ4QXJyYXlcbiAqICAgIElmIHN0cmluZyBpdCBtdXN0IGJlIGJhc2U2NCBlbmNvZGVkIGFuZCBpdCdzIGNvbnZlcnRlZCB0byBVaW50OEFycmF5XG4gKiBAZXh0ZW5kcyBtb2R1bGU6dmFsdWVzflZhbHVlXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gQnl0ZXModmFsdWUpIHtcbiAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3IFVpbnQ4QXJyYXkodmFsdWUpXG4gIH0gZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHRoaXMudmFsdWUgPSBiYXNlNjQudG9CeXRlQXJyYXkodmFsdWUpXG4gIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IGVycm9ycy5JbnZhbGlkVmFsdWUoXG4gICAgICAnQnl0ZXMgdHlwZSBleHBlY3QgYXJndW1lbnQgdG8gYmUgZWl0aGVyIFVpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ8c3RyaW5nLCBnb3Q6ICcgK1xuICAgICAgICBzdHJpbmdpZnkodmFsdWUpXG4gICAgKVxuICB9XG59XG5cbnV0aWwuaW5oZXJpdHMoQnl0ZXMsIFZhbHVlKVxuXG53cmFwVG9TdHJpbmcoQnl0ZXMsIGZ1bmN0aW9uKCkge1xuICByZXR1cm4gJ0J5dGVzKFwiJyArIGJhc2U2NC5mcm9tQnl0ZUFycmF5KHRoaXMudmFsdWUpICsgJ1wiKSdcbn0pXG5cbi8qKiBAaWdub3JlICovXG5CeXRlcy5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7ICdAYnl0ZXMnOiBiYXNlNjQuZnJvbUJ5dGVBcnJheSh0aGlzLnZhbHVlKSB9XG59XG5cbi8qKiBGYXVuYURCIHF1ZXJ5LiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc3BlY2lhbC10eXBlKS5cbiAqXG4gKiBAcGFyYW0ge2FueX0gdmFsdWVcbiAqIEBleHRlbmRzIG1vZHVsZTp2YWx1ZXN+VmFsdWVcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBRdWVyeSh2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWVcbn1cblxudXRpbC5pbmhlcml0cyhRdWVyeSwgVmFsdWUpXG5cbndyYXBUb1N0cmluZyhRdWVyeSwgZnVuY3Rpb24oKSB7XG4gIHJldHVybiAnUXVlcnkoJyArIEV4cHIudG9TdHJpbmcodGhpcy52YWx1ZSkgKyAnKSdcbn0pXG5cbi8qKiBAaWdub3JlICovXG5RdWVyeS5wcm90b3R5cGUudG9KU09OID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7ICdAcXVlcnknOiB0aGlzLnZhbHVlIH1cbn1cblxuLyoqIEBpZ25vcmUgKi9cbmZ1bmN0aW9uIHdyYXBUb1N0cmluZyh0eXBlLCBmbikge1xuICB0eXBlLnByb3RvdHlwZS50b1N0cmluZyA9IGZuXG4gIHR5cGUucHJvdG90eXBlLmluc3BlY3QgPSBmblxuXG4gIGlmIChjdXN0b21JbnNwZWN0KSB7XG4gICAgdHlwZS5wcm90b3R5cGVbY3VzdG9tSW5zcGVjdF0gPSBmblxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBWYWx1ZTogVmFsdWUsXG4gIFJlZjogUmVmLFxuICBOYXRpdmU6IE5hdGl2ZSxcbiAgU2V0UmVmOiBTZXRSZWYsXG4gIEZhdW5hVGltZTogRmF1bmFUaW1lLFxuICBGYXVuYURhdGU6IEZhdW5hRGF0ZSxcbiAgQnl0ZXM6IEJ5dGVzLFxuICBRdWVyeTogUXVlcnksXG59XG4iLCIvKlxub2JqZWN0LWFzc2lnblxuKGMpIFNpbmRyZSBTb3JodXNcbkBsaWNlbnNlIE1JVFxuKi9cblxuJ3VzZSBzdHJpY3QnO1xuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXctd3JhcHBlcnNcblx0XHR0ZXN0MVs1XSA9ICdkZSc7XG5cdFx0aWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QxKVswXSA9PT0gJzUnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MiA9IHt9O1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgMTA7IGkrKykge1xuXHRcdFx0dGVzdDJbJ18nICsgU3RyaW5nLmZyb21DaGFyQ29kZShpKV0gPSBpO1xuXHRcdH1cblx0XHR2YXIgb3JkZXIyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDIpLm1hcChmdW5jdGlvbiAobikge1xuXHRcdFx0cmV0dXJuIHRlc3QyW25dO1xuXHRcdH0pO1xuXHRcdGlmIChvcmRlcjIuam9pbignJykgIT09ICcwMTIzNDU2Nzg5Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDMgPSB7fTtcblx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uIChsZXR0ZXIpIHtcblx0XHRcdHRlc3QzW2xldHRlcl0gPSBsZXR0ZXI7XG5cdFx0fSk7XG5cdFx0aWYgKE9iamVjdC5rZXlzKE9iamVjdC5hc3NpZ24oe30sIHRlc3QzKSkuam9pbignJykgIT09XG5cdFx0XHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG5cdFx0XHRzeW1ib2xzID0gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGZyb20pO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChwcm9wSXNFbnVtZXJhYmxlLmNhbGwoZnJvbSwgc3ltYm9sc1tpXSkpIHtcblx0XHRcdFx0XHR0b1tzeW1ib2xzW2ldXSA9IGZyb21bc3ltYm9sc1tpXV07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdG87XG59O1xuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBhbm5vdGF0ZSA9IHJlcXVpcmUoJ2ZuLWFubm90YXRlJylcbnZhciBkZXByZWNhdGUgPSByZXF1aXJlKCd1dGlsLWRlcHJlY2F0ZScpXG52YXIgRXhwciA9IHJlcXVpcmUoJy4vRXhwcicpXG52YXIgZXJyb3JzID0gcmVxdWlyZSgnLi9lcnJvcnMnKVxudmFyIHZhbHVlcyA9IHJlcXVpcmUoJy4vdmFsdWVzJylcbnZhciBvYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJylcbnZhciB1dGlsID0gcmVxdWlyZSgnLi9fdXRpbCcpXG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnMgZnVuY3Rpb25zIHVzZWQgdG8gY29uc3RydWN0IEZhdW5hREIgUXVlcmllcy5cbiAqXG4gKiBTZWUgdGhlIFtGYXVuYURCIFF1ZXJ5IEFQSSBEb2N1bWVudGF0aW9uXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkpXG4gKiBmb3IgcGVyLWZ1bmN0aW9uIGRvY3VtZW50YXRpb24uXG4gKlxuICogQG1vZHVsZSBxdWVyeVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhFeHByfHN0cmluZ3xudW1iZXJ8Ym9vbGVhbnxPYmplY3QpfSBtb2R1bGU6cXVlcnl+RXhwclRlcm1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsobW9kdWxlOnF1ZXJ5fkV4cHJUZXJtfEFycmF5PG1vZHVsZTpxdWVyeX5FeHByVGVybT4pfSBtb2R1bGU6cXVlcnl+RXhwckFyZ1xuICovXG5cbi8vIFR5cGUgaGVscGVyc1xuXG4vKipcbiAqIElmIG9uZSBwYXJhbWV0ZXIgaXMgcHJvdmlkZWQsIGNvbnN0cnVjdHMgYSBsaXRlcmFsIFJlZiB2YWx1ZS5cbiAqIFRoZSBzdHJpbmcgYGNvbGxlY3Rpb25zL3dpZGdldC8xMjNgIHdpbGwgYmUgZXF1aXZhbGVudCB0byBgbmV3IHZhbHVlcy5SZWYoJzEyMycsIG5ldyB2YWx1ZXMuUmVmKCd3aWRnZXQnLCB2YWx1ZXMuTmF0aXZlLkNPTExFQ1RJT05TKSlgXG4gKlxuICogSWYgdHdvIGFyZSBwcm92aWRlZCwgY29uc3RydWN0cyBhIFJlZigpIGZ1bmN0aW9uIHRoYXQsIHdoZW4gZXZhbHVhdGVkLCByZXR1cm5zIGEgUmVmIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG1vZHVsZTpxdWVyeX5FeHByQXJnfSByZWZ8Y2xzXG4gKiAgIEFsb25lLCB0aGUgcmVmIGluIHBhdGggZm9ybS4gQ29tYmluZWQgd2l0aCBgaWRgLCBtdXN0IGJlIGEgY29sbGVjdGlvbiByZWYuXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBbaWRdXG4gKiAgIEEgbnVtZXJpYyBpZCBvZiB0aGUgZ2l2ZW4gY29sbGVjdGlvbi5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFJlZigpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAyLCBhcmd1bWVudHMsIFJlZi5uYW1lKVxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gbmV3IEV4cHIoeyAnQHJlZic6IHdyYXAoYXJndW1lbnRzWzBdKSB9KVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBuZXcgRXhwcih7IHJlZjogd3JhcChhcmd1bWVudHNbMF0pLCBpZDogd3JhcChhcmd1bWVudHNbMV0pIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl8QXJyYXlCdWZmZXJ8bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGJ5dGVzXG4gKiAgIEEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgYnl0ZSBhcnJheVxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gQnl0ZXMoYnl0ZXMpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBCeXRlcy5uYW1lKVxuICByZXR1cm4gbmV3IHZhbHVlcy5CeXRlcyhieXRlcylcbn1cblxuLy8gQmFzaWMgZm9ybXNcblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjYmFzaWMtZm9ybXMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IG1zZ1xuICogICBUaGUgbWVzc2FnZSB0byBzZW5kIGJhY2sgdG8gdGhlIGNsaWVudC5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gQWJvcnQobXNnKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgQWJvcnQubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgYWJvcnQ6IHdyYXAobXNnKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNiYXNpYy1mb3JtcykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gdGltZXN0YW1wXG4gKiAgIEFuIEV4cHIgdGhhdCB3aWxsIGV2YWx1YXRlIHRvIGEgVGltZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIEV4cHIgdG8gcnVuIGF0IHRoZSBnaXZlbiBzbmFwc2hvdCB0aW1lLlxuICogQHJldHVybiB7RXhwcn1cbiAqICovXG5mdW5jdGlvbiBBdCh0aW1lc3RhbXAsIGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBBdC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBhdDogd3JhcCh0aW1lc3RhbXApLCBleHByOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2Jhc2ljLWZvcm1zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBiaW5kaW5nc1xuICogICBBIHNldCBvZiBiaW5kaW5ncyB0byB1c2Ugd2l0aGluIHRoZSBnaXZlbiBleHByZXNzaW9uLlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gaW5cbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gcnVuIHdpdGggdGhlIGdpdmVuIGJpbmRpbmdzLlxuICogQHJldHVybiB7RXhwcn1cbiAqICovXG5mdW5jdGlvbiBMZXQodmFycywgZXhwcikge1xuICBhcml0eS5leGFjdCgyLCBhcmd1bWVudHMsIExldC5uYW1lKVxuICB2YXIgYmluZGluZ3MgPSBbXVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhcnMpKSB7XG4gICAgYmluZGluZ3MgPSB2YXJzLm1hcChmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gd3JhcFZhbHVlcyhpdGVtKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgYmluZGluZ3MgPSBPYmplY3Qua2V5cyh2YXJzKS5tYXAoZnVuY3Rpb24oaykge1xuICAgICAgdmFyIGIgPSB7fVxuICAgICAgYltrXSA9IHdyYXAodmFyc1trXSlcbiAgICAgIHJldHVybiBiXG4gICAgfSlcbiAgfVxuXG4gIGlmICh0eXBlb2YgZXhwciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhcnMpKSB7XG4gICAgICB2YXIgZXhwcl92YXJzID0gW11cblxuICAgICAgdmFycy5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgICAgZXhwcl92YXJzLnB1c2goVmFyKG5hbWUpKVxuICAgICAgICB9KVxuICAgICAgfSlcblxuICAgICAgZXhwciA9IGV4cHIuYXBwbHkobnVsbCwgZXhwcl92YXJzKVxuICAgIH0gZWxzZSB7XG4gICAgICBleHByID0gZXhwci5hcHBseShcbiAgICAgICAgbnVsbCxcbiAgICAgICAgT2JqZWN0LmtleXModmFycykubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gVmFyKG5hbWUpXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ldyBFeHByKHsgbGV0OiBiaW5kaW5ncywgaW46IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjYmFzaWMtZm9ybXMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHZhck5hbWVcbiAqICAgVGhlIG5hbWUgb2YgdGhlIGJvdW5kIHZhci5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gVmFyKHZhck5hbWUpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBWYXIubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgdmFyOiB3cmFwKHZhck5hbWUpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2Jhc2ljLWZvcm1zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBjb25kaXRpb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0aGF0IHJldHVybnMgYSBib29sZWFuLlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gdGhlblxuICogICBUaGUgZXhwcmVzc2lvbiB0byBydW4gaWYgY29uZGl0aW9uIGlzIHRydWUuXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBlbHNlXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIHJ1biBpZiB0aGUgY29uZGl0aW9uIGlzIGZhbHNlLlxuICogQHJldHVybiB7RXhwcn1cbiAqICovXG5mdW5jdGlvbiBJZihjb25kaXRpb24sIHRoZW4sIF9lbHNlKSB7XG4gIGFyaXR5LmV4YWN0KDMsIGFyZ3VtZW50cywgSWYubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaWY6IHdyYXAoY29uZGl0aW9uKSwgdGhlbjogd3JhcCh0aGVuKSwgZWxzZTogd3JhcChfZWxzZSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjYmFzaWMtZm9ybXMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGFyZ3NcbiAqICAgQSBzZXJpZXMgb2YgZXhwcmVzc2lvbnMgdG8gcnVuLlxuICogQHJldHVybiB7RXhwcn1cbiAqICovXG5mdW5jdGlvbiBEbygpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgRG8ubmFtZSlcbiAgdmFyIGFyZ3MgPSBhcmdzVG9BcnJheShhcmd1bWVudHMpXG4gIHJldHVybiBuZXcgRXhwcih7IGRvOiB3cmFwKGFyZ3MpIH0pXG59XG5cbi8qKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjYmFzaWMtZm9ybXMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGZpZWxkc1xuICogICBUaGUgb2JqZWN0IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtFeHByfVxuICogKi9cbnZhciBvYmplY3RGdW5jdGlvbiA9IGZ1bmN0aW9uKGZpZWxkcykge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIG9iamVjdEZ1bmN0aW9uLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IG9iamVjdDogd3JhcFZhbHVlcyhmaWVsZHMpIH0pXG59XG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNiYXNpYy1mb3JtcykuXG4gKlxuICogRGlyZWN0bHkgcHJvZHVjZXMgYSBGYXVuYURCIExhbWJkYSBleHByZXNzaW9uIGFzIGRlc2NyaWJlZCBpbiB0aGUgRmF1bmFEQiByZWZlcmVuY2VcbiAqIGRvY3VtZW50YXRpb24uXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gdmFyXG4gKiAgIFRoZSBuYW1lcyBvZiB0aGUgdmFyaWFibGVzIHRvIGJlIGJvdW5kIGluIHRoaXMgbGFtYmRhIGV4cHJlc3Npb24uXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBsYW1iZGEgZXhwcmVzc2lvbi5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjYmFzaWMtZm9ybXMpLlxuICpcbiAqIFRha2VzIGEgSmF2YXNjcmlwdCBmdW5jdGlvbiwgYW5kIHdpbGwgdHJhbnNmb3JtIGl0XG4gKiBpbnRvIHRoZSBhcHByb3ByaWF0ZSBGYXVuYURCIHF1ZXJ5LiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBgYGBcbiAqIExhbWJkYShmdW5jdGlvbihhKSB7IHJldHVybiBBZGQoYSwgYSk7IH0pO1xuICogLy8gUmV0dXJucyB7IGxhbWJkYTogJ2EnLCBleHByOiB7IGFkZDogW3sgdmFyOiBhIH0sIHsgdmFyOiBhIH1dIH0gfVxuICogYGBgXG4gKiBOb3RlIHRoYXQgdGhlIGRyaXZlciB3aWxsIGhhbmRsZSB3cmFwcGluZyBhbGwgdXNhZ2VzIG9mIHRoZSBsYW1iZGEncyBib3VuZFxuICogdmFyaWFibGVzIHdpdGggdGhlIHtAbGluayBtb2R1bGVzOnF1ZXJ5flZhcn0gZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuY1xuICogICBUYWtlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gYW5kIHByb2R1Y2VzIHRoZSBhcHByb3ByaWF0ZSBGYXVuYURCIHF1ZXJ5IGV4cHJlc3Npb24uXG4gKiBAcmV0dXJuIHtFeHByfVxuICpcbiAqLyBmdW5jdGlvbiBMYW1iZGEoKSB7XG4gIGFyaXR5LmJldHdlZW4oMSwgMiwgYXJndW1lbnRzLCBMYW1iZGEubmFtZSlcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gYXJndW1lbnRzWzBdXG4gICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBfbGFtYmRhRnVuYyh2YWx1ZSlcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHZhbHVlIGluc3RhbmNlb2YgRXhwciB8fFxuICAgICAgICB1dGlsLmNoZWNrSW5zdGFuY2VIYXNQcm9wZXJ0eSh2YWx1ZSwgJ19pc0ZhdW5hRXhwcicpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgZXJyb3JzLkludmFsaWRWYWx1ZShcbiAgICAgICAgICAnTGFtYmRhIGZ1bmN0aW9uIHRha2VzIGVpdGhlciBhIEZ1bmN0aW9uIG9yIGFuIEV4cHIuJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhcl9uYW1lID0gYXJndW1lbnRzWzBdXG4gICAgICB2YXIgZXhwciA9IGFyZ3VtZW50c1sxXVxuXG4gICAgICByZXR1cm4gX2xhbWJkYUV4cHIodmFyX25hbWUsIGV4cHIpXG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfbGFtYmRhRnVuYyhmdW5jKSB7XG4gIHZhciB2YXJzID0gYW5ub3RhdGUoZnVuYylcbiAgc3dpdGNoICh2YXJzLmxlbmd0aCkge1xuICAgIGNhc2UgMDpcbiAgICAgIHRocm93IG5ldyBlcnJvcnMuSW52YWxpZFZhbHVlKFxuICAgICAgICAnUHJvdmlkZWQgRnVuY3Rpb24gbXVzdCB0YWtlIGF0IGxlYXN0IDEgYXJndW1lbnQuJ1xuICAgICAgKVxuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBfbGFtYmRhRXhwcih2YXJzWzBdLCBmdW5jKFZhcih2YXJzWzBdKSkpXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBfbGFtYmRhRXhwcihcbiAgICAgICAgdmFycyxcbiAgICAgICAgZnVuYy5hcHBseShcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHZhcnMubWFwKGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiBWYXIobmFtZSlcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICApXG4gIH1cbn1cblxuLyoqXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiBfbGFtYmRhRXhwcih2YXJfbmFtZSwgZXhwcikge1xuICByZXR1cm4gbmV3IEV4cHIoeyBsYW1iZGE6IHdyYXAodmFyX25hbWUpLCBleHByOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2Jhc2ljLWZvcm1zKS5cbiAqXG4gKiBJbnZva2VzIGEgZ2l2ZW4gZnVuY3Rpb24gcGFzc2luZyBpbiB0aGUgcHJvdmlkZWQgYXJndW1lbnRzXG4gKlxuICogYGBgXG4gKiBDYWxsKFJlZihcImZ1bmN0aW9ucy9hX2Z1bmN0aW9uXCIpLCAxLCAyKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcmVmXG4gKiAgIFRoZSByZWYgb2YgdGhlIFVzZXJEZWZpbmVkRnVuY3Rpb24gdG8gY2FsbFxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gYXJnc1xuICogICBBIHNlcmllcyBvZiB2YWx1ZXMgdG8gcGFzcyBhcyBhcmd1bWVudHMgdG8gdGhlIFVERi5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gQ2FsbChyZWYpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgQ2FsbC5uYW1lKVxuICB2YXIgYXJncyA9IGFyZ3NUb0FycmF5KGFyZ3VtZW50cylcbiAgYXJncy5zaGlmdCgpXG4gIHJldHVybiBuZXcgRXhwcih7IGNhbGw6IHdyYXAocmVmKSwgYXJndW1lbnRzOiB3cmFwKHZhcmFyZ3MoYXJncykpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2Jhc2ljLWZvcm1zKS5cbiAqXG4gKiBDb25zdHJ1Y3RzIGEgYEBxdWVyeWAgdHlwZSB1c2luZyB0aGUgTGFtYmRhKCkgb3IgYSBmdW5jdGlvbi5cbiAqXG4gKiBgYGBcbiAqIFF1ZXJ5KExhbWJkYShbJ2EnLCAnYiddLCBBZGQoVmFyKCdhJyksIFZhcignYicpKSkpXG4gKiBRdWVyeShmdW5jdGlvbiAoYSwgYikgeyByZXR1cm4gQWRkKGEsIGIpIH0pXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfGZ1bmN0aW9ufSBsYW1iZGFcbiAqICAgQSBmdW5jdGlvbiB0byBlc2NhcGUgYXMgYSBxdWVyeS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gUXVlcnkobGFtYmRhKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgUXVlcnkubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgcXVlcnk6IHdyYXAobGFtYmRhKSB9KVxufVxuXG4vLyBDb2xsZWN0aW9uIGZ1bmN0aW9uc1xuXG4vKiogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2NvbGxlY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBjb2xsZWN0aW9uXG4gKiAgIEFuIGV4cHJlc3Npb24gcmVzdWx0aW5nIGluIGEgY29sbGVjdGlvbiB0byBiZSBtYXBwZWQgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd8ZnVuY3Rpb259IGxhbWJkYVxuICogICBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aW9uLlxuICogQHJldHVybiB7RXhwcn1cbiAqICovXG5mdW5jdGlvbiBNYXAoY29sbGVjdGlvbiwgbGFtYmRhX2V4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBNYXAubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbWFwOiB3cmFwKGxhbWJkYV9leHByKSwgY29sbGVjdGlvbjogd3JhcChjb2xsZWN0aW9uKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNjb2xsZWN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gY29sbGVjdGlvblxuICogICBBbiBleHByZXNzaW9uIHJlc3VsdGluZyBpbiBhIGNvbGxlY3Rpb24gdG8gYmUgaXRlcmF0ZWQgb3Zlci5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd8ZnVuY3Rpb259IGxhbWJkYVxuICogICBBIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50IG9mIHRoZSBjb2xsZWN0aW9uLlxuICogQHJldHVybiB7RXhwcn1cbiAqICovXG5mdW5jdGlvbiBGb3JlYWNoKGNvbGxlY3Rpb24sIGxhbWJkYV9leHByKSB7XG4gIGFyaXR5LmV4YWN0KDIsIGFyZ3VtZW50cywgRm9yZWFjaC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBmb3JlYWNoOiB3cmFwKGxhbWJkYV9leHByKSwgY29sbGVjdGlvbjogd3JhcChjb2xsZWN0aW9uKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNjb2xsZWN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gY29sbGVjdGlvblxuICogICBBbiBleHByZXNzaW9uIHJlc3VsdGluZyBpbiBhIGNvbGxlY3Rpb24gdG8gYmUgZmlsdGVyZWQuXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfGZ1bmN0aW9ufSBsYW1iZGFcbiAqICAgQSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBib29sZWFuIHVzZWQgdG8gZmlsdGVyIHVud2FudGVkIHZhbHVlcy5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gRmlsdGVyKGNvbGxlY3Rpb24sIGxhbWJkYV9leHByKSB7XG4gIGFyaXR5LmV4YWN0KDIsIGFyZ3VtZW50cywgRmlsdGVyLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGZpbHRlcjogd3JhcChsYW1iZGFfZXhwciksIGNvbGxlY3Rpb246IHdyYXAoY29sbGVjdGlvbikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjY29sbGVjdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IG51bWJlclxuICogICBBbiBleHByZXNzaW9uIHJlc3VsdGluZyBpbiB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHRha2UgZnJvbSB0aGUgY29sbGVjdGlvbi5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGNvbGxlY3Rpb25cbiAqICAgQW4gZXhwcmVzc2lvbiByZXN1bHRpbmcgaW4gYSBjb2xsZWN0aW9uLlxuICogQHJldHVybiB7RXhwcn1cbiAqICovXG5mdW5jdGlvbiBUYWtlKG51bWJlciwgY29sbGVjdGlvbikge1xuICBhcml0eS5leGFjdCgyLCBhcmd1bWVudHMsIFRha2UubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgdGFrZTogd3JhcChudW1iZXIpLCBjb2xsZWN0aW9uOiB3cmFwKGNvbGxlY3Rpb24pIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2NvbGxlY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBudW1iZXJcbiAqICAgQW4gZXhwcmVzc2lvbiByZXN1bHRpbmcgaW4gdGhlIG51bWJlciBvZiBlbGVtZW50cyB0byBkcm9wIGZyb20gdGhlIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBjb2xsZWN0aW9uXG4gKiAgIEFuIGV4cHJlc3Npb24gcmVzdWx0aW5nIGluIGEgY29sbGVjdGlvbi5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gRHJvcChudW1iZXIsIGNvbGxlY3Rpb24pIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBEcm9wLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGRyb3A6IHdyYXAobnVtYmVyKSwgY29sbGVjdGlvbjogd3JhcChjb2xsZWN0aW9uKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNjb2xsZWN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZWxlbWVudHNcbiAqICAgQW4gZXhwcmVzc2lvbiByZXN1bHRpbmcgaW4gYSBjb2xsZWN0aW9uIG9mIGVsZW1lbnRzIHRvIHByZXBlbmQgdG8gdGhlIGdpdmVuIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBjb2xsZWN0aW9uXG4gKiAgIEFuIGV4cHJlc3Npb24gcmVzdWx0aW5nIGluIGEgY29sbGVjdGlvbi5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFByZXBlbmQoZWxlbWVudHMsIGNvbGxlY3Rpb24pIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBQcmVwZW5kLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHByZXBlbmQ6IHdyYXAoZWxlbWVudHMpLCBjb2xsZWN0aW9uOiB3cmFwKGNvbGxlY3Rpb24pIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2NvbGxlY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBlbGVtZW50c1xuICogICBBbiBleHByZXNzaW9uIHJlc3VsdGluZyBpbiBhIGNvbGxlY3Rpb24gb2YgZWxlbWVudHMgdG8gYXBwZW5kIHRvIHRoZSBnaXZlbiBjb2xsZWN0aW9uLlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gY29sbGVjdGlvblxuICogICBBbiBleHByZXNzaW9uIHJlc3VsdGluZyBpbiBhIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBBcHBlbmQoZWxlbWVudHMsIGNvbGxlY3Rpb24pIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBBcHBlbmQubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgYXBwZW5kOiB3cmFwKGVsZW1lbnRzKSwgY29sbGVjdGlvbjogd3JhcChjb2xsZWN0aW9uKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNjb2xsZWN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gY29sbGVjdGlvblxuICogICBBbiBleHByZXNzaW9uIHJlc3VsdGluZyBpbiBhIGNvbGxlY3Rpb24uXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBJc0VtcHR5KGNvbGxlY3Rpb24pIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc0VtcHR5Lm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGlzX2VtcHR5OiB3cmFwKGNvbGxlY3Rpb24pIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2NvbGxlY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBjb2xsZWN0aW9uXG4gKiAgIEFuIGV4cHJlc3Npb24gcmVzdWx0aW5nIGluIGEgY29sbGVjdGlvbi5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIElzTm9uRW1wdHkoY29sbGVjdGlvbikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzTm9uRW1wdHkubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaXNfbm9uZW1wdHk6IHdyYXAoY29sbGVjdGlvbikgfSlcbn1cblxuLy8gVHlwZSBjaGVjayBmdW5jdGlvbnNcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIG51bWJlci5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzbnVtYmVyXCI+SXNOdW1iZXI8L2E+XG4gKi9cbmZ1bmN0aW9uIElzTnVtYmVyKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc051bWJlci5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19udW1iZXI6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIGRvdWJsZS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzZG91YmxlXCI+SXNEb3VibGU8L2E+XG4gKi9cbmZ1bmN0aW9uIElzRG91YmxlKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc0RvdWJsZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19kb3VibGU6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhbiBpbnRlZ2VyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXNpbnRlZ2VyXCI+SXNJbnRlZ2VyPC9hPlxuICovXG5mdW5jdGlvbiBJc0ludGVnZXIoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzSW50ZWdlci5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19pbnRlZ2VyOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGV4cHJlc3Npb24gaXMgYSBib29sZWFuLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXNib29sZWFuXCI+SXNCb29sZWFuPC9hPlxuICovXG5mdW5jdGlvbiBJc0Jvb2xlYW4oZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzQm9vbGVhbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19ib29sZWFuOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGV4cHJlc3Npb24gaXMgbnVsbC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzbnVsbFwiPklzTnVsbDwvYT5cbiAqL1xuZnVuY3Rpb24gSXNOdWxsKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc051bGwubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaXNfbnVsbDogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBleHByZXNzaW9uIGlzIGEgYnl0ZSBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzYnl0ZXNcIj5Jc0J5dGVzPC9hPlxuICovXG5mdW5jdGlvbiBJc0J5dGVzKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc0J5dGVzLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGlzX2J5dGVzOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGV4cHJlc3Npb24gaXMgYSB0aW1lc3RhbXAuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwclxuICogICBUaGUgZXhwcmVzc2lvbiB0byBjaGVja1xuICogQHJldHVybiB7RXhwcn1cbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9pc3RpbWVzdGFtcFwiPklzVGltZXN0YW1wPC9hPlxuICovXG5mdW5jdGlvbiBJc1RpbWVzdGFtcChleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgSXNUaW1lc3RhbXAubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaXNfdGltZXN0YW1wOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGV4cHJlc3Npb24gaXMgYSBkYXRlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXNkYXRlXCI+SXNEYXRlPC9hPlxuICovXG5mdW5jdGlvbiBJc0RhdGUoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzRGF0ZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19kYXRlOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGV4cHJlc3Npb24gaXMgYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwclxuICogICBUaGUgZXhwcmVzc2lvbiB0byBjaGVja1xuICogQHJldHVybiB7RXhwcn1cbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9pc3N0cmluZ1wiPklzU3RyaW5nPC9hPlxuICovXG5mdW5jdGlvbiBJc1N0cmluZyhleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgSXNTdHJpbmcubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaXNfc3RyaW5nOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGV4cHJlc3Npb24gaXMgYW4gYXJyYXkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwclxuICogICBUaGUgZXhwcmVzc2lvbiB0byBjaGVja1xuICogQHJldHVybiB7RXhwcn1cbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9pc2FycmF5XCI+SXNBcnJheTwvYT5cbiAqL1xuZnVuY3Rpb24gSXNBcnJheShleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgSXNBcnJheS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19hcnJheTogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBleHByZXNzaW9uIGlzIGFuIG9iamVjdC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzb2JqZWN0XCI+SXNPYmplY3Q8L2E+XG4gKi9cbmZ1bmN0aW9uIElzT2JqZWN0KGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc09iamVjdC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19vYmplY3Q6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIHJlZmVyZW5jZS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzcmVmXCI+SXNSZWY8L2E+XG4gKi9cbmZ1bmN0aW9uIElzUmVmKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc1JlZi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19yZWY6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIHNldC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzc2V0XCI+SXNTZXQ8L2E+XG4gKi9cbmZ1bmN0aW9uIElzU2V0KGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc1NldC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19zZXQ6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIGRvY3VtZW50IChlaXRoZXIgYSByZWZlcmVuY2Ugb3IgYW4gaW5zdGFuY2UpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXNkb2NcIj5Jc0RvYzwvYT5cbiAqL1xuZnVuY3Rpb24gSXNEb2MoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzRG9jLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGlzX2RvYzogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBleHByZXNzaW9uIGlzIGEgbGFtYmRhLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXNsYW1iZGFcIj5Jc0xhbWJkYTwvYT5cbiAqL1xuZnVuY3Rpb24gSXNMYW1iZGEoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzTGFtYmRhLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGlzX2xhbWJkYTogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBleHByZXNzaW9uIGlzIGEgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzY29sbGVjdGlvblwiPklzQ29sbGVjdGlvbjwvYT5cbiAqL1xuZnVuY3Rpb24gSXNDb2xsZWN0aW9uKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc0NvbGxlY3Rpb24ubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaXNfY29sbGVjdGlvbjogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBleHByZXNzaW9uIGlzIGEgZGF0YWJhc2UuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwclxuICogICBUaGUgZXhwcmVzc2lvbiB0byBjaGVja1xuICogQHJldHVybiB7RXhwcn1cbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9pc2RhdGFiYXNlXCI+SXNEYXRhYmFzZTwvYT5cbiAqL1xuZnVuY3Rpb24gSXNEYXRhYmFzZShleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgSXNEYXRhYmFzZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19kYXRhYmFzZTogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENoZWNrIGlmIHRoZSBleHByZXNzaW9uIGlzIGFuIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXNpbmRleFwiPklzSW5kZXg8L2E+XG4gKi9cbmZ1bmN0aW9uIElzSW5kZXgoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzSW5kZXgubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaXNfaW5kZXg6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXNmdW5jdGlvblwiPklzRnVuY3Rpb248L2E+XG4gKi9cbmZ1bmN0aW9uIElzRnVuY3Rpb24oZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzRnVuY3Rpb24ubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaXNfZnVuY3Rpb246IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIGtleS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lza2V5XCI+SXNLZXk8L2E+XG4gKi9cbmZ1bmN0aW9uIElzS2V5KGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc0tleS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19rZXk6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBhIHRva2VuLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXN0b2tlblwiPklzVG9rZW48L2E+XG4gKi9cbmZ1bmN0aW9uIElzVG9rZW4oZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzVG9rZW4ubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaXNfdG9rZW46IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgZXhwcmVzc2lvbiBpcyBjcmVkZW50aWFscy5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByXG4gKiAgIFRoZSBleHByZXNzaW9uIHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2lzY3JlZGVudGlhbHNcIj5Jc0NyZWRlbnRpYWxzPC9hPlxuICovXG5mdW5jdGlvbiBJc0NyZWRlbnRpYWxzKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBJc0NyZWRlbnRpYWxzLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGlzX2NyZWRlbnRpYWxzOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhlIGV4cHJlc3Npb24gaXMgYSByb2xlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJcbiAqICAgVGhlIGV4cHJlc3Npb24gdG8gY2hlY2tcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvaXNyb2xlXCI+SXNSb2xlPC9hPlxuICovXG5mdW5jdGlvbiBJc1JvbGUoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIElzUm9sZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBpc19yb2xlOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8vIFJlYWQgZnVuY3Rpb25zXG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3JlYWQtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSByZWZcbiAqICAgQW4gZXhwcmVzc2lvbiByZXN1bHRpbmcgaW4gZWl0aGVyIGEgUmVmIG9yIFNldFJlZi5cbiAqIEBwYXJhbSB7P21vZHVsZTpxdWVyeX5FeHByQXJnfSB0c1xuICogICBUaGUgc25hcHNob3QgdGltZSBhdCB3aGljaCB0byBnZXQgdGhlIGRvY3VtZW50LlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gR2V0KHJlZiwgdHMpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAyLCBhcmd1bWVudHMsIEdldC5uYW1lKVxuICB0cyA9IGRlZmF1bHRzKHRzLCBudWxsKVxuXG4gIHJldHVybiBuZXcgRXhwcihwYXJhbXMoeyBnZXQ6IHdyYXAocmVmKSB9LCB7IHRzOiB3cmFwKHRzKSB9KSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjcmVhZC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHNlY3JldFxuICogICBUaGUga2V5IG9yIHRva2VuIHNlY3JldCB0byBsb29rdXAuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBLZXlGcm9tU2VjcmV0KHNlY3JldCkge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIEtleUZyb21TZWNyZXQubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsga2V5X2Zyb21fc2VjcmV0OiB3cmFwKHNlY3JldCkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvcmVkdWNlKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBsYW1iZGFcbiAqICAgVGhlIGFjY3VtdWxhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBpbml0aWFsXG4gKiAgIFRoZSBpbml0aWFsIHZhbHVlXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBjb2xsZWN0aW9uXG4gKiAgIFRoZSBjb2xsZWNpdG9uIHRvIGJlIHJlZHVjZWRcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFJlZHVjZShsYW1iZGEsIGluaXRpYWwsIGNvbGxlY3Rpb24pIHtcbiAgYXJpdHkuZXhhY3QoMywgYXJndW1lbnRzLCBSZWR1Y2UubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHtcbiAgICByZWR1Y2U6IHdyYXAobGFtYmRhKSxcbiAgICBpbml0aWFsOiB3cmFwKGluaXRpYWwpLFxuICAgIGNvbGxlY3Rpb246IHdyYXAoY29sbGVjdGlvbiksXG4gIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3JlYWQtZnVuY3Rpb25zKS5cbiAqIFlvdSBtYXkgd2FudCB0byB1dGlsaXplIHtAbGluayBDbGllbnQjcGFnaW5hdGV9IHRvIG9idGFpbiBhIHtAbGluayBQYWdlSGVscGVyfSxcbiAqIHJhdGhlciB0aGFuIHVzaW5nIHRoaXMgcXVlcnkgZnVuY3Rpb24gZGlyZWN0bHkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gc2V0XG4gKiAgIEFuIGV4cHJlc3Npb24gcmVzdWx0aW5nIGluIGEgU2V0UmVmIHRvIHBhZ2Ugb3Zlci5cbiAqIEBwYXJhbSB7P09iamVjdH0gb3B0c1xuICogIEFuIG9iamVjdCByZXByZXNlbnRpbmcgb3B0aW9ucyBmb3IgcGFnaW5hdGlvbi5cbiAqICAgIC0gc2l6ZTogTWF4aW11bSBudW1iZXIgb2YgcmVzdWx0cyB0byByZXR1cm4uXG4gKiAgICAtIGFmdGVyOiBSZXR1cm4gdGhlIG5leHQgcGFnZSBvZiByZXN1bHRzIGFmdGVyIHRoaXMgY3Vyc29yIChpbmNsdXNpdmUpLlxuICogICAgLSBiZWZvcmU6IFJldHVybiB0aGUgcHJldmlvdXMgcGFnZSBvZiByZXN1bHRzIGJlZm9yZSB0aGlzIGN1cnNvciAoZXhjbHVzaXZlKS5cbiAqICAgIC0gc291cmNlczogSWYgdHJ1ZSwgaW5jbHVkZSB0aGUgc291cmNlIHNldHMgYWxvbmcgd2l0aCBlYWNoIGVsZW1lbnQuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBQYWdpbmF0ZShzZXQsIG9wdHMpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAyLCBhcmd1bWVudHMsIFBhZ2luYXRlLm5hbWUpXG4gIG9wdHMgPSBkZWZhdWx0cyhvcHRzLCB7fSlcblxuICByZXR1cm4gbmV3IEV4cHIob2JqZWN0QXNzaWduKHsgcGFnaW5hdGU6IHdyYXAoc2V0KSB9LCB3cmFwVmFsdWVzKG9wdHMpKSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjcmVhZC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHJlZlxuICogICBBbiBleHByZXNzaW9uIHJlc3VsdGluZyBpbiBhIFJlZi5cbiAqIEBwYXJhbSB7P21vZHVsZTpxdWVyeX5FeHByQXJnfSB0c1xuICogICBUaGUgc25hcHNob3QgdGltZSBhdCB3aGljaCB0byBjaGVjayBmb3IgdGhlIGRvY3VtZW50J3MgZXhpc3RlbmNlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRXhpc3RzKHJlZiwgdHMpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAyLCBhcmd1bWVudHMsIEV4aXN0cy5uYW1lKVxuICB0cyA9IGRlZmF1bHRzKHRzLCBudWxsKVxuXG4gIHJldHVybiBuZXcgRXhwcihwYXJhbXMoeyBleGlzdHM6IHdyYXAocmVmKSB9LCB7IHRzOiB3cmFwKHRzKSB9KSlcbn1cblxuLy8gV3JpdGUgZnVuY3Rpb25zXG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3dyaXRlLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcmVmXG4gKiAgIFRoZSBSZWYgKHVzdWFsbHkgYSBDb2xsZWN0aW9uUmVmKSB0byBjcmVhdGUuXG4gKiBAcGFyYW0gez9tb2R1bGU6cXVlcnl+RXhwckFyZ30gcGFyYW1zXG4gKiAgIEFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGRvY3VtZW50LlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gQ3JlYXRlKGNvbGxlY3Rpb25fcmVmLCBwYXJhbXMpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAyLCBhcmd1bWVudHMsIENyZWF0ZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBjcmVhdGU6IHdyYXAoY29sbGVjdGlvbl9yZWYpLCBwYXJhbXM6IHdyYXAocGFyYW1zKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSN3cml0ZS1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHJlZlxuICogICBUaGUgUmVmIHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHBhcmFtc1xuICogICBBbiBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBwYXJhbWV0ZXJzIG9mIHRoZSBkb2N1bWVudC5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFVwZGF0ZShyZWYsIHBhcmFtcykge1xuICBhcml0eS5leGFjdCgyLCBhcmd1bWVudHMsIFVwZGF0ZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyB1cGRhdGU6IHdyYXAocmVmKSwgcGFyYW1zOiB3cmFwKHBhcmFtcykgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjd3JpdGUtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSByZWZcbiAqICAgVGhlIFJlZiB0byByZXBsYWNlLlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcGFyYW1zXG4gKiAgIEFuIG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGRvY3VtZW50LlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gUmVwbGFjZShyZWYsIHBhcmFtcykge1xuICBhcml0eS5leGFjdCgyLCBhcmd1bWVudHMsIFJlcGxhY2UubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgcmVwbGFjZTogd3JhcChyZWYpLCBwYXJhbXM6IHdyYXAocGFyYW1zKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSN3cml0ZS1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHJlZlxuICogICBUaGUgUmVmIHRvIGRlbGV0ZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIERlbGV0ZShyZWYpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBEZWxldGUubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgZGVsZXRlOiB3cmFwKHJlZikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjd3JpdGUtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSByZWZcbiAqICAgVGhlIFJlZiB0byBpbnNlcnQgYWdhaW5zdFxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gdHNcbiAqICAgVGhlIHZhbGlkIHRpbWUgb2YgdGhlIGluc2VydGVkIGV2ZW50XG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBhY3Rpb25cbiAqICAgV2hldGhlciB0aGUgZXZlbnQgc2hvdWxkIGJlIGEgQ3JlYXRlLCBVcGRhdGUsIG9yIERlbGV0ZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHBhcmFtc1xuICogICBJZiB0aGlzIGlzIGEgQ3JlYXRlIG9yIFVwZGF0ZSwgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIGRvY3VtZW50LlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gSW5zZXJ0KHJlZiwgdHMsIGFjdGlvbiwgcGFyYW1zKSB7XG4gIGFyaXR5LmV4YWN0KDQsIGFyZ3VtZW50cywgSW5zZXJ0Lm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7XG4gICAgaW5zZXJ0OiB3cmFwKHJlZiksXG4gICAgdHM6IHdyYXAodHMpLFxuICAgIGFjdGlvbjogd3JhcChhY3Rpb24pLFxuICAgIHBhcmFtczogd3JhcChwYXJhbXMpLFxuICB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSN3cml0ZS1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHJlZlxuICogICBUaGUgUmVmIG9mIHRoZSBkb2N1bWVudCB3aG9zZSBldmVudCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRzXG4gKiAgIFRoZSB2YWxpZCB0aW1lIG9mIHRoZSBldmVudC5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGFjdGlvblxuICogICBUaGUgZXZlbnQgYWN0aW9uIChDcmVhdGUsIFVwZGF0ZSwgb3IgRGVsZXRlKSB0aGF0IHNob3VsZCBiZSByZW1vdmVkLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gUmVtb3ZlKHJlZiwgdHMsIGFjdGlvbikge1xuICBhcml0eS5leGFjdCgzLCBhcmd1bWVudHMsIFJlbW92ZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyByZW1vdmU6IHdyYXAocmVmKSwgdHM6IHdyYXAodHMpLCBhY3Rpb246IHdyYXAoYWN0aW9uKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSN3cml0ZS1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHBhcmFtc1xuICogICBBbiBvYmplY3Qgb2YgcGFyYW1ldGVycyB1c2VkIHRvIGNyZWF0ZSBhIGNsYXNzLlxuICogICAgIC0gbmFtZSAocmVxdWlyZWQpOiB0aGUgbmFtZSBvZiB0aGUgY2xhc3MgdG8gY3JlYXRlXG4gKiBAcmV0dXJuIHtFeHByfVxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBDcmVhdGVDb2xsZWN0aW9uIGluc3RlYWRcbiAqL1xuZnVuY3Rpb24gQ3JlYXRlQ2xhc3MocGFyYW1zKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgQ3JlYXRlQ2xhc3MubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgY3JlYXRlX2NsYXNzOiB3cmFwKHBhcmFtcykgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjd3JpdGUtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBwYXJhbXNcbiAqICAgQW4gb2JqZWN0IG9mIHBhcmFtZXRlcnMgdXNlZCB0byBjcmVhdGUgYSBjb2xsZWN0aW9uLlxuICogICAgIC0gbmFtZSAocmVxdWlyZWQpOiB0aGUgbmFtZSBvZiB0aGUgY29sbGVjdGlvbiB0byBjcmVhdGVcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIENyZWF0ZUNvbGxlY3Rpb24ocGFyYW1zKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgQ3JlYXRlQ29sbGVjdGlvbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBjcmVhdGVfY29sbGVjdGlvbjogd3JhcChwYXJhbXMpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3dyaXRlLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcGFyYW1zXG4gKiAgIEFuIG9iamVjdCBvZiBwYXJhbWV0ZXJzIHVzZWQgdG8gY3JlYXRlIGEgZGF0YWJhc2UuXG4gKiAgICAgLSBuYW1lIChyZXF1aXJlZCk6IHRoZSBuYW1lIG9mIHRoZSBkYXRhYmFzZSB0byBjcmVhdGVcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIENyZWF0ZURhdGFiYXNlKHBhcmFtcykge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIENyZWF0ZURhdGFiYXNlLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGNyZWF0ZV9kYXRhYmFzZTogd3JhcChwYXJhbXMpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3dyaXRlLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcGFyYW1zXG4gKiAgIEFuIG9iamVjdCBvZiBwYXJhbWV0ZXJzIHVzZWQgdG8gY3JlYXRlIGFuIGluZGV4LlxuICogICAgIC0gbmFtZSAocmVxdWlyZWQpOiB0aGUgbmFtZSBvZiB0aGUgaW5kZXggdG8gY3JlYXRlXG4gKiAgICAgLSBzb3VyY2U6IE9uZSBvciBtb3JlIHNvdXJjZSBvYmplY3RzIGRlc2NyaWJpbmcgc291cmNlIGNvbGxlY3Rpb25zIGFuZCAob3B0aW9uYWwpIGZpZWxkIGJpbmRpbmdzLlxuICogICAgIC0gdGVybXM6IEFuIGFycmF5IG9mIHRlcm0gb2JqZWN0cyBkZXNjcmliaW5nIHRoZSBmaWVsZHMgdG8gYmUgaW5kZXhlZC4gT3B0aW9uYWxcbiAqICAgICAtIHZhbHVlczogQW4gYXJyYXkgb2YgdmFsdWUgb2JqZWN0cyBkZXNjcmliaW5nIHRoZSBmaWVsZHMgdG8gYmUgY292ZXJlZC4gT3B0aW9uYWxcbiAqICAgICAtIHVuaXF1ZTogSWYgdHJ1ZSwgbWFpbnRhaW5zIGEgdW5pcXVlbmVzcyBjb25zdHJhaW50IG9uIGNvbWJpbmVkIHRlcm1zIGFuZCB2YWx1ZXMuIE9wdGlvbmFsXG4gKiAgICAgLSBwYXJ0aXRpb25zOiBUaGUgbnVtYmVyIG9mIHN1Yi1wYXJ0aXRpb25zIHdpdGhpbiBlYWNoIHRlcm0uIE9wdGlvbmFsXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBDcmVhdGVJbmRleChwYXJhbXMpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBDcmVhdGVJbmRleC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBjcmVhdGVfaW5kZXg6IHdyYXAocGFyYW1zKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSN3cml0ZS1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHBhcmFtc1xuICogICBBbiBvYmplY3Qgb2YgcGFyYW1ldGVycyB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBrZXlcbiAqICAgICAtIGRhdGFiYXNlOiBSZWYgb2YgdGhlIGRhdGFiYXNlIHRoZSBrZXkgd2lsbCBiZSBzY29wZWQgdG8uIE9wdGlvbmFsLlxuICogICAgIC0gcm9sZTogVGhlIHJvbGUgb2YgdGhlIG5ldyBrZXlcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIENyZWF0ZUtleShwYXJhbXMpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBDcmVhdGVLZXkubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgY3JlYXRlX2tleTogd3JhcChwYXJhbXMpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3dyaXRlLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcGFyYW1zXG4gKiAgIEFuIG9iamVjdCBvZiBwYXJhbWV0ZXJzIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHVzZXIgZGVmaW5lZCBmdW5jdGlvbi5cbiAqICAgICAtIG5hbWU6IFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvblxuICogICAgIC0gYm9keTogQSBsYW1iZGEgZnVuY3Rpb24gKGVzY2FwZWQgd2l0aCBgcXVlcnlgKS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIENyZWF0ZUZ1bmN0aW9uKHBhcmFtcykge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIENyZWF0ZUZ1bmN0aW9uLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGNyZWF0ZV9mdW5jdGlvbjogd3JhcChwYXJhbXMpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3dyaXRlLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcGFyYW1zXG4gKiAgIEFuIG9iamVjdCBvZiBwYXJhbWV0ZXJzIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHJvbGUuXG4gKiAgICAgLSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgcm9sZVxuICogICAgIC0gcHJpdmlsZWdlczogQW4gYXJyYXkgb2YgcHJpdmlsZWdlc1xuICogICAgIC0gbWVtYmVyc2hpcDogQW4gYXJyYXkgb2YgbWVtYmVyc2hpcCBiaW5kaW5nc1xuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gQ3JlYXRlUm9sZShwYXJhbXMpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBDcmVhdGVSb2xlLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGNyZWF0ZV9yb2xlOiB3cmFwKHBhcmFtcykgfSlcbn1cblxuLy8gU2V0c1xuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzZXRzKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSByZWZcbiAqICAgVGhlIFJlZiBvZiB0aGUgZG9jdW1lbnQgZm9yIHdoaWNoIHRvIHJldHJpZXZlIHRoZSBzaW5nbGV0b24gc2V0LlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gU2luZ2xldG9uKHJlZikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIFNpbmdsZXRvbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBzaW5nbGV0b246IHdyYXAocmVmKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzZXRzKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSByZWZcbiAqICAgQSBSZWYgb3IgU2V0UmVmIHRvIHJldHJpZXZlIGFuIGV2ZW50IHNldCBmcm9tLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRXZlbnRzKHJlZl9zZXQpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBFdmVudHMubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgZXZlbnRzOiB3cmFwKHJlZl9zZXQpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3NldHMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGluZGV4XG4gKiAgIFRoZSBSZWYgb2YgdGhlIGluZGV4IHRvIG1hdGNoIGFnYWluc3QuXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGxpc3Qgb2YgdGVybXMgdXNlZCBpbiB0aGUgbWF0Y2guXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBNYXRjaChpbmRleCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBNYXRjaC5uYW1lKVxuICB2YXIgYXJncyA9IGFyZ3NUb0FycmF5KGFyZ3VtZW50cylcbiAgYXJncy5zaGlmdCgpXG4gIHJldHVybiBuZXcgRXhwcih7IG1hdGNoOiB3cmFwKGluZGV4KSwgdGVybXM6IHdyYXAodmFyYXJncyhhcmdzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc2V0cykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gc2V0c1xuICogICBBIGxpc3Qgb2YgU2V0UmVmcyB0byB1bmlvbiB0b2dldGhlci5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFVuaW9uKCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBVbmlvbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyB1bmlvbjogd3JhcCh2YXJhcmdzKGFyZ3VtZW50cykpIH0pXG59XG5cbi8qKlxuICogTWVyZ2UgdHdvIG9yIG1vcmUgb2JqZWN0cy4uXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gbWVyZ2UgbWVyZ2UgdGhlIGZpcnN0IG9iamVjdC5cbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IF93aXRoIHRoZSBzZWNvbmQgb2JqZWN0IG9yIGEgbGlzdCBvZiBvYmplY3RzXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSBsYW1iZGEgYSBsYW1iZGEgdG8gcmVzb2x2ZSBwb3NzaWJsZSBjb25mbGljdHNcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gTWVyZ2UobWVyZ2UsIF93aXRoLCBsYW1iZGEpIHtcbiAgYXJpdHkuYmV0d2VlbigyLCAzLCBhcmd1bWVudHMsIE1lcmdlLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcihcbiAgICBwYXJhbXMoeyBtZXJnZTogd3JhcChtZXJnZSksIHdpdGg6IHdyYXAoX3dpdGgpIH0sIHsgbGFtYmRhOiB3cmFwKGxhbWJkYSkgfSlcbiAgKVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzZXRzKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSBzZXRzXG4gKiAgIEEgbGlzdCBvZiBTZXRSZWZzIHRvIGludGVyc2VjdC5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gSW50ZXJzZWN0aW9uKCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBJbnRlcnNlY3Rpb24ubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaW50ZXJzZWN0aW9uOiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc2V0cykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gc2V0c1xuICogICBBIGxpc3Qgb2YgU2V0UmVmcyB0byBkaWZmLlxuICogQHJldHVybiB7RXhwcn1cbiAqICovXG5mdW5jdGlvbiBEaWZmZXJlbmNlKCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBEaWZmZXJlbmNlLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGRpZmZlcmVuY2U6IHdyYXAodmFyYXJncyhhcmd1bWVudHMpKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzZXRzKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBzZXRcbiAqICAgQSBTZXRSZWYgdG8gcmVtb3ZlIGR1cGxpY2F0ZXMgZnJvbS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gRGlzdGluY3Qoc2V0KSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgRGlzdGluY3QubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgZGlzdGluY3Q6IHdyYXAoc2V0KSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzZXRzKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBzb3VyY2VcbiAqICAgQSBTZXRSZWYgb2YgdGhlIHNvdXJjZSBzZXRcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd8ZnVuY3Rpb259IHRhcmdldFxuICogICBBIExhbWJkYSB0aGF0IHdpbGwgYWNjZXB0IGVhY2ggZWxlbWVudCBvZiB0aGUgc291cmNlIFNldCBhbmQgcmV0dXJuIGEgU2V0XG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBKb2luKHNvdXJjZSwgdGFyZ2V0KSB7XG4gIGFyaXR5LmV4YWN0KDIsIGFyZ3VtZW50cywgSm9pbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBqb2luOiB3cmFwKHNvdXJjZSksIHdpdGg6IHdyYXAodGFyZ2V0KSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9yYW5nZSkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gc2V0XG4gKiAgIEEgU2V0UmVmIG9mIHRoZSBzb3VyY2Ugc2V0XG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBmcm9tXG4gKiAgIFRoZSBsb3dlciBib3VuZFxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gdG9cbiAqICAgVGhlIHVwcGVyIGJvdW5kXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBSYW5nZShzZXQsIGZyb20sIHRvKSB7XG4gIGFyaXR5LmV4YWN0KDMsIGFyZ3VtZW50cywgUmFuZ2UubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgcmFuZ2U6IHdyYXAoc2V0KSwgZnJvbTogd3JhcChmcm9tKSwgdG86IHdyYXAodG8pIH0pXG59XG5cbi8vIEF1dGhlbnRpY2F0aW9uXG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2F1dGhlbnRpY2F0aW9uKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSByZWZcbiAqICAgQSBSZWYgd2l0aCBjcmVkZW50aWFscyB0byBhdXRoZW50aWNhdGUgYWdhaW5zdFxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcGFyYW1zXG4gKiAgIEFuIG9iamVjdCBvZiBwYXJhbWV0ZXJzIHRvIHBhc3MgdG8gdGhlIGxvZ2luIGZ1bmN0aW9uXG4gKiAgICAgLSBwYXNzd29yZDogVGhlIHBhc3N3b3JkIHVzZWQgdG8gbG9naW5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKiAqL1xuZnVuY3Rpb24gTG9naW4ocmVmLCBwYXJhbXMpIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBMb2dpbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBsb2dpbjogd3JhcChyZWYpLCBwYXJhbXM6IHdyYXAocGFyYW1zKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNhdXRoZW50aWNhdGlvbikuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZGVsZXRlX3Rva2Vuc1xuICogICBJZiB0cnVlLCBsb2cgb3V0IGFsbCB0b2tlbnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjdXJyZW50IHNlc3Npb24uXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBMb2dvdXQoZGVsZXRlX3Rva2Vucykge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIExvZ291dC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBsb2dvdXQ6IHdyYXAoZGVsZXRlX3Rva2VucykgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjYXV0aGVudGljYXRpb24pLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHJlZlxuICogICBUaGUgUmVmIHRvIGNoZWNrIHRoZSBwYXNzd29yZCBhZ2FpbnN0LlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcGFzc3dvcmRcbiAqICAgVGhlIGNyZWRlbnRpYWxzIHBhc3N3b3JkIHRvIGNoZWNrLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gSWRlbnRpZnkocmVmLCBwYXNzd29yZCkge1xuICBhcml0eS5leGFjdCgyLCBhcmd1bWVudHMsIElkZW50aWZ5Lm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGlkZW50aWZ5OiB3cmFwKHJlZiksIHBhc3N3b3JkOiB3cmFwKHBhc3N3b3JkKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNhdXRoZW50aWNhdGlvbikuXG4gKlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gSWRlbnRpdHkoKSB7XG4gIGFyaXR5LmV4YWN0KDAsIGFyZ3VtZW50cywgSWRlbnRpdHkubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgaWRlbnRpdHk6IG51bGwgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjYXV0aGVudGljYXRpb24pLlxuICpcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEhhc0lkZW50aXR5KCkge1xuICBhcml0eS5leGFjdCgwLCBhcmd1bWVudHMsIEhhc0lkZW50aXR5Lm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGhhc19pZGVudGl0eTogbnVsbCB9KVxufVxuXG4vLyBTdHJpbmcgZnVuY3Rpb25zXG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3N0cmluZy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmdzIC0gQSBsaXN0IG9mIHN0cmluZ3MgdG8gY29uY2F0ZW5hdGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VwYXJhdG9yICAtIFRoZSBzZXBhcmF0b3IgdG8gdXNlIGJldHdlZW4gZWFjaCBzdHJpbmcuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGEgc2luZ2xlIGNvbWJpbmVkIHN0cmluZ1xuICovXG5mdW5jdGlvbiBDb25jYXQoc3RyaW5ncywgc2VwYXJhdG9yKSB7XG4gIGFyaXR5Lm1pbigxLCBhcmd1bWVudHMsIENvbmNhdC5uYW1lKVxuICBzZXBhcmF0b3IgPSBkZWZhdWx0cyhzZXBhcmF0b3IsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcihcbiAgICBwYXJhbXMoeyBjb25jYXQ6IHdyYXAoc3RyaW5ncykgfSwgeyBzZXBhcmF0b3I6IHdyYXAoc2VwYXJhdG9yKSB9KVxuICApXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3N0cmluZy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSBUaGUgc3RyaW5nIHRvIGNhc2Vmb2xkLlxuICogQHBhcmFtIHtzdHJpbmd9IG5vcm1hbGl6ZXIgLSBUaGUgYWxnb3JpdGhtIHRvIHVzZS4gT25lIG9mOiBORktDQ2FzZUZvbGQsIE5GQywgTkZELCBORktDLCBORktELlxuICogQHJldHVybiB7c3RyaW5nfSBhIG5vcm1hbGl6ZWQgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIENhc2Vmb2xkKHN0cmluZywgbm9ybWFsaXplcikge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBDYXNlZm9sZC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoXG4gICAgcGFyYW1zKHsgY2FzZWZvbGQ6IHdyYXAoc3RyaW5nKSB9LCB7IG5vcm1hbGl6ZXI6IHdyYXAobm9ybWFsaXplcikgfSlcbiAgKVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIHRoZSBnaXZlbiBzdWJzdHJpbmcsIG9yIGZhbHNlIGlmIG90aGVyd2lzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAgLSB0aGUgc3RyaW5nIHRvIGV2YWx1YXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VhcmNoIC0gdGhlIHN1YnN0cmluZyB0byBzZWFyY2ggZm9yXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgIC0gd2FzIHRoZSBzZWFyY2ggcmVzdWx0IGZvdW5kXG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvY29udGFpbnNzdHJcIj5GYXVuYURCIENvbnRhaW5zU3RyIEZ1bmN0aW9uPC9hPlxuICovXG5mdW5jdGlvbiBDb250YWluc1N0cih2YWx1ZSwgc2VhcmNoKSB7XG4gIGFyaXR5LmV4YWN0KDIsIGFyZ3VtZW50cywgQ29udGFpbnNTdHIubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgY29udGFpbnNzdHI6IHdyYXAodmFsdWUpLCBzZWFyY2g6IHdyYXAoc2VhcmNoKSB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGNvbnRhaW5zIHRoZSBnaXZlbiBwYXR0ZXJuLCBvciBmYWxzZSBpZiBvdGhlcndpc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgICAtIHRoZSBzdHJpbmcgdG8gZXZhbHVhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXR0ZXJuIC0gdGhlIHBhdHRlcm4gdG8gc2VhcmNoIGZvclxuICogQHJldHVybiB7Ym9vbGVhbn0gICAgICAgLSB3YXMgdGhlIHJlZ2V4IHNlYXJjaCByZXN1bHQgZm91bmRcbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9jb250YWluc3N0cnJlZ2V4XCI+RmF1bmFEQiBDb250YWluc1N0clJlZ2V4IEZ1bmN0aW9uPC9hPlxuICovXG5mdW5jdGlvbiBDb250YWluc1N0clJlZ2V4KHZhbHVlLCBwYXR0ZXJuKSB7XG4gIGFyaXR5LmV4YWN0KDIsIGFyZ3VtZW50cywgQ29udGFpbnNTdHJSZWdleC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBjb250YWluc3N0cnJlZ2V4OiB3cmFwKHZhbHVlKSwgcGF0dGVybjogd3JhcChwYXR0ZXJuKSB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIHN0YXJ0cyB3aXRoIHRoZSBnaXZlbiBwcmVmaXggdmFsdWUsIG9yIGZhbHNlIGlmIG90aGVyd2lzZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAgIC0gdGhlIHN0cmluZyB0byBldmFsdWF0ZVxuICogQHBhcmFtIHtzdHJpbmd9IHNlYXJjaCAgLSB0aGUgcHJlZml4IHRvIHNlYXJjaCBmb3JcbiAqIEByZXR1cm4ge2Jvb2xlYW59ICAgICAgIC0gZG9lcyBgdmFsdWVgIHN0YXJ0IHdpdGggYHNlYXJjaGBcbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9zdGFydHN3aXRoXCI+RmF1bmFEQiBTdGFydHNXaXRoIEZ1bmN0aW9uPC9hPlxuICovXG5mdW5jdGlvbiBTdGFydHNXaXRoKHZhbHVlLCBzZWFyY2gpIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBTdGFydHNXaXRoLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHN0YXJ0c3dpdGg6IHdyYXAodmFsdWUpLCBzZWFyY2g6IHdyYXAoc2VhcmNoKSB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgc3RyaW5nIGVuZHMgd2l0aCB0aGUgZ2l2ZW4gc3VmZml4IHZhbHVlLCBvciBmYWxzZSBpZiBvdGhlcndpc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgICAtIHRoZSBzdHJpbmcgdG8gZXZhbHVhdGVcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWFyY2ggIC0gdGhlIHN1ZmZpeCB0byBzZWFyY2ggZm9yXG4gKiBAcmV0dXJuIHtib29sZWFufSAgICAgICAtIGRvZXMgYHZhbHVlYCBlbmQgd2l0aCBgc2VhcmNoYFxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2VuZHN3aXRoXCI+RmF1bmFEQiBFbmRzV2l0aCBGdW5jdGlvbjwvYT5cbiAqL1xuZnVuY3Rpb24gRW5kc1dpdGgodmFsdWUsIHNlYXJjaCkge1xuICBhcml0eS5leGFjdCgyLCBhcmd1bWVudHMsIEVuZHNXaXRoLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGVuZHN3aXRoOiB3cmFwKHZhbHVlKSwgc2VhcmNoOiB3cmFwKHNlYXJjaCkgfSlcbn1cblxuLyoqXG4gKiBJdCB0YWtlcyBhIHN0cmluZyBhbmQgcmV0dXJucyBhIHJlZ2V4IHdoaWNoIG1hdGNoZXMgdGhlIGlucHV0IHN0cmluZyB2ZXJiYXRpbS5cbiAqXG4gKiBAcGFyYW0gdmFsdWUgICAgICAtIHRoZSBzdHJpbmcgdG8gYW5hbHl6ZVxuICogQHJldHVybiB7c3RyaW5nfSAgLSBhIHJlZ2V4IHdoaWNoIG1hdGNoZXMgdGhlIGlucHV0IHN0cmluZyB2ZXJiYXRpbVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL3JlZ2V4ZXNjYXBlXCI+RmF1bmFEQiBSZWdleEVzY2FwZSBGdW5jdGlvbjwvYT5cbiAqL1xuZnVuY3Rpb24gUmVnZXhFc2NhcGUodmFsdWUpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBSZWdleEVzY2FwZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyByZWdleGVzY2FwZTogd3JhcCh2YWx1ZSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc3RyaW5nLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gQSBzdHJpbmcgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtzdHJpbmd9IGZpbmQgLSBGaW5kIHRoZSBmaXJzdCBwb3NpdGlvbiBvZiB0aGlzIHN0cmluZyBpbiB0aGUgc2VhcmNoIHN0cmluZ1xuICogQHBhcmFtIHtpbnR9IHN0YXJ0IC0gQW4gb3B0aW9uYWwgc3RhcnQgb2Zmc2V0IGludG8gdGhlIHNlYXJjaCBzdHJpbmdcbiAqIEByZXR1cm4ge2ludH0gbG9jYXRpb24gb2YgdGhlIGZvdW5kIHN0cmluZyBvciAtMSBpZiBub3QgZm91bmRcbiAqL1xuZnVuY3Rpb24gRmluZFN0cih2YWx1ZSwgZmluZCwgc3RhcnQpIHtcbiAgYXJpdHkuYmV0d2VlbigyLCAzLCBhcmd1bWVudHMsIEZpbmRTdHIubmFtZSlcbiAgc3RhcnQgPSBkZWZhdWx0cyhzdGFydCwgbnVsbClcbiAgcmV0dXJuIG5ldyBFeHByKFxuICAgIHBhcmFtcyh7IGZpbmRzdHI6IHdyYXAodmFsdWUpLCBmaW5kOiB3cmFwKGZpbmQpIH0sIHsgc3RhcnQ6IHdyYXAoc3RhcnQpIH0pXG4gIClcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc3RyaW5nLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gQSBzdHJpbmcgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSBGaW5kIHRoZSBmaXJzdCBwb3NpdGlvbiBvZiB0aGlzIHBhdHRlcm4gaW4gdGhlIHNlYXJjaCBzdHJpbmcgdXNpbmcgYSBqYXZhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzeW50YXhcbiAqIEBwYXJhbSB7aW50fSBzdGFydCAtIEFuIG9wdGlvbmFsIHN0YXJ0IG9mZnNldCBpbnRvIHRoZSBzZWFyY2ggc3RyaW5nXG4gKiBAcGFyYW0ge2ludH0gbnVtUmVzdWx0cyAtIEFuIG9wdGlvbmFsIG51bWJlciBvZiByZXN1bHRzIHRvIHJldHVybiwgbWF4IDEwMjRcbiAqIEByZXR1cm4ge0FycmF5fSBhbiBhcnJheSBvZiBvYmplY3QgZGVzY3JpYmluZyB3aGVyZSB0aGUgc2VhcmNoIHBhdHRlcm4gd2FzIGxvY2F0ZWRcbiAqL1xuZnVuY3Rpb24gRmluZFN0clJlZ2V4KHZhbHVlLCBwYXR0ZXJuLCBzdGFydCwgbnVtUmVzdWx0cykge1xuICBhcml0eS5iZXR3ZWVuKDIsIDQsIGFyZ3VtZW50cywgRmluZFN0clJlZ2V4Lm5hbWUpXG4gIHN0YXJ0ID0gZGVmYXVsdHMoc3RhcnQsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcihcbiAgICBwYXJhbXMoXG4gICAgICB7IGZpbmRzdHJyZWdleDogd3JhcCh2YWx1ZSksIHBhdHRlcm46IHdyYXAocGF0dGVybikgfSxcbiAgICAgIHsgc3RhcnQ6IHdyYXAoc3RhcnQpLCBudW1fcmVzdWx0czogd3JhcChudW1SZXN1bHRzKSB9XG4gICAgKVxuICApXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3N0cmluZy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBzdHJpbmcgdG8gY2FsY3VsYXRlIHRoZSBsZW5ndGggaW4gY29kZXBvaW50cy5cbiAqIEByZXR1cm4ge2ludH0gdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIGluIGNvZGVwb2ludHNcbiAqL1xuZnVuY3Rpb24gTGVuZ3RoKHZhbHVlKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgTGVuZ3RoLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGxlbmd0aDogd3JhcCh2YWx1ZSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc3RyaW5nLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gVGhlIHN0cmluZyB0byBMb3dlckNhc2UuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBzdHJpbmcgY29udmVydGVkIHRvIGxvd2VyY2FzZVxuICovXG5mdW5jdGlvbiBMb3dlckNhc2UodmFsdWUpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBMb3dlckNhc2UubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbG93ZXJjYXNlOiB3cmFwKHZhbHVlKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzdHJpbmctZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgc3RyaW5nIHRvIHRyaW0gbGVhZGluZyB3aGl0ZSBzcGFjZS5cbiAqIEByZXR1cm4ge3N0cmluZ30gdGhlIHN0cmluZyB3aXRoIGxlYWRpbmcgd2hpdGUgc3BhY2UgcmVtb3ZlZFxuICovXG5mdW5jdGlvbiBMVHJpbSh2YWx1ZSkge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIExUcmltLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGx0cmltOiB3cmFwKHZhbHVlKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzdHJpbmctZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGRvY3VtZW50IGZyb20gd2hpY2ggdG8gcHJvZHVjZSBuZ3JhbXMuXG4gKiBAcGFyYW0gez9PYmplY3R9IG9wdHNcbiAqICAgQW4gb2JqZWN0IG9mIG9wdGlvbnNcbiAqICAgICAtIG1pbjogVGhlIG1pbmltdW0gbmdyYW0gc2l6ZS5cbiAqICAgICAtIG1heDogVGhlIG1heGltdW0gbmdyYW0gc2l6ZS5cbiAqIEByZXR1cm4ge0FycmF5fFZhbHVlfVxuICovXG5mdW5jdGlvbiBOR3JhbSh0ZXJtcywgbWluLCBtYXgpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAzLCBhcmd1bWVudHMsIE5HcmFtLm5hbWUpXG4gIG1pbiA9IGRlZmF1bHRzKG1pbiwgbnVsbClcbiAgbWF4ID0gZGVmYXVsdHMobWF4LCBudWxsKVxuXG4gIHJldHVybiBuZXcgRXhwcihcbiAgICBwYXJhbXMoeyBuZ3JhbTogd3JhcCh0ZXJtcykgfSwgeyBtaW46IHdyYXAobWluKSwgbWF4OiB3cmFwKG1heCkgfSlcbiAgKVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzdHJpbmctZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBBIHN0cmluZyB0byByZXBlYXQuXG4gKiBAcGFyYW0ge2ludH0gbnVtYmVyIC0gVGhlIG51bWJlciBvZiB0aW1lcyB0byByZXBlYXQgdGhlIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfSBhIHN0cmluZyB3aGljaCB3YXMgcmVwZWF0ZWRcbiAqL1xuZnVuY3Rpb24gUmVwZWF0KHZhbHVlLCBudW1iZXIpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAyLCBhcmd1bWVudHMsIFJlcGVhdC5uYW1lKVxuICBudW1iZXIgPSBkZWZhdWx0cyhudW1iZXIsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcihwYXJhbXMoeyByZXBlYXQ6IHdyYXAodmFsdWUpIH0sIHsgbnVtYmVyOiB3cmFwKG51bWJlcikgfSkpXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3N0cmluZy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIEEgc3RyaW5nIHRvIHNlYXJjaC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBmaW5kIC0gVGhlIHN0cmluZyB0byBmaW5kIGluIHRoZSBzZWFyY2ggc3RyaW5nXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSBzdHJpbmcgdG8gcmVwbGFjZSBpbiB0aGUgc2VhcmNoIHN0cmluZ1xuICogQHJldHVybiB7U3RyaW5nfSBhbGwgdGhlIG9jY3VycmVuY2VzIG9mIGZpbmQgc3Vic3RpdHV0ZWQgd2l0aCByZXBsYWNlIHN0cmluZ1xuICovXG5mdW5jdGlvbiBSZXBsYWNlU3RyKHZhbHVlLCBmaW5kLCByZXBsYWNlKSB7XG4gIGFyaXR5LmV4YWN0KDMsIGFyZ3VtZW50cywgUmVwbGFjZVN0ci5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoe1xuICAgIHJlcGxhY2VzdHI6IHdyYXAodmFsdWUpLFxuICAgIGZpbmQ6IHdyYXAoZmluZCksXG4gICAgcmVwbGFjZTogd3JhcChyZXBsYWNlKSxcbiAgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjc3RyaW5nLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIC0gQSBzdHJpbmcgdG8gc2VhcmNoLlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdHRlcm4gLSBUaGUgcGF0dGVybiB0byBmaW5kIGluIHRoZSBzZWFyY2ggc3RyaW5nIHVzaW5nIGEgamF2YSByZWd1bGFyIGV4cHJlc3Npb24gc3ludGF4XG4gKiBAcGFyYW0ge3N0cmluZ30gcmVwbGFjZSAtIFRoZSBzdHJpbmcgdG8gcmVwbGFjZSBpbiB0aGUgc2VhcmNoIHN0cmluZ1xuICogQHBhcmFtIHtib29sZWFufSBmaXJzdCAtIFJlcGxhY2UgYWxsIG9yIGp1c3QgdGhlIGZpcnN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9IGFsbCB0aGUgb2NjdXJyZW5jZXMgb2YgZmluZCBwYXR0ZXJuIHN1YnN0aXR1dGVkIHdpdGggcmVwbGFjZSBzdHJpbmdcbiAqL1xuZnVuY3Rpb24gUmVwbGFjZVN0clJlZ2V4KHZhbHVlLCBwYXR0ZXJuLCByZXBsYWNlLCBmaXJzdCkge1xuICBhcml0eS5iZXR3ZWVuKDMsIDQsIGFyZ3VtZW50cywgUmVwbGFjZVN0clJlZ2V4Lm5hbWUpXG4gIGZpcnN0ID0gZGVmYXVsdHMoZmlyc3QsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcihcbiAgICBwYXJhbXMoXG4gICAgICB7XG4gICAgICAgIHJlcGxhY2VzdHJyZWdleDogd3JhcCh2YWx1ZSksXG4gICAgICAgIHBhdHRlcm46IHdyYXAocGF0dGVybiksXG4gICAgICAgIHJlcGxhY2U6IHdyYXAocmVwbGFjZSksXG4gICAgICB9LFxuICAgICAgeyBmaXJzdDogd3JhcChmaXJzdCkgfVxuICAgIClcbiAgKVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzdHJpbmctZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgc3RyaW5nIHRvIHJlbW92ZSB3aGl0ZSBzcGFjZSBmcm9tIHRoZSBlbmQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBzdHJpbmcgd2l0aCB0cmFpbGluZyB3aGl0ZXNwYWNlcyByZW1vdmVkXG4gKi9cbmZ1bmN0aW9uIFJUcmltKHZhbHVlKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgUlRyaW0ubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgcnRyaW06IHdyYXAodmFsdWUpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3N0cmluZy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7aW50fSBudW0gLSBUaGUgc3RyaW5nIG9mIE4gU3BhY2UocykuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGEgc3RyaW5nIHdpdGggc3BhY2VzXG4gKi9cbmZ1bmN0aW9uIFNwYWNlKG51bSkge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIFNwYWNlLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHNwYWNlOiB3cmFwKG51bSkgfSlcbn1cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3N0cmluZy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAgVGhlIHN0cmluZyB0byBTdWJTdHJpbmcuXG4gKiBAcGFyYW0ge2ludH0gc3RhcnQgIFRoZSBwb3NpdGlvbiB0aGUgZmlyc3QgY2hhcmFjdGVyIG9mIHRoZSByZXR1cm4gc3RyaW5nIGJlZ2lucyBhdFxuICogQHBhcmFtIHtpbnR9IGxlbmd0aCAgQW4gb3B0aW9uYWwgbGVuZ3RoLCBpZiBvbWl0dGVkIHRoZW4gcmV0dXJucyB0byB0aGUgZW5kIG9mIHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiBTdWJTdHJpbmcodmFsdWUsIHN0YXJ0LCBsZW5ndGgpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAzLCBhcmd1bWVudHMsIFN1YlN0cmluZy5uYW1lKVxuICBzdGFydCA9IGRlZmF1bHRzKHN0YXJ0LCBudWxsKVxuICBsZW5ndGggPSBkZWZhdWx0cyhsZW5ndGgsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcihcbiAgICBwYXJhbXMoXG4gICAgICB7IHN1YnN0cmluZzogd3JhcCh2YWx1ZSkgfSxcbiAgICAgIHsgc3RhcnQ6IHdyYXAoc3RhcnQpLCBsZW5ndGg6IHdyYXAobGVuZ3RoKSB9XG4gICAgKVxuICApXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3N0cmluZy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBzdHJpbmcgdG8gVGl0bGVDYXNlLlxuICogQHJldHVybiB7c3RyaW5nfSAgQSBzdHJpbmcgY29udmVydGVkIHRvIHRpdGxlY2FzZVxuICovXG5mdW5jdGlvbiBUaXRsZUNhc2UodmFsdWUpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBUaXRsZUNhc2UubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgdGl0bGVjYXNlOiB3cmFwKHZhbHVlKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNzdHJpbmctZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgLSBUaGUgc3RyaW5nIHRvIFRyaW0uXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGEgc3RyaW5nIHdpdGggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZSByZW1vdmVkXG4gKi9cbmZ1bmN0aW9uIFRyaW0odmFsdWUpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBUcmltLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRyaW06IHdyYXAodmFsdWUpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3N0cmluZy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSAtIFRoZSBzdHJpbmcgdG8gVXBwZXJjYXNlLlxuICogQHJldHVybiB7c3RyaW5nfSBBbiB1cHBlcmNhc2Ugc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIFVwcGVyQ2FzZSh2YWx1ZSkge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIFVwcGVyQ2FzZS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyB1cHBlcmNhc2U6IHdyYXAodmFsdWUpIH0pXG59XG5cbi8qKlxuICogRm9ybWF0IHZhbHVlcyBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSAge3N0cmluZ30gIHN0cmluZyBzdHJpbmcgd2l0aCBmb3JtYXQgc3BlY2lmaWVyc1xuICogQHBhcmFtICB7YXJyYXl9ICAgdmFsdWVzIGxpc3Qgb2YgdmFsdWVzIHRvIGZvcm1hdFxuICogQHJldHVybiB7c3RyaW5nfSAgICAgICAgIGEgc3RyaW5nXG4gKi9cbmZ1bmN0aW9uIEZvcm1hdChzdHJpbmcpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgRm9ybWF0Lm5hbWUpXG4gIHZhciBhcmdzID0gYXJnc1RvQXJyYXkoYXJndW1lbnRzKVxuICBhcmdzLnNoaWZ0KClcbiAgcmV0dXJuIG5ldyBFeHByKHsgZm9ybWF0OiB3cmFwKHN0cmluZyksIHZhbHVlczogd3JhcCh2YXJhcmdzKGFyZ3MpKSB9KVxufVxuXG4vLyBUaW1lIGFuZCBkYXRlIGZ1bmN0aW9uc1xuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjdGltZS1hbmQtZGF0ZSkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gc3RyaW5nXG4gKiAgIEEgc3RyaW5nIHRvIGNvbnZlcnRlZCB0byBhIHRpbWUgb2JqZWN0LlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVGltZShzdHJpbmcpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBUaW1lLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRpbWU6IHdyYXAoc3RyaW5nKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSN0aW1lLWFuZC1kYXRlKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBudW1iZXJcbiAqICAgVGhlIG51bWJlciBvZiBgdW5pdGBzIGZyb20gRXBvY2hcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHVuaXRcbiAqICAgVGhlIHVuaXQgb2YgYG51bWJlcmAuIE9uZSBvZiBzZWNvbmQsIG1pbGxpc2Vjb25kLCBtaWNyb3NlY29uZCwgbmFub3NlY29uZC5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEVwb2NoKG51bWJlciwgdW5pdCkge1xuICBhcml0eS5leGFjdCgyLCBhcmd1bWVudHMsIEVwb2NoLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGVwb2NoOiB3cmFwKG51bWJlciksIHVuaXQ6IHdyYXAodW5pdCkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvdGltZWFkZCkuXG4gKlxuICogUmV0dXJucyBhIG5ldyB0aW1lIG9yIGRhdGUgd2l0aCB0aGUgb2Zmc2V0IGluIHRlcm1zIG9mIHRoZSB1bml0XG4gKiBhZGRlZC5cbiAqXG4gKiBAcGFyYW0gYmFzZSB0aGUgYmFzZSB0aW1lIG9yIGRhdGFcbiAqIEBwYXJhbSBvZmZzZXQgdGhlIG51bWJlciBvZiB1bml0c1xuICogQHBhcmFtIHVuaXQgdGhlIHVuaXQgdHlwZVxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVGltZUFkZChiYXNlLCBvZmZzZXQsIHVuaXQpIHtcbiAgYXJpdHkuZXhhY3QoMywgYXJndW1lbnRzLCBUaW1lQWRkLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7XG4gICAgdGltZV9hZGQ6IHdyYXAoYmFzZSksXG4gICAgb2Zmc2V0OiB3cmFwKG9mZnNldCksXG4gICAgdW5pdDogd3JhcCh1bml0KSxcbiAgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvdGltZXN1YnRyYWN0KS5cbiAqXG4gKiBSZXR1cm5zIGEgbmV3IHRpbWUgb3IgZGF0ZSB3aXRoIHRoZSBvZmZzZXQgaW4gdGVybXMgb2YgdGhlIHVuaXRcbiAqIHN1YnRyYWN0ZWQuXG4gKlxuICogQHBhcmFtIGJhc2UgdGhlIGJhc2UgdGltZSBvciBkYXRhXG4gKiBAcGFyYW0gb2Zmc2V0IHRoZSBudW1iZXIgb2YgdW5pdHNcbiAqIEBwYXJhbSB1bml0IHRoZSB1bml0IHR5cGVcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFRpbWVTdWJ0cmFjdChiYXNlLCBvZmZzZXQsIHVuaXQpIHtcbiAgYXJpdHkuZXhhY3QoMywgYXJndW1lbnRzLCBUaW1lU3VidHJhY3QubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHtcbiAgICB0aW1lX3N1YnRyYWN0OiB3cmFwKGJhc2UpLFxuICAgIG9mZnNldDogd3JhcChvZmZzZXQpLFxuICAgIHVuaXQ6IHdyYXAodW5pdCksXG4gIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL3RpbWVkaWZmKS5cbiAqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgaW50ZXJ2YWxzIGluIHRlcm1zIG9mIHRoZSB1bml0IGJldHdlZW5cbiAqIHR3byB0aW1lcyBvciBkYXRlcy4gQm90aCBzdGFydCBhbmQgZmluaXNoIG11c3QgYmUgb2YgdGhlIHNhbWVcbiAqIHR5cGUuXG4gKlxuICogQHBhcmFtIHN0YXJ0IHRoZSBzdGFydGluZyB0aW1lIG9yIGRhdGUsIGluY2x1c2l2ZVxuICogQHBhcmFtIGZpbmlzaCB0aGUgZW5kaW5nIHRpbWUgb3IgZGF0ZSwgZXhjbHVzaXZlXG4gKiBAcGFyYW0gdW5pdCB0aGUgdW5pdCB0eXBlXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBUaW1lRGlmZihzdGFydCwgZmluaXNoLCB1bml0KSB7XG4gIGFyaXR5LmV4YWN0KDMsIGFyZ3VtZW50cywgVGltZURpZmYubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHtcbiAgICB0aW1lX2RpZmY6IHdyYXAoc3RhcnQpLFxuICAgIG90aGVyOiB3cmFwKGZpbmlzaCksXG4gICAgdW5pdDogd3JhcCh1bml0KSxcbiAgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjdGltZS1hbmQtZGF0ZSkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gc3RyaW5nXG4gKiAgIEEgc3RyaW5nIHRvIGNvbnZlcnQgdG8gYSBEYXRlIG9iamVjdFxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRGF0ZShzdHJpbmcpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBEYXRlLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGRhdGU6IHdyYXAoc3RyaW5nKSB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGN1cnJlbnQgc25hcHNob3QgdGltZS5cbiAqXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL25vd1wiPk5vdyBmdW5jdGlvbjwvYT5cbiAqL1xuZnVuY3Rpb24gTm93KCkge1xuICBhcml0eS5leGFjdCgwLCBhcmd1bWVudHMsIE5vdy5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBub3c6IHdyYXAobnVsbCkgfSlcbn1cblxuLy8gTWlzY2VsbGFuZW91cyBmdW5jdGlvbnNcblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWlzY2VsbGFuZW91cy1mdW5jdGlvbnMpLlxuICpcbiAqIEBkZXByZWNhdGVkIHVzZSBOZXdJZCBpbnN0ZWFkXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBOZXh0SWQoKSB7XG4gIGFyaXR5LmV4YWN0KDAsIGFyZ3VtZW50cywgTmV4dElkLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IG5leHRfaWQ6IG51bGwgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWlzY2VsbGFuZW91cy1mdW5jdGlvbnMpLlxuICpcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIE5ld0lkKCkge1xuICBhcml0eS5leGFjdCgwLCBhcmd1bWVudHMsIE5ld0lkLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IG5ld19pZDogbnVsbCB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtaXNjZWxsYW5lb3VzLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gbmFtZVxuICogICBUaGUgbmFtZSBvZiB0aGUgZGF0YWJhc2UuXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBbc2NvcGVdXG4gKiAgIFRoZSBSZWYgb2YgdGhlIGRhdGFiYXNlJ3Mgc2NvcGUuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBEYXRhYmFzZShuYW1lLCBzY29wZSkge1xuICBhcml0eS5iZXR3ZWVuKDEsIDIsIGFyZ3VtZW50cywgRGF0YWJhc2UubmFtZSlcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG5ldyBFeHByKHsgZGF0YWJhc2U6IHdyYXAobmFtZSkgfSlcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gbmV3IEV4cHIoeyBkYXRhYmFzZTogd3JhcChuYW1lKSwgc2NvcGU6IHdyYXAoc2NvcGUpIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWlzY2VsbGFuZW91cy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IG5hbWVcbiAqICAgVGhlIG5hbWUgb2YgdGhlIGluZGV4LlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gW3Njb3BlXVxuICogICBUaGUgUmVmIG9mIHRoZSBpbmRleCdzIHNjb3BlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gSW5kZXgobmFtZSwgc2NvcGUpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAyLCBhcmd1bWVudHMsIEluZGV4Lm5hbWUpXG4gIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHJldHVybiBuZXcgRXhwcih7IGluZGV4OiB3cmFwKG5hbWUpIH0pXG4gICAgY2FzZSAyOlxuICAgICAgcmV0dXJuIG5ldyBFeHByKHsgaW5kZXg6IHdyYXAobmFtZSksIHNjb3BlOiB3cmFwKHNjb3BlKSB9KVxuICB9XG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21pc2NlbGxhbmVvdXMtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBuYW1lXG4gKiAgIFRoZSBuYW1lIG9mIHRoZSBjbGFzcy5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IFtzY29wZV1cbiAqICAgVGhlIFJlZiBvZiB0aGUgY2xhc3MncyBzY29wZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKlxuICogQGRlcHJlY2F0ZWQgQ2xhc3MgaXMgZGVwcmVjYXRlZCwgdXNlIENvbGxlY3Rpb24gaW5zdGVhZFxuICovXG5mdW5jdGlvbiBDbGFzcyhuYW1lLCBzY29wZSkge1xuICBhcml0eS5iZXR3ZWVuKDEsIDIsIGFyZ3VtZW50cywgQ2xhc3MubmFtZSlcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG5ldyBFeHByKHsgY2xhc3M6IHdyYXAobmFtZSkgfSlcbiAgICBjYXNlIDI6XG4gICAgICByZXR1cm4gbmV3IEV4cHIoeyBjbGFzczogd3JhcChuYW1lKSwgc2NvcGU6IHdyYXAoc2NvcGUpIH0pXG4gIH1cbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWlzY2VsbGFuZW91cy1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IG5hbWVcbiAqICAgVGhlIG5hbWUgb2YgdGhlIGNvbGxlY3Rpb24uXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBbc2NvcGVdXG4gKiAgIFRoZSBSZWYgb2YgdGhlIGNvbGxlY3Rpb24ncyBzY29wZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIENvbGxlY3Rpb24obmFtZSwgc2NvcGUpIHtcbiAgYXJpdHkuYmV0d2VlbigxLCAyLCBhcmd1bWVudHMsIENvbGxlY3Rpb24ubmFtZSlcbiAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgY2FzZSAxOlxuICAgICAgcmV0dXJuIG5ldyBFeHByKHsgY29sbGVjdGlvbjogd3JhcChuYW1lKSB9KVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBuZXcgRXhwcih7IGNvbGxlY3Rpb246IHdyYXAobmFtZSksIHNjb3BlOiB3cmFwKHNjb3BlKSB9KVxuICB9XG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21pc2NlbGxhbmVvdXMtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBuYW1lXG4gKiAgIFRoZSBuYW1lIG9mIHRoZSB1c2VyIGRlZmluZWQgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBbc2NvcGVdXG4gKiAgIFRoZSBSZWYgb2YgdGhlIHVzZXIgZGVmaW5lZCBmdW5jdGlvbidzIHNjb3BlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRnVuY3Rpb25GbihuYW1lLCBzY29wZSkge1xuICBhcml0eS5iZXR3ZWVuKDEsIDIsIGFyZ3VtZW50cywgRnVuY3Rpb25Gbi5uYW1lKVxuICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gbmV3IEV4cHIoeyBmdW5jdGlvbjogd3JhcChuYW1lKSB9KVxuICAgIGNhc2UgMjpcbiAgICAgIHJldHVybiBuZXcgRXhwcih7IGZ1bmN0aW9uOiB3cmFwKG5hbWUpLCBzY29wZTogd3JhcChzY29wZSkgfSlcbiAgfVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtaXNjZWxsYW5lb3VzLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gbmFtZVxuICogICBUaGUgbmFtZSBvZiB0aGUgcm9sZS5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IFtzY29wZV1cbiAqICAgVGhlIFJlZiBvZiB0aGUgcm9sZSdzIHNjb3BlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gUm9sZShuYW1lLCBzY29wZSkge1xuICBhcml0eS5iZXR3ZWVuKDEsIDIsIGFyZ3VtZW50cywgUm9sZS5uYW1lKVxuICBzY29wZSA9IGRlZmF1bHRzKHNjb3BlLCBudWxsKVxuICByZXR1cm4gbmV3IEV4cHIocGFyYW1zKHsgcm9sZTogd3JhcChuYW1lKSB9LCB7IHNjb3BlOiB3cmFwKHNjb3BlKSB9KSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWlzY2VsbGFuZW91cy1mdW5jdGlvbnMpLlxuICpcbiAqIENvbnN0cnVjdHMgYSBgY2xhc3Nlc2AgZnVuY3Rpb24gdGhhdCwgd2hlbiBldmFsdWF0ZWQsIHJldHVybnMgYSBSZWYgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gW3Njb3BlXVxuICogICBUaGUgUmVmIG9mIHRoZSBjbGFzcyBzZXQncyBzY29wZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIENsYXNzZXMoc2NvcGUpIHtcbiAgYXJpdHkubWF4KDEsIGFyZ3VtZW50cywgQ2xhc3Nlcy5uYW1lKVxuICBzY29wZSA9IGRlZmF1bHRzKHNjb3BlLCBudWxsKVxuICByZXR1cm4gbmV3IEV4cHIoeyBjbGFzc2VzOiB3cmFwKHNjb3BlKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtaXNjZWxsYW5lb3VzLWZ1bmN0aW9ucykuXG4gKlxuICogQ29uc3RydWN0cyBhIGBjb2xsZWN0aW9uc2AgZnVuY3Rpb24gdGhhdCwgd2hlbiBldmFsdWF0ZWQsIHJldHVybnMgYSBSZWYgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gW3Njb3BlXVxuICogICBUaGUgUmVmIG9mIHRoZSBjb2xsZWN0aW9uIHNldCdzIHNjb3BlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gQ29sbGVjdGlvbnMoc2NvcGUpIHtcbiAgYXJpdHkubWF4KDEsIGFyZ3VtZW50cywgQ29sbGVjdGlvbnMubmFtZSlcbiAgc2NvcGUgPSBkZWZhdWx0cyhzY29wZSwgbnVsbClcbiAgcmV0dXJuIG5ldyBFeHByKHsgY29sbGVjdGlvbnM6IHdyYXAoc2NvcGUpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21pc2NlbGxhbmVvdXMtZnVuY3Rpb25zKS5cbiAqXG4gKiBDb25zdHJ1Y3RzIGEgYGRhdGFiYXNlc2AgZnVuY3Rpb25zIHRoYXQsIHdoZW4gZXZhbHVhdGVkLCByZXR1cm5zIGEgUmVmIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IFtzY29wZV1cbiAqICAgVGhlIFJlZiBvZiB0aGUgZGF0YWJhc2Ugc2V0J3Mgc2NvcGUuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBEYXRhYmFzZXMoc2NvcGUpIHtcbiAgYXJpdHkubWF4KDEsIGFyZ3VtZW50cywgRGF0YWJhc2VzLm5hbWUpXG4gIHNjb3BlID0gZGVmYXVsdHMoc2NvcGUsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcih7IGRhdGFiYXNlczogd3JhcChzY29wZSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWlzY2VsbGFuZW91cy1mdW5jdGlvbnMpLlxuICpcbiAqIENvbnN0cnVjdHMgYW4gYGluZGV4ZXNgIGZ1bmN0aW9uIHRoYXQsIHdoZW4gZXZhbHVhdGVkLCByZXR1cm5zIGEgUmVmIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IFtzY29wZV1cbiAqICAgVGhlIFJlZiBvZiB0aGUgaW5kZXggc2V0J3Mgc2NvcGUuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBJbmRleGVzKHNjb3BlKSB7XG4gIGFyaXR5Lm1heCgxLCBhcmd1bWVudHMsIEluZGV4ZXMubmFtZSlcbiAgc2NvcGUgPSBkZWZhdWx0cyhzY29wZSwgbnVsbClcbiAgcmV0dXJuIG5ldyBFeHByKHsgaW5kZXhlczogd3JhcChzY29wZSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWlzY2VsbGFuZW91cy1mdW5jdGlvbnMpLlxuICpcbiAqIENvbnN0cnVjdHMgYSBgZnVuY3Rpb25zYCBmdW5jdGlvbiB0aGF0LCB3aGVuIGV2YWx1YXRlZCwgcmV0dXJucyBhIFJlZiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBbc2NvcGVdXG4gKiAgIFRoZSBSZWYgb2YgdGhlIHVzZXIgZGVmaW5lZCBmdW5jdGlvbiBzZXQncyBzY29wZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEZ1bmN0aW9ucyhzY29wZSkge1xuICBhcml0eS5tYXgoMSwgYXJndW1lbnRzLCBGdW5jdGlvbnMubmFtZSlcbiAgc2NvcGUgPSBkZWZhdWx0cyhzY29wZSwgbnVsbClcbiAgcmV0dXJuIG5ldyBFeHByKHsgZnVuY3Rpb25zOiB3cmFwKHNjb3BlKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtaXNjZWxsYW5lb3VzLWZ1bmN0aW9ucykuXG4gKlxuICogQ29uc3RydWN0cyBhIGByb2xlc2AgZnVuY3Rpb24gdGhhdCwgd2hlbiBldmFsdWF0ZWQsIHJldHVybnMgYSBSZWYgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gW3Njb3BlXVxuICogICBUaGUgUmVmIG9mIHRoZSByb2xlIHNldCdzIHNjb3BlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gUm9sZXMoc2NvcGUpIHtcbiAgYXJpdHkubWF4KDEsIGFyZ3VtZW50cywgUm9sZXMubmFtZSlcbiAgc2NvcGUgPSBkZWZhdWx0cyhzY29wZSwgbnVsbClcbiAgcmV0dXJuIG5ldyBFeHByKHsgcm9sZXM6IHdyYXAoc2NvcGUpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21pc2NlbGxhbmVvdXMtZnVuY3Rpb25zKS5cbiAqXG4gKiBDb25zdHJ1Y3RzIGEgYGtleXNgIGZ1bmN0aW9uIHRoYXQsIHdoZW4gZXZhbHVhdGVkLCByZXR1cm5zIGEgUmVmIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IFtzY29wZV1cbiAqICAgVGhlIFJlZiBvZiB0aGUga2V5IHNldCdzIHNjb3BlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gS2V5cyhzY29wZSkge1xuICBhcml0eS5tYXgoMSwgYXJndW1lbnRzLCBLZXlzLm5hbWUpXG4gIHNjb3BlID0gZGVmYXVsdHMoc2NvcGUsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcih7IGtleXM6IHdyYXAoc2NvcGUpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21pc2NlbGxhbmVvdXMtZnVuY3Rpb25zKS5cbiAqXG4gKiBDb25zdHJ1Y3RzIGEgYHRva2Vuc2AgZnVuY3Rpb24gdGhhdCwgd2hlbiBldmFsdWF0ZWQsIHJldHVybnMgYSBSZWYgdmFsdWUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gW3Njb3BlXVxuICogICBUaGUgUmVmIG9mIHRoZSB0b2tlbiBzZXQncyBzY29wZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFRva2VucyhzY29wZSkge1xuICBhcml0eS5tYXgoMSwgYXJndW1lbnRzLCBUb2tlbnMubmFtZSlcbiAgc2NvcGUgPSBkZWZhdWx0cyhzY29wZSwgbnVsbClcbiAgcmV0dXJuIG5ldyBFeHByKHsgdG9rZW5zOiB3cmFwKHNjb3BlKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtaXNjZWxsYW5lb3VzLWZ1bmN0aW9ucykuXG4gKlxuICogQ29uc3RydWN0cyBhIGBjcmVkZW50aWFsc2AgZnVuY3Rpb25zIHRoYXQsIHdoZW4gZXZhbHVhdGVkLCByZXR1cm5zIGEgUmVmIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IFtzY29wZV1cbiAqICAgVGhlIFJlZiBvZiB0aGUgY3JlZGVudGlhbCBzZXQncyBzY29wZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIENyZWRlbnRpYWxzKHNjb3BlKSB7XG4gIGFyaXR5Lm1heCgxLCBhcmd1bWVudHMsIENyZWRlbnRpYWxzLm5hbWUpXG4gIHNjb3BlID0gZGVmYXVsdHMoc2NvcGUsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcih7IGNyZWRlbnRpYWxzOiB3cmFwKHNjb3BlKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtaXNjZWxsYW5lb3VzLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgQSBjb2xsZWN0aW9uIG9mIGV4cHJlc3Npb25zIHRvIGNoZWNrIGZvciBlcXVpdmFsZW5jZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEVxdWFscygpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgRXF1YWxzLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGVxdWFsczogd3JhcCh2YXJhcmdzKGFyZ3VtZW50cykpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21pc2NlbGxhbmVvdXMtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBwYXRoXG4gKiAgIEFuIGFycmF5IHJlcHJlc2VudGluZyBhIHBhdGggdG8gY2hlY2sgZm9yIHRoZSBleGlzdGVuY2Ugb2YuXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBpblxuICogICBBbiBvYmplY3QgdG8gc2VhcmNoIGFnYWluc3QuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBDb250YWlucyhwYXRoLCBfaW4pIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBDb250YWlucy5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBjb250YWluczogd3JhcChwYXRoKSwgaW46IHdyYXAoX2luKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtaXNjZWxsYW5lb3VzLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gcGF0aFxuICogICBBbiBhcnJheSByZXByZXNlbnRpbmcgYSBwYXRoIHRvIHB1bGwgZnJvbSBhbiBvYmplY3QuXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBmcm9tXG4gKiAgIFRoZSBvYmplY3QgdG8gc2VsZWN0IGZyb21cbiAqIEBwYXJhbSB7P21vZHVsZTpxdWVyeX5FeHByQXJnfSBkZWZhdWx0XG4gKiAgIEEgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgcGF0aCBkb2VzIG5vdCBleGlzdC5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFNlbGVjdChwYXRoLCBmcm9tLCBfZGVmYXVsdCkge1xuICBhcml0eS5iZXR3ZWVuKDIsIDMsIGFyZ3VtZW50cywgU2VsZWN0Lm5hbWUpXG4gIHZhciBleHByT2JqID0geyBzZWxlY3Q6IHdyYXAocGF0aCksIGZyb206IHdyYXAoZnJvbSkgfVxuICBpZiAoX2RlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgIGV4cHJPYmouZGVmYXVsdCA9IHdyYXAoX2RlZmF1bHQpXG4gIH1cbiAgcmV0dXJuIG5ldyBFeHByKGV4cHJPYmopXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21pc2NlbGxhbmVvdXMtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBwYXRoXG4gKiAgIEFuIGFycmF5IHJlcHJlc2VudGluZyBhIHBhdGggdG8gcHVsbCBmcm9tIGFuIG9iamVjdC5cbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGZyb21cbiAqICAgVGhlIG9iamVjdCB0byBzZWxlY3QgZnJvbVxuICogQHJldHVybiB7RXhwcn1cbiAqXG4gKiBAZGVwcmVjYXRlZCBhdm9pZCB1c2luZ1xuICovXG5mdW5jdGlvbiBTZWxlY3RBbGwocGF0aCwgZnJvbSkge1xuICBhcml0eS5leGFjdCgyLCBhcmd1bWVudHMsIFNlbGVjdEFsbC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBzZWxlY3RfYWxsOiB3cmFwKHBhdGgpLCBmcm9tOiB3cmFwKGZyb20pIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgbnVtYmVycyB0byBwcm92aWRlIHRoZSBhYnNvbHV0ZSB2YWx1ZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEFicyhleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgQWJzLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGFiczogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGNvbGxlY3Rpb24gb2YgbnVtYmVycyB0byBzdW0gdG9nZXRoZXIuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBBZGQoKSB7XG4gIGFyaXR5Lm1pbigxLCBhcmd1bWVudHMsIEFkZC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBhZGQ6IHdyYXAodmFyYXJncyhhcmd1bWVudHMpKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGNvbGxlY3Rpb24gb2YgbnVtYmVycyB0byBiaXR3aXNlIGFuZCB0b2dldGhlci5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEJpdEFuZCgpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgQml0QW5kLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGJpdGFuZDogd3JhcCh2YXJhcmdzKGFyZ3VtZW50cykpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgbnVtYmVycyB0byBwcm92aWRlIHRoZSBiaXR3aXNlIG5vdC5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEJpdE5vdChleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgQml0Tm90Lm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGJpdG5vdDogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGNvbGxlY3Rpb24gb2YgbnVtYmVycyB0byBiaXR3aXNlIE9yJ2QgdG9nZXRoZXIuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBCaXRPcigpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgQml0T3IubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgYml0b3I6IHdyYXAodmFyYXJncyhhcmd1bWVudHMpKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGNvbGxlY3Rpb24gb2YgbnVtYmVycyB0byBiaXR3aXNlIFhvcidkIHRvZ2V0aGVyLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gQml0WG9yKCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBCaXRYb3IubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgYml0eG9yOiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgVGhlIGxlYXN0IGludGVnZXIgdGhhdCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG51bWJlclxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gQ2VpbChleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgQ2VpbC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBjZWlsOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgY29sbGVjdGlvbiBvZiBudW1iZXJzIHRvIGNvbXB1dGUgdGhlIHF1b3RpZW50IG9mLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRGl2aWRlKCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBEaXZpZGUubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgZGl2aWRlOiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgVGhlIGdyZWF0ZXN0IGludGVnZXIgdGhhdCBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlIG51bWJlclxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRmxvb3IoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIEZsb29yLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGZsb29yOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgY29sbGVjdGlvbiBvZiBudW1iZXJzIHRvIG11bHRpcGx5IHRvZ2V0aGVyLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gTWF4KCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBNYXgubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbWF4OiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgQSBjb2xsZWN0aW9uIG9mIG51bWJlcnMgdG8gbXVsdGlwbHkgdG9nZXRoZXIuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBNaW4oKSB7XG4gIGFyaXR5Lm1pbigxLCBhcmd1bWVudHMsIE1pbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBtaW46IHdyYXAodmFyYXJncyhhcmd1bWVudHMpKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGNvbGxlY3Rpb24gb2YgbnVtYmVycyB0byBjb21wdXRlIHRoZSBxdW90aWVudCBvZi4gVGhlIHJlbWFpbmRlciB3aWxsIGJlIHJldHVybmVkLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gTW9kdWxvKCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBNb2R1bG8ubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbW9kdWxvOiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgQSBjb2xsZWN0aW9uIG9mIG51bWJlcnMgdG8gbXVsdGlwbHkgdG9nZXRoZXIuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBNdWx0aXBseSgpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgTXVsdGlwbHkubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbXVsdGlwbHk6IHdyYXAodmFyYXJncyhhcmd1bWVudHMpKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIG51bWJlcnMgdG8gcm91bmQuXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBbiBvcHRpb25hbCBwcmVjaXNpb25cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFJvdW5kKHZhbHVlLCBwcmVjaXNpb24pIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgUm91bmQubmFtZSlcbiAgcHJlY2lzaW9uID0gZGVmYXVsdHMocHJlY2lzaW9uLCBudWxsKVxuICByZXR1cm4gbmV3IEV4cHIoXG4gICAgcGFyYW1zKHsgcm91bmQ6IHdyYXAodmFsdWUpIH0sIHsgcHJlY2lzaW9uOiB3cmFwKHByZWNpc2lvbikgfSlcbiAgKVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGNvbGxlY3Rpb24gb2YgbnVtYmVycyB0byBjb21wdXRlIHRoZSBkaWZmZXJlbmNlIG9mLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gU3VidHJhY3QoKSB7XG4gIGFyaXR5Lm1pbigxLCBhcmd1bWVudHMsIFN1YnRyYWN0Lm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHN1YnRyYWN0OiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgVGhlIHNpZ24gb2YgdGhlIG51bWJlciBpcyByZXR1cm5lZCBhcyBwb3NpdGl2ZSAxLCB6ZXJvIDAgLCBuZWdhdGl2ZSAtMVxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gU2lnbihleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgU2lnbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBzaWduOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIFRoZSBzcXVhcmUgcm9vdCBvZiB0aGUgbnVtYmVyXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBTcXJ0KGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBTcXJ0Lm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHNxcnQ6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgQSBudW1iZXJzIHRvIHRydW5jYXRlLlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgQW4gb3B0aW9uYWwgcHJlY2lzaW9uXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBUcnVuYyh2YWx1ZSwgcHJlY2lzaW9uKSB7XG4gIGFyaXR5Lm1pbigxLCBhcmd1bWVudHMsIFRydW5jLm5hbWUpXG4gIHByZWNpc2lvbiA9IGRlZmF1bHRzKHByZWNpc2lvbiwgbnVsbClcbiAgcmV0dXJuIG5ldyBFeHByKFxuICAgIHBhcmFtcyh7IHRydW5jOiB3cmFwKHZhbHVlKSB9LCB7IHByZWNpc2lvbjogd3JhcChwcmVjaXNpb24pIH0pXG4gIClcbn1cblxuLyoqXG4gKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSAgICAtIGFycmF5IG9mIGl0ZW1zXG4gKiBAcmV0dXJuIHtpbnRlZ2VyfSAtIG51bWJlciBvZiBpdGVtcyBpbiB0aGUgY29sbGVjdGlvblxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2NvdW50XCI+Q291bnQgZnVuY3Rpb248L2E+XG4gKi9cbmZ1bmN0aW9uIENvdW50KGNvbGxlY3Rpb24pIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBDb3VudC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBjb3VudDogd3JhcChjb2xsZWN0aW9uKSB9KVxufVxuXG4vKipcbiAqXG4gKiBTdW0gdGhlIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uLlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IC0gY29sbGVjdGlvbiBvZiBudW1iZXJzXG4gKiBAcmV0dXJuIHtpbnRlZ2VyfSAtIHRvdGFsIG9mIGFsbCBudW1iZXJzIGluIGNvbGxlY3Rpb25cbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9zdW1cIj5TdW0gZnVuY3Rpb248L2E+XG4gKi9cbmZ1bmN0aW9uIFN1bShjb2xsZWN0aW9uKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgU3VtLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHN1bTogd3JhcChjb2xsZWN0aW9uKSB9KVxufVxuXG4vKipcbiAqXG4gKiBSZXR1cm5zIHRoZSBtZWFuIG9mIGFsbCBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge2FycmF5fSAtIGNvbGxlY3Rpb24gdGhlIG51bWJlcnNcbiAqIEByZXR1cm4ge2Zsb2F0fSAtIHRoZSBtZWFuIG9mIGFsbCBudW1iZXJzIGluIHRoZSBjb2xsZWN0aW9uXG4gKiBAc2VlIDxhIGhyZWY9XCJodHRwczovL2RvY3MuZmF1bmEuY29tL2ZhdW5hL2N1cnJlbnQvYXBpL2ZxbC9mdW5jdGlvbnMvbWVhblwiPk1lYW4gZnVuY3Rpb248L2E+XG4gKi9cbmZ1bmN0aW9uIE1lYW4oY29sbGVjdGlvbikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIE1lYW4ubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbWVhbjogd3JhcChjb2xsZWN0aW9uKSB9KVxufVxuXG4vKipcbiAqXG4gKiBFdmFsdWF0ZXMgdG8gdHJ1ZSBpZiBhbnkgZWxlbWVudCBvZiB0aGUgY29sbGVjdGlvbiBpcyB0cnVlLlxuICpcbiAqIEBwYXJhbSB7YXJyYXl9IC0gY29sbGVjdGlvbiB0aGUgY29sbGVjdGlvblxuICogQHJldHVybiB7RXhwcn1cbiAqIEBzZWUgPGEgaHJlZj1cImh0dHBzOi8vZG9jcy5mYXVuYS5jb20vZmF1bmEvY3VycmVudC9hcGkvZnFsL2Z1bmN0aW9ucy9hbnlcIj5BbnkgZnVuY3Rpb248L2E+XG4gKi9cbmZ1bmN0aW9uIEFueShjb2xsZWN0aW9uKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgQW55Lm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGFueTogd3JhcChjb2xsZWN0aW9uKSB9KVxufVxuXG4vKipcbiAqXG4gKiBFdmFsdWF0ZXMgdG8gdHJ1ZSBpZiBhbGwgZWxlbWVudHMgb2YgdGhlIGNvbGxlY3Rpb24gYXJlIHRydWUuXG4gKlxuICogQHBhcmFtIHthcnJheX0gLSBjb2xsZWN0aW9uIHRoZSBjb2xsZWN0aW9uXG4gKiBAcmV0dXJuIHtFeHByfVxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9kb2NzLmZhdW5hLmNvbS9mYXVuYS9jdXJyZW50L2FwaS9mcWwvZnVuY3Rpb25zL2FsbFwiPkFsbCBmdW5jdGlvbjwvYT5cbiAqL1xuZnVuY3Rpb24gQWxsKGNvbGxlY3Rpb24pIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBBbGwubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgYWxsOiB3cmFwKGNvbGxlY3Rpb24pIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIFRoZSBhcmMgY29zaW5lIG9mIHRoZSBudW1iZXJcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEFjb3MoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIEFjb3MubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgYWNvczogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBUaGUgYXJjIHNpbmUgb2YgdGhlIG51bWJlclxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gQXNpbihleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgQXNpbi5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBhc2luOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIFRoZSBhcmMgdGFuZ2VudCBvZiB0aGUgbnVtYmVyXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBBdGFuKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBBdGFuLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGF0YW46IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgVGhlIGNvc2luZSBvZiBhIG51bWJlclxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gQ29zKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBDb3MubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgY29zOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIFRoZSBoeXBlcmJvbGljIGNvc2luZSBvZiB0aGUgbnVtYmVyXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBDb3NoKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBDb3NoLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGNvc2g6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgVGFrZSByYWRpYW5zIGFuZCBjb252ZXJ0IGl0IHRvIGRlZ3JlZXMgMzYwIGRlZ3JlZXMgPSAyICogcGkgcmFkaWFuc1xuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRGVncmVlcyhleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgRGVncmVlcy5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBkZWdyZWVzOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIFRoZSBlIHJhaXNlZCB0byBhbiBleHBvbmVudCBudW1iZXJcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEV4cChleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgRXhwLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGV4cDogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIHNpZGUgb2YgdGhlIHJpZ2h0IHRyaWFuZ2xlXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBUaGUgc2Vjb25kIHNpZGUgb2YgYSByaWdodCB0cmlhbmdlLCBkZWZhdWx0cyB0byB0aGUgZmlyc3Qgc2lkZVxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gSHlwb3QodmFsdWUsIHNpZGUpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgSHlwb3QubmFtZSlcbiAgc2lkZSA9IGRlZmF1bHRzKHNpZGUsIG51bGwpXG4gIHJldHVybiBuZXcgRXhwcihwYXJhbXMoeyBoeXBvdDogd3JhcCh2YWx1ZSkgfSwgeyBiOiB3cmFwKHNpZGUpIH0pKVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBUaGUgbmF0dXJhbCBsb2cgb2YgdGhlIG51bWJlclxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gTG4oZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIExuLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGxuOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIFRoZSBsb2cgYmFzZSAxMCBvZiBhIG51bWJlclxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gTG9nKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBMb2cubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbG9nOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI21hdGhlbWF0aWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgbnVtYmVycyB0byByYWlzZSB0byB0aGUgcG93ZXIuXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBbiBvcHRpb25hbCBleHBvbmVudFxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gUG93KHZhbHVlLCBleHBvbmVudCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBQb3cubmFtZSlcbiAgZXhwb25lbnQgPSBkZWZhdWx0cyhleHBvbmVudCwgbnVsbClcbiAgcmV0dXJuIG5ldyBFeHByKHBhcmFtcyh7IHBvdzogd3JhcCh2YWx1ZSkgfSwgeyBleHA6IHdyYXAoZXhwb25lbnQpIH0pKVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBUYWtlIGRlZ3JlZXMgYW5kIGNvbnZlcnQgdGhlIG51bWJlciB0byByYWRpYW5zIDIgKiBwaSA9IDM2MCBkZWdyZWVzXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBSYWRpYW5zKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBSYWRpYW5zLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHJhZGlhbnM6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgVGhlIHNpbmUgb2YgYSBudW1iZXJcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFNpbihleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgU2luLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHNpbjogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBUaGUgaHlwZXJib2xpYyBzaW5lIG9mIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBTaW5oKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBTaW5oLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHNpbmg6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbWF0aGVtYXRpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsuLi5tb2R1bGU6cXVlcnl+RXhwckFyZ30gdGVybXNcbiAqICAgVGhlIFRhbmdlbnQgb2YgYSBudW1iZXJcbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFRhbihleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgVGFuLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRhbjogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNtYXRoZW1hdGljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBUaGUgaHliZXJib2xpYyB0YW5nZW50IG9mIGEgbnVtYmVyXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBUYW5oKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBUYW5oLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRhbmg6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbG9naWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgY29sbGVjdGlvbiBvZiB0ZXJtcyB0byBjb21wYXJlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gTFQoKSB7XG4gIGFyaXR5Lm1pbigxLCBhcmd1bWVudHMsIExULm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGx0OiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbG9naWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgY29sbGVjdGlvbiBvZiB0ZXJtcyB0byBjb21wYXJlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gTFRFKCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBMVEUubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbHRlOiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbG9naWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgY29sbGVjdGlvbiBvZiB0ZXJtcyB0byBjb21wYXJlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gR1QoKSB7XG4gIGFyaXR5Lm1pbigxLCBhcmd1bWVudHMsIEdULm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGd0OiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbG9naWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgY29sbGVjdGlvbiBvZiB0ZXJtcyB0byBjb21wYXJlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gR1RFKCkge1xuICBhcml0eS5taW4oMSwgYXJndW1lbnRzLCBHVEUubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgZ3RlOiB3cmFwKHZhcmFyZ3MoYXJndW1lbnRzKSkgfSlcbn1cblxuLyoqXG4gKiBTZWUgdGhlIFtkb2NzXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9yZWZlcmVuY2UvcXVlcnlhcGkjbG9naWNhbC1mdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Li4ubW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IHRlcm1zXG4gKiAgIEEgY29sbGVjdGlvbiB0byBjb21wdXRlIHRoZSBjb25qdW5jdGlvbiBvZi5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIEFuZCgpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgQW5kLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGFuZDogd3JhcCh2YXJhcmdzKGFyZ3VtZW50cykpIH0pXG59XG5cbi8qKlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI2xvZ2ljYWwtZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0gey4uLm1vZHVsZTpxdWVyeX5FeHByQXJnfSB0ZXJtc1xuICogICBBIGNvbGxlY3Rpb24gdG8gY29tcHV0ZSB0aGUgZGlzanVuY3Rpb24gb2YuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBPcigpIHtcbiAgYXJpdHkubWluKDEsIGFyZ3VtZW50cywgT3IubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgb3I6IHdyYXAodmFyYXJncyhhcmd1bWVudHMpKSB9KVxufVxuXG4vKipcbiAqIFNlZSB0aGUgW2RvY3NdKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL3JlZmVyZW5jZS9xdWVyeWFwaSNsb2dpY2FsLWZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gYm9vbGVhblxuICogICBBIGJvb2xlYW4gdG8gcHJvZHVjZSB0aGUgbmVnYXRpb24gb2YuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBOb3QoYm9vbGVhbikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIE5vdC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBub3Q6IHdyYXAoYm9vbGVhbikgfSlcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBleHByZXNzaW9uIHRvIGEgc3RyaW5nIGxpdGVyYWwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwcmVzc2lvblxuICogICBBbiBleHByZXNzaW9uIHRvIGNvbnZlcnQgdG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBUb1N0cmluZyhleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgVG9TdHJpbmcubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgdG9fc3RyaW5nOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogQ29udmVydHMgYW4gZXhwcmVzc2lvbiB0byBhIG51bWJlciBsaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJlc3Npb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0byBjb252ZXJ0IHRvIGEgbnVtYmVyLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVG9OdW1iZXIoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIFRvTnVtYmVyLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRvX251bWJlcjogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIGV4cHJlc3Npb24gdG8gYW4gT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJlc3Npb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0byBjb252ZXJ0IHRvIGFuIE9iamVjdC5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFRvT2JqZWN0KGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBUb09iamVjdC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyB0b19vYmplY3Q6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBleHByZXNzaW9uIHRvIGFuIEFycmF5LlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJlc3Npb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0byBjb252ZXJ0IHRvIGFuIEFycmF5LlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVG9BcnJheShleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgVG9BcnJheS5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyB0b19hcnJheTogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIGV4cHJlc3Npb24gdG8gYSBkb3VibGUgdmFsdWUsIGlmIHBvc3NpYmxlLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJlc3Npb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0byBjb252ZXJ0IHRvIGEgZG91YmxlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVG9Eb3VibGUoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIFRvRG91YmxlLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRvX2RvdWJsZTogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIGV4cHJlc3Npb24gdG8gYW4gaW50ZWdlciB2YWx1ZSwgaWYgcG9zc2libGUuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwcmVzc2lvblxuICogICBBbiBleHByZXNzaW9uIHRvIGNvbnZlcnQgdG8gYW4gaW50ZWdlci5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFRvSW50ZWdlcihleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgVG9JbnRlZ2VyLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRvX2ludGVnZXI6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBleHByZXNzaW9uIHRvIGEgdGltZSBsaXRlcmFsLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJlc3Npb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0byBjb252ZXJ0IHRvIGEgdGltZS5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFRvVGltZShleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgVG9UaW1lLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRvX3RpbWU6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBleHByZXNzaW9uIGV2YWx1YXRpbmcgdG8gYSB0aW1lIHRvIHNlY29uZHMgc2luY2UgZXBvY2guXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwcmVzc2lvblxuICogICBBbiBleHByZXNzaW9uIHRvIGNvbnZlcnQgdG8gc2Vjb25kcyBudW1lcmljIHZhbHVlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVG9TZWNvbmRzKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBUb1NlY29uZHMubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgdG9fc2Vjb25kczogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgdGltZSBleHByZXNzaW9uIHRvIG1pbGxpc2Vjb25kcyBzaW5jZSB0aGUgVU5JWCBlcG9jaC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByZXNzaW9uXG4gKiAgIEFuIGV4cHJlc3Npb24gdG8gY29udmVydCB0byBtaWxsaXNlY29uZCBudW1lcmljIHZhbHVlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVG9NaWxsaXMoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIFRvTWlsbGlzLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRvX21pbGxpczogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgdGltZSBleHByZXNzaW9uIHRvIG1pY3Jvc2Vjb25kcyBzaW5jZSB0aGUgVU5JWCBlcG9jaC5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByZXNzaW9uXG4gKiAgIEFuIGV4cHJlc3Npb24gdG8gY29udmVydCB0byBtaWNyb3NlY29uZCBudW1lcmljIHZhbHVlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVG9NaWNyb3MoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIFRvTWljcm9zLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHRvX21pY3Jvczogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgYSB0aW1lIGV4cHJlc3Npb24ncyBkYXkgb2YgdGhlIHdlZWsgZm9sbG93aW5nIElTTy04NjAxIGNvbnZlbnRpb24sIGZyb20gMSAoTW9uZGF5KSB0byA3IChTdW5kYXkpLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJlc3Npb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0byBjb252ZXJ0IHRvIGRheSBvZiB3ZWVrLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRGF5T2ZXZWVrKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBEYXlPZldlZWsubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgZGF5X29mX3dlZWs6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdGltZSBleHByZXNzaW9uJ3MgZGF5IG9mIHRoZSB5ZWFyLCBmcm9tIDEgdG8gMzY1LCBvciAzNjYgaW4gYSBsZWFwIHllYXIuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwcmVzc2lvblxuICogICBBbiBleHByZXNzaW9uIHRvIGNvbnZlcnQgdG8gZGF5IG9mIHllYXIuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBEYXlPZlllYXIoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIERheU9mWWVhci5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBkYXlfb2ZfeWVhcjogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgYSB0aW1lIGV4cHJlc3Npb24ncyBkYXkgb2YgdGhlIG1vbnRoLCBmcm9tIDEgdG8gMzEuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwcmVzc2lvblxuICogICBBbiBleHByZXNzaW9uIHRvIGNvbnZlcnQgdG8gZGF5IG9mIG1vbnRoLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gRGF5T2ZNb250aChleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgRGF5T2ZNb250aC5uYW1lKVxuICByZXR1cm4gbmV3IEV4cHIoeyBkYXlfb2ZfbW9udGg6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdGltZSBleHByZXNzaW9uJ3Mgc2Vjb25kIG9mIHRoZSBtaW51dGUsIGZyb20gMCB0byA1OS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByZXNzaW9uXG4gKiAgIEFuIGV4cHJlc3Npb24gdG8gY29udmVydCB0byBhIGhvdXIuXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBIb3VyKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBIb3VyLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IGhvdXI6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgdGltZSBleHByZXNzaW9uJ3Mgc2Vjb25kIG9mIHRoZSBtaW51dGUsIGZyb20gMCB0byA1OS5cbiAqXG4gKiBAcGFyYW0ge21vZHVsZTpxdWVyeX5FeHByQXJnfSBleHByZXNzaW9uXG4gKiAgIEFuIGV4cHJlc3Npb24gdG8gY29udmVydCB0byBhIG1vbnRoLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gTWludXRlKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBNaW51dGUubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbWludXRlOiB3cmFwKGV4cHIpIH0pXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHRpbWUgZXhwcmVzc2lvbidzIHNlY29uZCBvZiB0aGUgbWludXRlLCBmcm9tIDAgdG8gNTkuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwcmVzc2lvblxuICogICBBbiBleHByZXNzaW9uIHRvIGNvbnZlcnQgdG8gYSBtb250aC5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFNlY29uZChleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgU2Vjb25kLm5hbWUpXG4gIHJldHVybiBuZXcgRXhwcih7IHNlY29uZDogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIFJldHVybnMgYSB0aW1lIGV4cHJlc3Npb24ncyBtb250aCBvZiB0aGUgeWVhciwgZnJvbSAxIHRvIDEyLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJlc3Npb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0byBjb252ZXJ0IHRvIGEgbW9udGguXG4gKiBAcmV0dXJuIHtFeHByfVxuICovXG5mdW5jdGlvbiBNb250aChleHByKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgTW9udGgubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbW9udGg6IHdyYXAoZXhwcikgfSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0aW1lIGV4cHJlc3Npb24ncyB5ZWFyLCBmb2xsb3dpbmcgdGhlIElTTy04NjAxIHN0YW5kYXJkLlxuICpcbiAqIEBwYXJhbSB7bW9kdWxlOnF1ZXJ5fkV4cHJBcmd9IGV4cHJlc3Npb25cbiAqICAgQW4gZXhwcmVzc2lvbiB0byBjb252ZXJ0IHRvIGEgeWVhci5cbiAqIEByZXR1cm4ge0V4cHJ9XG4gKi9cbmZ1bmN0aW9uIFllYXIoZXhwcikge1xuICBhcml0eS5leGFjdCgxLCBhcmd1bWVudHMsIFllYXIubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgeWVhcjogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGFuIGV4cHJlc3Npb24gdG8gYSBkYXRlIGxpdGVyYWwuXG4gKlxuICogQHBhcmFtIHttb2R1bGU6cXVlcnl+RXhwckFyZ30gZXhwcmVzc2lvblxuICogICBBbiBleHByZXNzaW9uIHRvIGNvbnZlcnQgdG8gYSBkYXRlLlxuICogQHJldHVybiB7RXhwcn1cbiAqL1xuZnVuY3Rpb24gVG9EYXRlKGV4cHIpIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBUb0RhdGUubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgdG9fZGF0ZTogd3JhcChleHByKSB9KVxufVxuXG4vKipcbiAqIE1vdmUgZGF0YWJhc2UgdG8gYSBuZXcgaGllcmFyY2h5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSAgZnJvbSBkYXRhYmFzZSByZWZlcmVuY2UgdG8gYmUgbW92ZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gIHRvIG5ldyBwYXJlbnQgZGF0YWJhc2UgcmVmZXJlbmNlLlxuICogQHJldHVybiB7RXhwcn0gICBUaGUgZXhwcmVzc2lvbiB3cmFwcGluZyB0aGUgcHJvdmlkZWQgb2JqZWN0LlxuICogQHNlZSA8YSBocmVmPVwiaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3dyaXRlLWZ1bmN0aW9uc1wiPkZhdW5hREIgV3JpdGUgRnVuY3Rpb25zPC9hPlxuICovXG5mdW5jdGlvbiBNb3ZlRGF0YWJhc2UoZnJvbSwgdG8pIHtcbiAgYXJpdHkuZXhhY3QoMiwgYXJndW1lbnRzLCBNb3ZlRGF0YWJhc2UubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgbW92ZV9kYXRhYmFzZTogd3JhcChmcm9tKSwgdG86IHdyYXAodG8pIH0pXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHNldCBvZiBhbGwgZG9jdW1lbnRzIGluIHRoZSBnaXZlbiBjb2xsZWN0aW9uLlxuICogQSBzZXQgbXVzdCBiZSBwYWdpbmF0ZWQgaW4gb3JkZXIgdG8gcmV0cmlldmUgaXRzIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0gY29sbGVjdGlvbiBhIHJlZmVyZW5jZSB0byB0aGUgY29sbGVjdGlvbi4gVHlwZTogUmVmXG4gKiBAcmV0dXJuIGEgbmV3IHtAbGluayBFeHByfSBpbnN0YW5jZVxuICogQHNlZSAjUGFnaW5hdGUoRXhwcilcbiAqL1xuZnVuY3Rpb24gRG9jdW1lbnRzKGNvbGxlY3Rpb24pIHtcbiAgYXJpdHkuZXhhY3QoMSwgYXJndW1lbnRzLCBEb2N1bWVudHMubmFtZSlcbiAgcmV0dXJuIG5ldyBFeHByKHsgZG9jdW1lbnRzOiB3cmFwKGNvbGxlY3Rpb24pIH0pXG59XG5cbi8vIEhlbHBlcnNcblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGFyaXR5KG1pbiwgbWF4LCBhcmdzLCBjYWxsZXJGdW5jKSB7XG4gIGlmIChcbiAgICAobWluICE9PSBudWxsICYmIGFyZ3MubGVuZ3RoIDwgbWluKSB8fFxuICAgIChtYXggIT09IG51bGwgJiYgYXJncy5sZW5ndGggPiBtYXgpXG4gICkge1xuICAgIHRocm93IG5ldyBlcnJvcnMuSW52YWxpZEFyaXR5KG1pbiwgbWF4LCBhcmdzLmxlbmd0aCwgY2FsbGVyRnVuYylcbiAgfVxufVxuXG5hcml0eS5leGFjdCA9IGZ1bmN0aW9uKG4sIGFyZ3MsIGNhbGxlckZ1bmMpIHtcbiAgYXJpdHkobiwgbiwgYXJncywgY2FsbGVyRnVuYylcbn1cbmFyaXR5Lm1heCA9IGZ1bmN0aW9uKG4sIGFyZ3MsIGNhbGxlckZ1bmMpIHtcbiAgYXJpdHkobnVsbCwgbiwgYXJncywgY2FsbGVyRnVuYylcbn1cbmFyaXR5Lm1pbiA9IGZ1bmN0aW9uKG4sIGFyZ3MsIGNhbGxlckZ1bmMpIHtcbiAgYXJpdHkobiwgbnVsbCwgYXJncywgY2FsbGVyRnVuYylcbn1cbmFyaXR5LmJldHdlZW4gPSBmdW5jdGlvbihtaW4sIG1heCwgYXJncywgY2FsbGVyRnVuYykge1xuICBhcml0eShtaW4sIG1heCwgYXJncywgY2FsbGVyRnVuYylcbn1cblxuLyoqIEFkZHMgb3B0aW9uYWwgcGFyYW1ldGVycyB0byB0aGUgcXVlcnkuXG4gKlxuICogQGlnbm9yZVxuICogKi9cbmZ1bmN0aW9uIHBhcmFtcyhtYWluUGFyYW1zLCBvcHRpb25hbFBhcmFtcykge1xuICBmb3IgKHZhciBrZXkgaW4gb3B0aW9uYWxQYXJhbXMpIHtcbiAgICB2YXIgdmFsID0gb3B0aW9uYWxQYXJhbXNba2V5XVxuICAgIGlmICh2YWwgIT09IG51bGwpIHtcbiAgICAgIG1haW5QYXJhbXNba2V5XSA9IHZhbFxuICAgIH1cbiAgfVxuICByZXR1cm4gbWFpblBhcmFtc1xufVxuXG4vKipcbiAqIENhbGxlZCBvbiByZXN0IGFyZ3VtZW50cy5cbiAqIFRoaXMgZW5zdXJlcyB0aGF0IGEgc2luZ2xlIHZhbHVlIHBhc3NlZCBpcyBub3QgcHV0IGluIGFuIGFycmF5LCBzb1xuICogYHF1ZXJ5LmFkZChbMSwgMl0pYCB3aWxsIHdvcmsgYXMgd2VsbCBhcyBgcXVlcnkuYWRkKDEsIDIpYC5cbiAqXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIHZhcmFyZ3ModmFsdWVzKSB7XG4gIHZhciB2YWx1ZXNBc0FyciA9IEFycmF5LmlzQXJyYXkodmFsdWVzKVxuICAgID8gdmFsdWVzXG4gICAgOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh2YWx1ZXMpXG4gIHJldHVybiB2YWx1ZXMubGVuZ3RoID09PSAxID8gdmFsdWVzWzBdIDogdmFsdWVzQXNBcnJcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKi9cbmZ1bmN0aW9uIGFyZ3NUb0FycmF5KGFyZ3MpIHtcbiAgdmFyIHJ2ID0gW11cbiAgcnYucHVzaC5hcHBseShydiwgYXJncylcbiAgcmV0dXJuIHJ2XG59XG5cbi8qKlxuICogQGlnbm9yZVxuICovXG5mdW5jdGlvbiBkZWZhdWx0cyhwYXJhbSwgZGVmKSB7XG4gIGlmIChwYXJhbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRlZlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJhbVxuICB9XG59XG5cbi8qKlxuICogV3JhcHMgYW4gb2JqZWN0IGFzIGFuIEV4cHJlc3Npb24uIFRoaXMgd2lsbCBhdXRvbWF0aWNhbGx5IHdyYXAgYW55IGJhcmUgb2JqZWN0cyB3aXRoXG4gKiB0aGUgYXBwcm9wcmlhdGUge0BsaW5rIG9iamVjdH0gZXNjYXBpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiAgVGhlIG9iamVjdCB0byBiZSB3cmFwcGVkIGFzIGFuIEV4cHJlc3Npb24uXG4gKiBAcmV0dXJucyB7RXhwcn1cbiAqICAgVGhlIGV4cHJlc3Npb24gd3JhcHBpbmcgdGhlIHByb3ZpZGVkIG9iamVjdC5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIHdyYXAob2JqKSB7XG4gIGFyaXR5LmV4YWN0KDEsIGFyZ3VtZW50cywgd3JhcC5uYW1lKVxuICBpZiAob2JqID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfSBlbHNlIGlmIChcbiAgICBvYmogaW5zdGFuY2VvZiBFeHByIHx8XG4gICAgdXRpbC5jaGVja0luc3RhbmNlSGFzUHJvcGVydHkob2JqLCAnX2lzRmF1bmFFeHByJylcbiAgKSB7XG4gICAgcmV0dXJuIG9ialxuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdzeW1ib2wnKSB7XG4gICAgcmV0dXJuIG9iai50b1N0cmluZygpLnJlcGxhY2UoL1N5bWJvbFxcKCguKilcXCkvLCBmdW5jdGlvbihzdHIsIHN5bWJvbCkge1xuICAgICAgcmV0dXJuIHN5bWJvbFxuICAgIH0pXG4gIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBMYW1iZGEob2JqKVxuICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIHJldHVybiBuZXcgRXhwcihcbiAgICAgIG9iai5tYXAoZnVuY3Rpb24oZWxlbSkge1xuICAgICAgICByZXR1cm4gd3JhcChlbGVtKVxuICAgICAgfSlcbiAgICApXG4gIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgVWludDhBcnJheSB8fCBvYmogaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgIHJldHVybiBuZXcgdmFsdWVzLkJ5dGVzKG9iailcbiAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBuZXcgRXhwcih7IG9iamVjdDogd3JhcFZhbHVlcyhvYmopIH0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG9ialxuICB9XG59XG5cbi8qKlxuICogV3JhcHMgYWxsIG9mIHRoZSB2YWx1ZXMgb2YgYSBwcm92aWRlZCBPYmplY3QsIHdoaWxlIGxlYXZpbmcgdGhlIHBhcmVudCBvYmplY3QgdW53cmFwcGVkLlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogIFRoZSBvYmplY3Qgd2hvc2UgdmFsdWVzIGFyZSB0byBiZSB3cmFwcGVkIGFzIEV4cHJlc3Npb25zLlxuICogQHJldHVybnMge09iamVjdH1cbiAqICBBIGNvcHkgb2YgdGhlIHByb3ZpZGVkIG9iamVjdCwgd2l0aCB0aGUgdmFsdWVzIHdyYXBwZWQgYXMgRXhwcmVzc2lvbnMuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiB3cmFwVmFsdWVzKG9iaikge1xuICBpZiAob2JqICE9PSBudWxsKSB7XG4gICAgdmFyIHJ2ID0ge31cblxuICAgIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgIHJ2W2tleV0gPSB3cmFwKG9ialtrZXldKVxuICAgIH0pXG5cbiAgICByZXR1cm4gcnZcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBSZWY6IFJlZixcbiAgQnl0ZXM6IEJ5dGVzLFxuICBBYm9ydDogQWJvcnQsXG4gIEF0OiBBdCxcbiAgTGV0OiBMZXQsXG4gIFZhcjogVmFyLFxuICBJZjogSWYsXG4gIERvOiBEbyxcbiAgT2JqZWN0OiBvYmplY3RGdW5jdGlvbixcbiAgTGFtYmRhOiBMYW1iZGEsXG4gIENhbGw6IENhbGwsXG4gIFF1ZXJ5OiBRdWVyeSxcbiAgTWFwOiBNYXAsXG4gIEZvcmVhY2g6IEZvcmVhY2gsXG4gIEZpbHRlcjogRmlsdGVyLFxuICBUYWtlOiBUYWtlLFxuICBEcm9wOiBEcm9wLFxuICBQcmVwZW5kOiBQcmVwZW5kLFxuICBBcHBlbmQ6IEFwcGVuZCxcbiAgSXNFbXB0eTogSXNFbXB0eSxcbiAgSXNOb25FbXB0eTogSXNOb25FbXB0eSxcbiAgSXNOdW1iZXI6IElzTnVtYmVyLFxuICBJc0RvdWJsZTogSXNEb3VibGUsXG4gIElzSW50ZWdlcjogSXNJbnRlZ2VyLFxuICBJc0Jvb2xlYW46IElzQm9vbGVhbixcbiAgSXNOdWxsOiBJc051bGwsXG4gIElzQnl0ZXM6IElzQnl0ZXMsXG4gIElzVGltZXN0YW1wOiBJc1RpbWVzdGFtcCxcbiAgSXNEYXRlOiBJc0RhdGUsXG4gIElzU3RyaW5nOiBJc1N0cmluZyxcbiAgSXNBcnJheTogSXNBcnJheSxcbiAgSXNPYmplY3Q6IElzT2JqZWN0LFxuICBJc1JlZjogSXNSZWYsXG4gIElzU2V0OiBJc1NldCxcbiAgSXNEb2M6IElzRG9jLFxuICBJc0xhbWJkYTogSXNMYW1iZGEsXG4gIElzQ29sbGVjdGlvbjogSXNDb2xsZWN0aW9uLFxuICBJc0RhdGFiYXNlOiBJc0RhdGFiYXNlLFxuICBJc0luZGV4OiBJc0luZGV4LFxuICBJc0Z1bmN0aW9uOiBJc0Z1bmN0aW9uLFxuICBJc0tleTogSXNLZXksXG4gIElzVG9rZW46IElzVG9rZW4sXG4gIElzQ3JlZGVudGlhbHM6IElzQ3JlZGVudGlhbHMsXG4gIElzUm9sZTogSXNSb2xlLFxuICBHZXQ6IEdldCxcbiAgS2V5RnJvbVNlY3JldDogS2V5RnJvbVNlY3JldCxcbiAgUmVkdWNlOiBSZWR1Y2UsXG4gIFBhZ2luYXRlOiBQYWdpbmF0ZSxcbiAgRXhpc3RzOiBFeGlzdHMsXG4gIENyZWF0ZTogQ3JlYXRlLFxuICBVcGRhdGU6IFVwZGF0ZSxcbiAgUmVwbGFjZTogUmVwbGFjZSxcbiAgRGVsZXRlOiBEZWxldGUsXG4gIEluc2VydDogSW5zZXJ0LFxuICBSZW1vdmU6IFJlbW92ZSxcbiAgQ3JlYXRlQ2xhc3M6IGRlcHJlY2F0ZShcbiAgICBDcmVhdGVDbGFzcyxcbiAgICAnQ3JlYXRlQ2xhc3MoKSBpcyBkZXByZWNhdGVkLCB1c2UgQ3JlYXRlQ29sbGVjdGlvbigpIGluc3RlYWQnXG4gICksXG4gIENyZWF0ZUNvbGxlY3Rpb246IENyZWF0ZUNvbGxlY3Rpb24sXG4gIENyZWF0ZURhdGFiYXNlOiBDcmVhdGVEYXRhYmFzZSxcbiAgQ3JlYXRlSW5kZXg6IENyZWF0ZUluZGV4LFxuICBDcmVhdGVLZXk6IENyZWF0ZUtleSxcbiAgQ3JlYXRlRnVuY3Rpb246IENyZWF0ZUZ1bmN0aW9uLFxuICBDcmVhdGVSb2xlOiBDcmVhdGVSb2xlLFxuICBTaW5nbGV0b246IFNpbmdsZXRvbixcbiAgRXZlbnRzOiBFdmVudHMsXG4gIE1hdGNoOiBNYXRjaCxcbiAgVW5pb246IFVuaW9uLFxuICBNZXJnZTogTWVyZ2UsXG4gIEludGVyc2VjdGlvbjogSW50ZXJzZWN0aW9uLFxuICBEaWZmZXJlbmNlOiBEaWZmZXJlbmNlLFxuICBEaXN0aW5jdDogRGlzdGluY3QsXG4gIEpvaW46IEpvaW4sXG4gIFJhbmdlOiBSYW5nZSxcbiAgTG9naW46IExvZ2luLFxuICBMb2dvdXQ6IExvZ291dCxcbiAgSWRlbnRpZnk6IElkZW50aWZ5LFxuICBJZGVudGl0eTogSWRlbnRpdHksXG4gIEhhc0lkZW50aXR5OiBIYXNJZGVudGl0eSxcbiAgQ29uY2F0OiBDb25jYXQsXG4gIENhc2Vmb2xkOiBDYXNlZm9sZCxcbiAgQ29udGFpbnNTdHI6IENvbnRhaW5zU3RyLFxuICBDb250YWluc1N0clJlZ2V4OiBDb250YWluc1N0clJlZ2V4LFxuICBTdGFydHNXaXRoOiBTdGFydHNXaXRoLFxuICBFbmRzV2l0aDogRW5kc1dpdGgsXG4gIEZpbmRTdHI6IEZpbmRTdHIsXG4gIEZpbmRTdHJSZWdleDogRmluZFN0clJlZ2V4LFxuICBMZW5ndGg6IExlbmd0aCxcbiAgTG93ZXJDYXNlOiBMb3dlckNhc2UsXG4gIExUcmltOiBMVHJpbSxcbiAgTkdyYW06IE5HcmFtLFxuICBSZXBlYXQ6IFJlcGVhdCxcbiAgUmVwbGFjZVN0cjogUmVwbGFjZVN0cixcbiAgUmVwbGFjZVN0clJlZ2V4OiBSZXBsYWNlU3RyUmVnZXgsXG4gIFJlZ2V4RXNjYXBlOiBSZWdleEVzY2FwZSxcbiAgUlRyaW06IFJUcmltLFxuICBTcGFjZTogU3BhY2UsXG4gIFN1YlN0cmluZzogU3ViU3RyaW5nLFxuICBUaXRsZUNhc2U6IFRpdGxlQ2FzZSxcbiAgVHJpbTogVHJpbSxcbiAgVXBwZXJDYXNlOiBVcHBlckNhc2UsXG4gIEZvcm1hdDogRm9ybWF0LFxuICBUaW1lOiBUaW1lLFxuICBUaW1lQWRkOiBUaW1lQWRkLFxuICBUaW1lU3VidHJhY3Q6IFRpbWVTdWJ0cmFjdCxcbiAgVGltZURpZmY6IFRpbWVEaWZmLFxuICBFcG9jaDogRXBvY2gsXG4gIERhdGU6IERhdGUsXG4gIE5vdzogTm93LFxuICBOZXh0SWQ6IGRlcHJlY2F0ZShOZXh0SWQsICdOZXh0SWQoKSBpcyBkZXByZWNhdGVkLCB1c2UgTmV3SWQoKSBpbnN0ZWFkJyksXG4gIE5ld0lkOiBOZXdJZCxcbiAgRGF0YWJhc2U6IERhdGFiYXNlLFxuICBJbmRleDogSW5kZXgsXG4gIENsYXNzOiBkZXByZWNhdGUoQ2xhc3MsICdDbGFzcygpIGlzIGRlcHJlY2F0ZWQsIHVzZSBDb2xsZWN0aW9uKCkgaW5zdGVhZCcpLFxuICBDb2xsZWN0aW9uOiBDb2xsZWN0aW9uLFxuICBGdW5jdGlvbjogRnVuY3Rpb25GbixcbiAgUm9sZTogUm9sZSxcbiAgQ2xhc3NlczogZGVwcmVjYXRlKFxuICAgIENsYXNzZXMsXG4gICAgJ0NsYXNzZXMoKSBpcyBkZXByZWNhdGVkLCB1c2UgQ29sbGVjdGlvbnMoKSBpbnN0ZWFkJ1xuICApLFxuICBDb2xsZWN0aW9uczogQ29sbGVjdGlvbnMsXG4gIERhdGFiYXNlczogRGF0YWJhc2VzLFxuICBJbmRleGVzOiBJbmRleGVzLFxuICBGdW5jdGlvbnM6IEZ1bmN0aW9ucyxcbiAgUm9sZXM6IFJvbGVzLFxuICBLZXlzOiBLZXlzLFxuICBUb2tlbnM6IFRva2VucyxcbiAgQ3JlZGVudGlhbHM6IENyZWRlbnRpYWxzLFxuICBFcXVhbHM6IEVxdWFscyxcbiAgQ29udGFpbnM6IENvbnRhaW5zLFxuICBTZWxlY3Q6IFNlbGVjdCxcbiAgU2VsZWN0QWxsOiBkZXByZWNhdGUoU2VsZWN0QWxsLCAnU2VsZWN0QWxsKCkgaXMgZGVwcmVjYXRlZC4gQXZvaWQgdXNlLicpLFxuICBBYnM6IEFicyxcbiAgQWRkOiBBZGQsXG4gIEJpdEFuZDogQml0QW5kLFxuICBCaXROb3Q6IEJpdE5vdCxcbiAgQml0T3I6IEJpdE9yLFxuICBCaXRYb3I6IEJpdFhvcixcbiAgQ2VpbDogQ2VpbCxcbiAgRGl2aWRlOiBEaXZpZGUsXG4gIEZsb29yOiBGbG9vcixcbiAgTWF4OiBNYXgsXG4gIE1pbjogTWluLFxuICBNb2R1bG86IE1vZHVsbyxcbiAgTXVsdGlwbHk6IE11bHRpcGx5LFxuICBSb3VuZDogUm91bmQsXG4gIFN1YnRyYWN0OiBTdWJ0cmFjdCxcbiAgU2lnbjogU2lnbixcbiAgU3FydDogU3FydCxcbiAgVHJ1bmM6IFRydW5jLFxuICBDb3VudDogQ291bnQsXG4gIFN1bTogU3VtLFxuICBNZWFuOiBNZWFuLFxuICBBbnk6IEFueSxcbiAgQWxsOiBBbGwsXG4gIEFjb3M6IEFjb3MsXG4gIEFzaW46IEFzaW4sXG4gIEF0YW46IEF0YW4sXG4gIENvczogQ29zLFxuICBDb3NoOiBDb3NoLFxuICBEZWdyZWVzOiBEZWdyZWVzLFxuICBFeHA6IEV4cCxcbiAgSHlwb3Q6IEh5cG90LFxuICBMbjogTG4sXG4gIExvZzogTG9nLFxuICBQb3c6IFBvdyxcbiAgUmFkaWFuczogUmFkaWFucyxcbiAgU2luOiBTaW4sXG4gIFNpbmg6IFNpbmgsXG4gIFRhbjogVGFuLFxuICBUYW5oOiBUYW5oLFxuICBMVDogTFQsXG4gIExURTogTFRFLFxuICBHVDogR1QsXG4gIEdURTogR1RFLFxuICBBbmQ6IEFuZCxcbiAgT3I6IE9yLFxuICBOb3Q6IE5vdCxcbiAgVG9TdHJpbmc6IFRvU3RyaW5nLFxuICBUb051bWJlcjogVG9OdW1iZXIsXG4gIFRvT2JqZWN0OiBUb09iamVjdCxcbiAgVG9BcnJheTogVG9BcnJheSxcbiAgVG9Eb3VibGU6IFRvRG91YmxlLFxuICBUb0ludGVnZXI6IFRvSW50ZWdlcixcbiAgVG9UaW1lOiBUb1RpbWUsXG4gIFRvU2Vjb25kczogVG9TZWNvbmRzLFxuICBUb01pY3JvczogVG9NaWNyb3MsXG4gIFRvTWlsbGlzOiBUb01pbGxpcyxcbiAgRGF5T2ZNb250aDogRGF5T2ZNb250aCxcbiAgRGF5T2ZXZWVrOiBEYXlPZldlZWssXG4gIERheU9mWWVhcjogRGF5T2ZZZWFyLFxuICBTZWNvbmQ6IFNlY29uZCxcbiAgTWludXRlOiBNaW51dGUsXG4gIEhvdXI6IEhvdXIsXG4gIE1vbnRoOiBNb250aCxcbiAgWWVhcjogWWVhcixcbiAgVG9EYXRlOiBUb0RhdGUsXG4gIE1vdmVEYXRhYmFzZTogTW92ZURhdGFiYXNlLFxuICBEb2N1bWVudHM6IERvY3VtZW50cyxcbiAgd3JhcDogd3JhcCxcbn1cbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgdmFsdWVzID0gcmVxdWlyZSgnLi92YWx1ZXMnKVxuXG5mdW5jdGlvbiB0b0pTT04ob2JqZWN0LCBwcmV0dHkpIHtcbiAgcHJldHR5ID0gdHlwZW9mIHByZXR0eSAhPT0gJ3VuZGVmaW5lZCcgPyBwcmV0dHkgOiBmYWxzZVxuXG4gIGlmIChwcmV0dHkpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqZWN0LCBudWxsLCAnICAnKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShvYmplY3QpXG4gIH1cbn1cblxuZnVuY3Rpb24gcGFyc2VKU09OKGpzb24pIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoanNvbiwganNvbl9wYXJzZSlcbn1cblxuZnVuY3Rpb24ganNvbl9wYXJzZShfLCB2YWwpIHtcbiAgaWYgKHR5cGVvZiB2YWwgIT09ICdvYmplY3QnIHx8IHZhbCA9PT0gbnVsbCkge1xuICAgIHJldHVybiB2YWxcbiAgfSBlbHNlIGlmICgnQHJlZicgaW4gdmFsKSB7XG4gICAgdmFyIHJlZiA9IHZhbFsnQHJlZiddXG5cbiAgICBpZiAoISgnY29sbGVjdGlvbicgaW4gcmVmKSAmJiAhKCdkYXRhYmFzZScgaW4gcmVmKSkge1xuICAgICAgcmV0dXJuIHZhbHVlcy5OYXRpdmUuZnJvbU5hbWUocmVmWydpZCddKVxuICAgIH1cblxuICAgIHZhciBjb2wgPSBqc29uX3BhcnNlKCdjb2xsZWN0aW9uJywgcmVmWydjb2xsZWN0aW9uJ10pXG4gICAgdmFyIGRiID0ganNvbl9wYXJzZSgnZGF0YWJhc2UnLCByZWZbJ2RhdGFiYXNlJ10pXG5cbiAgICByZXR1cm4gbmV3IHZhbHVlcy5SZWYocmVmWydpZCddLCBjb2wsIGRiKVxuICB9IGVsc2UgaWYgKCdAb2JqJyBpbiB2YWwpIHtcbiAgICByZXR1cm4gdmFsWydAb2JqJ11cbiAgfSBlbHNlIGlmICgnQHNldCcgaW4gdmFsKSB7XG4gICAgcmV0dXJuIG5ldyB2YWx1ZXMuU2V0UmVmKHZhbFsnQHNldCddKVxuICB9IGVsc2UgaWYgKCdAdHMnIGluIHZhbCkge1xuICAgIHJldHVybiBuZXcgdmFsdWVzLkZhdW5hVGltZSh2YWxbJ0B0cyddKVxuICB9IGVsc2UgaWYgKCdAZGF0ZScgaW4gdmFsKSB7XG4gICAgcmV0dXJuIG5ldyB2YWx1ZXMuRmF1bmFEYXRlKHZhbFsnQGRhdGUnXSlcbiAgfSBlbHNlIGlmICgnQGJ5dGVzJyBpbiB2YWwpIHtcbiAgICByZXR1cm4gbmV3IHZhbHVlcy5CeXRlcyh2YWxbJ0BieXRlcyddKVxuICB9IGVsc2UgaWYgKCdAcXVlcnknIGluIHZhbCkge1xuICAgIHJldHVybiBuZXcgdmFsdWVzLlF1ZXJ5KHZhbFsnQHF1ZXJ5J10pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICB0b0pTT046IHRvSlNPTixcbiAgcGFyc2VKU09OOiBwYXJzZUpTT04sXG59XG4iLCIndXNlIHN0cmljdCdcblxuLyoqXG4gKiBBIHN0cnVjdHVyZSBjb250YWluaW5nIHRoZSByZXF1ZXN0IGFuZCByZXNwb25zZSBjb250ZXh0IGZvciBhIGdpdmVuIEZhdW5hREIgcmVxdWVzdC5cbiAqIFByb3ZpZGVkIHRvIGFuIG9ic2VydmVyIGZ1bmN0aW9uIG9wdGlvbmFsbHkgZGVmaW5lZCBpbiB0aGUge0BsaW5rIENsaWVudH0gY29uc3RydWN0b3IuXG4gKlxuICogQHBhcmFtIHsnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ1BBVENIJyB8ICdERUxFVEUnfSBtZXRob2RcbiAqICAgVGhlIEhUVFAgbWV0aG9kIHVzZWQgaW4gdGhlIHJlcXVlc3QuXG4gKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICogICBUaGUgcGF0aCB0aGF0IHdhcyBxdWVyaWVkLiBSZWxhdGl2ZSB0byB0aGUgY2xpZW50J3MgZG9tYWluLlxuICogQHBhcmFtIHtzdHJpbmd9IHF1ZXJ5XG4gKiAgIFVSTCBxdWVyeSBwYXJhbWV0ZXJzLiBPbmx5IHNldCBpZiBgbWV0aG9kYCBpcyBcIkdFVFwiLlxuICogQHBhcmFtIHtPYmplY3R9IHJlcXVlc3RSYXdcbiAqICAgVGhlIEpTT04gcmVxdWVzdCBzdHJpbmcuXG4gKiBAcGFyYW0ge09iamVjdH0gcmVxdWVzdENvbnRlbnRcbiAqICAgVGhlIHJlcXVlc3QgZGF0YS5cbiAqIEBwYXJhbSB7c3RyaW5nfSByZXNwb25zZVJhd1xuICogICBUaGUgdW5wYXJzZWQgcmVzcG9uc2UgZGF0YSwgYXMgYSBzdHJpbmcuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2VDb250ZW50XG4gKiAgIFRoZSByZXNwb25zZSBkYXRhIHBhcnNlZCBhcyBKU09OLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXR1c0NvZGVcbiAqICAgVGhlIEhUVFAgcmVzcG9uc2Ugc3RhdHVzIGNvZGUuXG4gKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2VIZWFkZXJzXG4gKiAgIFRoZSBIVFRQIGhlYWRlcnMgcmV0dXJuZWQgaW4gdGhlIHJlc3BvbnNlLlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0VGltZVxuICogICBUaGUgdGltZSB0aGUgcmVxdWVzdCB3YXMgaXNzdWVkIGJ5IHRoZSBjbGllbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kVGltZVxuICogICBUaGUgdGltZSB0aGUgcmVzcG9uc2Ugd2FzIHJlY2VpdmVkIGJ5IHRoZSBjbGllbnQuXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmVxdWVzdFJlc3VsdChcbiAgbWV0aG9kLFxuICBwYXRoLFxuICBxdWVyeSxcbiAgcmVxdWVzdFJhdyxcbiAgcmVxdWVzdENvbnRlbnQsXG4gIHJlc3BvbnNlUmF3LFxuICByZXNwb25zZUNvbnRlbnQsXG4gIHN0YXR1c0NvZGUsXG4gIHJlc3BvbnNlSGVhZGVycyxcbiAgc3RhcnRUaW1lLFxuICBlbmRUaW1lXG4pIHtcbiAgLyoqIEB0eXBlIHsnR0VUJyB8ICdQT1NUJyB8ICdQVVQnIHwgJ1BBVENIJyB8ICdERUxFVEUnfSAqL1xuICB0aGlzLm1ldGhvZCA9IG1ldGhvZFxuXG4gIC8qKiBAdHlwZSB7c3RyaW5nfSAqL1xuICB0aGlzLnBhdGggPSBwYXRoXG5cbiAgLyoqXG4gICAqIFVSTCBxdWVyeS4gTnVsbCB1bmxlc3MgYG1ldGhvZCA9PSAnZ2V0J2AuXG4gICAqICpOb3QqIHJlbGF0ZWQgdG8ge0BsaW5rIENsaWVudC5xdWVyeX0uXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqL1xuICB0aGlzLnF1ZXJ5ID0gcXVlcnlcblxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgdGhpcy5yZXF1ZXN0UmF3ID0gcmVxdWVzdFJhd1xuXG4gIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICB0aGlzLnJlcXVlc3RDb250ZW50ID0gcmVxdWVzdENvbnRlbnRcblxuICAvKiogQHR5cGUge3N0cmluZ30gKi9cbiAgdGhpcy5yZXNwb25zZVJhdyA9IHJlc3BvbnNlUmF3XG5cbiAgLyoqXG4gICAqIFBhcnNlZCB2YWx1ZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKiBJbmNsdWRlcyBcInJlc291cmNlXCIgd3JhcHBlciBkaWN0LCBvciBtYXkgYmUgYW4gXCJlcnJvcnNcIiBkaWN0IGluc3RlYWQuXG4gICAqIEB0eXBlIHtvYmplY3R9XG4gICAqL1xuICB0aGlzLnJlc3BvbnNlQ29udGVudCA9IHJlc3BvbnNlQ29udGVudFxuXG4gIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICB0aGlzLnN0YXR1c0NvZGUgPSBzdGF0dXNDb2RlXG5cbiAgLyoqIEB0eXBlIHtvYmplY3R9ICovXG4gIHRoaXMucmVzcG9uc2VIZWFkZXJzID0gcmVzcG9uc2VIZWFkZXJzXG5cbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIHRoaXMuc3RhcnRUaW1lID0gc3RhcnRUaW1lXG5cbiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovXG4gIHRoaXMuZW5kVGltZSA9IGVuZFRpbWVcbn1cblxuLyoqXG4gKiBgdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWVgOiBUaW1lIHRha2VuIGluIG1pbGxpc2Vjb25kcy5cbiAqIEB0eXBlIHtudW1iZXJ9XG4gKi9cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShSZXF1ZXN0UmVzdWx0LnByb3RvdHlwZSwgJ3RpbWVUYWtlbicsIHtcbiAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWVcbiAgfSxcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gUmVxdWVzdFJlc3VsdFxuIiwiJ3VzZSBzdHJpY3QnXG5cbnZhciBxdWVyeSA9IHJlcXVpcmUoJy4vcXVlcnknKVxudmFyIG9iamVjdEFzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKVxuXG4vKipcbiAqIEEgRmF1bmFEQiBMYW1iZGEgZXhwcmVzc2lvbiB0byBiZSBwYXNzZWQgaW50byBvbmUgb2YgdGhlIGNvbGxlY3Rpb25cbiAqIGZ1bmN0aW9uczogTWFwIG9yIEZpbHRlci5cbiAqXG4gKiBAY2FsbGJhY2sgUGFnZUhlbHBlcn5jb2xsZWN0aW9uRnVuY3Rpb25cbiAqIEBwYXJhbSB7YW55fSB2YXJcbiAqICAgVGhlIHZhcmlhYmxlIHBhc3NlZCBpbiBieSBGYXVuYURCIHdoZW4gdGhpcyBMYW1iZGFcbiAqICAgZnVuY3Rpb24gaXMgZXhlY3V0ZWQuXG4gKiBAcmV0dXJuIHtFeHByfVxuICogICBUaGUgRmF1bmFEQiBxdWVyeSBleHByZXNzaW9uIHRvIGJlIHJldHVybmVkIGJ5IHRoaXMgTGFtYmRhLlxuICovXG5cbi8qKlxuICogQGNhbGxiYWNrIFBhZ2VIZWxwZXJ+ZWFjaEZ1bmN0aW9uXG4gKiBAcGFyYW0ge09iamVjdH0gcGFnZVxuICogICBBIHBhZ2UgcmV0dXJuZWQgYnkgRmF1bmFEQidzIFBhZ2luYXRlIGZ1bmN0aW9uLlxuICovXG5cbi8qKlxuICogQSB3cmFwcGVyIHRoYXQgcHJvdmlkZXMgYSBoZWxwZnVsIEFQSSBmb3IgY29uc3VtaW5nIEZhdW5hREIgcGFnZXMuXG4gKlxuICogR2VuZXJhbGx5IHRoaXMgaXMgY29uc3RydWN0ZWQgdGhyb3VnaCB0aGUge0BsaW5rIENsaWVudCNwYWdpbmF0ZX0gbWV0aG9kLlxuICpcbiAqIFRoZSB7QGxpbmsgUGFnZUhlbHBlciNtYXB9IGFuZCB7QGxpbmsgUGFnZUhlbHBlciNmaWx0ZXJ9IG1ldGhvZHMgd2lsbCB3cmFwIHRoZSB1bmRlcmx5aW5nIHF1ZXJ5IHdpdGggYSBNYXBcbiAqIGFuZCBGaWx0ZXIgcXVlcnkgZnVuY3Rpb24sIHJlc3BlY3RpdmVseS4gVGhlc2Ugd2lsbCBiZSBleGVjdXRlZCBvbiB0aGUgc2VydmVyIHdoZW4gYSBwcm9taXNlLXJldHVybmluZyBmdW5jdGlvblxuICogaXMgY2FsbGVkLlxuICpcbiAqIFRoZSB7QGxpbmsgUGFnZUhlbHBlciNlYWNofSBhbmQge0BsaW5rIFBhZ2VIZWxwZXIjZWFjaFJldmVyc2V9IGZ1bmN0aW9ucyBkaXNwYXRjaCBxdWVyaWVzIHRvIEZhdW5hREIsIGFuZCByZXR1cm4gUHJvbWlzZXNcbiAqIHJlcHJlc2VudGluZyB0aGUgY29tcGxldGlvbiBvZiB0aG9zZSBxdWVyaWVzLiBUaGUgY2FsbGJhY2tzIHByb3ZpZGVkIHRvIHRoZXNlIGZ1bmN0aW9ucyBhcmUgZXhlY3V0ZWQgbG9jYWxseSB3aGVuIHRoZVxuICogcXVlcmllcyByZXR1cm4uXG4gKlxuICogVGhlIHtAbGluayBQYWdlSGVscGVyI25leHRQYWdlfSBhbmQge0BsaW5rIFBhZ2VIZWxwZXIjcHJldmlvdXNQYWdlfSBmdW5jdGlvbnMgYWxzbyBkaXNwYXRjaCBxdWVyaWVzIHRvIEZhdW5hREIsXG4gKiBidXQgcmV0dXJuIHRoZWlyIHJlc3BvbnNlcyBpbiBhIHdyYXBwZWQgUHJvbWlzZS5cbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiAgIFRoZSBGYXVuYURCIGNsaWVudCB1c2VkIHRvIHBhZ2luYXRlLlxuICogQHBhcmFtIHtPYmplY3R9IHNldFxuICogICBUaGUgc2V0IHRvIHBhZ2luYXRlLlxuICogQHBhcmFtIHs/T2JqZWN0fSBwYXJhbXNcbiAqICAgUGFyYW1ldGVycyB0byBiZSBwYXNzZWQgdG8gdGhlIEZhdW5hREIgUGFnaW5hdGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0gez9PYmplY3R9IG9wdGlvbnNcbiAqICAgT2JqZWN0IHRoYXQgY29uZmlndXJlcyB0aGUgY3VycmVudCBwYWdpbmF0aW9uLCBvdmVycmlkaW5nIEZhdW5hREIgY2xpZW50IG9wdGlvbnMuXG4gKiBAcGFyYW0gez9zdHJpbmd9IG9wdGlvbnMuc2VjcmV0IEZhdW5hREIgc2VjcmV0IChzZWUgW1JlZmVyZW5jZSBEb2N1bWVudGF0aW9uXShodHRwczovL2FwcC5mYXVuYS5jb20vZG9jdW1lbnRhdGlvbi9pbnRyby9zZWN1cml0eSkpXG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUGFnZUhlbHBlcihjbGllbnQsIHNldCwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIGlmIChwYXJhbXMgPT09IHVuZGVmaW5lZCkge1xuICAgIHBhcmFtcyA9IHt9XG4gIH1cblxuICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cblxuICB0aGlzLnJldmVyc2UgPSBmYWxzZVxuICB0aGlzLnBhcmFtcyA9IHt9XG5cbiAgdGhpcy5iZWZvcmUgPSB1bmRlZmluZWRcbiAgdGhpcy5hZnRlciA9IHVuZGVmaW5lZFxuXG4gIG9iamVjdEFzc2lnbih0aGlzLnBhcmFtcywgcGFyYW1zKVxuXG4gIHZhciBjdXJzb3JQYXJhbXMgPSB0aGlzLnBhcmFtcy5jdXJzb3IgfHwgdGhpcy5wYXJhbXNcblxuICBpZiAoJ2JlZm9yZScgaW4gY3Vyc29yUGFyYW1zKSB7XG4gICAgdGhpcy5iZWZvcmUgPSBjdXJzb3JQYXJhbXMuYmVmb3JlXG4gICAgZGVsZXRlIGN1cnNvclBhcmFtcy5iZWZvcmVcbiAgfSBlbHNlIGlmICgnYWZ0ZXInIGluIGN1cnNvclBhcmFtcykge1xuICAgIHRoaXMuYWZ0ZXIgPSBjdXJzb3JQYXJhbXMuYWZ0ZXJcbiAgICBkZWxldGUgY3Vyc29yUGFyYW1zLmFmdGVyXG4gIH1cblxuICB0aGlzLm9wdGlvbnMgPSB7fVxuICBvYmplY3RBc3NpZ24odGhpcy5vcHRpb25zLCBvcHRpb25zKVxuXG4gIHRoaXMuY2xpZW50ID0gY2xpZW50XG4gIHRoaXMuc2V0ID0gc2V0XG5cbiAgLyoqXG4gICAqIEBtZW1iZXIge0FycmF5LjxGdW5jdGlvbj59XG4gICAqIEB0eXBlIHtBcnJheS48RnVuY3Rpb24+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgdGhpcy5fZmF1bmFGdW5jdGlvbnMgPSBbXVxufVxuXG4vKipcbiAqIFdyYXBzIHRoZSBzZXQgdG8gYmUgcGFnaW5hdGVkIHdpdGggYSBGYXVuYURCIE1hcCBmdW5jdGlvbi5cbiAqIEFzIHRoaXMgZnVuY3Rpb24gaXMgZXhlY3V0ZWQgb24gdGhlIHNlcnZlciwgdGhlIGBsYW1iZGFgIHBhcmFtIG11c3RcbiAqIHJldHVybiBhIHZhbGlkIHF1ZXJ5IGV4cHJlc3Npb24uXG4gKlxuICogQHBhcmFtIHtQYWdlSGVscGVyfmNvbGxlY3Rpb25GdW5jdGlvbn0gbGFtYmRhXG4gKiAgIFRoZSBMYW1iZGEgZXhwcmVzc2lvbiB0byBiZSBwYXNzZWQgaW50byB0aGUgTWFwIGZ1bmN0aW9uLlxuICogQHJldHVybiB7UGFnZUhlbHBlcn1cbiAqXG4gKi9cblBhZ2VIZWxwZXIucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uKGxhbWJkYSkge1xuICB2YXIgcnYgPSB0aGlzLl9jbG9uZSgpXG4gIHJ2Ll9mYXVuYUZ1bmN0aW9ucy5wdXNoKGZ1bmN0aW9uKHEpIHtcbiAgICByZXR1cm4gcXVlcnkuTWFwKHEsIGxhbWJkYSlcbiAgfSlcbiAgcmV0dXJuIHJ2XG59XG5cbi8qKlxuICogV3JhcHMgdGhlIHNldCB0byBiZSBwYWdpbmF0ZWQgd2l0aCBhIEZhdW5hREIgRmlsdGVyIGZ1bmNpdG9uLlxuICogQXMgdGhpcyBmdW5jdGlvbiBpcyBleGVjdXRlZCBvbiB0aGUgc2VydmVyLCB0aGUgYGxhbWJkYWAgcGFyYW0gbXVzdFxuICogcmV0dXJuIGEgdmFsaWQgcXVlcnkgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge1BhZ2VIZWxwZXJ+Y29sbGVjdGlvbkZ1bmN0aW9ufSBsYW1iZGFcbiAqICAgVGhlIGxhbWJkYSBleHByZXNzaW9uIHRvIGJlIHBhc3NlZCBpbnRvIHRoZSBGaWx0ZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJuIHtQYWdlSGVscGVyfVxuICovXG5QYWdlSGVscGVyLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbihsYW1iZGEpIHtcbiAgdmFyIHJ2ID0gdGhpcy5fY2xvbmUoKVxuICBydi5fZmF1bmFGdW5jdGlvbnMucHVzaChmdW5jdGlvbihxKSB7XG4gICAgcmV0dXJuIHF1ZXJ5LkZpbHRlcihxLCBsYW1iZGEpXG4gIH0pXG4gIHJldHVybiBydlxufVxuXG4vKipcbiAqIEV4ZWN1dGVzIHRoZSBwcm92aWRlZCBmdW5jdGlvbiBmb3IgZWFjaCBwYWdlLlxuICpcbiAqIEBwYXJhbSB7UGFnZUhlbHBlcn5lYWNoRnVuY3Rpb259IGxhbWJkYVxuICogICBBIGZ1bmN0aW9uIHRvIGJlIGV4ZWN1dGVkIGZvciBlYWNoIHBhZ2UuXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6UHJvbWlzZS48dm9pZD59XG4gKi9cblBhZ2VIZWxwZXIucHJvdG90eXBlLmVhY2ggPSBmdW5jdGlvbihsYW1iZGEpIHtcbiAgcmV0dXJuIHRoaXMuX3JldHJpZXZlTmV4dFBhZ2UodGhpcy5hZnRlciwgZmFsc2UpLnRoZW4oXG4gICAgdGhpcy5fY29uc3VtZVBhZ2VzKGxhbWJkYSwgZmFsc2UpXG4gIClcbn1cblxuLyoqXG4gKiBFeGVjdXRlcyB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gZm9yIGVhY2ggcGFnZSwgaW4gdGhlIHJldmVyc2UgZGlyZWN0aW9uLlxuICogQHBhcmFtIHtQYWdlSGVscGVyfmVhY2hGdW5jdGlvbn0gbGFtYmRhXG4gKiBAcmV0dXJucyB7ZXh0ZXJuYWw6UHJvbWlzZS48dm9pZD59XG4gKi9cblBhZ2VIZWxwZXIucHJvdG90eXBlLmVhY2hSZXZlcnNlID0gZnVuY3Rpb24obGFtYmRhKSB7XG4gIHJldHVybiB0aGlzLl9yZXRyaWV2ZU5leHRQYWdlKHRoaXMuYmVmb3JlLCB0cnVlKS50aGVuKFxuICAgIHRoaXMuX2NvbnN1bWVQYWdlcyhsYW1iZGEsIHRydWUpXG4gIClcbn1cblxuLyoqXG4gKiBRdWVyaWVzIGZvciB0aGUgcHJldmlvdXMgcGFnZSBmcm9tIHRoZSBjdXJyZW50IGN1cnNvciBwb2ludDsgdGhpcyBtdXRhdGVzXG4gKiB0aGUgc3RhdGUgb2YgdGhlIFBhZ2VIZWxwZXIgd2hlbiB0aGUgcXVlcnkgY29tcGxldGVzLCB1cGRhdGluZyB0aGUgaW50ZXJuYWxcbiAqIGN1cnNvciBzdGF0ZSB0byB0aGF0IG9mIHRoZSByZXR1cm5lZCBwYWdlLlxuICpcbiAqIEByZXR1cm5zIHtleHRlcm5hbDpQcm9taXNlLjxvYmplY3Q+fVxuICovXG5QYWdlSGVscGVyLnByb3RvdHlwZS5wcmV2aW91c1BhZ2UgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHJldHVybiB0aGlzLl9yZXRyaWV2ZU5leHRQYWdlKHRoaXMuYmVmb3JlLCB0cnVlKS50aGVuKFxuICAgIHRoaXMuX2FkanVzdEN1cnNvcnMuYmluZChzZWxmKVxuICApXG59XG5cbi8qKlxuICogUXVlcmllcyBmb3IgdGhlIG5leHQgcGFnZSBmcm9tIHRoZSBjdXJyZW50IGN1cnNvciBwb2ludDsgdGhpcyBtdXRhdGVzXG4gKiB0aGUgc3RhdGUgb2YgdGhlIFBhZ2VIZWxwZXIgd2hlbiB0aGUgcXVlcnkgY29tcGxldGVzLCB1cGRhdGluZyB0aGUgaW50ZXJuYWxcbiAqIGN1cnNvciBzdGF0ZSB0byB0aGF0IG9mIHRoZSByZXR1cm5lZCBwYWdlLlxuICpcbiAqIEByZXR1cm5zIHtleHRlcm5hbDpQcm9taXNlLjxvYmplY3Q+fVxuICovXG5QYWdlSGVscGVyLnByb3RvdHlwZS5uZXh0UGFnZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgc2VsZiA9IHRoaXNcbiAgcmV0dXJuIHRoaXMuX3JldHJpZXZlTmV4dFBhZ2UodGhpcy5hZnRlciwgZmFsc2UpLnRoZW4oXG4gICAgdGhpcy5fYWRqdXN0Q3Vyc29ycy5iaW5kKHNlbGYpXG4gIClcbn1cblxuUGFnZUhlbHBlci5wcm90b3R5cGUuX2FkanVzdEN1cnNvcnMgPSBmdW5jdGlvbihwYWdlKSB7XG4gIGlmIChwYWdlLmFmdGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmFmdGVyID0gcGFnZS5hZnRlclxuICB9XG5cbiAgaWYgKHBhZ2UuYmVmb3JlICE9PSB1bmRlZmluZWQpIHtcbiAgICB0aGlzLmJlZm9yZSA9IHBhZ2UuYmVmb3JlXG4gIH1cblxuICByZXR1cm4gcGFnZS5kYXRhXG59XG5cblBhZ2VIZWxwZXIucHJvdG90eXBlLl9jb25zdW1lUGFnZXMgPSBmdW5jdGlvbihsYW1iZGEsIHJldmVyc2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHJldHVybiBmdW5jdGlvbihwYWdlKSB7XG4gICAgdmFyIGRhdGEgPSBbXVxuICAgIHBhZ2UuZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLmRvY3VtZW50KSB7XG4gICAgICAgIGl0ZW0uaW5zdGFuY2UgPSBpdGVtLmRvY3VtZW50XG4gICAgICB9XG4gICAgICBpZiAoaXRlbS52YWx1ZSAmJiBpdGVtLnZhbHVlLmRvY3VtZW50KSB7XG4gICAgICAgIGl0ZW0udmFsdWUuaW5zdGFuY2UgPSBpdGVtLnZhbHVlLmRvY3VtZW50XG4gICAgICB9XG4gICAgICBkYXRhLnB1c2goaXRlbSlcbiAgICB9KVxuICAgIGxhbWJkYShkYXRhKVxuXG4gICAgdmFyIG5leHRDdXJzb3JcbiAgICBpZiAocmV2ZXJzZSkge1xuICAgICAgbmV4dEN1cnNvciA9IHBhZ2UuYmVmb3JlXG4gICAgfSBlbHNlIHtcbiAgICAgIG5leHRDdXJzb3IgPSBwYWdlLmFmdGVyXG4gICAgfVxuXG4gICAgaWYgKG5leHRDdXJzb3IgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHNlbGZcbiAgICAgICAgLl9yZXRyaWV2ZU5leHRQYWdlKG5leHRDdXJzb3IsIHJldmVyc2UpXG4gICAgICAgIC50aGVuKHNlbGYuX2NvbnN1bWVQYWdlcyhsYW1iZGEsIHJldmVyc2UpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKClcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKlxuICogQHJldHVybnMge2V4dGVybmFsOlByb21pc2UuPE9iamVjdD59XG4gKiBAcHJpdmF0ZVxuICovXG5QYWdlSGVscGVyLnByb3RvdHlwZS5fcmV0cmlldmVOZXh0UGFnZSA9IGZ1bmN0aW9uKGN1cnNvciwgcmV2ZXJzZSkge1xuICB2YXIgb3B0cyA9IHt9XG4gIG9iamVjdEFzc2lnbihvcHRzLCB0aGlzLnBhcmFtcylcbiAgdmFyIGN1cnNvck9wdHMgPSBvcHRzLmN1cnNvciB8fCBvcHRzXG5cbiAgaWYgKGN1cnNvciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIGN1cnNvck9wdHMuYmVmb3JlID0gY3Vyc29yXG4gICAgfSBlbHNlIHtcbiAgICAgIGN1cnNvck9wdHMuYWZ0ZXIgPSBjdXJzb3JcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaWYgKHJldmVyc2UpIHtcbiAgICAgIGN1cnNvck9wdHMuYmVmb3JlID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIHZhciBxID0gcXVlcnkuUGFnaW5hdGUodGhpcy5zZXQsIG9wdHMpXG5cbiAgaWYgKHRoaXMuX2ZhdW5hRnVuY3Rpb25zLmxlbmd0aCA+IDApIHtcbiAgICB0aGlzLl9mYXVuYUZ1bmN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uKGxhbWJkYSkge1xuICAgICAgcSA9IGxhbWJkYShxKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gdGhpcy5jbGllbnQucXVlcnkocSwgdGhpcy5vcHRpb25zKVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJucyB7UGFnZUhlbHBlcn1cbiAqL1xuUGFnZUhlbHBlci5wcm90b3R5cGUuX2Nsb25lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBPYmplY3QuY3JlYXRlKFBhZ2VIZWxwZXIucHJvdG90eXBlLCB7XG4gICAgY2xpZW50OiB7IHZhbHVlOiB0aGlzLmNsaWVudCB9LFxuICAgIHNldDogeyB2YWx1ZTogdGhpcy5zZXQgfSxcbiAgICBfZmF1bmFGdW5jdGlvbnM6IHsgdmFsdWU6IHRoaXMuX2ZhdW5hRnVuY3Rpb25zIH0sXG4gICAgYmVmb3JlOiB7IHZhbHVlOiB0aGlzLmJlZm9yZSB9LFxuICAgIGFmdGVyOiB7IHZhbHVlOiB0aGlzLmFmdGVyIH0sXG4gIH0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gUGFnZUhlbHBlclxuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIENoZWNrIGlmIHdlJ3JlIHJlcXVpcmVkIHRvIGFkZCBhIHBvcnQgbnVtYmVyLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly91cmwuc3BlYy53aGF0d2cub3JnLyNkZWZhdWx0LXBvcnRcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gcG9ydCBQb3J0IG51bWJlciB3ZSBuZWVkIHRvIGNoZWNrXG4gKiBAcGFyYW0ge1N0cmluZ30gcHJvdG9jb2wgUHJvdG9jb2wgd2UgbmVlZCB0byBjaGVjayBhZ2FpbnN0LlxuICogQHJldHVybnMge0Jvb2xlYW59IElzIGl0IGEgZGVmYXVsdCBwb3J0IGZvciB0aGUgZ2l2ZW4gcHJvdG9jb2xcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcXVpcmVkKHBvcnQsIHByb3RvY29sKSB7XG4gIHByb3RvY29sID0gcHJvdG9jb2wuc3BsaXQoJzonKVswXTtcbiAgcG9ydCA9ICtwb3J0O1xuXG4gIGlmICghcG9ydCkgcmV0dXJuIGZhbHNlO1xuXG4gIHN3aXRjaCAocHJvdG9jb2wpIHtcbiAgICBjYXNlICdodHRwJzpcbiAgICBjYXNlICd3cyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDgwO1xuXG4gICAgY2FzZSAnaHR0cHMnOlxuICAgIGNhc2UgJ3dzcyc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDQ0MztcblxuICAgIGNhc2UgJ2Z0cCc6XG4gICAgcmV0dXJuIHBvcnQgIT09IDIxO1xuXG4gICAgY2FzZSAnZ29waGVyJzpcbiAgICByZXR1cm4gcG9ydCAhPT0gNzA7XG5cbiAgICBjYXNlICdmaWxlJzpcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gcG9ydCAhPT0gMDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5XG4gICwgdW5kZWY7XG5cbi8qKlxuICogRGVjb2RlIGEgVVJJIGVuY29kZWQgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgVVJJIGVuY29kZWQgc3RyaW5nLlxuICogQHJldHVybnMge1N0cmluZ3xOdWxsfSBUaGUgZGVjb2RlZCBzdHJpbmcuXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gZGVjb2RlKGlucHV0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChpbnB1dC5yZXBsYWNlKC9cXCsvZywgJyAnKSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufVxuXG4vKipcbiAqIEF0dGVtcHRzIHRvIGVuY29kZSBhIGdpdmVuIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpbnB1dCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZW5jb2RlZC5cbiAqIEByZXR1cm5zIHtTdHJpbmd8TnVsbH0gVGhlIGVuY29kZWQgc3RyaW5nLlxuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGVuY29kZShpbnB1dCkge1xuICB0cnkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoaW5wdXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLyoqXG4gKiBTaW1wbGUgcXVlcnkgc3RyaW5nIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcXVlcnkgVGhlIHF1ZXJ5IHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIHBhcnNlZC5cbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5mdW5jdGlvbiBxdWVyeXN0cmluZyhxdWVyeSkge1xuICB2YXIgcGFyc2VyID0gLyhbXj0/Jl0rKT0/KFteJl0qKS9nXG4gICAgLCByZXN1bHQgPSB7fVxuICAgICwgcGFydDtcblxuICB3aGlsZSAocGFydCA9IHBhcnNlci5leGVjKHF1ZXJ5KSkge1xuICAgIHZhciBrZXkgPSBkZWNvZGUocGFydFsxXSlcbiAgICAgICwgdmFsdWUgPSBkZWNvZGUocGFydFsyXSk7XG5cbiAgICAvL1xuICAgIC8vIFByZXZlbnQgb3ZlcnJpZGluZyBvZiBleGlzdGluZyBwcm9wZXJ0aWVzLiBUaGlzIGVuc3VyZXMgdGhhdCBidWlsZC1pblxuICAgIC8vIG1ldGhvZHMgbGlrZSBgdG9TdHJpbmdgIG9yIF9fcHJvdG9fXyBhcmUgbm90IG92ZXJyaWRlbiBieSBtYWxpY2lvdXNcbiAgICAvLyBxdWVyeXN0cmluZ3MuXG4gICAgLy9cbiAgICAvLyBJbiB0aGUgY2FzZSBpZiBmYWlsZWQgZGVjb2RpbmcsIHdlIHdhbnQgdG8gb21pdCB0aGUga2V5L3ZhbHVlIHBhaXJzXG4gICAgLy8gZnJvbSB0aGUgcmVzdWx0LlxuICAgIC8vXG4gICAgaWYgKGtleSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCBrZXkgaW4gcmVzdWx0KSBjb250aW51ZTtcbiAgICByZXN1bHRba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuLyoqXG4gKiBUcmFuc2Zvcm0gYSBxdWVyeSBzdHJpbmcgdG8gYW4gb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogT2JqZWN0IHRoYXQgc2hvdWxkIGJlIHRyYW5zZm9ybWVkLlxuICogQHBhcmFtIHtTdHJpbmd9IHByZWZpeCBPcHRpb25hbCBwcmVmaXguXG4gKiBAcmV0dXJucyB7U3RyaW5nfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gcXVlcnlzdHJpbmdpZnkob2JqLCBwcmVmaXgpIHtcbiAgcHJlZml4ID0gcHJlZml4IHx8ICcnO1xuXG4gIHZhciBwYWlycyA9IFtdXG4gICAgLCB2YWx1ZVxuICAgICwga2V5O1xuXG4gIC8vXG4gIC8vIE9wdGlvbmFsbHkgcHJlZml4IHdpdGggYSAnPycgaWYgbmVlZGVkXG4gIC8vXG4gIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIHByZWZpeCkgcHJlZml4ID0gJz8nO1xuXG4gIGZvciAoa2V5IGluIG9iaikge1xuICAgIGlmIChoYXMuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIC8vXG4gICAgICAvLyBFZGdlIGNhc2VzIHdoZXJlIHdlIGFjdHVhbGx5IHdhbnQgdG8gZW5jb2RlIHRoZSB2YWx1ZSB0byBhbiBlbXB0eVxuICAgICAgLy8gc3RyaW5nIGluc3RlYWQgb2YgdGhlIHN0cmluZ2lmaWVkIHZhbHVlLlxuICAgICAgLy9cbiAgICAgIGlmICghdmFsdWUgJiYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZiB8fCBpc05hTih2YWx1ZSkpKSB7XG4gICAgICAgIHZhbHVlID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGtleSA9IGVuY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICAgICAgdmFsdWUgPSBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xuXG4gICAgICAvL1xuICAgICAgLy8gSWYgd2UgZmFpbGVkIHRvIGVuY29kZSB0aGUgc3RyaW5ncywgd2Ugc2hvdWxkIGJhaWwgb3V0IGFzIHdlIGRvbid0XG4gICAgICAvLyB3YW50IHRvIGFkZCBpbnZhbGlkIHN0cmluZ3MgdG8gdGhlIHF1ZXJ5LlxuICAgICAgLy9cbiAgICAgIGlmIChrZXkgPT09IG51bGwgfHwgdmFsdWUgPT09IG51bGwpIGNvbnRpbnVlO1xuICAgICAgcGFpcnMucHVzaChrZXkgKyc9JysgdmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWlycy5sZW5ndGggPyBwcmVmaXggKyBwYWlycy5qb2luKCcmJykgOiAnJztcbn1cblxuLy9cbi8vIEV4cG9zZSB0aGUgbW9kdWxlLlxuLy9cbmV4cG9ydHMuc3RyaW5naWZ5ID0gcXVlcnlzdHJpbmdpZnk7XG5leHBvcnRzLnBhcnNlID0gcXVlcnlzdHJpbmc7XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXF1aXJlZCA9IHJlcXVpcmUoJ3JlcXVpcmVzLXBvcnQnKVxuICAsIHFzID0gcmVxdWlyZSgncXVlcnlzdHJpbmdpZnknKVxuICAsIHNsYXNoZXMgPSAvXltBLVphLXpdW0EtWmEtejAtOSstLl0qOlxcL1xcLy9cbiAgLCBwcm90b2NvbHJlID0gL14oW2Etel1bYS16MC05ListXSo6KT8oXFwvXFwvKT8oW1xcU1xcc10qKS9pXG4gICwgd2hpdGVzcGFjZSA9ICdbXFxcXHgwOVxcXFx4MEFcXFxceDBCXFxcXHgwQ1xcXFx4MERcXFxceDIwXFxcXHhBMFxcXFx1MTY4MFxcXFx1MTgwRVxcXFx1MjAwMFxcXFx1MjAwMVxcXFx1MjAwMlxcXFx1MjAwM1xcXFx1MjAwNFxcXFx1MjAwNVxcXFx1MjAwNlxcXFx1MjAwN1xcXFx1MjAwOFxcXFx1MjAwOVxcXFx1MjAwQVxcXFx1MjAyRlxcXFx1MjA1RlxcXFx1MzAwMFxcXFx1MjAyOFxcXFx1MjAyOVxcXFx1RkVGRl0nXG4gICwgbGVmdCA9IG5ldyBSZWdFeHAoJ14nKyB3aGl0ZXNwYWNlICsnKycpO1xuXG4vKipcbiAqIFRyaW0gYSBnaXZlbiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBTdHJpbmcgdG8gdHJpbS5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gdHJpbUxlZnQoc3RyKSB7XG4gIHJldHVybiAoc3RyID8gc3RyIDogJycpLnRvU3RyaW5nKCkucmVwbGFjZShsZWZ0LCAnJyk7XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBwYXJzZSBydWxlcyBmb3IgdGhlIFVSTCBwYXJzZXIsIGl0IGluZm9ybXMgdGhlIHBhcnNlclxuICogYWJvdXQ6XG4gKlxuICogMC4gVGhlIGNoYXIgaXQgTmVlZHMgdG8gcGFyc2UsIGlmIGl0J3MgYSBzdHJpbmcgaXQgc2hvdWxkIGJlIGRvbmUgdXNpbmdcbiAqICAgIGluZGV4T2YsIFJlZ0V4cCB1c2luZyBleGVjIGFuZCBOYU4gbWVhbnMgc2V0IGFzIGN1cnJlbnQgdmFsdWUuXG4gKiAxLiBUaGUgcHJvcGVydHkgd2Ugc2hvdWxkIHNldCB3aGVuIHBhcnNpbmcgdGhpcyB2YWx1ZS5cbiAqIDIuIEluZGljYXRpb24gaWYgaXQncyBiYWNrd2FyZHMgb3IgZm9yd2FyZCBwYXJzaW5nLCB3aGVuIHNldCBhcyBudW1iZXIgaXQnc1xuICogICAgdGhlIHZhbHVlIG9mIGV4dHJhIGNoYXJzIHRoYXQgc2hvdWxkIGJlIHNwbGl0IG9mZi5cbiAqIDMuIEluaGVyaXQgZnJvbSBsb2NhdGlvbiBpZiBub24gZXhpc3RpbmcgaW4gdGhlIHBhcnNlci5cbiAqIDQuIGB0b0xvd2VyQ2FzZWAgdGhlIHJlc3VsdGluZyB2YWx1ZS5cbiAqL1xudmFyIHJ1bGVzID0gW1xuICBbJyMnLCAnaGFzaCddLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgYmFjay5cbiAgWyc/JywgJ3F1ZXJ5J10sICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZyb20gdGhlIGJhY2suXG4gIGZ1bmN0aW9uIHNhbml0aXplKGFkZHJlc3MpIHsgICAgICAgICAgLy8gU2FuaXRpemUgd2hhdCBpcyBsZWZ0IG9mIHRoZSBhZGRyZXNzXG4gICAgcmV0dXJuIGFkZHJlc3MucmVwbGFjZSgnXFxcXCcsICcvJyk7XG4gIH0sXG4gIFsnLycsICdwYXRobmFtZSddLCAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCBmcm9tIHRoZSBiYWNrLlxuICBbJ0AnLCAnYXV0aCcsIDFdLCAgICAgICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZnJvbSB0aGUgZnJvbnQuXG4gIFtOYU4sICdob3N0JywgdW5kZWZpbmVkLCAxLCAxXSwgICAgICAgLy8gU2V0IGxlZnQgb3ZlciB2YWx1ZS5cbiAgWy86KFxcZCspJC8sICdwb3J0JywgdW5kZWZpbmVkLCAxXSwgICAgLy8gUmVnRXhwIHRoZSBiYWNrLlxuICBbTmFOLCAnaG9zdG5hbWUnLCB1bmRlZmluZWQsIDEsIDFdICAgIC8vIFNldCBsZWZ0IG92ZXIuXG5dO1xuXG4vKipcbiAqIFRoZXNlIHByb3BlcnRpZXMgc2hvdWxkIG5vdCBiZSBjb3BpZWQgb3IgaW5oZXJpdGVkIGZyb20uIFRoaXMgaXMgb25seSBuZWVkZWRcbiAqIGZvciBhbGwgbm9uIGJsb2IgVVJMJ3MgYXMgYSBibG9iIFVSTCBkb2VzIG5vdCBpbmNsdWRlIGEgaGFzaCwgb25seSB0aGVcbiAqIG9yaWdpbi5cbiAqXG4gKiBAdHlwZSB7T2JqZWN0fVxuICogQHByaXZhdGVcbiAqL1xudmFyIGlnbm9yZSA9IHsgaGFzaDogMSwgcXVlcnk6IDEgfTtcblxuLyoqXG4gKiBUaGUgbG9jYXRpb24gb2JqZWN0IGRpZmZlcnMgd2hlbiB5b3VyIGNvZGUgaXMgbG9hZGVkIHRocm91Z2ggYSBub3JtYWwgcGFnZSxcbiAqIFdvcmtlciBvciB0aHJvdWdoIGEgd29ya2VyIHVzaW5nIGEgYmxvYi4gQW5kIHdpdGggdGhlIGJsb2JibGUgYmVnaW5zIHRoZVxuICogdHJvdWJsZSBhcyB0aGUgbG9jYXRpb24gb2JqZWN0IHdpbGwgY29udGFpbiB0aGUgVVJMIG9mIHRoZSBibG9iLCBub3QgdGhlXG4gKiBsb2NhdGlvbiBvZiB0aGUgcGFnZSB3aGVyZSBvdXIgY29kZSBpcyBsb2FkZWQgaW4uIFRoZSBhY3R1YWwgb3JpZ2luIGlzXG4gKiBlbmNvZGVkIGluIHRoZSBgcGF0aG5hbWVgIHNvIHdlIGNhbiB0aGFua2Z1bGx5IGdlbmVyYXRlIGEgZ29vZCBcImRlZmF1bHRcIlxuICogbG9jYXRpb24gZnJvbSBpdCBzbyB3ZSBjYW4gZ2VuZXJhdGUgcHJvcGVyIHJlbGF0aXZlIFVSTCdzIGFnYWluLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fFN0cmluZ30gbG9jIE9wdGlvbmFsIGRlZmF1bHQgbG9jYXRpb24gb2JqZWN0LlxuICogQHJldHVybnMge09iamVjdH0gbG9sY2F0aW9uIG9iamVjdC5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gbG9sY2F0aW9uKGxvYykge1xuICB2YXIgZ2xvYmFsVmFyO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gd2luZG93O1xuICBlbHNlIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykgZ2xvYmFsVmFyID0gZ2xvYmFsO1xuICBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIGdsb2JhbFZhciA9IHNlbGY7XG4gIGVsc2UgZ2xvYmFsVmFyID0ge307XG5cbiAgdmFyIGxvY2F0aW9uID0gZ2xvYmFsVmFyLmxvY2F0aW9uIHx8IHt9O1xuICBsb2MgPSBsb2MgfHwgbG9jYXRpb247XG5cbiAgdmFyIGZpbmFsZGVzdGluYXRpb24gPSB7fVxuICAgICwgdHlwZSA9IHR5cGVvZiBsb2NcbiAgICAsIGtleTtcblxuICBpZiAoJ2Jsb2I6JyA9PT0gbG9jLnByb3RvY29sKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwodW5lc2NhcGUobG9jLnBhdGhuYW1lKSwge30pO1xuICB9IGVsc2UgaWYgKCdzdHJpbmcnID09PSB0eXBlKSB7XG4gICAgZmluYWxkZXN0aW5hdGlvbiA9IG5ldyBVcmwobG9jLCB7fSk7XG4gICAgZm9yIChrZXkgaW4gaWdub3JlKSBkZWxldGUgZmluYWxkZXN0aW5hdGlvbltrZXldO1xuICB9IGVsc2UgaWYgKCdvYmplY3QnID09PSB0eXBlKSB7XG4gICAgZm9yIChrZXkgaW4gbG9jKSB7XG4gICAgICBpZiAoa2V5IGluIGlnbm9yZSkgY29udGludWU7XG4gICAgICBmaW5hbGRlc3RpbmF0aW9uW2tleV0gPSBsb2Nba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoZmluYWxkZXN0aW5hdGlvbi5zbGFzaGVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGZpbmFsZGVzdGluYXRpb24uc2xhc2hlcyA9IHNsYXNoZXMudGVzdChsb2MuaHJlZik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZpbmFsZGVzdGluYXRpb247XG59XG5cbi8qKlxuICogQHR5cGVkZWYgUHJvdG9jb2xFeHRyYWN0XG4gKiBAdHlwZSBPYmplY3RcbiAqIEBwcm9wZXJ0eSB7U3RyaW5nfSBwcm90b2NvbCBQcm90b2NvbCBtYXRjaGVkIGluIHRoZSBVUkwsIGluIGxvd2VyY2FzZS5cbiAqIEBwcm9wZXJ0eSB7Qm9vbGVhbn0gc2xhc2hlcyBgdHJ1ZWAgaWYgcHJvdG9jb2wgaXMgZm9sbG93ZWQgYnkgXCIvL1wiLCBlbHNlIGBmYWxzZWAuXG4gKiBAcHJvcGVydHkge1N0cmluZ30gcmVzdCBSZXN0IG9mIHRoZSBVUkwgdGhhdCBpcyBub3QgcGFydCBvZiB0aGUgcHJvdG9jb2wuXG4gKi9cblxuLyoqXG4gKiBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGZyb20gYSBVUkwgd2l0aC93aXRob3V0IGRvdWJsZSBzbGFzaCAoXCIvL1wiKS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gYWRkcmVzcyBVUkwgd2Ugd2FudCB0byBleHRyYWN0IGZyb20uXG4gKiBAcmV0dXJuIHtQcm90b2NvbEV4dHJhY3R9IEV4dHJhY3RlZCBpbmZvcm1hdGlvbi5cbiAqIEBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGV4dHJhY3RQcm90b2NvbChhZGRyZXNzKSB7XG4gIGFkZHJlc3MgPSB0cmltTGVmdChhZGRyZXNzKTtcbiAgdmFyIG1hdGNoID0gcHJvdG9jb2xyZS5leGVjKGFkZHJlc3MpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvdG9jb2w6IG1hdGNoWzFdID8gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSA6ICcnLFxuICAgIHNsYXNoZXM6ICEhbWF0Y2hbMl0sXG4gICAgcmVzdDogbWF0Y2hbM11cbiAgfTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIGEgcmVsYXRpdmUgVVJMIHBhdGhuYW1lIGFnYWluc3QgYSBiYXNlIFVSTCBwYXRobmFtZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcmVsYXRpdmUgUGF0aG5hbWUgb2YgdGhlIHJlbGF0aXZlIFVSTC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBiYXNlIFBhdGhuYW1lIG9mIHRoZSBiYXNlIFVSTC5cbiAqIEByZXR1cm4ge1N0cmluZ30gUmVzb2x2ZWQgcGF0aG5hbWUuXG4gKiBAcHJpdmF0ZVxuICovXG5mdW5jdGlvbiByZXNvbHZlKHJlbGF0aXZlLCBiYXNlKSB7XG4gIGlmIChyZWxhdGl2ZSA9PT0gJycpIHJldHVybiBiYXNlO1xuXG4gIHZhciBwYXRoID0gKGJhc2UgfHwgJy8nKS5zcGxpdCgnLycpLnNsaWNlKDAsIC0xKS5jb25jYXQocmVsYXRpdmUuc3BsaXQoJy8nKSlcbiAgICAsIGkgPSBwYXRoLmxlbmd0aFxuICAgICwgbGFzdCA9IHBhdGhbaSAtIDFdXG4gICAgLCB1bnNoaWZ0ID0gZmFsc2VcbiAgICAsIHVwID0gMDtcblxuICB3aGlsZSAoaS0tKSB7XG4gICAgaWYgKHBhdGhbaV0gPT09ICcuJykge1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgfSBlbHNlIGlmIChwYXRoW2ldID09PSAnLi4nKSB7XG4gICAgICBwYXRoLnNwbGljZShpLCAxKTtcbiAgICAgIHVwKys7XG4gICAgfSBlbHNlIGlmICh1cCkge1xuICAgICAgaWYgKGkgPT09IDApIHVuc2hpZnQgPSB0cnVlO1xuICAgICAgcGF0aC5zcGxpY2UoaSwgMSk7XG4gICAgICB1cC0tO1xuICAgIH1cbiAgfVxuXG4gIGlmICh1bnNoaWZ0KSBwYXRoLnVuc2hpZnQoJycpO1xuICBpZiAobGFzdCA9PT0gJy4nIHx8IGxhc3QgPT09ICcuLicpIHBhdGgucHVzaCgnJyk7XG5cbiAgcmV0dXJuIHBhdGguam9pbignLycpO1xufVxuXG4vKipcbiAqIFRoZSBhY3R1YWwgVVJMIGluc3RhbmNlLiBJbnN0ZWFkIG9mIHJldHVybmluZyBhbiBvYmplY3Qgd2UndmUgb3B0ZWQtaW4gdG9cbiAqIGNyZWF0ZSBhbiBhY3R1YWwgY29uc3RydWN0b3IgYXMgaXQncyBtdWNoIG1vcmUgbWVtb3J5IGVmZmljaWVudCBhbmRcbiAqIGZhc3RlciBhbmQgaXQgcGxlYXNlcyBteSBPQ0QuXG4gKlxuICogSXQgaXMgd29ydGggbm90aW5nIHRoYXQgd2Ugc2hvdWxkIG5vdCB1c2UgYFVSTGAgYXMgY2xhc3MgbmFtZSB0byBwcmV2ZW50XG4gKiBjbGFzaGVzIHdpdGggdGhlIGdsb2JhbCBVUkwgaW5zdGFuY2UgdGhhdCBnb3QgaW50cm9kdWNlZCBpbiBicm93c2Vycy5cbiAqXG4gKiBAY29uc3RydWN0b3JcbiAqIEBwYXJhbSB7U3RyaW5nfSBhZGRyZXNzIFVSTCB3ZSB3YW50IHRvIHBhcnNlLlxuICogQHBhcmFtIHtPYmplY3R8U3RyaW5nfSBbbG9jYXRpb25dIExvY2F0aW9uIGRlZmF1bHRzIGZvciByZWxhdGl2ZSBwYXRocy5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gW3BhcnNlcl0gUGFyc2VyIGZvciB0aGUgcXVlcnkgc3RyaW5nLlxuICogQHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gVXJsKGFkZHJlc3MsIGxvY2F0aW9uLCBwYXJzZXIpIHtcbiAgYWRkcmVzcyA9IHRyaW1MZWZ0KGFkZHJlc3MpO1xuXG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBVcmwpKSB7XG4gICAgcmV0dXJuIG5ldyBVcmwoYWRkcmVzcywgbG9jYXRpb24sIHBhcnNlcik7XG4gIH1cblxuICB2YXIgcmVsYXRpdmUsIGV4dHJhY3RlZCwgcGFyc2UsIGluc3RydWN0aW9uLCBpbmRleCwga2V5XG4gICAgLCBpbnN0cnVjdGlvbnMgPSBydWxlcy5zbGljZSgpXG4gICAgLCB0eXBlID0gdHlwZW9mIGxvY2F0aW9uXG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBpID0gMDtcblxuICAvL1xuICAvLyBUaGUgZm9sbG93aW5nIGlmIHN0YXRlbWVudHMgYWxsb3dzIHRoaXMgbW9kdWxlIHR3byBoYXZlIGNvbXBhdGliaWxpdHkgd2l0aFxuICAvLyAyIGRpZmZlcmVudCBBUEk6XG4gIC8vXG4gIC8vIDEuIE5vZGUuanMncyBgdXJsLnBhcnNlYCBhcGkgd2hpY2ggYWNjZXB0cyBhIFVSTCwgYm9vbGVhbiBhcyBhcmd1bWVudHNcbiAgLy8gICAgd2hlcmUgdGhlIGJvb2xlYW4gaW5kaWNhdGVzIHRoYXQgdGhlIHF1ZXJ5IHN0cmluZyBzaG91bGQgYWxzbyBiZSBwYXJzZWQuXG4gIC8vXG4gIC8vIDIuIFRoZSBgVVJMYCBpbnRlcmZhY2Ugb2YgdGhlIGJyb3dzZXIgd2hpY2ggYWNjZXB0cyBhIFVSTCwgb2JqZWN0IGFzXG4gIC8vICAgIGFyZ3VtZW50cy4gVGhlIHN1cHBsaWVkIG9iamVjdCB3aWxsIGJlIHVzZWQgYXMgZGVmYXVsdCB2YWx1ZXMgLyBmYWxsLWJhY2tcbiAgLy8gICAgZm9yIHJlbGF0aXZlIHBhdGhzLlxuICAvL1xuICBpZiAoJ29iamVjdCcgIT09IHR5cGUgJiYgJ3N0cmluZycgIT09IHR5cGUpIHtcbiAgICBwYXJzZXIgPSBsb2NhdGlvbjtcbiAgICBsb2NhdGlvbiA9IG51bGw7XG4gIH1cblxuICBpZiAocGFyc2VyICYmICdmdW5jdGlvbicgIT09IHR5cGVvZiBwYXJzZXIpIHBhcnNlciA9IHFzLnBhcnNlO1xuXG4gIGxvY2F0aW9uID0gbG9sY2F0aW9uKGxvY2F0aW9uKTtcblxuICAvL1xuICAvLyBFeHRyYWN0IHByb3RvY29sIGluZm9ybWF0aW9uIGJlZm9yZSBydW5uaW5nIHRoZSBpbnN0cnVjdGlvbnMuXG4gIC8vXG4gIGV4dHJhY3RlZCA9IGV4dHJhY3RQcm90b2NvbChhZGRyZXNzIHx8ICcnKTtcbiAgcmVsYXRpdmUgPSAhZXh0cmFjdGVkLnByb3RvY29sICYmICFleHRyYWN0ZWQuc2xhc2hlcztcbiAgdXJsLnNsYXNoZXMgPSBleHRyYWN0ZWQuc2xhc2hlcyB8fCByZWxhdGl2ZSAmJiBsb2NhdGlvbi5zbGFzaGVzO1xuICB1cmwucHJvdG9jb2wgPSBleHRyYWN0ZWQucHJvdG9jb2wgfHwgbG9jYXRpb24ucHJvdG9jb2wgfHwgJyc7XG4gIGFkZHJlc3MgPSBleHRyYWN0ZWQucmVzdDtcblxuICAvL1xuICAvLyBXaGVuIHRoZSBhdXRob3JpdHkgY29tcG9uZW50IGlzIGFic2VudCB0aGUgVVJMIHN0YXJ0cyB3aXRoIGEgcGF0aFxuICAvLyBjb21wb25lbnQuXG4gIC8vXG4gIGlmICghZXh0cmFjdGVkLnNsYXNoZXMpIGluc3RydWN0aW9uc1szXSA9IFsvKC4qKS8sICdwYXRobmFtZSddO1xuXG4gIGZvciAoOyBpIDwgaW5zdHJ1Y3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSBpbnN0cnVjdGlvbnNbaV07XG5cbiAgICBpZiAodHlwZW9mIGluc3RydWN0aW9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBhZGRyZXNzID0gaW5zdHJ1Y3Rpb24oYWRkcmVzcyk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBwYXJzZSA9IGluc3RydWN0aW9uWzBdO1xuICAgIGtleSA9IGluc3RydWN0aW9uWzFdO1xuXG4gICAgaWYgKHBhcnNlICE9PSBwYXJzZSkge1xuICAgICAgdXJsW2tleV0gPSBhZGRyZXNzO1xuICAgIH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBwYXJzZSkge1xuICAgICAgaWYgKH4oaW5kZXggPSBhZGRyZXNzLmluZGV4T2YocGFyc2UpKSkge1xuICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZiBpbnN0cnVjdGlvblsyXSkge1xuICAgICAgICAgIHVybFtrZXldID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoaW5kZXggKyBpbnN0cnVjdGlvblsyXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdXJsW2tleV0gPSBhZGRyZXNzLnNsaWNlKGluZGV4KTtcbiAgICAgICAgICBhZGRyZXNzID0gYWRkcmVzcy5zbGljZSgwLCBpbmRleCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKChpbmRleCA9IHBhcnNlLmV4ZWMoYWRkcmVzcykpKSB7XG4gICAgICB1cmxba2V5XSA9IGluZGV4WzFdO1xuICAgICAgYWRkcmVzcyA9IGFkZHJlc3Muc2xpY2UoMCwgaW5kZXguaW5kZXgpO1xuICAgIH1cblxuICAgIHVybFtrZXldID0gdXJsW2tleV0gfHwgKFxuICAgICAgcmVsYXRpdmUgJiYgaW5zdHJ1Y3Rpb25bM10gPyBsb2NhdGlvbltrZXldIHx8ICcnIDogJydcbiAgICApO1xuXG4gICAgLy9cbiAgICAvLyBIb3N0bmFtZSwgaG9zdCBhbmQgcHJvdG9jb2wgc2hvdWxkIGJlIGxvd2VyY2FzZWQgc28gdGhleSBjYW4gYmUgdXNlZCB0b1xuICAgIC8vIGNyZWF0ZSBhIHByb3BlciBgb3JpZ2luYC5cbiAgICAvL1xuICAgIGlmIChpbnN0cnVjdGlvbls0XSkgdXJsW2tleV0gPSB1cmxba2V5XS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgLy9cbiAgLy8gQWxzbyBwYXJzZSB0aGUgc3VwcGxpZWQgcXVlcnkgc3RyaW5nIGluIHRvIGFuIG9iamVjdC4gSWYgd2UncmUgc3VwcGxpZWRcbiAgLy8gd2l0aCBhIGN1c3RvbSBwYXJzZXIgYXMgZnVuY3Rpb24gdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBidWlsZC1pblxuICAvLyBwYXJzZXIuXG4gIC8vXG4gIGlmIChwYXJzZXIpIHVybC5xdWVyeSA9IHBhcnNlcih1cmwucXVlcnkpO1xuXG4gIC8vXG4gIC8vIElmIHRoZSBVUkwgaXMgcmVsYXRpdmUsIHJlc29sdmUgdGhlIHBhdGhuYW1lIGFnYWluc3QgdGhlIGJhc2UgVVJMLlxuICAvL1xuICBpZiAoXG4gICAgICByZWxhdGl2ZVxuICAgICYmIGxvY2F0aW9uLnNsYXNoZXNcbiAgICAmJiB1cmwucGF0aG5hbWUuY2hhckF0KDApICE9PSAnLydcbiAgICAmJiAodXJsLnBhdGhuYW1lICE9PSAnJyB8fCBsb2NhdGlvbi5wYXRobmFtZSAhPT0gJycpXG4gICkge1xuICAgIHVybC5wYXRobmFtZSA9IHJlc29sdmUodXJsLnBhdGhuYW1lLCBsb2NhdGlvbi5wYXRobmFtZSk7XG4gIH1cblxuICAvL1xuICAvLyBXZSBzaG91bGQgbm90IGFkZCBwb3J0IG51bWJlcnMgaWYgdGhleSBhcmUgYWxyZWFkeSB0aGUgZGVmYXVsdCBwb3J0IG51bWJlclxuICAvLyBmb3IgYSBnaXZlbiBwcm90b2NvbC4gQXMgdGhlIGhvc3QgYWxzbyBjb250YWlucyB0aGUgcG9ydCBudW1iZXIgd2UncmUgZ29pbmdcbiAgLy8gb3ZlcnJpZGUgaXQgd2l0aCB0aGUgaG9zdG5hbWUgd2hpY2ggY29udGFpbnMgbm8gcG9ydCBudW1iZXIuXG4gIC8vXG4gIGlmICghcmVxdWlyZWQodXJsLnBvcnQsIHVybC5wcm90b2NvbCkpIHtcbiAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZTtcbiAgICB1cmwucG9ydCA9ICcnO1xuICB9XG5cbiAgLy9cbiAgLy8gUGFyc2UgZG93biB0aGUgYGF1dGhgIGZvciB0aGUgdXNlcm5hbWUgYW5kIHBhc3N3b3JkLlxuICAvL1xuICB1cmwudXNlcm5hbWUgPSB1cmwucGFzc3dvcmQgPSAnJztcbiAgaWYgKHVybC5hdXRoKSB7XG4gICAgaW5zdHJ1Y3Rpb24gPSB1cmwuYXV0aC5zcGxpdCgnOicpO1xuICAgIHVybC51c2VybmFtZSA9IGluc3RydWN0aW9uWzBdIHx8ICcnO1xuICAgIHVybC5wYXNzd29yZCA9IGluc3RydWN0aW9uWzFdIHx8ICcnO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICAvL1xuICAvLyBUaGUgaHJlZiBpcyBqdXN0IHRoZSBjb21waWxlZCByZXN1bHQuXG4gIC8vXG4gIHVybC5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XG59XG5cbi8qKlxuICogVGhpcyBpcyBjb252ZW5pZW5jZSBtZXRob2QgZm9yIGNoYW5naW5nIHByb3BlcnRpZXMgaW4gdGhlIFVSTCBpbnN0YW5jZSB0b1xuICogaW5zdXJlIHRoYXQgdGhleSBhbGwgcHJvcGFnYXRlIGNvcnJlY3RseS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFydCAgICAgICAgICBQcm9wZXJ0eSB3ZSBuZWVkIHRvIGFkanVzdC5cbiAqIEBwYXJhbSB7TWl4ZWR9IHZhbHVlICAgICAgICAgIFRoZSBuZXdseSBhc3NpZ25lZCB2YWx1ZS5cbiAqIEBwYXJhbSB7Qm9vbGVhbnxGdW5jdGlvbn0gZm4gIFdoZW4gc2V0dGluZyB0aGUgcXVlcnksIGl0IHdpbGwgYmUgdGhlIGZ1bmN0aW9uXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VkIHRvIHBhcnNlIHRoZSBxdWVyeS5cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdoZW4gc2V0dGluZyB0aGUgcHJvdG9jb2wsIGRvdWJsZSBzbGFzaCB3aWxsIGJlXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVkIGZyb20gdGhlIGZpbmFsIHVybCBpZiBpdCBpcyB0cnVlLlxuICogQHJldHVybnMge1VSTH0gVVJMIGluc3RhbmNlIGZvciBjaGFpbmluZy5cbiAqIEBwdWJsaWNcbiAqL1xuZnVuY3Rpb24gc2V0KHBhcnQsIHZhbHVlLCBmbikge1xuICB2YXIgdXJsID0gdGhpcztcblxuICBzd2l0Y2ggKHBhcnQpIHtcbiAgICBjYXNlICdxdWVyeSc6XG4gICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgdmFsdWUgPSAoZm4gfHwgcXMucGFyc2UpKHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ3BvcnQnOlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG5cbiAgICAgIGlmICghcmVxdWlyZWQodmFsdWUsIHVybC5wcm90b2NvbCkpIHtcbiAgICAgICAgdXJsLmhvc3QgPSB1cmwuaG9zdG5hbWU7XG4gICAgICAgIHVybFtwYXJ0XSA9ICcnO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZSkge1xuICAgICAgICB1cmwuaG9zdCA9IHVybC5ob3N0bmFtZSArJzonKyB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdob3N0bmFtZSc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKHVybC5wb3J0KSB2YWx1ZSArPSAnOicrIHVybC5wb3J0O1xuICAgICAgdXJsLmhvc3QgPSB2YWx1ZTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnaG9zdCc6XG4gICAgICB1cmxbcGFydF0gPSB2YWx1ZTtcblxuICAgICAgaWYgKC86XFxkKyQvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgIHZhbHVlID0gdmFsdWUuc3BsaXQoJzonKTtcbiAgICAgICAgdXJsLnBvcnQgPSB2YWx1ZS5wb3AoKTtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWUuam9pbignOicpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsLmhvc3RuYW1lID0gdmFsdWU7XG4gICAgICAgIHVybC5wb3J0ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAncHJvdG9jb2wnOlxuICAgICAgdXJsLnByb3RvY29sID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHVybC5zbGFzaGVzID0gIWZuO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdwYXRobmFtZSc6XG4gICAgY2FzZSAnaGFzaCc6XG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBwYXJ0ID09PSAncGF0aG5hbWUnID8gJy8nIDogJyMnO1xuICAgICAgICB1cmxbcGFydF0gPSB2YWx1ZS5jaGFyQXQoMCkgIT09IGNoYXIgPyBjaGFyICsgdmFsdWUgOiB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVybFtwYXJ0XSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdXJsW3BhcnRdID0gdmFsdWU7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHJ1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGlucyA9IHJ1bGVzW2ldO1xuXG4gICAgaWYgKGluc1s0XSkgdXJsW2luc1sxXV0gPSB1cmxbaW5zWzFdXS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgdXJsLm9yaWdpbiA9IHVybC5wcm90b2NvbCAmJiB1cmwuaG9zdCAmJiB1cmwucHJvdG9jb2wgIT09ICdmaWxlOidcbiAgICA/IHVybC5wcm90b2NvbCArJy8vJysgdXJsLmhvc3RcbiAgICA6ICdudWxsJztcblxuICB1cmwuaHJlZiA9IHVybC50b1N0cmluZygpO1xuXG4gIHJldHVybiB1cmw7XG59XG5cbi8qKlxuICogVHJhbnNmb3JtIHRoZSBwcm9wZXJ0aWVzIGJhY2sgaW4gdG8gYSB2YWxpZCBhbmQgZnVsbCBVUkwgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHN0cmluZ2lmeSBPcHRpb25hbCBxdWVyeSBzdHJpbmdpZnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7U3RyaW5nfSBDb21waWxlZCB2ZXJzaW9uIG9mIHRoZSBVUkwuXG4gKiBAcHVibGljXG4gKi9cbmZ1bmN0aW9uIHRvU3RyaW5nKHN0cmluZ2lmeSkge1xuICBpZiAoIXN0cmluZ2lmeSB8fCAnZnVuY3Rpb24nICE9PSB0eXBlb2Ygc3RyaW5naWZ5KSBzdHJpbmdpZnkgPSBxcy5zdHJpbmdpZnk7XG5cbiAgdmFyIHF1ZXJ5XG4gICAgLCB1cmwgPSB0aGlzXG4gICAgLCBwcm90b2NvbCA9IHVybC5wcm90b2NvbDtcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuY2hhckF0KHByb3RvY29sLmxlbmd0aCAtIDEpICE9PSAnOicpIHByb3RvY29sICs9ICc6JztcblxuICB2YXIgcmVzdWx0ID0gcHJvdG9jb2wgKyAodXJsLnNsYXNoZXMgPyAnLy8nIDogJycpO1xuXG4gIGlmICh1cmwudXNlcm5hbWUpIHtcbiAgICByZXN1bHQgKz0gdXJsLnVzZXJuYW1lO1xuICAgIGlmICh1cmwucGFzc3dvcmQpIHJlc3VsdCArPSAnOicrIHVybC5wYXNzd29yZDtcbiAgICByZXN1bHQgKz0gJ0AnO1xuICB9XG5cbiAgcmVzdWx0ICs9IHVybC5ob3N0ICsgdXJsLnBhdGhuYW1lO1xuXG4gIHF1ZXJ5ID0gJ29iamVjdCcgPT09IHR5cGVvZiB1cmwucXVlcnkgPyBzdHJpbmdpZnkodXJsLnF1ZXJ5KSA6IHVybC5xdWVyeTtcbiAgaWYgKHF1ZXJ5KSByZXN1bHQgKz0gJz8nICE9PSBxdWVyeS5jaGFyQXQoMCkgPyAnPycrIHF1ZXJ5IDogcXVlcnk7XG5cbiAgaWYgKHVybC5oYXNoKSByZXN1bHQgKz0gdXJsLmhhc2g7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuVXJsLnByb3RvdHlwZSA9IHsgc2V0OiBzZXQsIHRvU3RyaW5nOiB0b1N0cmluZyB9O1xuXG4vL1xuLy8gRXhwb3NlIHRoZSBVUkwgcGFyc2VyIGFuZCBzb21lIGFkZGl0aW9uYWwgcHJvcGVydGllcyB0aGF0IG1pZ2h0IGJlIHVzZWZ1bCBmb3Jcbi8vIG90aGVycyBvciB0ZXN0aW5nLlxuLy9cblVybC5leHRyYWN0UHJvdG9jb2wgPSBleHRyYWN0UHJvdG9jb2w7XG5VcmwubG9jYXRpb24gPSBsb2xjYXRpb247XG5VcmwudHJpbUxlZnQgPSB0cmltTGVmdDtcblVybC5xcyA9IHFzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFVybDtcbiIsInZhciBfX3NlbGZfXyA9IChmdW5jdGlvbiAocm9vdCkge1xuZnVuY3Rpb24gRigpIHtcbnRoaXMuZmV0Y2ggPSBmYWxzZTtcbnRoaXMuRE9NRXhjZXB0aW9uID0gcm9vdC5ET01FeGNlcHRpb25cbn1cbkYucHJvdG90eXBlID0gcm9vdDtcbnJldHVybiBuZXcgRigpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuKGZ1bmN0aW9uKHNlbGYpIHtcblxudmFyIGlycmVsZXZhbnQgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6XG4gICAgICAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJlxuICAgICAgJ0Jsb2InIGluIHNlbGYgJiZcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfTtcblxuICBmdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXTtcbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYik7XG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aCk7XG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKTtcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcik7XG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keTtcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmw7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHM7XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kO1xuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZTtcbiAgICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsO1xuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXQ7XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJztcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKTtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGw7XG4gICAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbDtcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbDtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSk7XG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5XG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKTtcbiAgICBwcmVQcm9jZXNzZWRIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKCk7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzO1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snO1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdCk7XG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9O1xuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSk7XG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcic7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH07XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdO1xuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH07XG5cbiAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBzZWxmLkRPTUV4Y2VwdGlvbjtcbiAgdHJ5IHtcbiAgICBuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH07XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGV4cG9ydHMuRE9NRXhjZXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG5cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdCk7XG4gICAgfSlcbiAgfVxuXG4gIGZldGNoLnBvbHlmaWxsID0gdHJ1ZTtcblxuICBpZiAoIXNlbGYuZmV0Y2gpIHtcbiAgICBzZWxmLmZldGNoID0gZmV0Y2g7XG4gICAgc2VsZi5IZWFkZXJzID0gSGVhZGVycztcbiAgICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICAgIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgfVxuXG4gIGV4cG9ydHMuSGVhZGVycyA9IEhlYWRlcnM7XG4gIGV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIGV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgZXhwb3J0cy5mZXRjaCA9IGZldGNoO1xuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KHt9KSk7XG59KShfX3NlbGZfXyk7XG5kZWxldGUgX19zZWxmX18uZmV0Y2gucG9seWZpbGxcbmV4cG9ydHMgPSBfX3NlbGZfXy5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuZGVmYXVsdCA9IF9fc2VsZl9fLmZldGNoIC8vIEZvciBUeXBlU2NyaXB0IGNvbnN1bWVycyB3aXRob3V0IGVzTW9kdWxlSW50ZXJvcC5cbmV4cG9ydHMuZmV0Y2ggPSBfX3NlbGZfXy5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCB7ZmV0Y2h9IGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5IZWFkZXJzID0gX19zZWxmX18uSGVhZGVyc1xuZXhwb3J0cy5SZXF1ZXN0ID0gX19zZWxmX18uUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IF9fc2VsZl9fLlJlc3BvbnNlXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNcbiIsIid1c2Ugc3RyaWN0J1xuXG52YXIgQVBJVmVyc2lvbiA9ICcyLjcnXG5cbnZhciBidG9hID0gcmVxdWlyZSgnYnRvYS1saXRlJylcbnZhciBlcnJvcnMgPSByZXF1aXJlKCcuL2Vycm9ycycpXG52YXIgcXVlcnkgPSByZXF1aXJlKCcuL3F1ZXJ5JylcbnZhciB2YWx1ZXMgPSByZXF1aXJlKCcuL3ZhbHVlcycpXG52YXIganNvbiA9IHJlcXVpcmUoJy4vX2pzb24nKVxudmFyIFJlcXVlc3RSZXN1bHQgPSByZXF1aXJlKCcuL1JlcXVlc3RSZXN1bHQnKVxudmFyIHV0aWwgPSByZXF1aXJlKCcuL191dGlsJylcbnZhciBQYWdlSGVscGVyID0gcmVxdWlyZSgnLi9QYWdlSGVscGVyJylcbnZhciBwYXJzZSA9IHJlcXVpcmUoJ3VybC1wYXJzZScpXG5cbi8qKlxuICogVGhlIGNhbGxiYWNrIHRoYXQgd2lsbCBiZSBleGVjdXRlZCBhZnRlciBldmVyeSBjb21wbGV0ZWQgcmVxdWVzdC5cbiAqXG4gKiBAY2FsbGJhY2sgQ2xpZW50fm9ic2VydmVyQ2FsbGJhY2tcbiAqIEBwYXJhbSB7UmVxdWVzdFJlc3VsdH0gcmVzXG4gKi9cblxuLyoqXG4gKiBBIGNsaWVudCBmb3IgaW50ZXJhY3Rpbmcgd2l0aCBGYXVuYURCLlxuICpcbiAqIFVzZXJzIHdpbGwgbWFpbmx5IGNhbGwgdGhlIHtAbGluayBDbGllbnQjcXVlcnl9IG1ldGhvZCB0byBleGVjdXRlIHF1ZXJpZXMuXG4gKlxuICogU2VlIHRoZSBbRmF1bmFEQiBEb2N1bWVudGF0aW9uXShodHRwczovL2ZhdW5hLmNvbS9kb2N1bWVudGF0aW9uKSBmb3IgZGV0YWlsZWQgZXhhbXBsZXMuXG4gKlxuICogQWxsIG1ldGhvZHMgcmV0dXJuIHByb21pc2VzIGNvbnRhaW5pbmcgYSBKU09OIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIEZhdW5hREIgcmVzcG9uc2UuXG4gKiBMaXRlcmFsIHR5cGVzIGluIHRoZSByZXNwb25zZSBvYmplY3Qgd2lsbCByZW1haW4gYXMgc3RyaW5ncywgQXJyYXlzLCBhbmQgb2JqZWN0cy5cbiAqIEZhdW5hREIgdHlwZXMsIHN1Y2ggYXMge0BsaW5rIFJlZn0sIHtAbGluayBTZXRSZWZ9LCB7QGxpbmsgRmF1bmFUaW1lfSwgYW5kIHtAbGluayBGYXVuYURhdGV9IHdpbGxcbiAqIGJlIGNvbnZlcnRlZCBpbnRvIHRoZSBhcHByb3ByaWF0ZSBvYmplY3QuXG4gKlxuICogKFNvIGlmIGEgcmVzcG9uc2UgY29udGFpbnMgYHsgXCJAcmVmXCI6IFwiY29sbGVjdGlvbnMvZnJvZ3MvMTIzXCIgfWAsXG4gKiBpdCB3aWxsIGJlIHJldHVybmVkIGFzIGBuZXcgUmVmKFwiY29sbGVjdGlvbnMvZnJvZ3MvMTIzXCIpYC4pXG4gKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0gez9PYmplY3R9IG9wdGlvbnNcbiAqICAgT2JqZWN0IHRoYXQgY29uZmlndXJlcyB0aGlzIEZhdW5hREIgY2xpZW50LlxuICogQHBhcmFtIHs/c3RyaW5nfSBvcHRpb25zLmRvbWFpblxuICogICBCYXNlIFVSTCBmb3IgdGhlIEZhdW5hREIgc2VydmVyLlxuICogQHBhcmFtIHs/eyBzdHJpbmc6IHN0cmluZyB9fSBvcHRpb25zLmhlYWRlcnNcbiAqICAgQmFzZSBVUkwgZm9yIHRoZSBGYXVuYURCIHNlcnZlci5cbiAqIEBwYXJhbSB7PygnaHR0cCd8J2h0dHBzJyl9IG9wdGlvbnMuc2NoZW1lXG4gKiAgIEhUVFAgc2NoZW1lIHRvIHVzZS5cbiAqIEBwYXJhbSB7P251bWJlcn0gb3B0aW9ucy5wb3J0XG4gKiAgIFBvcnQgb2YgdGhlIEZhdW5hREIgc2VydmVyLlxuICogQHBhcmFtIHs/c3RyaW5nfSBvcHRpb25zLnNlY3JldCBGYXVuYURCIHNlY3JldCAoc2VlIFtSZWZlcmVuY2UgRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vaW50cm8vc2VjdXJpdHkpKVxuICogQHBhcmFtIHs/bnVtYmVyfSBvcHRpb25zLnRpbWVvdXQgUmVhZCB0aW1lb3V0IGluIHNlY29uZHMuXG4gKiBAcGFyYW0gez9DbGllbnR+b2JzZXJ2ZXJDYWxsYmFja30gb3B0aW9ucy5vYnNlcnZlclxuICogICBDYWxsYmFjayB0aGF0IHdpbGwgYmUgY2FsbGVkIGFmdGVyIGV2ZXJ5IGNvbXBsZXRlZCByZXF1ZXN0LlxuICogQHBhcmFtIHs/Ym9vbGVhbn0gb3B0aW9ucy5rZWVwQWxpdmVcbiAqICAgQ29uZmlndXJlcyBodHRwL2h0dHBzIGtlZXBBbGl2ZSBvcHRpb24gKGlnbm9yZWQgaW4gYnJvd3NlciBlbnZpcm9ubWVudHMpXG4gKiBAcGFyYW0gez9mZXRjaH0gb3B0aW9ucy5mZXRjaFxuICogICBhIGZldGNoIGNvbXBhdGlibGUgW0FQSV0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSSkgZm9yIG1ha2luZyBhIHJlcXVlc3RcbiAqIEBwYXJhbSB7P251bWJlcn0gb3B0aW9ucy5xdWVyeVRpbWVvdXRcbiAqICAgU2V0cyB0aGUgbWF4aW11bSBhbW91bnQgb2YgdGltZSAoaW4gbWlsbGlzZWNvbmRzKSBmb3IgcXVlcnkgZXhlY3V0aW9uIG9uIHRoZSBzZXJ2ZXIsXG4gKi9cbmZ1bmN0aW9uIENsaWVudChvcHRpb25zKSB7XG4gIHZhciBpc05vZGVFbnYgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJ1xuICB2YXIgb3B0cyA9IHV0aWwuYXBwbHlEZWZhdWx0cyhvcHRpb25zLCB7XG4gICAgZG9tYWluOiAnZGIuZmF1bmEuY29tJyxcbiAgICBzY2hlbWU6ICdodHRwcycsXG4gICAgcG9ydDogbnVsbCxcbiAgICBzZWNyZXQ6IG51bGwsXG4gICAgdGltZW91dDogNjAsXG4gICAgb2JzZXJ2ZXI6IG51bGwsXG4gICAga2VlcEFsaXZlOiB0cnVlLFxuICAgIGhlYWRlcnM6IHt9LFxuICAgIGZldGNoOiB1bmRlZmluZWQsXG4gICAgcXVlcnlUaW1lb3V0OiBudWxsLFxuICB9KVxuICB2YXIgaXNIdHRwcyA9IG9wdHMuc2NoZW1lID09PSAnaHR0cHMnXG5cbiAgaWYgKG9wdHMucG9ydCA9PT0gbnVsbCkge1xuICAgIG9wdHMucG9ydCA9IGlzSHR0cHMgPyA0NDMgOiA4MFxuICB9XG5cbiAgdGhpcy5fYmFzZVVybCA9IG9wdHMuc2NoZW1lICsgJzovLycgKyBvcHRzLmRvbWFpbiArICc6JyArIG9wdHMucG9ydFxuICB0aGlzLl90aW1lb3V0ID0gTWF0aC5mbG9vcihvcHRzLnRpbWVvdXQgKiAxMDAwKVxuICB0aGlzLl9zZWNyZXQgPSBvcHRzLnNlY3JldFxuICB0aGlzLl9vYnNlcnZlciA9IG9wdHMub2JzZXJ2ZXJcbiAgdGhpcy5fbGFzdFNlZW4gPSBudWxsXG4gIHRoaXMuX2hlYWRlcnMgPSBvcHRzLmhlYWRlcnNcbiAgdGhpcy5fZmV0Y2ggPSBvcHRzLmZldGNoIHx8IHJlcXVpcmUoJ2Nyb3NzLWZldGNoJylcbiAgdGhpcy5fcXVlcnlUaW1lb3V0ID0gb3B0cy5xdWVyeVRpbWVvdXRcblxuICBpZiAoaXNOb2RlRW52ICYmIG9wdHMua2VlcEFsaXZlKSB7XG4gICAgdGhpcy5fa2VlcEFsaXZlRW5hYmxlZEFnZW50ID0gbmV3IChpc0h0dHBzXG4gICAgICA/IHJlcXVpcmUoJ2h0dHBzJylcbiAgICAgIDogcmVxdWlyZSgnaHR0cCcpXG4gICAgKS5BZ2VudCh7IGtlZXBBbGl2ZTogdHJ1ZSB9KVxuICB9XG59XG5cbi8qKlxuICogRXhlY3V0ZXMgYSBxdWVyeSB2aWEgdGhlIEZhdW5hREIgUXVlcnkgQVBJLlxuICogU2VlIHRoZSBbZG9jc10oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpKSxcbiAqIGFuZCB0aGUgcXVlcnkgZnVuY3Rpb25zIGluIHRoaXMgZG9jdW1lbnRhdGlvbi5cbiAqIEBwYXJhbSBleHByZXNzaW9uIHtFeHByfVxuICogICBUaGUgcXVlcnkgdG8gZXhlY3V0ZS4gQ3JlYXRlZCBmcm9tIHF1ZXJ5IGZ1bmN0aW9ucyBzdWNoIGFzIHtAbGluayBhZGR9LlxuICogQHBhcmFtIHs/T2JqZWN0fSBvcHRpb25zXG4gKiAgIE9iamVjdCB0aGF0IGNvbmZpZ3VyZXMgdGhlIGN1cnJlbnQgcXVlcnksIG92ZXJyaWRpbmcgRmF1bmFEQiBjbGllbnQgb3B0aW9ucy5cbiAqIEBwYXJhbSB7P3N0cmluZ30gb3B0aW9ucy5zZWNyZXQgRmF1bmFEQiBzZWNyZXQgKHNlZSBbUmVmZXJlbmNlIERvY3VtZW50YXRpb25dKGh0dHBzOi8vYXBwLmZhdW5hLmNvbS9kb2N1bWVudGF0aW9uL2ludHJvL3NlY3VyaXR5KSlcbiAqIEByZXR1cm4ge2V4dGVybmFsOlByb21pc2U8T2JqZWN0Pn0gRmF1bmFEQiByZXNwb25zZSBvYmplY3QuXG4gKi9cblxuQ2xpZW50LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uKGV4cHJlc3Npb24sIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHRoaXMuX2V4ZWN1dGUoJ1BPU1QnLCAnJywgcXVlcnkud3JhcChleHByZXNzaW9uKSwgbnVsbCwgb3B0aW9ucylcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEge0BsaW5rIFBhZ2VIZWxwZXJ9IGZvciB0aGUgZ2l2ZW4gUXVlcnkgZXhwcmVzc2lvbi5cbiAqIFRoaXMgcHJvdmlkZXMgYSBoZWxwZnVsIEFQSSBmb3IgcGFnaW5hdGluZyBvdmVyIEZhdW5hREIgcmVzcG9uc2VzLlxuICogQHBhcmFtIGV4cHJlc3Npb24ge0V4cHJ9XG4gKiAgIFRoZSBRdWVyeSBleHByZXNzaW9uIHRvIHBhZ2luYXRlIG92ZXIuXG4gKiBAcGFyYW0gcGFyYW1zIHtPYmplY3R9XG4gKiAgIE9wdGlvbnMgdG8gYmUgcGFzc2VkIHRvIHRoZSBwYWdpbmF0ZSBmdW5jdGlvbi4gU2VlIFtwYWdpbmF0ZV0oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vcmVmZXJlbmNlL3F1ZXJ5YXBpI3JlYWQtZnVuY3Rpb25zKS5cbiAqIEBwYXJhbSBvcHRpb25zIHs/T2JqZWN0fVxuICogICBPYmplY3QgdGhhdCBjb25maWd1cmVzIHRoZSBjdXJyZW50IHBhZ2luYXRpb24gcXVlcmllcywgb3ZlcnJpZGluZyBGYXVuYURCIGNsaWVudCBvcHRpb25zLlxuICogQHBhcmFtIHs/c3RyaW5nfSBvcHRpb25zLnNlY3JldCBGYXVuYURCIHNlY3JldCAoc2VlIFtSZWZlcmVuY2UgRG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9hcHAuZmF1bmEuY29tL2RvY3VtZW50YXRpb24vaW50cm8vc2VjdXJpdHkpKVxuICogQHJldHVybnMge1BhZ2VIZWxwZXJ9IEEgUGFnZUhlbHBlciB0aGF0IHdyYXBzIHRoZSBwcm92aWRlZCBleHByZXNzaW9uLlxuICovXG5DbGllbnQucHJvdG90eXBlLnBhZ2luYXRlID0gZnVuY3Rpb24oZXhwcmVzc2lvbiwgcGFyYW1zLCBvcHRpb25zKSB7XG4gIHBhcmFtcyA9IGRlZmF1bHRzKHBhcmFtcywge30pXG4gIG9wdGlvbnMgPSBkZWZhdWx0cyhvcHRpb25zLCB7fSlcblxuICByZXR1cm4gbmV3IFBhZ2VIZWxwZXIodGhpcywgZXhwcmVzc2lvbiwgcGFyYW1zLCBvcHRpb25zKVxufVxuXG4vKipcbiAqIFNlbmRzIGEgYHBpbmdgIHJlcXVlc3QgdG8gRmF1bmFEQi5cbiAqIEByZXR1cm4ge2V4dGVybmFsOlByb21pc2U8c3RyaW5nPn0gUGluZyByZXNwb25zZS5cbiAqL1xuQ2xpZW50LnByb3RvdHlwZS5waW5nID0gZnVuY3Rpb24oc2NvcGUsIHRpbWVvdXQpIHtcbiAgcmV0dXJuIHRoaXMuX2V4ZWN1dGUoJ0dFVCcsICdwaW5nJywgbnVsbCwgeyBzY29wZTogc2NvcGUsIHRpbWVvdXQ6IHRpbWVvdXQgfSlcbn1cblxuLyoqXG4gKiBHZXQgdGhlIGZyZXNoZXN0IHRpbWVzdGFtcCByZXBvcnRlZCB0byB0aGlzIGNsaWVudC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBsYXN0IHNlZW4gdHJhbnNhY3Rpb24gdGltZVxuICovXG5DbGllbnQucHJvdG90eXBlLmdldExhc3RUeG5UaW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLl9sYXN0U2VlblxufVxuXG4vKipcbiAqIFN5bmMgdGhlIGZyZXNoZXN0IHRpbWVzdGFtcCBzZWVuIGJ5IHRoaXMgY2xpZW50LlxuICpcbiAqIFRoaXMgaGFzIG5vIGVmZmVjdCBpZiBzdGFsZXIgdGhhbiBjdXJyZW50bHkgc3RvcmVkIHRpbWVzdGFtcC5cbiAqIFdBUk5JTkc6IFRoaXMgc2hvdWxkIGJlIHVzZWQgb25seSB3aGVuIGNvb3JkaW5hdGluZyB0aW1lc3RhbXBzIGFjcm9zc1xuICogICAgICAgICAgbXVsdGlwbGUgY2xpZW50cy4gTW92aW5nIHRoZSB0aW1lc3RhbXAgYXJiaXRyYXJpbHkgZm9yd2FyZCBpbnRvXG4gKiAgICAgICAgICB0aGUgZnV0dXJlIHdpbGwgY2F1c2UgdHJhbnNhY3Rpb25zIHRvIHN0YWxsLlxuICogQHBhcmFtIHRpbWUge251bWJlcn0gdGhlIGxhc3Qgc2VlbiB0cmFuc2FjdGlvbiB0aW1lXG4gKi9cbkNsaWVudC5wcm90b3R5cGUuc3luY0xhc3RUeG5UaW1lID0gZnVuY3Rpb24odGltZSkge1xuICBpZiAodGhpcy5fbGFzdFNlZW4gPT0gbnVsbCB8fCB0aGlzLl9sYXN0U2VlbiA8IHRpbWUpIHtcbiAgICB0aGlzLl9sYXN0U2VlbiA9IHRpbWVcbiAgfVxufVxuXG5DbGllbnQucHJvdG90eXBlLl9leGVjdXRlID0gZnVuY3Rpb24obWV0aG9kLCBwYXRoLCBkYXRhLCBxdWVyeSwgb3B0aW9ucykge1xuICBxdWVyeSA9IGRlZmF1bHRzKHF1ZXJ5LCBudWxsKVxuXG4gIGlmIChcbiAgICBwYXRoIGluc3RhbmNlb2YgdmFsdWVzLlJlZiB8fFxuICAgIHV0aWwuY2hlY2tJbnN0YW5jZUhhc1Byb3BlcnR5KHBhdGgsICdfaXNGYXVuYVJlZicpXG4gICkge1xuICAgIHBhdGggPSBwYXRoLnZhbHVlXG4gIH1cblxuICBpZiAocXVlcnkgIT09IG51bGwpIHtcbiAgICBxdWVyeSA9IHV0aWwucmVtb3ZlVW5kZWZpbmVkVmFsdWVzKHF1ZXJ5KVxuICB9XG5cbiAgdmFyIHN0YXJ0VGltZSA9IERhdGUubm93KClcbiAgdmFyIHNlbGYgPSB0aGlzXG4gIHZhciBib2R5ID1cbiAgICBbJ0dFVCcsICdIRUFEJ10uaW5kZXhPZihtZXRob2QpID49IDAgPyB1bmRlZmluZWQgOiBKU09OLnN0cmluZ2lmeShkYXRhKVxuXG4gIHJldHVybiB0aGlzLl9wZXJmb3JtUmVxdWVzdChtZXRob2QsIHBhdGgsIGJvZHksIHF1ZXJ5LCBvcHRpb25zKS50aGVuKGZ1bmN0aW9uKFxuICAgIHJlc3BvbnNlXG4gICkge1xuICAgIHZhciBlbmRUaW1lID0gRGF0ZS5ub3coKVxuICAgIHZhciByZXNwb25zZVRleHQgPSByZXNwb25zZS50ZXh0XG4gICAgdmFyIHJlc3BvbnNlT2JqZWN0ID0ganNvbi5wYXJzZUpTT04ocmVzcG9uc2VUZXh0KVxuICAgIHZhciByZXF1ZXN0UmVzdWx0ID0gbmV3IFJlcXVlc3RSZXN1bHQoXG4gICAgICBtZXRob2QsXG4gICAgICBwYXRoLFxuICAgICAgcXVlcnksXG4gICAgICBib2R5LFxuICAgICAgZGF0YSxcbiAgICAgIHJlc3BvbnNlVGV4dCxcbiAgICAgIHJlc3BvbnNlT2JqZWN0LFxuICAgICAgcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgcmVzcG9uc2VIZWFkZXJzQXNPYmplY3QocmVzcG9uc2UpLFxuICAgICAgc3RhcnRUaW1lLFxuICAgICAgZW5kVGltZVxuICAgIClcbiAgICB2YXIgdHhuVGltZUhlYWRlcktleSA9ICd4LXR4bi10aW1lJ1xuXG4gICAgaWYgKHJlc3BvbnNlLmhlYWRlcnMuaGFzKHR4blRpbWVIZWFkZXJLZXkpKSB7XG4gICAgICBzZWxmLnN5bmNMYXN0VHhuVGltZShwYXJzZUludChyZXNwb25zZS5oZWFkZXJzLmdldCh0eG5UaW1lSGVhZGVyS2V5KSwgMTApKVxuICAgIH1cblxuICAgIGlmIChzZWxmLl9vYnNlcnZlciAhPSBudWxsKSB7XG4gICAgICBzZWxmLl9vYnNlcnZlcihyZXF1ZXN0UmVzdWx0LCBzZWxmKVxuICAgIH1cblxuICAgIGVycm9ycy5GYXVuYUhUVFBFcnJvci5yYWlzZUZvclN0YXR1c0NvZGUocmVxdWVzdFJlc3VsdClcbiAgICByZXR1cm4gcmVzcG9uc2VPYmplY3RbJ3Jlc291cmNlJ11cbiAgfSlcbn1cblxuQ2xpZW50LnByb3RvdHlwZS5fcGVyZm9ybVJlcXVlc3QgPSBmdW5jdGlvbihcbiAgbWV0aG9kLFxuICBwYXRoLFxuICBib2R5LFxuICBxdWVyeSxcbiAgb3B0aW9uc1xuKSB7XG4gIHZhciB1cmwgPSBwYXJzZSh0aGlzLl9iYXNlVXJsKVxuICB1cmwuc2V0KCdwYXRobmFtZScsIHBhdGgpXG4gIHVybC5zZXQoJ3F1ZXJ5JywgcXVlcnkpXG4gIG9wdGlvbnMgPSBkZWZhdWx0cyhvcHRpb25zLCB7fSlcbiAgdmFyIHNlY3JldCA9IG9wdGlvbnMuc2VjcmV0IHx8IHRoaXMuX3NlY3JldFxuICB2YXIgcXVlcnlUaW1lb3V0ID0gdGhpcy5fcXVlcnlUaW1lb3V0XG5cbiAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5xdWVyeVRpbWVvdXQpIHtcbiAgICBxdWVyeVRpbWVvdXQgPSBvcHRpb25zLnF1ZXJ5VGltZW91dFxuICB9XG5cbiAgcmV0dXJuIHRoaXMuX2ZldGNoKHVybC5ocmVmLCB7XG4gICAgYWdlbnQ6IHRoaXMuX2tlZXBBbGl2ZUVuYWJsZWRBZ2VudCxcbiAgICBib2R5OiBib2R5LFxuICAgIGhlYWRlcnM6IHV0aWwucmVtb3ZlTnVsbEFuZFVuZGVmaW5lZFZhbHVlcyh7XG4gICAgICAuLi50aGlzLl9oZWFkZXJzLFxuICAgICAgQXV0aG9yaXphdGlvbjogc2VjcmV0ICYmIHNlY3JldEhlYWRlcihzZWNyZXQpLFxuICAgICAgJ1gtRmF1bmFEQi1BUEktVmVyc2lvbic6IEFQSVZlcnNpb24sXG4gICAgICAnWC1GYXVuYS1Ecml2ZXInOiAnSmF2YXNjcmlwdCcsXG4gICAgICAnWC1MYXN0LVNlZW4tVHhuJzogdGhpcy5fbGFzdFNlZW4sXG4gICAgICAnWC1RdWVyeS1UaW1lb3V0JzogcXVlcnlUaW1lb3V0LFxuICAgIH0pLFxuICAgIG1ldGhvZDogbWV0aG9kLFxuICAgIHRpbWVvdXQ6IHRoaXMuX3RpbWVvdXQsXG4gIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpLnRoZW4oZnVuY3Rpb24odGV4dCkge1xuICAgICAgcmVzcG9uc2UudGV4dCA9IHRleHRcbiAgICAgIHJldHVybiByZXNwb25zZVxuICAgIH0pXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRzKG9iaiwgZGVmKSB7XG4gIGlmIChvYmogPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkZWZcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqXG4gIH1cbn1cblxuZnVuY3Rpb24gc2VjcmV0SGVhZGVyKHNlY3JldCkge1xuICByZXR1cm4gJ0Jhc2ljICcgKyBidG9hKHNlY3JldCArICc6Jylcbn1cblxuZnVuY3Rpb24gcmVzcG9uc2VIZWFkZXJzQXNPYmplY3QocmVzcG9uc2UpIHtcbiAgbGV0IGhlYWRlcnMgPSB7fVxuXG4gIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIHJlc3BvbnNlLmhlYWRlcnMuZW50cmllcygpKSB7XG4gICAgaGVhZGVyc1trZXldID0gdmFsdWVcbiAgfVxuXG4gIHJldHVybiBoZWFkZXJzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xpZW50XG4iLCIndXNlIHN0cmljdCdcblxudmFyIGpzb24gPSByZXF1aXJlKCcuL19qc29uJylcblxuLyoqXG4gKiBGdW5jdGlvbnMgdG8gYXNzaXN0IHdpdGggZGVidWcgbG9nZ2luZy5cbiAqIEBtb2R1bGUgY2xpZW50TG9nZ2VyXG4gKi9cblxuLyoqXG4gKiBBIHVzZXIgcHJvdmlkZWQgbG9nIGxpbmUgaGFuZGxlci5cbiAqXG4gKiBAY2FsbGJhY2sgbG9nZ2VyQ2FsbGJhY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2dnZWRcbiAqL1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgY2FuIGJlIHRoZSBgb2JzZXJ2ZXJgIGZvciBhIHtAbGluayBDbGllbnR9LlxuICogV2lsbCBjYWxsIGBsb2dnZXJGdW5jdGlvbmAgd2l0aCBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBlYWNoIHtAbGluayBSZXF1ZXN0UmVzdWx0fS5cbiAqXG4gKiBBbiBleGFtcGxlIGxvZ2dpbmcgc3RyaW5nOlxuICogYGBgcGxhaW5cbiAqIEZhdW5hIFBPU1QgL1xuICogUmVxdWVzdCBKU09OOiB7XG4gKiAgIFwiZGF0YVwiOiAuLi5cbiAqIH1cbiAqIFJlc3BvbnNlIGhlYWRlcnM6IHtcbiAqICAgIFwieC1mYXVuYWRiLWhvc3RcIjogLi4uLFxuICogICAgXCJ4LWZhdW5hZGItYnVpbGRcIjogLi4uLFxuICogICAgXCJjb25uZWN0aW9uXCI6IFwiY2xvc2VcIixcbiAqICAgIFwiY29udGVudC1sZW5ndGhcIjogLi4uLFxuICogICAgXCJjb250ZW50LXR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIlxuICogIH1cbiAqIFJlc3BvbnNlIEpTT046IHtcbiAqICAgIFwicmVzb3VyY2VcIjoge1xuICogICAgICBcInJlZlwiOiB7IC4uLiB9LFxuICogICAgICBcImNsYXNzXCI6IHsgLi4uIH0sXG4gKiAgICAgIFwidHNcIjogLi4uXG4gKiAgICB9XG4gKiAgfVxuICogUmVzcG9uc2UgKDIwMSk6IE5ldHdvcmsgbGF0ZW5jeSAxM21zXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge2xvZ2dlckNhbGxiYWNrfSBsb2dnZXJGdW5jdGlvblxuICogQHJldHVybiB7Q2xpZW50fm9ic2VydmVyQ2FsbGJhY2t9XG4gKiBAZXhhbXBsZVxuICogdmFyIGNsaWVudCA9IG5ldyBDbGllbnQoe1xuICogICAuLi4gb3RoZXIgb3B0aW9ucyAuLi5cbiAqICAgb2JzZXJ2ZXI6IGxvZ2dlcihjb25zb2xlLmxvZylcbiAqIH0pXG4gKiBjbGllbnQucGluZygpIC8vIExvZ3MgdGhlIHJlcXVlc3QgYW5kIHJlc3BvbnNlLlxuICovXG5mdW5jdGlvbiBsb2dnZXIobG9nZ2VyRnVuY3Rpb24pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHJlcXVlc3RSZXN1bHQsIGNsaWVudCkge1xuICAgIHJldHVybiBsb2dnZXJGdW5jdGlvbihzaG93UmVxdWVzdFJlc3VsdChyZXF1ZXN0UmVzdWx0KSwgY2xpZW50KVxuICB9XG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgZnVuY3Rpb24gdXNlZCBieSB7QGxpbmsgbG9nZ2VyfSB0byB0cmFuc2Zvcm0gYSB7QGxpbmsgUmVxdWVzdFJlc3VsdH1cbiAqIHRvIGEgc3RyaW5nIGZvciBsb2dnaW5nLlxuICogQHBhcmFtIHtSZXF1ZXN0UmVzdWx0fSByZXF1ZXN0UmVzdWx0XG4gKiBAcmV0dXJucyB7c3RyaW5nfSBzdHJpbmcgdG8gYmUgbG9nZ2VkLlxuICovXG5mdW5jdGlvbiBzaG93UmVxdWVzdFJlc3VsdChyZXF1ZXN0UmVzdWx0KSB7XG4gIHZhciBxdWVyeSA9IHJlcXVlc3RSZXN1bHQucXVlcnksXG4gICAgbWV0aG9kID0gcmVxdWVzdFJlc3VsdC5tZXRob2QsXG4gICAgcGF0aCA9IHJlcXVlc3RSZXN1bHQucGF0aCxcbiAgICByZXF1ZXN0Q29udGVudCA9IHJlcXVlc3RSZXN1bHQucmVxdWVzdENvbnRlbnQsXG4gICAgcmVzcG9uc2VIZWFkZXJzID0gcmVxdWVzdFJlc3VsdC5yZXNwb25zZUhlYWRlcnMsXG4gICAgcmVzcG9uc2VDb250ZW50ID0gcmVxdWVzdFJlc3VsdC5yZXNwb25zZUNvbnRlbnQsXG4gICAgc3RhdHVzQ29kZSA9IHJlcXVlc3RSZXN1bHQuc3RhdHVzQ29kZSxcbiAgICB0aW1lVGFrZW4gPSByZXF1ZXN0UmVzdWx0LnRpbWVUYWtlblxuXG4gIHZhciBvdXQgPSAnJ1xuXG4gIGZ1bmN0aW9uIGxvZyhzdHIpIHtcbiAgICBvdXQgPSBvdXQgKyBzdHJcbiAgfVxuXG4gIGxvZygnRmF1bmEgJyArIG1ldGhvZCArICcgLycgKyBwYXRoICsgX3F1ZXJ5U3RyaW5nKHF1ZXJ5KSArICdcXG4nKVxuICBpZiAocmVxdWVzdENvbnRlbnQgIT0gbnVsbCkge1xuICAgIGxvZygnICBSZXF1ZXN0IEpTT046ICcgKyBfc2hvd0pTT04ocmVxdWVzdENvbnRlbnQpICsgJ1xcbicpXG4gIH1cbiAgbG9nKCcgIFJlc3BvbnNlIGhlYWRlcnM6ICcgKyBfc2hvd0pTT04ocmVzcG9uc2VIZWFkZXJzKSArICdcXG4nKVxuICBsb2coJyAgUmVzcG9uc2UgSlNPTjogJyArIF9zaG93SlNPTihyZXNwb25zZUNvbnRlbnQpICsgJ1xcbicpXG4gIGxvZygnICBSZXNwb25zZSAoJyArIHN0YXR1c0NvZGUgKyAnKTogTmV0d29yayBsYXRlbmN5ICcgKyB0aW1lVGFrZW4gKyAnbXNcXG4nKVxuXG4gIHJldHVybiBvdXRcbn1cblxuZnVuY3Rpb24gX2luZGVudChzdHIpIHtcbiAgdmFyIGluZGVudFN0ciA9ICcgICdcbiAgcmV0dXJuIHN0ci5zcGxpdCgnXFxuJykuam9pbignXFxuJyArIGluZGVudFN0cilcbn1cblxuZnVuY3Rpb24gX3Nob3dKU09OKG9iamVjdCkge1xuICByZXR1cm4gX2luZGVudChqc29uLnRvSlNPTihvYmplY3QsIHRydWUpKVxufVxuXG5mdW5jdGlvbiBfcXVlcnlTdHJpbmcocXVlcnkpIHtcbiAgaWYgKHF1ZXJ5ID09IG51bGwpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocXVlcnkpXG4gIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAnJ1xuICB9XG5cbiAgdmFyIHBhaXJzID0ga2V5cy5tYXAoZnVuY3Rpb24oa2V5KSB7XG4gICAgcmV0dXJuIGtleSArICc9JyArIHF1ZXJ5W2tleV1cbiAgfSlcbiAgcmV0dXJuICc/JyArIHBhaXJzLmpvaW4oJyYnKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIHNob3dSZXF1ZXN0UmVzdWx0OiBzaG93UmVxdWVzdFJlc3VsdCxcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBDbGllbnQ6IHJlcXVpcmUoJy4vc3JjL0NsaWVudCcpLFxuICBFeHByOiByZXF1aXJlKCcuL3NyYy9FeHByJyksXG4gIFBhZ2VIZWxwZXI6IHJlcXVpcmUoJy4vc3JjL1BhZ2VIZWxwZXInKSxcbiAgUmVxdWVzdFJlc3VsdDogcmVxdWlyZSgnLi9zcmMvUmVxdWVzdFJlc3VsdCcpLFxuXG4gIGNsaWVudExvZ2dlcjogcmVxdWlyZSgnLi9zcmMvY2xpZW50TG9nZ2VyJyksXG4gIGVycm9yczogcmVxdWlyZSgnLi9zcmMvZXJyb3JzJyksXG4gIHZhbHVlczogcmVxdWlyZSgnLi9zcmMvdmFsdWVzJyksXG4gIHF1ZXJ5OiByZXF1aXJlKCcuL3NyYy9xdWVyeScpLFxufVxuIiwiaW1wb3J0IGZhdW5hZGIgZnJvbSAnZmF1bmFkYic7XG5jb25zdCBxID0gZmF1bmFkYi5xdWVyeTtcbmNvbnN0IGNsaWVudCA9IG5ldyBmYXVuYWRiLkNsaWVudCh7XG4gIHNlY3JldDogJ2ZuQUR2c1NacGhBQ0FKTVp0YkZma2o0YjgzbFl2X29RUUdRUkN5Y2UnLFxufSk7XG5cbmNvbnN0IGdldEZhdW5hID0gKGNhbGxiYWNrKSA9PiB7XG4gIGNsaWVudFxuICAgIC5xdWVyeShxLkdldChxLlJlZihxLkNvbGxlY3Rpb24oJ3RlYW0nKSwgJzI3MDA1NzQ0NDY1NDE4NzAwOCcpKSlcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKChyZXQpID0+IHtcbiAgICAgIGxldCBjdXJyZW50ID0gcmV0LmRhdGEubWVtYmVycy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGxldCBuYW1lQSA9IGEuY29tcGFueS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBsZXQgbmFtZUIgPSBiLmNvbXBhbnkudG9VcHBlckNhc2UoKTtcbiAgICAgICAgaWYgKG5hbWVBIDwgbmFtZUIpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWVBID4gbmFtZUIpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH0pO1xuICAgICAgY2FsbGJhY2soY3VycmVudCk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRGYXVuYTtcbiIsIjxzY3JpcHQ+XG4gIGltcG9ydCB7IG9uTW91bnQgfSBmcm9tIFwic3ZlbHRlXCI7XG4gIGltcG9ydCByZXMgZnJvbSAnLi4vLi4vc3RhdGljL3N0YXJ0Lmpzb24nO1xuICBpbXBvcnQgZ2V0RmF1bmEgZnJvbSAnLi9fZ2V0RmF1bmEuanMnO1xuXG4gIGxldCBtZW1iZXJzXG4gIGxldCBjdXJyZW50XG4gIG9uTW91bnQoYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgIGN1cnJlbnQgPSBhd2FpdCBnZXRGYXVuYSgoKSA9PiBjdXJyZW50KVxuICAgIG1lbWJlcnMgPSBhd2FpdCBkYXRhLm1lbWJlcnMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgbGV0IG5hbWVBID0gYS5jb21wYW55LnRvVXBwZXJDYXNlKCk7XG4gICAgICBsZXQgbmFtZUIgPSBiLmNvbXBhbnkudG9VcHBlckNhc2UoKTtcbiAgICAgIGlmIChuYW1lQSA8IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChuYW1lQSA+IG5hbWVCKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xuICB9KVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gIHAge1xuICAgIG1hcmdpbjogMWVtIGF1dG87XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPlNhcHBlciBwcm9qZWN0IHRlbXBsYXRlPC90aXRsZT5cbjwvc3ZlbHRlOmhlYWQ+XG5cbjxtYWluPlxuICA8aDIgY2xhc3M9XCJpcy1zaXplLTNcIj5UaWdlciBUZWFtMTwvaDI+XG4gIHsjaWYgbWVtYmVyc31cbiAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBpcy1zdHJpcGVkXCI+XG4gICAgICA8dGhlYWQ+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICA8dGg+Q29tcGFueTwvdGg+XG4gICAgICAgICAgPHRoPlNoYXJlIFZhbHVlPC90aD5cbiAgICAgICAgICA8dGg+RmxpZ2h0czwvdGg+XG4gICAgICAgICAgPHRoPlN0YXJ0IENvbnRyaWJ1dGlvbjwvdGg+XG4gICAgICAgICAgPHRoPkN1cnJlbnQgQ29udHJpYnV0aW9uPC90aD5cbiAgICAgICAgICA8dGg+UmF3PC90aD5cbiAgICAgICAgICA8dGg+R3Jvd3RoPC90aD5cbiAgICAgICAgPC90cj5cbiAgICAgIDwvdGhlYWQ+XG4gICAgICA8dGJvZHk+XG4gICAgICAgIHsjZWFjaCBtZW1iZXJzIGFzIG1lbWJlcixpfVxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD57bWVtYmVyLmNvbXBhbnl9PC90aD5cbiAgICAgICAgICAgIDx0ZD4ke21lbWJlci5zaGFyZVZhbHVlfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e21lbWJlci5mbGlnaHRzfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e21lbWJlci5jb250cmlidXRlZC50b0xvY2FsZVN0cmluZygnZW4tVVMnLHtzdHlsZTogJ2N1cnJlbmN5JywgY3VycmVuY3k6ICdVU0QnLH0pfTwvdGQ+XG4gICAgICAgICAgICA8dGQ+e2N1cnJlbnRbaV0uY29udHJpYnV0ZWQudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJyx7c3R5bGU6ICdjdXJyZW5jeScsIGN1cnJlbmN5OiAnVVNEJyx9KX08L3RkPlxuICAgICAgICAgICAgPHRkPnsoKGN1cnJlbnRbaV0uY29udHJpYnV0ZWQgLSBtZW1iZXIuY29udHJpYnV0ZWQpL21lbWJlci5jb250cmlidXRlZCl9PC90ZD5cbiAgICAgICAgICAgIDx0ZD57KChjdXJyZW50W2ldLmNvbnRyaWJ1dGVkIC0gbWVtYmVyLmNvbnRyaWJ1dGVkKS9jdXJyZW50W2ldLmNvbnRyaWJ1dGVkKSoxMDB9JTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgey9lYWNofVxuICAgICAgPC90Ym9keT5cbiAgICA8L3RhYmxlPlxuICB7OmVsc2V9XG4gICAgPHA+TE9BRElORy4uLjwvcD5cbiAgey9pZn1cbjwvbWFpbj4iXSwibmFtZXMiOlsiZ2xvYmFsIiwidXRpbCIsIkV4cHIiLCJkZXByZWNhdGUiLCJiYXNlNjQiLCJSZWYiLCJCeXRlcyIsImFubm90YXRlIiwiUXVlcnkiLCJEYXRlIiwicXMiLCJyZXF1aXJlZCIsInRoaXMiLCJxdWVyeSIsInJlcXVpcmUkJDAiLCJyZXF1aXJlJCQxIiwicmVxdWlyZSQkMiIsInJlcXVpcmUkJDMiLCJkZWZhdWx0cyIsIlBhZ2VIZWxwZXIiLCJqc29uIiwiUmVxdWVzdFJlc3VsdCIsInBhcnNlIiwiYnRvYSIsInJlcXVpcmUkJDQiLCJyZXF1aXJlJCQ1IiwicmVxdWlyZSQkNiIsInJlcXVpcmUkJDciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWMsR0FBRyxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUU7QUFDckMsRUFBRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDbEI7O0FDRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUUsT0FBTyxF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RSxTQUFTLEVBQUVBLEtBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxRQUFRLFNBQVMsQ0FBQyxNQUFNO0FBQzFCLElBQUksS0FBSyxDQUFDO0FBQ1YsTUFBTSxPQUFPLElBQUlILE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNyRCxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMxRSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNJLE9BQUssQ0FBQyxLQUFLLEVBQUU7QUFDdEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUVBLE9BQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7QUFDaEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFO0FBQ3BCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlKLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFO0FBQzdCLEVBQUUsS0FBSyxD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QUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN0RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU00sT0FBSyxDQUFDLE1BQU0sRUFBRTtBQUN2QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRUEsT0FBSyxDQUFDLElBQUksRUFBQztBQUN2QyxFQUFFLE9BQU8sSUFBSU4sTUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQzFDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFLFdBQVcsRUFBRTtBQUN0QyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQ3JDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUMzRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE9BQU8sQ0FBQyxVQUFVLEVBQUUsV0FBVyxFQUFFO0FBQzFDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUM7QUFDekMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0FBQy9FLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUU7QUFDekMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQztBQUN4QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7QUFDOUUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLFVBQVUsRUFBRTtBQUNsQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDO0FBQ3RDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUN2RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFO0FBQ2xDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0FBQ3ZFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUU7QUFDdkMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsT0FBTyxDQUFDLElBQUksRUFBQztBQUN6QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7QUFDNUUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRTtBQUN0QyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDO0FBQ3hDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUMzRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLFVBQVUsRUFBRTtBQUM3QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDO0FBQ3pDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7QUFDakQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsQ0FBQyxVQUFVLEVBQUU7QUFDaEMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsVUFBVSxDQUFDLElBQUksRUFBQztBQUM1QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDO0FBQ3BELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ3pCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUM7QUFDM0MsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM3QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ3pCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUM7QUFDM0MsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM3QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDeEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMxQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUM7QUFDekMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLENBQUMsSUFBSSxFQUFFO0FBQzNCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUM7QUFDN0MsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMvQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDeEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMxQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUM7QUFDekMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3JCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3JCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3JCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxZQUFZLENBQUMsSUFBSSxFQUFFO0FBQzVCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUM7QUFDOUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQzFCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUM7QUFDNUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUM7QUFDekMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxVQUFVLENBQUMsSUFBSSxFQUFFO0FBQzFCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUM7QUFDNUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFO0FBQ3JCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUM7QUFDekMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMzQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxhQUFhLENBQUMsSUFBSSxFQUFFO0FBQzdCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLGFBQWEsQ0FBQyxJQUFJLEVBQUM7QUFDL0MsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLGNBQWMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUNqRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDeEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE9B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QSxTQUFTLFNBQVMsQ0FBQyxHQUFHLEVBQUU7QUFDeEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBQztBQUMzQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQzNDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsT0FBTyxFQUFFO0FBQ3pCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDeEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDdEIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUNyQyxFQUFFLElBQUksSUFBSSxHQUFHLFdBQVcsQ0FBQyxTQUFTLEVBQUM7QUFDbkMsRUFBRSxJQUFJLENBQUMsS0FBSyxHQUFFO0FBQ2QsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3JFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLEdBQUc7QUFDakIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUNyQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3RELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNyQyxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUM1QyxFQUFFLE9BQU8sSUFBSUEsTUFBSTtBQUNqQixJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQy9FLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsWUFBWSxHQUFHO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFlBQVksQ0FBQyxJQUFJLEVBQUM7QUFDNUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUM3RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxHQUFHO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUMzRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLEdBQUcsRUFBRTtBQUN2QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDO0FBQzFDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDMUMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sRUFBRTtBQUM5QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDO0FBQ3RDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUM3RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDOUIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUN2QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztBQUN2RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFO0FBQzVCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDO0FBQzdELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsYUFBYSxFQUFFO0FBQy9CLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDeEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQztBQUNsRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFO0FBQ2pDLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDO0FBQ3BFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsR0FBRztBQUNwQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FB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TSxDQUFDLEVBQUUsQ0FBQztBQUNwRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRTtBQUNqQyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDO0FBQzFDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUNsRSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsV0FBVyxDQUFDLEtBQUssRUFBRTtBQUM1QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsSUFBSSxFQUFDO0FBQzdDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDL0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ3JDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDO0FBQzlDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFDO0FBQy9CLEVBQUUsT0FBTyxJQUFJQSxNQUFJO0FBQ2pCLElBQUksTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDOUUsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsWUFBWSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRTtBQUN6RCxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBQztBQUNuRCxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBQztBQUMvQixFQUFFLE9BQU8sSUFBSUEsTUFBSTtBQUNqQixJQUFJLE1BQU07QUFDVixNQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQzNELE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7QUFDM0QsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE1BQU0sQ0FBQyxLQUFLLEVBQUU7QUFDdkIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQztBQUN4QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUMxQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFDO0FBQzNDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDN0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUU7QUFDaEMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDNUMsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUM7QUFDM0IsRUFBRSxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUM7QUFDM0I7QUFDQSxFQUFFLE9BQU8sSUFBSUEsTUFBSTtBQUNqQixJQUFJLE1BQU0sQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0FBQ3RFLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUU7QUFDL0IsRUFBRSxL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RUFBRSxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7QUFDakMsRUFBRSxPQUFPLElBQUlBLE1BQUk7QUFDakIsSUFBSSxNQUFNO0FBQ1YsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDaEMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNsRCxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRTtBQUMxQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFDO0FBQzNDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDN0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsS0FBSyxFQUFFO0FBQ3JCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUN4QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFDMUIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBQztBQUMzQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzdDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsTUFBTSxFQUFFO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxJQUFJLElBQUksR0FBRyxXQUFXLENBQUMsU0FBUyxFQUFDO0FBQ25DLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRTtBQUNkLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN4RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO0FBQzdCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzVELENBQUM7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RUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUN2QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ25DLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDL0IsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDL0MsRUFBRSxRQUFRLFNBQVMsQ0FBQyxNQUFNO0FBQzFCLElBQUksS0FBSyxDQUFDO0FBQ1YsTUFBTSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMvQyxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNuRSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUM1QixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUM1QyxFQUFFLFFBQVEsU0FBUyxDQUFDLE1BQU07QUFDMUIsSUFBSSxLQUFLLENBQUM7QUFDVixNQUFNLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzVDLElBQUksS0FBSyxDQUFDO0FBQ1YsTUFBTSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ2hFLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUM1QixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUM1QyxFQUFFLFFBQVEsU0FBUyxDQUFDLE1BQU07QUFDMUIsSUFBSSxLQUFLLENBQUM7QUFDVixNQUFNLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzVDLElBQUksS0FBSyxDQUFDO0FBQ1YsTUFBTSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ2hFLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFO0FBQ2pDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFDO0FBQ2pELEVBQUUsUUFBUSxTQUFTLENBQUMsTUFBTTtBQUMxQixJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDakQsSUFBSSxLQUFLLENBQUM7QUFDVixNQUFNLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDckUsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUU7QUFDakMsRUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFVBQVUsQ0FBQyxJQUFJLEVBQUM7QUFDakQsRUFBRSxRQUFRLFNBQVMsQ0FBQyxNQUFNO0FBQzFCLElBQUksS0FBSyxDQUFDO0FBQ1YsTUFBTSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMvQyxJQUFJLEtBQUssQ0FBQztBQUNWLE1BQU0sT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNuRSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtBQUMzQixFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQztBQUMzQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBQztBQUMvQixFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZFLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN4QixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDO0FBQ3ZDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFDO0FBQy9CLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFO0FBQzVCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxJQUFJLEVBQUM7QUFDM0MsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUM7QUFDL0IsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUMvQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUU7QUFDMUIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBQztBQUN6QyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBQztBQUMvQixFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzdDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLEtBQUssRUFBRTtBQUN4QixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDO0FBQ3ZDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFDO0FBQy9CLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLENBQUMsS0FBSyxFQUFFO0FBQzFCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUM7QUFDekMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUM7QUFDL0IsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUM3QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUU7QUFDdEIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUNyQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBQztBQUMvQixFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3pDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNyQixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDO0FBQ3BDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFDO0FBQy9CLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDeEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsS0FBSyxFQUFFO0FBQ3ZCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUM7QUFDL0IsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUMxQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVcsQ0FBQyxLQUFLLEVBQUU7QUFDNUIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsV0FBVyxDQUFDLElBQUksRUFBQztBQUMzQyxFQUFFLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksRUFBQztBQUMvQixFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQy9DLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLEdBQUc7QUFDbEIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQztBQUN0QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3ZELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDN0IsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQztBQUMxQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDMUQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFO0FBQ3RDLEVBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDO0FBQzdDLEVBQUUsSUFBSSxPQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUU7QUFDeEQsRUFBRSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7QUFDOUIsSUFBSSxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUM7QUFDcEMsR0FBRztBQUNILEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsT0FBTyxDQUFDO0FBQzFCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFO0FBQy9CLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUM7QUFDM0MsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQy9ELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ25CLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDckMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN0QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRyxHQUFHO0FBQ2YsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBQztBQUNuQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLEdBQUc7QUFDbEIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBQztBQUN0QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3ZELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDeEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSyxHQUFHO0FBQ2pCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDckMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN0RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxHQUFHO0FBQ2xCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN2RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUNwQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDO0FBQ3RDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDdkMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLE1BQU0sR0FBRztBQUNsQixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDO0FBQ3RDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDdkQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDckIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUN2QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3hDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLEdBQUc7QUFDZixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQ25DLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUcsR0FBRztBQUNmLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDbkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxHQUFHO0FBQ2xCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN2RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxHQUFHO0FBQ3BCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDeEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN6RCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFO0FBQ2pDLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDckMsRUFBRSxTQUFTLEdBQUcsUUFBUSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUk7QUFDakIsSUFBSSxNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUM7QUFDbEUsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLEdBQUc7QUFDcEIsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQztBQUN4QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3pELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3BCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUNwQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDO0FBQ3RDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDdkMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLFNBQVMsRUFBRTtBQUNqQyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFDO0FBQ3JDLEVBQUUsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFDO0FBQ3ZDLEVBQUUsT0FBTyxJQUFJQSxNQUFJO0FBQ2pCLElBQUksTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDO0FBQ2xFLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsVUFBVSxFQUFFO0FBQzNCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUM7QUFDdkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFO0FBQ3pCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDckMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsVUFBVSxFQUFFO0FBQzFCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUM3QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFO0FBQ3pCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDckMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsVUFBVSxFQUFFO0FBQ3pCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDckMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsSUFBSSxDQUFDLElBQUksRUFBRTtBQUNwQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFDO0FBQ3RDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDdkMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDcEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQztBQUN0QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3ZDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3BCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNuQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQ3JDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDdEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDcEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQztBQUN0QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3ZDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsSUFBSSxFQUFFO0FBQ3ZCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxJQUFJLEVBQUM7QUFDekMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUMxQyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNuQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQ3JDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDdEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRTtBQUM1QixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFDO0FBQ3JDLEVBQUUsSUFBSSxHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFDO0FBQzdCLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDcEUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEVBQUUsQ0FBQyxJQUFJLEVBQUU7QUFDbEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQztBQUNwQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3JDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsSUFBSSxFQUFFO0FBQ25CLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDckMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN0QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFO0FBQzlCLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDbkMsRUFBRSxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUM7QUFDckMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN4RSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUN2QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDO0FBQ3pDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDMUMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUU7QUFDbkIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBQztBQUNyQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3RDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3BCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsR0FBRyxDQUFDLElBQUksRUFBRTtBQUNuQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQ3JDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDdEMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDcEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQztBQUN0QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3ZDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLEdBQUc7QUFDZCxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFDO0FBQ2xDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDbkQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUcsR0FBRztBQUNmLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDbkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSxHQUFHO0FBQ2QsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQztBQUNsQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25ELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLEdBQUc7QUFDZixFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFDO0FBQ25DLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFDcEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEdBQUcsR0FBRztBQUNmLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDbkMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUNwRCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSxHQUFHO0FBQ2QsRUFBRSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxDQUFDLElBQUksRUFBQztBQUNsQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ25ELENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxHQUFHLENBQUMsT0FBTyxFQUFFO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLEVBQUM7QUFDckMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRTtBQUN4QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDO0FBQzFDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDNUMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUU7QUFDeEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQztBQUMxQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsT0FBTyxDQUFDLElBQUksRUFBRTtBQUN2QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsSUFBSSxFQUFDO0FBQ3pDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDM0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFFBQVEsQ0FBQyxJQUFJLEVBQUU7QUFDeEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsUUFBUSxDQUFDLElBQUksRUFBQztBQUMxQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzVDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ3pCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUM7QUFDM0MsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM3QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUN0QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDO0FBQ3hDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDMUMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDekIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBQztBQUMzQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzdDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxRQUFRLENBQUMsSUFBSSxFQUFFO0FBQ3hCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFFBQVEsQ0FBQyxJQUFJLEVBQUM7QUFDMUMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM1QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsUUFBUSxDQUFDLElBQUksRUFBRTtBQUN4QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFDO0FBQzFDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDNUMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsQ0FBQyxJQUFJLEVBQUU7QUFDekIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBQztBQUMzQyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQzlDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLENBQUMsSUFBSSxFQUFFO0FBQ3pCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUM7QUFDM0MsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUM5QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxDQUFDLElBQUksRUFBRTtBQUMxQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxFQUFDO0FBQzVDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDL0MsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLElBQUksQ0FBQyxJQUFJLEVBQUU7QUFDcEIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBQztBQUN0QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3ZDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxNQUFNLENBQUMsSUFBSSxFQUFFO0FBQ3RCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUM7QUFDeEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN6QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUN0QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDO0FBQ3hDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDekMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLEtBQUssQ0FBQyxJQUFJLEVBQUU7QUFDckIsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBQztBQUN2QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO0FBQ3hDLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxJQUFJLENBQUMsSUFBSSxFQUFFO0FBQ3BCLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUM7QUFDdEMsRUFBRSxPQUFPLElBQUlBLE1BQUksQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztBQUN2QyxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLElBQUksRUFBRTtBQUN0QixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDO0FBQ3hDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7QUFDMUMsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsWUFBWSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUU7QUFDaEMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsWUFBWSxDQUFDLElBQUksRUFBQztBQUM5QyxFQUFFLE9BQU8sSUFBSUEsTUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7QUFDOUQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxDQUFDLFVBQVUsRUFBRTtBQUMvQixFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFDO0FBQzNDLEVBQUUsT0FBTyxJQUFJQSxNQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUM7QUFDbEQsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsS0FBSyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTtBQUMzQyxFQUFFO0FBQ0YsSUFBSSxDQUFDLEdBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHO0FBQ3RDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUN2QyxJQUFJO0FBQ0osSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDO0FBQ3BFLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQSxLQUFLLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDNUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO0FBQy9CLEVBQUM7QUFDRCxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDMUMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFDO0FBQ2xDLEVBQUM7QUFDRCxLQUFLLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7QUFDMUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJ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QUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7QUFDN0MsVUFBVSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDMUQsU0FBUyxNQUFNO0FBQ2YsVUFBVSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQyxVQUFVLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztBQUM1QyxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUssTUFBTSxLQUFLLEtBQUssR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHO0FBQzlDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMxQixNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDOUMsS0FBSztBQUNMO0FBQ0EsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUN2QixNQUFNLFFBQVEsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO0FBQzNELEtBQUssQ0FBQztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7QUFDMUQsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsSUFBSSxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtB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
