<script setup>
import FeaturesCard from '@/components/FeaturesCard.vue'
import farm from '@/assets/img/habanero-farm.jpeg'
import axios from 'axios'
import { reactive, ref } from 'vue'

const formData = reactive({
  email: '',
  isLoading: false,
})

const successMessage = ref('')
const errorMessage = ref('')

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwV5AlayxDAOxc3D1_1FEJiNkvItGWYlnnpMeU8wYZ_OdBqkJTpWpbM9YnXiPwXoY57Ng/exec'

const submitForm = async () => {
  successMessage.value = ''
  errorMessage.value = ''

  if (!formData.email.trim()) {
    errorMessage.value = 'Please enter your email address.'
    return
  }

  formData.isLoading = true
  try {
    const params = new URLSearchParams({ email: formData.email })
    const response = await axios.post(SCRIPT_URL, params.toString(), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    console.log(response.data)
    successMessage.value = "You're on the list! We'll be in touch soon."
    formData.email = ''
  } catch (error) {
    console.error(error)
    errorMessage.value = 'Something went wrong. Please try again.'
  } finally {
    formData.isLoading = false
  }
}
</script>

<template>
  <div class="px-6 py-6 lg:px-20 max-w-7xl mx-auto w-full">
    <div class="flex flex-col items-center py-10">
      <div>
        <span
          class="flex gap-2 items-center rounded-full bg-primary/10 px-3 py-0.5 border border-primary/20 text-sm text-primary"
        >
          <i class="pi pi-sparkles"></i>
          <p class="">Join 100+ Farmers</p>
        </span>
      </div>
      <div class="flex flex-col gap-2 items-center mt-4">
        <h1 class="text-xl md:text-4xl font-bold">Join the Future of Farming</h1>
        <p class="text-sm text-gray-600 text-center">
          Be among the first to eliminate guesswork and gain real-time market intelligence.<br />
          Secure your spot on the FarmSight waitlist.
        </p>
      </div>
      <!-- Input Field -->
      <form @submit.prevent="submitForm" class="mt-5">
        <div
          class="flex gap-2 items-center mt-4 border border-gray-200 shadow rounded-lg px-1 py-1"
        >
          <div class="flex gap-2 items-center bg-white">
            <i class="pi pi-envelope text-gray-400 pl-2"></i>
            <input
              v-model="formData.email"
              type="email"
              placeholder="Enter your email"
              class="outline-none text-sm max-w-2/3"
            />
          </div>
          <button
            type="submit"
            :disabled="formData.isLoading"
            class="flex gap-2 items-center bg-green-900 text-white text-sm px-6 py-2 rounded-lg disabled:opacity-60"
          >
            <span v-if="formData.isLoading">Sending...</span>
            <span v-else
              >Join Waitlist <i class="pi pi-arrow-right" style="font-size: 0.7rem"></i
            ></span>
          </button>
        </div>
        <p class="text-xs text-gray-400 text-center mt-4">
          No spam. Only essential updates for early members.
        </p>
        <p v-if="successMessage" class="text-xs text-green-600 text-center mt-2 font-medium">
          {{ successMessage }}
        </p>
        <p v-if="errorMessage" class="text-xs text-red-500 text-center mt-2 font-medium">
          {{ errorMessage }}
        </p>
      </form>
      <div class="flex md:flex-row flex-col gap-10 mt-16">
        <FeaturesCard
          icon="lock-open"
          title="Prority Access"
          description="Be among the first to eliminate guesswork and gain real-time market intelligence."
        />
        <FeaturesCard
          icon="money-bill"
          title="Founder Pricing"
          description="Lock in special introductory pricing for early members."
        />
        <FeaturesCard
          icon="chart-line"
          title="Exclusive Insight"
          description="Recieve weekly updates on market trends and insights."
        />
      </div>

      <div class="flex justify-center mt-16 w-full h-96 shadow-xl rounded-2xl">
        <img :src="farm" alt="Farm" class="w-full h-full object-cover shadow rounded-2xl" />
      </div>
    </div>
  </div>
</template>
