import 'isomorphic-fetch'
import Frisbee from 'frisbee'

const api = new Frisbee({
  baseURI: 'http://localhost:3030',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default api;