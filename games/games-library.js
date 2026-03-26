<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes">
    <title>GAME_NAME | Phonics Game</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: linear-gradient(135deg, #667eea, #764ba2);
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2rem;
        }
        .game-container {
            background: white;
            border-radius: 2rem;
            max-width: 900px;
            width: 100%;
            padding: 2rem;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        h1 {
            color: #2c3e50;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 15px;
        }
        .game-content {
            margin: 2rem 0;
        }
        button {
            background: #f39c12;
            border: none;
            padding: 12px 24px;
            border-radius: 40px;
            font-size: 1.2rem;
            font-weight: bold;
            cursor: pointer;
            margin: 10px;
            transition: 0.2s;
        }
        button:hover {
            background: #e67e22;
            color: white;
        }
        .back-link {
            display: inline-block;
            margin-top: 20px;
            background: #2c3e50;
            color: white;
            padding: 8px 20px;
            border-radius: 40px;
            text-decoration: none;
        }
        .feedback {
            margin-top: 20px;
            font-size: 1.2rem;
            font-weight: bold;
        }
    </style>
</head>
<body>
<div class="game-container">
    <h1><i class="fas GAME_ICON"></i> GAME_NAME</h1>
    <p style="color:#7f8c8d;">GAME_DESCRIPTION</p>
    <div class="game-content" id="gameContent">
        <!-- هنا يمكنك وضع منطق اللعبة المخصص -->
        <div style="background:#fef5e7; padding:2rem; border-radius:30px;">
            <p>✨ هذه هي لعبة <strong>GAME_NAME</strong> ✨</p>
            <p>يمكنك الآن بناء منطق اللعبة الخاص هنا.</p>
            <button onclick="alert('سيتم إضافة اللعبة قريباً!')">ابدأ اللعب</button>
        </div>
    </div>
    <div class="feedback" id="feedback"></div>
    <a href="../index.html" class="back-link"><i class="fas fa-home"></i> العودة للبوابة الرئيسية</a>
</div>

<script>
    // يمكنك كتابة منطق اللعبة الخاص هنا
    function speakText(text) {
        if(window.speechSynthesis){
            window.speechSynthesis.cancel();
            const utter = new SpeechSynthesisUtterance(text);
            utter.lang = 'en-US';
            utter.rate = 0.85;
            window.speechSynthesis.speak(utter);
        }
    }
</script>
</body>
</html>
