function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Events");
  var data = sheet.getDataRange().getValues();

  var eventsData = [];
  var headers = data[0];

  for (var i = 1; i < data.length; i++) {
    var event = {};
    for (var j = 0; j < headers.length; j++) {
      event[headers[j]] = data[i][j];
    }
    eventsData.push(event);
  }

  console.log(eventsData);

  return ContentService.createTextOutput(
    JSON.stringify(eventsData)
  ).setMimeType(ContentService.MimeType.JSON);
}

doGet();
