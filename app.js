// Конфигурация приложения
const CONFIG = {
    webAppUrl: "https://script.google.com/macros/s/AKfycbxyj4Kg5kKL_o4nlfRcIfNUuEdMgt-7MFYqUktAM1cO-NHP_aXJvhXx2_1uzF-PjhPyJg/exec"
};

// Данные площадок
const PLATFORMS_DATA = [
    {
        "п/п": 1,
        "Категория": "OLV",
        "Сайт": "MyTarget",
        "Формат": "In- stream video (Pre-roll (1920x1080))",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 240.0,
        "CPM": 240.0,
        "CTR%": 0.01,
        "CPC": 24.0,
        "VTR%": 0.55,
        "CPV": 0.43,
        "Частота": 2.2,
        "CPT": 528.0,
        "PI": 0.41,
        "CPVisit": 40.0,
        "CPA": 100000.0,
        "Процент отказов": 0.35
    },
    {
        "п/п": 2,
        "Категория": "OLV", 
        "Сайт": "Yandex.ru//Видеосеть",
        "Формат": "In- stream video (Pre-roll (1920x1080))",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 100.0,
        "CPM": 100.0,
        "CTR%": 0.008,
        "CPC": 12.5,
        "VTR%": 0.35,
        "CPV": 0.28,
        "Частота": 2.5,
        "CPT": 250.0,
        "PI": 0.39,
        "CPVisit": 19.23,
        "CPA": 111230.76,
        "Процент отказов": 0.35
    },
    {
        "п/п": 3,
        "Категория": "OLV",
        "Сайт": "RuTube.ru",
        "Формат": "In- stream video (Pre-roll (1920x1080))",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 1200.0,
        "CPM": 245.99,
        "CTR%": 0.017,
        "CPC": 14.47,
        "VTR%": 0.8,
        "CPV": 0.30,
        "Частота": 3.0,
        "CPT": 737.99,
        "PI": 0.39,
        "CPVisit": 24.11,
        "CPA": 241176.47,
        "Процент отказов": 0.35
    },
    {
        "п/п": 4,
        "Категория": "OLV",
        "Сайт": "Kinopoisk.ru",
        "Формат": "In- stream video (Pre-roll (1920x1080))",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 287.36,
        "CPM": 287.36,
        "CTR%": 0.01,
        "CPC": 28.736,
        "VTR%": 0.7,
        "CPV": 0.41,
        "Частота": 2.5,
        "CPT": 718.40,
        "PI": 0.39,
        "CPVisit": 44.20,
        "CPA": 442092.30,
        "Процент отказов": 0.35
    },
    {
        "п/п": 5,
        "Категория": "OLV",
        "Сайт": "Youtube.com",
        "Формат": "In- stream video (Pre-roll (1920x1080))",
        "Единица закупки": "Пакет",
        "Стоимость за единицу": 550000,
        "CPM": 366.66,
        "CTR%": 0.005,
        "CPC": 73.33,
        "VTR%": null,
        "CPV": 0.36,
        "Частота": null,
        "CPT": null,
        "PI": 0.37,
        "CPVisit": 122.22,
        "CPA": 1222222.22,
        "Процент отказов": 0.35
    },
    {
        "п/п": 6,
        "Категория": "Social Network",
        "Сайт": "vk.com",
        "Формат": "Реклама сайта (1080×607)",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 80,
        "CPM": 80,
        "CTR%": 0.0012,
        "CPC": 66.66,
        "VTR%": null,
        "CPV": null,
        "Частота": 2.5,
        "CPT": 200,
        "PI": 0.37,
        "CPVisit": 133.33,
        "CPA": 26666.66,
        "Процент отказов": 0.35
    },
    {
        "п/п": 7,
        "Категория": "Social Network",
        "Сайт": "vk.com",
        "Формат": "Реклама сайта (1080×607)",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 80,
        "CPM": 80,
        "CTR%": 0.0012,
        "CPC": 66.66,
        "VTR%": null,
        "CPV": null,
        "Частота": 2.5,
        "CPT": 200,
        "PI": 0.35,
        "CPVisit": 133.33,
        "CPA": 44444.44,
        "Процент отказов": 0.35
    },
    {
        "п/п": 8,
        "Категория": "Social Network",
        "Сайт": "Telegram Ads",
        "Формат": "Текст в мессенджере",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 210.1786,
        "CPM": 210.17,
        "CTR%": 0.011,
        "CPC": 19.10,
        "VTR%": null,
        "CPV": null,
        "Частота": null,
        "CPT": null,
        "PI": 0.37,
        "CPVisit": 29.39,
        "CPA": 36744.51,
        "Процент отказов": 0.35
    },
    {
        "п/п": 9,
        "Категория": "Social Network",
        "Сайт": "Telegram Ads",
        "Формат": "Премиум формат",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 401.95,
        "CPM": 401.95,
        "CTR%": 0.0125,
        "CPC": 32.15,
        "VTR%": null,
        "CPV": null,
        "Частота": null,
        "CPT": null,
        "PI": 0.37,
        "CPVisit": 45.93,
        "CPA": 32812.62,
        "Процент отказов": 0.35
    },
    {
        "п/п": 10,
        "Категория": "Banners Network",
        "Сайт": "MyTarget",
        "Формат": "Multiformat (1080×607, 600x600)",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 80,
        "CPM": 80,
        "CTR%": 0.0017,
        "CPC": 47.05,
        "VTR%": null,
        "CPV": null,
        "Частота": 3,
        "CPT": 240.00,
        "PI": 0.36,
        "CPVisit": 85.56,
        "CPA": 17112.29,
        "Процент отказов": 0.35
    },
    {
        "п/п": 11,
        "Категория": "Banners Network",
        "Сайт": "MyTarget",
        "Формат": "Multiformat (1080×607, 600x600)",
        "Единица закупки": "CPC",
        "Стоимость за единицу": 80,
        "CPM": 176.00,
        "CTR%": 0.0022,
        "CPC": 80,
        "VTR%": null,
        "CPV": null,
        "Частота": 3,
        "CPT": 528,
        "PI": 0.36,
        "CPVisit": 133.33,
        "CPA": 44444.44,
        "Процент отказов": 0.35
    },
    {
        "п/п": 12,
        "Категория": "Banners Network",
        "Сайт": "Yandex.ru//Display",
        "Формат": "Banners (240×400, 300×250, 300×500, 300×600, 320×480, 336×280, 380×320, 728х90, 970×250)",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 35,
        "CPM": 35,
        "CTR%": 0.0018,
        "CPC": 19.44,
        "VTR%": null,
        "CPV": null,
        "Частота": 3,
        "CPT": 105.00,
        "PI": 0.37,
        "CPVisit": 35.35,
        "CPA": 11784.51,
        "Процент отказов": 0.35
    },
    {
        "п/п": 13,
        "Категория": "Banners Network",
        "Сайт": "Yandex.ru//Display",
        "Формат": "Banners (240×400, 300×250, 300×500, 300×600, 320×480, 336×280, 380×320, 728х90, 970×250)",
        "Единица закупки": "CPC",
        "Стоимость за единицу": 35,
        "CPM": 77,
        "CTR%": 0.0022,
        "CPC": 35,
        "VTR%": null,
        "CPV": null,
        "Частота": 3,
        "CPT": 230.99,
        "PI": 0.36,
        "CPVisit": 58.33,
        "CPA": 29166.66,
        "Процент отказов": 0.35
    },
    {
        "п/п": 14,
        "Категория": "Banners Network",
        "Сайт": "Iphones.ru",
        "Формат": "Верхняя растяжка  1100х250 + 1100х400",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 680,
        "CPM": 185.45,
        "CTR%": 0.0019,
        "CPC": 97.60,
        "VTR%": null,
        "CPV": null,
        "Частота": 1.5,
        "CPT": 278.18,
        "PI": 0.41,
        "CPVisit": 203.34,
        "CPA": 67783.09,
        "Процент отказов": 0.35
    },
    {
        "п/п": 16,
        "Категория": "Banners Network",
        "Сайт": "Kommersant.ru",
        "Формат": "970х250, 600х250, 300х250",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 800,
        "CPM": 175.99,
        "CTR%": 0.002,
        "CPC": 87.99,
        "VTR%": null,
        "CPV": null,
        "Частота": 2,
        "CPT": 351.99,
        "PI": 0.41,
        "CPVisit": 175.99,
        "CPA": 117333.33,
        "Процент отказов": 0.35
    },
    {
        "п/п": 17,
        "Категория": "Banners Network",
        "Сайт": "RBC.ru",
        "Формат": "300х600 + 300x250",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 1147.5,
        "CPM": 206.55,
        "CTR%": 0.0012,
        "CPC": 172.12,
        "VTR%": null,
        "CPV": null,
        "Частота": 2,
        "CPT": 413.10,
        "PI": 0.41,
        "CPVisit": 286.87,
        "CPA": 191250.00,
        "Процент отказов": 0.35
    },
    {
        "п/п": 18,
        "Категория": "E-commerce",
        "Сайт": "Ozon.ru",
        "Формат": "Баннер на главной",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 230,
        "CPM": 230,
        "CTR%": 0.004,
        "CPC": 57.5,
        "VTR%": null,
        "CPV": null,
        "Частота": 3,
        "CPT": 690.00,
        "PI": 0.37,
        "CPVisit": 104.54,
        "CPA": 26136.36,
        "Процент отказов": 0.35
    },
    {
        "п/п": 19,
        "Категория": "PROGRAMMATIC",
        "Сайт": "Soloway",
        "Формат": "Баннеры (120x600, 160x600, 240x400, 240x600, 300x250, 300x300, 300x500, 300x600, 320x480, 336x280, 970x250)",
        "Единица закупки": "CPM",
        "Стоимость за единицу": 90,
        "CPM": 90,
        "CTR%": 0.0022,
        "CPC": 40.90,
        "VTR%": null,
        "CPV": null,
        "Частота": 3,
        "CPT": 269.99,
        "PI": 0.37,
        "CPVisit": 74.38,
        "CPA": 24793.38,
        "Процент отказов": 0.35
    }
];

