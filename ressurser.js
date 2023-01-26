const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

function openMenu(source) {
    document.getElementById("holder-2").innerHTML = ""
    //lagde en function som skal inneholde informasjonen vår i en div.

        const header = document.createElement("h2")
        header.textContent = source.category;

        const line = document.createElement("p")
        line.textContent = source.text;

        const ullist = document.createElement("ul")
        //brukte create element for å lage en h2, p og ul som skal inneholde category, text og sources.
        /*jeg brukte da textContent for å hente informasjonen fra f.eks "category"
         og setter det da inni "header" som er "h2". det samme ble da gjort for "text" som da ble satt inn i "line".
        
        */
        source.sources.forEach(virk => {

            const lists = document.createElement("li")
            const links = document.createElement("a")

            links.textContent = virk.title
            links.href = virk.url

            lists.appendChild(links)
            ullist.appendChild(lists)

        })
        /*lagde en forEach der jeg brukte "creatElement" for å lage li og a. og brukte da textContent for å hente infromasjon inn i "title".
        jeg brukte da href for å putte inn url-en.
        jeg brukte da appendChild for å sette at links(a) er et "child element" av lists(li) og satte da også lists 
        som et "child element" av ullist(ul) for å sette både li og a under ul.*/

        

    document.getElementById("holder-2").appendChild(header)
    document.getElementById("holder-2").appendChild(line)
    document.getElementById("holder-2").appendChild(ullist)
    /*jeg skrev ut header, line og ullist til "holder-2" som er mitt div element, der det som ligger i resourses blir skrevet ut.
    li og a eller lists og links ligger da under ullist(ul). 
    */ 
}



document.getElementById("htmlknapp").addEventListener('click', function() {
    openMenu(resources[0])
})

document.getElementById("cssknapp").addEventListener('click', function() {
    openMenu(resources[1])
})

document.getElementById("javascriptknapp").addEventListener('click', function() {
    openMenu(resources[2])
})

document.getElementById("reactknapp").addEventListener('click', function() {
    openMenu(resources[3])
})

document.getElementById("sanityknapp").addEventListener('click', function() {
    openMenu(resources[4])
})

/*tilslutt så skriver vi da ut til hver button der vi bruker eventlistener('click') til funksjonen openMenu.
der har vi satt inn resources som en array[0] fra 0-4. 
*/



/*kilder-

https://www.w3schools.com/jsref/jsref_foreach.asp

https://www.javatpoint.com/javascript-create-element

https://www.w3schools.com/jsref/event_onclick.asp

https://www.w3schools.com/jsref/prop_node_textcontent.asps
*/ 