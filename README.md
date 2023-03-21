# jquery-resizable-cols
_A jQuery plugin to make your table columns resizable_


#### Update v1.1.0
* Works with two rows in `<thead>` tag. Resizing is applied only to the first header row.

#### jQuery.fixTableHeader v1.0.0
* Resize columns in table
* Super Light: just 0.9kb

[Demo](https://koqiui/jquery-resizable-cols/demo/index.html) | [JsFiddle](https://jsfiddle.net/koqiui/17kdea4x/)

Fork From https://github.com/Jo-Geek/jQuery-ResizableColumns

Note Changes : change the behavior like Excels.
  
## Invoking the plugin
```html
<table id="tbResizable">
  <thead>
    <tr>
      <th>col 1</th>
      <th>col 2</th>
      ...
      ...
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Content</td>
      <td>Conent</td>
      ...
      ...
    </tr>
  </tbody>
</table>
```
Invoke plugin on the above table
```javascript
$('#tbResizable').resizableColumns();
```

## Important
- Resizable handlers are `append()` to all the table `th`s.
- Make sure your put your headers inside the `<thead>` tag.
- Adds 'resizer' class to the resizing handlers and 'resizing' class to the `th` that is currently being resized.
