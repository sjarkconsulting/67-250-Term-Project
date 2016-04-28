function showDescription(descript) {
	$("#description").html("Description: " + descript);
}

function hideDescription() {
	$("#description").html("");
}

function validate() {
	var zipcode = $("#zipcode").val();
	if (isNaN(zipcode) | zipcode.toString().length != 5) {
		alert("zipcode is not valid or not in a valid format.");
		return false;
	}
	return true;
}


