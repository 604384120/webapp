import { delay } from 'roadhog-api-doc';

export default delay({
  'POST /api/login/account': (req, res) => {
    const { password, username } = req.body;
    if (password === 'password' && username === 'admin') {
      res.send({
        status: 'ok',
        currentAuthority: 'admin',
      });
      return;
    }
    res.send({
      status: 'error',
      currentAuthority: 'guest',
    });
  },
  'GET /api/product/course': { users: [1, 2] },
}, 1200);