// Карта подсказок
const HINTS_MAP = {
    "1": "знание",
    "2": "знание", 
    "3": "знание",
    "4": "знание",
    "5": "знание",
    "14": "знание",
    "16": "знание",
    "17": "знание",
    "6": "продажи",
    "8": "продажи",
    "11": "продажи",
    "13": "продажи",
    "18": "продажи",
    "19": "продажи",
    "7": "знание+продажи",
    "9": "знание+продажи",
    "10": "знание+продажи",
    "12": "знание+продажи"
};

// Глобальные переменные
let currentPlatforms = [...PLATFORMS_DATA];
let platformStates = {};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeApp();
    } catch (error) {
        console.error('Ошибка инициализации приложения:', error);
    }
});

function initializeApp() {
    initializePlatformStates();
    setupNavigation();
    setupTableFunctionality();
    setupFormHandlers();
    
    // Показать главную страницу по умолчанию
    showSection('home');
}

// Инициализация состояний площадок
function initializePlatformStates() {
    PLATFORMS_DATA.forEach(platform => {
        const id = platform['п/п'];
        platformStates[id] = {
            newProduct: false,
            knownProduct: false,
            hintShown: false
        };
    });
}

// Настройка навигации
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sectionLinks = document.querySelectorAll('[data-section-link]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section');
            if (section) {
                showSection(section);
                updateActiveNav(link);
            }
        });
    });
    
    sectionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('data-section-link');
            if (section) {
                showSection(section);
                updateActiveNavBySection(section);
            }
        });
    });
}

