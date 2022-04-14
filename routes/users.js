  // read all users
  app.get("/users", jwtCheck, async (req, res) => {
    let users = await User.findAll();
    res.json({ users });
  });

  // read one user by id
  app.get("/users/:id", jwtCheck, async (req, res) => {
    let user = await User.findByPk(req.params.id);
    res.json({ user });
  });

  // app.post('/users/:id', async (req,res) =>{
  //   const theUser = await User.findOne({
  //       where: {
  //           email: req.body.email
  //       }
  //   })
  //   res.send('User found')
  // });

  // create user
  app.post("/users", async (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const newUser = await User.create({ userName: name, userPassword: hash });
      console.log(hash);
      res.json({ newUser });
    });
  });