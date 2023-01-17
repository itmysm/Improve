class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }


    append(value) {
        const newElement = { value: value, next: null }

        this.tail ? this.tail.next = newElement : false;
        this.tail = newElement;

        !this.head ? this.head = newElement : false;
    }


    prepend(value) {
        const newElement = { value: value, next: this.head }

        this.head = newElement;

        !this.tail ? this.tail = newElement : false;
    }


    delete(value) {
        !this.head ? null : true;

        while (this.head && this.head.value === value) {
            this.head = this.head.next
        }

        let currentElement = this.head;

        while (currentElement.next) {
            currentElement.next.value === value ? currentElement.next = currentElement.next.next : currentElement = currentElement.next
        }

        this.tail.value === value ? this.tail = currentElement : true;
    }

    toArray() {
        const elements = []

        let currentElement = this.head

        while (currentElement) {
            elements.push(currentElement)
            currentElement = currentElement.next
        }

        return elements
    }
}



const linkedList = new LinkedList()

linkedList.append(2)
linkedList.append('s')
linkedList.append('s')
linkedList.append(true)

linkedList.prepend('First value')
linkedList.prepend('First value')


linkedList.delete('s')
linkedList.delete('First value')
linkedList.delete(true)


console.log(linkedList.toArray());