function showSection(sectionId) {
    try {
        // Скрыть все секции
        const sections = document.querySelectorAll('.app-section');
        sections.forEach(section => section.classList.add('hidden'));
        
        // Показать нужную секцию
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.remove('hidden');
            
            // Если это база данных, рендерим таблицу
            if (sectionId === 'database') {
                renderTable();
            }
        }
    } catch (error) {
        console.error('Ошибка при переключении секции:', error);
    }
}

function updateActiveNav(activeLink) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));
    activeLink.classList.add('active');
}

function updateActiveNavBySection(sectionId) {
    const targetLink = document.querySelector(`[data-section="${sectionId}"]`);
    if (targetLink) {
        updateActiveNav(targetLink);
    }
}

// Настройка функциональности таблицы
function setupTableFunctionality() {
    const searchInput = document.getElementById('searchInput');
    const categoryFilter = document.getElementById('categoryFilter');
    
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleCategoryFilter);
    }
}

function handleSearch() {
    try {
        const searchInput = document.getElementById('searchInput');
        if (!searchInput) return;
        
        const searchTerm = searchInput.value.toLowerCase();
        
        if (searchTerm === '') {
            currentPlatforms = [...PLATFORMS_DATA];
        } else {
            currentPlatforms = PLATFORMS_DATA.filter(platform => {
                return Object.values(platform).some(value => 
                    value !== null && value.toString().toLowerCase().includes(searchTerm)
                );
            });
        }
        
        renderTable();
    } catch (error) {
        console.error('Ошибка поиска:', error);
    }
}

