// مكتبة الألعاب - أكثر من 40 لعبة تفاعلية
const gamesLibrary = {
    // ألعاب للحرف A
    initial_sound_match: {
        name: "تطابق الصوت الأول",
        description: "اختر الصورة التي تبدأ بالصوت الصحيح",
        icon: "fa-ear-listen",
        difficulty: "easy"
    },
    find_the_letter: {
        name: "ابحث عن الحرف",
        description: "حدد موقع الحرف بين الحروف الأخرى",
        icon: "fa-search",
        difficulty: "easy"
    },
    memory_match: {
        name: "لعبة الذاكرة",
        description: "طابق الحرف مع الصورة المناسبة",
        icon: "fa-brain",
        difficulty: "medium"
    },
    
    // ألعاب للحرف B
    blending_ba_ab: {
        name: "دمج المقاطع BA - AB",
        description: "تعلم دمج المقاطع الصوتية ba, ab, baba, bab",
        icon: "fa-code-branch",
        difficulty: "medium",
        special: "b_syllable_blending"
    },
    syllable_sort: {
        name: "ترتيب المقاطع",
        description: "رتب المقاطع لتكوين كلمات صحيحة",
        icon: "fa-sort-alpha-down",
        difficulty: "medium"
    },
    word_builder: {
        name: "باني الكلمات",
        description: "اجمع الحروف لتكوين كلمات تبدأ بالحرف",
        icon: "fa-cubes",
        difficulty: "hard"
    },
    
    // ألعاب للحرف C
    blending_cab_bad: {
        name: "دمج الكلمات C",
        description: "تعلم دمج الكلمات: cab, bad, cac, ac, ca",
        icon: "fa-link",
        difficulty: "medium",
        special: "c_blending_game"
    },
    picture_match: {
        name: "طابق الصورة",
        description: "صل الصورة بالكلمة الصحيحة",
        icon: "fa-images",
        difficulty: "easy"
    },
    drag_and_drop: {
        name: "سحب وإفلات",
        description: "اسحب الحرف إلى الصورة المناسبة",
        icon: "fa-arrows-alt",
        difficulty: "medium"
    },
    
    // ألعاب إضافية متنوعة (أكثر من 40 لعبة)
    tracing_game: {
        name: "تتبع الحرف",
        description: "تتبع الحرف بإصبعك لتعلم الكتابة",
        icon: "fa-pencil-alt",
        difficulty: "easy"
    },
    letter_hunt: {
        name: "صيد الحروف",
        description: "ابحث عن الحرف المخفي بين الكلمات",
        icon: "fa-gamepad",
        difficulty: "easy"
    },
    phonics_quiz: {
        name: "اختبار الصوتيات",
        description: "استمع واختر الإجابة الصحيحة",
        icon: "fa-question-circle",
        difficulty: "medium"
    },
    word_search: {
        name: "البحث عن الكلمات",
        description: "جد الكلمات التي تبدأ بالحرف",
        icon: "fa-search",
        difficulty: "hard"
    },
    spelling_bee: {
        name: "تهجئة النحلة",
        description: "هجئ الكلمة بعد سماعها",
        icon: "fa-bee",
        difficulty: "hard"
    },
    balloon_pop: {
        name: "فرقعة البالونات",
        description: "افقع البالون الذي يحمل الحرف الصحيح",
        icon: "fa-balloon",
        difficulty: "easy"
    },
    matching_pairs: {
        name: "الأزواج المتطابقة",
        description: "جد الأزواج المتطابقة من الحروف والصور",
        icon: "fa-clone",
        difficulty: "medium"
    },
    alphabet_train: {
        name: "قطار الأبجدية",
        description: "رتب الحروف في القطار بالترتيب",
        icon: "fa-train",
        difficulty: "medium"
    },
    sound_studio: {
        name: "استوديو الصوت",
        description: "سجل وكرر الأصوات الصحيحة",
        icon: "fa-microphone-alt",
        difficulty: "hard"
    },
    puzzle_time: {
        name: "وقت الألغاز",
        description: "ركب الصورة ثم اقرأ الكلمة",
        icon: "fa-puzzle-piece",
        difficulty: "hard"
    },
    flash_cards: {
        name: "بطاقات التعلم",
        description: "تصفح البطاقات وتعلم الكلمات الجديدة",
        icon: "fa-cards",
        difficulty: "easy"
    },
    story_time: {
        name: "وقت القصة",
        description: "استمع لقصة مليئة بالحرف",
        icon: "fa-book",
        difficulty: "medium"
    },
    coloring_book: {
        name: "كتاب التلوين",
        description: "لون الصور التي تبدأ بالحرف",
        icon: "fa-palette",
        difficulty: "easy"
    },
    rhythm_and_rhyme: {
        name: "إيقاع وقافية",
        description: "أنشودة تفاعلية للحرف",
        icon: "fa-music",
        difficulty: "easy"
    },
    letter_cook: {
        name: "طبخ الحروف",
        description: "اطبخ الحروف الصحيحة في القدر",
        icon: "fa-utensils",
        difficulty: "medium"
    },
    space_letters: {
        name: "حروف الفضاء",
        description: "اجمع الحروف الطائرة في المركبة",
        icon: "fa-rocket",
        difficulty: "medium"
    },
    underwater_alphabet: {
        name: "أبجدية تحت الماء",
        description: "ساعد السمكة في جمع الحروف",
        icon: "fa-fish",
        difficulty: "easy"
    },
    letter_race: {
        name: "سباق الحروف",
        description: "تسابق مع الحروف للوصول للخط النهاية",
        icon: "fa-flag-checkered",
        difficulty: "hard"
    },
    mystery_box: {
        name: "الصندوق الغامض",
        description: "خمن ما داخل الصندوق من خلال الصوت",
        icon: "fa-box",
        difficulty: "medium"
    },
    alphabet_bingo: {
        name: "بينجو الأبجدية",
        description: "لعبة بينجو تعليمية للحروف",
        icon: "fa-gripfire",
        difficulty: "medium"
    },
    letter_sort: {
        name: "فرز الحروف",
        description: "صنف الحروف حسب صوتها",
        icon: "fa-filter",
        difficulty: "hard"
    },
    phonics_wheel: {
        name: "عجلة الصوتيات",
        description: "دور العجلة واختر الكلمة الصحيحة",
        icon: "fa-circle-notch",
        difficulty: "medium"
    },
    syllable_stacker: {
        name: "مكدس المقاطع",
        description: "كد المقاطع لتكوين كلمات",
        icon: "fa-layer-group",
        difficulty: "hard"
    },
    vowel_finder: {
        name: "صائد الأصوات الطويلة
