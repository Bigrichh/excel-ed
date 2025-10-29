<template>
  <div class="w-full h-full flex flex-col justify-between" ref="dropdownRef">
    <!-- Header -->
    <div class="w-full flex items-center justify-between">
      <h3
        class="txt-grad-dark font-cg text-[24px] font-extrabold leading-[100%] text-transparent"
      >
        Register to become a mentor
      </h3>

      <div>
        <p class="text-[14.5px] font-rd font-bold text-nowrap">
          Step {{ currentStep }} of 4
        </p>
      </div>
    </div>

    <!-- Form Steps -->
    <div>
      <!-- Step 1: Personal Info -->
      <div v-if="currentStep === 1" class="flex flex-col gap-[16px]">
        <input
          class="input"
          type="text"
          v-model="form.fullName"
          placeholder="Enter your full name"
        />
        <input
          class="input"
          type="email"
          v-model="form.email"
          placeholder="Enter your email address"
        />
        <input
          class="input"
          type="text"
          v-model="form.phone"
          placeholder="Enter your phone number (WhatsApp preferred)"
        />
        <input
          class="input"
          type="url"
          v-model="form.linkedin"
          placeholder="Enter your LinkedIn profile URL"
        />
        <input
          class="input"
          type="text"
          v-model="form.country"
          placeholder="Enter your country of residence"
        />
      </div>

      <!-- Step 2: Professional Background -->
      <div v-if="currentStep === 2" class="flex flex-col gap-[16px]">
        <input
          class="input"
          type="text"
          v-model="form.jobTitle"
          placeholder="Enter your current job title"
        />

        <!-- Industry dropdown -->
        <div class="dropdown">
          <div class="dropdown-toggle input" @click="toggleDropdown">
            {{
              form.industries.length
                ? form.industries.join(", ")
                : "Select the fields you are best suited to mentor in (select one or more)"
            }}
          </div>

          <div v-if="isOpen" class="dropdown-menu">
            <div v-for="option in industries" :key="option">
              <label>
                <input
                  type="checkbox"
                  :value="option"
                  v-model="form.industries"
                />
                {{ option }}
              </label>
            </div>
            <!-- <input type="text" v-model="form.otherIndustry" placeholder="Other (please specify)"
                            class="input mt-[8px]" /> -->
          </div>
        </div>

        <!-- Bio -->
        <textarea
          class="input rounded-[32px]!"
          v-model="form.bio"
          placeholder="Short professional bio (150–200 words)"
          rows="3"
        ></textarea>

        <!-- Headshot -->
        <div class="w-full flex flex-col gap-[8px]">
          <label class="text-[14.5px] font-rd font-bold ml-[8px]" for="headshot"
            >Please Upload a Professional Headshot</label
          >
          <input
            id="headshot"
            class="input"
            type="file"
            accept="image/*"
            @change="handleFileUpload"
          />
        </div>
      </div>

      <!-- Step 3: Mentorship Preferences -->
      <div v-if="currentStep === 3" class="flex flex-col gap-[16px]">
        <div>
          <p class="text-[14.5px] font-rd font-bold ml-[8px]">
            What type of students would you like to mentor?
          </p>
          <div class="flex flex-col gap-[4px] p-[16px] font-rd font-medium">
            <label
              v-for="option in menteeTypes"
              :key="option"
              class="flex items-center gap-[8px]"
            >
              <input
                type="checkbox"
                :value="option"
                v-model="form.menteeTypes"
              />
              {{ option }}
            </label>
          </div>
        </div>

        <div class="select-wrapper">
          <select
            v-model="form.meetingFrequency"
            class="input select-with-icon"
          >
            <option value="" disabled>
              How often would you like to meet with mentees?
            </option>
            <option v-for="option in frequencies" :key="option" :value="option">
              {{ option }}
            </option>
          </select>

          <!-- Custom Chevron Icon -->
          <svg
            class="chevron-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>

        <div class="select-wrapper">
          <select v-model="form.meetingFormat" class="input select-with-icon">
            <option value="" disabled>Preferred meeting format</option>
            <option
              v-for="option in meetingFormats"
              :key="option"
              :value="option"
            >
              {{ option }}
            </option>
          </select>

          <!-- Custom Chevron Icon -->
          <svg
            class="chevron-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 9l6 6 6-6"
            />
          </svg>
        </div>

        <div>
          <p class="text-[14.5px] font-rd font-bold ml-[8px]">
            Would you be open to mentoring more than one student at a time?
          </p>
          <div class="flex items-center p-[8px] gap-[24px] ml-[16px]">
            <label class="font-rd font-medium flex items-center gap-[8px]"
              ><input
                type="radio"
                value="Yes"
                v-model="form.multipleStudents"
              />
              Yes</label
            >
            <label class="font-rd font-medium flex items-center gap-[8px]"
              ><input type="radio" value="No" v-model="form.multipleStudents" />
              No</label
            >
            <input
              v-if="form.multipleStudents === 'Yes'"
              type="number"
              min="2"
              v-model="form.howManyStudents"
              placeholder="If yes, how many?"
              class="input"
            />
          </div>
        </div>
      </div>

      <!-- Step 4: Mentor Agreement -->
      <div v-if="currentStep === 4" class="flex flex-col gap-[16px]">
        <p class="font-rd font-bold text-[14.5px]">
          By joining the Excel Ed Mentorship Program, I understand that:
        </p>
        <div v-for="(agreement, index) in agreements" :key="index">
          <label class="font-rd font-medium">
            <input
              type="checkbox"
              v-model="form.agreements"
              :value="agreement"
            />
            <p class="inline ml-[8px]">
              {{ agreement }}
            </p>
          </label>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons -->
    <div class="w-full flex gap-[24px]">
      <button
        class="w-full btn bg-transparent px-[32px] py-[12px] text-[18px] hover:bg-black hover:text-white"
        v-if="currentStep > 1"
        @click="prevStep"
      >
        Back
      </button>

      <button 
        class="w-full btn bg-primaryy px-[32px] py-[12px] text-[18px] hover:bg-black hover:text-white"
        v-if="currentStep < 4"
        @click="nextStep"
      >
        Next
      </button>

      <button disbaled
        class="w-full btn bg-primaryy px-[32px] py-[12px] text-[18px] hover:bg-black hover:text-white"
        v-if="currentStep === 4"
        @click="submitForm"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Mentors-Form",

  data() {
    return {
      currentStep: 1,
      isOpen: false,
      industries: [
        "Technology & Innovation",
        "Business, Entrepreneurship & Finance",
        "Education & Social Impact",
        "Agriculture & Sustainability",
        "Health & Biotechnology",
        "Policy, Governance & International Development",
        "Academia & Research",
      ],
      menteeTypes: [
        "Highschool Students",
        "University Students",
        "Early Career Professionals",
      ],
      frequencies: ["Once a month", "Twice a month", "Flexible"],
      meetingFormats: ["Video Call", "Audio Call", "Chat/Messaging"],
      agreements: [
        "I will commit to at least 2 hours of mentorship per month, at times that work for me.",
        "I’m committed to supporting students as a mentor during the first 6 months of the pilot program.",
        "My profile and headshot may appear on the Excel Ed mentorship platform once it launches in November.",
        "I will communicate respectfully and maintain professionalism in all interactions.",
        "I acknowledge that I have read this form in its entirety and understand the above.",
      ],
      form: {
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        country: "",
        jobTitle: "",
        industries: [],
        bio: "",
        menteeTypes: [],
        meetingFrequency: "",
        meetingFormat: "",
        multipleStudents: "",
        howManyStudents: "",
        agreements: [],
        headshot: null,
      },
    };
  },

  methods: {
    nextStep() {
      if (this.currentStep < 4) this.currentStep++;
    },
    prevStep() {
      if (this.currentStep > 1) this.currentStep--;
    },

    // Dropdown controls
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    closeDropdown(event) {
      const dropdown = this.$refs.dropdownRef;
      if (dropdown && !dropdown.contains(event.target)) {
        this.isOpen = false;
      }
    },

    async submitForm() {
      try {
        const response = await fetch(
          "https://script.google.com/macros/s/AKfycbyhTmIwqQkRd8FfD1kQsgXjGS33RRtKK6BOmlgB2zmk5WmKgHQsUZwakGJvWq04hBE/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.form),
          }
        );

        if (response.type === "opaque") {
          // We cannot read response, but the request went through
          alert("✅ Form submitted successfully!");
        } else {
          const result = await response.json();
          if (result.status === "success") {
            alert("✅ Form submitted successfully!");
          } else {
            alert("❌ Error submitting form: " + result.message);
          }
        }
      } catch (err) {
        console.error("Submission error:", err);
        alert("❌ Failed to submit form. Check console for details.");
      }
    },

    resetForm() {
      this.form = {
        fullName: "",
        email: "",
        phone: "",
        linkedin: "",
        country: "",
        jobTitle: "",
        industries: [],
        bio: "",
        headshot: null,
        menteeTypes: [],
        meetingFrequency: "",
        meetingFormat: "",
        multipleStudents: "",
        howManyStudents: "",
        agreements: [],
      };
      this.currentStep = 1;
    },

    async handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "YOUR_UPLOAD_PRESET"); // from Cloudinary

        // Upload to Cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        this.form.headshot = data.secure_url; // Save URL to form
        console.log("Headshot uploaded:", data.secure_url);
      } catch (err) {
        console.error("Headshot upload failed:", err);
        alert("❌ Failed to upload headshot.");
      }
    },
  },

  mounted() {
    document.addEventListener("click", this.closeDropdown);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.closeDropdown);
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