function handleCategoryFilter() {
    try {
        const categoryFilter = document.getElementById('categoryFilter');
        if (!categoryFilter) return;
        
        const selectedCategory = categoryFilter.value;
        
        if (selectedCategory === 'all') {
            currentPlatforms = [...PLATFORMS_DATA];
        } else {
            currentPlatforms = PLATFORMS_DATA.filter(platform => 
                platform['Категория'] === selectedCategory
            );
        }
        
        renderTable();
    } catch (error) {
        console.error('Ошибка фильтрации:', error);
    }
}

// Рендеринг таблицы
function renderTable() {
    try {
        const tbody = document.getElementById('platformsTableBody');
        if (!tbody) return;
        
        tbody.innerHTML = '';
        
        currentPlatforms.forEach(platform => {
            const row = createTableRow(platform);
            tbody.appendChild(row);
        });
    } catch (error) {
        console.error('Ошибка рендеринга таблицы:', error);
    }
}

function createTableRow(platform) {
    const row = document.createElement('tr');
    const id = platform['п/п'];
    
    // Основные данные
    const columns = [
        'п/п', 'Категория', 'Сайт', 'Формат', 'Единица закупки', 
        'Стоимость за единицу', 'CPM', 'CTR%', 'CPC', 'VTR%', 
        'CPV', 'Частота', 'CPT', 'PI', 'CPVisit', 'CPA', 'Процент отказов'
    ];
    
    columns.forEach(col => {
        const cell = document.createElement('td');
        let value = platform[col];
        
        if (value === null) {
            value = '-';
        } else if (typeof value === 'number') {
            value = formatNumber(value);
        }
        
        cell.textContent = value;
        row.appendChild(cell);
    });
    
    // НОВЫЙ СТОЛБЕЦ: Показать формат
    const showFormatCell = document.createElement('td');
    showFormatCell.className = 'show-format-cell';
    const showFormatLink = document.createElement('a');
    showFormatLink.className = 'show-format-link';
    showFormatLink.textContent = 'показать формат';
    showFormatLink.href = '#';
    showFormatLink.addEventListener('click', (e) => {
        e.preventDefault();
        showFormatModal(id, platform['Сайт']);
    });
    showFormatCell.appendChild(showFormatLink);
    row.appendChild(showFormatCell);
    
    // Остальные столбцы (чекбоксы и подсказки) остаются без изменений...
    
    // Чекбокс "Запуск нового продукта"
    const newProductCell = document.createElement('td');
    newProductCell.className = 'checkbox-cell';
    const newProductCheckbox = document.createElement('input');
    newProductCheckbox.type = 'checkbox';
    newProductCheckbox.checked = platformStates[id].newProduct;
    newProductCheckbox.addEventListener('change', () => {
        platformStates[id].newProduct = newProductCheckbox.checked;
    });
    newProductCell.appendChild(newProductCheckbox);
    row.appendChild(newProductCell);
    
    // Чекбокс "Продукт хорошо известен"
    const knownProductCell = document.createElement('td');
    knownProductCell.className = 'checkbox-cell';
    const knownProductCheckbox = document.createElement('input');
    knownProductCheckbox.type = 'checkbox';
    knownProductCheckbox.checked = platformStates[id].knownProduct;
    knownProductCheckbox.addEventListener('change', () => {
        platformStates[id].knownProduct = knownProductCheckbox.checked;
    });
    knownProductCell.appendChild(knownProductCheckbox);
    row.appendChild(knownProductCell);
    
    // Колонка подсказок
    const hintCell = document.createElement('td');
    if (platformStates[id].hintShown) {
        const hintDisplay = document.createElement('div');
        hintDisplay.className = 'hint-display';
        hintDisplay.textContent = HINTS_MAP[id] || 'Нет подсказки';
        hintCell.appendChild(hintDisplay);
    } else {
        const hintLink = document.createElement('a');
        hintLink.className = 'hint-link';
        hintLink.textContent = 'подсказать';
        hintLink.href = '#';
        hintLink.addEventListener('click', (e) => {
            e.preventDefault();
            showHint(id);
        });
        hintCell.appendChild(hintLink);
    }
    row.appendChild(hintCell);
    
    return row;
}

function formatNumber(num) {
    if (num >= 1000) {
        return num.toLocaleString('ru-RU');
    }
    return num.toString();
}

function showHint(platformId) {
    platformStates[platformId].hintShown = true;
    renderTable();
}

// Настройка обработчиков форм
function setupFormHandlers() {
    const submitButton = document.getElementById('submitSolution');
    if (submitButton) {
        submitButton.addEventListener('click', handleSubmit);
    }
}

