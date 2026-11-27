<template>
  <div class="ts-service-detail-page">
    <!-- 404 fallback if slug invalid -->
    <div v-if="!service" class="ts-not-found ts-container">
      <h2>Service Not Found</h2>
      <p>The requested teacher service does not exist or has been relocated.</p>
      <NuxtLink to="/teacher-support#services" class="btn-back">
        &larr; View all services
      </NuxtLink>
    </div>

    <div v-else>
      <!-- Hero Section -->
      <header class="service-hero">
        <div class="ts-container">
          <nav class="ts-breadcrumbs" aria-label="Breadcrumbs">
            <NuxtLink to="/teacher-support">Teacher Support</NuxtLink>
            <span class="sep">/</span>
            <NuxtLink to="/teacher-support#services">Services</NuxtLink>
            <span class="sep">/</span>
            <span class="current">{{ service.shortTitle }}</span>
          </nav>

          <div class="hero-header">
            <div class="hero-top-badges">
              <span class="service-num-badge">{{ service.num }}</span>
              <span v-if="service.badge" class="service-feature-badge">{{ service.badge }}</span>
            </div>

            <!-- Top Advisory Callout Banner -->
            <div v-if="service.topBanner" class="hero-top-banner">
              <svg class="banner-icon" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
              </svg>
              <span>{{ service.topBanner }}</span>
            </div>

            <h1 class="hero-title">{{ service.title }}</h1>
            <p class="hero-desc">{{ service.heroDesc }}</p>

            <div class="hero-stats" :class="{ 'is-single': !service.successRate && !service.feeMetric }">
              <div class="stat-item stat-item-turnaround">
                <div class="stat-icon-wrap turnaround">
                  <svg class="stat-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="stat-body">
                  <span class="stat-label">Estimated Turnaround</span>
                  <div class="stat-value-row">
                    <span class="stat-value">{{ service.turnaroundTime }}</span>
                  </div>
                  <p v-if="service.turnaroundNote" class="stat-note">
                    {{ service.turnaroundNote }}
                  </p>
                </div>
              </div>
              <template v-if="service.successRate">
                <div class="stat-divider" />
                <div class="stat-item">
                  <div class="stat-icon-wrap quality">
                    <svg class="stat-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="stat-body">
                    <span class="stat-label">Quality Metric</span>
                    <span class="stat-value">{{ service.successRate }}</span>
                  </div>
                </div>
              </template>
              <template v-if="service.feeMetric">
                <div class="stat-divider" />
                <div class="stat-item">
                  <div class="stat-icon-wrap fee">
                    <svg class="stat-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    </svg>
                  </div>
                  <div class="stat-body">
                    <span class="stat-label">Fee Transparency</span>
                    <span class="stat-value">{{ service.feeMetric }}</span>
                  </div>
                </div>
              </template>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content Layout -->
      <div class="service-body">
        <div class="ts-container">
          <div class="service-layout">
            <!-- Left Main Column -->
            <main class="service-main-col">
              <!-- Quick Comparison Table (if present) -->
              <section v-if="service.comparisonTable" class="content-block">
                <h2 class="block-title">{{ service.comparisonTable.title }}</h2>
                <div class="quick-table-wrapper">
                  <table class="quick-table">
                    <thead>
                      <tr v-if="service.comparisonTable.headers?.length">
                        <th v-for="(hdr, hIdx) in service.comparisonTable.headers" :key="hIdx">
                          {{ hdr }}
                        </th>
                      </tr>
                      <tr v-else>
                        <th>Visa Type</th>
                        <th>Duration</th>
                        <th>Permitted Activities</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(row, idx) in service.comparisonTable.rows" :key="idx">
                        <td class="table-type">{{ row.type }}</td>
                        <td class="table-duration">{{ row.duration }}</td>
                        <td class="table-note">{{ row.note }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div v-if="service.comparisonTable.notes?.length" class="table-extra-notes">
                  <div v-for="(note, nIdx) in service.comparisonTable.notes" :key="nIdx" class="extra-note-row">
                    <span class="note-bullet">•</span>
                    <span>{{ note }}</span>
                  </div>
                </div>
              </section>

              <!-- Who it's for -->
              <section class="content-block">
                <h2 class="block-title">Who This Service Is For</h2>
                <div class="audience-grid" :class="{ 'is-requirements': service.slug === 'job-placement' }">
                  <div
                    v-for="(aud, idx) in service.targetAudience"
                    :key="idx"
                    class="audience-card"
                  >
                    <svg v-if="service.slug !== 'job-placement'" class="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg>
                    <span class="aud-text" v-html="aud" />
                  </div>
                </div>
              </section>

              <!-- Key Deliverables -->
              <section class="content-block">
                <h2 class="block-title">Key Scope of Work &amp; Deliverables</h2>
                <div class="deliverables-list">
                  <div
                    v-for="(del, idx) in service.keyDeliverables"
                    :key="idx"
                    class="deliverable-card"
                  >
                    <div class="del-num">0{{ idx + 1 }}</div>
                    <div class="del-content">
                      <h3 class="del-title">{{ del.title }}</h3>
                      <p class="del-desc">{{ del.desc }}</p>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Required Documents -->
              <section class="content-block">
                <h2 class="block-title">Documents Required From You</h2>
                <div class="docs-checklist-box">
                  <!-- Grouped Document Sublists if defined -->
                  <div v-if="service.documentGroups?.length" class="doc-subgroups-grid">
                    <div
                      v-for="(grp, gIdx) in service.documentGroups"
                      :key="gIdx"
                      class="doc-subgroup-card"
                    >
                      <h3 class="subgroup-card-title">{{ grp.category }}</h3>
                      <ul class="docs-list">
                        <li v-for="(doc, idx) in grp.docs" :key="idx">
                          <svg class="doc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          <span>{{ doc }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Standard flat list fallback -->
                  <ul v-else class="docs-list">
                    <li v-for="(doc, idx) in service.requiredDocuments" :key="idx">
                      <svg class="doc-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <span>{{ doc }}</span>
                    </li>
                  </ul>
                  <div class="docs-note">
                    <strong>Note:</strong> {{ service.docsNote || 'Clear scans are enough for the first check.' }}
                  </div>
                </div>
              </section>

              <!-- 4-Step Execution Flow -->
              <section class="content-block">
                <h2 class="block-title">Step-by-Step Processing Timeline</h2>
                <div v-if="service.timelineNote" class="timeline-intro-note">
                  <svg class="clock-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                  </svg>
                  <span><strong>Timing Note:</strong> {{ service.timelineNote }}</span>
                </div>
                <div class="process-timeline">
                  <div
                    v-for="st in service.processSteps"
                    :key="st.step"
                    class="timeline-item"
                  >
                    <div class="timeline-badge">{{ st.step }}</div>
                    <div class="timeline-content">
                      <h3 class="timeline-title">{{ st.title }}</h3>
                      <p class="timeline-desc">{{ st.desc }}</p>
                    </div>
                  </div>
                </div>
              </section>

              <!-- Service Specific FAQs -->
              <section class="content-block">
                <h2 class="block-title">Frequently Asked Questions</h2>
                <div class="service-faqs">
                  <div
                    v-for="(faq, idx) in service.faqs"
                    :key="idx"
                    class="faq-card"
                  >
                    <h3 class="faq-q">{{ faq.q }}</h3>
                    <p class="faq-a">{{ faq.a }}</p>
                  </div>
                </div>
              </section>
            </main>

            <!-- Right Sticky Sidebar Card with Embedded Direct Inquiry Form -->
            <aside class="service-side-col">
              <div id="service-inquiry-form" class="sticky-action-card">
                <div class="side-head">
                  <span class="side-kicker">Fast Track Consultation</span>
                  <h3 class="side-title">Inquire for {{ service.shortTitle }}</h3>
                  <p class="side-tagline">We reply within 1-2 business hours.</p>
                </div>

                <!-- Success Message -->
                <div v-if="submitted" class="form-success-inline">
                  <div class="success-icon-sm">✓</div>
                  <h4>Inquiry Sent Successfully!</h4>
                  <p>
                    Thank you, {{ form.fullName || 'Teacher' }}. Our specialist will review your <strong>{{ service.shortTitle }}</strong> requirements and contact you via {{ form.preferredApp }} shortly.
                  </p>
                  <button type="button" class="btn-resubmit" @click="resetForm">
                    Submit another inquiry
                  </button>
                </div>

                <!-- Active Embedded Form -->
                <form v-else class="side-inquiry-form" @submit.prevent="handleSubmit">
                  <!-- 1. Location Toggle -->
                  <div class="ts-form-group">
                    <label>Where are you located right now? <span class="req">*</span></label>
                    <div class="ts-location-toggle">
                      <label
                        class="toggle-opt"
                        :class="{ 'is-active': form.locationType === 'inside' }"
                      >
                        <input
                          v-model="form.locationType"
                          type="radio"
                          value="inside"
                          name="sideLoc"
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
                          name="sideLoc"
                        />
                        <span>Outside Vietnam</span>
                      </label>
                    </div>

                    <!-- Optional City searchable dropdown if currently in Vietnam -->
                    <div v-if="form.locationType === 'inside'" style="margin-top: 6px;">
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

                  <!-- 2. Nationality -->
                  <div class="ts-form-group">
                    <label for="side-nationality">
                      Your Nationality <span class="req">*</span>
                    </label>
                    <v-select
                      id="side-nationality"
                      v-model="form.nationality"
                      :options="nationalityOptions"
                      taggable
                      searchable
                      class="ts-vselect"
                      placeholder="Select or type your nationality (e.g. Philippines, South Africa, UK, USA...)"
                      :disabled="submitting"
                    />
                  </div>

                  <!-- 3. Full Name -->
                  <div class="ts-form-group">
                    <label for="side-fullname">
                      Your Full Name <span class="req">*</span>
                    </label>
                    <input
                      id="side-fullname"
                      v-model="form.fullName"
                      type="text"
                      placeholder="e.g. John Michael Doe"
                      autocomplete="name"
                      required
                      :disabled="submitting"
                    />
                  </div>

                  <!-- 4. Phone Number with Country Selector (WhatsApp style) -->
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
                    <label for="side-phone">
                      Phone Number <span class="req">*</span>
                    </label>
                    <div class="ts-phone-fused-input">
                      <span class="calling-code-prefix">{{ countryCode }}</span>
                      <input
                        id="side-phone"
                        v-model="form.phoneLocal"
                        type="tel"
                        placeholder="e.g. 946 682 798"
                        autocomplete="tel"
                        required
                        :disabled="submitting"
                      />
                    </div>
                  </div>

                  <!-- 5. Preferred Chat App -->
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
                          name="sidePreferredApp"
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
                          name="sidePreferredApp"
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
                          name="sidePreferredApp"
                        />
                        <span>Email only</span>
                      </label>
                    </div>
                  </div>

                  <!-- 6. Email Address -->
                  <div class="ts-form-group">
                    <label for="side-email">
                      Email Address <span class="req">*</span>
                    </label>
                    <input
                      id="side-email"
                      v-model="form.email"
                      type="email"
                      placeholder="john@example.com"
                      autocomplete="email"
                      required
                      :disabled="submitting"
                    />
                  </div>

                  <!-- 7. Message / Specific Situation (Optional) -->
                  <div class="ts-form-group">
                    <label for="side-message">
                      Your Message &amp; Specific Requirements <span class="opt-label">(Optional)</span>
                    </label>
                    <textarea
                      id="side-message"
                      v-model="form.message"
                      rows="3"
                      placeholder="Tell us about your teaching qualifications, current visa validity, target start date, or any specific challenges (optional)..."
                      :disabled="submitting"
                    />
                  </div>

                  <!-- Submit Button -->
                  <button type="submit" class="btn-side-submit" :disabled="submitting">
                    <span v-if="submitting">Submitting Request...</span>
                    <span v-else>{{ service.ctaButtonText }} &rarr;</span>
                  </button>
                </form>

                <div class="side-guarantee">
                  <svg class="lock-icon" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                  <span>Government fees and our service fee are listed separately in your quote.</span>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <!-- Other Services Navigator -->
      <section class="related-services-strip">
        <div class="ts-container">
          <div class="strip-header">
            <h2>Explore Other Teacher Services</h2>
            <NuxtLink to="/teacher-support#services" class="view-all-btn">
              View all 6 services &rarr;
            </NuxtLink>
          </div>

          <div class="strip-grid">
            <NuxtLink
              v-for="other in otherServices"
              :key="other.slug"
              :to="`/teacher-support/services/${other.slug}`"
              class="other-service-card"
            >
              <div class="other-head">
                <span class="other-num">{{ other.num }}</span>
                <span class="other-arrow">&rarr;</span>
              </div>
              <h3 class="other-title">{{ other.title }}</h3>
              <p class="other-desc">{{ other.tagline }}</p>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { TEACHER_SERVICES } from '@/data/teacher-services'

const route = useRoute()
const slug = computed(() => route.params.slug as string)

const service = computed(() => {
  return TEACHER_SERVICES[slug.value] || null
})

const otherServices = computed(() => {
  return Object.values(TEACHER_SERVICES).filter(s => s.slug !== slug.value)
})

// Embedded Inquiry Form State
const submitting = ref(false)
const submitted = ref(false)

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
  return (selectedCountry.value as CountryCallingCode).code || '+84'
})

