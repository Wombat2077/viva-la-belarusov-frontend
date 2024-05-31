<template>
    <div class="bg-gray-100 text-gray-900">
      <header class="bg-white shadow">
        <div class="container mx-auto flex justify-between items-center p-4">
          <div class="logo">
            <svg width="43" height="46" viewBox="0 0 43 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g filter="url(#filter0_d_38_483)">
                      <path d="M5.23943 17.2322C4.26313 18.2085 4.26313 19.7915 5.23943 20.7678L21.1493 36.6777C22.1256 37.654 23.7086 37.654 24.6849 36.6777C25.6612 35.7014 25.6612 34.1184 24.6849 33.1421L10.5427 19L24.6849 4.85786C25.6612 3.88155 25.6612 2.29864 24.6849 1.32233C23.7086 0.34602 22.1256 0.34602 21.1493 1.32233L5.23943 17.2322ZM39.0072 16.5L7.0072 16.5V21.5L39.0072 21.5V16.5Z" fill="white"/>
                      </g>
                      <defs>
                      <filter id="filter0_d_38_483" x="0.507202" y="0.590088" width="42.5" height="44.8198" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38_483"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38_483" result="shape"/>
                      </filter>
                      </defs>
                  </svg>
          </div>
          <div class="contact-info text-sm text-gray-700">
            <p>Липецкая область, город Липецк, ул. Ленина 151</p>
            <p>Звонок по РФ бесплатно: <a href="tel:88005353535" class="text-blue-500">8 (800) 535-35-35</a></p>
          </div>
          <div class="social-icons flex space-x-4">
            <a href="#"><img src="@/assets/images/icon-whatsapp.png" alt="WhatsApp" class="h-6"></a>
            <a href="#"><img src="@/assets/images/icon-vk.png" alt="VK" class="h-6"></a>
            <a href="#"><img src="@/assets/images/icon-telegram.png" alt="Telegram" class="h-6"></a>
            <a href="#"><img src="@/assets/images/icon-instagram.png" alt="Instagram" class="h-6"></a>
          </div>
          <div class="profile">
            <a href="login.html" class="text-blue-500">Профиль</a>
          </div>
        </div>
      </header>
      <main class="container mx-auto p-4">
        <section class="search-section bg-white p-8 shadow rounded-lg mb-8">
          <h1 class="text-2xl font-bold mb-4">Удобный поиск дешёвых авиабилетов</h1>
          <div class="search-form grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <input type="text" placeholder="Откуда.." class="border p-2 rounded">
            <input type="text" placeholder="Куда.." class="border p-2 rounded">
            <input type="date" placeholder="Когда.." class="border p-2 rounded">
            <input type="date" placeholder="Обратно.." class="border p-2 rounded">
            <button class="col-span-1 md:col-span-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Найти билеты</button>
          </div>
          <div class="advantages grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="advantage flex items-center space-x-4">
              <img src="@/assets/images/Логотип.png" alt="" srcset="">
              <p>Билеты от надёжных партнёров и выгодные условия</p>
            </div>
            <div class="advantage flex items-center space-x-4">
              <p>Быстрая поддержка по телефону и на сайте</p>
            </div>
          </div>
        </section>
        <section class="special-offers bg-white p-8 shadow rounded-lg">
          <h2 class="text-xl font-bold mb-4">Специальные предложения</h2>
          <div class="offers grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="offer-card bg-gray-100 p-4 rounded-lg shadow" v-for="offer in offers" :key="offer.id">
              <img :src="offer.image" :alt="offer.title" class="w-full h-40 object-cover rounded mb-4">
              <p>{{ offer.title }}</p>
              <p>{{ offer.price }}</p>
              <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4">Подробнее</button>
            </div>
          </div>
        </section>
      </main>
      <footer class="bg-gray-800 text-gray-400 mt-8">
        <div class="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="footer-section">
            <h3 class="text-white font-bold mb-4">Сервис</h3>
            <ul>
              <li><a href="#" class="hover:text-white">Информация о бронировании</a></li>
              <li><a href="#" class="hover:text-white">Оплата</a></li>
              <li><a href="#" class="hover:text-white">Контакты</a></li>
              <li><a href="#" class="hover:text-white">Реквизиты</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3 class="text-white font-bold mb-4">Наши услуги</h3>
            <ul>
              <li><a href="#" class="hover:text-white">Заказ удобного рейса</a></li>
              <li><a href="#" class="hover:text-white">Бронирование онлайн</a></li>
              <li><a href="#" class="hover:text-white">Выбор маршрута</a></li>
            </ul>
          </div>
          <div class="footer-section">
            <h3 class="text-white font-bold mb-4">Контакты</h3>
            <p>+7 (800) 535-35-35</p>
            <p>Консультации по телефону</p>
            <p>Электронная почта: info@statename.ru</p>
            <p>Адрес: Липецкая область, город Липецк, ул. Ленина 151</p>
          </div>
        </div>
        <div class="footer-bottom bg-gray-900 text-gray-500 text-center py-4">
          <p>© vivaexpress.ru, 2024 | VIVA EXPRESS</p>
          <div class="footer-links mt-2 space-x-4">
            <a href="#" class="hover:text-white">Согласие на обработку данных</a>
            <a href="#" class="hover:text-white">Служба поддержки</a>
            <a href="#" class="hover:text-white">Политика конфиденциальности</a>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        offers: [
          { id: 1, image: '@/assets/images/moscow-kazan.jpg', title: 'Москва - Казань', price: 'Из Москвы и обратно от 1500 ₽' },
          { id: 2, image: '@/assets/images/moscow-krasnodar.jpg', title: 'Москва - Краснодар', price: 'Из Москвы и обратно от 2000 ₽' },
          { id: 3, image: '@/assets/images/moscow-volgograd.jpg', title: 'Москва - Волгоград', price: 'Из Москвы и обратно от 4000 ₽' },
          { id: 4, image: '@/assets/images/moscow-ufa.jpg', title: 'Москва - Уфа', price: 'Из Москвы и обратно от 2000 ₽' },
          { id: 5, image: '@/assets/images/moscow-istanbul.jpg', title: 'Москва - Стамбул', price: 'Из Москвы и обратно от 20000 ₽' },
          { id: 6, image: '@/assets/images/moscow-antalya.jpg', title: 'Москва - Анталья', price: 'Из Москвы и обратно от 20000 ₽' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .offer-card img {
    transition: transform 0.3s ease;
  }
  
  .offer-card img:hover {
    transform: scale(1.05);
  }
  </style>
  