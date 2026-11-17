<template>
  <footer id="contact" class="site-footer">
    <div class="container">
      <!-- 1. Top Brand & Call To Action Banner -->
      <div class="footer-top-cta">
        <div class="footer-brand-info">
          <NuxtLink to="/" class="footer-wordmark" aria-label="Home">
            <span class="wordmark-main">GetTeachingJobs</span>
            <span class="wordmark-dot">.vn</span>
          </NuxtLink>
          <h2 class="footer-brand-heading">
            Connecting International Educators with Premier Schools in Vietnam.
          </h2>
          <p class="footer-brand-desc">
            Find your ideal teaching position and connect directly with 200+ accredited international schools, bilingual academies, and language centers nationwide.
          </p>
        </div>

        <div class="footer-cta-actions">
          <NuxtLink to="/jobs/search" class="footer-btn-primary">
            <span>Find Teaching Jobs</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </NuxtLink>
          <NuxtLink to="/jobs/upload" class="footer-btn-outline">
            <span>Post a Free Job</span>
            <span class="btn-arrow" aria-hidden="true">→</span>
          </NuxtLink>
        </div>
      </div>

      <!-- 2. Main Navigation Link Columns (4 cols) -->
      <div class="footer-nav-grid">
        <div class="footer-col">
          <h3 class="footer-col-title">For Teachers</h3>
          <ul class="footer-nav-list">
            <li><NuxtLink to="/jobs/search">Search Teaching Jobs</NuxtLink></li>
            <li><NuxtLink :to="{ path: '/jobs/search', query: { postType: 'Hot' } }">Latest Teaching Jobs</NuxtLink></li>
            <li><NuxtLink :to="{ path: '/jobs/search', query: { postType: 'Urgent' } }">Urgent Hiring</NuxtLink></li>
            <li><NuxtLink to="/companies">Schools &amp; Language Centers</NuxtLink></li>
            <li><NuxtLink to="/blog">Teacher Guides &amp; Resources</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-col-title">For Schools &amp; Recruiters</h3>
          <ul class="footer-nav-list">
            <li><NuxtLink to="/jobs/upload">Post a Job Opening</NuxtLink></li>
            <li><NuxtLink to="/companies">School Directory</NuxtLink></li>
            <li><NuxtLink to="/auth/register">Create School Account</NuxtLink></li>
            <li><NuxtLink to="/auth/login">Employer Sign In</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col">
          <h3 class="footer-col-title">About GetTeachingJobs</h3>
          <ul class="footer-nav-list">
            <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
            <li><NuxtLink to="/policy#chinh-sach-quyen-rieng-tu">Privacy Policy</NuxtLink></li>
            <li><NuxtLink to="/policy#dieu-khoan-dieu-kien">Terms of Service</NuxtLink></li>
          </ul>
        </div>

        <div class="footer-col footer-col-contact">
          <h3 class="footer-col-title">Support &amp; Contact</h3>
          <div class="footer-contact-info">
            <a v-if="phoneNumber" :href="telHref" class="footer-contact-link">
              <span class="contact-label">Hotline:</span>
              <strong>{{ phoneNumber }}</strong>
            </a>
            <a v-if="email" :href="mailtoHref" class="footer-contact-link">
              <span class="contact-label">Email:</span>
              <strong>{{ email }}</strong>
            </a>
            <p class="footer-support-time">
              Support Hours: Mon – Fri (8:00 AM – 6:00 PM ICT)
            </p>
          </div>
        </div>
      </div>

      <!-- 3. Accordion Section: Popular Job Searches -->
      <div class="footer-searches-section">
        <h3 class="footer-searches-heading">Popular Teaching Searches</h3>

        <div class="footer-accordions">
          <!-- Item 1: Popular Searches (Default Open) -->
          <div class="accordion-item" :class="{ 'is-open': accordions.popular }">
            <button
              type="button"
              class="accordion-trigger"
              :aria-expanded="accordions.popular"
              @click="toggleAccordion('popular')"
            >
              <span>Popular Searches</span>
              <span class="accordion-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
            <div v-show="accordions.popular" class="accordion-body">
              <div class="search-links-grid">
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'English Teacher' } }">English Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Math Teacher' } }">Math Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Science Teacher' } }">Science Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Kindergarten Teacher' } }">Kindergarten Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Primary School Teacher' } }">Primary School Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'IELTS Teacher' } }">IELTS Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Teaching Assistant' } }">Teaching Assistant</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Computer Science Teacher' } }">Computer Science Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'STEM Teacher' } }">STEM / STEAM Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Physics Teacher' } }">Physics Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Chemistry Teacher' } }">Chemistry Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Biology Teacher' } }">Biology Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Chinese Teacher' } }">Chinese Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Japanese Teacher' } }">Japanese Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'French Teacher' } }">French Teacher</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Physical Education' } }">Physical Education (PE)</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Item 2: By Subject & Role -->
          <div class="accordion-item" :class="{ 'is-open': accordions.bySubject }">
            <button
              type="button"
              class="accordion-trigger"
              :aria-expanded="accordions.bySubject"
              @click="toggleAccordion('bySubject')"
            >
              <span>Jobs by Subject &amp; Specialization</span>
              <span class="accordion-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
            <div v-show="accordions.bySubject" class="accordion-body">
              <div class="search-links-grid">
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Kindergarten' } }">Kindergarten Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Primary School' } }">Primary School Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'English Language Arts' } }">Language Arts Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Mathematics' } }">Mathematics Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'ESL Teacher' } }">ESL / EFL Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'History' } }">History Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Geography' } }">Geography Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'General Science' } }">Science Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Design Technology' } }">Technology Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'ICT Teacher' } }">ICT &amp; Computing Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'PE Teacher' } }">Physical Education Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Music Teacher' } }">Music &amp; Art Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Physics' } }">Physics Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Chemistry' } }">Chemistry Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'German Teacher' } }">German Teaching Jobs</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Spanish Teacher' } }">Spanish Teaching Jobs</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Item 3: By Grade Level -->
          <div class="accordion-item" :class="{ 'is-open': accordions.byPhase }">
            <button
              type="button"
              class="accordion-trigger"
              :aria-expanded="accordions.byPhase"
              @click="toggleAccordion('byPhase')"
            >
              <span>Jobs by Grade &amp; Education Level</span>
              <span class="accordion-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
            <div v-show="accordions.byPhase" class="accordion-body">
              <div class="search-links-grid">
                <NuxtLink :to="{ path: '/jobs/search', query: { grade: '1' } }">Kindergarten &amp; Early Years (EYFS)</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { grade: '2' } }">Primary School (Grades 1–5)</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { grade: '3' } }">Middle School (Grades 6–9)</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { grade: '4' } }">High School (Grades 10–12)</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { grade: '5' } }">Colleges &amp; Vocational Centers</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { grade: '6' } }">Universities &amp; Higher Education</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { grade: '7' } }">Language Academies &amp; Training Centers</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { grade: '8' } }">International &amp; Bilingual Schools</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Item 4: By City / Province -->
          <div class="accordion-item" :class="{ 'is-open': accordions.byLocation }">
            <button
              type="button"
              class="accordion-trigger"
              :aria-expanded="accordions.byLocation"
              @click="toggleAccordion('byLocation')"
            >
              <span>Jobs by Major Cities &amp; Regions</span>
              <span class="accordion-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
            <div v-show="accordions.byLocation" class="accordion-body">
              <div class="search-links-grid">
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '12' } }">Teaching Jobs in Hanoi</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '29' } }">Teaching Jobs in Ho Chi Minh City</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '21' } }">Teaching Jobs in Da Nang</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '13' } }">Teaching Jobs in Hai Phong</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '33' } }">Teaching Jobs in Can Tho</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '10' } }">Teaching Jobs in Bac Ninh</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '27' } }">Teaching Jobs in Dong Nai (Bien Hoa)</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '25' } }">Teaching Jobs in Nha Trang (Khanh Hoa)</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '26' } }">Teaching Jobs in Da Lat (Lam Dong)</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '11' } }">Teaching Jobs in Quang Ninh (Ha Long)</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '5' } }">Teaching Jobs in Thai Nguyen</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { location: '20' } }">Teaching Jobs in Hue</NuxtLink>
              </div>
            </div>
          </div>

          <!-- Item 5: Subject by City -->
          <div class="accordion-item" :class="{ 'is-open': accordions.byRoleAndLocation }">
            <button
              type="button"
              class="accordion-trigger"
              :aria-expanded="accordions.byRoleAndLocation"
              @click="toggleAccordion('byRoleAndLocation')"
            >
              <span>Subjects by Major Cities</span>
              <span class="accordion-icon" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>
            <div v-show="accordions.byRoleAndLocation" class="accordion-body">
              <div class="search-links-grid">
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'English', location: '12' } }">English Teacher in Hanoi</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'English', location: '29' } }">English Teacher in Ho Chi Minh City</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Math', location: '12' } }">Math Teacher in Hanoi</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Math', location: '29' } }">Math Teacher in Ho Chi Minh City</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Science', location: '12' } }">Science Teacher in Hanoi</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Science', location: '29' } }">Science Teacher in Ho Chi Minh City</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Kindergarten', location: '12' } }">Kindergarten Teacher in Hanoi</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Kindergarten', location: '29' } }">Kindergarten Teacher in Ho Chi Minh City</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Primary', location: '12' } }">Primary Teacher in Hanoi</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Primary', location: '29' } }">Primary Teacher in Ho Chi Minh City</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Assistant', location: '12' } }">Teaching Assistant in Hanoi</NuxtLink>
                <NuxtLink :to="{ path: '/jobs/search', query: { keyword: 'Assistant', location: '29' } }">Teaching Assistant in Ho Chi Minh City</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 4. Footer Bottom Bar -->
      <div class="footer-bottom-bar">
        <p class="footer-copyright">
          © {{ currentYear }} GetTeachingJobs.vn. All rights reserved.
        </p>

        <div class="footer-legal-links">
          <NuxtLink to="/policy#chinh-sach-quyen-rieng-tu">Privacy Policy</NuxtLink>
          <NuxtLink to="/policy#dieu-khoan-dieu-kien">Terms of Service</NuxtLink>
          <NuxtLink to="/contact">Support Contact</NuxtLink>
          <NuxtLink to="/faq">FAQ &amp; Help</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentYear = new Date().getFullYear()
const { email, phoneNumber, mailtoHref, telHref } = useAdminContactInfo()

const accordions = ref<Record<string, boolean>>({
  popular: true,
  bySubject: false,
  byPhase: false,
  byLocation: false,
  byRoleAndLocation: false,
})

const toggleAccordion = (key: string) => {
  accordions.value[key] = !accordions.value[key]
}
</script>
