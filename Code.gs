const SHEET_ID = "1fAe16oFYQjJBV47phxLDbRqU0M2PxONUJDnB2l4sjKo";
function doPost(e) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName("Svar");
  const p = e.parameter;
  sheet.appendRow([new Date(), p.installning || "", p.positivt || "", p.oro || "", p.paverka || ""]);
  return ContentService.createTextOutput("ok");
}