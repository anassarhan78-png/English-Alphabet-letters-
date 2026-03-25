// script.js - الملف الرئيسي للتحكم في المنصة

// عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // إنشاء شبكة الحروف
    renderLettersGrid();
});

// دالة عرض الحروف الـ 26 في البوابة الرئيسية
function renderLettersGrid() {
    const grid = document.getElementById('lettersGrid');
    if (!grid) return;
    
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
                     'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    
    grid.innerHTML = '';
    
    letters.forEach(letter => {
        const letterData = lettersData[letter];
        if (!letterData) return;
        
        const gamesCount = letterData.games.length;
        
        const card = document.createElement('div');
        card.className = 'letter-card';
        card.setAttribute('data-letter', letter);
        
        card.innerHTML = `
            <div class="games-count">${gamesCount} لعبة</div>
            <h2>${letter}</h2>
            <p>${getLetterSoundText(letter)}</p>
            <i class="fas fa-play-circle" style="font-size: 1.5rem; margin-top: 8px; opacity: 0.8;"></i>
        `;
        
        card.addEventListener('click', () => {
            openLetterPage(letter);
        });
        
        grid.appendChild(card);
    });
}

// دالة للحصول على نص صوت الحرف
function getLetterSoundText(letter) {
    const sounds = {
        'A': 'آ',
        'B': 'ب',
        'C': 'ك',
        'D': 'د',
        'E': 'إ',
        'F': 'ف',
        'G': 'ج',
        'H': 'هـ',
        'I': 'إ',
        'J': 'ج',
        'K': 'ك',
        'L': 'ل',
        'M': 'م',
        'N': 'ن',
        'O': 'أو',
        'P': 'ب',
        'Q': 'ك',
        'R': 'ر',
        'S': 'س',
        'T': 'ت',
        'U': 'أ',
        'V': 'ف',
        'W': 'و',
        'X': 'إكس',
        'Y': 'ي',
        'Z': 'ز'
    };
    return sounds[letter] || letter;
}

// دالة فتح صفحة الحرف
function openLetterPage(letter) {
    // حفظ الحرف المختار في localStorage
    localStorage.setItem('selectedLetter', letter);
    // الانتقال إلى صفحة الحرف
    window.location.href = `letter.html?letter=${letter}`;
}

// دالة نطق النص (للاستخدام في صفحات الحروف)
function speakText(text, rate = 0.9) {
    if (!window.speechSynthesis) {
        console.warn("متصفحك لا يدعم النطق");
        return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
}

// دالة الحصول على بيانات الحرف من الرابط
function getCurrentLetter() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('letter') || localStorage.getItem('selectedLetter') || 'A';
}
