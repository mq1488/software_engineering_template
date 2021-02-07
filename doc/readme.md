
# Знаймоство з React #
React (React.js або ReactJS) — JavaScript-бібліотека з відкритим вихідним кодом для розробки призначених для користувача інтерфейсів. React може використовуватися для розробки односторінкових і мобільних додатків. Його мета - надати високу швидкість, простоту і масштабованість.


# ????? #
Найпростіша функція написана за допомогою React

  function HelloMessage({ name }) {
    return <div>Hello {name}</div>;
  }

  ReactDOM.render(
    <HelloMessage name="Taylor" />,
    document.getElementById('container')
  );
