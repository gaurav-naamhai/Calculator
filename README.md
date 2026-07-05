# Calculator Bug Log

## Bug 1 — Wrong value assigned in `returnIt`

**Location:** `returnIt()` function

**Problem:** The parameter `no` was ignored. Both `primno` and `secno` were being assigned the string literal `"no"` instead of the actual argument passed in.

```js
// Broken
function returnIt(no){
    if(primno==""){
        primno="no"; // string literal, not the variable
    } else {
        secno="no";  // same issue
    }
}

// Fixed
function returnIt(no){
    if(primno==""){
        primno=no;
    } else {
        secno=no;
    }
}
```

---

## Bug 2 — `operate()` was never called

**Location:** `operate()` function definition + call site

**Problem:** The `=` button's event listener was registered *inside* `operate()`, but `operate()` was never invoked. So the listener never got attached and pressing `=` did nothing.

```js
// Broken — defined but never called
function operate(){ 
    eql.addEventListener("click", () => { ... });
}

// Fixed — call it after defining it
operate();
```

---

## Bug 3 — String arithmetic on numeric inputs

**Location:** All four math functions (`add`, `subtract`, `multiply`, `division`)

**Problem:** `primno` and `secno` are stored as strings (e.g. `"3"`, `"4"`). JS string `+` concatenates instead of adding: `"3" + "4" === "34"`. The other operators accidentally work on strings too but return `NaN` in edge cases.

```js
// Broken
function add(no1, no2){
    return no1 + no2; // "3" + "4" = "34"
}

// Fixed — parse before operating
function add(no1, no2){
    return parseInt(no1) + parseInt(no2);
}
// parseInt for +, -, *
// parseFloat for / (to preserve decimal results)
```

---

## Bug 4 — No chained calculation support

**Location:** `=` click handler

**Problem:** After `=` was pressed, `primno` and `secno` kept their old values. The result was never fed back in, so the next operation used stale operands. e.g. `9 * 9 = 81`, then `- 3 =` ran `9 - 3 = 6` instead of `81 - 3 = 78`.

```js
// Broken — state never updated after =
eql.addEventListener("click", () => {
    // calculation ran but primno/secno/operater unchanged
});

// Fixed — result becomes primno, reset the rest
eql.addEventListener("click", () => {
    // ... calculate into answer ...
    primno = String(answer); // String() keeps type consistent for next input
    secno = "";
    operater = "";
});
```

---

## Bug 5 — `innerText` used on an `<input>` element

**Location:** All `display.innerText` assignments in event listeners

**Problem:** `innerText` works on regular elements (`div`, `p`, `span`). `#displayy` is an `<input>`, which has no text node — it has a `value` property. `innerText` silently does nothing on inputs.

```js
// Broken
display.innerText = "1";

// Fixed
display.value = "1";
```

---

## Bug 6 — Del button had no event listener + wrong listener syntax

**Location:** `del.addEventListener()`

**Problem 1:** Del button existed in HTML but had no event listener wired up — clicking it did nothing.

**Problem 2:** When wiring it up, `deleted()` was passed instead of `deleted`. `deleted()` calls the function immediately and passes its return value (`undefined`) as the handler. `deleted` passes the function reference, which is what `addEventListener` expects.

```js
// Broken — calls the function immediately, registers undefined as handler
del.addEventListener("click", deleted())

// Fixed — passes the function reference
del.addEventListener("click", deleted)
```

**What `deleted()` does:** Checks `operater` to know which variable is active, slices the last character off it, and updates the display.

```js
function deleted(){
    if(operater==""){
        primno = primno.slice(0, -1);
        display.value = primno;
    } else {
        secno = secno.slice(0, -1);
        display.value = secno;
    }
}
```

**Googled:** `What string method removes the last character of a string?` → `String.prototype.slice(0, -1)`

---

## Bug 7 — Divide by zero crashed the calculator

**Location:** `division()` function + `=` click handler

**Problem 1:** `division()` had no guard for `no2 == "0"`, so `parseFloat(no1) / 0` returned `Infinity`, which then got stored in `primno` and broke all subsequent calculations.

**Problem 2:** After adding the guard, `division()` returned `undefined` when dividing by zero. The `=` handler then ran `display.value = Math.round(undefined * 100) / 100` — overwrote the error message with `NaN`. Then `primno = String(undefined)` set `primno` to `"undefined"`, poisoning the next calculation.

```js
// Broken — no guard, returns Infinity
function division(no1, no2){
    return parseFloat(no1) / parseFloat(no2);
}

// Fixed — guard resets state and shows error message
function division(no1, no2){
    if(no2 == "0"){
        primno=""; secno=""; operater="";
        display.value = "Hehe,dumb!!";
    } else {
        return parseFloat(no1) / parseFloat(no2);
    }
}
```

**Problem 3:** `=` handler ran `primno = String(answer)` unconditionally. When `division()` returned `undefined`, `String(undefined)` set `primno` to `"undefined"`.

```js
// Broken — runs unconditionally
primno = String(answer);

// Fixed — check for undefined first
if(answer === undefined){
    primno=""; secno=""; operater="";
} else {
    primno = String(answer); secno=""; operater="";
}
```

---

## CSS Bug 1 — Border not visible

**Location:** `.mainbody` in `style.css`

**Problem:** `border`, `border-radius`, and `border-color` were set but `border-style` was missing. Without `border-style`, browsers default to `none` and render no border regardless of other border properties.

```css
/* Broken */
border: 3px;
border-color: #0a0a0a;

/* Fixed */
border: 3px;
border-style: solid;
border-color: #0a0a0a;
```

---

## CSS Bug 2 — Body height confined to content + layout broken

**Location:** `body` in `style.css`

**Problem:** Body had no explicit height, so it only stretched as tall as its content. Centering the calculator also failed because the parent had no full-page dimensions to center within.

```css
/* Fixed — full viewport dimensions + flexbox centering on body */
body {
    margin: 0;
    min-height: 100vh;
    min-width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
```
# Calculator
1.Border although assigned like this:

border: 10px;

border-radius: 3px;

border-color: #0a0a0a;


but problem was that border wasn’t seen


so the solution is:

“border-style: ; “ tag

Therefore,this became the solution:

border: 10px;

border-style: solid;

border-radius: 3px;

border-color: #0a0a0a;


















2.a.why is my border stuck theree above and not allowing me to do anything

b.my bodys height is why just confined to my div and not whole page


solution:

in the body tag make the min height 100 vh and min width 100vw also do the div centering there only as it is the parent tag like this:

body {

margin: 0;

font-family: Georgia, 'Times New Roman', Times, serif;

background-color:bisque;

min-height: 100vh;

min-width: 100vw;

display: flex;

flex-direction: column;

justify-content: center;

flex-direction: row;

align-items: center;

}