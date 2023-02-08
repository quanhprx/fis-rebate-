$(".custom-file-input").on("change", function () {
    var fileName = $(this).val().split("\\").pop();
    $(this).sibling(".custom-file-label").addClass("selected").html(fileName);
});

function DeleteItem(btn) {
    var table = document.getElementById('tableh');
    var rows = table.getElementsByTagName('tr');
    if (rows.length == 2) {
        alert("Không thể xóa dòng lày");
        return;
    }
    $(btn).closest('tr').remove();
}

function AddItem(btn) {
    var table = document.getElementById('tableh');
    var rows = table.getElementsByTagName('tr');
    var rowOuterHtml = rows[rows.length - 1].outerHTML;
    var lastrowIdx = rows.length - 2;
    var nextrowIdx = eval(lastrowIdx) + 1;
    rowOuterHtml = rowOuterHtml.replaceAll('_' + lastrowIdx + '_', '_' + nextrowIdx + '_');
    rowOuterHtml = rowOuterHtml.replaceAll('[' + lastrowIdx + ']', '[' + nextrowIdx + ']');
    rowOuterHtml = rowOuterHtml.replaceAll('-' + lastrowIdx, '-' + nextrowIdx);
    var newRow = table.insertRow();
    newRow.innerHTML = rowOuterHtml;
}

$('#submit').click(function () {
    if ($('#brandname').val() == '') {
        $.alert({
            theme: 'bootstrap',
            title: 'ERROR🚫',
            backgroundDismiss: true,
            content: 'Hãng is missing 🤡',
            buttons: {
                Roger: function () {
                },
                Close: function () {
                }
            }
        });
        return false;
    }
    else if ($('#program').val() == '') {
        $.alert({
            theme: 'bootstrap',
            title: 'ERROR🚫',
            backgroundDismiss: true,
            content: 'Tên chương trình is missing 🤡',
            buttons: {
                Roger: function () {
                },
                Close: function () {
                }
            }
        });
        return false;
    }
    else if ($('#currency').val() == '') {
        $.alert({
            theme: 'bootstrap',
            title: 'ERROR🚫',
            backgroundDismiss: true,
            content: 'Đơn vị tiền tệ is missing 🤡',
            buttons: {
                Roger: function () {
                },
                Close: function () {
                }
            }
        });
        return false;
    }
    else if ($('#timestart').val() == '') {
        $.alert({
            theme: 'bootstrap',
            title: 'ERROR🚫',
            backgroundDismiss: true,
            content: 'Thời gian bắt đầu is missing 🤡',
            buttons: {
                Roger: function () {
                },
                Close: function () {
                }
            }
        });
        return false;
    }
    else if ($('#timeend').val() == '') {
        $.alert({
            theme: 'bootstrap',
            title: 'ERROR🚫',
            backgroundDismiss: true,
            content: 'Thời gian kết thúc is missing 🤡',
            buttons: {
                Roger: function () {
                },
                Close: function () {
                }
            }
        });
        return false;
    }
    else if ($('#Products_0__productname').val() == '') {
        $.alert({
            theme: 'bootstrap',
            title: 'ERROR🚫',
            backgroundDismiss: true,
            content: 'Loại sản phẩm is missing 🤡',
            buttons: {
                Roger: function () {
                },
                Close: function () {
                }
            }
        });
        return false;
    }
    else if ($('#Products_0__condition').val() == '') {
        $.alert({
            theme: 'bootstrap',
            title: 'ERROR🚫',
            backgroundDismiss: true,
            content: 'Điều kiện is missing 🤡',
            buttons: {
                Roger: function () {
                },
                Close: function () {
                }
            }
        });
        return false;
    }
    else if ($('#Products_0__rebate').val() == '') {
        $.alert({
            theme: 'bootstrap',
            title: 'ERROR🚫',
            backgroundDismiss: true,
            content: 'Rebate is missing 🤡',
            buttons: {
                Roger: function () {
                },
                Close: function () {
                }
            }
        });
        return false;
    }
});
$(document).ready(function () {
    $('.selectpicker').selectpicker({
        liveSearch: true,
        showSubtext: true
    });
});