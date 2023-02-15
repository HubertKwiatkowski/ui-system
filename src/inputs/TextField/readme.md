The `TextField` component is a form element that allows the user to enter and edit text. It can be used for various purposes, such as collecting user input, displaying text, or searching for content.

**Task goal**

Create a `TextField` component based on design

**Requirements**

Component has to implement following properties:

- `` `autoFocus` `` (string)\[_optional_\]: If `true`, the `input` element is focused during the first mount.
- `` `disabled` `` (boolean)\[_optional_\]: Indicates whether the TextField is disabled or not
- `value` (string): The value of the `input` element.
- name (string): Name attribute of the `input` element.
- `placeholder` (string)\[optional\]: The short hint displayed in the `input` before the user enters a value.
- `` `onChange` `` (function): The event source of the callback. You can pull out the new value by accessing `event.target.value` (string).
- `` `label` `` (string): The label content.
- `id` (string): The id of the `input` element.

**Example implementation**
