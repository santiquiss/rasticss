function buildTemplate( templateFile, jsonFile ) {
      
  var getTemplate = $.get( "templates/" + templateFile + ".html");
  var getJson     = $.get( "json/" + jsonFile + ".json");

  //console.log(getJson);

  $.when( getTemplate, getJson ).done(function ( template, json ) {

    // Agrego el template a ich
    ich.addTemplate( templateFile, template[0] );
    
    // Pongo el template renderizado en en dom
    $('.js-template-' + templateFile ).replaceWith( ich[templateFile]( json[0], true ) );

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