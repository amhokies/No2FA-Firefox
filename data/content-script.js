var form = document.createElement("form");
form.setAttribute("method", "post");
form.setAttribute("action", document.URL);
var hiddenField = document.createElement("input");
hiddenField.setAttribute("name", "_eventId");
hiddenField.setAttribute("value", "NotNow");
form.appendChild(hiddenField);
$('html').append(form);
form.submit();
