The Link component is a UI element that allows the user to navigate to a different page or URL when clicked. It can be used to create a navigation menu, or to link to external resources. The Link component can have different styles, such as primary, secondary, or warning, to indicate its purpose or importance.

**Task goal**

Create a Link component

**Requirements**  

Component has to implement following properties:

* `to` (string): The target URL for the link
* `id` (string)\[_optional_\]: The ID of the link element
* target (string)\[_optional_\]: Specifies where to open the linked document. Can be one of '_\_blank_', '_\_self_', '_\_parent_', '_\_top_'
* `disabled` (boolean)\[_optional_\]: Indicates whether the link is disabled or not
* `onClick` (function)\[_optional_\]: A function that is called when the link is clicked
* `variant` (string): The variant of the button style. Can be one of 'primary', 'secondary'

**Expected result**