const nationalityOptions = [
  'South Africa',
  'Philippines',
  'United Kingdom (UK)',
  'United States (USA)',
  'Australia',
  'Canada',
  'Ireland',
  'New Zealand',
  'India',
  'Zimbabwe',
  'Nigeria',
  'Kenya',
  'Other Country',
]

const vietnamCityOptions = [
  'Hanoi',
  'Ho Chi Minh City',
  'Da Nang',
  'Hai Phong',
  'Can Tho',
  'Nha Trang',
  'Vung Tau',
  'Binh Duong',
  'Bien Hoa (Dong Nai)',
  'Hue',
  'Quang Ninh (Ha Long)',
  'Bac Ninh',
  'Other City / Province',
]

const form = ref({
  locationType: 'inside',
  city: '',
  fullName: '',
  nationality: '',
  phoneLocal: '',
  email: '',
  message: '',
  preferredApp: 'WhatsApp',
})

const handleSubmit = async () => {
  submitting.value = true
  await new Promise(r => setTimeout(r, 700))
  submitting.value = false
  submitted.value = true
}

const resetForm = () => {
  submitted.value = false
  form.value = {
    locationType: 'inside',
    city: '',
    fullName: '',
    nationality: '',
    phoneLocal: '',
    email: '',
    message: '',
    preferredApp: 'WhatsApp',
  }
}

