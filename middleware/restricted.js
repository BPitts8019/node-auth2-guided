module.exports = () => {
   return (req, res, next) => {
      if (!req.session || !req.session.user) {
         return res.status(401).json({
            message: "You... shall not... PASS!"
         })
      }

      // if we reach this point, the user is authenticated!
      next();
   }
}