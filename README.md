# JavaScript Literals, Identifiers, and Keywords

## Literals
Literals are fixed values that appear directly in source code. They represent constant values.

**Examples:**
- String literals: `"hello"`, `'world'`
- Numeric literals: `42`, `3.14`, `0b1010`
- Boolean literals: `true`, `false`
- Null literal: `null`
- Undefined literal: `undefined`
- BigInt literals: `9007199254740991n`
- Array literals: `[1, 2, 3]`
- Object literals: `{ key: "value" }`
- Regular expression literals: `/\d+/g`

## Identifiers
Identifiers are names used to identify variables, functions, classes, or properties. They follow specific naming rules.

**Rules:**
- Must start with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`)
- Subsequent characters can also include digits (`0-9`)
- Case-sensitive (`myVar` and `MyVar` are different)
- Cannot be a reserved keyword
- Should be meaningful and follow naming conventions

**Examples:**
```javascript
let userName = "Alice";      // camelCase for variables
const MAX_COUNT = 100;        // UPPER_SNAKE_CASE for constants
function calculateSum() {}    // camelCase for functions
class UserProfile {}          // PascalCase for classes
```

## Keywords
Keywords are reserved words in JavaScript that have special meaning. They cannot be used as identifiers.

**Categories:**

| Category | Keywords |
|----------|----------|
| Control flow | `if`, `else`, `switch`, `case`, `break`, `continue`, `return` |
| Loops | `for`, `while`, `do` |
| Variable declaration | `let`, `var`, `const` |
| Functions | `function`, `async`, `await`, `yield` |
| Error handling | `try`, `catch`, `finally`, `throw` |
| Object/Class | `class`, `extends`, `super`, `new`, `this`, `instanceof` |
| Modules | `import`, `export`, `from` |
| Type operators | `typeof`, `void`, `delete` |
| Logical | `in`, `of` |
| Other | `debugger`, `with` |

> **Note:** Words like `NaN`, `Infinity`, `undefined` are not keywords but are global properties. `null`, `true`, and `false` are literals, not keywords.
