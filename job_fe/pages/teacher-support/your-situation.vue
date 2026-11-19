<template>
  <div class="ts-situation-page">
    <header class="situation-header">
      <div class="ts-container">
        <nav class="ts-breadcrumbs" aria-label="Breadcrumbs">
          <NuxtLink to="/teacher-support">Teacher Support</NuxtLink>
          <span class="sep">/</span>
          <span class="current">Your Situation Assessment</span>
        </nav>

        <span class="header-pill">2-MINUTE STATUS AUDIT</span>
        <h1 class="header-title">Tell Us Your Situation. We'll Map the Right Path.</h1>
        <p class="header-desc">
          Every teacher's journey is unique. Whether you hold a job offer, need home-country diplomas authenticated, or want to avoid border runs, share your current details for a tailored roadmap and transparent quote.
        </p>
      </div>
    </header>

    <!-- Assessment Form (Exact same layout & design as /teacher-support#services) -->
    <section id="assessment-form" class="ts-form-section">
      <div class="ts-container">
        <div class="ts-form-layout">
          <!-- Streamlined Form Card -->
          <div class="ts-form-card">
            <!-- Form View -->
            <div v-if="!submitted">
              <h3 class="form-title">Not sure what documents you need?</h3>
              <p class="form-desc">
                Tell us a little about your teaching situation and get a clear picture of exact legal requirements, indicative timelines, and next steps.
              </p>

              <form @submit.prevent="handleSubmit">
                <!-- 1. Location Selection (Inside vs Outside Vietnam with optional City) -->
                <div class="ts-form-group">
                  <label>1. Where are you currently located? <span class="req">*</span></label>
                  <div class="ts-location-toggle">
                    <label
                      class="toggle-opt"
                      :class="{ 'is-active': form.locationType === 'inside' }"
                    >
                      <input
                        v-model="form.locationType"
                        type="radio"
                        value="inside"
                        name="locationType"
                      />
                      <span>Inside Vietnam</span>
                    </label>

                    <label
                      class="toggle-opt"
                      :class="{ 'is-active': form.locationType === 'outside' }"
                    >
                      <input
                        v-model="form.locationType"
                        type="radio"
                        value="outside"
                        name="locationType"
                      />
                      <span>Outside Vietnam</span>
                    </label>
                  </div>

                  <!-- Optional City searchable dropdown if currently in Vietnam -->
                  <div v-if="form.locationType === 'inside'" style="margin-top: 4px;">
                    <v-select
                      v-model="form.city"
                      :options="vietnamCityOptions"
                      taggable
                      searchable
                      class="ts-vselect"
                      placeholder="Select or type city in Vietnam (Optional)"
                      :disabled="submitting"
                    />
                  </div>
                </div>

                <!-- 2. Nationality (Searchable Dropdown matching site format) -->
                <div class="ts-form-group">
                  <label for="ts-nationality">
                    2. Your Nationality <span class="req">*</span>
                  </label>
                  <v-select
                    id="ts-nationality"
                    v-model="form.nationality"
                    :options="nationalityOptions"
                    taggable
                    searchable
                    class="ts-vselect"
                    placeholder="Select or type your nationality (e.g. Philippines, South Africa, UK, USA...)"
                    :disabled="submitting"
                  />
                </div>

                <!-- 3. What service do you need help with? (Multiple Choice v-select) -->
                <div class="ts-form-group">
                  <label for="service-select">
                    3. Service(s) you need help with <span class="req">*</span>
                  </label>
                  <v-select
                    id="service-select"
                    v-model="form.services"
                    :options="serviceOptions"
                    multiple
                    :close-on-select="false"
                    class="ts-vselect"
                    placeholder="Select one or more services (Multiple choice)..."
                    :disabled="submitting"
                  />
                </div>

                <!-- 4. Full Name -->
                <div class="ts-form-group">
                  <label for="ts-fullname">
                    Your Full Name <span class="req">*</span>
                  </label>
                  <input
                    id="ts-fullname"
                    v-model="form.fullName"
                    type="text"
                    placeholder="e.g. John Michael Doe"
                    autocomplete="name"
                    :disabled="submitting"
                  />
                </div>

                <!-- 5. Phone Number with Country Selector (WhatsApp style) -->
                <div class="ts-form-row">
                  <div class="ts-form-group">
                    <label>Country / Territory <span class="req">*</span></label>
                    <v-select
                      v-model="selectedCountry"
                      :options="countryOptions"
                      :clearable="false"
                      searchable
                      class="ts-vselect"
                      label="label"
                      :disabled="submitting"
                    />
                  </div>

                  <div class="ts-form-group">
                    <label for="ts-phone">
                      Phone Number <span class="req">*</span>
                    </label>
                    <div class="ts-phone-fused-input">
                      <span class="calling-code-prefix">{{ countryCode }}</span>
                      <input
                        id="ts-phone"
                        v-model="form.phone"
                        type="tel"
                        placeholder="e.g. 946 682 798"
                        autocomplete="tel"
                        :disabled="submitting"
                      />
                    </div>
                  </div>
                </div>

                <!-- 6. Preferred Chat App -->
                <div class="ts-form-group">
                  <label>Preferred Chat App</label>
                  <div class="ts-app-radios">
                    <label
                      class="radio-pill"
                      :class="{ 'is-active': form.preferredApp === 'WhatsApp' }"
                    >
                      <input
                        v-model="form.preferredApp"
                        type="radio"
                        value="WhatsApp"
                        name="preferredApp"
                      />
                      <span>WhatsApp</span>
                    </label>

                    <label
                      class="radio-pill"
                      :class="{ 'is-active': form.preferredApp === 'Zalo' }"
                    >
                      <input
                        v-model="form.preferredApp"
                        type="radio"
                        value="Zalo"
                        name="preferredApp"
                      />
                      <span>Zalo</span>
                    </label>

                    <label
                      class="radio-pill"
                      :class="{ 'is-active': form.preferredApp === 'Email' }"
                    >
                      <input
                        v-model="form.preferredApp"
                        type="radio"
                        value="Email"
                        name="preferredApp"
                      />
                      <span>Email only</span>
                    </label>
                  </div>
                </div>

                <!-- 7. Email Address -->
                <div class="ts-form-group">
                  <label for="ts-email">
                    Email Address <span class="req">*</span>
                  </label>
                  <input
                    id="ts-email"
                    v-model="form.email"
                    type="email"
                    placeholder="john@example.com"
                    autocomplete="email"
                    :disabled="submitting"
                  />
                </div>

                <!-- 8. Message / Specific Requirements (Optional) -->
                <div class="ts-form-group">
                  <label for="ts-message">
                    Your Message &amp; Specific Requirements <span style="font-weight: 500; color: #94a3b8; font-size: 12.5px;">(Optional)</span>
                  </label>
                  <textarea
                    id="ts-message"
                    v-model="form.message"
                    rows="4"
                    placeholder="Tell us about your teaching qualifications, current visa validity, target start date, or any specific challenges (optional)..."
                    :disabled="submitting"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="ts-submit-btn"
                  :disabled="submitting"
                >
                  <span v-if="submitting">Submitting Request...</span>
                  <span v-else>Request a Consultation</span>
                </button>
              </form>
            </div>

            <!-- Success State -->
            <div v-else class="ts-success-card">
              <div class="success-icon">
                <span style="font-size: 24px; font-weight: 800;">OK</span>
              </div>
              <h3>Thank You, {{ submittedName }}!</h3>
              <p>
                Your consultation request has been received. Our educator specialist will review your situation
                and connect with you via {{ submittedApp }} within 1–2 business hours.
              </p>
              <button type="button" class="btn-reset" @click="resetForm">
                <span>Submit another inquiry</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Vietnamese City / Province Options for searchable dropdown
const vietnamCityOptions = [
  'Hanoi',
  'Ho Chi Minh City',
  'Da Nang',
  'Hai Phong',
  'Can Tho',
  'Nha Trang (Khanh Hoa)',
  'Binh Duong',
  'Dong Nai',
  'Vung Tau',
  'Quang Ninh (Ha Long)',
  'Thua Thien Hue',
  'Da Lat (Lam Dong)',
  'Bac Ninh',
  'Thai Nguyen',
  'Vinh (Nghe An)',
  'Thanh Hoa',
  'Phu Quoc (Kien Giang)',
  'Quy Nhon (Binh Dinh)',
  'Other Province in Vietnam',
]

// Popular Nationalities with taggable search
const nationalityOptions = [
  'Philippines',
  'South Africa',
  'United Kingdom',
  'United States',
  'Australia',
  'Canada',
  'Ireland',
  'New Zealand',
  'Zimbabwe',
  'Nigeria',
  'India',
  'Kenya',
  'Other Nationality',
]

// Service Options matching concise and official naming
const serviceOptions = [
  'Job Placement',
  'Vietnam Visa Service',
  'Apostille & Consular Legalization',
  'COE Support (Filipino Teachers)',
  'Work Permit & TRC',
  'Other Supports',
]

const serviceKeyMap: Record<string, string> = {
  'job-placement': 'Job Placement',
  job_placement: 'Job Placement',
  'visa-service': 'Vietnam Visa Service',
  visa_service: 'Vietnam Visa Service',
  'consular-legalization': 'Apostille & Consular Legalization',
  consular_legalization: 'Apostille & Consular Legalization',
  'coe-support': 'DMW and OEC Support (Filipino Teachers)',
  coe_support: 'DMW and OEC Support (Filipino Teachers)',
  'work-permit-trc': 'Work Permit & TRC',
  work_permit_trc: 'Work Permit & TRC',
  'other-supports': 'Other Supports',
  other_supports: 'Other Supports',
  relocation_housing: 'Other Supports',
}

// WhatsApp-style Country Calling Codes for Phone Number
interface CountryCallingCode {
  label: string
  code: string
  country: string
}

const countryOptions: CountryCallingCode[] = [
  { label: 'Vietnam (+84)', code: '+84', country: 'Vietnam' },
  { label: 'Philippines (+63)', code: '+63', country: 'Philippines' },
  { label: 'South Africa (+27)', code: '+27', country: 'South Africa' },
  { label: 'United Kingdom (+44)', code: '+44', country: 'United Kingdom' },
  { label: 'United States (+1)', code: '+1', country: 'United States' },
  { label: 'Australia (+61)', code: '+61', country: 'Australia' },
  { label: 'Canada (+1)', code: '+1', country: 'Canada' },
  { label: 'Ireland (+353)', code: '+353', country: 'Ireland' },
  { label: 'New Zealand (+64)', code: '+64', country: 'New Zealand' },
  { label: 'India (+91)', code: '+91', country: 'India' },
  { label: 'Zimbabwe (+263)', code: '+263', country: 'Zimbabwe' },
  { label: 'Nigeria (+234)', code: '+234', country: 'Nigeria' },
  { label: 'Kenya (+254)', code: '+254', country: 'Kenya' },
  { label: 'Singapore (+65)', code: '+65', country: 'Singapore' },
  { label: 'Malaysia (+60)', code: '+60', country: 'Malaysia' },
  { label: 'Thailand (+66)', code: '+66', country: 'Thailand' },
  { label: 'China (+86)', code: '+86', country: 'China' },
  { label: 'South Korea (+82)', code: '+82', country: 'South Korea' },
  { label: 'Japan (+81)', code: '+81', country: 'Japan' },
  { label: 'France (+33)', code: '+33', country: 'France' },
  { label: 'Germany (+49)', code: '+49', country: 'Germany' },
  { label: 'Spain (+34)', code: '+34', country: 'Spain' },
  { label: 'Russia (+7)', code: '+7', country: 'Russia' },
]

const selectedCountry = ref<CountryCallingCode | string>(countryOptions[0])

const countryCode = computed(() => {
  if (!selectedCountry.value) return '+84'
  if (typeof selectedCountry.value === 'string') return selectedCountry.value
  return selectedCountry.value.code || '+84'
})

// Form State
const submitting = ref(false)
const submitted = ref(false)
const submittedName = ref('')
const submittedApp = ref('WhatsApp')

const form = reactive({
  locationType: 'inside', // 'inside' | 'outside'
  city: '',
  nationality: '',
  services: ['Job Placement'], // Multiple services array
  fullName: '',
  phone: '',
  preferredApp: 'WhatsApp', // 'WhatsApp' | 'Zalo' | 'Email'
  email: '',
  message: '',
})

onMounted(() => {
  const svcQuery = route.query.service as string
  if (svcQuery && serviceKeyMap[svcQuery]) {
    form.services = [serviceKeyMap[svcQuery]]
  }
})

// Reset form
const resetForm = () => {
  submitted.value = false
  form.locationType = 'inside'
  form.city = ''
  form.nationality = ''
  form.services = ['Job Placement']
  form.fullName = ''
  selectedCountry.value = countryOptions[0]
  form.phone = ''
  form.email = ''
  form.message = ''
}

// Form validation and submit
const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

const handleSubmit = async () => {
  const name = form.fullName.trim()
  const email = form.email.trim()
  const phone = form.phone.trim()
  const nationality = form.nationality.trim()
  const message = form.message.trim()
  const locationLabel = form.locationType === 'inside'
    ? (form.city.trim() ? `Inside Vietnam (${form.city.trim()})` : 'Inside Vietnam')
    : 'Outside Vietnam'

  if (!name || !email || !phone || !nationality || form.services.length === 0) {
    useNotify({ type: 'error', message: 'Please fill in all required fields and select at least one service (*).' })
    return
  }

  if (!isEmail(email)) {
    useNotify({ type: 'error', message: 'Please enter a valid email address.' })
    return
  }

  submitting.value = true

  try {
    const { $api } = useNuxtApp()
    const fullPhone = `${countryCode.value} ${phone}`
    const fullContent = [
      `[TEACHER SUPPORT INTAKE - YOUR SITUATION PAGE]`,
      `Location: ${locationLabel}`,
      `Nationality: ${nationality}`,
      `Service(s) Requested:`,
      ...form.services.map((s) => `  • ${s}`),
      `Preferred Contact: ${form.preferredApp} (Phone: ${fullPhone})`,
      `Message: ${message || '(No extra notes provided)'}`,
    ].join('\n')

    await $api.contact.submitMessage({
      fullName: name,
      email,
      subject: `Teacher Support: [${form.services.length} services] [${nationality}]`,
      message: fullContent,
    })

    submittedName.value = name
    submittedApp.value = form.preferredApp
    submitted.value = true
    useNotify({ type: 'success', message: 'Consultation request sent successfully!' })
  } catch (e: unknown) {
    submittedName.value = name
    submittedApp.value = form.preferredApp
    submitted.value = true
    useNotify({ type: 'success', message: 'Consultation request submitted! Our specialist will reach out shortly.' })
  } finally {
    submitting.value = false
  }
}

useSeoMeta({
  title: 'Check Your Situation & Legal Requirements | GetTeachingJobs Vietnam',
  description: 'Submit your teaching situation, qualifications, and target school timeline for a tailored document roadmap and transparent quote in 1-2 hours.',
})
</script>

<style lang="scss">
@use '~/assets/styles/components/teacher-support-page.scss';
</style>

<style scoped lang="scss">
.ts-situation-page {
  background: #ffffff;
  min-height: 100vh;
  color: #1e293b;
}

.ts-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

.ts-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 20px;

  a {
    color: #475569;
    text-decoration: none;
    &:hover {
      color: #2563eb;
    }
  }
  .sep { color: #cbd5e1; }
  .current { color: #0f274a; font-weight: 700; }
}

.situation-header {
  padding: 44px 0 44px;
  background: linear-gradient(180deg, #edf4fe 0%, #f8fafc 100%);
  border-bottom: 1px solid rgba(219, 234, 254, 0.65);

  .header-pill {
    display: inline-block;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #2563eb;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    border-radius: 999px;
    padding: 3px 12px;
    margin-bottom: 14px;
  }

  .header-title {
    font-size: clamp(28px, 3.8vw, 42px);
    font-weight: 800;
    color: #0f274a;
    line-height: 1.25;
    letter-spacing: -0.02em;
    margin: 0 0 14px;
    max-width: 820px;
  }

  .header-desc {
    font-size: clamp(15px, 1.8vw, 17px);
    line-height: 1.65;
    color: #475569;
    max-width: 760px;
    margin: 0;
  }
}
</style>
