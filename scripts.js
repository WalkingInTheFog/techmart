/*********************************FUNCTION**************************************************/

const modal_handler = function (link, modal, close_btn) {

    link.addEventListener('click', function (evt) {

        evt.preventDefault();

        if (modal.classList.contains('display-none')) {
            modal.classList.remove('display-none');
        }

        modal.classList.add('animate__fadeInDownBig');

    });

    close_btn.addEventListener('click', function (evt) {

        evt.preventDefault();

        modal.classList.add('display-none');
        modal.classList.remove('animate__fadeInDownBig');


    });

    window.addEventListener('keydown', function (evt) {

        if (evt.key === 'Escape') {

            if (!modal.classList.contains('display-none')) {
                modal.classList.add('display-none');
                modal.classList.remove('animate__fadeInDownBig');
            }



        }

    });

};

const modal_handler_buy_modal = function (links, modal, close_btn) {

    let add_event_closure = function (link) {

        link.addEventListener('click', function (evt) {

            evt.preventDefault();

            if (modal.classList.contains('display-none')) {
                modal.classList.remove('display-none');
            }

        });

    };


    for (var i = 0; i < links.length; i++) {

        add_event_closure(links[i]);

    };


    close_btn.addEventListener('click', function (evt) {

        evt.preventDefault();

        modal.classList.add('display-none');

    });

    window.addEventListener('keydown', function (evt) {

        if (evt.key === 'Escape') {

            if (!modal.classList.contains('display-none')) {
                modal.classList.add('display-none');
            }

        }

    });

};

/**********************************MY CODE**************************************************/


/************************************MODAL WINDOW**************************/
let feed_back_btn = document.querySelector('.about-us__map-btn');
let feed_back_modal = document.querySelector('.feedback-pop-up');

if (feed_back_modal) {

    let feed_back_modal_close = feed_back_modal.querySelector('.feedback-pop-up__close');

    modal_handler(feed_back_btn, feed_back_modal, feed_back_modal_close);
}


let map_link = document.querySelector('.about-us__map-img-link');
let map_modal = document.querySelector('.map-pop-up');

if (map_modal) {
    let map_modal_close = map_modal.querySelector('.map-pop-up__close');

    modal_handler(map_link, map_modal, map_modal_close);
}


let basket_links = document.querySelectorAll('.product-cart__links-buy');
let basket_success_modal = document.querySelector('.sucсess-pop-up');

if (basket_success_modal) {
    let basket_links_proceed_buy = basket_success_modal.querySelector('.sucсess-pop-up__btn--proceed');
    let basket_success_modal_close = basket_success_modal.querySelector('.sucсess-pop-up__close');

    modal_handler_buy_modal(basket_links, basket_success_modal, basket_success_modal_close);

    basket_links_proceed_buy.addEventListener('click', function (evt) {

        evt.preventDefault();

        basket_success_modal.classList.add('display-none');

    });
}

/************************************Valid form***************************************/


if (feed_back_modal) {

    let feed_back_form = feed_back_modal.querySelector('.feedback-form');

    let name = feed_back_form.querySelector('#feedback-form__name');
    let mail = feed_back_form.querySelector('#feedback-form__mail');
    let msg = feed_back_form.querySelector('#feedback-form__msg');

    feed_back_form.addEventListener('submit', function (evt) {

        feed_back_modal.classList.remove('animate__shakeX');

        if (!name.value || !mail.value || !msg.value) {


            evt.preventDefault();

            if (!name.value) {
                name.style.borderColor = 'red';
            }

            if (!mail.value) {
                mail.style.borderColor = 'red';
            }

            if (!msg.value) {
                msg.style.borderColor = 'red';
            }



        }

    });

}

/**************************************  SLIDER *************************/

/*let slider = document.querySelector('.promo-slider');

if (slider) {

    let slider_list = slider.querySelector('.promo-slider-list');

}


 *promo-slider-list--second-slide 
 *promo-slider-list--first-slide 
 * 
 */

/**************************************  tabs *************************/

let services = document.querySelector('.services');



if (services) {

    let services_links = services.querySelectorAll('.services-list__link');
    let services_contents = services.querySelectorAll('.services-desc-list__item');

    // перебираем все ссылки перелючения табов и добавляем слушателя события клик

    for (let i = 0; i < services_links.length; i++) {

        services_links[i].addEventListener('click', function (evt) {

            evt.preventDefault();

            // перебираем все ссылки перелючения табов и убираем у них класс активности, это будет при каждом клике по ссылке на таб 

            for (let y = 0; y < services_links.length; y++) {

                services_links[y].classList.remove('services-list__link--active');
            }

            // перебираем все табы и убираем у них класс активности, это будет при каждом клике по ссылке на таб

            for (let q = 0; q < services_contents.length; q++) {

                services_contents[q].classList.add('display-none');

                // если у текущего таба класс совпадает с тем, что указан в data атрибуте на который был клик то его мы показываем 

                if (services_contents[q].classList.contains(evt.target.dataset.destination)) {
                    services_contents[q].classList.remove('display-none');
                }
            }

            // ссылке на который был клик, даем активный класс

            evt.target.classList.add('services-list__link--active');


        });

    }

}