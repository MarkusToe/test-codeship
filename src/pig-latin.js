var vowels = ['a', 'e', 'i', 'o', 'u', 'v'];

function translate(str) {
  if (vowels.indexOf(str[0]) !== -1) {
    return str + 'way';
  }

  var idx = 0;

  for (var i=0; i < str.length; i++) {
    idx = i;
    if (vowels.indexOf(str[i]) !== -1) { break; }
  }

  var suffix = str.slice(0, idx);

  return str.substr(idx) + suffix + "ay";
}

module.exports = translate;
