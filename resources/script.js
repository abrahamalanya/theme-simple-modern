var header_title = new Vue({
    el: '#header_title',
    data: {
        title: 'theme simple modern'
    }
});

var image_card = new Vue({
    el: '#image_card',
    data: {
        images_data: [
            {
                name: 'demo1',
                url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
                description: 'Texto de prueba de una imagen. (descripción aleatoria)'
            },
            {
                name: 'demo1',
                url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
                description: 'Texto de prueba de una imagen. (descripción aleatoria)'
            },
            {
                name: 'demo1',
                url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
                description: 'Texto de prueba de una imagen. (descripción aleatoria)'
            },
            {
                name: 'demo1',
                url: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
                description: 'Texto de prueba de una imagen. (descripción aleatoria)'
            }
        ]
    }
});

var footer_copyright = new Vue({
    el: '#footer_copyright',
    data: {
        copyright: 'created by abrahamalanya, with love'
    }
});