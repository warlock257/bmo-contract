### `How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.`
It took around 4 hours
I would have liked to have an image on each of the cards, but the image links returned weren't working.
Also, my filter input only filters the 25 that are displayed, not all the results. I didn't see any indication that the api could return filtered results, so I had to live with that.

### `What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.`
I quite like ES2020 'optional chaining'. When access data in a nested object, it can return undefined, rather than crashing your app, if some data is missing
eg. restaurants?.location?.address

### `What were the more challenging parts of this assignment for you?`
The initial setup of Redux can be tricky because there's so much that needs to be done. This time it went well though. The new hooks make it easier to use too.

### `How would you track down a performance issue in production? Have you ever had to do this?`
I've done this a little bit. One time at 7shifts we changed from Redux to local state, because it was loading faster.

### `How would you improve the API that you just used?`
The instructions mentioned food type and rating, which wasn't part of the returned data. Also the image links were broken, which would have been nice to add.

### `Please describe yourself using JSON.`
{
    "name": "David Courtemance",
    "location": "North York, Toronto",
    "birthplace": "Hamilton",
    "previousEmployers": [
        "Kaitongo",
        "Netwila",
        "Dell Productions",
        "7shifts"
    ],
    "previousCareerPath": "Video editing / motion graphics",
    "otherInterests": [
        "Video games",
        "Super hero movies/shows",
        "collectables",
        "smart home gadgets",
    ],
    "computerNerd": true
}