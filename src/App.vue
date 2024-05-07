<template>
  <section
    class="bg-offWhite w-full h-screen flex flex-col justify-center items-center"
  >
    <div
      class="bg-white rounded-br-[100px] rounded-t-[20px] rounded-bl-[20px] flex flex-col border border-white items-center mx-2 w-5/6 sm:w-3/5 lg:w-2/5 lg:rounded-br-[150px]"
    >
      <form
        @submit.prevent="handleSubmit"
        class="flex flex-col justify-center w-full py-5 px-3"
      >
        <div class="flex my-3 mx-4 w-full sm:w-96 md:w-full">
          <div class="flex flex-col">
            <label
              htmlFor="day"
              :class="[errDay ? labelErrorText : 'text-smokeyGrey', labelText]"
              >Day</label
            >
            <input
              v-model="day"
              placeholder="DD"
              type="text"
              id="day"
              :class="[
                errDay ? inputErrorBorder : 'border-lightGrey',
                inputBorder,
              ]"
            />
            <span
              class="text-lightRed text-xs w-20 lg:w-32"
              v-if="errDay !== ' '"
              >{{ errDay }}</span
            >
          </div>
          <div class="flex flex-col">
            <label
              htmlFor="month"
              :class="[
                errMonth ? labelErrorText : 'text-smokeyGrey',
                labelText,
              ]"
              >month</label
            >
            <input
              v-model="month"
              placeholder="MM"
              type="text"
              id="month"
              :class="[
                errMonth ? inputErrorBorder : 'border-lightGrey',
                inputBorder,
              ]"
            />
            <span
              class="text-lightRed text-xs w-20 lg:w-32"
              v-if="errMonth !== ' '"
              >{{ errMonth }}</span
            >
          </div>
          <div class="flex flex-col">
            <label
              htmlFor="year"
              :class="[errYear ? labelErrorText : 'text-smokeyGrey', labelText]"
              >year</label
            >
            <input
              v-model="year"
              placeholder="YYYY"
              type="text"
              id="year"
              :class="[
                errMonth ? inputErrorBorder : 'border-lightGrey',
                inputBorder,
              ]"
            />
            <span
              class="text-lightRed text-xs w-20 lg:w-32"
              v-if="errYear !== ' '"
              >{{ errYear }}</span
            >
          </div>
        </div>
        <div
          class="w-full relative flex items-center justify-center my-10 sm:justify-end"
        >
          <button
            type="submit"
            class="absolute z-20 bg-purple rounded-full w-14 h-14 flex justify-center items-center hover:bg-offBlack"
          >
            <img
              src="/src/assets/images/icon-arrow.svg"
              class="w-8 flex"
              alt="arrow icon"
            />
          </button>
          <hr
            class="absolute w-full border border-1 border-lightGrey absolute z-10"
          />
        </div>
      </form>
      <div class="w-full h-full flex flex-col px-4 pb-8 italic">
        <div
          class="flex my-2 text-offBlack font-bold font-poppinsExtraBold text-5xl sm:text-5xl md:text-6xl"
        >
          <span class="text-purple mr-2"> {{ answerYear }}</span>
          years
        </div>
        <div
          class="flex my-2 text-offBlack font-bold font-poppinsExtraBold text-5xl sm:text-5xl md:text-6xl"
        >
          <span class="text-purple mr-2">{{ answerMonth }}</span>
          months
        </div>
        <div
          class="flex text-offBlack font-bold font-poppinsExtraBold text-5xl sm:text-5xl md:text-6xl"
        >
          <span class="text-purple mr-2">{{ answerDay }}</span>
          days
        </div>
      </div>
    </div>
    <div class="text-center text-xs text-purple my-5">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="text-offBlack hover:underline"
      >
        Frontend Mentor.
      </a>
      <br class="block md:hidden" />
      Coded by
      <a
        href="https://www.linkedin.com/in/mikiyas-kebede-b661aa225/"
        target="_blank"
        class="text-offBlack hover:underline"
      >
        Mikiyas Kebede
      </a>
    </div>
  </section>
</template>