// Dynamic SEO tags per service
useSeoMeta({
  title: () => service.value ? `${service.value.title} in Vietnam | GetTeachingJobs` : 'Teacher Service | GetTeachingJobs',
  description: () => service.value ? service.value.heroDesc : 'Comprehensive support services for international teachers in Vietnam.',
  ogTitle: () => service.value ? `${service.value.title} | Teacher Support Vietnam` : 'Teacher Support Vietnam',
  ogDescription: () => service.value ? service.value.tagline : 'Legalization, work permits, visas, and school matching in Vietnam.',
})
</script>

<style scoped lang="scss">
.ts-service-detail-page {
  background: #ffffff;
  min-height: 100vh;
  color: #1e293b;
}

.ts-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Breadcrumbs */
.ts-breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #64748b;
  margin-bottom: 24px;

  a {
    color: #475569;
    text-decoration: none;
    font-weight: 500;
    &:hover {
      color: #2563eb;
    }
  }

  .sep {
    color: #cbd5e1;
  }

  .current {
    color: #0f274a;
    font-weight: 700;
  }
}

/* Hero */
.service-hero {
  padding: 44px 0 40px;
  background: linear-gradient(180deg, #edf4fe 0%, #f8fafc 100%);
  border-bottom: 1px solid rgba(219, 234, 254, 0.65);

  .hero-top-badges {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;

    .service-num-badge {
      font-size: 13px;
      font-weight: 800;
      color: #2563eb;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 6px;
      padding: 3px 8px;
      font-variant-numeric: tabular-nums;
    }

    .service-feature-badge {
      font-size: 12px;
      font-weight: 700;
      color: #1e40af;
      background: #dbeafe;
      border-radius: 999px;
      padding: 3px 12px;
    }
  }

  .hero-top-banner {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    background: #eff6ff;
    border: 1px solid #bfdbfe;
    color: #1e40af;
    font-size: 14.5px;
    font-weight: 600;
    line-height: 1.5;
    padding: 10px 16px;
    border-radius: 10px;
    margin-bottom: 16px;
    max-width: 820px;

    .banner-icon {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
      color: #2563eb;
      margin-top: 1px;
    }
  }

  .hero-title {
    font-size: clamp(28px, 3.6vw, 42px);
    font-weight: 800;
    color: #0f274a;
    line-height: 1.25;
    letter-spacing: -0.02em;
    margin: 0 0 14px;
    max-width: 820px;
  }

  .hero-desc {
    font-size: clamp(15.5px, 1.8vw, 17.5px);
    line-height: 1.65;
    color: #475569;
    max-width: 800px;
    margin: 0 0 28px;
  }

  .hero-stats {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    gap: 20px 28px;
    padding: 16px 22px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    width: fit-content;
    max-width: 100%;
    box-shadow: 0 2px 8px -2px rgba(15, 23, 42, 0.04);

    &.is-single {
      max-width: 540px;
      border-color: #dbeafe;
      background: #ffffff;
      box-shadow: 0 4px 14px -3px rgba(37, 99, 235, 0.08);
    }

    .stat-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;

      &.stat-item-wide,
      &.stat-item-turnaround {
        max-width: 480px;
      }

      .stat-icon-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 10px;
        background: #eff6ff;
        color: #2563eb;
        flex-shrink: 0;
        margin-top: 1px;

        .stat-icon {
          width: 18px;
          height: 18px;
        }

        &.quality {
          background: #ecfdf5;
          color: #059669;
        }

        &.fee {
          background: #f1f5f9;
          color: #475569;
        }
      }

      .stat-body {
        display: flex;
        flex-direction: column;
        gap: 2px;
        min-width: 0;
      }

      .stat-label {
        font-size: 11px;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        font-weight: 700;
        color: #64748b;
      }

      .stat-value {
        font-size: 15.5px;
        font-weight: 800;
        color: #0f274a;
        line-height: 1.35;
      }

      .stat-note {
        margin: 3px 0 0;
        font-size: 13px;
        font-weight: 450;
        color: #475569;
        line-height: 1.45;
      }
    }

    .stat-divider {
      width: 1px;
      height: 38px;
      background: #e2e8f0;
      align-self: center;
      @media (max-width: 600px) {
        display: none;
      }
    }

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: stretch;
      gap: 16px;
      width: 100%;
    }
  }
}

