Passcoder
=========

Passcoder is jQuery plugin to create a passcode UI for an input field. By default, it takes a single input, and turns it into 4 fields, each containing one character. when a character is input, the focus moves to the next field. Passcoder is easy to use.

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

Form Submition
-----------

Because passcoder creates several inputs, it needs to join the values of each input upon form submition. To do this, Passcoder will remove the `name` attribute from each of the passcoder inputs (to not post the data), and creates a new hidden input field, with the same `name` attribute. The idea is so you only need to call `element.passcoder()` and everything else will be taken care of. 
You can still create bindings for submition on the form, passcoder will still render the values.
