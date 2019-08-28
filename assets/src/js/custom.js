$(function() {

  $('#inputCountry').on('change', function(e) {
    var countryCode = this.value

    $('#Country img').attr('src', 'img/country/'+countryCode+'.svg')
  })

})
