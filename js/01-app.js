const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then( resultado => {
            console.log('El resulrado es ', resultado);
        })
});

const verNotificacion = document.querySelector('#VerNotificacion');
verNotificacion.addEventListener('click', () => {
    if(Notification.permission == 'granted') {
        const notificación = new Notification('Esta es la notificación', {
            icon: 'img/ccj.png'
        });

        notificacion.onclick = function () {
            window.open('https://www.youtube.com/watch?v=MQtSdgg9DwI&ab_channel=InnovaDreamsFilms')
        }
    }
});