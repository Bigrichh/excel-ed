<template>
  <section>
    <!-- Test Card -->
    <div
      v-if="!resultData"
      class="card card-1 flex flex-col gap-[32px] md:gap-[64px] w-full my-[120px] rounded-[32px] p-[32px] md:p-[64px] text-white"
    >
      <!-- Header w Progress Bar -->
      <div class="w-full flex flex-col gap-[32px]">
        <!-- Header -->
        <div class="flex flex-col lg:flex-row gap-[24px] lg:gap-0 justify-between items-start lg:items-center">
          <h1
            class="text-[36px] md:text-[48px] lg:text-[64px] leading-[100%] font-cg font-extrabold tracking-tighter"
          >
            Hi, Superhero!
          </h1>
          <p
            class="w-full lg:w-[510px] font-rd text-[18px] 2xl:text-[20px] leading-[130%] font-bold"
          >
            Are you ready to discover your hidden superpower? Fill out the
            questionnaire, don't overthink it, and have fun!
          </p>
        </div>

        <div v-if="startTest" class="w-full flex flex-col gap-[8px] items-end">
          <!-- Progress Bar -->
          <div
            class="w-full bg-white/20 flex items-center p-[2px] h-[8px] rounded-full"
          >
            <div
              class="bg-white h-1 rounded-full transition-all duration-300"
              :style="{ width: progressPercent + '%' }"
            ></div>
          </div>
          <div class="w-fit">
            <p
              class="font-rd text-[18px] 2xl:text-[20px] leading-[130%] font-bold"
            >
              {{ currentQuestionIndex + 1 }}/{{ totalQuestions }}
            </p>
          </div>
        </div>
      </div>

      <!-- Intro Text w Start Test Button -->
      <div v-if="!startTest" class="w-full flex flex-col gap-[32px] items-end">
        <div class="w-full flex flex-col gap-[32px]">
          <p
            class="font-rd text-[18px] 2xl:text-[20px] leading-[130%] font-bold"
          >
            The Superpower X-Ray isn’t just another personality test. It’s a
            strengths and identity discovery tool that helps students see how
            they create value in the world.
          </p>
          <p
            class="font-rd text-[18px] 2xl:text-[20px] leading-[130%] font-bold"
          >
            Built on the foundations of the Myers-Briggs and Big Five models, it
            identifies both cognitive preferences and core traits like
            intuition, logic, openness, and empathy.
          </p>
          <p
            class="font-rd text-[18px] 2xl:text-[20px] leading-[130%] font-bold"
          >
            Unlike traditional tests that simply label behavior, the Superpower
            X-Ray translates insights into practical identities like Pattern
            Finder, Clarity Creator, or Connector, helping students understand
            how they think, solve problems, and make an impact with confidence.
          </p>
        </div>
        <button
          @click="handleStart"
          class="w-full md:w-fit px-[32px] py-[14px] md:py-[16px] bg-secondaryy text-white rounded-full disabled:opacity-50 hover:bg-white hover:text-black text-[20px] font-cg font-extrabold"
        >
          Get Started
        </button>
      </div>

      <!-- Test Questions -->
      <div
        class="w-full flex flex-col gap-[64px]"
        v-if="currentQuestionIndex < totalQuestions && startTest"
      >
        <div class="w-full flex flex-col gap-[32px]">
          <h2 class="font-cg text-[24px] md:text-[36px] lg:text-[40px] font-extrabold txt-grad-dark leading-[110%]">
            {{ currentQuestionIndex + 1 }}. {{ currentQuestion.text }}
          </h2>

          <!-- Likert Scale Buttons -->
          <div class="w-full flex flex-wrap lg:flex-nowrap gap-[16px] justify-center">
            <button
              v-for="option in options"
              :key="option.label"
              @click="selectAnswer(option.value)"
              class="w-full p-[18px] md:p-[28px] lg:p-[32px] font-rd text-[16px] md:text-[20px] leading-[100%] font-bold rounded-full border-[2px] border-white text-nowrap hover:bg-white/20 transition hover:cursor-pointer"
              :class="{
                'bg-white text-[#b36452] font-semibold hover:bg-white/100 hover:cursor-default!':
                  currentAnswers[currentQuestionIndex] === option.value,
              }"
            >
              {{ option.label }}
            </button>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="w-full flex justify-between">
          <button
            @click="previousQuestion"
            :disabled="currentQuestionIndex === 0"
            class="px-[32px] py-[16px] bg-black text-white rounded-full disabled:opacity-50 hover:bg-white hover:text-black text-[20px] font-cg font-extrabold"
          >
            Previous
          </button>
          <button
            @click="nextQuestion"
            :disabled="!currentAnswers[currentQuestionIndex]"
            class="px-[32px] py-[16px] bg-secondaryy text-white rounded-full disabled:opacity-50 hover:bg-white hover:text-black text-[20px] font-cg font-extrabold"
          >
            {{
              currentQuestionIndex === totalQuestions - 1 ? "Finish" : "Next"
            }}
          </button>
        </div>
      </div>
    </div>

    <!-- Results Card -->
    <div
      v-else
      class="card card-2 flex flex-col items-center gap-[32px] w-full my-[120px] rounded-[32px] p-[32px] md:p-[64px] text-black"
    >
      <!-- Header -->
      <div class="flex flex-col items-center">
        <h3
          class="text-[36px] md:text-[48px] lg:text-[64px] leading-[100%] font-cg font-black tracking-tighter"
        >
          YOU ARE A
        </h3>
        <h3
          class="text-[36px] md:text-[48px] lg:text-[64px] leading-[100%] font-cg font-black tracking-tighter uppercase"
        >
          {{ resultData?.type }}
        </h3>
      </div>

      <!-- Intro Text w Start Test Button -->
      <div class="w-full flex flex-col gap-[32px] items-center">
        <div class="px-0 lg:px-[240px] text-center w-full flex flex-col gap-[16px]">
          <p
            class="font-rd text-[18px] 2xl:text-[20px] leading-[130%] font-bold"
          >
            {{ resultData?.quote }}
          </p>
          <p
            class="font-rd text-[18px] 2xl:text-[20px] leading-[130%] font-bold"
          >
            {{ resultData?.description }}
          </p>
        </div>

        <hr class="border-none bg-black/20 h-[4px] w-full lg:w-[710px]" />

        <div class="px-0 lg:px-[240px] text-center w-full flex flex-col gap-[16px]">
          <h4
            class="font-cg text-[32px] leading-[100%] font-black tracking-tighter"
          >
            Your World:
          </h4>
          <p
            class="font-cg text-[24px] text-black/50 leading-[100%] font-black tracking-tighter"
          >
            {{ resultData?.yourWorld }}
          </p>
        </div>
      </div>

      <button
        @click="handleStart"
        class="w-fit px-[32px] py-[16px] bg-black text-white rounded-full disabled:opacity-50 hover:bg-white hover:text-black text-[20px] font-cg font-extrabold"
      >
        Take Test Again
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "SuperheroTest",
  data() {
    return {
      // Likert scale options
      options: [
        { label: "Strongly Disagree", value: 1 },
        { label: "Disagree", value: 2 },
        { label: "Neutral", value: 3 },
        { label: "Agree", value: 4 },
        { label: "Strongly Agree", value: 5 },
      ],

      // All questions categorized
      questions: {
        patternFinder: [
          "When something is confusing, I instantly try to organize it in my head until it makes sense.",
          "I enjoy figuring things out more than being told the answer.",
          "I notice patterns in numbers, people’s behavior, or events that others don’t see.",
          "I like solving problems step by step, because I find it satisfying.",
          "When watching a mystery or playing a game, I try to predict what happens next.",
          "I love understanding the system behind how something works.",
          "If something is broken or inefficient, I immediately start thinking of ways to fix or improve it.",
        ],
        clarityCreator: [
          "I often ask 'But what does this really mean?'",
          "I get excited when I discover a deeper connection between ideas or events.",
          "I enjoy thinking about the past to understand the present.",
          "I notice details or shifts in people’s behavior that others miss.",
          "I often ask 'why' questions that others never think to ask.",
          "When people are confused, I naturally try to explain the big picture.",
          "I like uncovering truths or themes hidden beneath the surface.",
        ],
        connector: [
          "I feel energized when I’m bringing people together or starting group conversations.",
          "I naturally take the lead in group projects (even if I didn’t plan to).",
          "I enjoy helping different people understand each other’s perspectives.",
          "I love inspiring others with ideas or a shared vision.",
          "My friends come to me when they need advice or encouragement.",
          "I enjoy networking and connecting people to opportunities or each other.",
          "I feel fulfilled when I see a group moving forward together.",
        ],
      },

      // State tracking
      currentQuestionIndex: 0,
      currentAnswers: [],
      resultType: null,
      startTest: false,
      resultData: null,

      resultTypeCopy: [
        {
          type: "Clarity Creator",
          quote:
            "Maya Angelou was a clarity creator. She didn't just use words; she revealed truths that helped the word understand itself better",
          description:
            "You don't just see what is happening, you understand why. You notice details, emotions, and hidden meanings others miss. In real life you're the one who can watch a movie and explain the symbolism and cry halfway through",
          yourWorld: "Humanities  •  Arts  •  Policy  •  Law  •  Education",
        },
        {
          type: "Pattern Finder",
          quote:
            "Steve Jobs was a pattern finder, he saw connections between technology, design, and human behaviour that no one else saw, and turned them into products that changed the world",
          description:
            "Your brain is basically a detective with wi-fi. You see connections no on else sees and can turn a pile of chaos into a clear solution. In real life, you're the friend who solves the group's tech issue in 3 seconds or spots the trend before it hits tiktok",
          yourWorld: "STEM  •  Engineering  •  Research  •  Finance",
        },
        {
          type: "Connector",
          quote:
            "Nelson Mandela was a connecto, he didn't just bring people together, he united a divided nation by turning conflict into collaboration",
          description:
            "You bring people together and make things happen. You don't just talk, you inspire, organize, and lead. In real life you're the go-to group chat starter, event planner, and hype person",
          yourWorld:
            "Business  •  Leadership  •  Public Service  •   Communication",
        },
      ],
    };
  },
  computed: {
    // Flatten all category questions into a single array for iteration
    allQuestions() {
      // Combine all questions first
      const combined = [
        ...this.questions.patternFinder.map((q) => ({
          text: q,
          category: "Pattern Finder",
        })),
        ...this.questions.clarityCreator.map((q) => ({
          text: q,
          category: "Clarity Creator",
        })),
        ...this.questions.connector.map((q) => ({
          text: q,
          category: "Connector",
        })),
      ];

      // Shuffle them using Fisher-Yates algorithm
      for (let i = combined.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [combined[i], combined[j]] = [combined[j], combined[i]];
      }

      return combined;
    },

    currentQuestion() {
      return this.allQuestions[this.currentQuestionIndex];
    },
    totalQuestions() {
      return this.allQuestions.length;
    },
    progressPercent() {
      return ((this.currentQuestionIndex + 1) / this.totalQuestions) * 100;
    },
  },

  methods: {
    handleStart() {
      this.startTest = !this.startTest;
      this.resultData = null;
    },

    // Store selected answer for the current question
    selectAnswer(value) {
      this.currentAnswers[this.currentQuestionIndex] = value;
    },

    // Move to next question or show result
    nextQuestion() {
      if (this.currentQuestionIndex < this.totalQuestions - 1) {
        this.currentQuestionIndex++;
      } else {
        this.calculateResult();
      }
    },

    // Move to previous question
    previousQuestion() {
      if (this.currentQuestionIndex > 0) {
        this.currentQuestionIndex--;
      }
    },

    // Calculate final result per category
    calculateResult() {
      const categoryScores = {
        "Pattern Finder": 0,
        "Clarity Creator": 0,
        Connector: 0,
      };

      this.allQuestions.forEach((q, i) => {
        categoryScores[q.category] += this.currentAnswers[i] || 0;
      });

      // Determine highest scoring category
      const highestCategory = Object.entries(categoryScores).sort(
        (a, b) => b[1] - a[1]
      )[0][0];
      this.resultType = highestCategory;

      // Find its matching copy
      this.resultData = this.resultTypeCopy.find(
        (r) => r.type === highestCategory
      );

      this.currentQuestionIndex = this.totalQuestions; // move to results view
    },
  },
};
</script>

<style scoped>
/* Optional smooth transitions */
button {
  transition: all 0.25s ease;
}

.card-1 {
  background: url("../../assets/svgs/texture.svg") repeat 0 0 / 100px 100px,
    linear-gradient(321deg, #d2a898 1.23%, #c77c5f 49.25%, #d2a898 97.7%);
  background-blend-mode: overlay;
}

.card-2 {
  background: url("/images/home/results-gradient.webp");
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
}

.card {
  border-radius: 32px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: -1px -1px 5px 0 rgba(0, 0, 0, 0.05),
    1px 1px 5px 0 rgba(0, 0, 0, 0.05);
}

.gradient {
  border-radius: 32px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: -1px -1px 5px 0 rgba(0, 0, 0, 0.05),
    1px 1px 5px 0 rgba(0, 0, 0, 0.05);
}
</style>
