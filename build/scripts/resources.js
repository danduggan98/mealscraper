"use strict";
//
// Useful constants and file names for use around the app
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortByProperties = exports.RemoveHtmlTags = exports.DATA_FILES = exports.IGNORED_WORDS = exports.VALID_SEPERATORS = void 0;
//List of symbols which are allowed to seperate search terms
const VALID_SEPERATORS = [
    ' ', '-', '/', ',', '+', '&'
];
exports.VALID_SEPERATORS = VALID_SEPERATORS;
//Alphabetical list of words to skip over when indexing the database or parsing search terms
const IGNORED_WORDS = [
    'a', 'about', 'addition', 'additional', 'after', 'all', 'and', 'approximate', 'approximately', 'as', 'at', 'because', 'been', 'before', 'better', 'best', 'big', 'boil', 'boiling',
    'bold', 'bought', 'but', 'buy', 'by', 'can', 'chop', 'chopped', 'clean', 'cleaned', 'cup', 'cups', 'cut', 'dice', 'diced', 'dirty', 'don', 'dry', 'el', 'even', 'evenly', 'ever',
    'every', 'exact', 'exactly', 'f', 'fine', 'finely', 'follow', 'follows', 'for', 'from', 'gallon', 'gallons', 'huge', 'hard', 'i', 'ideal', 'ideally', 'if', 'in', 'inch', 'inches',
    'instead', 'into', 'it', 'just', 'kind', 'la', 'large', 'largest', 'least', 'll', 'liter', 'liters', 'made', 'main', 'median', 'medium', 'mine', 'mix', 'more', 'most', 'my', 'n',
    'need', 'needed', 'necessary', 'not', 'o', 'of', 'on', 'only', 'once', 'or', 'ounce', 'ounces', 'our', 'over', 'perfect', 'perfectly', 'plus', 'prefer', 'preferably', 'quart',
    'quarts', 'recipe', 'recipes', 'recommended', 'remove', 'ripe', 'room', 'round', 's', 'see', 'self', 'since', 'small', 'soon', 'store', 't', 'table', 'tablespoon', 'tablespoons',
    'teach', 'teaspoon', 'teaspoons', 'temperature', 'the', 'their', 'thick', 'to', 'type', 'under', 'until', 'very', 'we', 'wet', 'with', 'when', 'won', 'you', 'your'
];
exports.IGNORED_WORDS = IGNORED_WORDS;
//List of all files
const DATA_FILES = [
    {
        filePath: 'data/FoodNetwork/FoodNetworkDataClean.json',
        source: 'Food Network'
    } /*,
    {
        filePath: 'data/TasteOfHome/TasteOfHomeDataClean.json',
        source:   'Taste of Home'
    }*/
];
exports.DATA_FILES = DATA_FILES;
//Used to find any HTML which might appear in a string
const HTML_TAG_REGEX = /<div.*?>|<\/div>|<a.*?>|<\/a>|<img.*?>|<\/img>|<b.*?>|<\/b>|<p.*?>|<\/p>|<i.*?>|<\/i>|<span.*?>|<\/span>/g;
//Method to remove HTML content and whitespace from a string
const RemoveHtmlTags = (str) => {
    return str.replace(HTML_TAG_REGEX, '').trim();
};
exports.RemoveHtmlTags = RemoveHtmlTags;
//Sorts an object array by any list of properties, in order
const SortByProperties = (values, properties) => {
    for (let i = properties.length - 1; i >= 0; i--) {
        let nextProp = properties[i];
        values.sort((a, b) => {
            return b[nextProp] - a[nextProp];
        });
    }
};
exports.SortByProperties = SortByProperties;
