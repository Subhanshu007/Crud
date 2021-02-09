<template>
  <div>
    <!-- crud table -->
    <section class="crud__table">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="table row">
              <div
                class="table__heading d-flex align-items-center justify-content-between col-lg-12 pb-2 mb-3"
              >
                <h2 class="table__heading-text">Notes</h2>
                <nuxt-link to="/">
                  <button class="table__heading-cta table__cta-logout cta">
                    Logout
                  </button>
                </nuxt-link>
              </div>
              <!-- table data -->
              <div class="table__data col-lg-4">
                <div
                  class="table__data-card d-flex align-items-center justify-content-between"
                  v-for="(item, index) in $store.state.tableData"
                  :key="index"
                >
                  <div class="table__data-item">
                    <div class="table__data-title">
                      {{ item.tableData.title }}
                    </div>
                    <div class="table__data-description">
                      {{ item.tableData.desc }}
                    </div>
                  </div>
                  <div
                    class="table__data-delete cursor--pointer d-flex align-items-center justify-content-center"
                    @click="deleteData(index)"
                  >
                    <div
                      class="table__data-delete-icon d-flex align-items-center justify-content-center"
                    >
                      x
                    </div>
                  </div>
                </div>
              </div>
              <!-- /table data -->

              <!-- table input  -->
              <div class="table__input col-lg-8">
                <form action="" id="form">
                  <!-- title -->
                  <div class="table__input-wrapper">
                    <div class="table__input-label">
                      Title <span class="table__input-compulsory"> * </span>
                    </div>
                    <div class="table__input-box">
                      <input
                        v-model="tableData.title"
                        type="text"
                        class="w-100"
                      />
                    </div>
                  </div>
                  <!-- /title -->
                  <!-- body -->
                  <div class="table__input-wrapper">
                    <div class="table__input-label">
                      Body <span class="table__input-compulsory"> * </span>
                    </div>
                    <div class="table__input-box">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        class="w-100"
                        v-model="tableData.desc"
                      ></textarea>
                    </div>
                    <div
                      class="table__input-save text-right"
                      @click="updateData"
                    >
                      <button class="table__input-submit btn btn-primary">
                        Save
                      </button>
                    </div>
                  </div>
                  <!-- /body -->
                </form>
              </div>
              <!-- /table input  -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /crud table -->
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tableData: {
        title: null,
        desc: null,
      },
    };
  },
  methods: {
    updateData() {
      const tableData = this.tableData;
      this.$store.dispatch("updateTableData", { tableData });
      let form = document.getElementById("form");
      form.reset();
    },
    deleteData(arg) {
      this.$store.dispatch("deleteTableData", { arg });
    },
  },
};
</script>

<style lang="scss" scoped>
.crud__table {
  margin: 100px 0;
}
.table__cta-logout {
  background-color: white;
  border: 1px solid red;
  color: red;
}
.table {
  &__input {
    border-top: 0;
    border-bottom: 0;
    border-right: 0;
    border-left: 1px solid black;
    border-style: dashed;

    &-compulsory {
      color: red;
    }
  }
  &__data {
    &-title {
      font-size: 1.5rem;
      font-weight: bold;
    }
    &-desc {
      font-size: 1rem;
      font-weight: normal;
    }
    &-card {
      padding: 15px;
      border: 1px solid black;
      border-bottom: 0;
      border-radius: 5px;
      &:last-child {
        border-bottom: 1px solid black;
      }
    }

    &-delete {
      height: 20px;
      width: 20px;
      background-color: black;
      border-radius: 100%;
      &-icon {
        color: white;
      }
    }
  }
  &__heading {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid black;
    border-style: dashed;
  }
}
.cursor {
  &--pointer {
    cursor: pointer;
  }
}
</style>