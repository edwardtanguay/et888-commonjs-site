/**
* TURN A STRING INTO A COMPLETE SENTENCE
*
* qstr.sentencize("this is a test");
*
* "This is a test."
*/
export const sentencize = (text) => {
	return text.charAt(0).toUpperCase() + text.slice(1) + '.';
}

/**
* REPLACE ALL OCCURANCES IN A STRING:
*
* qstr.replaceAll("This is a tost.", "o", "e");
*
* "This is a test."
*/
export const replaceAll = (text, search, replace) => {
    return text.split(search).join(replace);
};

