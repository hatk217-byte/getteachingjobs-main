<template>
  <div v-if="job" class="job-vldl-page">
    <div class="job-vldl-container">
      <!-- Breadcrumb -->
      <nav class="job-vldl-breadcrumb" aria-label="Breadcrumb">
        <ol>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <span class="sep">/</span>
          </li>
          <li>
            <NuxtLink to="/jobs/search">Teaching Jobs</NuxtLink>
            <span class="sep">/</span>
          </li>
          <li class="active" :title="job.title">
            <span>{{ job.title }}</span>
          </li>
        </ol>
      </nav>

      <!-- Top Hero Header Card -->
      <section class="job-vldl-hero-card">
        <div class="job-vldl-hero-left">
          <div
            class="job-vldl-company-logo"
            :class="{ 'has-image': !!job.companyLogo }"
          >
            <img
              v-if="job.companyLogo"
              :src="job.companyLogo"
              :alt="`${job.companyName} logo`"
              loading="lazy"
            />
            <span v-else>{{ companyLogoLetters }}</span>
          </div>

          <div class="job-vldl-hero-info">
            <div class="job-vldl-company-row">
              <NuxtLink
                v-if="job.companyId"
                :to="`/companies/${job.companyId}`"
                class="job-vldl-company-name"
              >
                {{ job.companyName }}
              </NuxtLink>
              <span v-else class="job-vldl-company-name">{{ job.companyName }}</span>

              <span class="job-vldl-badge-verified">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                Verified School
              </span>

              <span
                v-if="preview"
                class="job-vldl-badge-preview"
              >
                Preview Mode
              </span>
              <span
                v-else-if="showReviewStatus"
                class="job-vldl-badge-review"
              >
                Pending Review
              </span>
            </div>

            <h1 class="job-vldl-job-title">{{ job.title }}</h1>

            <div class="job-vldl-quick-meta">
              <div class="quick-meta-item is-salary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="2" y="6" width="20" height="12" rx="2" />
                  <circle cx="12" cy="12" r="2" />
                  <path d="M6 12h.01M18 12h.01" />
                </svg>
                <span>{{ salaryText }}</span>
              </div>

              <div class="quick-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Deadline: {{ deadlineText }}</span>
              </div>

              <div class="quick-meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{{ fullLocationText || 'All Vietnam' }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="job-vldl-hero-right">
          <template v-if="preview">
            <span class="job-vldl-preview-tag">Preview</span>
          </template>
          <template v-else-if="effectiveShowApplyActions">
            <button
              v-if="!hasApplied"
              type="button"
              class="job-vldl-apply-btn"
              @click="emit('apply', job)"
            >
              Apply Now
            </button>
            <button
              v-else
              type="button"
              class="job-vldl-apply-btn is-applied"
              disabled
            >
              ✓ Applied
            </button>
          </template>
        </div>
      </section>

      <!-- 2-Column Main Content Layout -->
      <div class="job-vldl-grid">
        <!-- LEFT COLUMN: Overview Card + Job Details Card -->
        <main class="job-vldl-col-main">
          <!-- Card 1: Job Overview -->
          <section class="job-vldl-card job-vldl-overview-card">
            <h2 class="job-vldl-card-title">Job Overview</h2>

            <div class="job-vldl-table">
              <div
                v-for="item in overviewFields"
                :key="item.label"
                class="job-vldl-table-row"
              >
                <div class="job-vldl-table-label">{{ item.label }}</div>
                <div
                  v-if="item.isHtml"
                  class="job-vldl-table-value rich-text-output"
                  v-html="item.value"
                />
                <div v-else class="job-vldl-table-value">{{ item.value }}</div>
              </div>
            </div>
          </section>

          <!-- Card 2: Detailed Job Description -->
          <section class="job-vldl-card job-vldl-detail-card">
            <h2 class="job-vldl-card-title">Detailed Job Description</h2>

            <!-- Chi tiết 1: Job Description -->
            <div class="job-vldl-section-block">
              <h3 class="job-vldl-section-subtitle">Responsibilities &amp; Duties</h3>
              <div
                v-if="hasDetailDescription"
                class="job-detail-description rich-text-output"
                v-html="job.detailDescription"
              />
              <p v-else class="text-gray-500 italic">{{ $t('common.nanValue') }}</p>
            </div>

            <!-- Chi tiết 2: Teacher Requirements -->
            <div v-if="requirementsList.length" class="job-vldl-section-block">
              <h3 class="job-vldl-section-subtitle">Qualifications &amp; Requirements</h3>
              <ul class="job-vldl-bullet-list">
                <li v-for="req in requirementsList" :key="req">
                  <span class="bullet-dot" />
                  <span>{{ req }}</span>
                </li>
              </ul>
            </div>

            <!-- Chi tiết 3: Benefits -->
            <div v-if="processedBenefits.length" class="job-vldl-section-block">
              <h3 class="job-vldl-section-subtitle">Benefits &amp; Compensation</h3>
              <ul class="job-vldl-bullet-list">
                <li v-for="b in processedBenefits" :key="b">
                  <span class="bullet-dot" />
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>

            <!-- Chi tiết 4: Specific Campus Address -->
            <div v-if="hasJobAddress" class="job-vldl-section-block">
              <h3 class="job-vldl-section-subtitle">Campus &amp; Work Location</h3>
              <div
                class="job-detail-address rich-text-output"
                v-html="job.jobAddress || job.address"
              />
            </div>

            <!-- Bottom Inline Apply Callout -->
            <div v-if="effectiveShowApplyActions && !preview" class="job-vldl-bottom-cta">
              <div class="bottom-cta-text">
                <strong>Interested in this teaching position?</strong>
                <span>Submit your application now to connect directly with the school's hiring team.</span>
              </div>
              <button
                v-if="!hasApplied"
                type="button"
                class="job-vldl-apply-btn"
                @click="emit('apply', job)"
              >
                Apply Now
              </button>
              <button
                v-else
                type="button"
                class="job-vldl-apply-btn is-applied"
                disabled
              >
                ✓ Applied
              </button>
            </div>
          </section>
        </main>

        <!-- RIGHT COLUMN: Sidebar -->
        <aside class="job-vldl-col-sidebar">
          <!-- Sidebar Card 1: About Employer -->
          <section class="job-vldl-card job-vldl-sidebar-card">
            <h3 class="sidebar-card-title">About the School</h3>

            <div class="sidebar-company-header">
              <div
                class="sidebar-company-logo"
                :class="{ 'has-image': !!job.companyLogo }"
              >
                <img
                  v-if="job.companyLogo"
                  :src="job.companyLogo"
                  :alt="job.companyName"
                  loading="lazy"
                />
                <span v-else>{{ companyLogoLetters }}</span>
              </div>
              <div class="sidebar-company-meta">
                <h4 class="sidebar-company-title">{{ job.companyName }}</h4>
                <span class="job-vldl-badge-verified">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                  Verified School
                </span>
              </div>
            </div>

            <p class="sidebar-company-desc">
              {{ companyIntroText }}
            </p>

            <div v-if="fullLocationText" class="sidebar-location-row">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{{ fullLocationText }}</span>
            </div>

            <NuxtLink
              v-if="job.companyId"
              :to="`/companies/${job.companyId}`"
              class="sidebar-company-link"
            >
              <span>View School Profile</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </NuxtLink>
          </section>

          <!-- Sidebar Card 2: Share Job -->
          <section class="job-vldl-card job-vldl-sidebar-card">
            <h3 class="sidebar-card-title">Share This Job</h3>
            <p class="sidebar-share-desc">
              Know an educator looking for this opportunity? Share this posting with them.
            </p>
            <button
              type="button"
              class="sidebar-share-btn"
              :class="{ 'is-copied': isCopied }"
              @click="copyShareLink"
            >
              <svg v-if="!isCopied" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span>{{ isCopied ? 'Link copied to clipboard!' : 'Click to copy & share link' }}</span>
            </button>
          </section>

          <!-- Sidebar Card 3: Notice for Applicants -->
          <section class="job-vldl-card job-vldl-notice-card">
            <div class="notice-card-header">
              <span class="notice-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
              </span>
              <h4 class="notice-card-title">Notice for Applicants</h4>
            </div>
            <ul class="notice-card-list">
              <li>Never pay any application, processing, or visa deposit fees upfront to recruiters.</li>
              <li>Carefully verify school credentials, campus address, and contract terms prior to signing.</li>
            </ul>
          </section>
        </aside>
      </div>

      <!-- SECTION 1 (VLDL style): Other jobs at this school/center -->
      <section v-if="companyOtherJobs && companyOtherJobs.length" class="job-vldl-other-jobs-section">
        <div class="job-vldl-card job-vldl-other-jobs-card">
          <div class="other-jobs-header">
            <h3 class="other-jobs-title">Other Teaching Jobs at {{ job.companyName }}</h3>
            <NuxtLink
              v-if="job.companyId"
              :to="`/companies/${job.companyId}`"
              class="view-all-link"
            >
              <span>View All</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </NuxtLink>
          </div>

          <div class="other-jobs-list">
            <NuxtLink
              v-for="oj in companyOtherJobs.slice(0, 2)"
              :key="oj.id"
              :to="`/jobs/${oj.id}`"
              class="other-job-item"
            >
              <div class="other-job-left">
                <div class="other-job-logo" :class="{ 'has-image': !!(oj.imageLogo || job.companyLogo) }">
                  <img
                    v-if="oj.imageLogo || job.companyLogo"
                    :src="oj.imageLogo || job.companyLogo"
                    :alt="oj.title"
                    loading="lazy"
                  />
                  <span v-else>{{ companyLogoLetters }}</span>
                </div>
                <div class="other-job-info">
                  <h4 class="other-job-title">{{ oj.title }}</h4>
                  <div class="other-job-meta">
                    <span v-if="getOtherJobLocation(oj)">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      {{ getOtherJobLocation(oj) }}
                    </span>
                    <span class="meta-dot">·</span>
                    <span>{{ getOtherJobType(oj) }}</span>
                    <span class="meta-dot">·</span>
                    <span class="other-job-salary">{{ getOtherJobSalary(oj) }}</span>
                  </div>
                </div>
              </div>

              <div class="other-job-right">
                <span class="other-job-date">{{ formatOtherJobDate(oj.postedDate) }}</span>
                <svg class="other-job-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </div>
            </NuxtLink>
          </div>
        </div>
      </section>

      <!-- SECTION 2 (VLDL style): Similar Teaching Jobs -->
      <section v-if="showSimilarJobs && similarJobs.length" class="job-vldl-similar-section">
        <div class="similar-header-row">
          <div class="similar-header-left">
            <h2 class="similar-section-title">Similar Teaching Jobs</h2>
            <p class="similar-section-desc">
              Explore more teaching opportunities tailored to your background and expertise.
            </p>
          </div>
          <NuxtLink to="/jobs/search" class="view-all-link">
            <span>View All</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </NuxtLink>
        </div>

        <div class="similar-cards-grid">
          <NuxtLink
            v-for="sj in similarJobs.slice(0, 3)"
            :key="sj.id"
            :to="`/jobs/${sj.id}`"
            class="similar-job-card"
          >
            <div class="similar-card-top">
              <div class="similar-card-logo" :class="{ 'has-image': !!sj.companyLogo }">
                <img
                  v-if="sj.companyLogo"
                  :src="sj.companyLogo"
                  :alt="`${sj.companyName} logo`"
                  loading="lazy"
                />
                <span v-else>{{ (sj.companyName || 'CT').slice(0, 2).toUpperCase() }}</span>
              </div>

              <div class="similar-card-head-content">
                <h3 class="similar-card-title">{{ sj.title }}</h3>
                <p class="similar-card-company">{{ sj.companyName }}</p>
              </div>

              <span class="similar-card-fire" title="Featured Job">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" class="text-red-500" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177 7.547 7.547 0 01-1.705-1.715.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.546 3.75 3.75 0 013.255 3.718z" clip-rule="evenodd" />
                </svg>
              </span>
            </div>

            <div class="similar-card-bottom">
              <div class="similar-card-meta">
                <span v-if="getFullLocationTextFor(sj)" class="similar-card-loc">
                  📍 {{ getFullLocationTextFor(sj).split(',')[0] }}
                </span>
                <span v-if="getFullLocationTextFor(sj) && sj.createdAt" class="meta-dot">·</span>
                <span v-if="sj.createdAt" class="similar-card-time">
                  {{ timeAgoFor(sj.createdAt) }}
                </span>
              </div>
              <div class="similar-card-salary">
                {{ formatSalaryRange(sj) }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { JobModel } from '~/models/job'
import { hasRichTextContent } from '~/utils/rich-text'
import { formatDate } from '~/utils/helper'
import { formatSalaryRange } from '~/utils/formatSalary'

const props = withDefaults(
  defineProps<{
    job: JobModel
    preview?: boolean
    previewStatusLabel?: string
    showSimilarJobs?: boolean
    showApplyActions?: boolean
    hasApplied?: boolean
    similarJobs?: JobModel[]
    companyOtherJobs?: any[]
  }>(),
  {
    preview: false,
    previewStatusLabel: '',
    showSimilarJobs: false,
    showApplyActions: true,
    hasApplied: false,
    similarJobs: () => [],
    companyOtherJobs: () => [],
  },
)

const emit = defineEmits<{
  apply: [job: JobModel]
  viewSimilar: [job: JobModel]
}>()

const { ensureLoaded, hasAppliedToJob, canApplyToJobs } = useAppliedJobs()
const { locationEnumLabel, employmentTypesEnumLabel } = useJobFilters()

const effectiveShowApplyActions = computed(
  () => props.showApplyActions && canApplyToJobs.value,
)

onMounted(() => {
  if (effectiveShowApplyActions.value && !props.preview) {
    ensureLoaded()
  }
})

const jobRef = computed(() => props.job)

const hasDetailDescription = computed(() =>
  hasRichTextContent(props.job.detailDescription),
)
const hasJobAddress = computed(() =>
  hasRichTextContent(props.job.jobAddress || props.job.address),
)

const {
  companyLogoLetters,
  showReviewStatus,
  processedBenefits,
  requirementsList,
  salaryText,
  salaryTypeText,
  fullLocationText,
  postedText,
  deadlineText,
  categoryText,
  employmentTypeText,
  gradeText,
  qualificationText,
  experienceText,
  genderText,
  benefitsPreview,
  getFullLocationTextFor,
  timeAgoFor,
} = useJobDetailView(jobRef)

const overviewFields = computed(() => {
  const hasAddr = hasRichTextContent(props.job.jobAddress || props.job.address)
  return [
    { label: 'Date Posted', value: postedText.value },
    { label: 'Application Deadline', value: deadlineText.value },
    { label: 'Subject / Category', value: categoryText.value },
    { label: 'Employment Type', value: employmentTypeText.value },
    { label: 'Grade / Level', value: gradeText.value },
    { label: 'Required Degree', value: qualificationText.value },
    { label: 'Salary', value: salaryText.value },
    { label: 'Salary Frequency', value: salaryTypeText.value },
    { label: 'Experience Required', value: experienceText.value },
    { label: 'Gender Preference', value: genderText.value },
    { label: 'Location', value: fullLocationText.value || 'All Vietnam' },
    {
      label: 'Campus Address',
      value: hasAddr ? (props.job.jobAddress || props.job.address) : 'Discussed during interview',
      isHtml: hasAddr,
    },
    { label: 'Benefits', value: benefitsPreview.value },
  ]
})

const companyIntroText = computed(() => {
  if (props.job.note?.trim()) return props.job.note.trim()
  return `${props.job.companyName || 'Employer'} is a reputable educational institution recruiting via GetTeachingJobs.vn.`
})

const getOtherJobLocation = (oj: any) => {
  if (!oj.location) return ''
  const loc = String(oj.location).split(',')[0]?.trim()
  if (!loc || loc === '0') return 'All Vietnam'
  return (
    (locationEnumLabel as Record<string, string>)?.[loc] ??
    (locationEnumLabel as Record<number, string>)?.[Number(loc)] ??
    loc
  )
}

const getOtherJobType = (oj: any) => {
  if (!oj.typeOfEmployment) return 'Full-time'
  const raw = String(oj.typeOfEmployment)
  const labels = raw
    .split(',')
    .map((k) => k.trim())
    .filter(Boolean)
    .map((k) => {
      return (
        (employmentTypesEnumLabel as Record<string, string>)?.[k] ??
        (employmentTypesEnumLabel as Record<number, string>)?.[Number(k)] ??
        k
      )
    })
  return labels.length > 0 ? labels.join(' / ') : raw
}

const getOtherJobSalary = (oj: any) => {
  return formatSalaryRange(oj)
}

const formatOtherJobDate = (d?: Date | string) => {
  if (!d) return ''
  return formatDate(new Date(d))
}

const isCopied = ref(false)
const copyShareLink = async () => {
  try {
    if (typeof window !== 'undefined') {
      await navigator.clipboard.writeText(window.location.href)
      isCopied.value = true
      useNotify({ message: 'Job link copied to clipboard!', type: 'success' })
      setTimeout(() => {
        isCopied.value = false
      }, 3000)
    }
  } catch {
    // ignore
  }
}
</script>
