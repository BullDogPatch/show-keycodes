function showKeyCodes(e) {
  // get the div with id of insert
  const insert = document.querySelector('#insert');
  insert.innerHTML = '';

  //store the codes in an object
  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  // loop through keyCides to get the key
  for (let key in keyCodes) {
    // create a div
    const div = document.createElement('div');
    // giv div class of key
    div.className = 'key';
    // create a small tag
    const smallTag = document.createElement('small');
    // create text nodes for each keycode
    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(smallTag);

    insert.appendChild(div);
  }
}
window.addEventListener('keydown', showKeyCodes);
