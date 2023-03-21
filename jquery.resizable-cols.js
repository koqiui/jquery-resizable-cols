(function ($) {
  $.fn.resizableColumns = function () {
      var isColResizing = false;
      var resizingPosX = 0;
      var _table = $(this);

      var _thead = $(this).find('thead').first();

      _thead.find('th').each(function () {
          $(this).css('position', 'relative');
          if ($(this).is(':not(.no-resize)')) {
              if ($(this).find('div.resizer').length == 0) {
                  $(this).append("<div class='resizer' style='position:absolute;top:0px;right:-3px;bottom:0px;width:6px;z-index:999;background:transparent;cursor:col-resize'></div>");
              }
          }
      })

      $(document).mouseup(function (e) {
          _thead.find('th').removeClass('resizing');
          isColResizing = false;
          e.stopPropagation();
      })

      _table.find('.resizer').mousedown(function (e) {
          if (e.button == 0) {
              _thead.find('th').removeClass('resizing');
              $(_thead).find('tr:first-child th:nth-child(' + ($(this).closest('th').index() + 1) + ') .resizer').closest('th').addClass('resizing');
              resizingPosX = e.pageX;
              isColResizing = true;
          }
          e.stopPropagation();
      }).click(function (e) {
          return false;
      })

      _table.mousemove(function (e) {
          if (isColResizing) {

              var _resizing = _thead.find('th.resizing .resizer');
              if (_resizing.length == 1) {
                  var _pageX = e.pageX || 0;
                  var _widthDiff = _pageX - resizingPosX;
                  var _setWidth = _resizing.closest('th').innerWidth() + _widthDiff;
                  var _tableWidth = _table.innerWidth() + _widthDiff;
                  if (resizingPosX != 0 && _widthDiff != 0 && _setWidth > 50 && _tableWidth > 100) {
                      _resizing.closest('th').innerWidth(_setWidth);
                      resizingPosX = e.pageX;
                      _table.innerWidth(_tableWidth);
                  }
              }
          }
      })
  };
}
(jQuery))
