/**
 * Created by пк on 04.12.2020.
 */

const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
        items = menu.querySelectorAll('li'),
        wrapper = document.querySelector('.portfolio-wrapper'),
        markAll = wrapper.querySelectorAll('.all'),
        no = document.querySelector('.portfolio-no');

    markAll.forEach(mark => {
        mark.classList.add('animated');
        mark.classList.remove('fadeIn');
    });

    no.classList.add('animated');
    no.classList.remove('fadeIn');

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {

            markAll.forEach(mark => {
                mark.style.display = 'none';
                mark.classList.remove('fadeIn');
            });

            no.style.display = 'none';
            no.classList.remove('fadeIn');

            let btn = target.classList.value;

            markAll.forEach(mark => {
                if (mark.classList.contains(btn)) {
                    mark.style.display = 'block';
                    mark.classList.add('fadeIn');
                } else if (btn == 'grandmother' || btn == 'granddad') {
                    no.style.display = 'block';
                    no.classList.add('fadeIn');
                }
            });

            items.forEach(btn => {
                btn.classList.remove('active');
            });
            target.classList.add('active');

        }
    });


};
export default filter;