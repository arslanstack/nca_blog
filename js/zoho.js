$(document).ready(function () {

    $("#business_owner_contact_form").on('submit', function (e) {
        e.preventDefault();
        registerZoho("business_owner_contact_form")
    });

    $("#header_co_investors_contact_form").on('submit', function (e) {
        e.preventDefault();
        registerZoho("header_co_investors_contact_form")
    });

    $("#co_investors_contact_form").on('submit', function (e) {
        e.preventDefault();
        registerZoho("co_investors_contact_form")
    });

    $("#intermediatry_contact_form").on('submit', function (e) {
        e.preventDefault();
        registerZoho("intermediatry_contact_form")
    });
});


function registerZoho(formId) {

    $("#"+formId+"-submit").hide();
    $("#"+formId+"-loading").show();

    var myform = document.getElementById(formId);
    var dataForm = new FormData(myform);

    var newsletter = dataForm.get('Newsletter') == 'on' ? 'true' : 'false';
    dataForm.set('Newsletter', newsletter)

    $.ajax({
        url: "https://nca-api.whagons.com/api/registerContactZoho",
        type: 'POST',
        datatype: 'json',
        data: dataForm,
        contentType: false,
        processData: false,
        success: function (data) {
            $("#"+formId).hide();
            $(".form-alert-success").show();
            document.getElementById(formId).reset();

            setTimeout(function(){
                $(".form-alert-success").hide();
                $("#"+formId).show();
                $("#"+formId+"-loading").hide();
                $("#"+formId+"-submit").show();
            }, 3000);
        },
        error: function (data) {}
    })
}