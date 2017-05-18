/**
 * ============================================================================
 * Stacks
 * ============================================================================
 */

// Basic ES6 class
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  clear() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.toString());
  }
}

// ES6 Class with scoped Symbols
// let _items = Symbol();
//
// class Stack {
//   constructor() {
//     this[_items] = [];
//   }
//
//   push(value) {
//     this[_items].push(value);
//   }
//
//   pop() {
//     return this[_items].pop();
//   }
//
//   peek() {
//     return this[_items][this[_items].length - 1];
//   }
//
//   isEmpty() {
//     return this[_items].length === 0;
//   }
//
//   clear() {
//     this[_items] = [];
//   }
//
//   size() {
//     return this[_items].length;
//   }
//
//   print() {
//     console.log(this[_items].toString());
//   }
// }

// ES6 class with WeakMap
// let Stack = (function () {
//   const items = new WeakMap();
//
//   class Stack {
//     constructor() {
//       items.set(this, []);
//     }
//
//     push(value) {
//       const s = items.get(this);
//       s.push(value);
//     }
//
//     pop() {
//       const s = items.get(this);
//       const r = s.pop();
//       return r;
//     }
//
//     peek() {
//       const s = items.get(this);
//       return s[s.length - 1];
//     }
//
//     isEmpty() {
//       return items.get(this).length === 0;
//     }
//
//     clear() {
//       items.set(this, []);
//     }
//
//     size() {
//       const s = items.get(this);
//       return s.length;
//     }
//
//     print() {
//       console.log(this.toString());
//     }
//
//     toString() {
//       return items.get(this).toString();
//     }
//   }
//   return Stack;
// })();
//
const stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push(5);
stack.push(8);
console.log(stack.peek()); // 8
stack.push(11);
console.log(stack.size()); // 3
console.log(stack.isEmpty()); // false
stack.push(15);
stack.pop();
stack.pop();
console.log(stack.size()); // 2
stack.print();
stack.clear();
stack.print();

// NOTE: Use if creating Symbol-based stack
// const objectSymbols = Object.getOwnPropertySymbols(stack);
// console.log(objectSymbols.length);
// console.log(objectSymbols);
// console.log(objectSymbols[0]);
// stack[objectSymbols[0]].push(1);
// stack.print();

/**
 * ============================================================================
 * Solving Problems with Stacks
 * ============================================================================
 *
 * Stacks are useful for undo actions and othe backtracking problems.
 * Java and C# use stacks to store variables and method calls, and there
 * is a stack overflow exception thrown especially for working with recursive
 * algorithms.
 */

/**
 * ============================================================================
 * Algorithm Practice: Decimal to binary
 * ============================================================================
 *
 * To convert a decimal number to its binary representation, we can divide
 * the number by 2 (binary is a base 2 number system) until the division result
 * is 0. As an example, we'll convert the number 10 into binary digits.
 *
 * First things first, let's review some basic math...
 * NOTE: Modulo - getting the remainder
 * 5 % 2 === 1
 *  _2___
 * 2|5
 *  -4
 *   --
 *   1 --> rem
 *
 * 2 % 3 === 2
 *  _0___
 * 3|2
 *  -0
 *   --
 *   2 --> rem
 *
 * Now, let's see the basic chain of operations required to perform the
 * conversion of 10 to binary
 *
 * 10 / 2 == 5 rem == 0 -> push rem to stack          ^  [ 1 ] pop rem
 *             \                                      |           |
 *     5 / 2 == 2 rem == 1 -> push rem to stack       |  [ 0 ]    |
 *               \                                    |           |
 *        2 / 2 == 1 rem == 0 -> push rem to stack    |  [ 1 ]    |
 *                 \                                  |           |
 *          1 / 2 == 0 rem == 1 -> push rem to stack  |  [ 0 ]    v
 *                                                 push rem
 */

const divideBy2 = decimalNumber => {
  const remainderStack = new Stack();

  let _decimalNumber = decimalNumber;
  let remainder = null;
  let binaryString = '';

  while (_decimalNumber > 0) {
    remainder = Math.floor(_decimalNumber % 2);
    remainderStack.push(remainder);
    _decimalNumber = Math.floor(_decimalNumber / 2);
  }

  while (!remainderStack.isEmpty()) {
    binaryString += remainderStack.pop();
  }

  return binaryString;
};

console.log(divideBy2(233)); // 11101001
console.log(divideBy2(10)); // 1010
console.log(divideBy2(1000)); // 1111101000

const baseConverter = (decimalNumber, base) => {
  const stack = new Stack();

  let _decimalNumber = decimalNumber;
  let remainder = null;
  let baseString = '';
  const digits = '0123456789ABCDEF';

  while (_decimalNumber > 0) {
    remainder = Math.floor(_decimalNumber % base);
    stack.push(remainder);
    _decimalNumber = Math.floor(_decimalNumber / base);
  }

  while (!stack.isEmpty()) {
    baseString += digits[stack.pop()];
  }

  return baseString;
};

console.log(baseConverter(100345, 2));
console.log(baseConverter(100345, 8));
console.log(baseConverter(100345, 16));

/**
 * ============================================================================
 * Algorithm Practice: Balanced Parentheses
 * ============================================================================
 */

const checkForBalanced = (symbols) => {
  const stack = new Stack();

  let balanced = true;
  const opens = '({[';
  const closers = ')}]';

  let idx = 0;
  let top = null;
  let symbol = null;

  // While there are symbols and balanced true
  while (idx < symbols.length && balanced) {
    // the current symbol is the charAt idx position
    symbol = symbols.charAt(idx);
    // if current symbol in opens group
    if (opens.indexOf(symbol) >= 0) {
      // push to the stack
      stack.push(symbol);
    } else {
      // current symbol was not in opens group, get top item
      top = stack.pop();
      // NOTE: this could be undefined, if we start with unbalanced
      // if top and symbol do not share the same position in their
      // respective groups, they are not balanced!
      if (!(opens.indexOf(top) === closers.indexOf(symbol))) {
        balanced = false;
      }
    }

    // step through to next symbol in symbols
    idx++;
  }

  // if balanced true and stack has been traversed and compared, return true
  if (balanced && stack.isEmpty()) {
    return true;
  }
  // otherwise return false
  return false;
};

console.log(checkForBalanced('{([])}'));
console.log(checkForBalanced('{{([][])}()}'));
console.log(checkForBalanced('[{()]'));
console.log(checkForBalanced('{]'));

/**
 * ============================================================================
 * Algorithm Practice: Tower of Hanoi
 * ============================================================================
 *         __                   ___               ___
 *         | |                  | |               | |
 *      ___|_|__                | |               | |
 *     _|______|___             | |               | |
 *  __|___________|__           | |               | |
 *  |_______________|___________| |_______________| |__________________________
 */

const towerOfHanoi = (n, from, to, helper) => {
  if (n > 0) {
    towerOfHanoi(n - 1, from, helper, to);
    to.push(from.pop());
    towerOfHanoi(n - 1, helper, to, from);
  }
};

const source = new Stack();
source.push(3);
source.push(2);
source.push(1);

const dest = new Stack();
const helper = new Stack();

towerOfHanoi(source.size(), source, dest, helper);

source.print();
helper.print();
dest.print();
