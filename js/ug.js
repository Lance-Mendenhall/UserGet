$().ready(function() {

    var url = "http://localhost:8080/Users/Get/2";
    $.getJSON(url)
        .then((resp) => { 
            console.log(resp);
            render(resp.data);
        });

    });


    function render(user) {
      $("#pid").val(user.id);
      $("#pname").val(user.firstName + " " + user.lastName);
      $("#pusername").val(user.userName);
      $("#pphone").val(user.phoneNumber);
      $("#pemail").val(user.email);
      $("#previewer").prop("checked",user.isReviewer);
      $("#padmin").prop("checked",user.idsAdmin);

 }
    

