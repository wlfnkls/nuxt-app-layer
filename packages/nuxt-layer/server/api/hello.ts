export default defineEventHandler
    ((event
    ) => {
        console.log('New request: ' + getRequestURL(event))
        return {
            hello
                : 'world'
        }
    })