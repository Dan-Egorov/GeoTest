(function() {
            // Яндекс SDK
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

            const countries = [
            //In A
                { flag: '🇦🇩', name: 'Андорра', capital: 'Андорра-ла-Велья' },
                { flag: '🇦🇫', name: 'Афганистан', capital: 'Кабул' },
                { flag: '🇦🇱', name: 'Албания', capital: 'Тирана' },
                { flag: '🇦🇲', name: 'Армения', capital: 'Ереван' },
                { flag: '🇦🇴', name: 'Ангола', capital: 'Луанда' },
                { flag: '🇦🇹', name: 'Австрия', capital: 'Вена' },
                { flag: '🇦🇿', name: 'Азербайджан', capital: 'Баку' },
                // in Б
                { flag: '🇧🇦', name: 'Босния и Герцеговина', capital: 'Сараево' },
                { flag: '🇧🇩', name: 'Бангладеш', capital: 'Дакка' },

                // in В
                { flag: '🇭🇺', name: 'Венгрия', capital: 'Будапешт' },
                { flag: '🇬🇧', name: 'Великобритания', capital: 'Лондон' },

                // in Г
                { flag: '🇬🇪', name: 'Грузия', capital: 'Тбилиси' },
                { flag: '🇬🇷', name: 'Греция', capital: 'Афины' },

                // in Д
                { flag: '🇨🇩', name: 'Демократическая Республика Конго', capital: 'Киншаса' },
                { flag: '🇩🇰', name: 'Дания', capital: 'Копенгаген' },

                // in Е
                { flag: '🇪🇬', name: 'Египет', capital: 'Каир' },
                { flag: '🇪🇺', name: 'Европейский союз', capital: 'Брюссель' },

                // in З
                { flag: '🇿🇼', name: 'Зимбабве', capital: 'Хараре' },
                { flag: '🇿🇲', name: 'Замбия', capital: 'Лусака' },

                // in И
                { flag: '🇪🇸', name: 'Испания', capital: 'Мадрид' },
                { flag: '🇮🇩', name: 'Индонезия', capital: 'Джакарта' },

                // in Й
                { flag: '🇾🇪', name: 'Йемен', capital: 'Сана' },

                // in К
                { flag: '🇨🇺', name: 'Куба', capital: 'Гавана' },
                { flag: '🇨🇾', name: 'Кипр', capital: 'Никосия' },

                // in Л
                { flag: '🇱🇦', name: 'Лаос', capital: 'Вьентьян' },
                { flag: '🇱🇧', name: 'Ливан', capital: 'Бейрут' },

                // in М
                { flag: '🇲🇦', name: 'Марокко', capital: 'Рабат' },
                { flag: '🇲🇷', name: 'Мавритания', capital: 'Нуакшот' },

                // in Н
                { flag: '🇳🇦', name: 'Намибия', capital: 'Виндхук' },
                { flag: '🇳🇬', name: 'Нигерия', capital: 'Абуджа' },

                // in О
                { flag: '🇦🇪', name: 'Объединенные Арабские Эмираты', capital: 'Абу-Даби' },
                { flag: '🇴🇲', name: 'Оман', capital: 'Маскат' },

                // in П
                { flag: '🇵🇦', name: 'Панама', capital: 'Панама' },
                { flag: '🇵🇪', name: 'Перу', capital: 'Лима' },

                // in Р
                { flag: '🇷🇴', name: 'Румыния', capital: 'Бухарест' },
                { flag: '🇷🇺', name: 'Россия', capital: 'Москва' },
            ];

            const countries_eu = [
            //In A
                { flag: '🇦🇩', name: 'Андорра', capital: 'Андорра-ла-Велья' },
                { flag: '🇦🇲', name: 'Армения', capital: 'Ереван' },
                { flag: '🇦🇹', name: 'Австрия', capital: 'Вена' },

                // in Б
                { flag: '🇧🇦', name: 'Босния и Герцеговина', capital: 'Сараево' },

                // in В
                { flag: '🇭🇺', name: 'Венгрия', capital: 'Будапешт' },
                { flag: '🇬🇧', name: 'Великобритания', capital: 'Лондон' },

                // in Г
                { flag: '🇬🇪', name: 'Грузия', capital: 'Тбилиси' },
                { flag: '🇬🇷', name: 'Греция', capital: 'Афины' },

                // in Д
                { flag: '🇩🇰', name: 'Дания', capital: 'Копенгаген' },

                // in Е
                { flag: '🇪🇺', name: 'Европейский союз', capital: 'Брюссель' },

                // in З

                // in И
                { flag: '🇪🇸', name: 'Испания', capital: 'Мадрид' },

                // in Й

                // in К
                { flag: '🇨🇾', name: 'Кипр', capital: 'Никосия' },

                // in Л

                // in М

                // in Н

                // in О

                // in П

                // in Р
                { flag: '🇷🇴', name: 'Румыния', capital: 'Бухарест' },
                { flag: '🇷🇺', name: 'Россия', capital: 'Москва' },
            ];

            const countries_as = [
            //In A
                { flag: '🇦🇫', name: 'Афганистан', capital: 'Кабул' },
                { flag: '🇦🇲', name: 'Армения', capital: 'Ереван' },
                { flag: '🇦🇿', name: 'Азербайджан', capital: 'Баку' },

                // in Б
                { flag: '🇧🇩', name: 'Бангладеш', capital: 'Дакка' },

                // in В

                // in Г
                { flag: '🇬🇪', name: 'Грузия', capital: 'Тбилиси' },

                // in Д

                // in Е
                { flag: '🇪🇬', name: 'Египет', capital: 'Каир' },

                // in З

                // in И
                { flag: '🇮🇩', name: 'Индонезия', capital: 'Джакарта' },

                // in Й
                { flag: '🇾🇪', name: 'Йемен', capital: 'Сана' },

                // in К
                { flag: '🇨🇾', name: 'Кипр', capital: 'Никосия' },

                // in Л
                { flag: '🇱🇦', name: 'Лаос', capital: 'Вьентьян' },
                { flag: '🇱🇧', name: 'Ливан', capital: 'Бейрут' },

                // in М

                // in Н

                // in О
                { flag: '🇦🇪', name: 'Объединенные Арабские Эмираты', capital: 'Абу-Даби' },
                { flag: '🇴🇲', name: 'Оман', capital: 'Маскат' },

                // in П

                // in Р
                { flag: '🇷🇺', name: 'Россия', capital: 'Москва' },
            ];

            // Элементы
            const menuScreen = document.getElementById('menu-screen');
            const gameScreen = document.getElementById('game-screen');
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
            const menuButtons = document.querySelectorAll('.menu-btn');

            let currentMode = null;
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
                const total = countries.length;
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
                const country = countries[countryIndex];
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
                        options = getRandomOptions(correctValue, countries.map(c => c.name));
                        break;
                    case 'country-to-capital':
                        emojiDisplay = '';
                        questionText = `Столица страны: ${country.name}`;
                        correctValue = country.capital;
                        options = getRandomOptions(correctValue, countries.map(c => c.capital));
                        break;
                    case 'country-to-flag':
                        emojiDisplay = '';
                        questionText = `Флаг страны: ${country.name}`;
                        correctValue = country.flag;
                        options = getRandomOptions(correctValue, countries.map(c => c.flag));
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

            function startGame(mode) {
                currentMode = mode;
                score = 0;
                lives = 3;
                gameActive = true;
                remainingQuestions = [...Array(countries.length).keys()];
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

            menuButtons.forEach(btn => {
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

            // Выход в меню во время игры
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