/* Service Body Layout */
.service-body {
  padding: 56px 0 80px;

  .service-layout {
    display: grid;
    grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.75fr);
    gap: 48px;
    align-items: start;

    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  }
}

/* Main Content Blocks */
.content-block {
  margin-bottom: 48px;

  .block-title {
    font-size: 22px;
    font-weight: 800;
    color: #0f274a;
    letter-spacing: -0.015em;
    margin: 0 0 20px;
    padding-bottom: 10px;
    border-bottom: 2px solid #f1f5f9;
  }
}

/* Quick Visa Types Table */
.quick-table-wrapper {
  overflow-x: auto;
  margin-bottom: 16px;
  border-radius: 14px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
}

.quick-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  font-size: 14px;
  background: #ffffff;

  thead {
    background: #f8fafc;
    border-bottom: 1px solid #e2e8f0;

    th {
      padding: 12px 18px;
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #475569;
    }
  }

  tbody {
    tr {
      border-bottom: 1px solid #f1f5f9;
      transition: background 0.15s ease;

      &:last-child {
        border-bottom: none;
      }

      &:hover {
        background: #f8fafc;
      }
    }

    td {
      padding: 14px 18px;
      vertical-align: middle;
      color: #334155;
      line-height: 1.5;

      &.table-type {
        font-weight: 700;
        color: #0f274a;
        white-space: nowrap;
      }

      &.table-duration {
        font-weight: 600;
        color: #2563eb;
      }

      &.table-note {
        color: #475569;
      }
    }
  }
}

