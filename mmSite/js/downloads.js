window.onload = () =>
{
    let checkboxes = document.querySelectorAll("input[type=checkbox]")
    console.log(checkboxes)
    updateMargin()

    checkboxes.forEach(element => {
        element.addEventListener('change', () => {
            console.log('pp')
            let classification = element.getAttribute('name')
            let nodes = [...document.getElementsByClassName(classification)]
            if (element.checked)
            {
                nodes.forEach((node) =>
                {
                    node.style.display = "flex"
                })
            }
            else
            {
                nodes.forEach((node) =>
                {
                    node.style.display = "none"
                })
            }
            updateMargin()

        })
    });
}

function updateMargin()
{
    let cards = document.querySelectorAll('.card')
    let done = false;
    for (let index = 0; index < cards.length; index++) {
        const ele = cards[index];
        if (done === true)
        {
            ele.style.marginLeft = '-7rem';

        }
        else if (ele.style.display !== 'none')
        {
            console.log('pp')
            ele.style.marginLeft = '0px';
            done = true;
        }
    }
    
    
}