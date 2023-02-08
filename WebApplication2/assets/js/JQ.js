document.querySelector('#menu-toggle').onclick = e => {
    var sidebar = document.querySelector('#sidebar');
    if (sidebar.style.display !== 'none')
        sidebar.style.display = 'none';
    else
        sidebar.style.display = 'block';
}

$("#kt_daterangepicker_1").daterangepicker()


var table = null;
var arrData = [];
var arrDataPG = [];
arrData.push({
    STT: 1,
    product_id: 1,
    productname: "",
    condition: "",
    rebate: 0.0,
    note,
});
$(document).ready(function () {
    InitTable();
});

function InitTable() {
    if (table !== null && table !== undefined) {
        table.destroy();
    }
    table = $('#tableh').DataTable({
        data: arrData,
        "columns": [
            { "width": "25px" },
            { "width": "300px" },
            { "width": "300px" },
            { "width": "120px" },
            { "width": "120px" },
            { "width": "120px" },
            { "width": "25px" },


        ],
        columnDefs: [
            {
                title: "STT",
                targets: 0,
                data: null,
                render: function (data, type, row, meta) {
                    return (meta.row + meta.settings._iDisplayStart + 1);
                },
            },
            {
                title: "Loại sản phẩm*",
                targets: 1,
                data: null,
                render: function (data, type, row, meta) {
                    return '<textarea style="width: 300px;" id="product_type' + data.id + '" type="text" onchange="ChangeProductType(\'' + data.id + '\',this)" name="' + data.id + '" value="' + data.product_type + '">' + data.product_type + '</textarea>';
                }
            },
            {
                title: "Điều kiện*",
                targets: 2,
                data: null,
                render: function (data, type, row, meta) {
                    return '<textarea style="width: 300px;" id="condition1' + data.id + '" type="text" onchange="ChangeCondition1(\'' + data.id + '\',this)" name="' + data.id + '" value="' + data.condition1 + '">' + data.condition1 + '</textarea>';
                }
            },
            {
                title: "Rebate(%)*",
                targets: 3,
                data: null,
                width: "70",
                render: function (data, type, row, meta) {
                    return '<div><input id="rebate' + data.id + '" type="number" style="width: 70px;" onchange="ChangeRebate(\'' + data.id + '\',this)" name="' + data.id + '" value="' + data.rebate + '"></div>';

                }
            },
            {
                title: "Ghi chú",
                targets: 4,
                data: null,
                width: "250",
                render: function (data, type, row, meta) {
                    return '<textarea style="width:200px;" id="note' + data.id + '" type="text" onchange="ChangeNote(\'' + data.id + '\',this)" name="' + data.id + '" value="' + data.note + '"></textarea>';

                }
            },
            {
                title: "",
                targets: 5,
                data: null,
                className: "dt-center",
                width: "70",
                render: function (data, type, row, meta) {
                    // return '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i style="cursor: pointer;font-size: 25px;padding-bottom: 30px;" class="fa fa-trash removePG" aria-hidden="true" onclick=removePG(\'' + data.id + '\')></i>';
                    return '<div class="btn btn-danger removePG" style="cursor: pointer;font-size:25px;" ><i class="fa-solid fa-trash"></i></div>';
                }
            },
        ],
    });
    table.columns.adjust().draw();
}

$('#addRow').on('click', function () {
    console.log(arrData.length);
    if (arrData != '') {
        var ida = arrData[0].id;
    } else {
        var ida = 1;
    }

    for (var i = 0; i < arrData.length; i++) {
        if (arrData[i].id > ida) {
            ida = arrData[i].id;
        }
    };
    arrData.push({
        STT: ida + 1,
        id: ida + 1,
        productname: "",
        condition: "",
        rebate: 0.0,
        note: "",
    });
    if (table != null) {
        table.clear();
        table.rows.add(arrData).draw();
    }
});
$('#tableh').on('click', '.removePG', function () {
    var tableq = $('#tableh').DataTable();
    tableq
        .row($(this).parents('tr'))
        .remove()
        .draw();
});

function removePG(idc) {
    let id = parseInt(idc);
    if (arrData !== undefined) {
        var find = arrData.find(function (item) {
            return item.id === id;
        });
        if (find !== undefined) {
            arrData = arrData.filter(function (item, index) {
                return item.id !== id;
            });
        };
    }
}



$('.save').on('click', function () {
    $.confirm({
        theme: 'dark',
        title: 'Hurray🔥',
        backgroundDismiss: true,
        content: 'Đã lưu thành công 🤡',
        buttons: {
            Roger: function () {
            },
            Close: function () {
            }
        }
    });
});