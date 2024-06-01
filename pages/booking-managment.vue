<template>
    <div class="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg rounded-lg p-8 mb-12">
        <div class="flex items-center mb-6">
            <div>
            <h2 class="text-2xl font-bold">Туда</h2>
            <p class="text-lg">05:00 Внуково (Москва) - 16:10 Сабиха Гёкчен (Стамбул)</p>
            <p class="text-sm">Полёт продлится 11 ч., 1 пересадка</p>
          </div>
        </div>
        <div class="flex items-center">
          <div>
            <h2 class="text-2xl font-bold">Обратно</h2>
            <p class="text-lg">07:15 Аэропорт Стамбул (Стамбул) - 11:00 Внуково (Москва)</p>
            <p class="text-sm">Полёт продлится 3 ч., 45 мин., прямой</p>
          </div>
        </div>
      </div>
  
      <div class="bg-white shadow-lg rounded-lg p-8 mb-12">
        <h2 class="text-2xl font-bold mb-4">Выберите тариф</h2>
        <p class="text-gray-600 mb-8">Выберите тариф в зависимости от Вашего уровня комфорта</p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div class="border rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 class="text-xl font-semibold mb-4">Economy</h3>
            <ul class="text-gray-700 mb-6 space-y-2">
              <li>✔ Ручная кладь 10 кг, 55x40x25 см</li>
              <li>✔ 1 место для багажа до 23 кг</li>
              <li>✖ Обмен билета платный</li>
              <li>✖ Возврат билета платный</li>
            </ul>
            <button class="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-300">Выбрать</button>
          </div>
          <div class="border rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <h3 class="text-xl font-semibold mb-4">Business</h3>
            <ul class="text-gray-700 mb-6 space-y-2">
              <li>✔ Ручная кладь 10 кг, 55x40x25 см</li>
              <li>✔ 2 места для багажа до 23 кг</li>
              <li>✔ Обмен билета бесплатный</li>
              <li>✔ Возврат билета бесплатный</li>
            </ul>
            <button class="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors duration-300">Выбрать</button>
          </div>
        </div>
      </div>
  
      <div class="bg-white shadow-lg rounded-lg p-8">
        <div class="text-2xl font-bold mb-4">Стоимость всего:</div>
        <div class="text-4xl font-extrabold text-yellow-500 mb-8">58,900 ₽</div>
        <button class="bg-yellow-500 text-white py-3 px-6 rounded w-full text-xl hover:bg-yellow-600 transition-colors duration-300">Перейти к оплате</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FlightDetails',
  };
  </script>
  
  <style scoped>
  /* Example scoped CSS */
  .max-w-4xl {
    max-width: 56rem;
  }
  
  .bg-gradient-to-r {
    background-image: linear-gradient(to right, var(--tw-gradient-stops));
  }
  
  .from-blue-600 {
    --tw-gradient-from: #2563eb;
    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(37, 99, 235, 0));
  }
  
  .to-blue-800 {
    --tw-gradient-to: #1e40af;
  }
  
  .text-white {
    color: #ffffff;
  }
  
  .shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
  
  .rounded-lg {
    border-radius: 0.5rem;
  }
  
  .p-8 {
    padding: 2rem;
  }
  
  .mb-12 {
    margin-bottom: 3rem;
  }
  
  .flex {
    display: flex;
  }
  
  .items-center {
    align-items: center;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }
  
  .font-bold {
    font-weight: 700;
  }
  
  .text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
  
  .text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
  
  .bg-white {
    background-color: #ffffff;
  }
  
  .text-gray-600 {
    color: #4b5563;
  }
  
  .grid {
    display: grid;
  }
  
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  
  .gap-6 {
    gap: 1.5rem;
  }
  
  .border {
    border-width: 1px;
  }
  
  .p-6 {
    padding: 1.5rem;
  }
  
  .hover\:shadow-xl:hover {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  
  .transition-shadow {
    transition-property: box-shadow;
  }
  
  .duration-300 {
    transition-duration: 300ms;
  }
  
  .ease-in-out {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  
  .font-semibold {
    font-weight: 600;
  }
  
  .text-gray-700 {
    color: #374151;
  }
  
  .mb-6 {
    margin-bottom: 1.5rem;
  }
  
  .space-y-2 > :not(:first-child) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
  }
  
  .bg-blue-500 {
    background-color: #3b82f6;
  }
  
  .text-white {
    color: #ffffff;
  }
  
  .py-2 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .px-6 {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
  
  .rounded {
    border-radius: 0.25rem;
  }
  
  .hover\:bg-blue-600:hover {
    background-color: #2563eb;
  }
  
  .transition-colors {
    transition-property: background-color, border-color, color, fill, stroke;
  }
  
  .text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
  
  .font-extrabold {
    font-weight: 800;
  }
  
  .text-yellow-500 {
    color: #f59e0b;
  }
  
  .py-3 {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
  }
  
  .w-full {
    width: 100%;
  }
  
  .text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }
  
  .hover\:bg-yellow-600:hover {
    background-color: #d97706;
  }
  </style>
  