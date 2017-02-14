/**
 * Created by collin.hemann on 2/6/2017.
 */

function updateTable() {

    // Define a function that will automatically be called when
// our request is done.
    function my_callback(json_result) {
        console.log("Done");
    }

    var url = "api/name_list_get";

    $.getJSON(url, null, function(json_result) {
            // json_result is an object. You can set a breakpoint, or print
            // it to see the fields. Specifically, it is an array of objects.
            // Here we loop the array and print the first name.
            for (var i = 0; i < json_result.length; i++) {
                console.log(json_result[i].firstName);
            }
            console.log("Done");
        }
    );

// Start a web call. Specify:
// URL
// Data to pass (nothing in this case)
// Function to call when we are done
    $.getJSON(url, null, my_callback);

    var addItemButton = $('#addItem');
    var addClass = $('#addClass');
    var removeClass = $('#removeClass');

    addItemButton.on("click", showDialogAdd);

    function showDialogAdd() {

        addItemButton.on = function (s, showDialogAdd) {

        };
        addItemButton.on("click", showDialogAdd);

        // Print that we got here
        console.log("Opening add item dialog");

        // Clear out the values in the form.
        // Otherwise we'll keep values from when we last
        // opened or hit edit.
        // I'm getting it started, you can finish.
        $('#id').val("");
        //noinspection JSUnresolvedFunction
        $('#firstName').val("");

        $('#lastName').val("");

        $('#Email').val("");

        $('#Phone').val("");

        $('#Birthday').val("");

        // Show the hidden dialog
        //noinspection JSUnresolvedFunction
        $('#myModal').modal('show');

        // Set style for outline of form field
        $('#firstNameDiv').removeClass("has-error");
        $('#lastNameDiv').removeClass("has-error");
        $('#EmailDiv').removeClass("has-error");
        $('#PhoneDiv').removeClass("has-error");
        $('#BirthdayDiv').removeClass("has-error");

        //noinspection JSUnresolvedFunction
        $('#firstNameDiv').addClass("has-success");
        $('#lastNameDiv').addClass("has-success");
        $('#EmailDiv').addClass("has-success");
        $('#PhoneDiv').addClass("has-success");
        $('#BirthdayDiv').addClass("has-success");

// Set the icon for the form field
        //noinspection JSUnresolvedFunction
        $('#firstNameGlyph').removeClass("glyphicon-remove");
        $('#lastNameGlyph').removeClass("glyphicon-remove");
        $('#EmailGlyph').removeClass("glyphicon-remove");
        $('#PhoneGlyph').removeClass("glyphicon-remove");
        $('#BirthdayGlyph').removeClass("glyphicon-remove");

        //noinspection JSUnresolvedFunction
        $('#firstNameGlyph').addClass("glyphicon-ok");
        $('#lastNameGlyph').addClass("glyphicon-ok");
        $('#EmailGlyph').addClass("glyphicon-ok");
        $('#PhoneGlyph').addClass("glyphicon-ok");
        $('#BirthdayGlyph').addClass("glyphicon-ok");

// Put in the field used by screen readers
        //noinspection JSUnresolvedFunction
        $('firstNameStatus').val("(success)");
        $('firstNameStatus').val("(error)");
        $('lastNameStatus').val("(success)");
        $('lastNameStatus').val("(error)");
        $('EmailStatus').val("(success)");
        $('EmailStatus').val("(error)");
        $('PhoneStatus').val("(success)");
        $('PhoneStatus').val("(error)");
        $('BirthdayStatus').val("(success)");
        $('BirthdayStatus').val("(error)");
    }

    }

updateTable();

