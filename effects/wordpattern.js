import { wordList, letterShapes } from './wordlist.js';

class WordPatternEffect {
    constructor(container) {
        this.container = container;
        this.currentInput = '';
        this.setupUI();
    }

    setupUI() {
        // Create the main container
        const effectContainer = document.createElement('div');
        effectContainer.className = 'word-pattern-container';
        
        // Create the input display
        const inputDisplay = document.createElement('div');
        inputDisplay.className = 'input-display';
        inputDisplay.id = 'word-pattern-display';
        inputDisplay.textContent = '____';
        
        // Create the numpad
        const numpad = document.createElement('div');
        numpad.className = 'numpad';
        numpad.id = 'word-pattern-numpad';
        
        // Add numpad buttons
        for (let i = 1; i <= 9; i++) {
            const button = document.createElement('button');
            button.textContent = i;
            numpad.appendChild(button);
        }
        const zeroButton = document.createElement('button');
        zeroButton.textContent = '0';
        numpad.appendChild(zeroButton);
        
        // Create control buttons
        const controlButtons = document.createElement('div');
        controlButtons.className = 'control-buttons';
        
        const clearBtn = document.createElement('button');
        clearBtn.className = 'clear-btn';
        clearBtn.textContent = 'Clear';
        clearBtn.id = 'word-pattern-clear';
        
        const submitBtn = document.createElement('button');
        submitBtn.className = 'submit-btn';
        submitBtn.textContent = 'Submit';
        submitBtn.id = 'word-pattern-submit';
        submitBtn.disabled = true;
        
        controlButtons.appendChild(clearBtn);
        controlButtons.appendChild(submitBtn);
        
        // Create results container
        const results = document.createElement('div');
        results.className = 'results';
        results.id = 'word-pattern-results';
        results.style.display = 'none';
        
        const resultsTitle = document.createElement('h2');
        resultsTitle.textContent = 'Matching Words:';
        
        const wordList = document.createElement('div');
        wordList.className = 'word-list';
        wordList.id = 'word-pattern-list';
        
        const restartBtn = document.createElement('button');
        restartBtn.className = 'restart-btn';
        restartBtn.textContent = 'Start Over';
        restartBtn.id = 'word-pattern-restart';
        restartBtn.style.display = 'none';
        
        results.appendChild(resultsTitle);
        results.appendChild(wordList);
        results.appendChild(restartBtn);
        
        // Assemble everything
        effectContainer.appendChild(inputDisplay);
        effectContainer.appendChild(numpad);
        effectContainer.appendChild(controlButtons);
        effectContainer.appendChild(results);
        
        // Add to main container
        this.container.appendChild(effectContainer);
        
        // Add event listeners
        this.setupEventListeners();
    }

    setupEventListeners() {
        const numpad = document.getElementById('word-pattern-numpad');
        const clearBtn = document.getElementById('word-pattern-clear');
        const submitBtn = document.getElementById('word-pattern-submit');
        const restartBtn = document.getElementById('word-pattern-restart');
        
        numpad.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON' && this.currentInput.length < 4) {
                this.currentInput += e.target.textContent;
                this.updateDisplay();
                if (this.currentInput.length === 4) {
                    submitBtn.disabled = false;
                }
            }
        });
        
        clearBtn.addEventListener('click', () => {
            this.currentInput = '';
            this.updateDisplay();
            submitBtn.disabled = true;
        });
        
        submitBtn.addEventListener('click', () => {
            if (this.currentInput.length === 4) {
                const [length, firstVowel, secondVowel, shape] = this.currentInput.split('').map(Number);
                const matchingWords = this.findMatchingWords(length, firstVowel, secondVowel, shape);
                this.displayResults(matchingWords);
            }
        });
        
        restartBtn.addEventListener('click', () => {
            this.currentInput = '';
            this.updateDisplay();
            submitBtn.disabled = true;
            document.getElementById('word-pattern-results').style.display = 'none';
            restartBtn.style.display = 'none';
            document.getElementById('word-pattern-numpad').style.display = 'grid';
        });
    }

    updateDisplay() {
        const display = this.currentInput.padEnd(4, '_');
        document.getElementById('word-pattern-display').textContent = display;
    }

    findMatchingWords(length, firstVowel, secondVowel, shape) {
        return wordList.filter(word => {
            // Check word length
            if (word.word.length !== length) return false;

            // Check first vowel position
            if (word.vowels[0] !== firstVowel) return false;

            // Check second vowel position if it exists
            if (secondVowel > 0 && (!word.vowels[1] || word.vowels[1] !== secondVowel)) return false;

            // Check first letter shape
            const firstLetter = word.word[0].toUpperCase();
            const shapeCategory = Object.entries(letterShapes).find(([_, letters]) => 
                letters.includes(firstLetter)
            );
            if (!shapeCategory || Number(shapeCategory[0]) !== shape) return false;

            return true;
        });
    }

    displayResults(matchingWords) {
        const wordListElement = document.getElementById('word-pattern-list');
        wordListElement.innerHTML = '';
        
        matchingWords.forEach(word => {
            const div = document.createElement('div');
            div.className = 'word-item';
            
            // Add Billet effect container
            const billetContainer = document.createElement('div');
            billetContainer.className = 'billet-container';
            
            // Add Billet effect
            const billetEffect = document.createElement('div');
            billetEffect.className = 'billet-effect';
            
            // Add word text
            const wordText = document.createElement('span');
            wordText.textContent = word.word;
            
            // Assemble the elements
            billetContainer.appendChild(billetEffect);
            billetContainer.appendChild(wordText);
            div.appendChild(billetContainer);
            
            wordListElement.appendChild(div);
        });

        document.getElementById('word-pattern-numpad').style.display = 'none';
        document.getElementById('word-pattern-results').style.display = 'block';
        document.getElementById('word-pattern-restart').style.display = 'block';
    }
}

export default WordPatternEffect; 