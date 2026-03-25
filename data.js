// بيانات الحروف الـ 26 مع الكلمات والصور من الإنترنت
const lettersData = {
    A: {
        name: "A",
        sound: "æ",
        words: [
            { word: "Apple", img: "https://cdn.pixabay.com/photo/2020/05/23/16/22/apple-5210665_640.jpg" },
            { word: "Ant", img: "https://cdn.pixabay.com/photo/2016/04/19/18/01/ant-1339560_640.jpg" },
            { word: "Alligator", img: "https://cdn.pixabay.com/photo/2016/03/04/19/36/alligator-1236333_640.jpg" },
            { word: "Airplane", img: "https://cdn.pixabay.com/photo/2016/11/29/06/52/airplane-1868029_640.jpg" }
        ],
        games: ["initial_sound_match", "find_the_letter", "memory_match"]
    },
    B: {
        name: "B",
        sound: "b",
        words: [
            { word: "Ball", img: "https://cdn.pixabay.com/photo/2012/04/26/21/27/ball-43370_640.png" },
            { word: "Banana", img: "https://cdn.pixabay.com/photo/2017/07/10/23/45/bananas-2491881_640.jpg" },
            { word: "Bear", img: "https://cdn.pixabay.com/photo/2020/07/03/17/57/bear-5366449_640.jpg" },
            { word: "Butterfly", img: "https://cdn.pixabay.com/photo/2016/03/27/21/58/butterfly-1284088_640.jpg" }
        ],
        games: ["blending_ba_ab", "syllable_sort", "word_builder"]
    },
    C: {
        name: "C",
        sound: "k",
        words: [
            { word: "Cat", img: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg" },
            { word: "Car", img: "https://cdn.pixabay.com/photo/2014/07/31/23/10/car-407178_640.jpg" },
            { word: "Cow", img: "https://cdn.pixabay.com/photo/2019/07/18/17/20/cow-4346793_640.jpg" },
            { word: "Cake", img: "https://cdn.pixabay.com/photo/2019/10/02/19/41/cake-4521589_640.jpg" }
        ],
        games: ["blending_cab_bad", "picture_match", "drag_and_drop"]
    },
    D: {
        name: "D",
        sound: "d",
        words: [
            { word: "Dog", img: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_640.jpg" },
            { word: "Duck", img: "https://cdn.pixabay.com/photo/2017/08/27/16/46/duck-2687207_640.jpg" },
            { word: "Dolphin", img: "https://cdn.pixabay.com/photo/2016/07/15/16/18/dolphin-1519330_640.jpg" }
        ],
        games: ["initial_sound_match", "tracing_game"]
    },
    E: {
        name: "E",
        sound: "ɛ",
        words: [
            { word: "Egg", img: "https://cdn.pixabay.com/photo/2015/09/17/08/31/egg-944057_640.jpg" },
            { word: "Elephant", img: "https://cdn.pixabay.com/photo/2016/11/14/04/13/elephant-1822636_640.jpg" },
            { word: "Eagle", img: "https://cdn.pixabay.com/photo/2020/05/02/20/09/eagle-5121560_640.jpg" }
        ],
        games: ["find_the_letter", "memory_match"]
    },
    F: {
        name: "F",
        sound: "f",
        words: [
            { word: "Fish", img: "https://cdn.pixabay.com/photo/2016/02/19/11/20/fish-1210060_640.jpg" },
            { word: "Frog", img: "https://cdn.pixabay.com/photo/2018/08/20/21/23/frog-3619149_640.jpg" },
            { word: "Flower", img: "https://cdn.pixabay.com/photo/2015/05/07/15/01/flower-756714_640.jpg" }
        ],
        games: ["initial_sound_match", "word_builder"]
    },
    G: {
        name: "G",
        sound: "g",
        words: [
            { word: "Goat", img: "https://cdn.pixabay.com/photo/2018/07/10/20/48/goat-3530045_640.jpg" },
            { word: "Giraffe", img: "https://cdn.pixabay.com/photo/2017/02/07/16/47/giraffe-2046240_640.jpg" },
            { word: "Grapes", img: "https://cdn.pixabay.com/photo/2017/07/05/14/23/grapes-2474897_640.jpg" }
        ],
        games: ["syllable_sort", "picture_match"]
    },
    H: {
        name: "H",
        sound: "h",
        words: [
            { word: "House", img: "https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_640.jpg" },
            { word: "Horse", img: "https://cdn.pixabay.com/photo/2016/09/17/12/57/horse-1676215_640.jpg" },
            { word: "Hat", img: "https://cdn.pixabay.com/photo/2017/01/19/21/06/hat-1993423_640.jpg" }
        ],
        games: ["initial_sound_match", "drag_and_drop"]
    },
    I: {
        name: "I",
        sound: "ɪ",
        words: [
            { word: "Igloo", img: "https://cdn.pixabay.com/photo/2016/11/29/06/20/igloo-1867924_640.jpg" },
            { word: "Insect", img: "https://cdn.pixabay.com/photo/2018/03/04/15/27/insect-3197442_640.jpg" },
            { word: "Ice Cream", img: "https://cdn.pixabay.com/photo/2017/07/28/14/29/ice-cream-2548840_640.jpg" }
        ],
        games: ["find_the_letter", "memory_match"]
    },
    J: {
        name: "J",
        sound: "dʒ",
        words: [
            { word: "Jellyfish", img: "https://cdn.pixabay.com/photo/2019/06/17/10/26/jellyfish-4280086_640.jpg" },
            { word: "Jacket", img: "https://cdn.pixabay.com/photo/2017/08/07/21/21/jacket-2606409_640.jpg" },
            { word: "Juice", img: "https://cdn.pixabay.com/photo/2017/09/20/17/55/juice-2769343_640.jpg" }
        ],
        games: ["initial_sound_match", "word_builder"]
    },
    K: {
        name: "K",
        sound: "k",
        words: [
            { word: "Kite", img: "https://cdn.pixabay.com/photo/2013/07/13/12/07/kite-159218_640.png" },
            { word: "Kangaroo", img: "https://cdn.pixabay.com/photo/2018/05/27/20/20/kangaroo-3434465_640.jpg" },
            { word: "Key", img: "https://cdn.pixabay.com/photo/2014/04/03/10/03/key-309624_640.png" }
        ],
        games: ["syllable_sort", "picture_match"]
    },
    L: {
        name: "L",
        sound: "l",
        words: [
            { word: "Lion", img: "https://cdn.pixabay.com/photo/2017/08/30/12/45/lion-2697070_640.jpg" },
            { word: "Leaf", img: "https://cdn.pixabay.com/photo/2015/09/09/20/22/leaf-932696_640.jpg" },
            { word: "Ladybug", img: "https://cdn.pixabay.com/photo/2016/03/27/20/07/ladybug-1283841_640.jpg" }
        ],
        games: ["initial_sound_match", "drag_and_drop"]
    },
    M: {
        name: "M",
        sound: "m",
        words: [
            { word: "Monkey", img: "https://cdn.pixabay.com/photo/2016/11/29/03/53/monkey-1867268_640.jpg" },
            { word: "Moon", img: "https://cdn.pixabay.com/photo/2017/08/30/01/05/moon-2698362_640.jpg" },
            { word: "Milk", img: "https://cdn.pixabay.com/photo/2016/12/06/18/27/milk-1887389_640.jpg" }
        ],
        games: ["find_the_letter", "memory_match"]
    },
    N: {
        name: "N",
        sound: "n",
        words: [
            { word: "Nest", img: "https://cdn.pixabay.com/photo/2020/05/12/09/00/nest-5160142_640.jpg" },
            { word: "Nose", img: "https://cdn.pixabay.com/photo/2016/12/26/15/38/nose-1932273_640.jpg" },
            { word: "Night", img: "https://cdn.pixabay.com/photo/2016/11/22/21/21/night-1850083_640.jpg" }
        ],
        games: ["initial_sound_match", "word_builder"]
    },
    O: {
        name: "O",
        sound: "ɒ",
        words: [
            { word: "Octopus", img: "https://cdn.pixabay.com/photo/2018/10/05/13/41/octopus-3726312_640.jpg" },
            { word: "Orange", img: "https://cdn.pixabay.com/photo/2017/01/20/15/06/orange-1995056_640.jpg" },
            { word: "Owl", img: "https://cdn.pixabay.com/photo/2018/11/23/15/38/owl-3834249_640.jpg" }
        ],
        games: ["syllable_sort", "picture_match"]
    },
    P: {
        name: "P",
        sound: "p",
        words: [
            { word: "Penguin", img: "https://cdn.pixabay.com/photo/2017/07/05/15/41/penguin-2474606_640.jpg" },
            { word: "Panda", img: "https://cdn.pixabay.com/photo/2018/01/02/15/44/panda-3056207_640.jpg" },
            { word: "Pizza", img: "https://cdn.pixabay.com/photo/2017/12/05/20/10/pizza-3000285_640.jpg" }
        ],
        games: ["initial_sound_match", "drag_and_drop"]
    },
    Q: {
        name: "Q",
        sound: "kw",
        words: [
            { word: "Queen", img: "https://cdn.pixabay.com/photo/2014/09/24/14/30/crown-459344_640.png" },
            { word: "Quail", img: "https://cdn.pixabay.com/photo/2017/02/07/16/47/quail-2046374_640.jpg" },
            { word: "Question", img: "https://cdn.pixabay.com/photo/2014/04/03/11/53/question-mark-311859_640.png" }
        ],
        games: ["find_the_letter", "memory_match"]
    },
    R: {
        name: "R",
        sound: "r",
        words: [
            { word: "Rabbit", img: "https://cdn.pixabay.com/photo/2017/08/07/22/26/rabbit-2607848_640.jpg" },
            { word: "Rainbow", img: "https://cdn.pixabay.com/photo/2015/09/09/20/22/rainbow-932706_640.jpg" },
            { word: "Robot", img: "https://cdn.pixabay.com/photo/2016/03/09/09/33/robot-1245888_640.jpg" }
        ],
        games: ["initial_sound_match", "word_builder"]
    },
    S: {
        name: "S",
        sound: "s",
        words: [
            { word: "Sun", img: "https://cdn.pixabay.com/photo/2016/10/20/18/35/sun-1756274_640.jpg" },
            { word: "Snake", img: "https://cdn.pixabay.com/photo/2016/11/21/17/02/snake-1846889_640.jpg" },
            { word: "Star", img: "https://cdn.pixabay.com/photo/2012/04/26/21/28/star-43390_640.png" }
        ],
        games: ["syllable_sort", "picture_match"]
    },
    T: {
        name: "T",
        sound: "t",
        words: [
            { word: "Tiger", img: "https://cdn.pixabay.com/photo/2018/01/28/12/58/tiger-3113492_640.jpg" },
            { word: "Turtle", img: "https://cdn.pixabay.com/photo/2020/10/04/14/19/turtle-5627092_640.jpg" },
            { word: "Tree", img: "https://cdn.pixabay.com/photo/2015/09/02/12/55/tree-918730_640.jpg" }
        ],
        games: ["initial_sound_match", "drag_and_drop"]
    },
    U: {
        name: "U",
        sound: "ʌ",
        words: [
            { word: "Umbrella", img: "https://cdn.pixabay.com/photo/2017/05/21/22/03/umbrella-2332065_640.jpg" },
            { word: "Unicorn", img: "https://cdn.pixabay.com/photo/2016/09/28/11/41/unicorn-1701003_640.jpg" },
            { word: "Up", img: "https://cdn.pixabay.com/photo/2016/12/13/05/17/up-1903325_640.png" }
        ],
        games: ["find_the_letter", "memory_match"]
    },
    V: {
        name: "V",
        sound: "v",
        words: [
            { word: "Violin", img: "https://cdn.pixabay.com/photo/2018/03/15/14/39/violin-3226958_640.jpg" },
            { word: "Volcano", img: "https://cdn.pixabay.com/photo/2013/07/18/10/55/volcano-163479_640.jpg" },
            { word: "Van", img: "https://cdn.pixabay.com/photo/2014/07/31/23/15/van-407179_640.jpg" }
        ],
        games: ["initial_sound_match", "word_builder"]
    },
    W: {
        name: "W",
        sound: "w",
        words: [
            { word: "Whale", img: "https://cdn.pixabay.com/photo/2017/08/07/22/48/whale-2607905_640.jpg" },
            { word: "Wolf", img: "https://cdn.pixabay.com/photo/2018/05/27/18/33/wolf-3434185_640.jpg" },
            { word: "Watermelon", img: "https://cdn.pixabay.com/photo/2017/07/08/15/44/watermelon-2484379_640.jpg" }
        ],
        games: ["syllable_sort", "picture_match"]
    },
    X: {
        name: "X",
        sound: "ks",
        words: [
            { word: "Xylophone", img: "https://cdn.pixabay.com/photo/2019/05/02/12/27/xylophone-4172728_640.jpg" },
            { word: "X-ray", img: "https://cdn.pixabay.com/photo/2016/02/16/19/02/xray-1202486_640.jpg" },
            { word: "Fox", img: "https://cdn.pixabay.com/photo/2017/07/19/20/33/fox-2520657_640.jpg" }
        ],
        games: ["initial_sound_match", "memory_match"]
    },
    Y: {
        name: "Y",
        sound: "j",
        words: [
            { word: "Yak", img: "https://cdn.pixabay.com/photo/2018/09/25/01/27/yak-3701417_640.jpg" },
            { word: "Yarn", img: "https://cdn.pixabay.com/photo/2017/08/06/12/06/yarn-2592036_640.jpg" },
            { word: "Yellow", img: "https://cdn.pixabay.com/photo/2017/01/15/21/01/sunflower-1982662_640.jpg" }
        ],
        games: ["find_the_letter", "drag_and_drop"]
    },
    Z: {
        name: "Z",
        sound: "z",
        words: [
            { word: "Zebra", img: "https://cdn.pixabay.com/photo/2018/02/26/22/24/zebra-3184390_640.jpg" },
            { word: "Zoo", img: "https://cdn.pixabay.com/photo/2018/06/16/21/15/zoo-3479226_640.jpg" },
            { word: "Zipper", img: "https://cdn.pixabay.com/photo/2017/08/06/09/51/zipper-2589386_640.jpg" }
        ],
        games: ["initial_sound_match", "word_builder"]
    }
};

// الحصول على عدد الألعاب لكل حرف
function getGamesCount(letter) {
    return lettersData[letter]?.games.length || 2;
}
