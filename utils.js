export const convertToXML = data => {
    if (!data || !data.length) {
        return;
    }

    const splitIntoLines = data.split('\n');

    return splitIntoLines.map(line => {
        const [tag, value] = line.split('=');

        return `<${tag}>${value}<${tag}/>` + '\n';
    });
}