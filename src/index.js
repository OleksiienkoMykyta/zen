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
            checkSelectorType();
            buttonNextSwitcher();
            buttonPreviousSwitcher();
            domNavigationSwitcher();
        }
    })

    document.querySelector('.selector-next').addEventListener('click', () => {
        counter += 1;
        buttonNextSwitcher();
        buttonNextElem();
    })

    document.querySelector('.selector-prev').addEventListener('click', () => {
        counter += -1;
        buttonPreviousSwitcher();
        buttonPreviousElem();
    })

    document.querySelector('.nav-top').addEventListener('click', () => {
        checkSelectorType();
        buttonParentElem();
    })

    document.querySelector('.nav-bottom').addEventListener('click', () => {
        checkSelectorType();
        buttonChildElem();
    })

    document.querySelector('.nav-left').addEventListener('click', () => {
        checkSelectorType();
        buttonPreviousElem();
    })

    document.querySelector('.nav-right').addEventListener('click', () => {
        checkSelectorType();
        buttonNextElem();
    })
//  DOM navigation switchers
    // ===========================================================================================================================
    function domNavigationSwitcher() {
        parentSwitcher(selectorArr[counter]);
        firstChildSwitcher(selectorArr[counter]);
        previousSiblingSwitcher(selectorArr[counter]);
        nextSiblingSwitcher(selectorArr[counter]);
    }

    function parentSwitcher(elem) {
        if (elem.parentNode) {
            document.querySelector('.nav-top').disabled = false;
        } else {
            document.querySelector('.nav-top').disabled = true;
        }
    }

    function firstChildSwitcher(elem) {
        if (elem.firstChild) {
            document.querySelector('.nav-bottom').disabled = false;
        } else {
            document.querySelector('.nav-bottom').disabled = true;
        }
    }

    function previousSiblingSwitcher(elem) {
        if (elem.previousElementSibling) {
            document.querySelector('.nav-left').disabled = false;
        } else {
            document.querySelector('.nav-left').disabled = true;
        }
    }

    function nextSiblingSwitcher(elem) {
        if (elem.nextElementSibling) {
            document.querySelector('.nav-right').disabled = false;
        } else {
            document.querySelector('.nav-right').disabled = true;
        }
    }

    // ===========================================================================================================================
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

    // ==========================================================================================

    function addSomeStyles(elem) {
        let styleSheet = document.createElement('style');
        let text = document.createTextNode('\n.current-element {\n outline: solid red 5px;\n background-color: lightblue;\n}');
        styleSheet.appendChild(text);
        document.head.appendChild(styleSheet);
        elem.className = elem.className + ' current-element';
    }

    // =========================================================================================
    // DOM navigation buttons
    function buttonParentElem() {
        if (document.querySelector('.current-element')) {
            document.querySelector('.current-element').classList.remove('current-element');
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
            }
        }

        document.querySelector('.selector-prev').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        currentElement = currentElement.parentNode;
        addSomeStyles(currentElement);
    }

    function buttonChildElem() {
        if (document.querySelector('.current-element')) {
            document.querySelector('.current-element').classList.remove('current-element');
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
            }
        }

        document.querySelector('.selector-prev').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        currentElement = currentElement.firstChild;
        addSomeStyles(currentElement);
    }

    function buttonPreviousElem() {
        if (document.querySelector('.current-element')) {
            document.querySelector('.current-element').classList.remove('current-element');
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
            }
        }

        document.querySelector('.selector-prev').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        currentElement = currentElement.previousElementSibling;
        addSomeStyles(currentElement);
    }

    function buttonNextElem() {
        if (document.querySelector('.current-element')) {
            document.querySelector('.current-element').classList.remove('current-element');
            if (document.querySelector('.current-element')) {
                document.querySelector('.current-element').classList.remove('current-element');
            }
        }

        document.querySelector('.selector-prev').disabled = true;
        document.querySelector('.selector-next').disabled = true;
        currentElement = currentElement.nextElementSibling;
        addSomeStyles(currentElement);
    }

// =========================================================================================

    function buttonNextElem() {
        if (document.querySelector('.current-element')) {
            document.querySelector('.current-element').classList.remove('current-element');
        }
        checkSelectorType();
        buttonPreviousSwitcher();
        domNavigationSwitcher();

    }

    function buttonPreviousElem() {
        if (document.querySelector('.current-element')) {
            document.querySelector('.current-element').classList.remove('current-element');
        }
        checkSelectorType();
        buttonNextSwitcher();
        domNavigationSwitcher();

    }

    function checkSelectorType() {
        if (document.querySelector(`#${input}`) !== null) {
            selectorArr = Array.from(document.querySelectorAll(`#${input}`));
            addSomeStyles(selectorArr[counter]);
        }

        if (document.querySelector(`.${input}`) !== null) {
            selectorArr = Array.from(document.querySelectorAll(`.${input}`));
            addSomeStyles(selectorArr[counter]);
        }

        if (document.querySelector(`${input}`) !== null) {
            selectorArr = Array.from(document.querySelectorAll(`${input}`));
            if (counter >= 0 && counter < selectorArr.length) {
                addSomeStyles(selectorArr[counter]);
            }
        }
        currentElement = selectorArr[counter];
    }
}

app();
