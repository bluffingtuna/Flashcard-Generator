module.exports = ClozeCard;

function ClozeCard(text, cloze) {
    this.fullText = text;
    this.cloze = cloze;
    clozeArray = cloze.split(" ");
    for (i = 0, n = clozeArray.length; i < n; i++) {
        if (text.indexOf(clozeArray[i]) == -1) {
            throw error;
        }
    }
    this.partial = text.replace(cloze, "...");
};


