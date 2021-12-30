'use strict;'

window.addEventListener('load', (event) => {
    // make a pretty description
    const eventDesc = (event) => {
        let dateInfo = event.begin.getTime() === event.end.getTime() ?
            event.begin.toLocaleDateString() :
            `${event.begin.toLocaleDateString()} to ${event.end.toLocaleDateString()}`

        return `${event.name}, ${dateInfo}`
    }

    // sort event list
    events.sort((a, b) => {
        return a.begin.getTime() - b.begin.getTime()
    })

    // build event list
    events.forEach(event => {
        let txt = document.createTextNode(eventDesc(event))
        let li = document.createElement('li')
        let ul = document.getElementById('events')

        li.classList.add('list-group-item')
        li.classList.add('list-group-item-action')
        li.appendChild(txt)
        ul.appendChild(li)
    })
})
