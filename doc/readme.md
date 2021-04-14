# Знаймоство з React #
React (React.js або ReactJS) — JavaScript-бібліотека з відкритим вихідним кодом для розробки призначених для користувача інтерфейсів. React може використовуватися для розробки односторінкових і мобільних додатків. Його мета - надати високу швидкість, простоту і масштабованість. React роботае по принципу SPA(Single Page Aplication).

Найпростіша функція написана за допомогою React

```jsx
function HelloMessage({ name }) {
  return <div>Hello {name}</div>;
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('container')
);
```
'

# API #
Розберемося, що ж таке API та навіщо він потрібен. API (Application programming interface, програмний інтерфейс програми) це опис способів (набір класів, процедур, функцій, структур ), якими одна комп'ютерна програма може взаємодіяти з іншою програмою. Зазвичай входить в опис будь-якого інтернет-протоколу, фреймворку або стандарту визову функцій операційної системи. Часто реалізується окремою програмною бібліотекою або сервісом операційної системи. Використовується програмістами при написанні всіляких додатків.
Проще кажучи -це готовий код для спрощення життя програмісту

Найбільш популярні розновидності API:
* Remote Procedure Call – RPC
* Simple Object Access Protocol – SOAP
* Representational State Transfer – REST


# Початок роботи с React.js #
Для початку роботи нам потрібно інсталювати Node.js. Це можливо виконати з офіційного сайту, [клік](https://nodejs.org/uk/). Після інсталювання нам потрібно стоврити дерикторію нашого проекту та запустити
[![image1.png](https://i.postimg.cc/sgHrQNCS/image1.png)](https://postimg.cc/YvFVT89q)

Для стоврення проекту в консолі потрібну ввести  ``` npx create-react-app *Назва проекту*```. Далі нам потрібно перейти в дериктрію проекту ``` cd *Назва проекту*``` та запустити локльний сервір командою  ``` npx start *Назва проекту*```. Перший крок зробленно! Ми маємо локальній сервір, доступ до нього можна отримити написавши в адрісній строці
http://localhost:3000/
Щоб виключити сервір потрібно в конслі натиснути комбінацію клавіш ``` Ctrl + C ```, а запустити ``` nmp start ```

Чутка теорії, npm(Node Packege Manager) - Він використовується для скачування пакетів з хмарного сервера npm, або для завантаження пакетів на ці сервера.

# Структура проекту #
Давайте розберемо структру проекту

[![image.png](https://i.postimg.cc/J4710vWL/image.png)](https://postimg.cc/hhwF3Cjy)

# Public:

*index.htlm* - файл який відображає на сайті JSX скрпіт, написанний в App.js

*manifest.json*

*robots.txt*

# Src:

*App.css* - зберігає стилізацію. створеною завдяки CSS(Cascading Style Sheets)

*App.js* - основний файл проекту, в якому ми створюємо наш сайт

*App.test.js* -це набір допоміжних функцій, що дозволяє тестувати React-компоненти не покладаючись на їх внутрішню реалізацію(не уверен)

*index.css* -

*index.js* - обробляє компонети отрмані від *App.js*

*reportWebVitals.js* -

*setupTests.js* -

# Others:

*.gitignore* -  потрібен для приховування файлів і папок від VCS(системи контролю версій)

*package.json* - зберігає список пакетів, необхідних для проекту з потрібними версіями

*package-lock.json* - потрібен для перевірки того, що ставив пакет не був підмінений або іншим чином недійсний.

README.md - файл який містить інформіцію для початку роботи с React.js


# Почнемо створювати наш сайт #
Роботу надо сайтом ми почнемо з файлу App.js. Першим кроком потрібно створити class в якому ми будемо працювати.
```jsx 
class App extends React.Component 
``` 
Наступним кроком створимо зовнішній вигляд нашого майбутнього сайту. Цей блок коду ми будемо писати  в 
```jsx
return()
```
Наш сайт буде складатися с навігаційного меню, рядку вводу, кнопки пошуку, блоків
для контенту та нижнього колонтитула. Щоб спростити створення, скористаємося Bootstrap
*Bootstrap* - це вільний набір інструментів для створення сайтів і 
веб-додатків. Включає в себе HTML- і CSS-шаблони оформлення для типографіки, 
веб-форм, кнопок, міток, блоків навігації та інших компонентів веб-інтерфейсу.
```jsx
        return (
            <div >
            <NaviBar />
            <Footer />
            </div>

        );
```
Наразі нам потрібно створити дерикторію Components в src і в ній Footer.js та NavBar.js
Почнемо з NavBar.js. По-переше потрібно іпротнути потрібні нам бібліотеки, а це
```jsx
import React from "react";
import {Navbar, Nav, Button} from "react-bootstrap";
```
Далі створемо стрелочну функцію Navibar та скориставшись готовимим формами навовними її
```jsx
const Navibar = () => {
    return(
        <div>
            <Navbar collabseOnSelect expand='lg' bg='dark'> 
                <Navbar.Brand>WikiSearch</Navbar.Brand> 
                <Navbar.Toggle aria-controls = 'responsive-navbar-nav'/> 
                <Navbar.Collapse id = 'responsive-navbar-nav'>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Footer;
```
Наша навігаційна панель готова та має вигляд
[![image.png](https://i.postimg.cc/CxXwFW7v/image.png)](https://postimg.cc/fVcGCq6X)
За потреби, ми маємо змогу додати потрібні нам кнопки, змінити колір та текст

Перейдемо до файла Footer.js. Робимо теж саме і отримаємо
```jsx
import React from "react";
import {Container} from "react-bootstrap";

const Footer = () => {
    return (
        <Container fluid style = {{backgroundColor: '#212529', color: '#fff' }}>
            <Container style={{ display: 'flex', justifyContent: 'center', padding: '10px',top:'20x'}}>
                       <p>WikiSearch</p>
                </Container>
        </Container>
    )
}

export default Footer;
```
Наш нижній колонтикул готов та має вигляд
[![image.png](https://i.postimg.cc/3RMpDf81/image.png)](https://postimg.cc/Ny4L34r2)

# Підключаємо API #
Основна частина нашого проєкту. Спочатку створюємо props. Props це механізм передачі
даних в компоненти
```jsx
    constructor(props) {
        super(props);
        this.state = {
            wikiSearchReturnValues: [],
            wikiSearchTerms: '',
        }
    }
```
Далі нам потрібно сформувати запит. В нашому випадку, основними елементами запиту будуть дія, 
формат отримання, ключеве слово по якому робиться пошук та тип отримання.

```jsx
 useWikiSearchEngine = (e) => {
        e.preventDefault();

        this.setState({
            wikiSearchReturnValues: []
        });

        const pointerToThis = this;

        var url = "https://en.wikipedia.org/w/api.php";

        var params = {
            action: 'query',
            list: 'search',
            srsearch: this.state.WikiSearchTerms,
            format: 'json'
        };
```
І все це нам потрібно щоб сформувати остаточний запит
```jsx
        url = url + '?origin=*';
        Object.keys(params).forEach((key) => {
            url += "&" + key + "=" + params[key];
        });
```
Щоб надіслати запит, ми скористуємося FetchAPI, а саме методом ```fetch() ```
```jsx
        fetch(url)
            .then(
                function (response) {
                    return response.json();
                }
            )
```
У відповідь ми отримуємо JSON. Це формат обміну текстовими даними. Далі нам потрібно обробити
отриману інформацію
```jsx
.then(
                function (response) {
                    // console.log(response);

                    for (var key in response.query.search) {
                        pointerToThis.state.wikiSearchReturnValues.push({
                            queryResultPageFullURL: 'no link',
                            queryResultPageID: response.query.search[key].pageid,
                            queryResultPageTitle: response.query.search[key].title,
                            queryResultPageSnippet: response.query.search[key].snippet
                        });
                    }
                }
            )
            .then(
                function (response) {
                    for (var key2 in pointerToThis.state.wikiSearchReturnValues) {
                        // console.log(pointerToThis.state.wikiSearchReturnValues);
                        let page = pointerToThis.state.wikiSearchReturnValues[key2];
                        let pageID = page.queryResultPageID;
                        let urlForRetrievingPageURLByPageID = `https://en.wikipedia.org/w/api.php?origin=*&action=query&prop=info&pageids=${pageID}&inprop=url&format=json`;

                        fetch(urlForRetrievingPageURLByPageID)
                            .then(
                                function (response) {
                                    return response.json();
                                }
                            )
                            .then(
                                function (response) {
                                    page.queryResultPageFullURL = response.query.pages[pageID].fullurl;

                                    pointerToThis.forceUpdate();
                                }
                            )
                    }
                }
            )
    }
```
Створиму функцію, яка буде відповідати за передачу теми пошуку
```jsx
    changeWikiSearchTerms = (e) => {
        this.setState({
            WikiSearchTerms: e.target.value
        });
    }
```
Лишилось обробити отриману інформацію та передати її в
красивий оболонці.
```jsx
    render() {
        let wikiSearchResults = [];
        // console.log(this.state.wikiSearchReturnValues);

        for (var key3 in this.state.wikiSearchReturnValues) {
            wikiSearchResults.push(
                <div className="searchResultDiv" key={key3}>


                    <Card>
                        <Card.Body>
                            <Card.Title>
                                <h3><a target="_blank"
                                       href={this.state.wikiSearchReturnValues[key3].queryResultPageFullURL}>{this.state.wikiSearchReturnValues[key3].queryResultPageTitle}</a>
                                </h3>
                            </Card.Title>
                            <Card.Text>
                                <p className="description"
                                   dangerouslySetInnerHTML={{__html: this.state.wikiSearchReturnValues[key3].queryResultPageSnippet}}></p>
                            </Card.Text>
                        </Card.Body>
                    </Card>

                </div>
            );
        }
```
Залишилось викликати наш NavBar та Footer 
```jsx
return (
            <div>
                <NaviBar/>
                <Form.Row className="align-items-center" style={{padding: '10px', top: '20x'}}>

                    <Col xs={2}>
                        <Form.Control autocomplete='on' type="text" value={this.state.WikiSearchTerms || ''}
                                      onChange={this.changeWikiSearchTerms} placeholder='Search Wikipedia Articles'/>
                    </Col>

                    <Col xs={'auto'}>
                        <Button variant="primary" type="submit" onClick={this.useWikiSearchEngine}> Submit </Button>
                    </Col>
                </Form.Row>

                {wikiSearchResults}

                <Footer/>

            </div>

        );
    }
}

```
В кінці не забуваємо експортувати
```jsx
export default App;

```