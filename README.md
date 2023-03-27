# jquery-resizable-cols
_A jQuery plugin to make your table columns resizable_


#### Update v1.1.0
* Works with two rows in `<thead>` tag. Resizing is applied only to the first header row.

#### jQuery.fixTableHeader v1.0.0
* Resize columns in table
* Super Light: just 0.9kb

[Demo](https://github.com/koqiui/jquery-resizable-cols/demo/index.html) | [JsFiddle](https://jsfiddle.net/koqiui/17kdea4x/)

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
// 普通用法
$('#tbResizable').resizableColumns();

// 清除副作用（事件等）
$('#tbResizable').resizableColumns({
                destroy: true
            });
            
// 监听大小调整事件（便于定制处理逻辑）
$('#tbResizable').resizableColumns({
                name : 'xxxx',
                resized : function(name){
                   //如果没有指定name，这里得到的是 table的id
                   console.log('adjusted table : ' + name);
                }
            });
```

## Important
- Resizable handlers are `append()` to all the table `th`s.
- Make sure your put your headers inside the `<thead>` tag.
- Adds 'resizer' class to the resizing handlers and 'resizing' class to the `th` that is currently being resized.
