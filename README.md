# Web Messenger-backend

## Installation

```bash
$ npm install
```
## Improvement

### Security
- CORS should allow only front-end ip address.
- Prevent chat spaming should be added.
- If want more secure, add ssl to both front-end and back-end.
- Api default port should not be 3000. Use reverse proxy to api server to serve port 80 instead.
- Rate limit of api should be added.

### Scalability
- Not sure about scaling for socket.io if high connection. Use socker provider like [Pusher](https://pusher.com/) or [Firebase](https://firebase.google.com/) should be better.

### Other
- Api get messages should be add offset and limit params for pagination if user can see all chat history and for mobile also.
- Create .env file for mongo connection url string, username, and password.
- MongoDB url string should be in .env file but .env file should be in github for easy to install that why I put full mongodb connection string in the code.
