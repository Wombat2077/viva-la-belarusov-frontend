<template>

  <div class="profile-page bg-gray-100 text-gray-900">
    <main class="container mx-auto py-8 px-4">
      <div class="profile-header flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold">Личный кабинет</h1>
        <div class="relative">
          <img
            src="@/assets/images/avatar-placeholder.png"
            alt="Avatar"
            class="h-10 w-10 rounded-full cursor-pointer"
            @click="toggleMenu"
          />
          <div v-if="menuOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
            <ul class="py-1">
              <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Мои путешествия</a></li>
              <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Пригласить друзей</a></li>
              <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Настройки профиля</a></li>
              <li><a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Выход из личного кабинета</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="profile-content grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="col-span-2">
          <div class="bg-white p-8 shadow rounded-lg mb-8">
            <h2 class="text-2xl font-bold mb-4">Общие сведения</h2>
            <div class="profile-info space-y-4">
              <div class="profile-item flex justify-between items-center border-b pb-4">
                <div class="label text-gray-700">Адрес электронной почты</div>
                <div class="value flex items-center space-x-4">
                  <span>info@sitename.ru</span>
                  <button class="text-blue-500">Изменить</button>
                </div>
              </div>
              <div class="profile-item flex justify-between items-center border-b pb-4">
                <div class="label text-gray-700">Фамилия и имя</div>
                <div class="value flex items-center space-x-4">
                  <span>Иванов Иван</span>
                  <button class="text-blue-500">Изменить</button>
                </div>
              </div>
              <div class="profile-item flex justify-between items-center border-b pb-4">
                <div class="label text-gray-700">Номер телефона</div>
                <div class="value flex items-center space-x-4">
                  <span>+7 (800) 000-00-00</span>
                  <button class="text-blue-500">Изменить</button>
                </div>
              </div>
              <div class="profile-item flex justify-between items-center border-b pb-4">
                <button class="text-red-500">Удалить личный кабинет</button>
              </div>
            </div>
          </div>
          
          <div class="bg-white p-8 shadow rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Настройки профиля</h2>
            <div class="profile-settings space-y-4">
              <div class="profile-item flex justify-between items-center border-b pb-4">
                <div class="label text-gray-700">Загрузить фото профиля</div>
                <div class="value flex items-center space-x-4">
                  <input type="file" class="file-input">
                </div>
              </div>
              <!-- Add more settings here if needed -->
            </div>
          </div>
        </div>
        
        <div class="col-span-1">
          <div class="bg-white p-8 shadow rounded-lg">
            <h2 class="text-2xl font-bold mb-4">Мы в социальных сетях</h2>
            <div class="social-icons flex space-x-4">
              <a href="#"><img src="@/assets/images/icon-twitter.png" alt="Twitter" class="h-6"></a>
              <a href="#"><img src="@/assets/images/icon-facebook.png" alt="Facebook" class="h-6"></a>
              <a href="#"><img src="@/assets/images/icon-vk.png" alt="VK" class="h-6"></a>
              <a href="#"><img src="@/assets/images/icon-instagram.png" alt="Instagram" class="h-6"></a>
              <a href="#"><img src="@/assets/images/icon-youtube.png" alt="YouTube" class="h-6"></a>
            </div>
          </div>
        </div>
      </div>
    </main>
   
  </div>
<CFooter />

</template>

<script>
export default {
  data() {
    return {
      menuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    }
  },
  mounted() {
    document.addEventListener('click', this.closeMenu);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeMenu);
  }
};
</script>

<style scoped>
.profile-page {
  font-family: Arial, sans-serif;
}

.header {
  background-color: #00274D;
}

.footer {
  background-color: #00274D;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li a {
  color: #bbb;
  text-decoration: none;
}

.footer-section ul li a:hover {
  color: #fff;
}

.menu ul {
  list-style: none;
  padding: 0;
}

.menu ul li a {
  text-decoration: none;
  color: #007BFF;
}

.menu ul li a:hover {
  text-decoration: underline;
}

.profile-item {
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
}

.profile-item:last-child {
  border-bottom: none;
}

.file-input {
  border: 1px solid #ccc;
  padding: 0.5rem;
  border-radius: 0.25rem;
}
</style>
