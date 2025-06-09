
// Обработчик для отправки данных из базы данных
document.getElementById('submit-database').addEventListener('click', () => {
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
});
