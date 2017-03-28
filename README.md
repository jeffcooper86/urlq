# urlq
A lightweight library to get/set url query string values.

## Usage
```javascript
const urlq = require('urlq');
const q1 = '?sections=carbs,dessert&diets=gluten-free';

urlq.getParam(q1, 'sections')
=> ['carbs', 'dessert']

urlq.getParam(q1, 'diets')
=> ['gluten-free']

urlq.getParam(q1, 'non-existing')
=> []

urlq.addVal(q1, 'sections', 'soups')
=> '?sections=carbs,dessert,soups&diets=gluten-free'
```

## Functions

<dl>
<dt><a href="#addVal">addVal(q, p, v)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a new query string with values added to a query parameter.</p>
</dd>
<dt><a href="#getParam">getParam(q, p)</a> ⇒ <code>Array</code></dt>
<dd><p>Returns an array of values for a query parameter.</p>
</dd>
<dt><a href="#makeValidQuery">makeValidQuery(q)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a valid formatted url query string</p>
</dd>
<dt><a href="#removeVal">removeVal(q, p, v)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a new query string with a value removed from a parameter.</p>
</dd>
<dt><a href="#removeParam">removeParam(q, p)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a new query string with a parameter removed.</p>
</dd>
<dt><a href="#updateParam">updateParam(q, p, vs)</a> ⇒ <code>String</code></dt>
<dd><p>Returns a new query string with updated values from a parameter.
If newVals.length = 0 the parameter is removed.</p>
</dd>
<dt><a href="#updateQuery">updateQuery(q)</a></dt>
<dd><p>Updates the browser history with a new query string.</p>
</dd>
</dl>

<a name="addVal"></a>

## addVal(q, p, v) ⇒ <code>String</code>
Returns a new query string with values added to a query parameter.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The query string. |
| p | <code>String</code> | The query parameter to update. |
| v | <code>\*</code> | The value to add. |

<a name="getParam"></a>

## getParam(q, p) ⇒ <code>Array</code>
Returns an array of values for a query parameter.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The query string. |
| p | <code>String</code> | The query parameter. |

<a name="makeValidQuery"></a>

## makeValidQuery(q) ⇒ <code>String</code>
Returns a valid formatted url query string

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The query string to format. |

<a name="removeVal"></a>

## removeVal(q, p, v) ⇒ <code>String</code>
Returns a new query string with a value removed from a parameter.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The query string to update. |
| p | <code>String</code> | The parameter to remove the value. |
| v | <code>String</code> | The value to remove from a parameter. |

<a name="removeParam"></a>

## removeParam(q, p) ⇒ <code>String</code>
Returns a new query string with a parameter removed.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The query string to update. |
| p | <code>String</code> | The parameter to remove. |

<a name="updateParam"></a>

## updateParam(q, p, vs) ⇒ <code>String</code>
Returns a new query string with updated values from a parameter.
If newVals.length = 0 the parameter is removed.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The query string to update. |
| p | <code>String</code> | The param to update. |
| vs | <code>Array</code> | The new values for the param. |

<a name="updateQuery"></a>

## updateQuery(q)
Updates the browser history with a new query string.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| q | <code>String</code> | The new query string. |


## Test
```javascript
npm test
```
