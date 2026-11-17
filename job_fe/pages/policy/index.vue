<template>
  <section class="legal-page">
    <div class="container legal-shell">
      <header class="legal-hero">
        <span class="legal-eyebrow">GetTeachingJobs.vn</span>
        <h1>Terms of Service &amp; Privacy Policy</h1>
        <p>GetTeachingJobs is committed to protecting and respecting the privacy of all educators and school partners.</p>
        <time datetime="2025-10-20">Last updated: October 2025</time>
      </header>

      <nav class="legal-index" aria-label="Policy index">
        <a
          v-for="item in navItems"
          :key="item.id"
          :href="`#${item.id}`"
          :class="{ 'is-active': activeSectionId === item.id }"
          @click.prevent="scrollToSection(item.id)"
        >
          {{ item.label }}
        </a>
      </nav>

      <article class="legal-card">
        <section class="legal-section" id="dieu-khoan-dieu-kien">
          <h2>Terms &amp; Conditions</h2>
          <p>
            By accessing or using GetTeachingJobs.vn, you agree to comply with and be bound by the terms
            and conditions outlined below. If you do not agree with any part of these terms, please discontinue use of our service.
          </p>

          <h3>Scope of Service</h3>
          <p>
            GetTeachingJobs.vn is a specialized platform connecting international educators and teachers with
            schools, language centers, and educational institutions across Vietnam. We provide tools for job posting,
            job search, candidate profiles, and direct applications.
          </p>

          <h3>User Accounts</h3>
          <ul>
            <li>
              You are responsible for ensuring the accuracy and validity of all information provided when creating or updating your account.
            </li>
            <li>
              You are responsible for maintaining the confidentiality of your login credentials and must notify us immediately if you suspect unauthorized access.
            </li>
            <li>
              We reserve the right to suspend or terminate accounts that engage in fraudulent behavior, misrepresentation, or violation of applicable laws.
            </li>
          </ul>

          <h3>Responsibilities of Educators &amp; Applicants</h3>
          <ul>
            <li>Applicants must provide honest, accurate, and up-to-date resume and qualification details.</li>
            <li>
              Applicants must not upload misleading, offensive, or copyright-infringing content, or violate any third-party rights.
            </li>
          </ul>

          <h3>Responsibilities of Schools &amp; Employers</h3>
          <ul>
            <li>
              Employers must publish genuine, transparent, and accurate job descriptions complying with Vietnamese labor and education regulations.
            </li>
            <li>
              Employers must respect candidate privacy and not use candidate information for purposes unrelated to recruitment without prior consent.
            </li>
          </ul>

          <h3>Changes to Terms</h3>
          <p>
            GetTeachingJobs may update these Terms &amp; Conditions periodically. Any updates will be posted on this page and become effective upon publication.
          </p>
        </section>

        <section class="legal-section" id="chinh-sach-quyen-rieng-tu">
          <h2>Privacy Policy</h2>
          <p>By using GetTeachingJobs.vn, you consent to the collection and use of information in accordance with this Privacy Policy.</p>

          <h3>Data We Collect</h3>
          <h4>For Teachers &amp; Candidates</h4>
          <ul>
            <li>
              Personal Details: Full name, date of birth, phone number, email address, nationality, current location.
            </li>
            <li>
              Professional Profile: Curriculum Vitae (CV/Resume), teaching experience, education, certifications (TEFL/TESOL/CELTA), and profile photo.
            </li>
            <li>
              Application Data: Information submitted through application drawers, cover letters, and communications with our support team.
            </li>
          </ul>

          <h4>For Schools &amp; Employers</h4>
          <ul>
            <li>Organization Info: School name, business registration/tax code, campus address, official phone number, contact email.</li>
            <li>Contact Representative: Name and title of the authorized hiring manager.</li>
            <li>Job Postings: Details regarding vacant teaching positions, requirements, and compensation.</li>
          </ul>

          <h4>For All Visitors</h4>
          <ul>
            <li>
              Technical Data: IP address, browser type, operating system, visit duration, pages viewed.
            </li>
            <li>Cookie Data: As explained in the Cookies and Tracking Technologies section below.</li>
          </ul>

          <h3>How We Use Your Data</h3>
          <ul>
            <li>
              Providing Core Services: Creating and maintaining accounts, posting jobs, and facilitating job applications.
            </li>
            <li>
              Connecting Teachers &amp; Schools: Displaying applicant profiles to hiring schools and notifying teachers of relevant job openings.
            </li>
            <li>
              Service Improvement: Analyzing usage patterns to enhance platform speed, responsiveness, and user experience.
            </li>
            <li>
              Communication &amp; Support: Answering support requests and delivering essential service notifications.
            </li>
            <li>
              Security &amp; Compliance: Preventing fraud, spam, and ensuring community integrity.
            </li>
          </ul>

          <h3>Data Sharing &amp; Disclosure</h3>
          <p>
            GetTeachingJobs does not sell, rent, or trade your personal information to third parties. Your data is shared strictly under the following conditions:
          </p>
          <ul>
            <li>
              Between Applicants and Employers: When you apply for a job or enable profile visibility, your submitted materials are shared with the prospective school.
            </li>
            <li>
              Trusted Service Providers: We partner with trusted cloud hosting and transactional email providers who adhere to strict data security agreements.
            </li>
            <li>
              Legal Requirements: If required by law enforcement or competent Vietnamese authorities to protect legal rights and public safety.
            </li>
          </ul>

          <h3>Data Security</h3>
          <p>
            We implement industry-standard encryption, SSL protection, and access controls to safeguard your data. While we strive to maintain top-tier security, no digital transmission over the internet is completely infallible.
          </p>

          <h3>Your Rights</h3>
          <ul>
            <li>Access: Request a copy of the personal information we hold about you.</li>
            <li>Correction: Update or amend inaccurate profile and account details anytime.</li>
            <li>Deletion: Request full deletion of your account and related records.</li>
            <li>Opt-Out: Unsubscribe from marketing communications at any time.</li>
          </ul>
          <p>
            To exercise your rights, manage your account settings or contact us directly at
            <a v-if="email" :href="mailtoHref">{{ email }}</a><template v-else>support</template>.
          </p>

          <h3>Cookies and Tracking Technologies</h3>
          <p>
            We use essential and analytics cookies to personalize your browsing experience, remember session state, and understand user traffic. You may manage or disable cookies via your browser preferences.
          </p>
        </section>

        <section class="legal-section" id="lien-he-phap-ly">
          <h2>Contact Us</h2>
          <p>
            If you have any questions or feedback regarding our Terms &amp; Privacy Policy, please get in touch with our support team.
          </p>
          <dl class="legal-contact-list">
            <div>
              <dt>Email</dt>
              <dd><a v-if="email" :href="mailtoHref">{{ email }}</a><span v-else>—</span></dd>
            </div>
            <div v-if="phoneNumber">
              <dt>Phone / WhatsApp</dt>
              <dd><a :href="telHref">{{ phoneNumber }}</a></dd>
            </div>
            <div>
              <dt>Website</dt>
              <dd><NuxtLink to="/">getteachingjobs.vn</NuxtLink></dd>
            </div>
          </dl>
        </section>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const router = useRouter()
