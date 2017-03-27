# urlq
A lightweight library to get/set url query string values.

## Usage
```javascript
const urlq = require('urlq');
const q1 = '?sections=carbs,dessert&diets=gluten-free';

urlq.getQueryParamValsFromQuery(q1, 'sections')
=> ['carbs', 'dessert']

urlq.getQueryParamValsFromQuery(q1, 'diets')
=> ['gluten-free']

urlq.getQueryParamValsFromQuery(q1, 'non-existing')
=> []
```

## Functions

<dl>
<dt><a href="#addToQueryParam">addToQueryParam(addV, p, q)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a new query string with values added to a query parameter.</p>
</dd>
<dt><a href="#getQueryParamValsFromQuery">getQueryParamValsFromQuery(q, p)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns an array of values for a query parameter.</p>
</dd>
<dt><a href="#stripFromQueryParam">stripFromQueryParam(stripV, p, q)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a new query string with a value removed from a parameter.</p>
</dd>
<dt><a href="#stripParamFromQuery">stripParamFromQuery(p, q)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a new query string with a parameter removed.</p>
</dd>
<dt><a href="#updateQueryParam">updateQueryParam(q, p, newVals)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a new query string with updated values from a parameter.
If newVals.length = 0 the parameter is removed.</p>
</dd>
<dt><a href="#updateUrlQuery">updateUrlQuery(q)</a></dt>
<dd><p>Updates the browser history with a new query string.</p>
</dd>
</dl>

<a name="addToQueryParam"></a>

## addToQueryParam(addV, p, q) ⇒ <code>String</code>
Returns a new query string with values added to a query parameter.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| addV | <code>\*</code> | The value to add. |
| p | <code>String</code> | The query parameter to update. |
| q | <code>String</code> | The query string. |

<a name="getQueryParamValsFromQuery"></a>

## getQueryParamValsFromQuery(q, p) ⇒ <code>Array</code>
Returns an array of values for a query parameter.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The query string. |
| p | <code>String</code> | The query parameter. |

<a name="stripFromQueryParam"></a>

## stripFromQueryParam(stripV, p, q) ⇒ <code>String</code>
Returns a new query string with a value removed from a parameter.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| stripV | <code>String</code> | The value to remove from a parameter. |
| p | <code>String</code> | The parameter to remove the value. |
| q | <code>String</code> | The query string to update. |

<a name="stripParamFromQuery"></a>

## stripParamFromQuery(p, q) ⇒ <code>String</code>
Returns a new query string with a parameter removed.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| p | <code>String</code> | The parameter to remove. |
| q | <code>String</code> | The query string to update. |

<a name="updateQueryParam"></a>

## updateQueryParam(q, p, newVals) ⇒ <code>String</code>
Returns a new query string with updated values from a parameter.
If newVals.length = 0 the parameter is removed.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The query string to update. |
| p | <code>String</code> | The param to update. |
| newVals | <code>Array</code> | The new values for the param. |

<a name="updateUrlQuery"></a>

## updateUrlQuery(q)
Updates the browser history with a new query string.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The new query string. |


## Test
```javascript
npm test
```
