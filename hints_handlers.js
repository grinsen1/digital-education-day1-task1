
// Обработчики для подсказок
document.querySelectorAll('.hint-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const platformId = parseInt(e.target.dataset.id);
        let hintText = "Нет подсказки";

        // Определяем текст подсказки на основе ID площадки
        if ([1, 2, 3, 4, 5, 14, 16, 17].includes(platformId)) {
            hintText = "знание";
        } else if ([6, 8, 11, 13, 18, 19].includes(platformId)) {
            hintText = "продажи";
        } else if ([7, 9, 10, 12].includes(platformId)) {
            hintText = "знание+продажи";
        }

        // Показываем подсказку
        e.target.textContent = hintText;

        // Сохраняем выбор в массив для отправки
        this.platformHints[platformId] = hintText;
    });
});

// Обработчики для чекбоксов новых продуктов
document.querySelectorAll('.new-product-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const platformId = parseInt(e.target.dataset.id);
        if (e.target.checked) {
            this.newProductPlatforms.push(platformId);
        } else {
            this.newProductPlatforms = this.newProductPlatforms.filter(id => id !== platformId);
        }
    });
});

// Обработчики для чекбоксов известных продуктов
document.querySelectorAll('.known-product-checkbox').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        const platformId = parseInt(e.target.dataset.id);
        if (e.target.checked) {
            this.knownProductPlatforms.push(platformId);
        } else {
            this.knownProductPlatforms = this.knownProductPlatforms.filter(id => id !== platformId);
        }
    });
});
