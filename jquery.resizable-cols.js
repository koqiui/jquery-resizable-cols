(function ($) {
    var lastResizedColumns_table = null;
    //{destroy : true/false, name, resized(name or id)}
    $.fn.resizableColumns = function (config) {
        config = config || {};
        var _destroy = config.destroy == true;
        //
        var isColResizing = false;
        var resizingPosX = 0;
        var _table = $(this);
        var _tableDom = $(this).get(0);
        //
        var _thead = $(this).find('thead').first();
        var _theadRow = _thead.find('tr').last();
        if (_destroy) {
            _theadRow.find('th').each(function () {
                $(this).find('div.resizer').remove();
            })
        } else {
            _theadRow.find('th').each(function () {
                $(this).css('position', 'relative');
                if ($(this).is(':not(.no-resize)')) {
                    if ($(this).find('div.resizer').length == 0) {
                        $(this).append("<div class='resizer' style='position:absolute;top:0px;right:-3px;bottom:0px;width:6px;z-index:999;background:transparent;cursor:col-resize'></div>");
                    }
                }
            })
        }


        if (_tableDom.handler_doc_mouseup) {
            $(document).unbind('mouseup', _tableDom.handler_doc_mouseup);
            delete _tableDom.handler_doc_mouseup;
        }
        if (!_destroy) {
            _tableDom.handler_doc_mouseup = function (e) {
                _theadRow.find('th').removeClass('resizing');
                isColResizing = false;
                e.stopPropagation();
                //
                if (typeof config.resized == 'function' && lastResizedColumns_table == _tableDom) {
                    config.resized(config.name || lastResizedColumns_table.id);
                }
            };
            $(document).bind('mouseup', _tableDom.handler_doc_mouseup);
        }

        //
        var _resizers = _table.find('.resizer');
        _resizers.unbind('click');
        _resizers.unbind('mousedown');
        if (!_destroy) {
            _resizers.bind('mousedown', function (e) {
                if (e.button == 0) {
                    _theadRow.find('th').removeClass('resizing');
                    _theadRow.find('th:nth-child(' + ($(this).closest('th').index() + 1) + ') .resizer').closest('th').addClass('resizing');
                    resizingPosX = e.pageX;
                    isColResizing = true;
                }
                e.stopPropagation();
                //
                lastResizedColumns_table = null;
            });
            _resizers.bind('click', function (e) {
                return false;
            });
        }

        if (_tableDom.handler_mousemove) {
            _table.unbind('mousemove', _tableDom.handler_mousemove);
            delete _tableDom.handler_mousemove;
        }
        if (!_destroy) {
            _tableDom.handler_mousemove = function (e) {
                if (isColResizing) {
                    var _resizing = _theadRow.find('th.resizing .resizer');
                    if (_resizing.length == 1) {
                        var _pageX = e.pageX || 0;
                        var _widthDiff = _pageX - resizingPosX;
                        var _setWidth = _resizing.closest('th').innerWidth() + _widthDiff;
                        var _tableWidth = _table.width() + _widthDiff;
                        if (resizingPosX != 0 && _widthDiff != 0 && _setWidth > 50 && _tableWidth > 100) {
                            _resizing.closest('th').innerWidth(_setWidth);
                            resizingPosX = e.pageX;
                            _table.width(_tableWidth);
                        }
                        //
                        lastResizedColumns_table = _tableDom;
                    }
                }
            };
            _table.bind('mousemove', _tableDom.handler_mousemove);
        }

        if (!_destroy) {
            var tableWidth = _tableDom.style.width;
            if (!tableWidth) {
                _tableDom.style.width = _table.width() + 'px';
            }
        }
    };
}
(jQuery))
