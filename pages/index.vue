<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div class="card card-signin my-5">
          <div class="card-body">
            <h5 class="card-title text-center">Sign In</h5>
            <form class="form-signin">
              <div class="form-label-group mt-4">
                <input
                  type="email"
                  id="inputEmail"
                  class="form-control"
                  placeholder="Email address"
                  v-model="loginDetails.email"
                  required
                  autofocus
                />
              </div>

              <div class="form-label-group mt-4">
                <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  required
                  v-model="loginDetails.password"
                />
              </div>
              <button
                class="btn btn-lg btn-primary btn-block mt-4"
                type="submit"
                @click="submitForm"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      auth: false,
      loginDetails: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    submitForm() {
      if (
        this.loginDetails.email === "test@test.com" &&
        this.loginDetails.password === "admin"
      ) {
        this.$router.push({ path: "table" });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.disabled {
  opacity: 0.3;
  pointer-events: none;
  display: block;
}
</style>