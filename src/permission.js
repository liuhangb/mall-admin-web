import router from './router'

router.beforeEach(async(to, from, next) => {
  // determine whether the user has logged in
  next()
})

router.afterEach(() => {
})
