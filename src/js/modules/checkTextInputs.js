/**
 * Created by пк on 02.12.2020.
 */

const checkTextInputs = (selector) => {
    const txtInputs = document.querySelectorAll(selector);

    txtInputs.forEach(input => {

        input.addEventListener('input', () => {
            if (input.value.match(/[a-z]/ig)) {
                input.value = '';
            }
        });
    });
};
export default checkTextInputs;
