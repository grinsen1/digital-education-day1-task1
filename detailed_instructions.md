# Инструкция по модификации проекта

## 1. Модификация файла app.js

1. **Замените массив platforms:**
   - Найдите в конструкторе класса MediaPlanningApp массив this.data.platforms = [...]
   - Замените его содержимое на код из файла platforms_for_insert.js

2. **Добавьте переменные в конструктор:**
   - Найдите в конструкторе после строки this.platformsForComparison = [];
   - Добавьте строки из начала файла handlers_for_insert.js:
   ```javascript
   this.newProductPlatforms = [];
   this.knownProductPlatforms = [];
   this.platformHints = {};
   ```

3. **Модифицируйте метод renderPlatformsTable:**
   - Найдите строку с row.innerHTML = `<td>${platform['п/п']}</td>...
   - Замените её на код из файла table_row_for_insert.html
   - После блока с обработчиками для чекбоксов сравнения, добавьте код обработчиков из файла handlers_for_insert.js (после строки "// Добавить в метод renderPlatformsTable после обработчиков для чекбоксов сравнения:")

4. **Добавьте обработчик для кнопки в базе данных:**
   - Найдите метод setupEventListeners
   - Перед закрывающей скобкой метода добавьте код из файла submit_method_for_insert.js (до строки "// Добавить новый метод в класс MediaPlanningApp:")

5. **Добавьте новый метод submitDatabaseForm:**
   - После метода submitAssignment() добавьте код из файла submit_method_for_insert.js (после строки "// Добавить новый метод в класс MediaPlanningApp:")

## 2. Модификация файла index.html

1. **Замените заголовки таблицы в разделе база данных:**
   - Найдите в файле блок `<thead><tr>...</tr></thead>` в секции "База данных"
   - Замените содержимое `<tr>...</tr>` на код из файла table_headers_for_insert.html

2. **Добавьте блок информации о группе:**
   - Найдите конец секции "База данных" (перед `</section>`)
   - Перед закрывающим тегом `</div>` блока сравнения площадок добавьте код из файла group_info_block_for_insert.html

## 3. Проверка работоспособности

После внесения всех изменений:

1. Убедитесь, что все скобки, кавычки и HTML-теги правильно закрыты
2. Проверьте отображение таблицы во вкладке "База данных"
3. Проверьте работу подсказок, чекбоксов и отправку формы

## 4. Правила работы подсказок

- Для пунктов 1, 2, 3, 4, 5, 14, 16, 17 - "знание"
- Для пунктов 6, 8, 11, 13, 18, 19 - "продажи"
- Для пунктов 7, 9, 10, 12 - "знание+продажи"
