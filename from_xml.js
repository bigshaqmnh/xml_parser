const [input] = document.getElementsByClassName('data-input');
const [button] = document.getElementsByClassName('convert-btn');

const convertFromXML = data => {
    if (!data || !data.length) {
        return;
    }

    const splitIntoLines = data.split('\n');

    return splitIntoLines.map(line => {
        const tag = line.slice(line.indexOf('<') + 1, line.indexOf('>'));
        const value = line.slice(line.indexOf('>') + 1, line.lastIndexOf('<'));

        return `${tag}=${value}` + '\n';
    }).join('');
}

button.addEventListener('click', ({target}) => {
    if (target.innerHTML === 'Convert') {
        const data = input.value;

        const convertedData = convertFromXML(data);

        if (convertedData && convertedData.length) {
            input.value = convertedData;
            input.setAttribute('disabled', true);
            button.innerHTML = 'Reset';
        }

        return;
    }

    if (target.innerHTML === 'Reset') {
        input.value = '';
        input.removeAttribute('disabled');
        button.innerHTML = 'Convert';

        return;
    }
});

window.addEventListener = ('unload', () => input.value = '');

