function app() {
    let counter = 0;
    let selectorArr = [];
    let input = '';
    let currentElement = '';

    document.querySelector('.selector-find').addEventListener('click', () => {
        if (selectorArr !== []) {
            selectorArr = [];
            counter = 0;
            input = '';
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
            }
        }
        input = document.querySelector('.selector').value;
        if (input) {
            arrFromInputSelector();
            addSomeStyles(selectorArr[counter]);
            currentElement = selectorArr[counter];
            buttonNextSwitcher();
            buttonPreviousSwitcher();
            domNavigationSwitcher();

        }
    })

    document.querySelector('.selector-next').addEventListener('click', () => {
        counter += 1;
        buttonNextSwitcher();
        buttonNextElem();
        currentElement = selectorArr[counter];
    })

    document.querySelector('.selector-prev').addEventListener('click', () => {
        counter += -1;
        buttonPreviousSwitcher();
        buttonPreviousElem();
        currentElement = selectorArr[counter];
    })

    document.querySelector('.nav-top').addEventListener('click', () => {
        arrFromInputSelector();
        document.querySelector('.selector-prev').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        buttonParentElem();
        domNavigationSwitcher();
    })

    document.querySelector('.nav-bottom').addEventListener('click', () => {
        arrFromInputSelector();
        document.querySelector('.selector-prev').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        buttonChildElem();
        domNavigationSwitcher();
    })

    document.querySelector('.nav-left').addEventListener('click', () => {
        arrFromInputSelector();
        document.querySelector('.selector-prev').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        buttonPreviousSiblingElem();
        domNavigationSwitcher();
    })

    document.querySelector('.nav-right').addEventListener('click', () => {
        arrFromInputSelector();
        document.querySelector('.selector-prev').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        buttonNextSiblingElem();
        domNavigationSwitcher();
    })

//  DOM navigation switchers
    function domNavigationSwitcher() {
        parentSwitcher(currentElement);
        firstChildSwitcher(currentElement);
        previousSiblingSwitcher(currentElement);
        nextSiblingSwitcher(currentElement);
        console.log('=================================================================');
    }

    function parentSwitcher(elem) {
        if (elem.parentNode) {
            console.log('in parent');
            document.querySelector('.nav-top').disabled = false;
        } else {
            document.querySelector('.nav-top').disabled = true;
        }
    }

    function firstChildSwitcher(elem) {
        if (elem.children[0]) {
            console.log('in child');
            document.querySelector('.nav-bottom').disabled = false;
        } else {
            document.querySelector('.nav-bottom').disabled = true;
        }
    }

    function previousSiblingSwitcher(elem) {
        if (elem.previousElementSibling) {
            console.log('in prev');
            document.querySelector('.nav-left').disabled = false;
        } else {
            document.querySelector('.nav-left').disabled = true;
        }
    }

    function nextSiblingSwitcher(elem) {
        if (elem.nextElementSibling) {
            console.log('in next');
            document.querySelector('.nav-right').disabled = false;
        } else {
            document.querySelector('.nav-right').disabled = true;
        }
    }
    // Element navigation switchers

    function buttonNextSwitcher() {
        if (counter < selectorArr.length - 1) {
            document.querySelector('.selector-next').disabled = false;
        } else {
            document.querySelector('.selector-next').disabled = true;
        }
    }

    function buttonPreviousSwitcher() {
        if (counter > 0) {
            document.querySelector('.selector-prev').disabled = false;
        } else {
            document.querySelector('.selector-prev').disabled = true;
        }
    }

    function addSomeStyles(elem) {
        let styleSheet = document.createElement('style');
        let text = document.createTextNode('\n.current-element {\n outline: solid red 5px;\n background-color: lightblue;\n}');
        styleSheet.appendChild(text);
        document.head.appendChild(styleSheet);
        elem.className = elem.className + ' current-element';
    }

    // DOM navigation buttons
    function buttonParentElem() {
        if (currentElement.parentNode.classList) {
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
                if (document.querySelector('.current-element')) {
                    document.querySelector('.current-element').classList.remove('current-element');
                }
            }
            currentElement = currentElement.parentNode;
            addSomeStyles(currentElement);
        }
    }

    function buttonChildElem() {
        if (currentElement.children[0]){
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
                if (document.querySelector('.current-element')) {
                    document.querySelector('.current-element').classList.remove('current-element');
                }
            }
            console.log(currentElement, '1');
            currentElement = currentElement.children[0];
            console.log(currentElement, '2');
            addSomeStyles(currentElement);
        }
    }

    function buttonPreviousSiblingElem() {
        if (currentElement.previousElementSibling) {
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
                if (document.querySelector('.current-element')) {
                    document.querySelector('.current-element').classList.remove('current-element');
                }
            }
            currentElement = currentElement.previousElementSibling;
            addSomeStyles(currentElement);
        }
    }

    function buttonNextSiblingElem() {
        if (currentElement.nextElementSibling) {
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
                if (document.querySelector('.current-element')) {
                    document.querySelector('.current-element').classList.remove('current-element');
                }
            }
            currentElement = currentElement.nextElementSibling;
            addSomeStyles(currentElement);
        }
    }

    function buttonNextElem() {
        if (document.querySelector('.current-element')) {
            document.querySelector('.current-element').classList.remove('current-element');
        }
        arrFromInputSelector();
        addSomeStyles(selectorArr[counter]);
        buttonPreviousSwitcher();
        domNavigationSwitcher();

    }

    function buttonPreviousElem() {
        if (document.querySelector('.current-element')) {
            document.querySelector('.current-element').classList.remove('current-element');
        }
        arrFromInputSelector();
        addSomeStyles(selectorArr[counter]);
        buttonNextSwitcher();
        domNavigationSwitcher();

    }

    function arrFromInputSelector() {
        selectorArr = Array.from(document.querySelectorAll(`${input}`));
    }
}

app();
