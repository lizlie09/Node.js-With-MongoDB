jQuery(function () {
    $(document).on('click', '.edit-button', function () {
        let index = $('.edit-button').index(this);

        let name = $('.edit-button').eq(index).data('name');
        let email = $('.edit-button').eq(index).data('email');
        let address = $('.edit-button').eq(index).data('address');
        let phone = $('.edit-button').eq(index).data('phone');
        let id = $('.edit-button').eq(index).data('id');

        $('#name').val(name);
        $('#email').val(email);
        $('#address').val(address);
        $('#phone').val(phone);
        $('.note-id').text(`NOTE ID: ${id}`);

        $('#edit-form').attr('action', `/edit-note/${id}`)
    });

    $(document).on('click', '.delete-button', function () {
        let index = $('.delete-button').index(this);

        let name = $('.delete-button').eq(index).data('name');
        let email = $('.delete-button').eq(index).data('email');
        let address = $('.delete-button').eq(index).data('address');
        let phone = $('.delete-button').eq(index).data('phone');
        let id = $('.delete-button').eq(index).data('id');

        $('.note-name').text(name);
        $('.note-id').text(`NOTE ID: ${id}`);
        $('#confirm-delete').attr('href', `delete-note/${id}`)
    });
});