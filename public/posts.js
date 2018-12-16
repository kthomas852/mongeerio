$(document).on('click', '.delete', function(){
    let postID = $(this).prev('div[data-id]').data("id");
  $.ajax({
    method: "GET",
    url: "/delete/" + postID
  }).then(
    console.log(`${postID} has been Deleted!`)
  )
});