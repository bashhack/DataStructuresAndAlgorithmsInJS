/**
 * ============================================================================
 * Linked Lists
 * ============================================================================
 */

let LinkedList = (() => {
  class Node {
    constructor(e) {
      this.e = e;
      this.next = null;
    }
  }

  const length = new WeakMap();
  const head = new WeakMap();

  class LinkedList {
    constructor() {
      length.set(this, 0);
      head.set(this, null);
    }

    append(e) {
      let node = new Node(e);
      let current = null;

      // if first node on list
      if (this.getHead() === null) {
        head.set(this, node);
      } else {
        current = this.getHead();

        // loop the linked list until we find the last item
        while (current.next) {
          current = current.next;
        }

        // get last item, assign next to added item to make the link
        current.next = node;
      }

      // update size of list
      let ls = this.size();
      ls++;
      length.set(this, ls);
    }

    insert(position, e) {
      // check for out-of-bounds values
      if (position >= 0 && position <= this.size()) {
        const node = new Node(e);
        let current = this.getHead();
        let previous = null;
        let idx = 0;

        // add on first position
        if (position === 0) {
          node.next = current;
          head.set(this, node);
        } else {
          while (idx++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }

        // update size of list
        let ls = this.size();
        ls++;
        length.set(this, ls);

        return true;
      }
      return false;
    }

    removeAt(position) {
      // check for out-of-bounds values
      if (position > -1 && position < this.size()) {
        let current = this.getHead();
        let previous = null;
        let idx = 0;

        // removing first item
        if (position === 0) {
          head.set(this, current.next);
        } else {
          while (idx++ < position) {
            previous = current;
            current = current.next;
          }

          // link previous with current's next - skip it to remove
          previous.next = current.next;
        }

        let ls = this.size();
        l--;
        length.set(this, ls);

        return current.e;
      }
      return null;
    }

    remove(e) {
      return this.removeAt(this.indexOf(e));
    }

    indexOf(e) {
      let current = this.getHead();
      let idx = 0;

      while (current) {
        if (e === current.e) {
          return idx;
        }
        idx++;
        current = current.next;
      }
      return -1;
    }

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return length.get(this);
    }

    getHead() {
      return head.get(this);
    }

    toString() {
      let current = this.getHead();
      let string = '';

      while (current) {
        string += current.e + (current.next ? ', ' : '');
        current = current.next;
      }
      return string;
    }

    print() {
      console.log(this.toString());
    }
  }
  return LinkedList;
})();

/**
 * ============================================================================
 * Doubly Linked Lists
 * ============================================================================
 */

let LinkedList = (() => {
  class Node {
    constructor(e) {
      this.e = e;
      this.next = null;
    }
  }

  const length = new WeakMap();
  const head = new WeakMap();

  class LinkedList {
    constructor() {
      length.set(this, 0);
      head.set(this, null);
    }

    append(e) {
      let node = new Node(e);
      let current = null;

      // if first node on list
      if (this.getHead() === null) {
        head.set(this, node);
      } else {
        current = this.getHead();

        // loop the linked list until we find the last item
        while (current.next) {
          current = current.next;
        }

        // get last item, assign next to added item to make the link
        current.next = node;
      }

      // update size of list
      let ls = this.size();
      ls++;
      length.set(this, ls);
    }

    insert(position, e) {
      // check for out-of-bounds values
      if (position >= 0 && position <= this.size()) {
        const node = new Node(e);
        let current = this.getHead();
        let previous = null;
        let idx = 0;

        // add on first position
        if (position === 0) {
          node.next = current;
          head.set(this, node);
        } else {
          while (idx++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }

        // update size of list
        let ls = this.size();
        ls++;
        length.set(this, ls);

        return true;
      }
      return false;
    }

    removeAt(position) {
      // check for out-of-bounds values
      if (position > -1 && position < this.size()) {
        let current = this.getHead();
        let previous = null;
        let idx = 0;

        // removing first item
        if (position === 0) {
          head.set(this, current.next);
        } else {
          while (idx++ < position) {
            previous = current;
            current = current.next;
          }

          // link previous with current's next - skip it to remove
          previous.next = current.next;
        }

        let ls = this.size();
        l--;
        length.set(this, ls);

        return current.e;
      }
      return null;
    }

    remove(e) {
      return this.removeAt(this.indexOf(e));
    }

    indexOf(e) {
      let current = this.getHead();
      let idx = 0;

      while (current) {
        if (e === current.e) {
          return idx;
        }
        idx++;
        current = current.next;
      }
      return -1;
    }

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return length.get(this);
    }

    getHead() {
      return head.get(this);
    }

    toString() {
      let current = this.getHead();
      let string = '';

      while (current) {
        string += current.e + (current.next ? ', ' : '');
        current = current.next;
      }
      return string;
    }

    print() {
      console.log(this.toString());
    }
  }
  return LinkedList;
})();

/**
 * ============================================================================
 * Circular Linked Lists
 * ============================================================================
 */

let LinkedList = (() => {
  class Node {
    constructor(e) {
      this.e = e;
      this.next = null;
    }
  }

  const length = new WeakMap();
  const head = new WeakMap();

  class LinkedList {
    constructor() {
      length.set(this, 0);
      head.set(this, null);
    }

    append(e) {
      let node = new Node(e);
      let current = null;

      // if first node on list
      if (this.getHead() === null) {
        head.set(this, node);
      } else {
        current = this.getHead();

        // loop the linked list until we find the last item
        while (current.next) {
          current = current.next;
        }

        // get last item, assign next to added item to make the link
        current.next = node;
      }

      // update size of list
      let ls = this.size();
      ls++;
      length.set(this, ls);
    }

    insert(position, e) {
      // check for out-of-bounds values
      if (position >= 0 && position <= this.size()) {
        const node = new Node(e);
        let current = this.getHead();
        let previous = null;
        let idx = 0;

        // add on first position
        if (position === 0) {
          node.next = current;
          head.set(this, node);
        } else {
          while (idx++ < position) {
            previous = current;
            current = current.next;
          }
          node.next = current;
          previous.next = node;
        }

        // update size of list
        let ls = this.size();
        ls++;
        length.set(this, ls);

        return true;
      }
      return false;
    }

    removeAt(position) {
      // check for out-of-bounds values
      if (position > -1 && position < this.size()) {
        let current = this.getHead();
        let previous = null;
        let idx = 0;

        // removing first item
        if (position === 0) {
          head.set(this, current.next);
        } else {
          while (idx++ < position) {
            previous = current;
            current = current.next;
          }

          // link previous with current's next - skip it to remove
          previous.next = current.next;
        }

        let ls = this.size();
        l--;
        length.set(this, ls);

        return current.e;
      }
      return null;
    }

    remove(e) {
      return this.removeAt(this.indexOf(e));
    }

    indexOf(e) {
      let current = this.getHead();
      let idx = 0;

      while (current) {
        if (e === current.e) {
          return idx;
        }
        idx++;
        current = current.next;
      }
      return -1;
    }

    isEmpty() {
      return this.size() === 0;
    }

    size() {
      return length.get(this);
    }

    getHead() {
      return head.get(this);
    }

    toString() {
      let current = this.getHead();
      let string = '';

      while (current) {
        string += current.e + (current.next ? ', ' : '');
        current = current.next;
      }
      return string;
    }

    print() {
      console.log(this.toString());
    }
  }
  return LinkedList;
})();
