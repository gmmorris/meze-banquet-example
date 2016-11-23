import Meze, { PropTypes } from 'meze'
import { Server, Methods, Response } from 'banquet'

import fetchUrl from 'fetch-promise'

const extractNameFromResponse = result => JSON.parse(result.buf.toString())[0]

const GetPersonalisedMessage = ({ name }) => {
  return `hello ${name}, we're speaking via composition`
}
GetPersonalisedMessage.PropTypes = {
  name: PropTypes.string
}

const GetRandomName = () =>
  fetchUrl('http://namey.muffinlabs.com/name.json')
  .then(result => {
    const randomName = extractNameFromResponse(result)
    return <GetPersonalisedMessage name={randomName} />
  })

Meze.compose(
  <Server name="Example Banquet Server">
    <Methods.Get path="/hello">
      <Response.Send>
        <GetRandomName />
      </Response.Send>
    </Methods.Get>
    <Methods.Get path="/hello/:name">
      <Response.Send>
        <GetPersonalisedMessage />
      </Response.Send>
    </Methods.Get>
  </Server>
).then(server => {
  server.listen(8080, function () {
    console.log('%s listening at %s', server.name, server.url)
  })
})
