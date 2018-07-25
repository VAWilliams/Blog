$(document).ready(function () {

    let deleteLink = "";
    
    $('#delete').on('click', (id) => {

        if (confirm('Are you sure?')) {
            id = $('#update').attr('name');
            deleteLink = `/delete/${id}`;
            $('#delete').attr('href') = deleteLink;
        }
          
    })

});