module.exports.addToQueryParam = addToQueryParam;
module.exports.getQueryParamValsFromQuery = getQueryParamValsFromQuery;
module.exports.stripFromQueryParam = stripFromQueryParam;
module.exports.stripParamFromQuery = stripParamFromQuery;
module.exports.updateQueryParam = updateQueryParam;
module.exports.updateUrlQuery = updateUrlQuery;

/**
 * Returns a new query string with values added to a query parameter.
 * @param {*} The value to add.
 * @param {String} p The query parameter to update.
 * @param {String} q The query string. 
 */
function addToQueryParam(addV, p, q) {
  var newQ;
  if (!q.length) newQ = `?${p}=${addV}`;
  else if (q.indexOf(`${p}=`) > -1) {
    let rStr = getQueryParamValsFromQuery(q, p).length ? '$1$2,' : '$1$2';
    newQ = q.replace(_makeQueryParamRegex(p), rStr + addV);
  } else newQ = `${q}&${p}=${addV}`;
  return newQ;
}

/**
 * Returns an array of values for a query parameter.
 * @param {String} q The query string.
 * @param {String} p The query parameter.
 * @returns {Array}
 */
function getQueryParamValsFromQuery(q, p) {
  var qp = q.match(_makeQueryParamRegex(p));
  return qp ? _getQueryParamVals(qp[0]) : [];
}

/**
 * Returns a new query string with a value removed from a parameter.
 * @param {String} stripV The value to remove from a parameter.
 * @param {String} p The parameter to remove the value.
 * @param {String} q The query string to update.
 * @returns {String}
 */
function stripFromQueryParam(stripV, p, q) {
  var qParams = q.split('&'),
    newParams = [];
  qParams.forEach(function(qParam) {
    if (qParam.indexOf(p) > -1) {
      var pVals = _getQueryParamVals(qParam);

      // Don't modify the param if sripV is not in it.
      if (pVals.indexOf(stripV) === -1) newParams.push(qParam);

      // Remove the strip value or exclude the param if it was only value.
      else if (pVals.length > 1) {
        pVals.splice(pVals.indexOf(stripV), 1);
        newParams.push(`${p}=${pVals.join(',')}`);
      }
    } else newParams.push(qParam);
  });
  return _makeValidQuery(newParams.join('&'));
}

/**
 * Returns a new query string with a parameter removed.
 * @param {String} p The parameter to remove.
 * @param {String} q The query string to update.
 * @returns {String}
 */
function stripParamFromQuery(p, q) {
  return _makeValidQuery(q.replace(_makeQueryParamRegex(p), ''));
}

/**
 * Returns a new query string with updated values from a parameter.
 * If newVals.length = 0 the parameter is removed.
 * @param {String} q The query string to update.
 * @param {String} p The param to update.
 * @param {Array} newVals The new values for the param.
 * @returns {String}
 */
function updateQueryParam(q, p, newVals) {
  var newValStr = _slugify(newVals.join(','), true);

  if (!newValStr.length) return stripParamFromQuery(p, q);

  return getQueryParamValsFromQuery(q, p).length ?
    q.replace(_makeQueryParamRegex(p), `$1` + newValStr) :
    addToQueryParam(newValStr, p, q);
}

/**
 * Updates the browser history with a new query string.
 * @param {String} q The new query string.
 */
function updateUrlQuery(q) {
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

function _makeValidQuery(q) {
  var newQ = q[0] !== '?' ? `?${q}` : q;
  newQ = newQ[1] === '&' ? newQ[0] + newQ.slice(2) : newQ;
  return newQ === '?' ? '' : newQ;
}

function _slugify(route, keepComma) {
  if (route) {
    if (!keepComma) route = route.replace(/[,]/g, '');
    return route.replace(/[ ]/g, '-');
  }
  return '';
}
