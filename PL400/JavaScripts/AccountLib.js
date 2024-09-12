this.formOnLoad = function(executionContext)
{
    var formContext = executionContext.getFormContext();
    formContext.ui.setFormNotification("This is my sample script", "INFO", "samplenote");
    formContext.getAttribute("fax").setValue("898-9988");
}