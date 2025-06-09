
# Модификации для файла app.js

1. В конструкторе класса MediaPlanningApp добавить:
```javascript
this.newProductPlatforms = [];
this.knownProductPlatforms = [];
this.platformHints = {};
```

2. Заменить массив platforms на новый из файла platforms_data.js

3. В методе renderPlatformsTable() заменить HTML генерацию строк таблицы на код из файла render_table.js

4. В методе renderPlatformsTable() после обработчиков для чекбоксов сравнения добавить код из файла hints_handlers.js

5. В конце метода setupEventListeners() добавить:
```javascript
// Кнопка отправки решения из базы данных
const submitDatabaseBtn = document.getElementById('submit-database');
if (submitDatabaseBtn) {
    submitDatabaseBtn.addEventListener('click', () => {
        this.submitDatabaseForm();
    });
}
```

6. Добавить новый метод submitDatabaseForm():
```javascript
submitDatabaseForm() {
    const studentNameElement = document.getElementById('student-name-database');
    const justificationElement = document.getElementById('justification-database');

    const studentName = studentNameElement ? studentNameElement.value.trim() : '';
    const justification = justificationElement ? justificationElement.value.trim() : '';

    if (!studentName) {
        alert('Пожалуйста, введите ваше имя.');
        studentNameElement?.focus();
        return;
    }

    if (!justification) {
        alert('Пожалуйста, добавьте обоснование.');
        justificationElement?.focus();
        return;
    }

    // Собираем данные для отправки
    const submissionData = {
        studentName: studentName,
        justification: justification,
        newProductPlatforms: this.newProductPlatforms.join(', '),
        knownProductPlatforms: this.knownProductPlatforms.join(', '),
        platformHints: JSON.stringify(this.platformHints),
        timestamp: new Date().toLocaleString('ru-RU')
    };

    // Отправляем данные
    this.sendToGoogleAppsScript(submissionData);
}
```

# Модификации для файла index.html

1. В секции "База данных" заменить заголовки таблицы на код из файла table_headers.html

2. В конце секции "База данных", после блока с графиком сравнения, добавить код из файла group_info.html
