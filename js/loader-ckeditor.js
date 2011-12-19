if (CKEDITOR != undefined) {
    var CKEDITOR_TOOLBAR = [
        { name: 'basicstyles', items : [ 'Format','-','Bold','Italic','Underline','Strike','-','RemoveFormat' ] },
        { name: 'list',        items : [ 'NumberedList','BulletedList','-','Table','HorizontalRule' ] },
        { name: 'paragraph',   items : [ 'JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock' ] },
        { name: 'insert',      items : [ 'Link','Unlink','-','Image','SpecialChar' ] },
    ];

    $(function () {
        $('textarea.editor').each(function() {
            $(this).ckeditor( { toolbar : CKEDITOR_TOOLBAR } );
        })
    });
}
