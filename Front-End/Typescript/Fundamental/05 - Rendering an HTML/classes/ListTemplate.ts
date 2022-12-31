export class ListTemplate {
    constructor(private container: HTMLUListElement) {
    }

    render(heading: string, pos: 'start' | 'end') {
        const li = document.querySelector('li');
        const h4 = document.createElement('h4');
        h4.innerText = heading
        li.append(h4)
        const p = document.querySelector('p');
        p.innerText = 'test'
        li.append(p)

        if (pos === 'start') {
            this.container.prepend(li);
        } else {
            this.container.append(li)
        }
    }

}