const route = useRoute()
const { email, phoneNumber, mailtoHref, telHref } = useAdminContactInfo()

const navItems = [
  { id: 'dieu-khoan-dieu-kien', label: 'Terms & Conditions' },
  { id: 'chinh-sach-quyen-rieng-tu', label: 'Privacy Policy' },
  { id: 'lien-he-phap-ly', label: 'Contact Us' },
] as const

type SectionId = (typeof navItems)[number]['id']

/** Hash cũ (#terms, #privacy, #contact) vẫn hoạt động */
const HASH_ALIASES: Record<string, SectionId> = {
  terms: 'dieu-khoan-dieu-kien',
  privacy: 'chinh-sach-quyen-rieng-tu',
  contact: 'lien-he-phap-ly',
  'dieu-khoan-dieu-kien': 'dieu-khoan-dieu-kien',
  'chinh-sach-quyen-rieng-tu': 'chinh-sach-quyen-rieng-tu',
  'lien-he-phap-ly': 'lien-he-phap-ly',
}

function resolveSectionId(rawHash: string): SectionId | null {
  const key = rawHash.replace(/^#/, '')
  if (!key) return null
  return HASH_ALIASES[key] ?? null
}

const activeSectionId = computed<SectionId>(() => {
  return resolveSectionId(route.hash || '') ?? 'dieu-khoan-dieu-kien'
})

function elementFor(id: SectionId) {
  if (typeof document === 'undefined') return null
  return document.getElementById(id)
}

function isPolicyPath() {
  const p = route.path.replace(/\/$/, '') || '/'
  return p === '/policy' || p.endsWith('/policy')
}

function scrollToSection(id: SectionId) {
  router.replace({ path: route.path, hash: `#${id}` })
}

onMounted(() => {
  const q = route.query.tab
  if (typeof q === 'string') {
    const mapped = resolveSectionId(q)
    if (mapped) {
      const newQuery = { ...route.query }
      delete (newQuery as Record<string, unknown>).tab
      router.replace({ path: route.path, query: newQuery, hash: `#${mapped}` })
    }
  }
})

watch(
  () => [isPolicyPath() ? 1 : 0, route.hash] as const,
  () => {
    if (!isPolicyPath()) return

    const id = resolveSectionId(route.hash || '')
    if (!id) return

    nextTick(() => {
      requestAnimationFrame(() => {
        const el = elementFor(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      })
    })
  },
  { immediate: true, flush: 'post' },
)

useHead({
  title: 'Terms of Service & Privacy Policy - GetTeachingJobs',
  meta: [
    {
      name: 'description',
      content:
        'Terms of Service, Privacy Policy, and contact information for GetTeachingJobs.vn',
    },
  ],
})
</script>

<style lang="scss">
@import '~/assets/styles/components/legal-page.scss';
</style>

