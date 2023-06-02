const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <titile>Title</titile>
            </head>
            <body>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def