.table-extra-notes {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 18px;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  margin-top: 16px;

  .extra-note-row {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13.5px;
    line-height: 1.55;
    color: #334155;
    font-weight: 500;

    .note-bullet {
      color: #2563eb;
      font-weight: 800;
      font-size: 16px;
      line-height: 1.3;
    }
  }
}

/* Audience Grid */
.audience-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 14px;

  &.is-requirements {
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }

    .audience-card {
      padding: 18px 20px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.04);
      display: block;

      .aud-text {
        font-size: 13.5px;
        line-height: 1.55;
        color: #475569;
        font-weight: 450;
        display: block;

        strong {
          display: block;
          font-size: 15px;
          font-weight: 700;
          color: #0f274a;
          margin-bottom: 6px;
        }
      }
    }
  }

  .audience-card {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 14px 16px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    color: #334155;
    line-height: 1.45;

    .check-icon {
      width: 18px;
      height: 18px;
      color: #2563eb;
      flex-shrink: 0;
      margin-top: 2px;
    }
  }
}

/* Deliverables */
.deliverables-list {
  display: flex;
  flex-direction: column;
  gap: 16px;

  .deliverable-card {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 14px;
    box-shadow: 0 2px 6px rgba(15, 23, 42, 0.02);
    transition: all 0.2s ease;

    &:hover {
      border-color: #bfdbfe;
      transform: translateY(-1px);
    }

    .del-num {
      font-size: 15px;
      font-weight: 800;
      color: #2563eb;
      background: #eff6ff;
      border: 1px solid #bfdbfe;
      border-radius: 8px;
      padding: 6px 10px;
      font-variant-numeric: tabular-nums;
      flex-shrink: 0;
    }

    .del-content {
      .del-title {
        font-size: 16px;
        font-weight: 700;
        color: #0f274a;
        margin: 0 0 6px;
      }

      .del-desc {
        font-size: 14px;
        color: #64748b;
        line-height: 1.55;
        margin: 0;
      }
    }
  }
}

