module.exports.addVal = addVal;
module.exports.getParam = getParam;
module.exports.makeValidQuery = makeValidQuery;
module.exports.removeVal = removeVal;
module.exports.removeParam = removeParam;
module.exports.updateParam = updateParam;
module.exports.updateQuery = updateQuery;

/**
 * Returns a new query string with values added to a query parameter.
 * @param {String} q The query string.
 * @param {String} p The query parameter to update.
 * @param {*} v The value to add.
 * @returns {String}
 */
function addVal(q, p, v) {
  var newQ;
  if (!q.length) newQ = `?${p}=${v}`;
  else if (q.indexOf(`${p}=`) > -1) {
    let rStr = getParam(q, p).length ? '$1$2,' : '$1$2';
    newQ = q.replace(_makeQueryParamRegex(p), rStr + v);
  } else newQ = `${q}&${p}=${v}`;
  return newQ;
}

/**
 * Returns an array of values for a query parameter.
 * @param {String} q The query string.
 * @param {String} p The query parameter.
 * @returns {Array}
 */
function getParam(q, p) {
  var qp = q.match(_makeQueryParamRegex(p));
  return qp ? _getQueryParamVals(qp[0]) : [];
}

/**
 * Returns a valid formatted url query string
 * @param {String} q The query string to format.
 * @returns {String}
 */
function makeValidQuery(q) {
  var newQ = q[0] !== '?' ? `?${q}` : q;
  newQ = newQ[1] === '&' ? newQ[0] + newQ.slice(2) : newQ;
  return newQ === '?' ? '' : newQ;
}

/**
 * Returns a new query string with a value removed from a parameter.
 * @param {String} q The query string to update.
 * @param {String} p The parameter to remove the value.
 * @param {String} v The value to remove from a parameter.
 * @returns {String}
 */
function removeVal(q, p, v) {
  var qParams = q.split('&'),
    newParams = [];
  qParams.forEach(function(qParam) {
    if (qParam.indexOf(p) > -1) {
      var pVals = _getQueryParamVals(qParam);

      // Don't modify the param if sripV is not in it.
      if (pVals.indexOf(v) === -1) newParams.push(qParam);

      // Remove the strip value or exclude the param if it was only value.
      else if (pVals.length > 1) {
        pVals.splice(pVals.indexOf(v), 1);
        newParams.push(`${p}=${pVals.join(',')}`);
      }
    } else newParams.push(qParam);
  });
  return makeValidQuery(newParams.join('&'));
}

/**
 * Returns a new query string with a parameter removed.
 * @param {String} q The query string to update.
 * @param {String} p The parameter to remove.
 * @returns {String}
 */
function removeParam(q, p) {
  return makeValidQuery(q.replace(_makeQueryParamRegex(p), ''));
}

/**
 * Returns a new query string with updated values from a parameter.
 * If newVals.length = 0 the parameter is removed.
 * @param {String} q The query string to update.
 * @param {String} p The param to update.
 * @param {Array} vs The new values for the param.
 * @returns {String}
 */
function updateParam(q, p, vs) {
  var newValStr = _slugify(vs.join(','), true);

  if (!newValStr.length) return removeParam(q, p);

  return getParam(q, p).length ?
    q.replace(_makeQueryParamRegex(p), `$1` + newValStr) :
    addVal(q, p, newValStr);
}

/**
 * Updates the browser history with a new query string.
 * @param {String} q The new query string.
 */
function updateQuery(q) {
  history.replaceState({}, '', window.location.pathname + q);
}

/*
 * Private funcs.
 * ----------------------------
 */

function _getQueryParamVals(qp) {
  var strippedQp = qp.slice(qp.indexOf('=') + 1);
  return strippedQp.length ? strippedQp.split(',') : [];
}

function _makeQueryParamRegex(p) {
  return new RegExp(`(&?${p}=)([^&]*)`);
}

function _slugify(route, keepComma) {
  if (route) {
    if (!keepComma) route = route.replace(/[,]/g, '');
    return route.replace(/[ ]/g, '-');
  }
  return '';
}
