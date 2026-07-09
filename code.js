(function() {
    let ysdk = null;
    async function initYandexSDK() {
        try {
            if (typeof YaGames !== 'undefined') {
                ysdk = await YaGames.init();
                console.log('SDK ready');
                if (ysdk.features?.LoadingAPI) ysdk.features.LoadingAPI.ready();
            }
        } catch (e) { console.warn('SDK error:', e); }
    }

    const regionsData = {
        europe: [
            { flag: '🇦🇩', name: 'Андорра', capital: 'Андорра-ла-Велья' },
            { flag: '🇦🇲', name: 'Армения', capital: 'Ереван' },
            { flag: '🇦🇹', name: 'Австрия', capital: 'Вена' },
            { flag: '🇧🇦', name: 'Босния и Герцеговина', capital: 'Сараево' },
            { flag: '🇭🇺', name: 'Венгрия', capital: 'Будапешт' },
            { flag: '🇬🇧', name: 'Великобритания', capital: 'Лондон' },
            { flag: '🇬🇪', name: 'Грузия', capital: 'Тбилиси' },
            { flag: '🇬🇷', name: 'Греция', capital: 'Афины' },
            { flag: '🇩🇰', name: 'Дания', capital: 'Копенгаген' },
            { flag: '🇪🇸', name: 'Испания', capital: 'Мадрид' },
            { flag: '🇨🇾', name: 'Кипр', capital: 'Никосия' },
            { flag: '🇷🇴', name: 'Румыния', capital: 'Бухарест' },
            { flag: '🇷🇺', name: 'Россия', capital: 'Москва' },
            { flag: '🇩🇪', name: 'Германия', capital: 'Берлин' },
            { flag: '🇫🇷', name: 'Франция', capital: 'Париж' },
            { flag: '🇮🇹', name: 'Италия', capital: 'Рим' },
            { flag: '🇳🇱', name: 'Нидерланды', capital: 'Амстердам' },
            { flag: '🇸🇪', name: 'Швеция', capital: 'Стокгольм' },
            { flag: '🇳🇴', name: 'Норвегия', capital: 'Осло' },
            { flag: '🇵🇱', name: 'Польша', capital: 'Варшава' },
            { flag: '🇷🇸', name: 'Сербия', capital: 'Белград' },
            { flag: '🇲🇪', name: 'Черногория', capital: 'Подгорица' },
            { flag: '🇫🇮', name: 'Финляндия', capital: 'Хельсинки' },
            { flag: '🇭🇷', name: 'Хорватия', capital: 'Загреб' },
            { flag: '🇲🇰', name: 'Северная Македония', capital: 'Скопье' },
            { flag: '🇨🇿', name: 'Чехия', capital: 'Прага' },
            { flag: '🇦🇱', name: 'Албания', capital: 'Тирана' },
            { flag: '🇧🇬', name: 'Болгария', capital: 'София' },
            { flag: '🇲🇩', name: 'Молдавия', capital: 'Кишинёв' },
            { flag: '🇵🇹', name: 'Португалия', capital: 'Лиссабон' },
            { flag: '🇪🇪', name: 'Эстония', capital: 'Таллин' },
            { flag: '🇱🇹', name: 'Литва', capital: 'Вильнюс' },
            { flag: '🇱🇻', name: 'Латвия', capital: 'Рига' },
            { flag: '🇸🇮', name: 'Словения', capital: 'Любляна' },
            { flag: '🇸🇰', name: 'Словакия', capital: 'Братислава' },
            { flag: '🇧🇾', name: 'Белоруссия', capital: 'Минск' },
            { flag: '🇺🇦', name: 'Украина', capital: 'Киев' },
            { flag: '🇨🇭', name: 'Швейцария', capital: 'Берн' },
            { flag: '🇱🇺', name: 'Люксембург', capital: 'Люксембург' },
            { flag: '🇱🇮', name: 'Лихтенштейн', capital: 'Вадуц' },
            { flag: '🇮🇸', name: 'Исландия', capital: 'Рейкьявик' },
            { flag: '🇲🇹', name: 'Мальта', capital: 'Валлетта' },
            { flag: '🇸🇲', name: 'Сан-Марино', capital: 'Сан-Марино' }
        ],
        asia: [
            { flag: '🇦🇫', name: 'Афганистан', capital: 'Кабул' },
            { flag: '🇦🇲', name: 'Армения', capital: 'Ереван' },
            { flag: '🇦🇿', name: 'Азербайджан', capital: 'Баку' },
            { flag: '🇧🇩', name: 'Бангладеш', capital: 'Дакка' },
            { flag: '🇬🇪', name: 'Грузия', capital: 'Тбилиси' },
            { flag: '🇪🇬', name: 'Египет', capital: 'Каир' },
            { flag: '🇮🇩', name: 'Индонезия', capital: 'Джакарта' },
            { flag: '🇾🇪', name: 'Йемен', capital: 'Сана' },
            { flag: '🇨🇾', name: 'Кипр', capital: 'Никосия' },
            { flag: '🇱🇦', name: 'Лаос', capital: 'Вьентьян' },
            { flag: '🇱🇧', name: 'Ливан', capital: 'Бейрут' },
            { flag: '🇦🇪', name: 'ОАЭ', capital: 'Абу-Даби' },
            { flag: '🇴🇲', name: 'Оман', capital: 'Маскат' },
            { flag: '🇷🇺', name: 'Россия', capital: 'Москва' },
            { flag: '🇨🇳', name: 'Китай', capital: 'Пекин' },
            { flag: '🇮🇳', name: 'Индия', capital: 'Нью-Дели' },
            { flag: '🇯🇵', name: 'Япония', capital: 'Токио' },
            { flag: '🇰🇷', name: 'Южная Корея', capital: 'Сеул' },
            { flag: '🇹🇷', name: 'Турция', capital: 'Анкара' },
            { flag: '🇸🇦', name: 'Саудовская Аравия', capital: 'Эр-Рияд' },
            { flag: '🇲🇳', name: 'Монголия', capital: 'Улан-Батор' },
            { flag: '🇵🇰', name: 'Пакистан', capital: 'Исламабад' },
            { flag: '🇻🇳', name: 'Вьетнам', capital: 'Ханой' },
            { flag: '🇹🇭', name: 'Таиланд', capital: 'Бангкок' },
            { flag: '🇮🇱', name: 'Израиль', capital: 'Иерусалим' },
            { flag: '🇮🇷', name: 'Иран', capital: 'Тегеран' },
            { flag: '🇲🇾', name: 'Малайзия', capital: 'Куала-Лумпур' },
            { flag: '🇯🇴', name: 'Иордания', capital: 'Амман' },
            { flag: '🇮🇶', name: 'Ирак', capital: 'Багдад' },
            { flag: '🇸🇾', name: 'Сирия', capital: 'Дамаск' },
            { flag: '🇧🇭', name: 'Бахрейн', capital: 'Манама' },
            { flag: '🇶🇦', name: 'Катар', capital: 'Доха' },
            { flag: '🇰🇿', name: 'Казахстан', capital: 'Астана' },
            { flag: '🇺🇿', name: 'Узбекистан', capital: 'Ташкент' },
            { flag: '🇰🇬', name: 'Киргизия', capital: 'Бишкек' },
            { flag: '🇹🇯', name: 'Таджикистан', capital: 'Душанбе' },
            { flag: '🇹🇲', name: 'Туркменистан', capital: 'Ашхабад' },
            { flag: '🇳🇵', name: 'Непал', capital: 'Катманду' },
            { flag: '🇧🇹', name: 'Бутан', capital: 'Тхимпху' },
            { flag: '🇲🇲', name: 'Мьянма', capital: 'Нейпьидо' },
            { flag: '🇱🇰', name: 'Шри-Ланка', capital: 'Шри-Джаяварденепура-Котте' },
            { flag: '🇲🇻', name: 'Мальдивы', capital: 'Мале' }
        ],
        africa: [
            { flag: '🇳🇬', name: 'Нигерия', capital: 'Абуджа' },
            { flag: '🇿🇦', name: 'ЮАР', capital: 'Претория' },
            { flag: '🇪🇬', name: 'Египет', capital: 'Каир' },
            { flag: '🇰🇪', name: 'Кения', capital: 'Найроби' },
            { flag: '🇪🇹', name: 'Эфиопия', capital: 'Аддис-Абеба' },
            { flag: '🇲🇦', name: 'Марокко', capital: 'Рабат' },
            { flag: '🇬🇭', name: 'Гана', capital: 'Аккра' },
            { flag: '🇸🇳', name: 'Сенегал', capital: 'Дакар' },
            { flag: '🇹🇿', name: 'Танзания', capital: 'Додома' },
            { flag: '🇦🇴', name: 'Ангола', capital: 'Луанда' },
            { flag: '🇨🇩', name: 'ДР Конго', capital: 'Киншаса' },
            { flag: '🇲🇱', name: 'Мали', capital: 'Бамако' },
            { flag: '🇨🇲', name: 'Камерун', capital: 'Яунде' },
            { flag: '🇿🇼', name: 'Зимбабве', capital: 'Хараре' },
            { flag: '🇿🇲', name: 'Замбия', capital: 'Лусака' }
        ],
        north_america: [
            { flag: '🇺🇸', name: 'США', capital: 'Вашингтон' },
            { flag: '🇨🇦', name: 'Канада', capital: 'Оттава' },
            { flag: '🇲🇽', name: 'Мексика', capital: 'Мехико' },
            { flag: '🇨🇺', name: 'Куба', capital: 'Гавана' },
            { flag: '🇯🇲', name: 'Ямайка', capital: 'Кингстон' },
            { flag: '🇬🇹', name: 'Гватемала', capital: 'Гватемала' },
            { flag: '🇭🇹', name: 'Гаити', capital: 'Порт-о-Пренс' },
            { flag: '🇩🇴', name: 'Доминиканская Респ.', capital: 'Санто-Доминго' },
            { flag: '🇭🇳', name: 'Гондурас', capital: 'Тегусигальпа' },
            { flag: '🇸🇻', name: 'Сальвадор', capital: 'Сан-Сальвадор' },
            { flag: '🇳🇮', name: 'Никарагуа', capital: 'Манагуа' },
            { flag: '🇨🇷', name: 'Коста-Рика', capital: 'Сан-Хосе' },
            { flag: '🇵🇦', name: 'Панама', capital: 'Панама' }
        ],
        south_america: [
            { flag: '🇧🇷', name: 'Бразилия', capital: 'Бразилиа' },
            { flag: '🇦🇷', name: 'Аргентина', capital: 'Буэнос-Айрес' },
            { flag: '🇨🇴', name: 'Колумбия', capital: 'Богота' },
            { flag: '🇨🇱', name: 'Чили', capital: 'Сантьяго' },
            { flag: '🇵🇪', name: 'Перу', capital: 'Лима' },
            { flag: '🇻🇪', name: 'Венесуэла', capital: 'Каракас' },
            { flag: '🇪🇨', name: 'Эквадор', capital: 'Кито' },
            { flag: '🇧🇴', name: 'Боливия', capital: 'Сукре' },
            { flag: '🇵🇾', name: 'Парагвай', capital: 'Асунсьон' },
            { flag: '🇺🇾', name: 'Уругвай', capital: 'Монтевидео' },
            { flag: '🇬🇾', name: 'Гайана', capital: 'Джорджтаун' },
            { flag: '🇸🇷', name: 'Суринам', capital: 'Парамарибо' }
        ],
        oceania: [
            { flag: '🇦🇺', name: 'Австралия', capital: 'Канберра' },
            { flag: '🇳🇿', name: 'Новая Зеландия', capital: 'Веллингтон' },
            { flag: '🇫🇯', name: 'Фиджи', capital: 'Сува' },
            { flag: '🇵🇬', name: 'Папуа-Новая Гвинея', capital: 'Порт-Морсби' },
            { flag: '🇼🇸', name: 'Самоа', capital: 'Апиа' },
            { flag: '🇹🇴', name: 'Тонга', capital: 'Нукуалофа' },
            { flag: '🇻🇺', name: 'Вануату', capital: 'Порт-Вила' },
            { flag: '🇸🇧', name: 'Соломоновы Острова', capital: 'Хониара' }
        ]
    };

    // Элементы
    const menuScreen = document.getElementById('menu-screen');
    const gameScreen = document.getElementById('game-screen');
    const regionSelect = document.getElementById('regionSelect');
    const questionCard = document.getElementById('questionCard');
    const gameoverCard = document.getElementById('gameover-card');
    const gameoverTitle = document.getElementById('gameoverTitle');
    const flagEmoji = document.getElementById('flagEmoji');
    const questionLabel = document.getElementById('questionLabel');
    const answersContainer = document.getElementById('answersContainer');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const livesDisplay = document.getElementById('livesDisplay');
    const progressDisplay = document.getElementById('progressDisplay');
    const finalScoreText = document.getElementById('finalScoreText');
    const playAgainBtn = document.getElementById('playAgainBtn');
    const toMenuBtn = document.getElementById('toMenuBtn');
    const inGameMenuBtn = document.getElementById('inGameMenuBtn');
    const modeButtons = document.querySelectorAll('[data-mode]');

    let currentMode = null;
    let currentRegionCountries = [];
    let score = 0;
    let lives = 3;
    let gameActive = false;
    let answerLocked = false;
    let currentCorrectAnswer = null;
    let remainingQuestions = [];
    let currentQuestionIndex = 0;

    function updateUI() {
        scoreDisplay.textContent = `⭐ ${score}`;
        const hearts = ['❤️', '❤️', '❤️'];
        livesDisplay.textContent = hearts.slice(0, lives).join('') || '💔';
        const total = currentRegionCountries.length;
        const done = currentQuestionIndex;
        progressDisplay.textContent = `${done}/${total}`;
    }

    function getRandomOptions(correctValue, pool) {
        const others = pool.filter(item => item !== correctValue);
        const shuffledOthers = others.sort(() => Math.random() - 0.5);
        const twoWrong = shuffledOthers.slice(0, 2);
        const options = [
            { value: correctValue, correct: true },
            ...twoWrong.map(v => ({ value: v, correct: false }))
        ];
        return options.sort(() => Math.random() - 0.5);
    }

    function loadNewQuestion() {
        if (!gameActive) return;
        if (currentQuestionIndex >= remainingQuestions.length) {
            winGame();
            return;
        }

        answerLocked = false;
        const countryIndex = remainingQuestions[currentQuestionIndex];
        const country = currentRegionCountries[countryIndex];
        let questionText = '';
        let emojiDisplay = '';
        let correctValue = '';
        let options = [];
        let answerType = 'text';

        switch (currentMode) {
            case 'flag-to-country':
                emojiDisplay = country.flag;
                questionText = 'Какая это страна?';
                correctValue = country.name;
                options = getRandomOptions(correctValue, currentRegionCountries.map(c => c.name));
                break;
            case 'country-to-capital':
                emojiDisplay = '';
                questionText = `Столица страны: ${country.name}`;
                correctValue = country.capital;
                options = getRandomOptions(correctValue, currentRegionCountries.map(c => c.capital));
                break;
            case 'country-to-flag':
                emojiDisplay = '';
                questionText = `Флаг страны: ${country.name}`;
                correctValue = country.flag;
                options = getRandomOptions(correctValue, currentRegionCountries.map(c => c.flag));
                answerType = 'flag';
                break;
        }

        flagEmoji.textContent = emojiDisplay;
        flagEmoji.style.display = emojiDisplay ? 'block' : 'none';
        questionLabel.textContent = questionText;
        currentCorrectAnswer = correctValue;
        currentQuestionIndex++;
        updateUI();

        answersContainer.innerHTML = '';
        options.forEach(opt => {
            const btn = document.createElement('div');
            btn.className = 'answer-btn';
            if (answerType === 'flag') {
                btn.classList.add('flag-option');
                btn.textContent = opt.value;
            } else {
                btn.textContent = opt.value;
            }
            btn.addEventListener('click', () => handleAnswer(opt, btn));
            btn.addEventListener('touchend', (e) => {
                e.preventDefault();
                handleAnswer(opt, btn);
            });
            answersContainer.appendChild(btn);
        });
    }

    function handleAnswer(option, buttonElement) {
        if (!gameActive || answerLocked) return;
        answerLocked = true;

        const allButtons = document.querySelectorAll('.answer-btn');
        allButtons.forEach(btn => {
            btn.style.pointerEvents = 'none';
            if (btn.textContent === currentCorrectAnswer) {
                btn.classList.add('correct');
            } else if (btn === buttonElement && !option.correct) {
                btn.classList.add('wrong');
            }
        });

        if (option.correct) {
            score += 10;
        } else {
            lives--;
        }
        updateUI();

        setTimeout(() => {
            if (lives <= 0) {
                endGame(false);
            } else {
                loadNewQuestion();
            }
        }, 800);
    }

    function endGame(isWin) {
        gameActive = false;
        questionCard.classList.add('hidden');
        gameoverCard.classList.remove('hidden');
        if (isWin) {
            gameoverTitle.textContent = '🎉 Победа!';
            finalScoreText.textContent = `Все страны отгаданы! Счёт: ${score}`;
        } else {
            gameoverTitle.textContent = '💔 Игра окончена';
            finalScoreText.textContent = `Ваш счёт: ${score}`;
        }
        if (ysdk) {
            try {
                ysdk.adv.showFullscreenAdv({
                    callbacks: {
                        onClose: () => console.log('Ad closed'),
                        onError: (e) => console.warn('Ad error:', e)
                    }
                });
            } catch (e) {}
        }
    }

    function winGame() {
        endGame(true);
    }

    function getCountriesForRegion(region) {
        if (region === 'world') {
            const all = [];
            const seen = new Set();
            for (const reg in regionsData) {
                regionsData[reg].forEach(c => {
                    if (!seen.has(c.name)) {
                        seen.add(c.name);
                        all.push(c);
                    }
                });
            }
            return all;
        } else {
            return regionsData[region] || [];
        }
    }

    function startGame(mode) {
        const selectedRegion = regionSelect.value;
        if (!selectedRegion) return;
        currentMode = mode;
        currentRegionCountries = getCountriesForRegion(selectedRegion);
        score = 0;
        lives = 3;
        gameActive = true;
        remainingQuestions = [...Array(currentRegionCountries.length).keys()];
        for (let i = remainingQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [remainingQuestions[i], remainingQuestions[j]] = [remainingQuestions[j], remainingQuestions[i]];
        }
        currentQuestionIndex = 0;
        questionCard.classList.remove('hidden');
        gameoverCard.classList.add('hidden');
        updateUI();
        loadNewQuestion();
    }

    function goToMenu() {
        gameActive = false;
        gameScreen.classList.add('hidden');
        menuScreen.classList.remove('hidden');
        questionCard.classList.remove('hidden');
        gameoverCard.classList.add('hidden');
    }

    modeButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const mode = btn.dataset.mode;
            menuScreen.classList.add('hidden');
            gameScreen.classList.remove('hidden');
            startGame(mode);
        });
        btn.addEventListener('touchend', (e) => {
            e.preventDefault();
            const mode = btn.dataset.mode;
            menuScreen.classList.add('hidden');
            gameScreen.classList.remove('hidden');
            startGame(mode);
        });
    });

    inGameMenuBtn.addEventListener('click', goToMenu);
    inGameMenuBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        goToMenu();
    });

    playAgainBtn.addEventListener('click', () => {
        if (currentMode) startGame(currentMode);
    });
    playAgainBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        if (currentMode) startGame(currentMode);
    });

    toMenuBtn.addEventListener('click', goToMenu);
    toMenuBtn.addEventListener('touchend', (e) => {
        e.preventDefault();
        goToMenu();
    });

    initYandexSDK();
})();