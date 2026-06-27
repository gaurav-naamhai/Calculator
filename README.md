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