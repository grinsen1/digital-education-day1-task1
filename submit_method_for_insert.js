// Добавить в метод setupEventListeners:
// Кнопка отправки решения из базы данных
const submitDatabaseBtn = document.getElementById('submit-database');
if (submitDatabaseBtn) {
    submitDatabaseBtn.addEventListener('click', () => {
        this.submitDatabaseForm();
    });
}

// Добавить новый метод в класс MediaPlanningApp:

// Отправка данных из базы данных
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

    // Показываем уведомление
    this.showNotification('✅ Ваше решение отправлено!');
}