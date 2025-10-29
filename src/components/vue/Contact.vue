<template>
  <div
    class="w-full h-full flex flex-col gap-[32px] justify-between"
    ref="dropdownRef"
  >
    <!-- Header -->
    <h3
      class="txt-grad-dark font-cg text-[24px] font-extrabold leading-[100%] text-transparent"
    >
      Send us a Message
    </h3>

    <!-- Form -->
    <div class="flex flex-col gap-[16px]">
      <input
        class="input w-full"
        type="text"
        v-model="form.fullName"
        placeholder="Enter your full name"
      />
      <input
        class="input w-full"
        type="email"
        v-model="form.email"
        placeholder="Enter your email address"
      />

      <input
        class="input w-full"
        type="text"
        v-model="form.phone"
        placeholder="Enter your phone number"
      />

      <textarea
        class="input rounded-[32px]!"
        v-model="form.message"
        placeholder="Please Enter your message"
        rows="3"
      ></textarea>
    </div>

    <button
    disabled
    @click=""
      class="w-full btn bg-primaryy px-[32px] py-[12px] text-[18px] hover:bg-black hover:text-white"
    >
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: "Contact-Form",

  data() {
    return {
      form: {
        fullName: "",
        email: "",
        phone: "",
        message: "",
      },
    };
  },

  methods: {
  },
};
</script>

<style>
.input {
  display: flex;
  padding: 14.5px 32px;
  align-items: center;
  border-radius: 100px;
  border: 1.5px solid rgba(0, 0, 0, 0.15);
  font-family: "Red Hat Display";
  font-size: 16px;
  color: #000;
}

.dropdown {
  position: relative;
}

.dropdown-toggle {
  cursor: pointer;
}

.dropdown-menu {
  width: 100%;
  position: absolute;
  top: 120%;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 16px;
  z-index: 10;
}

.select-wrapper {
  position: relative;
  width: 100%;
}

.select-with-icon {
  appearance: none; /* Remove default arrow */
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 100%;
  padding-right: 40px; /* Space for the icon */
  cursor: pointer;
}

.chevron-icon {
  position: absolute;
  right: 16px;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  pointer-events: none; /* Clicks go through to the select */
  color: rgba(0, 0, 0, 0.6);
}
</style>
