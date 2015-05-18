function buildTemplate( templateFile, jsonFile ) {
      
  var getTemplate = $.get( "../components/" + templateFile + ".html");
  var getJson     = $.get( "../../../tmp/json/" + jsonFile + ".json");

  //console.log(getJson);

  $.when( getTemplate, getJson ).done(function ( template, json ) {

    var templateFileName = templateFile.substring(templateFile.indexOf('/')+1); 

    // Agrego el template a ich
    ich.addTemplate( templateFileName, template[0] );

    // Pongo el template renderizado en en dom
    $('.js-template-' + templateFileName ).replaceWith( ich[templateFileName]( json[0], true ) );

  });

}

$(function(){

  $.each($("div[class^='js-template']"), function( index, value ) {
    buildTemplate(
      $(this).data('template-file') ,
      $(this).data('json-file')
    );
  });

});