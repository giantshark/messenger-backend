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

### Scalability
- Not sure about scaling for socket.io if high connection. User socker provider like Pusher or Firebase should be better.

### Other
- Api get messages should be add offset and limit params for pagination if user can see all chat history and for mobile also.
- Create .env file for mongo connection url string, username, and password.
- Mongo DB Path should be in .env file but .env file should be in github for easy to install that why I add full mongo path in the code.
