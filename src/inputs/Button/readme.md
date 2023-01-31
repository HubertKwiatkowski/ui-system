The `Button` component is a simple UI element that allows the user to perform an action when clicked. It can be used to submit a form, trigger an event, or navigate to a different page. The Button component can have different styles, such as primary, secondary, or warning, to indicate its purpose or importance.

**Task goal**

Create a `Button` component based on design

**Requirements**  

Component has to implement following properties:

* `` `type` `` (string)\[_optional_\]: The type of the button element. Can be one of '_button_' or '_submit_'.
* `` `disabled` `` (boolean)\[_optional_\]: Indicates whether the button is disabled or not. Default to _false_
* `` `isLoading` `` (boolean)\[_optional_\]: Indicates when button is in loading state. Default to _false_
* `` `onClick` `` (function): A function that is called when the button is clicked
* `` `variant` `` (string): The variant of the button style. Can be one of '_primary_', '_secondary_'

**Example implementation**