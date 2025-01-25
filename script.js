const guessButton = document.getElementById('guessButton');
const result = document.getElementById('result');

guessButton.addEventListener('click', async () => {
    const input = document.getElementById('movieInput').value;

    if (!input) {
        result.textContent = 'Please enter a description!';
        return;
    }

    try {
        const response = await fetch('http://localhost:5000/guess-movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ description: input }),
        });

        const data = await response.json();

        if (data.movie) {
            result.textContent = `Hmm... is it "${data.movie}"? 🎬`;
        } else {
            result.textContent = 'No movie found!';
        }
    } catch (error) {
        result.textContent = 'Something went wrong!';
    }
});

