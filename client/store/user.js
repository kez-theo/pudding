export const newUser = () =>
  async () => {
    try {
      const { data } = await axios({
        method: "post",
        url: 'api/users',
        data: {
          email: "krystin@gmail.com",
          firstName: "Krystin",
          lastName: "Fields"
        }
      })
    } catch (err) {
      console.log(err);
      return err.message;
    }
  };