<script lang="ts">
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    const date = new Date();
    const inputBorder = ref(
      "border text-offBlack  text-sm font-bold outline-0  px-1 w-2/3 h-8 rounded-md focus:border-purple focus:outline-none outline-none lg:py-5 lg:px-2 lg:mt-2  md:text-lg"
    );
    const inputErrorBorder = ref("border-lightRed");
    const labelText = ref(
      "uppercase text-xs tracking-widest font-bold sm:text-md lg:text-lg"
    );
    const labelErrorText = ref("text-lightRed");
    //for errors
    let errors = reactive({
      errDay: "",
      errMonth: "",
      errYear: "",
    });
    //for user input
    const formValues = reactive({
      day: "",
      month: "",
      year: "",
    });

    //for output
    const answer = reactive({
      answerDay: "- -",
      answerMonth: "- -",
      answerYear: "- -",
    });

    //handle Submit
    const handleSubmit = () => {
      if (validateForm()) {
      } else {
        calculateAge();
      }
    };

    //validate form
    const validateForm = () => {
      errors.errDay = "";
      errors.errMonth = "";
      errors.errYear = "";
      //validate month
      if (formValues.month === "") {
        errors.errMonth = "This field is required";
      } else if (
        parseInt(formValues.month) < 1 ||
        parseInt(formValues.month) > 12
      ) {
        errors.errMonth = "Must be a valid month";
      } else {
        errors.errMonth = "";
      }

      //validate day
      if (formValues.day === "") {
        errors.errDay = "This field is required";
      } else if (
        parseInt(formValues.month) === 1 ||
        parseInt(formValues.month) === 3 ||
        parseInt(formValues.month) === 5 ||
        parseInt(formValues.month) === 7 ||
        parseInt(formValues.month) === 8 ||
        parseInt(formValues.month) === 10 ||
        parseInt(formValues.month) === 12
      ) {
        if (parseInt(formValues.day) < 1 || parseInt(formValues.day) > 31) {
          errors.errDay = "Must be a valid day";
        }
      } else if (
        parseInt(formValues.month) === 4 ||
        parseInt(formValues.month) === 6 ||
        parseInt(formValues.month) === 8 ||
        parseInt(formValues.month) === 9 ||
        parseInt(formValues.month) === 11
      ) {
        if (parseInt(formValues.day) < 1 || parseInt(formValues.day) > 30) {
          errors.errDay = "Must be a valid day";
        }
      } else if (
        parseInt(formValues.month) === 2 &&
        date.getFullYear() % 4 === 0
      ) {
        if (parseInt(formValues.day) < 1 || parseInt(formValues.day) > 29) {
          errors.errDay = "Must be a valid day";
        }
      } else if (parseInt(formValues.month) === 2) {
        if (parseInt(formValues.day) < 1 || parseInt(formValues.day) > 28) {
          errors.errDay = "Must be a valid day";
        }
      } else {
        errors.errDay = "";
      }

      //validate year
      if (formValues.year === "") {
        errors.errYear = "This field is required";
      } else if (parseInt(formValues.year) > date.getFullYear()) {
        errors.errYear = "Must be a valid year";
      } else {
        errors.errYear = "";
      }

      //return true if error
      if (errors.errMonth || errors.errDay || errors.errYear) {
        return true;
      } else {
        return false;
      }
    };

    //calcuate age
    const calculateAge = () => {
      // calculate the date
      if (parseInt(formValues.day) > date.getDate()) {
        answer.answerDay = (
          parseInt(formValues.day) - date.getDate()
        ).toString();
      } else {
        answer.answerDay = (
          date.getDate() - parseInt(formValues.day)
        ).toString();
      }

      //calculate the month
      if (parseInt(formValues.month) > date.getMonth() + 1) {
        answer.answerMonth = (
          parseInt(formValues.month) -
          (date.getMonth() + 1)
        ).toString();
      } else {
        answer.answerMonth = (
          date.getMonth() +
          1 -
          parseInt(formValues.month)
        ).toString();
      }

      //calculate the year
      if (parseInt(formValues.year) > date.getFullYear()) {
        answer.answerYear = (
          parseInt(formValues.year) -
          (date.getFullYear() - 1)
        ).toString();
      } else {
        answer.answerYear = (
          date.getFullYear() -
          1 -
          parseInt(formValues.year)
        ).toString();
      }
    };

    return {
      ...toRefs(formValues),
      handleSubmit,
      ...toRefs(errors),
      inputBorder,
      inputErrorBorder,
      labelText,
      labelErrorText,
      ...toRefs(answer),
    };
  },
};
</script>
