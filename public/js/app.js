$(function(){

  // Show comments
  $('[data-showcomments]').on('click', function(e){
    e.preventDefault();

    var list = $(this).next('.donation__comments'),
        html = '';

    $.ajax({
      type: 'GET',
      url: '/api/donations/100/comments',
      // data to be added to query string:
      data: { offset: 2 },
      // type of data we are expecting in return:
      dataType: 'json',
      timeout: 300,
      context: list,
      success: function(data){

        $.each(data.comments, function(){
          html += '<li>';
          html += '<strong class="comment__name">' + this.name + '</strong> ';
          html += '<span class="comment__text">' + this.text + '</span>';
          html += '<div class="comment__date">' + this.created + '</div>';
          html += '</li>';
        });

        this.append(html);
      },
      error: function(xhr, type){
        alert('Error!')
      }
    });

  });

  // Post new comment
  $('[data-newcomment]').on('keyup', function(e){
    if(e.keyCode==13){
      
      var text = $(this).val(),
          list = $(this).parent().prev('.donation__comments'),
          html = '';

      if(!text==''){
        $.ajax({
          type: 'POST',
          url: '/api/donations/100/comments',
          data: JSON.stringify({ text: text, name: 'Bill Gates' }),
          contentType: 'application/json',
          success: function(data){
            var comment = JSON.parse(data);

            html += '<li>';
            html += '<strong class="comment__name">' + comment.name + '</strong> ';
            html += '<span class="comment__text">' + comment.text + '</span>';
            html += '<div class="comment__date">' + comment.created + '</div>';
            html += '</li>';

            list.append(html);

          },
          error: function(data){
            alert('Error!');
          }
        });
      }
    }
  });

});