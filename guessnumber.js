<!DOCTYPE html>
<html>
<head>
    <title>Guess the Number Game</title>
</head>
<body>
    <h1>Guess the Number Game</h1>
    <p>Try to guess the number between 1 and 100.</p>
    <input type="text" id="guessField" class="guessField">
    <input type="submit" value="Submit guess" class="guessSubmit">
    <p class="message"></p>

    <script>
        // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // Track the number of attempts
        let attempts = 0;

        // Function to handle the player's guess
        function checkGuess() {
            const guess = parseInt(document.getElementById('guessField').value);
            const message = document.querySelector('.message');

            if (isNaN(guess) || guess < 1 || guess > 100) {
                message.textContent = 'Please enter a valid number between 1 and 100.';
                return;
            }

            attempts++;

            if (guess === randomNumber) {
                message.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
                document.getElementById('guessField').setAttribute('disabled', 'true');
                document.querySelector('.guessSubmit').setAttribute('disabled', 'true');
            } else if (guess < randomNumber) {
                message.textContent = 'Try a higher number.';
            } else {
                message.textContent = 'Try a lower number.';
            }
        }

        // Event listener for the guess submission
        document.querySelector('.guessSubmit').addEventListener('click', checkGuess);
    </script>
</body>
</html>