/* Docs Checklist */
.docs-checklist-box {
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 24px;

  .doc-subgroups-grid {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 20px;

    .doc-subgroup-card {
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 16px 18px;
      box-shadow: 0 1px 3px rgba(15, 23, 42, 0.02);

      .subgroup-card-title {
        font-size: 14.5px;
        font-weight: 700;
        color: #0f274a;
        margin: 0 0 12px;
        padding-bottom: 8px;
        border-bottom: 1px solid #f1f5f9;
      }

      .docs-list {
        margin-bottom: 0;
        gap: 10px;
      }
    }
  }

  .docs-list {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    li {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      font-size: 14.5px;
      color: #334155;
      line-height: 1.5;

      .doc-icon {
        width: 20px;
        height: 20px;
        color: #2563eb;
        flex-shrink: 0;
        margin-top: 2px;
      }
    }
  }

  .docs-note {
    padding: 12px 16px;
    background: #ffffff;
    border-left: 3px solid #2563eb;
    border-radius: 6px;
    font-size: 13px;
    color: #475569;
    line-height: 1.5;
  }
}

.timeline-intro-note {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #fefce8;
  border: 1px solid #fef08a;
  color: #854d0e;
  font-size: 13.5px;
  line-height: 1.55;
  padding: 12px 16px;
  border-radius: 10px;
  margin-bottom: 20px;

  .clock-icon {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: #ca8a04;
    margin-top: 2px;
  }
}

/* Timeline */
.process-timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;

  .timeline-item {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    position: relative;

    .timeline-badge {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: #0f274a;
      color: #ffffff;
      font-size: 14px;
      font-weight: 800;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .timeline-content {
      padding-top: 4px;

      .timeline-title {
        font-size: 16px;
        font-weight: 700;
        color: #0f274a;
        margin: 0 0 6px;
      }

      .timeline-desc {
        font-size: 14px;
        color: #64748b;
        line-height: 1.55;
        margin: 0;
      }
    }
  }
}

/* FAQs */
.service-faqs {
  display: flex;
  flex-direction: column;
  gap: 14px;

  .faq-card {
    padding: 18px 20px;
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 12px;

    .faq-q {
      font-size: 15.5px;
      font-weight: 700;
      color: #0f274a;
      margin: 0 0 8px;
    }

    .faq-a {
      font-size: 14px;
      color: #475569;
      line-height: 1.6;
      margin: 0;
    }
  }
}

