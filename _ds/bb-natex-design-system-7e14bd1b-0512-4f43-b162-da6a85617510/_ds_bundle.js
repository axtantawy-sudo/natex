/* @ds-bundle: {"format":3,"namespace":"BBNatexDesignSystem_7e14bd","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"343ac4a94951","components/core/Button.jsx":"1a8dacb99efb","components/core/Card.jsx":"f19dae7bf45d","components/core/Input.jsx":"eb341943a4b9","components/core/Tag.jsx":"33f71d0ffe99"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BBNatexDesignSystem_7e14bd = window.BBNatexDesignSystem_7e14bd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const COLORS = {
  neutral: {
    bg: 'var(--color-neutral-100)',
    color: 'var(--color-neutral-700)',
    border: 'var(--color-neutral-200)'
  },
  success: {
    bg: 'var(--color-green-100)',
    color: 'var(--color-green-700)',
    border: 'var(--color-green-200)'
  },
  warning: {
    bg: 'var(--color-yellow-100)',
    color: 'var(--color-yellow-600)',
    border: 'var(--color-yellow-200)'
  },
  error: {
    bg: '#FFF0EE',
    color: '#C0392B',
    border: '#FDD9D7'
  },
  info: {
    bg: 'var(--color-navy-100)',
    color: 'var(--color-navy-700)',
    border: 'var(--color-navy-200)'
  },
  brand: {
    bg: 'var(--color-navy-800)',
    color: '#fff',
    border: 'var(--color-navy-800)'
  },
  bb: {
    bg: 'var(--color-teal-100)',
    color: 'var(--color-teal-700)',
    border: 'var(--color-teal-200)'
  },
  ninja: {
    bg: 'var(--color-navy-100)',
    color: 'var(--color-navy-500)',
    border: 'var(--color-navy-200)'
  },
  oxi: {
    bg: 'var(--color-purple-100)',
    color: 'var(--color-purple-600)',
    border: 'var(--color-purple-200)'
  },
  breeze: {
    bg: 'var(--color-green-100)',
    color: 'var(--color-green-600)',
    border: 'var(--color-green-200)'
  }
};
const SIZES = {
  sm: {
    padding: '2px 6px',
    fontSize: '10px'
  },
  md: {
    padding: '4px 10px',
    fontSize: '11px'
  }
};
function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  style = {}
}) {
  const c = COLORS[variant] || COLORS.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${c.border}`,
      background: c.bg,
      color: c.color,
      lineHeight: 1,
      ...SIZES[size],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const BASE = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-semibold)',
  letterSpacing: 'var(--tracking-wide)',
  textTransform: 'uppercase',
  border: '2px solid transparent',
  borderRadius: 'var(--radius-sm)',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  lineHeight: 1,
  cursor: 'pointer',
  userSelect: 'none',
  transition: 'background-color 150ms var(--ease-out), box-shadow 150ms var(--ease-out), transform 80ms var(--ease-out), border-color 150ms var(--ease-out)'
};
const SIZES = {
  sm: {
    padding: 'var(--pad-btn-sm)',
    fontSize: 'var(--text-xs)',
    gap: 'var(--gap-xs)'
  },
  md: {
    padding: 'var(--pad-btn-md)',
    fontSize: 'var(--text-sm)',
    gap: 'var(--gap-sm)'
  },
  lg: {
    padding: 'var(--pad-btn-lg)',
    fontSize: 'var(--text-base)',
    gap: 'var(--gap-sm)'
  }
};
function variantStyle(variant, h, a) {
  switch (variant) {
    case 'primary':
      return {
        background: a ? 'var(--interactive-primary-active)' : h ? 'var(--interactive-primary-hover)' : 'var(--interactive-primary)',
        color: 'var(--text-on-dark)',
        boxShadow: h && !a ? 'var(--shadow-brand-sm)' : 'none'
      };
    case 'secondary':
      return {
        background: h ? 'var(--interactive-ghost-hover)' : 'transparent',
        borderColor: 'var(--color-navy-800)',
        color: 'var(--text-brand)'
      };
    case 'ghost':
      return {
        background: a ? 'var(--interactive-ghost-active)' : h ? 'var(--interactive-ghost-hover)' : 'transparent',
        color: 'var(--text-primary)'
      };
    case 'accent':
      return {
        background: a ? 'var(--interactive-accent-active)' : h ? 'var(--interactive-accent-hover)' : 'var(--interactive-accent)',
        color: 'var(--text-on-accent)',
        boxShadow: h && !a ? 'var(--shadow-accent-sm)' : 'none'
      };
    case 'bbl':
      return {
        background: a ? 'var(--color-navy-900)' : h ? 'var(--color-navy-800)' : 'var(--color-yellow-500)',
        color: a || h ? '#FCE400' : 'var(--color-navy-900)',
        boxShadow: h && !a ? '0 4px 14px rgba(252,228,0,0.35)' : 'none'
      };
    case 'refill':
      return {
        background: a ? '#2B1240' : h ? '#7B3FAF' : '#592D80',
        color: '#fff',
        boxShadow: h && !a ? '0 4px 14px rgba(89,45,128,0.30)' : 'none'
      };
    case 'danger':
      return {
        background: a ? '#7B241C' : h ? '#922B21' : '#C0392B',
        color: '#fff'
      };
    default:
      return {};
  }
}
function Button({
  children,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon = null,
  iconAfter = null,
  onClick,
  type = 'button',
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [a, setA] = React.useState(false);
  const vs = variantStyle(variant, h && !disabled, a && !disabled);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: {
      ...BASE,
      ...SIZES[size],
      ...vs,
      transform: a && !disabled ? 'scale(0.97)' : 'scale(1)',
      opacity: disabled ? 0.45 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    },
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setA(false);
    },
    onMouseDown: () => !disabled && setA(true),
    onMouseUp: () => setA(false),
    onClick: !disabled && !loading ? onClick : undefined
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, loading ? '...' : children), iconAfter && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexShrink: 0
    }
  }, iconAfter));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  default: {
    background: 'var(--surface-card)',
    border: 'var(--card-border)',
    boxShadow: 'var(--card-shadow)'
  },
  outlined: {
    background: 'var(--surface-card)',
    border: 'var(--card-border)',
    boxShadow: 'none'
  },
  elevated: {
    background: 'var(--surface-card)',
    border: 'none',
    boxShadow: 'var(--shadow-md)'
  },
  interactive: {
    background: 'var(--surface-card)',
    border: 'var(--card-border)',
    boxShadow: 'var(--card-shadow)'
  },
  dark: {
    background: 'var(--surface-dark)',
    border: 'none',
    boxShadow: 'none',
    color: 'var(--text-on-dark)'
  },
  accent: {
    background: 'var(--surface-accent)',
    border: 'none',
    boxShadow: 'none',
    color: 'var(--text-on-accent)'
  },
  bb: {
    background: 'var(--surface-bbl)',
    border: 'none',
    boxShadow: 'none',
    color: '#fff'
  }
};
function Card({
  children,
  variant = 'default',
  padding = true,
  onClick,
  style = {},
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const isInteractive = variant === 'interactive' || !!onClick;
  const v = VARIANTS[variant] || VARIANTS.default;
  const hoverOverride = isInteractive && h ? {
    boxShadow: 'var(--shadow-md)',
    borderColor: 'var(--border-default)'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: 'var(--card-radius)',
      padding: padding ? 'var(--pad-card)' : 0,
      transition: 'box-shadow 150ms var(--ease-out), border-color 150ms var(--ease-out), transform 150ms var(--ease-out)',
      cursor: isInteractive ? 'pointer' : 'default',
      transform: isInteractive && h ? 'translateY(-2px)' : 'translateY(0)',
      ...v,
      ...hoverOverride,
      ...style
    },
    onClick: onClick,
    onMouseEnter: () => isInteractive && setH(true),
    onMouseLeave: () => isInteractive && setH(false)
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '6px 10px',
    fontSize: 'var(--text-xs)'
  },
  md: {
    padding: 'var(--pad-input)',
    fontSize: 'var(--text-sm)'
  },
  lg: {
    padding: '12px 14px',
    fontSize: 'var(--text-base)'
  }
};
function Input({
  label,
  hint,
  error,
  type = 'text',
  value,
  onChange,
  placeholder,
  disabled = false,
  required = false,
  icon = null,
  size = 'md',
  id,
  name,
  style = {},
  inputStyle = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const hasError = !!error;
  const borderColor = hasError ? '#C0392B' : focused ? 'var(--color-navy-500)' : 'var(--border-default)';
  const shadow = focused ? hasError ? '0 0 0 3px rgba(192,57,43,0.22)' : 'var(--focus-ring)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: hasError ? '#C0392B' : 'var(--text-secondary)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#C0392B',
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      display: 'flex',
      color: 'var(--text-tertiary)',
      pointerEvents: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    name: name,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      width: '100%',
      ...SIZES[size],
      fontFamily: 'var(--font-sans)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-sm)',
      background: disabled ? 'var(--surface-subtle)' : 'var(--surface-card)',
      color: disabled ? 'var(--text-disabled)' : 'var(--text-primary)',
      boxShadow: shadow,
      outline: 'none',
      transition: 'border-color 150ms var(--ease-out), box-shadow 150ms var(--ease-out)',
      paddingLeft: icon ? 34 : undefined,
      cursor: disabled ? 'not-allowed' : 'text',
      ...inputStyle
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: hasError ? '#C0392B' : 'var(--text-tertiary)',
      fontFamily: 'var(--font-sans)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const COLORS = {
  neutral: {
    bg: 'var(--color-neutral-100)',
    color: 'var(--color-neutral-800)',
    border: 'var(--color-neutral-300)'
  },
  brand: {
    bg: 'var(--color-navy-100)',
    color: 'var(--color-navy-800)',
    border: 'var(--color-navy-200)'
  },
  bb: {
    bg: 'var(--color-yellow-50)',
    color: 'var(--color-navy-700)',
    border: 'var(--color-yellow-200)'
  },
  green: {
    bg: 'var(--color-green-100)',
    color: 'var(--color-green-700)',
    border: 'var(--color-green-200)'
  },
  yellow: {
    bg: 'var(--color-yellow-100)',
    color: 'var(--color-yellow-600)',
    border: 'var(--color-yellow-200)'
  },
  purple: {
    bg: 'var(--color-purple-100)',
    color: 'var(--color-purple-600)',
    border: 'var(--color-purple-200)'
  }
};
function Tag({
  children,
  onDismiss,
  color = 'neutral',
  style = {}
}) {
  const c = COLORS[color] || COLORS.neutral;
  const [hx, setHx] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-sans)',
      fontSize: '12px',
      fontWeight: 'var(--weight-medium)',
      border: `1px solid ${c.border}`,
      background: c.bg,
      color: c.color,
      lineHeight: 1,
      userSelect: 'none',
      ...style
    }
  }, children, onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Remove",
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 14,
      height: 14,
      padding: 0,
      border: 'none',
      background: hx ? 'rgba(0,0,0,0.18)' : 'rgba(0,0,0,0.1)',
      borderRadius: '50%',
      cursor: 'pointer',
      color: 'inherit',
      fontSize: 9,
      fontWeight: 700,
      lineHeight: 1,
      transition: 'background 150ms'
    },
    onMouseEnter: () => setHx(true),
    onMouseLeave: () => setHx(false)
  }, "\u2715"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Tag = __ds_scope.Tag;

})();