async function handleSubmit() {
    try {
        const groupName = document.getElementById('groupName').value.trim();
        const justification = document.getElementById('justification').value.trim();
        
        if (!groupName || !justification) {
            showStatusMessage('Пожалуйста, заполните все обязательные поля.', 'error');
            return;
        }
        
        // Собираем данные для отправки
const submissionData = {
    groupName: groupName,
    justification: justification,
    platforms: [],
    newProductLaunchPlatforms: [],
    wellKnownProductPlatforms: [],
    selectedHints: [],
    timestamp: new Date().toISOString()
};
        
        // Добавляем данные о выбранных площадках
PLATFORMS_DATA.forEach(platform => {
    const id = platform['п/п'];
    const state = platformStates[id];
    
    if (state.newProduct || state.knownProduct) {
        submissionData.platforms.push({
            id: id,
            site: platform['Сайт'],
            category: platform['Категория'],
            newProduct: state.newProduct,
            knownProduct: state.knownProduct,
            hint: state.hintShown ? HINTS_MAP[id] : null
        });
    }
    
    // Формируем списки площадок для отправки
    if (state.newProduct) {
        submissionData.newProductLaunchPlatforms.push(id);
    }
    if (state.knownProduct) {
        submissionData.wellKnownProductPlatforms.push(id);
    }
    if (state.hintShown && HINTS_MAP[id]) {
        submissionData.selectedHints.push(HINTS_MAP[id]);
    }
});
        console.log('Отправляемые данные:', JSON.stringify(submissionData, null, 2));
        // Показываем состояние загрузки
        const submitButton = document.getElementById('submitSolution');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Отправка...';
        submitButton.disabled = true;
        
        try {
            const response = await fetch(CONFIG.webAppUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(submissionData)
            });
            
            showStatusMessage('Данные успешно отправлены!', 'success');
            clearForm();
            
        } catch (error) {
            console.error('Ошибка отправки:', error);
            showStatusMessage('Произошла ошибка при отправке данных. Пожалуйста, попробуйте еще раз.', 'error');
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    } catch (error) {
        console.error('Ошибка в handleSubmit:', error);
        showStatusMessage('Произошла неожиданная ошибка.', 'error');
    }
}

function showStatusMessage(message, type = 'info') {
    const statusElement = document.getElementById('submitStatus');
    if (statusElement) {
        statusElement.textContent = message;
        statusElement.className = `status-message mt-8 status--${type}`;
        statusElement.classList.remove('hidden');
        
        // Автоскрытие через 5 секунд
        setTimeout(() => {
            statusElement.classList.add('hidden');
        }, 5000);
    }
}

function clearForm() {
    const groupNameField = document.getElementById('groupName');
    const justificationField = document.getElementById('justification');
    
    if (groupNameField) groupNameField.value = '';
    if (justificationField) justificationField.value = '';
    
    // Сбрасываем состояния площадок
    Object.keys(platformStates).forEach(id => {
        platformStates[id] = {
            newProduct: false,
            knownProduct: false,
            hintShown: false
        };
    });
    
    renderTable();
}

// Экспорт для использования в других модулях (если нужно)
window.MediaPlanningApp = {
    showSection,
    renderTable,
    showStatusMessage
};
// Функции модального окна для показа форматов
function createModal() {
    const modal = document.createElement('div');
    modal.id = 'formatModal';
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <img class="modal-image" id="modalImage" src="" alt="Формат рекламы">
            <div class="modal-caption" id="modalCaption"></div>
        </div>
    `;
    document.body.appendChild(modal);
    
    // Обработчик закрытия по клику на X
    modal.querySelector('.close').addEventListener('click', closeModal);
    
    // Обработчик закрытия по клику вне изображения
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    return modal;
}

function showFormatModal(platformId, siteName) {
    let modal = document.getElementById('formatModal');
    if (!modal) {
        modal = createModal();
    }
    
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    
    // Устанавливаем путь к изображению
    const imagePath = `/digital-education-day1-task1/screens/${platformId}.png`;
    modalImage.src = imagePath;
    modalCaption.textContent = `Формат рекламы для ${siteName}`;
    
    // Обработка ошибки загрузки изображения
    modalImage.onerror = function() {
        modalImage.src = '/screens/placeholder.png'; // Заглушка если изображение не найдено
        modalCaption.textContent = `Формат для ${siteName} (изображение недоступно)`;
    };
    
    modal.style.display = 'block';
    
    // Анимация появления
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal() {
    const modal = document.getElementById('formatModal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
}

// Закрытие модального окна по ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});п