/* Right Sticky Sidebar */
.service-side-col {
  position: sticky;
  top: calc(var(--app-header-height, 74px) + 72px);

  .sticky-action-card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 18px;
    padding: 28px;
    box-shadow: 0 10px 30px -6px rgba(15, 23, 42, 0.08);

    .side-kicker {
      font-size: 11.5px;
      font-weight: 800;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: #2563eb;
      display: block;
      margin-bottom: 6px;
    }

    .side-title {
      font-size: 20px;
      font-weight: 800;
      color: #0f274a;
      margin: 0 0 6px;
    }

    .side-tagline {
      font-size: 13.5px;
      color: #64748b;
      line-height: 1.5;
      margin: 0 0 20px;
    }

    .side-inquiry-form {
      display: flex;
      flex-direction: column;
      margin-bottom: 16px;

      .ts-form-group {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 18px;

        label {
          font-size: 13.5px;
          font-weight: 700;
          color: #1e293b;

          .req {
            color: #ef4444;
            margin-left: 2px;
          }

          .opt-label {
            font-weight: 500;
            color: #94a3b8;
            font-size: 12.5px;
          }
        }

        input[type='text'],
        input[type='email'],
        input[type='tel'],
        select,
        textarea {
          width: 100%;
          border: 1px solid #cbd5e1;
          background: #ffffff;
          color: #0f172a;
          font-size: 14px;
          border-radius: 10px;
          padding: 11px 14px;
          outline: none;
          font-family: inherit;
          transition: all 0.15s ease;
          box-sizing: border-box;

          &:focus {
            border-color: #2563eb;
            box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
          }

          &::placeholder {
            color: #94a3b8;
          }

          &:disabled {
            background: #f1f5f9;
            cursor: not-allowed;
          }
        }

        textarea {
          resize: vertical;
          min-height: 96px;
        }
      }

      /* Segmented Toggle for Inside / Outside Vietnam */
      .ts-location-toggle {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;

        .toggle-opt {
          border: 1.5px solid #e2e8f0;
          border-radius: 10px;
          padding: 10px 12px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 13px;
          font-weight: 600;
          color: #334155;
          background: #f8fafc;
          transition: all 0.15s ease;

          input {
            accent-color: #2563eb;
          }

          &.is-active {
            border-color: #2563eb;
            background: #eff6ff;
            color: #1d4ed8;
          }
        }
      }

      /* WhatsApp-style Fused Phone Input */
      .ts-phone-fused-input {
        display: flex;
        align-items: center;
        width: 100%;
        border: 1px solid #cbd5e1;
        background: #ffffff;
        border-radius: 10px;
        transition: all 0.15s ease;
        overflow: hidden;

        &:focus-within {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .calling-code-prefix {
          padding: 11px 14px;
          font-size: 14px;
          font-weight: 700;
          color: #1e40af;
          background: #eff6ff;
          border-right: 1px solid #dbeafe;
          user-select: none;
          flex-shrink: 0;
          min-width: 64px;
          text-align: center;
        }

        input {
          flex: 1;
          border: none !important;
          outline: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          padding: 11px 14px !important;
          font-size: 14px !important;
          color: #0f172a !important;
          background: transparent !important;
        }
      }

      /* Form Theme Formatted v-select */
      :deep(.ts-vselect) {
        width: 100%;

        .vs__dropdown-toggle {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 5px 12px;
          min-height: 44px;
          transition: all 0.15s ease;
          cursor: pointer;
        }

        &.vs--open .vs__dropdown-toggle {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .vs__selected {
          font-size: 14px;
          color: #0f172a;
          font-weight: 500;
          margin: 2px 4px 2px 0;
          padding: 0;
        }

        .vs__search {
          font-size: 14px;
          color: #0f172a;
          font-family: inherit;
          margin: 2px 0;
          padding: 0;

          &::placeholder {
            color: #94a3b8;
            font-size: 13.5px;
          }
        }

        .vs__clear {
          fill: #94a3b8;
          margin-right: 8px;
          cursor: pointer;

          &:hover {
            fill: #64748b;
          }
        }

        .vs__open-indicator {
          display: none !important;
        }

        .vs__dropdown-menu {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          box-shadow: 0 14px 30px -4px rgba(15, 23, 42, 0.12);
          padding: 6px;
          margin-top: 6px;
          max-height: 220px;
          z-index: 1000;
        }

        .vs__dropdown-option {
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 13px;
          color: #334155;
          cursor: pointer;
          transition: all 0.12s ease;

          &--highlight {
            background: #eff6ff;
            color: #1d4ed8;
            font-weight: 600;
          }

          &--selected {
            background: #dbeafe;
            color: #1e40af;
            font-weight: 700;
          }
        }
      }

      /* Radio App Group (WhatsApp / Zalo / Email) */
      .ts-app-radios {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;

        .radio-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 9999px;
          font-size: 13px;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.15s ease;

          input {
            accent-color: #2563eb;
          }

          &.is-active {
            background: #eff6ff;
            border-color: #2563eb;
            color: #1d4ed8;
          }
        }
      }

      /* Submit Button */
      .btn-side-submit {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 14px 20px;
        background: linear-gradient(135deg, #e11d48 0%, #dc2626 50%, #b91c1c 100%);
        color: #ffffff;
        font-size: 15px;
        font-weight: 700;
        border: none;
        border-radius: 12px;
        cursor: pointer;
        box-shadow: 0 4px 14px rgba(220, 38, 38, 0.35);
        transition: all 0.2s ease;
        margin-top: 6px;

        &:hover:not(:disabled) {
          filter: brightness(1.06);
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(220, 38, 38, 0.4);
        }

        &:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
      }
    }

    .form-success-inline {
      padding: 24px 16px;
      text-align: center;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 12px;
      margin-bottom: 14px;

      .success-icon-sm {
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #22c55e;
        color: #ffffff;
        font-size: 18px;
        font-weight: 800;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 10px;
      }

      h4 {
        font-size: 16px;
        font-weight: 800;
        color: #14532d;
        margin: 0 0 6px;
      }

      p {
        font-size: 13px;
        color: #166534;
        line-height: 1.5;
        margin: 0 0 14px;
      }

      .btn-resubmit {
        padding: 6px 12px;
        font-size: 12px;
        font-weight: 600;
        color: #15803d;
        background: #ffffff;
        border: 1px solid #86efac;
        border-radius: 6px;
        cursor: pointer;
      }
    }

    .side-guarantee {
      margin-top: 18px;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      font-size: 12px;
      color: #64748b;
      line-height: 1.45;

      .lock-icon {
        width: 15px;
        height: 15px;
        color: #94a3b8;
        flex-shrink: 0;
        margin-top: 2px;
      }
    }
  }
}

/* Related Services Strip */
.related-services-strip {
  padding: 60px 0;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;

  .strip-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 28px;

    h2 {
      font-size: 22px;
      font-weight: 800;
      color: #0f274a;
      margin: 0;
    }

    .view-all-btn {
      font-size: 13.5px;
      font-weight: 700;
      color: #2563eb;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .strip-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 16px;

    .other-service-card {
      padding: 20px;
      background: #ffffff;
      border: 1px solid #e2e8f0;
      border-radius: 14px;
      text-decoration: none;
      transition: all 0.2s ease;

      &:hover {
        border-color: #bfdbfe;
        transform: translateY(-2px);
        box-shadow: 0 8px 20px -4px rgba(37, 99, 235, 0.1);

        .other-arrow {
          transform: translateX(3px);
          color: #2563eb;
        }
      }

      .other-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;

        .other-num {
          font-size: 12px;
          font-weight: 800;
          color: #2563eb;
          background: #eff6ff;
          border-radius: 4px;
          padding: 1px 6px;
        }

        .other-arrow {
          font-size: 16px;
          color: #94a3b8;
          transition: transform 0.2s ease, color 0.2s ease;
        }
      }

      .other-title {
        font-size: 15.5px;
        font-weight: 700;
        color: #0f274a;
        margin: 0 0 6px;
      }

      .other-desc {
        font-size: 13px;
        color: #64748b;
        line-height: 1.45;
        margin: 0;
      }
    }
  }
}
</style>
