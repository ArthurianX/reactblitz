import e, { Fragment as r } from 'react';
import o from 'styled-components';
function t(e, r) {
    var o = {};
    for (var t in e)
        Object.prototype.hasOwnProperty.call(e, t) &&
            r.indexOf(t) < 0 &&
            (o[t] = e[t]);
    if (null != e && 'function' == typeof Object.getOwnPropertySymbols) {
        var i = 0;
        for (t = Object.getOwnPropertySymbols(e); i < t.length; i++)
            r.indexOf(t[i]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, t[i]) &&
                (o[t[i]] = e[t[i]]);
    }
    return o;
}
const i = o.button`
    border: 0;
    line-height: 1;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-weight: bold;
    border-radius: 3px;
    display: inline-block;
    padding: ${(e) =>
        'small' === e.size
            ? '7px 25px 8px'
            : 'medium' === e.size
            ? '9px 30px 11px'
            : '14px 30px 16px'};
    color: ${(e) => (e.primary ? '#1b116e' : '#ffffff')};
    background-color: ${(e) => (e.primary ? '#6bedb5' : '#1b116e')};
    opacity: ${(e) => (e.disabled ? 0.5 : 1)};
    &:hover {
      background-color: ${(e) => (e.primary ? '#55bd90' : '#6bedb5')};
    }
    &:active {
        border: solid 2px #1b116e;
        padding: ${(e) =>
            'small' === e.size
                ? '5px 23px 6px'
                : 'medium' === e.size
                ? '7px 28px 9px'
                : '12px 28px 14px'};
    }
`,
    a = (r) => {
        var { size: o, primary: a, disabled: l, text: p, onClick: d } = r,
            n = t(r, ['size', 'primary', 'disabled', 'text', 'onClick']);
        return e.createElement(
            i,
            Object.assign(
                {
                    type: 'button',
                    onClick: d,
                    primary: a,
                    disabled: l,
                    size: o,
                },
                n,
            ),
            p,
        );
    },
    l = o.input`
    height: 40px;
    width: 300px;
    border-radius: 3px;
    border: solid 2px ${(e) =>
        e.disabled
            ? '#e4e3ea'
            : e.error
            ? '#a9150b'
            : e.success
            ? '#067d68'
            : '#353637'};
    background-color: #fff;
    &:focus{
      border: solid 2px #1b116e;
    }
`,
    p = o.div`
   font-size: 14px;
   color: ${(e) => (e.disabled ? '#e4e3ea' : '#080808')};
   padding-bottom: 6px;
`,
    d = o.div`
   font-size: 14px;
   color: #a9150b8;
   padding-top: 4px;
`,
    n = o.p`
   margin: 0px;
   color: ${(e) => (e.disabled ? '#e4e3ea' : e.error ? '#a9150b' : '#080808')};
`,
    s = (o) => {
        var {
                id: i,
                disabled: a,
                label: s,
                message: c,
                error: b,
                success: x,
                onChange: m,
                placeholder: u,
            } = o,
            f = t(o, [
                'id',
                'disabled',
                'label',
                'message',
                'error',
                'success',
                'onChange',
                'placeholder',
            ]);
        return e.createElement(
            r,
            null,
            e.createElement(
                p,
                null,
                e.createElement(n, { disabled: a, error: b }, s),
            ),
            e.createElement(
                l,
                Object.assign(
                    {
                        id: i,
                        type: 'text',
                        onChange: m,
                        disabled: a,
                        error: b,
                        success: x,
                        placeholder: u,
                    },
                    f,
                ),
            ),
            e.createElement(d, null, e.createElement(n, { error: b }, c)),
        );
    };
export { a as Button, s as Input };
//# sourceMappingURL=index.js.map
