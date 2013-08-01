Passcoder
=========

Getting started with Passcoder
---------

Grab a copy of `passcoder.js` or `passcoder.min.js` and include it in your page after jQuery. Simple as that.

Using Passcoder
---------

Any textual input can be Passcoded. When an input becomes passcoded, it retains the original size of the input field. If you have an input that is 150px, the resulting passcoded input (including margins and paddings) will span the same 150px.  
  
To passcode an input field, simply call  

`$('.myInputField').passcode();`  
  
This will use the default values for passcoder. This will make 4 input boxes, and a margin (left and right) of 5px for every input.

Overiding Defaults
---------

To call passcoder to use more or less inputs, or put more distance between the inputs, simply call passcoder like this:
  
    $('.myInputField').passcode({  
        characters: 5,  
        margin: 10  
    });
