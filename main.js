let fact = $('#fact');
let factText = $('#factText');

let numberInput = $('#numberInput');
numberInput.on('keyup', function (e) {
  $('#h4').empty();
  if ($('#check1').is(':checked')) {
    $('#check2').prop('checked', false);
    $.ajax({
      method: 'GET',
      url: 'http://numbersapi.com/' + e.target.value,
      dataType: 'text',
    }).done(function (data) {
      if (e.target.value != '') {
        fact.css('display', 'block');
        factText.text(data);
      }
    });
  } else if ($('#check2').is(':checked')) {
    $('#check1').prop('checked', false);
    $.ajax({
      method: 'GET',
      url: 'http://numbersapi.com/' + e.target.value + '/year',
      dataType: 'text',
    }).done(function (data) {
      if (e.target.value != '') {
        fact.css('display', 'block');
        factText.text(data);
      }
    });
  }
  $('#h4').append(
    '<a  class="btn btn-dark" href="https://github.com/gauravsingh9356" target="_blank">GitHub</a>'
  );
});
