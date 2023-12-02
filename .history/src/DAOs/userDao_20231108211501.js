class UserManager {

  constructor() {

      this.model = userModel
      app.get('/users', async (req, res) => {

        const users = await userDao.getAll();
    
        res.json(users);
    
    });
    
     
    
    app.get('/users/:id', async (req, res) => {
    
        const user = await userDao.get(req.params.id);
    
        if(user) {
    
            res.json(user);
    
        } else {
    
            res.status(404).send('User not found');
    
        }
    
    });
    
     
    
    app.post('/users', async (req, res) => {
    
        const newUser = await userDao.create(req.body);
    
        res.json(newUser);
    
    });
    
     
    
    app.put('/users/:id', async (req, res) => {
    
        const updatedUser = await userDao.update(req.params.id, req.body);
    
        if(updatedUser) {
    
            res.json(updatedUser);
    
        } else {
    
            res.status(404).send('User not found');
    
        }
    
    });
    
     
    
    app.delete('/users/:id', async (req, res) => {
    
        await userDao.delete(req.params.id);
    
        res.status(200).send('User deleted');
    
    });

  }}